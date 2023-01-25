import { Component, Inject, OnChanges } from '@angular/core';
import { Spectacol, SpectacolService, IntervalOrar } from 'src/app/spectacol.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MomentDateAdapter} from '@angular/material-moment-adapter'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  method:'insert' | 'update'
  
  constructor(
    public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) public spectacol: Spectacol,
    private service:SpectacolService
  ) {
    if(spectacol.id){
      this.method = 'update'
    }else{
      this.method = 'insert'
    }
    
  }

  onCancelEdit() {
    this.dialogRef.close();
  }

  saveSpectacol(){
    this.service.saveSpectacol(this.spectacol, this.method).then(() => {
      console.log(this.spectacol)
      this.dialogRef.close();
    })
  }

  addInterval(){
    if(!this.spectacol.intervale){
      this.spectacol.intervale = [];
    }
    this.spectacol.intervale.push({zi:this.spectacol.dataStart, ora:'00',rezervari:[]})
  }

  deleteInterval(interval:IntervalOrar){
    // apelez serviciul daca avem id, apoi il stergem din lista de intervale ale spectacolului
    if(interval.id){
      this.service.removeInterval(interval.id).then(() => {
        this.spectacol.intervale?.splice(this.spectacol.intervale.indexOf(interval), 1);
      })
    }else{
      this.spectacol.intervale?.splice(this.spectacol.intervale.indexOf(interval), 1);
    }
  }
}
