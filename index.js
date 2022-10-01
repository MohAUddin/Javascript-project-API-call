// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(".user-list");

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  userListEl.innerHTML = usersData.map((user) => userHtml(user)).join("");
}


// We have to map the values to the html values using .map
// function and then we use .join("") to join the values and 
// turn them into html properties

main();

function showUserPost(user){
    console.log(user)
}

function userHtml(user){
    return `<div class="user-card" onclick="showUserPost(${user})">
        <div class="user-card__container">
        <h3>${user.name}</h4>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
  </div>`
}