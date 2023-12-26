import { Component, signal, inject } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/DelphiProj.png',
      alt: 'Projetos em Delphi',
      title: 'Projetos em Delphi',
      width: '100px',
      height: '51px',
      description: '<p>Delphi é um compilador, uma IDE e uma linguagem de programação, produzido anteriormente pela Borland Software Corporation e atualmente pela Embarcadero.</p>',
      links: [
        {
          name: 'Conheça mais sobre a Embarcadeiro',
          href: 'https://www.embarcadero.com/',
        },
      ],
    },
    { 
      src: 'assets/img/projects/AspNetProj.png',
      alt: 'Projetos em Asp.Net Core',
      title: 'Projetos em Asp.Net Core',
      width: '100px',
      height: '51px',
      description: '<p>O ASP.NET Core é uma estrutura de código aberto, multiplaforma e alto desempenho para a criação de aplicativos modernos conectados à Internet e habilitados para a nuvem.</p>',
      links: [
        {
          name: 'Conheça o Asp.Net Core',
          href: 'https://dotnet.microsoft.com/pt-br/learn/aspnet/what-is-aspnet-core',
        },
      ],
    },
    {
      src: 'assets/img/projects/ApiProj.png',
      alt: 'Projetos API - API Rest',
      title: 'Projetos API - API Rest',
      width: '100px',
      height: '51px',
      description: '<p>API REST, também chamada de API RESTful, é uma interface de programação de aplicações (API ou API web) em conformidade com as restrições do estilo de arquitetura REST, permitindo a interação com serviços web RESTful.</p>',
      links: [
        {
          name: 'Conheça mais sobre API - API Rest',
          href: 'https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api',
        },
      ],
    },
    {
      src: 'assets/img/projects/AngularProj.png',
      alt: 'Projetos em Angular',
      title: 'Projetos em Angular',
      width: '100px',
      height: '51px',
      description: '<p>Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.</p>',
      links: [
        {
          name: 'Conheça mais sobre Angular',
          href: 'https://angular.io/',
        },
      ],
    },
  
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data, 
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
