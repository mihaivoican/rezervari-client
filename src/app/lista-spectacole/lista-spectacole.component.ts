import { Component } from '@angular/core';
import { Spectacol, SpectacolService } from '../spectacol.service';
import {MatDialog} from '@angular/material/dialog';
import { EditorComponent } from './editor/editor.component';
import { Router } from '@angular/router';

const ELEMENT_DATA: Spectacol[] = [
 
];



@Component({
  selector: 'app-lista-spectacole',
  templateUrl: './lista-spectacole.component.html',
  styleUrls: ['./lista-spectacole.component.css']
})
export class ListaSpectacoleComponent {
  displayedColumns: string[] = ['id', 'nume', 'nrLocuri', 'dataStart','dataFinal',"commands"];
  dataSource = ELEMENT_DATA;

  constructor(private service:SpectacolService, public dialog: MatDialog, private router:Router){
    this.loadData()
    console.log("Async done");
  }

  async loadData() {
    this.dataSource = await this.service.getSpectacole();
    console.log(this.dataSource);
  }

  addData(){
    console.log("Addauga spectacol");
    let spectacol:Spectacol = {}
    const dialogRef = this.dialog.open(EditorComponent, {
      data: spectacol,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.loadData();
    });
  }

  editData(spectacol:Spectacol){
    console.log(spectacol);
    const dialogRef = this.dialog.open(EditorComponent, {
      data: spectacol,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.loadData();
    });
  }

  removeData(spectacol:Spectacol){
    console.log(spectacol);
    this.service.removeSpectacol(spectacol.id).then(() => {
      this.loadData();
    });
  }

  goToRezervari(spectacol:Spectacol){
    this.router.navigateByUrl(`rezervari/${spectacol.id}`)
  }
}

