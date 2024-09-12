// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

interface Contact {
  name: string;
  phone: string;
  email: string;
  addresses: string[];
  longitude: number;
  latitude: number;
  randomAddress: string; // Random address out of the list
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = [
    {
      name: 'John Doe',
      phone: '+123456789',
      email: 'john.doe@example.com',
      addresses: ['123 Main St', '456 Side St', '789 Top St'],
      longitude: -122.084,
      latitude: 37.422,
      randomAddress: ''
    },
    {
      name: 'Jane Smith',
      phone: '+987654321',
      email: 'jane.smith@example.com',
      addresses: ['321 Elm St', '654 Oak St'],
      longitude: -73.935242,
      latitude: 40.730610,
      randomAddress: ''
    }
  ];

  displayedColumns: string[] = ['name', 'phone', 'email', 'address', 'longitude', 'latitude'];

  private map: any;

  constructor() {}

  ngOnInit() {
    // Set random addresses
    this.contacts.forEach(contact => {
      contact.randomAddress = this.getRandomAddress(contact.addresses);
    });

    // Initialize map
    this.initMap();
  }

  getRandomAddress(addresses: string[]): string {
    const randomIndex = Math.floor(Math.random() * addresses.length);
    return addresses[randomIndex];
  }

  initMap(): void {
    this.map = L.map('map').setView([37.422, -122.084], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Add markers for contacts
    this.contacts.forEach(contact => {
      const marker = L.marker([contact.latitude, contact.longitude]);
      marker.addTo(this.map)
        .bindPopup(`<b>${contact.name}</b><br>${contact.randomAddress}`);
    });
  }
}
