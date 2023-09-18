import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: "gifs-search-box",
    template: `
        <h5>Buscar: </h5>
        <input type="text"
        class="form-control"
        placeholder="Buscar gifs"
        (keyup.enter)="searchTag()"
        #txtInputElement
        >
    `
})

export class SearchBoxComponent {

    @ViewChild("txtInputElement")
    public inputElement!: ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsService) { }

    searchTag() {
        const inputTag = this.inputElement.nativeElement.value;
        this.gifsService.searchTags(inputTag)
        this.inputElement.nativeElement.value = "";
    }
}