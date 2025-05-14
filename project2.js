const Group = document.getElementById("group");
const bar = document.getElementById('social-media-bar'); // 獲取 #bar
const left=document.getElementById("button-left");
const right=document.getElementById("button-right");
const project1=document.getElementById("project-container1");
const project2=document.getElementById("project-container2");
const project3=document.getElementById("project-container3");
const project4=document.getElementById("project-container4");
const project5=document.getElementById("project-container5");
const img1=document.getElementById("project1");
const img2=document.getElementById("project2");
const img3=document.getElementById("project3");
const img4=document.getElementById("project4");
const img5=document.getElementById("project5");
const project = document.getElementById('Project-page');
const projectC = document.getElementById('project-chose-button');
const close = document.getElementById('close');
const hamber = document.getElementById('hamber-button');
const hamber1 = document.getElementById('hamber');

const ProjectChose =  document.getElementById('project-chose-button1');


var num = 1;


Group.addEventListener('click', () => {
        if (bar.style.display === 'none' || bar.style.display === '') {
            bar.style.display = 'flex'; // 顯示 #bar
        } else {
            bar.style.display = 'none'; // 隱藏 #bar
        }
        project.style.display = 'none'; // 隱藏 #bar
        projectC.classList.remove('active');
    });
    
hamber.addEventListener('click', () => {
        if (hamber1.style.display === 'none' || hamber1.style.display === '') {
            hamber1.style.display = 'flex'; // 顯示 #bar
        } else {
            hamber1.style.display = 'none'; // 隱藏 #bar
        }
    });

document.querySelectorAll('.project-2-1').forEach((project) => {
  const leftBtn = project.querySelector('.button-left-1');
  const rightBtn = project.querySelector('.button-right-1');

  const texts = Array.from(project.querySelectorAll('.info-p, .info-p-1, .info-p-2'));
  let currentIndex = 0;

  // 初始化：只顯示第一個
  texts.forEach((el, idx) => {
    el.style.display = idx === currentIndex ? 'flex' : 'none';
  });

  function updateDisplay(index) {
    texts.forEach((el, i) => {
      el.style.display = i === index ? 'flex' : 'none';
    });
  }

  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateDisplay(currentIndex);
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateDisplay(currentIndex);
  });
});




left.addEventListener('click', () => {
    num=num-1;
    if(num==0){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'block';
        img4.style.zIndex = '1';
        img4.style.width= '17vw';
        img4.style.height= '25.5vw';
        img4.style.top='30vh';
        img4.style.left= '13.5vw';
        img5.style.zIndex = '3';
        img5.style.width= '22vw';
        img5.style.height= '33vw';
        img5.style.top='22vh';
        img5.style.left= '38.5vw';
        img1.style.zIndex = '1';
        img1.style.width= '17vw';
        img1.style.height= '25.5vw';
        img1.style.top='30vh';
        img1.style.left= '69.5vw';
        img4.style.display = 'flex';
        img2.style.display = 'none';
        img3.style.display = 'none';
        num = 5;
    }
    if(num==1){
        project1.style.display = 'grid';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'none';
        img5.style.zIndex = '1';
        img5.style.width= '17vw';
        img5.style.height= '25.5vw';
        img5.style.top='30vh';
        img5.style.left= '13.5vw';
        img1.style.zIndex = '3';
        img1.style.width= '22vw';
        img1.style.height= '33vw';
        img1.style.top='22vh';
        img1.style.left= '38.5vw';
        img2.style.zIndex = '1';
        img2.style.width= '17vw';
        img2.style.height= '25.5vw';
        img2.style.top='30vh';
        img2.style.left= '69.5vw';
        img5.style.display = 'flex';
        img3.style.display = 'none';
        img4.style.display = 'none';
    }
    if(num==2){
        project1.style.display = 'none';
        project2.style.display = 'grid';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'none';
        img1.style.zIndex = '1';
        img1.style.width= '17vw';
        img1.style.height= '25.5vw';
        img1.style.top='30vh';
        img1.style.left= '13.5vw';
        img2.style.zIndex = '3';
        img2.style.width= '22vw';
        img2.style.height= '33vw';
        img2.style.top='22vh';
        img2.style.left= '38.5vw';
        img3.style.zIndex = '1';
        img3.style.width= '17vw';
        img3.style.height= '25.5vw';
        img3.style.top='30vh';
        img3.style.left= '69.5vw';
        img1.style.display = 'flex';
        img4.style.display = 'none';
        img5.style.display = 'none';
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'grid';
        project4.style.display = 'none';
        project5.style.display = 'none';
        img2.style.zIndex = '1';
        img2.style.width= '17vw';
        img2.style.height= '25.5vw';
        img2.style.top='30vh';
        img2.style.left= '13.5vw';
        img3.style.zIndex = '3';
        img3.style.width= '22vw';
        img3.style.height= '33vw';
        img3.style.top='22vh';
        img3.style.left= '38.5vw';
        img4.style.zIndex = '1';
        img4.style.width= '17vw';
        img4.style.height= '25.5vw';
        img4.style.top='30vh';
        img4.style.left= '69.5vw';
        img2.style.display = 'flex';
        img1.style.display = 'none';
        img5.style.display = 'none';
    }
    if(num==4){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'grid';
        project5.style.display = 'none';
        img3.style.zIndex = '1';
        img3.style.width= '17vw';
        img3.style.height= '25.5vw';
        img3.style.top='30vh';
        img3.style.left= '13.5vw';
        img4.style.zIndex = '3';
        img4.style.width= '22vw';
        img4.style.height= '33vw';
        img4.style.top='22vh';
        img4.style.left= '38.5vw';
        img5.style.zIndex = '1';
        img5.style.width= '17vw';
        img5.style.height= '25.5vw';
        img5.style.top='30vh';
        img5.style.left= '69.5vw';
        img3.style.display = 'flex';
        img1.style.display = 'none';
        img2.style.display = 'none';
    }
});

