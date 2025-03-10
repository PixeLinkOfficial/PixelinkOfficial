let count=1;
document.getElementById("scrollLeftBtn").addEventListener("click", function() {
  if(count!=1)
    count--;
  else
    count=4;
  if(count==1)
    {
      refbuts1();
      document.getElementById("scrollToBtn5").click();
    }
    else if(count==2)
    {
      refbuts2();
      document.getElementById("scrollToBtn").click();
    }  
    else if(count==3)
    {
      refbuts3();
      document.getElementById("scrollToBtn1").click();
    } 
    else if(count==4)
    {
      refbuts4();
      document.getElementById("scrollToBtn2").click();
    }   
    
});
document.getElementById("scrollLeftBtnm").addEventListener("click", function() {
  if(count!=1)
    count--;
  else
    count=6;
  if(count==1)
    {
      refbuts1();
      document.getElementById("scrollToBtn5m").click();
    }
    else if(count==2)
    {
      refbuts2();
      document.getElementById("scrollToBtnm").click();
    }  
    else if(count==3)
    {
      refbuts3();
      document.getElementById("scrollToBtn1m").click();
    } 
    else if(count==4)
    {
      refbuts4();
      document.getElementById("scrollToBtn2m").click();
    }   
    else if(count==5)
    {
      refbuts5();
      document.getElementById("scrollToBtn3m").click();
    }  
    else if(count==6)
    {
       refbuts6();
       document.getElementById("scrollToBtn4m").click();
    }
});

document.getElementById("scrollRightBtn").addEventListener("click", function() {
    if(count!=4)
      count++;
    else
    count=1;
    if(count==1)
    {
      refbuts1();
      document.getElementById("scrollToBtn5").click();
    }
    else if(count==2)
    {
      refbuts2();
      document.getElementById("scrollToBtn").click();
    }  
    else if(count==3)
    {
      refbuts3();
      document.getElementById("scrollToBtn1").click();
    } 
    else if(count==4)
    {
      refbuts4();
      document.getElementById("scrollToBtn2").click();
    }   
    
     
});
document.getElementById("scrollRightBtnm").addEventListener("click", function() {
  if(count!=6)
    count++;
  else
    count=1;
  if(count==1)
  {
    refbuts1();
    document.getElementById("scrollToBtn5m").click();
  }
  else if(count==2)
  {
    refbuts2();
    document.getElementById("scrollToBtnm").click();
  }  
  else if(count==3)
  {
    refbuts3();
    document.getElementById("scrollToBtn1m").click();
  } 
  else if(count==4)
  {
    refbuts4();
    document.getElementById("scrollToBtn2m").click();
  }   
  else if(count==5)
  {
    refbuts5();
    document.getElementById("scrollToBtn3m").click();
  }  
  else if(count==6)
  {
     refbuts6();
     document.getElementById("scrollToBtn4m").click();
  }
});


document.getElementById("scrollToBtn").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass1"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});

document.getElementById("scrollToBtn1").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass2"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});
document.getElementById("scrollToBtn2").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass3"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});

document.getElementById("scrollToBtn5").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass4"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});


document.getElementById("scrollToBtnm").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass1"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft-15, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});

document.getElementById("scrollToBtn1m").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass2"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft-15, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});
document.getElementById("scrollToBtn2m").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass3"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft-15, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});
document.getElementById("scrollToBtn3m").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass5"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft-15, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});
document.getElementById("scrollToBtn4m").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass6"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft-15, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});

document.getElementById("scrollToBtn5m").addEventListener("click", function() {
  const targetElement = document.querySelector(".targetClass4"); // Replace "targetClass" with the class of the element
  if (targetElement) {
    const container = document.querySelector(".items"); // The container you want to scroll within
    container.scrollTo({
      left: targetElement.offsetLeft-15, // Scroll horizontally to the left position of the target
      behavior: "smooth"
    });
  }
});



//

