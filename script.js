const bars = document.getElementById("bars");
const times = document.getElementById("times");
const navBar = document.getElementById("navBar");
const overlay = document.getElementById("overlay");

bars.addEventListener("click" , () => {
    navBar.style.left="0px";
    overlay.classList.toggle('hidden');
})

times.addEventListener("click" , () => {
    navBar.style.left="-300px";
    overlay.classList.toggle('hidden');
})

overlay.addEventListener("click" , () => {
    navBar.style.left="-300px";
    overlay.classList.toggle('hidden');
})

// typing effect

var options = {
    strings: [ "A Hacking Learner"," A Bug Bounty Hunter", "A Developer" ],
    typeSpeed: 70,   // Speed of typing
    backSpeed: 40,    // Speed of deleting
    backDelay: 1000,  // Delay before deleting starts
    startDelay: 500,  // Delay before typing starts
    loop: true,       // Loop the effect
    showCursor: true, // Show typing cursor
  };

  var typed = new Typed("#typed", options);
