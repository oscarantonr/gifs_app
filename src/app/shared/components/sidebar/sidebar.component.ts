import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @ViewChild('list-group-item-action')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  clickTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