function refbuts1(){
  count=1;
  document.querySelector('.imr1').src="IMG/circlerefactive.png";
  document.querySelector('.imr2').src="IMG/circleref.png";
  document.querySelector('.imr3').src="IMG/circleref.png";
  document.querySelector('.imr4').src="IMG/circleref.png";
  document.querySelector('.imr5').src="IMG/circleref.png";
  document.querySelector('.imr6').src="IMG/circleref.png";
  document.querySelector('.imr1m').src="IMG/circlerefactive.png";
  document.querySelector('.imr2m').src="IMG/circleref.png";
  document.querySelector('.imr3m').src="IMG/circleref.png";
  document.querySelector('.imr4m').src="IMG/circleref.png";
  document.querySelector('.imr5m').src="IMG/circleref.png";
  document.querySelector('.imr6m').src="IMG/circleref.png";
}
function refbuts2(){
  count=2;
  document.querySelector('.imr1').src="IMG/circleref.png";
  document.querySelector('.imr2').src="IMG/circlerefactive.png";
  document.querySelector('.imr3').src="IMG/circleref.png";
  document.querySelector('.imr4').src="IMG/circleref.png";
  document.querySelector('.imr5').src="IMG/circleref.png";
  document.querySelector('.imr6').src="IMG/circleref.png";
  document.querySelector('.imr1m').src="IMG/circleref.png";
  document.querySelector('.imr2m').src="IMG/circlerefactive.png";
  document.querySelector('.imr3m').src="IMG/circleref.png";
  document.querySelector('.imr4m').src="IMG/circleref.png";
  document.querySelector('.imr5m').src="IMG/circleref.png";
  document.querySelector('.imr6m').src="IMG/circleref.png";
}
function refbuts3(){
  count=3;
  document.querySelector('.imr1').src="IMG/circleref.png";
  document.querySelector('.imr2').src="IMG/circleref.png";
  document.querySelector('.imr3').src="IMG/circlerefactive.png";
  document.querySelector('.imr4').src="IMG/circleref.png";
  document.querySelector('.imr5').src="IMG/circleref.png";
  document.querySelector('.imr6').src="IMG/circleref.png";
  document.querySelector('.imr1m').src="IMG/circleref.png";
  document.querySelector('.imr2m').src="IMG/circleref.png";
  document.querySelector('.imr3m').src="IMG/circlerefactive.png";
  document.querySelector('.imr4m').src="IMG/circleref.png";
  document.querySelector('.imr5m').src="IMG/circleref.png";
  document.querySelector('.imr6m').src="IMG/circleref.png";
}
function refbuts4(){
  count=4;
  document.querySelector('.imr1').src="IMG/circleref.png";
  document.querySelector('.imr2').src="IMG/circleref.png";
  document.querySelector('.imr3').src="IMG/circleref.png";
  document.querySelector('.imr4').src="IMG/circlerefactive.png";
  document.querySelector('.imr5').src="IMG/circleref.png";
  document.querySelector('.imr6').src="IMG/circleref.png";
  document.querySelector('.imr1m').src="IMG/circleref.png";
  document.querySelector('.imr2m').src="IMG/circleref.png";
  document.querySelector('.imr3m').src="IMG/circleref.png";
  document.querySelector('.imr4m').src="IMG/circlerefactive.png";
  document.querySelector('.imr5m').src="IMG/circleref.png";
  document.querySelector('.imr6m').src="IMG/circleref.png";
}
function refbuts5(){
  count=5;
  document.querySelector('.imr1').src="IMG/circleref.png";
  document.querySelector('.imr2').src="IMG/circleref.png";
  document.querySelector('.imr3').src="IMG/circleref.png";
  document.querySelector('.imr4').src="IMG/circleref.png";
  document.querySelector('.imr5').src="IMG/circlerefactive.png";
  document.querySelector('.imr6').src="IMG/circleref.png";
  document.querySelector('.imr1m').src="IMG/circleref.png";
  document.querySelector('.imr2m').src="IMG/circleref.png";
  document.querySelector('.imr3m').src="IMG/circleref.png";
  document.querySelector('.imr4m').src="IMG/circleref.png";
  document.querySelector('.imr5m').src="IMG/circlerefactive.png";
  document.querySelector('.imr6m').src="IMG/circleref.png";
}
function refbuts6(){
  count=6;
  document.querySelector('.imr1').src="IMG/circleref.png";
  document.querySelector('.imr2').src="IMG/circleref.png";
  document.querySelector('.imr3').src="IMG/circleref.png";
  document.querySelector('.imr4').src="IMG/circleref.png";
  document.querySelector('.imr5').src="IMG/circleref.png";
  document.querySelector('.imr6').src="IMG/circlerefactive.png";
  document.querySelector('.imr1m').src="IMG/circleref.png";
  document.querySelector('.imr2m').src="IMG/circleref.png";
  document.querySelector('.imr3m').src="IMG/circleref.png";
  document.querySelector('.imr4m').src="IMG/circleref.png";
  document.querySelector('.imr5m').src="IMG/circleref.png";
  document.querySelector('.imr6m').src="IMG/circlerefactive.png";
}

