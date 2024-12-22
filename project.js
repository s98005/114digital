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

var num = 1;

Group.addEventListener('click', () => {
    if (bar.style.display === 'none' || bar.style.display === '') {
        bar.style.display = 'flex'; // 顯示 #bar
    } else {
        bar.style.display = 'none'; // 隱藏 #bar
    }
});

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