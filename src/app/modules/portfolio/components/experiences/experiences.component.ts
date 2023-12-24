import { Component, signal } from '@angular/core';

//Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      sumary: {
        strong: "Desenvolvedor Delphi Pleno",
        p: "Moot Consulting | Mar 2023 - Present",
      },
      text:"Alocado como terceiro dentro do Grupo HT como desenvolvedor pleno utilizando Delphi e SQL Server, atuando no desenvolvimento e manutenção de sistemas integrados para diversas áreas da indústria.",
    },
    {
      sumary: {
        strong: "Desenvolvedor Delphi Pleno",
        p: "America Soft Informatica | Mai 2022 - Mar 2023",
      },
      text:"Desenvolvimento e aprimoramento de Sistemas TMS utilizando Delphi XE5 e Firebird, junto a pequenos projetos em C# Windows Forms e SQL Server.",
    },
    {
      sumary: {
        strong: "Desenvolvedor Delphi Pleno",
        p: "Grupo ARO | Jun 2021 - Mai 2022",
      },
      text:"Desenvolvimento e aprimoramento de Sistemas ERP destinados a fabrica e indústria utilizando Delphi 10 e SQL Server. Realização de suporte web ao cliente e treinamento das plataformas para as empresas.",
    },
    {
      sumary: {
        strong: "Desenvolvedor .Net Pleno",
        p: "Agência Crivos | Jun 2020 - Jan 2021",
      },
      text:"Desenvolvimento back-end de Web Services para empresas utilizando Asp.Net e MySQL. Integração de E-Commerce com plataformas de Marketplace.",
    },
    {
      sumary: {
        strong: "Desenvolvedor Delphi Pleno",
        p: "FenixME Soluções | Fev 2018 - Jun 2020",
      },
      text:"Desenvolvimento e aprimoramento de Sistemas ERP Retaguarda destinados a comércios utilizando Delphi XE7, UNIGUI e Firebird, junto a pequenos projetos em PHP. Realizava suporte presencial e web ao cliente, treinamento das plataformas para as empresas, manutenção e preventiva de equipamentos.",
    },
  ]);

}