//

function func1(){
    document.querySelector('.active1').style.opacity="1";
    document.querySelector('.active2').style.opacity="0";
    document.querySelector('.active3').style.opacity="0";
}
function func2(){
    document.querySelector('.active1').style.opacity=0;
    document.querySelector('.active2').style.opacity=1;
    document.querySelector('.active3').style.opacity=0;
}
function func3(){
    document.querySelector('.active1').style.opacity=0;
    document.querySelector('.active2').style.opacity=0;
    document.querySelector('.active3').style.opacity=1;
}


let button1=document.querySelector('.mobile-menu-button');
button1.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.mobile-div-lang').style.opacity=1;
        const element = document.querySelector('.mobile-div-lang');
        if (element) {
            element.style.pointerEvents = 'all'; // Ensures pointer events are enabled
            element.style.display = 'block';
        }
});
    

function med(e) {
    e.stopPropagation();  // Prevent the click event from propagating
    const element = document.querySelector('.mobile-div-lang');
    if (element) {
        element.style.opacity = 1;  // Make it visible
        element.style.pointerEvents = 'all';  // Enable pointer events
        element.style.display = 'block';  // Ensure it is displayed
    }
}

document.body.addEventListener('click', (event) => {
    const element = document.querySelector('.mobile-div-lang');
    
    // Check if the click was outside the `.mobile-div-lang` element
    if (element && !element.contains(event.target)) {
        element.style.opacity = 0;  // Make it invisible
        element.style.pointerEvents = 'none';  // Disable pointer events
        element.style.display = 'none';  // Hide the element
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".mx-4, .mx-5, .mx-6, .dmdiv1imgdiv, .dmdiv2p1, .dmdiv2p2, .dmdiv3imgdiv, .dmdiv3textdiv, .dmdiv2imgdiv, .dmdiv1p1, .dmdiv1p2");

  const observerOptions = {
    root: null, // Observe in the viewport
    rootMargin: "0px",
    threshold: 0.3 // Element must be at least 30% visible before animating
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Animating:", entry.target.className); // Debugging log

        // Left-to-Right Animations
        if (entry.target.matches(".dmdiv1imgdiv, .dmdiv2p1, .dmdiv2p2, .dmdiv3imgdiv")) {
          entry.target.classList.add("slide-left");
        } 

        // Right-to-Left Animations
        else if (entry.target.matches(".dmdiv3textdiv, .dmdiv2imgdiv, .dmdiv1p1, .dmdiv1p2")) {
          entry.target.classList.add("slide-right");
        }

        // Apply slide-up animation for .mx-4, .mx-5, .mx-6
        if (entry.target.matches(".mx-4, .mx-5, .mx-6")) {
          entry.target.classList.add("slide-up");
        }

        // Apply staggered delays dynamically
        if (entry.target.classList.contains("dmdiv2p1")) {
          entry.target.style.animationDelay = "0.3s";
        } else if (entry.target.classList.contains("dmdiv2p2")) {
          entry.target.style.animationDelay = "0.5s";  // Ensure .dmdiv2p2 animates after .dmdiv2p1
        }
        
        if (entry.target.classList.contains("dmdiv1p1")) {
          entry.target.style.animationDelay = "0.3s";
        } else if (entry.target.classList.contains("dmdiv1p2")) {
          entry.target.style.animationDelay = "0.5s";  // Ensure .dmdiv1p2 animates after .dmdiv1p1
        }

        observer.unobserve(entry.target); // Prevent re-triggering
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
});
