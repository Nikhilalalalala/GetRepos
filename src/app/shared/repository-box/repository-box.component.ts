import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository-box',
  templateUrl: './repository-box.component.html',
  styleUrls: ['./repository-box.component.css']
})
export class RepositoryBoxComponent implements OnInit {

  @Input() repo;

  constructor() { }

  ngOnInit(): void {
  }

}
