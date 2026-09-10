let tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");
  });
});

const API_URL = "https://6a00cc5436fb6ad04de08150.mockapi.io/users";

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const emailInput = document
    .querySelector('input[type="email"]')
    .value.trim()
    .toLowerCase();
  const passwordInput = document
    .querySelector('input[type="password"]')
    .value.trim();

  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    const user = users.find((u) => {
      const apiEmail = u.email ? u.email.trim().toLowerCase() : "";
      const apiPass = u.password ? u.password.toString().trim() : "";
      return apiEmail === emailInput && apiPass === passwordInput;
    });

    if (user) {
      alert(`✅ تم بنجاح! أهلاً بك يا ${user.role}`);
    } else {
      alert("❌ الإيميل أو الباسورد غلط");
    }
  } catch (error) {
    alert("حدث خطأ: " + error.message);
  }
});
