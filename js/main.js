const products = JSON.parse(localStorage.getItem("products")) || [];
const container = document.getElementById("products");
const style = document.createElement("style");
style.innerHTML = `
  .amazon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    padding: 12px 22px;
    background: linear-gradient(135deg, #ff9900, #ffb347);
    color: #111;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 25px;
    box-shadow: 0 6px 15px rgba(255,153,0,0.35);
    transition: all 0.3s ease;
  }

  .amazon-btn:hover {
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 10px 25px rgba(255,153,0,0.5);
  }
`;
document.head.appendChild(style);


products.forEach(p => {
    container.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <a href="${p.link}" target="_blank" rel="nofollow" class="amazon-btn">
  🛒 Buy on Amazon
        </a>
    </div>
  `;
});
