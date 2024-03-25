import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  project : Project = {
    id : 0,
    name : 'Sample Angular App',
    summary : 'This is a sample project for demonstration purposes.',
    description : '',
    projectLink : '',
    tags : ['Angular', 'TypeScript'],
    pictures : []
  }

  constructor(
    private titleService : Title
  ){
    this.titleService.setTitle('UVM - Portfolio')
  }
}
