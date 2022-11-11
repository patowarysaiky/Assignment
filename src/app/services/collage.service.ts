import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CollageService {
  constructor(private http:HttpClient  ) { 
  }



  getAllImg(page : any){

    const url = 'https://picsum.photos/v2/list?page='+page+'&limit=100';
    //     console.log(url)
    return this.http.get(url);
    }
    
}
