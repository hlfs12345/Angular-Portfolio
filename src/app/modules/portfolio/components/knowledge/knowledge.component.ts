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
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento em Angular',
    },
  ]);

}
