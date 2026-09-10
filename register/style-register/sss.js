let roleBtns = document.querySelectorAll(".role-btn");

roleBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    roleBtns.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});


const API_URL = "https://6a00cc5436fb6ad04de08150.mockapi.io/users";

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault(); 
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const termsCheckbox = document.querySelector('#terms');

    if (!emailInput.value || !passwordInput.value) {
        alert("دخل بياناتك الأول!");
        return;
    }

    if (!termsCheckbox.checked) {
        alert("لازم توافق على الشروط الأول");
        return;
    }

    const newUser = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        role: "Student",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + emailInput.value
    };

    try {
        console.log("جاري إرسال البيانات للـ API...");
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            alert("✅ مبروك! الحساب اتسجل في الـ API بنجاح.");
            window.location.href = "../login/index.html";
        } else {
            alert("❌ السيرفر رفض الطلب، حاول تاني.");
        }
    } catch (error) {
        alert("مشكلة في الاتصال بالسيرفر: " + error.message);
    }
});