let repositories = [];

function addRepo() {
  let name = document.getElementById("repoName").value;
  let owner = document.getElementById("repoOwner").value;

  if (name === "" || owner === "") {
    alert("Please fill all fields");
    return;
  }

  repositories.push({
    name: name,
    owner: owner
  });

  displayRepos();

  document.getElementById("repoName").value = "";
  document.getElementById("repoOwner").value = "";
}

function displayRepos() {
  let list = document.getElementById("repoList");
  list.innerHTML = "";

  repositories.forEach((repo, index) => {
    list.innerHTML += `
      <li>
        <span>${repo.name} - ${repo.owner}</span>
        <button onclick="deleteRepo(${index})">Delete</button>
      </li>
    `;
  });
}

function deleteRepo(index) {
  repositories.splice(index, 1);
  displayRepos();
}

function searchRepo() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("#repoList li");

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(searchValue)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
