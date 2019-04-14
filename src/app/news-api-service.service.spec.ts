import { TestBed } from '@angular/core/testing';

import { NewsApiServiceService } from './news-api-service.service';

describe('NewsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsApiServiceService = TestBed.get(NewsApiServiceService);
    expect(service).toBeTruthy();
  });
});
