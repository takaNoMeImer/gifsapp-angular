import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
    @Input()
    public gifs: Array<Gif> = [];
}
