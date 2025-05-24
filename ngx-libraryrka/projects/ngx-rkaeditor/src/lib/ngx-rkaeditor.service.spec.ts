import { TestBed } from '@angular/core/testing';

import { NgxRkaeditorService } from './ngx-rkaeditor.service';

describe('NgxRkaeditorService', () => {
  let service: NgxRkaeditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRkaeditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
