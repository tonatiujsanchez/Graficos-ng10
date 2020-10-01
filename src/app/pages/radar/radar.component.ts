import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Web', 'Movil', 'E-commers', 'Sistemas', 'Startup', 'Educación', 'Empresarial'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Angular' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'VueJS' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }
  public actualizar(){
    this.radarChartData = [
      { data: [this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio()], label: 'Angular' },
      { data: [this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio(), this.aleatorio()], label: 'VueJS' }
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
