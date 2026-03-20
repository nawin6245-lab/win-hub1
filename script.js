// ======================
// ฟังก์ชัน register
// ======================
function register() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (!usernameInput || !passwordInput) {
        alert("Error: Input not found!");
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert("Please fill all fields!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.username === username)) {
        alert("Username already exists!");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Register success!");
    window.location.href = "login.html";
}


// ======================
// ฟังก์ชัน login
// ======================
function login() {
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");

    if (!usernameInput || !passwordInput) {
        alert("Error: Input not found!");
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", username);
        alert("Login success!");
        window.location.href = "index.html";
    } else {
        alert("Wrong username or password!");
    }
}


// ======================
// ฟังก์ชัน logout
// ======================
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.href = "login.html";
}


// ======================
// ตรวจสอบ login
// ======================
function checkLogin() {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html";
    } else {
        const userDisplay = document.getElementById("user-display");
        if (userDisplay) {
            userDisplay.innerText = "Welcome: " + user;
        }
    }
}
