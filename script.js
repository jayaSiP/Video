document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
    const switchBtn = document.querySelector(".switch-btn");
    const switchText = switchBtn.querySelector(".switch");
  
    // Initially set the play button text as visible
    switchText.textContent = "play";
  
    switchBtn.addEventListener("click", function () {
      if (video.paused) {
        video.play(); // Play the video
        switchText.textContent = "pause"; // Change button to pause
      } else {
        video.pause(); // Pause the video
        switchText.textContent = "play"; // Change button to play
      }
    });
  });
  