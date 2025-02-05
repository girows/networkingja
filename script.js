function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;
        
        noButton.style.position = "absolute";
        document.getElementsByClassName("image")[0].src = "janna.jpg";
        
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
        
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
        
        document.getElementById("question").textContent = "hep hep hep bawal mag no hehehe";
        document.getElementById("name").style.display = "none";
    }

    if (response === "Yes") {
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();
        
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "YAYYY! I would like to invite you on a virtual Valentine's Day Date.😘😘";
        yesMessage.style.display = "block";
        document.getElementsByClassName("image")[0].src = "girow.jpg";
        
        document.getElementById("yesButton").remove();
        document.querySelector(".next-button").style.display = "inline-block";
        
        // Add romantic message
        const romanticMessage = document.createElement("p");
        romanticMessage.textContent = "Every day with you is special, but this Valentine’s Day even we are miles apart, I want to make it extra magical. Thank you baby ko for being my love and my happiness. Gusto ko lang sabihin sa'yo na MAHAL NA MAHAL KITA! I MISS YOU!!";
        romanticMessage.style.fontSize = "24px";
        romanticMessage.style.color = "#ff4d79";
        romanticMessage.style.fontStyle = "italic";
        romanticMessage.style.marginTop = "20px";
        romanticMessage.style.opacity = "0";
        romanticMessage.style.transition = "opacity 1.5s ease-in-out";
        
        document.querySelector(".container").appendChild(romanticMessage);
        setTimeout(() => { romanticMessage.style.opacity = "1"; }, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("thankyou").style.display = "none";
    document.querySelector(".flower").style.display = "none";
    document.querySelector(".next-button").style.display = "none";

    document.querySelector(".next-button").addEventListener("click", function() {
        document.querySelector(".container").style.display = "none";
        document.getElementById("thankyou").style.display = "block";
        document.querySelector(".flower").style.display = "block";
    
    });
});
