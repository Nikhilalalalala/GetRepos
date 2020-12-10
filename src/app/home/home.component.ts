import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { GithubDataService } from "../services/github-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  usernameForm;

  constructor(
    public route: Router,
    public githubDataService: GithubDataService
  ) {
    this.usernameForm = new FormControl();
  }

  ngOnInit(): void {}

  goToRepositories() {
    let username = this.usernameForm.value;

    this.githubDataService.getUserRepos(username).then((res) => {
      this.route.navigate(["/repositories"], {
        state: {
          username: username,
          repos: res,
        },
      });
    });
  }
}
