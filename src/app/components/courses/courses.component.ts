import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
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
