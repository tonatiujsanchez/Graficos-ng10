import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styleUrls: ['./donas.component.css']
})
export class DonasComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: Label[] = ['Angular', 'React', 'VueJS'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100],
      [50, 150, 120]
    ];
    public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }  
    public actualizar(){
      this.doughnutChartData = [
        [this.aleatorio(), this.aleatorio(), this.aleatorio()],
        [this.aleatorio(), this.aleatorio(), this.aleatorio()]
      ];
    }

    public aleatorio(): number{
      return Math.round( Math.random() * 100 );
    }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
