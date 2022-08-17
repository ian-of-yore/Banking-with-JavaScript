document.getElementById("btn-submit").addEventListener("click", function () {
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;

    // console.log(userEmail, userPassword);
    if (userEmail === "newVenturer" && userPassword === "soldier0f_Fortune") {
        window.location.href = "dungeon.html";
    }
    else {
        alert("!!! Blasphemer !!! You Shall not Pass");
    }
})