right.addEventListener('click', () => {
    num=num+1;
    if(num==5){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'grid';
        img4.style.zIndex = '1';
        img4.style.width= '17vw';
        img4.style.height= '25.5vw';
        img4.style.top='30vh';
        img4.style.left= '13.5vw';
        img5.style.zIndex = '3';
        img5.style.width= '22vw';
        img5.style.height= '33vw';
        img5.style.top='22vh';
        img5.style.left= '38.5vw';
        img1.style.zIndex = '1';
        img1.style.width= '17vw';
        img1.style.height= '25.5vw';
        img1.style.top='30vh';
        img1.style.left= '69.5vw';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        img3.style.display = 'none';
    }
    if(num==6){
        project1.style.display = 'grid';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'none';
        img5.style.zIndex = '1';
        img5.style.width= '17vw';
        img5.style.height= '25.5vw';
        img5.style.top='30vh';
        img5.style.left= '13.5vw';
        img1.style.zIndex = '3';
        img1.style.width= '22vw';
        img1.style.height= '33vw';
        img1.style.top='22vh';
        img1.style.left= '38.5vw';
        img2.style.zIndex = '1';
        img2.style.width= '17vw';
        img2.style.height= '25.5vw';
        img2.style.top='30vh';
        img2.style.left= '69.5vw';
        img2.style.display = 'flex';
        img3.style.display = 'none';
        img4.style.display = 'none';
        num = 1;
    }
    if(num==2){
        project1.style.display = 'none';
        project2.style.display = 'grid';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'none';
        img1.style.zIndex = '1';
        img1.style.width= '17vw';
        img1.style.height= '25.5vw';
        img1.style.top='30vh';
        img1.style.left= '13.5vw';
        img2.style.zIndex = '3';
        img2.style.width= '22vw';
        img2.style.height= '33vw';
        img2.style.top='22vh';
        img2.style.left= '38.5vw';
        img3.style.zIndex = '1';
        img3.style.width= '17vw';
        img3.style.height= '25.5vw';
        img3.style.top='30vh';
        img3.style.left= '69.5vw';
        img3.style.display = 'flex';
        img4.style.display = 'none';
        img5.style.display = 'none';
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'grid';
        project4.style.display = 'none';
        project5.style.display = 'none';
        img2.style.zIndex = '1';
        img2.style.width= '17vw';
        img2.style.height= '25.5vw';
        img2.style.top='30vh';
        img2.style.left= '13.5vw';
        img3.style.zIndex = '3';
        img3.style.width= '22vw';
        img3.style.height= '33vw';
        img3.style.top='22vh';
        img3.style.left= '38.5vw';
        img4.style.zIndex = '1';
        img4.style.width= '17vw';
        img4.style.height= '25.5vw';
        img4.style.top='30vh';
        img4.style.left= '69.5vw';
        img4.style.display = 'flex';
        img1.style.display = 'none';
        img5.style.display = 'none';
    }
    if(num==4){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'grid';
        project5.style.display = 'none';
        img3.style.zIndex = '1';
        img3.style.width= '17vw';
        img3.style.height= '25.5vw';
        img3.style.top='30vh';
        img3.style.left= '13.5vw';
        img4.style.zIndex = '3';
        img4.style.width= '22vw';
        img4.style.height= '33vw';
        img4.style.top='22vh';
        img4.style.left= '38.5vw';
        img5.style.zIndex = '1';
        img5.style.width= '17vw';
        img5.style.height= '25.5vw';
        img5.style.top='30vh';
        img5.style.left= '69.5vw';
        img5.style.display = 'flex';
        img1.style.display = 'none';
        img2.style.display = 'none';
    }
});

projectC.addEventListener('click', () => {
        if (project.style.display === 'none' || project.style.display === '') {
            project.style.display = 'flex'; // 顯示 #bar
            bar.style.display = 'none';
            projectC.classList.add('active');
        } else {
            project.style.display = 'none'; // 隱藏 #bar
            projectC.classList.remove('active');
        }
        this.classList.toggle('active');
    });

    close.addEventListener('click', () => {
        project.style.display = 'none'; // 顯示 #bar
        projectC.classList.remove('active');
    });

ProjectChose.addEventListener('click', () => {
        if (project.style.display === 'none' || project.style.display === '') {
            project.style.display = 'flex'; // 顯示 #bar
            bar.style.display = 'none';
        } else {
            project.style.display = 'none'; // 隱藏 #bar
        }
    })

function updateSkew() {
        let skewValue = (window.innerWidth / 100) * -1.3; // 根據視窗寬度計算 `skew`
        projectC.style.transform = `skew(${skewValue}deg)`;
    }

    // 視窗變動

window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            bar.style.display = 'none';
            project.style.display = 'none'; // 隱藏 #bar
            projectC.classList.remove('active');
        }
        else if (window.innerWidth > 768) {
            hamber1.style.display = 'none';
        }
    });

function updateImage() {
        const buttonImage = document.querySelector("#close img");
        
        if (window.innerWidth < 768) {
            buttonImage.src = "img/hamburger menu button (1).png";
        } else {
            buttonImage.src = "img/close 1.png";
        }
    }

function showText(button) {
  const text = button.getAttribute('data-text');
  const menberDiv = button.closest('.menber');
  const workText = menberDiv.querySelector('.work-text h4');

  workText.textContent = text;
  menberDiv.querySelector('.work-text').style.display = 'flex';
}

window.addEventListener("load", updateSkew);
window.addEventListener("resize", updateSkew);
window.addEventListener("resize", updateImage);
window.addEventListener("load", updateImage);