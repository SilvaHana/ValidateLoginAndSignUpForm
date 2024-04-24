function OnOffPass() {
    var i = document.getElementById("icon2");
    var p = document.getElementById("pass");
    if (i.classList.contains('icon2'))
    {
        if (p.type === "password") {
            p.type = "text";
            i.classList.add("fa-eye-slash");
            i.classList.remove("fa-eye");
        } else {
            p.type = "password";
            i.classList.add("fa-eye");
            i.classList.remove("fa-eye-slash");
        }
    }
}

function checkUser() {
    var Uname = document.getElementById("username").value;
    var mess = document.getElementById("message");
    var uLength = 4;
    if (Uname == 0) {
        mess.innerHTML = "Tên đăng nhập không được để trống!";
        return false;
    } else {
        mess.innerHTML = null;
        return true;
    }
}

function checkPass() {
    var mess = document.getElementById("message");
    var p = document.getElementById("pass").value;
    if (p == 0) {
        mess.innerHTML = "Mật khẩu không được để trống!";
        return false;
    } else {
        mess.innerHTML = null;
        return true;
    }
}

function check() {
    checkUser();
    checkPass();
    var mess = document.getElementById("message");
    if (checkUser() == true && checkPass() == true) {
        mess.innerHTML = "Đăng nhập thành công!";
        mess.style.color = "green";
        return true;
    } else {
        mess.innerHTML = "Đăng nhập thất bại!";
        return false;
    }
}