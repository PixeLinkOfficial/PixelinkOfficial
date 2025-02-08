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
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
})

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

function changeLanguage(selectElement) {
    const selectedValue = selectElement.value;

    if (selectedValue === "العربية") 
        // Call the function to switch to Arabic
        arabic();
}

function arabic(){
    alert('hi');
    document.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/x3.css">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    
    <title>الصفحة الرئيسية</title>
</head>
<body>
    <div class="header">
        <div class="div-logo">
            <a class="nochangea" href="index.html"><img src="IMG/1-01.png" class="img-logo"></a>
        </div>

        <div class="div-buts">
            <div class="mx mx-4"><a class="nochangea" href="index.html" onclick="func1();"><p class="m-0">الصفحة الرئيسية</p><div class="active active1">_</div></a></div>
            <div class="mx mx-5"><a class="nochangea" href="x4.html" onclick="func2();"><p class=" m-1">القائمة الرقمية</p><div class="active active2">_</div></a></div>
            <div class="mx mx-6"><a class="nochangea" href="x.html" onclick="func3();"><p class="m-2">اتصل بنا</p><div class="active active3">_</div></a></div>
        </div>

        <div class="div-lang">
            <select class="div-but">
                <option>English</option>
                <option>العربية</option>
                <option>كردي</option>
            </select>
        </div>
        <div class="mobile-option-bar">
             <div class="mdiv1">
                <button class="mobile-menu-button" onclick="mobilemenu();"><img src="IMG/menubar.png" class="mobile-image"></button>
                <div class="mobile-div-lang">
                    <div class="mobile-div-buts">
                        <div class="mmm1 mmm mx mx-4"><a class="nochangea" href="index.html" onclick="func1();"><p class="m-0">الصفحة الرئيسية</p><div class="active active1">_</div></a></div>
                        <div class="mmm2 mmm mx mx-5"><a class="nochangea" href="x4.html" onclick="func2();"><p class=" m-1">القائمة الرقمية</p><div class="active active2">_</div></a></div>
                        <div class="mmm3 mmm mx mx-6"><a class="nochangea" href="x.html" onclick="func3();"><p class="m-2">اتصل بنا</p><div class="active active3">_</div></a></div>
                    </div>
                    <div class="mobile-div-but">
                    <select class="div-but" onclick="med();">
                        <option>English</option>
                        <option>العربية</option>
                        <option>كردي</option>
                    </select>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    <div class="container container1" style="width: 100%; margin-top: 70px; padding: 0; overflow: visible;"> 
        <div id="myCarousel1" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel1" data-slide-to="1"></li>
            <li data-target="#myCarousel1" data-slide-to="2"></li>
          </ol>
          
          <!-- Wrapper for slides -->
          <div class="carousel-inner" style="overflow: visible; height: 800px;">
            <div class="item active item1">
              <img src="CSS/backHome.jpg" alt="لوس أنجلوس" class="imgdb" style="width:100%; height: 800px; object-fit: cover; object-position: center;">
              <div class="item-abs" style="position: absolute; top: 60px; left: 100px; text-align: left; color: white;">
                <h1 class="h1">حقق رؤيتك مع تصميم جرافيك احترافي، مواقع ويب مخصصة، تطبيقات موبايل، وقوائم رقمية ديناميكية تميز عملك</h1>
              </div>
              <div class="list-div">
                <ul>
                  <li><p>حلول سهلة وسريعة وآمنة</p></li>
                  <li><p>مميزات وخيارات مخصصة</p></li>
                  <li><p>تصاميم جرافيك فريدة ومتطورة</p></li>
                  <li><p>تطوير مواقع ويب سلس</p></li>
                  <li><p>إنشاء تطبيقات موبايل مبتكرة</p></li>
                  <li><p>قوائم رقمية ديناميكية لأي عمل</p></li>
                </ul>
                <a href="x.html" class="a-Try-now" style="color: #2e3192;"><button class="Try-now" style="color: #2e3192;">جرب الآن</button></a>
              </div>
            </div>
      
            <div class="item item2">
              <img class="imgdb" src="IMG/2m.jpg" alt="شيكاغو" style="width:100%; height: 800px; object-fit: cover; object-position: center;">
              <div class="item-abs" style="position: absolute; top: 40px; left: 100px; text-align: left; color: white; font-size: 50px;">
                <h1 class="h1" style="color: #2e3192;">افتح إمكانيات علامتك التجارية مع تصميم جرافيك احترافي، مواقع ويب مذهلة، تطبيقات موبايل مخصصة، ومحتوى مرئي جذاب يعزز عملك!</h1>
              </div>
              <div class="list-div">
                <ul style="color: #2e3192;">
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>حلول تصميم مبدعة ومخصصة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>مميزات استثنائية ومرونة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>تصاميم مرئية مبتكرة ومدهشة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>تطوير مواقع ويب احترافية ومتجاوبة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>تصميم وتطوير تطبيقات موبايل مخصصة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>محتوى رقمي مثير لجميع المنصات</p></li>
                </ul>
                <a href="x.html" class="a-Try-now" style="color: #2e3192;"><button class="Try-now" style="color: #2e3192;">جرب الآن</button></a>
              </div>
            </div>
      
            <div class="item item3">
              <img class="imgdb" src="IMG/3m.jpg" alt="نيويورك" style="width:100%; height: 800px; object-fit: cover; object-position: center;">
              <div class="item-abs" style="position: absolute; top: 60px; left: 100px; text-align: left; color: white; font-size: 50px;">
                <h1 class="h1" style="color: #2e3192;">حقق رؤيتك مع تصميم جرافيك احترافي، مواقع ويب مخصصة، تطبيقات موبايل، وقوائم رقمية ديناميكية تميز عملك!</h1>
              </div>
              <div class="list-div">
                <ul style="color: #2e3192;">
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>حلول سهلة وسريعة وآمنة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>مميزات وخيارات مخصصة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>تصاميم جرافيك فريدة ومتطورة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>تطوير مواقع ويب سلس</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>إنشاء تطبيقات موبايل مبتكرة</p></li>
                  <li style="list-style-image: url('CSS/bluecheck.png');"><p>قوائم رقمية ديناميكية لأي عمل</p></li>
                </ul>
                <a href="x.html" class="a-Try-now" style="color: #2e3192;"><button class="Try-now" style="color: #2e3192;">جرب الآن</button></a>
              </div>
            </div>
          </div>
      
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel1" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">السابق</span>
          </a>
          <a class="right carousel-control" href="#myCarousel1" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">التالي</span>
          </a>
        </div>
      </div>
      
      <div class="container container2" style="width: 100%; margin-top: 70px; padding: 0; overflow: visible;  border-bottom:none;"> 
        <div id="myCarousel2" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel2" data-slide-to="1"></li>
            <li data-target="#myCarousel2" data-slide-to="2"></li>
          </ol>
          
          <!-- Wrapper for slides -->
          <div class="carousel-inner" style="overflow: visible; height: 800px;">
            <div class="item active item1">
              <img src="CSS/backHome.jpg" alt="لوس أنجلوس" class="imgdb" style="width:100%; height: 800px; object-fit: cover; object-position: center;">
              <div class="item-abs" style="position: absolute; top: 60px; left: 100px; text-align: left; color: white;">
                <h1 class="h1">حقق رؤيتك مع تصميم جرافيك احترافي، مواقع ويب مخصصة، تطبيقات موبايل، وقوائم رقمية ديناميكية تميز عملك!</h1>
              </div>
            </div>
            <!-- Add more items as needed -->
          </div>
        </div>
      </div>
</body>
</html>
        `);
}

