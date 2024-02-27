let QRcodeBox = document.getElementById("QRcodeBox")
let QRimg = document.getElementById("QRimg")
let error = document.getElementById("error");


function generateQR(){
    let userInput = document.getElementById("userInput")

    if(userInput.value == ""){
        error.innerHTML = "Please write something in input"
        error.style.fontSize = "13px";
        QRcodeBox.style.height = "22px"
        QRimg.style.display = "none"
        error.style.color = "red"
        
    }
    else{
        QRimg.style.display = "inline"
        QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;

        if (window.innerWidth <= 600) {
            QRcodeBox.style.height = "100px"; // Set height to 100px for smaller screens
        }else{

            QRcodeBox.style.height = "154px"
        }

        error.style.height = "0px"
        error.innerHTML = ""
        userInput.value = "";
    }
    
}

// window.addEventListener("resize", function() {
//     if (window.innerWidth <= 600) {
//         QRcodeBox.style.height = "100px"; // Set height to 100px for smaller screens
//     } else {
//         QRcodeBox.style.height = "154px"; // Set height to 154px for larger screens
//     }
// });