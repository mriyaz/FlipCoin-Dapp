const APP_ID = config.APP_ID;
const SERVER_URL = config.SERVER_URL;

Moralis.initialize(APP_ID); // Application id from moralis.io
Moralis.serverURL = SERVER_URL; //Server url from moralis.io

async function login() {
  try {
    user = await Moralis.Web3.authenticate();
    console.log(user);
    alert("User logged in");
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("login_button").onclick = login;
