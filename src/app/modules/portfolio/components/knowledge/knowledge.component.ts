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
    },
    {
      src: 'assets/icons/knowledge/aspnet.svg',
      alt: 'Ícone de conhecimento em Asp.Net Core',
    },
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento em C Sharp',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento em Angular',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento em TypeScript',
    },
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Ícone de conhecimento em HTML',
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Ícone de conhecimento em CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento em JavaScript',
    },
  ]);

}
