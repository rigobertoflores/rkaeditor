import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ngx-rkaeditorComponent } from './ngx-rkaeditor.component';

describe('ngx-rkaeditorComponent', () => {
  let component: ngx-rkaeditorComponent;
  let fixture: ComponentFixture<ngx-rkaeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ngx-rkaeditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ngx-rkaeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
