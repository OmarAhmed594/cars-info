// ================= LOGIN SYSTEM =================
function login(event) {

  event.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (email === "admin@gmail.com" && password === "1234") {

    window.location.href = "home.html";

  } else {

    error.innerText = "❌ Invalid Email or Password";

  }
}



// ================= CARS DATA =================
const cars = [
  {
    name: "BMW M4",
    info: "Twin-turbo 6-cylinder, 503 HP, 0-100 in 3.8s",
    price: "$75,000"
  },
  {
    name: "Mercedes AMG GT",
    info: "V8 engine, 523 HP, luxury sports coupe",
    price: "$110,000"
  },
  {
    name: "Audi R8",
    info: "V10 engine, 602 HP, supercar performance",
    price: "$160,000"
  },
  {
    name: "Chevrolet Camaro",
    info: "Muscle car, 455 HP, aggressive design",
    price: "$45,000"
  },
  {
    name: "Ford Mustang",
    info: "Iconic muscle car, 450 HP, strong performance",
    price: "$55,000"
  },
  {
    name: "Lamborghini Huracan",
    info: "V10 engine, 640 HP, extreme supercar",
    price: "$250,000"
  },
  {
    name: "Ferrari 488",
    info: "Twin-turbo V8, 661 HP, Italian speed",
    price: "$280,000"
  },
  {
    name: "Porsche 911",
    info: "Flat-6 engine, precision handling, 450 HP",
    price: "$120,000"
  },
  {
    name: "Nissan GTR",
    info: "Twin-turbo V6, 565 HP, Godzilla performance",
    price: "$115,000"
  },
  {
    name: "McLaren 720S",
    info: "4.0L V8, 710 HP, lightweight hyper performance",
    price: "$300,000"
  }
];



// ================= SHOW CAR DETAILS =================
function show(carName) {

  const car = cars.find(c => c.name === carName);

  if (!car) {
    alert("Car not found!");
    return;
  }

  const modal = document.createElement("div");

  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.85)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "999";

  modal.innerHTML = `
    <div style="
      background:#111;
      padding:22px;
      border-radius:12px;
      text-align:center;
      width:300px;
      border:1px solid red;
      box-shadow:0 0 15px rgba(255,0,0,0.4);
    ">
      <h2 style="color:red;">${car.name}</h2>

      <p style="color:#ccc;">${car.info}</p>

      <p style="color:white;">
        💰 Price:
        <span style="color:red;">${car.price}</span>
      </p>

      <button id="closeBtn"
      style="
      margin-top:12px;
      padding:8px 14px;
      background:red;
      border:none;
      color:white;
      border-radius:6px;
      cursor:pointer;
      ">
      Close
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("closeBtn")
  .addEventListener("click", function () {
    modal.remove();
  });

}



// ================= SEARCH CARS =================
function filterCars(text) {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const name =
    card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(text.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

}



// ================= CONTACT FORM =================
function sendMessage(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("✅ Message Sent Successfully! Thanks " + name);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

}



// ================= PAGE LOAD EVENT =================
document.addEventListener("DOMContentLoaded", function () {

  console.log("🚗 Car Info Hub Loaded Successfully");

});