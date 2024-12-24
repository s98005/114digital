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

var num = 1;


Group.addEventListener('click', () => {
    if (bar.style.display === 'none' || bar.style.display === '') {
        bar.style.display = 'flex'; // 顯示 #bar
    } else {
        bar.style.display = 'none'; // 隱藏 #bar
    }
});

const projects = document.querySelectorAll('.project-2-1');

    // 迴圈處理每個容器
    projects.forEach((project) => {
      let num1 = 1; // 原本的 num，現改為 num1

      // 取得該容器裡的左右按鈕
      const leftBtn = project.querySelector('.button-left-1');
      const rightBtn = project.querySelector('.button-right-1');

      // 取得該容器裡三個區塊
      const text1 = project.querySelector('.info-p');
      const text2 = project.querySelector('.info-p-1');
      const text3 = project.querySelector('.info-p-2');

      // 預設：顯示第一段
      text1.style.display = 'block';
      text2.style.display = 'none';
      text3.style.display = 'none';

      // 左按鈕
      leftBtn.addEventListener('click', () => {
        num1--;
        // 如果小於 1，則回到 3
        if (num1 < 1) {
          num1 = 3;
        }
        updateDisplay(num1, text1, text2, text3);
      });

      // 右按鈕
      rightBtn.addEventListener('click', () => {
        num1++;
        // 如果大於 3，則回到 1
        if (num1 > 3) {
          num1 = 1;
        }
        updateDisplay(num1, text1, text2, text3);
      });

      // 用於更新顯示
      function updateDisplay(n, t1, t2, t3) {
        // 全部先隱藏
        t1.style.display = 'none';
        t2.style.display = 'none';
        t3.style.display = 'none';

        // 顯示對應段落
        if(n === 1) {
          t1.style.display = 'block';
        } else if(n === 2) {
          t2.style.display = 'block';
        } else if(n === 3) {
          t3.style.display = 'block';
        }
      }

    });




left.addEventListener('click', () => {
    num=num-1;
    if(num==0){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'none';
        project5.style.display = 'grid';
        img1.style.zIndex = '1';
        img1.style.width= '240px';
        img1.style.height= '360px';
        img1.style.top='226px';
        img1.style.left= '965px';
        img5.style.zIndex = '3';
        img5.style.width= '320px';
        img5.style.height= '480px';
        img5.style.top='166px';
        img5.style.left= '560px';
        img4.style.zIndex = '1';
        img4.style.width= '240px';
        img4.style.height= '360px';
        img4.style.top='226px';
        img4.style.left= '235px';
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
        img5.style.zIndex = '1';
        img5.style.width= '240px';
        img5.style.height= '360px';
        img5.style.top='226px';
        img5.style.left= '235px';
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
        img5.style.display = 'none';
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'grid';
        project4.style.display = 'none';
        project5.style.display = 'none';
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
        img5.style.display = 'none';
    }
    if(num==4){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'grid';
        project5.style.display = 'none';
        img5.style.zIndex = '1';
        img5.style.width= '240px';
        img5.style.height= '360px';
        img5.style.top='226px';
        img5.style.left= '965px';
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
        img1.style.zIndex = '1';
        img1.style.width= '240px';
        img1.style.height= '360px';
        img1.style.top='226px';
        img1.style.left= '965px';
        img5.style.zIndex = '3';
        img5.style.width= '320px';
        img5.style.height= '480px';
        img5.style.top='166px';
        img5.style.left= '560px';
        img4.style.zIndex = '1';
        img4.style.width= '240px';
        img4.style.height= '360px';
        img4.style.top='226px';
        img4.style.left= '235px';
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
        img5.style.zIndex = '1';
        img5.style.width= '240px';
        img5.style.height= '360px';
        img5.style.top='226px';
        img5.style.left= '235px';
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
        img5.style.display = 'none';
    }
    if(num==3){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'grid';
        project4.style.display = 'none';
        project5.style.display = 'none';
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
        img5.style.display = 'none';
    }
    if(num==4){
        project1.style.display = 'none';
        project2.style.display = 'none';
        project3.style.display = 'none';
        project4.style.display = 'grid';
        project5.style.display = 'none';
        img5.style.zIndex = '1';
        img5.style.width= '240px';
        img5.style.height= '360px';
        img5.style.top='226px';
        img5.style.left= '965px';
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
        img5.style.display = 'flex';
        img1.style.display = 'none';
        img2.style.display = 'none';
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