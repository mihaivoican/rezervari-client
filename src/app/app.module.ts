import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSpectacoleComponent } from './lista-spectacole/lista-spectacole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { EditorComponent } from './lista-spectacole/editor/editor.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { RezervariComponent } from './rezervari/rezervari.component';
import { MatSelectModule } from '@angular/material/select';
import { DetailsComponent } from './rezervari/details/details.component'
import {MatTooltipModule} from '@angular/material/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    ListaSpectacoleComponent,
    EditorComponent,
    RezervariComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'DD.MM.YYYY',
          monthYearLabel: 'DD.MM.YYYY',
          dateA11yLabel: 'DD.MM.YYYY',
          monthYearA11yLabel: 'DD.MM.YYYY',
        },
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
