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

var num = 1;


Group.addEventListener('click', () => {
    if (bar.style.display === 'none' || bar.style.display === '') {
        bar.style.display = 'flex'; // 顯示 #bar
    } else {
        bar.style.display = 'none'; // 隱藏 #bar
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
        project4.style.display = 'grid';
        img1.style.zIndex = '1';
        img1.style.width= '240px';
        img1.style.height= '360px';
        img1.style.top='226px';
        img1.style.left= '965px';
        img4.style.zIndex = '3';
        img4.style.width= '320px';
        img4.style.height= '480px';
        img4.style.top='166px';
        img4.style.left= '560px';
        img3.style.zIndex = '1';
        img3.style.width= '240px';
        img3.style.height= '360px';
        img3.style.top='226px';
        img3.style.left= '235px';
        img3.style.display = 'flex';
        img2.style.display = 'none';
        num = 4;
    }
    if(num==1){
        project1.style.display = 'grid';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        img2.style.zIndex = '1';
        img2.style.width= '240px';
        img2.style.height= '360px';
        img2.style.top='226px';
        img2.style.left= '965px';
        img1.style.zIndex = '3';
        img1.style.width= '320px';
        img1.style.height= '480px';
        img1.style.top='166px';
        img1.style.left= '560px';
        img4.style.zIndex = '1';
        img4.style.width= '240px';
        img4.style.height= '360px';
        img4.style.top='226px';
        img4.style.left= '235px';
        img4.style.display = 'flex';
        img3.style.display = 'none';
    }
    if(num==2){
        project1.style.display = 'none';
        project2.style.display = 'grid';
        project3.style.display = 'none';
        project4.style.display = 'none';
        img3.style.zIndex = '1';
        img3.style.width= '240px';
        img3.style.height= '360px';
        img3.style.top='226px';
        img3.style.left= '965px';
        img2.style.zIndex = '3';
        img2.style.width= '320px';
        img2.style.height= '480px';
        img2.style.top='166px';
        img2.style.left= '560px';
        img1.style.zIndex = '1';
        img1.style.width= '240px';
        img1.style.height= '360px';
        img1.style.top='226px';
        img1.style.left= '235px';
        img1.style.display = 'flex';
        img4.style.display = 'none';
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'grid';
        project4.style.display = 'none';
        img4.style.zIndex = '1';
        img4.style.width= '240px';
        img4.style.height= '360px';
        img4.style.top='226px';
        img4.style.left= '965px';
        img3.style.zIndex = '3';
        img3.style.width= '320px';
        img3.style.height= '480px';
        img3.style.top='166px';
        img3.style.left= '560px';
        img2.style.zIndex = '1';
        img2.style.width= '240px';
        img2.style.height= '360px';
        img2.style.top='226px';
        img2.style.left= '235px';
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
        project4.style.display = 'grid';
        img1.style.zIndex = '1';
        img1.style.width= '240px';
        img1.style.height= '360px';
        img1.style.top='226px';
        img1.style.left= '965px';
        img4.style.zIndex = '3';
        img4.style.width= '320px';
        img4.style.height= '480px';
        img4.style.top='166px';
        img4.style.left= '560px';
        img3.style.zIndex = '1';
        img3.style.width= '240px';
        img3.style.height= '360px';
        img3.style.top='226px';
        img3.style.left= '235px';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        num = 1;
    }
    if(num==2){
        project1.style.display = 'grid';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        img2.style.zIndex = '1';
        img2.style.width= '240px';
        img2.style.height= '360px';
        img2.style.top='226px';
        img2.style.left= '965px';
        img1.style.zIndex = '3';
        img1.style.width= '320px';
        img1.style.height= '480px';
        img1.style.top='166px';
        img1.style.left= '560px';
        img4.style.zIndex = '1';
        img4.style.width= '240px';
        img4.style.height= '360px';
        img4.style.top='226px';
        img4.style.left= '235px';
        img2.style.display = 'flex';
        img3.style.display = 'none';
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'grid';
        project3.style.display = 'none';
        project4.style.display = 'none';
        img3.style.zIndex = '1';
        img3.style.width= '240px';
        img3.style.height= '360px';
        img3.style.top='226px';
        img3.style.left= '965px';
        img2.style.zIndex = '3';
        img2.style.width= '320px';
        img2.style.height= '480px';
        img2.style.top='166px';
        img2.style.left= '560px';
        img1.style.zIndex = '1';
        img1.style.width= '240px';
        img1.style.height= '360px';
        img1.style.top='226px';
        img1.style.left= '235px';
        img3.style.display = 'flex';
        img4.style.display = 'none';
    }
    if(num==4){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'grid';
        project4.style.display = 'none';
        img4.style.zIndex = '1';
        img4.style.width= '240px';
        img4.style.height= '360px';
        img4.style.top='226px';
        img4.style.left= '965px';
        img3.style.zIndex = '3';
        img3.style.width= '320px';
        img3.style.height= '480px';
        img3.style.top='166px';
        img3.style.left= '560px';
        img2.style.zIndex = '1';
        img2.style.width= '240px';
        img2.style.height= '360px';
        img2.style.top='226px';
        img2.style.left= '235px';
        img4.style.display = 'flex';
        img1.style.display = 'none';
    }
});

projectC.addEventListener('click', () => {
    if (project.style.display === 'none' || project.style.display === '') {
        project.style.display = 'flex'; // 顯示 #bar
    } else {
        project.style.display = 'none'; // 隱藏 #bar
    }
});

close.addEventListener('click', () => {
    project.style.display = 'none'; // 顯示 #bar
});