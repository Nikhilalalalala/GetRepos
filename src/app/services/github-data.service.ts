import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GithubDataService {
  GITHUB_API = "https://api.github.com/";
  constructor() {}

  async getUserRepos(user) {
      const repoData = await fetch(this.GITHUB_API + `users/${user}/repos`);
      return await repoData.json();
  }

}
