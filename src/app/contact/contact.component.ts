import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contries:any=[
    "Algeria",
    "Egypt",
    "Libyan Arab Jamahiriya",
    "Morocco",
    "Tunisia",
    "Western Sahara",
    "Sub-Saharan Africa",
    "Eastern Africa",
    "Burundi",
    "Comoros",
    "Djibouti",
    "Eritrea",
    "Ethiopia",
    "Kenya",
    "Madagascar",
    "Malawi",
    "Mauritius",
    "Mayotte",
    "Mozambique",
    "Réunion",
    "Rwanda",
    "Somalia",
    "Sudan a",
    "Uganda",
    "United Republic of Tanzania",
    "Zambia",
    "Zimbabwe"
  ]

}
