class Github {
  constructor() {
    this.client_id = 'dd5d11a8d74fb5145e8b';
    this.client_secret = 'd0866a826be4d3147344ce15c589a4f72d003ba7';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret = ${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page= ${this.repos_count}&sort=${this.repos_sort}&client_id = ${this.client_id}&client_secret = ${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }

  }
}

