import { TestBed } from '@angular/core/testing';

import { UserSerdataService } from './user-serdata.service';

describe('UserSerdataService', () => {
  let service: UserSerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
