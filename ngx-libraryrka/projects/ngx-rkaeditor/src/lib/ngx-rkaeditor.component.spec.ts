import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRkaeditorComponent } from './ngx-rkaeditor.component';

describe('NgxRkaeditorComponent', () => {
  let component: NgxRkaeditorComponent;
  let fixture: ComponentFixture<NgxRkaeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxRkaeditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxRkaeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
