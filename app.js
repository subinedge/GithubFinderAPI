const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchBox');

searchUser.addEventListener('keyup', (e) => {
  // get the input value
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        console.log(data);
        if (data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User Not found', 'alert alert-danger');
        } else {
          // display the results
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }

      });
  } else {
    // clear profile on empty input box
    ui.profile.innerHTML = ' ';
  }
});

