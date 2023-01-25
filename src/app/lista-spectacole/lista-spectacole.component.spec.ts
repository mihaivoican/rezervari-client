import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSpectacoleComponent } from './lista-spectacole.component';

describe('ListaSpectacoleComponent', () => {
  let component: ListaSpectacoleComponent;
  let fixture: ComponentFixture<ListaSpectacoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSpectacoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSpectacoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
