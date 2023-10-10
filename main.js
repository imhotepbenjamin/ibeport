// JavaScript for modal and chat functionality
document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const contactModal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");
    const emailForm = document.getElementById("emailForm");
    const messageInput = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");
   
  
    if (contactButton && contactModal && closeModal && emailForm && messageInput && chatBox) {
      // Modal event listeners
      contactButton.addEventListener("click", function() {
        contactModal.style.display = "block";
      });
  
      closeModal.addEventListener("click", function() {
        contactModal.style.display = "none";
      });
  
      window.addEventListener("click", function(event) {
        if (event.target === contactModal) {
          contactModal.style.display = "none";
        }
      });
  
      // Chat form submission
      emailForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
          const messageDiv = document.createElement("div");
          messageDiv.classList.add("message");
          messageDiv.innerHTML = `<p>${messageText}</p>`;
          chatBox.appendChild(messageDiv);
          messageInput.value = "";
          chatBox.scrollTop = chatBox.scrollHeight;
        }
      });
    }
  });

  const backgroundImage = document.getElementById('home-background');
  const images = ['img/ultra-hd-eport-background.png', 'img/eport2.png', 'img/ultra-hd-eport-background22.png','img/abstract-for-ib-eport1.png'];
  let currentIndex = 0;
  
  function changeBackgroundImage() {
    backgroundImage.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change the background image every X seconds (e.g., every 5 seconds)
setInterval(changeBackgroundImage, 5000);

{
  const sliders = document.querySelectorAll(".slider");
  // interval between switching images
  // can't be less than your animation duration in css!
  const interval = 2800;
  // if you don't want to first animation last longer than other animations  
  // set animDuration (in miliseconds) to your value of animation duration in css
  const animDuration = 600;

  for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".img");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    // Creates dots and add listeners to them
    for (let i = 0; i < sliderImgs.length; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
      animateSlider();
      sliderImgs[0].style.left = "";
      intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);   

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
      if (!nextImg)
        nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

      --nextImg;
      sliderImgs[prevImg].style.animationName = "";

      if (!right) {
        sliderImgs[nextImg].style.animationName = "leftNext";
        sliderImgs[currImg].style.animationName = "leftCurr";
      } 
      else {
        sliderImgs[nextImg].style.animationName = "rightNext";
        sliderImgs[currImg].style.animationName = "rightCurr";
      }

      prevImg = currImg;
      currImg = nextImg;

      currDot = allDots[currImg];
      currDot.classList.add("active-dot");
      prevDot = allDots[prevImg];
      prevDot.classList.remove("active-dot");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
      if (num == currImg)
        return false;

      clearTimeout(timeout);
      clearInterval(intrvl);

      if (num > currImg)
        animateSlider(num + 1);
      else
        animateSlider(num + 1, true);

      intrvl = setInterval(animateSlider, interval);
    }
  }
}


