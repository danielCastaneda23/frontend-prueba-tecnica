import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from './service/project.service';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass',
})
export class ProjectsComponent {
  public projects: { [key: string]: any }[] = [];
  constructor(private projectService: ProjectService) {
    this.getAllProjects();
  }

  getAllProjects = async () => {
    const token = localStorage.getItem('token') ?? '';
    const projectsResponse = await this.projectService.getProjects(token);
    this.projects = projectsResponse.response;
    console.log(
      '🚀 ~ ProjectsComponent ~ getAllProjects= ~ this.projects:',
      this.projects
    );
  };

  async deleteProject(id: string) {
    const token = localStorage.getItem('token') ?? '';
    try {
      await this.projectService.deleteProject(id, token);
      this.projects = this.projects.filter((project) => project['id'] !== id);
    } catch (error) {
      throw Error(`error ${error}`);
    }
  }
}
