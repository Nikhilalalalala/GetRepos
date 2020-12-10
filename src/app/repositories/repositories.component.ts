import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.css"],
})
export class RepositoriesComponent implements OnInit {
  username: any;
  repositories: any;

  constructor() {}

  ngOnInit(): void {
    this.username = window.history.state.username;
    this.repositories = window.history.state.repos;
        
  }
}
