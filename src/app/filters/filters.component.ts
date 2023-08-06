import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  filterBy(filterType: string) {
    // Implement the logic to handle the filter selection
    // You can emit an event or use a service to communicate with the TodoListComponent
  }
}

