function reset() {
    document.getElementById("username").value = null;
    document.getElementById("email").value = null;
    document.getElementById("pass1").value = null;
    document.getElementById("pass2").value = null;
    document.getElementById("message").innerHTML = null;
}

function checkUser() {
    var Uname = document.getElementById("username").value;
    var mess = document.getElementById("message");
    var uLength = 4;
    if (Uname == 0) {
        mess.innerHTML = "Tên đăng nhập không được để trống!";
        return false;
    } else {
        if (uLength > Uname) {
            mess.innerHTML = "Tên đăng nhập phải có độ dài tối thiểu 4 kí tự!";
            return false;
        } else {
            mess.innerHTML = null;
            return true;
        }
    }
}

function checkInput() {
    var mess = document.getElementById("message");
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    if (ValidateEmail() == true && checkPass() == true && checkUser() == true) {
        if (p1 == p2) {
            mess.innerHTML = "Chúc mừng bạn đã đăng ký thành công!";
            mess.style.color = "green";
            location.assign("http://127.0.0.1:5500/HTML/Bai1FormDangNhap.html");
        } else {
            mess.innerHTML = "Mật khẩu không trùng khớp!";
            return false;
        }
    }
}

function check() {
    var minLength = 8;
    var mess = document.getElementById("message");
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    if (p1 == 0 || p2 == 0) {
        mess.innerHTML = "Mật khẩu không được để trống!";
        return false;
    } else {
        if (p1 != p2) {
            mess.innerHTML = "Mật khẩu không trùng khớp!";
            return false;
        } else {
            if ((p1 == p2 && p1 < minLength) || (p1 == p2 && p2 < minLength)) {
                mess.innerHTML = "Mật khẩu phải có độ dài tối thiểu 8 kí tự!";
            } else {
                mess.innerHTML = null;
                return true;
            }
        }
    }
}

function checkPass() {
    var minLength = 8;
    var mess = document.getElementById("message");
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    if (p1.length < minLength) {
        mess.innerHTML = "Mật khẩu phải có độ dài tối thiểu 8 kí tự!";
        return false; 
    } else {
        if(p2.length < minLength) {
            mess.innerHTML = "Nhập lại mật khẩu phải có độ dài tối thiểu 8 kí tự!";
            return false;
        } else {
            mess.innerHTML = null;
        }
    }
    check();
    return true;
}

const checkEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
  
function ValidateEmail() {
    var mess = document.getElementById("message");
    var email = document.getElementById("email").value;
    if (checkEmail(email)) {
        mess.innerHTML = null;
        return true;
    } else {
        mess.innerHTML = "Email không hợp lệ!";
        return false;
    }
}
    
function OnOffPass1() {
    var i1 = document.getElementById("icon1");
    var p1 = document.getElementById("pass1");
    if (i1.classList.contains('icon1'))
    {
        if (p1.type === "password") {
            p1.type = "text";
            i1.classList.add("fa-eye-slash");
            i1.classList.remove("fa-eye");
        } else {
            p1.type = "password";
            i1.classList.add("fa-eye");
            i1.classList.remove("fa-eye-slash");
        }
    }
}

function OnOffPass2() {
    var i2 = document.getElementById("icon2");
    var p2 = document.getElementById("pass2");
    if (i2.classList.contains('icon2'))
    {
        if (p2.type === "password") {
            p2.type = "text";
            i2.classList.add("fa-eye-slash");
            i2.classList.remove("fa-eye");
        } else {
            p2.type = "password";
            i2.classList.add("fa-eye");
            i2.classList.remove("fa-eye-slash");
        }
    }
}