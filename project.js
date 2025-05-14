const Group = document.getElementById("group");
const bar = document.getElementById('social-media-bar'); // 獲取 #bar
const left=document.getElementById("button-left");
const right=document.getElementById("button-right");
const project1=document.getElementById("project-container1");
const project2=document.getElementById("project-container2");
const project3=document.getElementById("project-container3");
const project4=document.getElementById("project-container4");
const img1=document.getElementById("project1");
const img2=document.getElementById("project2");
const img3=document.getElementById("project3");
const img4=document.getElementById("project4");
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

const project21 = document.querySelector('.project-2-1');

// 取得該卡片內的左右按鈕
const leftBtn = project21.querySelector('.button-left-1');
const rightBtn = project21.querySelector('.button-right-1');

// 取得該卡片內三個段落
const text1 = project21.querySelector('.info-p');
const text2 = project21.querySelector('.info-p-1');
const text3 = project21.querySelector('.info-p-2');

// 用於記錄當前顯示的段落
let num1 = 1;

// 預設顯示第一段
text1.style.display = 'block';
text2.style.display = 'none';
text3.style.display = 'none';

// 左按鈕
leftBtn.addEventListener('click', () => {
  num1--;
  if (num1 < 1) {
    num1 = 3;
  }
  updateDisplay(num1);
});

// 右按鈕
rightBtn.addEventListener('click', () => {
  num1++;
  if (num1 > 3) {
    num1 = 1;
  }
  updateDisplay(num1);
});

// 根據 num 切換段落顯示
function updateDisplay(n) {
  // 先全部隱藏
  text1.style.display = 'none';
  text2.style.display = 'none';
  text3.style.display = 'none';
  // 再顯示對應段落
  if(n === 1) {
    text1.style.display = 'block';
  } else if(n === 2) {
    text2.style.display = 'block';
  } else if(n === 3) {
    text3.style.display = 'block';
  }
}


left.addEventListener('click', () => {
    num=num-1;
    if(num==0){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'flex';
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
        img1.style.zIndex = '1';
        img1.style.width= '17vw';
        img1.style.height= '25.5vw';
        img1.style.top='30vh';
        img1.style.left= '69.5vw';
        img3.style.display = 'flex';
        img2.style.display = 'none';
        num = 4;
    }
    if(num==1){
        project1.style.display = 'flex';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        img4.style.zIndex = '1';
        img4.style.width= '17vw';
        img4.style.height= '25.5vw';
        img4.style.top='30vh';
        img4.style.left= '13.5vw';
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
        img4.style.display = 'flex';
        img3.style.display = 'none';
    }
    if(num==2){
        project1.style.display = 'none';
        project2.style.display = 'flex';
        project3.style.display = 'none';
        project4.style.display = 'none';
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
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'flex';
        project4.style.display = 'none';
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
    }
});

right.addEventListener('click', () => {
    num=num+1;
    if(num==5){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'flex';
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
        img1.style.zIndex = '1';
        img1.style.width= '17vw';
        img1.style.height= '25.5vw';
        img1.style.top='30vh';
        img1.style.left= '69.5vw';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        num = 1;
    }
    if(num==2){
        project1.style.display = 'flex';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        img4.style.zIndex = '1';
        img4.style.width= '17vw';
        img4.style.height= '25.5vw';
        img4.style.top='30vh';
        img4.style.left= '13.5vw';
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
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'flex';
        project3.style.display = 'none';
        project4.style.display = 'none';
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
    }
    if(num==4){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'flex';
        project4.style.display = 'none';
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

window.addEventListener("load", updateSkew);
window.addEventListener("resize", updateSkew);
window.addEventListener("resize", updateImage);
window.addEventListener("load", updateImage);