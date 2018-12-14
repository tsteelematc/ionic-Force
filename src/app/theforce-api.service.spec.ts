import { TestBed } from '@angular/core/testing';

import { TheforceAPIService } from './theforce-api.service';

describe('TheforceAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheforceAPIService = TestBed.get(TheforceAPIService);
    expect(service).toBeTruthy();
  });
});
