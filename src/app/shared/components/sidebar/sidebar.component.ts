import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    constructor(private gifsService: GifsService) {} 

    @ViewChild("buttonRefresh")
    public buttonChild!: ElementRef<HTMLButtonElement>;

    get tags() {
        return this.gifsService.tagsHistory
    }

    refreshSearch(tag: string) {
        this.gifsService.searchTags(tag)
    }
}
