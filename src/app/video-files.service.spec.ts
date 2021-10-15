import { TestBed } from '@angular/core/testing';

import { VideoFilesService } from './video-files.service';

describe('VideoFilesService', () => {
  let service: VideoFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
