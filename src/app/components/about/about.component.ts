import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgTransform: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const rotation = window.scrollY / 5;
    this.imgTransform = `translateX(-50%) rotate(${rotation}deg)`;
  }

}
