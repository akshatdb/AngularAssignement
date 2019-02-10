import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';

const ELEMENT_DATA: Item[] = [
  { checked: false, desc: 'Paper Absorbant', code: "10006290", details:'what', udm: "KT", quantity: "500", delivery: "15-oct-2018", template: "-", delete: ''},
  { checked: false, desc: 'Cetani Number Improver', code: "9998214764",details:'what',  udm: "KL", quantity: "300", delivery: "15-oct-2018", template: "-", delete: ''},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['checked', 'desc', 'code', 'details', 'udm', 'quantity', 'delivery', 'template', 'delete'];
  dataSource = ELEMENT_DATA;
}
