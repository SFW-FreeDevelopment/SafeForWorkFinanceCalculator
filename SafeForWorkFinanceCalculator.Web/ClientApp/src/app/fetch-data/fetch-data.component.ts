import { Component, Inject } from '@angular/core';
import { FinanceResource } from '../services/models/financeResource';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  private weatherService: DataService<WeatherForecast>;

  constructor(weatherService: DataService<WeatherForecast>) {
    this.weatherService = weatherService;
    this.forecasts = this.weatherService.getAll('weatherforecast');
    console.log(this.forecasts);
  }
}

interface WeatherForecast extends FinanceResource {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
