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

  isCollapsed : boolean = true
  typescript : boolean = false
  angular : boolean = false
  javascript : boolean = false
  java : boolean = false
  python : boolean = false
  csharp : boolean = false
  nodejs : boolean = false
  aspnet : boolean = false
  reactjs : boolean = false
  filtering : boolean = false

  ngOnInit(): void {
      this.projects = this.projectService.getProjects()
  }

  Filter() {
    let filterTags: Tag[] = []

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET)
    }
    if(this.reactjs){
      filterTags.push(Tag.REACT)
    }

    if ( this.typescript || this.angular || this.java || this.javascript || this.python || this.csharp || this.nodejs || this.reactjs || this.aspnet) {
      this.filtering = true
    }else {
      this.filtering = false
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags)
  }

  ResetFilters(){
    this.typescript = false
    this.angular = false
    this.javascript = false
    this.java = false
    this.python = false
    this.csharp = false
    this.nodejs = false
    this.aspnet = false
    this.reactjs = false
    this.filtering = false

    this.projects = this.projectService.getProjects()
  }
}
