let editIndex = -1;

// Load products on page load
showProducts();

function addProduct(){
  let products = JSON.parse(localStorage.getItem("products")) || [];

  const name  = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const link  = document.getElementById("link").value;

  if(name === "" || image === "" || link === ""){
    alert("Fill all fields ❌");
    return;
  }

  if(editIndex === -1){
    // ADD
    products.push({ name, image, link });
  } else {
    // UPDATE
    products[editIndex] = { name, image, link };
    editIndex = -1;
  }

  localStorage.setItem("products", JSON.stringify(products));
  clearForm();
  showProducts();
}

function showProducts(){
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let html = "";

  products.forEach((p, index) => {
    html += `
      <div class="admin-card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      </div>
    `;
  });

  document.getElementById("productList").innerHTML = html;
}

function editProduct(index){
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let p = products[index];

  document.getElementById("name").value  = p.name;
  document.getElementById("image").value = p.image;
  document.getElementById("link").value  = p.link;

  editIndex = index;
}

function deleteProduct(index){
  let products = JSON.parse(localStorage.getItem("products")) || [];
  if(confirm("Delete this product? ❌")){
    products.splice(index,1);
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
  }
}

function clearForm(){
  document.getElementById("name").value = "";
  document.getElementById("image").value = "";
  document.getElementById("link").value = "";
}

function logout(){
  localStorage.removeItem("admin");
  window.location.href = "login.html";
}
