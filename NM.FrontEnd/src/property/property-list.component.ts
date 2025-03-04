import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(
      (data) => {
        this.properties = data; // Store API response
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }
}
