import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgTransform: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const rotation = window.scrollY / 5;
    this.imgTransform = `rotate(${rotation}deg)`;
  }

}
