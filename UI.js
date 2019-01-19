class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        // get parent
        const container = document.querySelector('.container');

        //get card
        const card = document.getElementById('card');

        //insert alert
        container.insertBefore(div, card);
    }


    showProfile(user) {
        // insert the content in the profile div
        this.profile.innerHTML = `
                  
          <div class="card card-body mb-3">
              <div class="row">
                  <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2"  alt="profile_image">
                        <p>${user.bio}</p>
                        <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Github Profile</a>
                  </div>
                  <div class="col-md-9">
                      <span class="badge badge-primary">Public Repos ${user.public_repos}</span>
                      <span class="badge badge-success">Public Gists ${user.public_gists}</span>
                      <span class="badge badge-info">Followers ${user.followers}</span>
                      <span class="badge badge-warning">Following ${user.following}</span>
                      <br><br>


                      <ul class="list-group">
                          <li class="list-group-item">Company : ${user.company}</li>
                          <li class="list-group-item">Website : ${user.blog}</li>
                          <li class="list-group-item">Location : ${user.location}</li>
                          <li class="list-group-item">Member Since : ${user.created_at}</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div class="h2"> Latest Repos </div>
          <div id="repos"></div>

    `;
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
              <div class="card card-body mb-2">
                  <div class="row">
                      <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                      </div> 

                      <div class="col-md-6">
                        <span class="badge badge-primary">Stars ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks ${repo.forks_count}</span>
                      </div>
                  </div>
              </div>
          `;
        })

        // output the repositories to web page
        document.getElementById('repos').innerHTML = output;

    }
}