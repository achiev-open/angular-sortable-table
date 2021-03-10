import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: Array<string> = ['Apple', 'Banana', 'Orange', 'Peach', 'Kiwi'];
  private draggedIndex: number;
  public draggedOverIndex: number;

  allowDrop($event, index): void {
    this.draggedOverIndex = index;
    $event.preventDefault();
  }

  onDragStart(index): void {
    this.draggedIndex = index;
  }

  onDrop($event, index): void {
    $event.preventDefault();
    const item = this.items[this.draggedIndex];
    this.items.splice(this.draggedIndex, 1);
    this.items.splice(index, 0, item);
    this.draggedIndex = -1;
    this.draggedOverIndex = -1;
  }
}
