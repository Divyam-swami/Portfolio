const text = "Divyum Swami";
let index = 0;
const typingSpeed = 100; // milliseconds
const pauseBetweenCycles = 1500; // pause before restarting

function type() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, pauseBetweenCycles);
    }
}

function deleteText() {
    if (index > 0) {
        document.getElementById("typed-text").innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(deleteText, typingSpeed);
    } else {
        index = 0; // Reset index to start typing again
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
type();



// Resume Downloader

document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './Assets/Div-resume.pdf'; // Replace with the path to your resume file
    link.download = 'Div-Resume.pdf'; // The name that will be given to the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


// aos initialization
AOS.init()


const opener= document.getElementsByClassName("openbtn");
const overview= document.getElementsByClassName("overview")
 
opener.addEventListener("onclick",()=>{
    overview.style.top="-100%"
})