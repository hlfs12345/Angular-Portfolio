import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/delphi.svg',
      alt: 'Ícone de conhecimento em Delphi',
      title: 'Delphi',
    },
    {
      src: 'assets/icons/knowledge/aspnet.svg',
      alt: 'Ícone de conhecimento em Asp.Net Core',
      title: 'Asp.Net Core',
    },
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento em C Sharp',
      title: 'C#',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento em Angular',
      title: 'Angular',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento em TypeScript',
      title: 'TypeScript',
    },
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Ícone de conhecimento em HTML',
      title: 'HTML',
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Ícone de conhecimento em CSS',
      title: 'CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento em JavaScript',
      title: 'JavaScript',
    },
    {
      src: 'assets/icons/knowledge/firebirdsql.svg',
      alt: 'Ícone de conhecimento em Firebird SQL',
      title: 'Firebird SQ',
    },
    {
      src: 'assets/icons/knowledge/sqlserver.svg',
      alt: 'Ícone de conhecimento em SQL Server',
      title: 'SQL Server',
    },
  ]);

}
