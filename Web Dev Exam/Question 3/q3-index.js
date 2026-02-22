const loginBtn = document.getElementById('loginBtn');
const messageEl = document.getElementById('message');

function simulateLogin() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, 2000); 
    });
}

async function handleLogin() {
    loginBtn.disabled = true;
    loginBtn.textContent = "Logging in...";
    messageEl.textContent = "";
    messageEl.className = "message loading";

    try {
        await simulateLogin();
        
        messageEl.textContent = "Welcome back!";
        messageEl.className = "message success";
    } catch (error) {
        messageEl.textContent = "Login failed. Please try again.";
        messageEl.className = "message error";
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = "Login";
    }
}

loginBtn.addEventListener('click', handleLogin);