function login(e){
  e.preventDefault();

  const ADMIN_EMAIL = "yuvrajsingh8433075079@gmail.com";
  const ADMIN_PASS  = "123456";

  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;

  if(email === ADMIN_EMAIL && pass === ADMIN_PASS){
    localStorage.setItem("admin","true");
    window.location.href = "admin.html";
  } else {
    alert("Access Denied ❌");
  }
}
