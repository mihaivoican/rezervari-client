import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { Spectacol, SpectacolService, Rezervare, IntervalOrar } from '../spectacol.service';

@Component({
  selector: 'app-rezervari',
  templateUrl: './rezervari.component.html',
  styleUrls: ['./rezervari.component.css']
})
export class RezervariComponent implements OnInit {
    id:any
    spectacol!:Spectacol
    listaZile:any[] = []
    selectedDate!:Date
    selectedOra:any
    selectedInterval:any;
    listaOre:any = []
    constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:SpectacolService, public dialog: MatDialog,){
      
    }

    ngOnInit(): void {
      this.activatedRoute.params
        .subscribe(params => {
          console.log(params); // { id }
          this.id = params['id']
          // get spectacol by id from service
          this.service.getByIdSpectacol(this.id).then((result:any) =>{
            this.spectacol = result
            this.getZileDistincte(this.spectacol)
          });
          //afisare zile + intervale
          // buton pe fiecare interval - se deschide popup pt rezervare
        }
      );
    }

    getZileDistincte(spectacol:Spectacol){
      if(spectacol){
        // if(spectacol.dataFinal && spectacol.dataStart){
        //   let d = spectacol.dataStart;
        //   this.listaZile.push(d);
        //   while(d <= spectacol.dataFinal){
        //     d.setDate(d.getDate() + 1)
        //     this.listaZile.push(d)
        //   }
        // }
        spectacol.intervale?.forEach(element => {
          if(element && element.zi && this.listaZile.indexOf(element.zi) === -1) {
            this.listaZile.push(element.zi)
          }
        });
      }
    }

    ziSelectata(e:any){
      console.log(e);
      this.selectedOra = null;
      this.listaOre = this.spectacol.intervale?.filter(interval => interval.zi == this.selectedDate).map(zi => zi.ora)
    }

    oraSelectata(e:any){
      // afisam rezervarile
      // gasim intervalul dupa data si ora selectata
      this.selectedInterval = this.spectacol.intervale?.find(interval => interval.zi=== this.selectedDate && interval.ora === this.selectedOra)
      console.log(this.selectedInterval);
      
    }

    getLocOcupat(nrloc:any){
      return this.selectedInterval.rezervari.find((r:any) => r.nrLoc == nrloc)
    }

    rezervareLoc(nrLoc:any){
      // cautam daca a apasat pe o rezervare existenta
      let rez = this.selectedInterval.rezervari.find((r:any) => r.nrLoc === nrLoc)
      if(rez){
        return
      }
      //afisam popup pt introducere mail si telefon
      let rezervare:Rezervare =  {
        email:'',
        telefon:'',
        nrLoc:nrLoc
      }
      const dialogRef = this.dialog.open(DetailsComponent, {
        data: rezervare,
      });
      dialogRef.afterClosed().subscribe(result => {
        // la close popup salvam rezervarea
        console.log('The dialog was closed');
        console.log(result);
        if(result){
          // salvam intervalul pe backend
          this.selectedInterval.rezervari.push(rezervare);
          this.service.saveInterval(this.selectedInterval).then(() => {
          });
        }
      });            
    }

    getRezervareTooltip(nrLoc:any){
      let rez = this.selectedInterval.rezervari.find((r:any) => r.nrLoc === nrLoc)
      if(rez){
        return `Rezervat de: ${rez.email} `
      }else{
        return ''
      }
    }

    back() {
      this.router.navigateByUrl('home')
    }
}
