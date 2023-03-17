const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

document.getElementById("click").onclick = () => {
  location.href = "../index.html";
};
