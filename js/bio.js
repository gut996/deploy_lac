function aFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("readMore");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "READ MORE"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "READ LESS"; 
        moreText.style.display = "inline";
    }
    }