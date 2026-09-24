const userImage = document.querySelector(".user-card img");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userCountry = document.getElementById("userCountry");
const getUserBtn = document.getElementById("getUserBtn");

async function getUser() {
  try{
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json();
    const user = data.results[0];
    userImage.src = user.picture.large;
    userName.textContent = user.name.first + " " + user.name.last;
    userEmail.textContent = "📧 " + user.email;
    userCountry.textContent = "🌍 " + user.location.country;
  } catch (error) {
    console.log("Error:", error);

    userName.textContent = "Something went wrong!";
    userEmail.textContent = "Please try again.";
    userCountry.textContent = "";
  }
}

getUserBtn.addEventListener("click", getUser);
getUser();