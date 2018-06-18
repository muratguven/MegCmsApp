/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminmenuService } from './adminmenu.service';

describe('Service: Adminmenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminmenuService]
    });
  });

  it('should ...', inject([AdminmenuService], (service: AdminmenuService) => {
    expect(service).toBeTruthy();
  }));
});
