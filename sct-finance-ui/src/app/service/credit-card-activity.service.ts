import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreditCardActivity } from '../model/credit-card-activity';
const baseUrl = '/api/cc-activity'
@Injectable({
  providedIn: 'root'
})
export class CreditCardActivityService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<CreditCardActivity[]> {
    return this.httpClient.get<CreditCardActivity[]>(baseUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  get(id:number):Observable<any>{
    return this.httpClient.get(`${baseUrl}/${id}`);
  }
  findByDescription(description:string):Observable<any>{
    return this.httpClient.get(`${baseUrl}?description=${description}`)
  }
  errorHandler(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }   
}
