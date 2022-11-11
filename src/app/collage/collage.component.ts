import { Component, OnInit } from '@angular/core';
import { CollageService } from '../services/collage.service';
@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {
 
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  start: number = 0;
  page = 1;
  pics : any = [];
  
  constructor(private imageServeice : CollageService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.imageServeice.getAllImg(this.page).subscribe((res : any)=>{
      this.pics = res ;
      // console.log(this.pics)
    },(err : any)=>{
      console.log(err)
    })
  }
     
  onScrollDown(ev : any) {    
    this.imageServeice.getAllImg(++this.page).subscribe((res : any)=>{
      this.pics.push(...res);
    });
    console.log(this.pics, "pics")
  }  
}
