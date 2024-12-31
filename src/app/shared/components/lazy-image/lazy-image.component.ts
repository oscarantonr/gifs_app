import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,

  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input()
  public url?: string;

  @Input()
  public alt?: string = '';

  hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Url is required');
    }
  }

  onLoad() {
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
