import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ["./home-page.css"]
})
export class HomePageComponent {
    constructor(private gifsService: GifsService) {}

    get gifs(): Array<Gif> {
        return this.gifsService.gifList;
    }
}
