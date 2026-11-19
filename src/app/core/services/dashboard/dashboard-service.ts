import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class DashboardService {
    private http= inject(HttpClient) ;

   
}
