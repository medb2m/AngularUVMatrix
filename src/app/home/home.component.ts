import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    private titleService : Title,
    private projectService : ProjectsService
  )
  {
    this.titleService.setTitle('UVM - Home')
  }

  featuredProject = {} as Project

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectById(1)
  }

  
}
