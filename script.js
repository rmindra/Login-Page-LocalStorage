
// register function

function register(e) {
  event.preventDefault();
  // console.log('working');

  let username = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let roleCheck = document.querySelector('input[name="role"]:checked');
  console.log(roleCheck);
  if(roleCheck == null){
      return alert('Pilih Role dulu');
    }else{
      
  let role = document.querySelector('input[name="role"]:checked').value;
  let user = {
    username: username,
    password: pass,
    role: role,
  };

  let json = JSON.stringify(user);
  localStorage.setItem("user", json);
  alert("user added");
  }
}

// Login Function
function loginFunc(e){
  event.preventDefault();
  // console.log("hai");

  let username = document.getElementById('username').value; 
  let pass = document.getElementById('password').value;

  let user = localStorage.getItem("user", username);
  let data = JSON.parse(user);
  // console.log(data);

  if(user == null || username != data.username){
    alert('Username salah');
  } else if(username == data.username && pass == data.password){
    alert(`Welcome, ${data.username}`);
    localStorage.setItem("onLogin", data.username);
    localStorage.setItem("role", data.role);
    location.replace("welcome.html");
  }else{
    alert(`Password Salah`);
  }
}

// Welcome Function
function welcome(){
  if(localStorage.getItem("onLogin")){
    let welcome = document.getElementById('welcome');
    let user = localStorage.getItem("onLogin");
    let role = localStorage.getItem("role");
    welcome.innerHTML = `Welcome, ${user}.<br>Role Kamu: ${role}.`;
    let logoutButton = document.getElementById('logout');
    logoutButton.style.display = "block";
  }else{
    alert("Tolong Login dulu yaa");
    location.replace("index.html");
  }
}

function onLogout(){
  localStorage.removeItem("onLogin");
  localStorage.removeItem("role");
}

