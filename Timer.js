function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Adjust width as needed
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  }

  
  const text = document.querySelector(".hero-h1");
  const stringText = text.textContent
  const splitText = stringText.split("");
  text.textContent = "";

  for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick(){
     const span = text.querySelectorAll('span')[char];
     span.classList.add('fade');
     char++
    if(char === splitText.length){
      complete();
      return;
    }
  }

  function complete(){
    clearInterval(timer);
    timer = null;
  }

  // swiper.js
  const swiper = new Swiper('.swiper', {
    autoHeight: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
