import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  constructor(
    private titleService : Title,
    private projectService : ProjectsService
  )
  {
    this.titleService.setTitle('UVM - Portfolio')
  }

  projects = {} as Project[]

  ngOnInit(): void {
      this.projects = this.projectService.getProjects()
  }
}
