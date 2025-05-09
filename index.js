const Group = document.getElementById("group");
const bar = document.getElementById('social-media-bar'); // 獲取 #bar
const place1 = document.getElementById('place1');
const place2 = document.getElementById('place2');
const place1p = place1.querySelector('p');
const place2p = place2.querySelector('p');
const placeinfo1 = document.getElementById('place-info1');
const placeinfo2 = document.getElementById('place-info2');
const Rectangle = document.getElementById('Rectangle');
const project = document.getElementById('Project-page');
const projectC = document.getElementById('project-chose-button');
const close = document.getElementById('close');
const hamber = document.getElementById('hamber-button');
const hamber1 = document.getElementById('hamber');
const ProjectChose =  document.getElementById('project-chose-button1');
const map1 =  document.getElementById('map');
const map2 =  document.getElementById('map2');

var place = 1 ;

Group.addEventListener('click', () => {
    if (bar.style.display === 'none' || bar.style.display === '') {
        bar.style.display = 'flex'; // 顯示 #bar
    } else {
        bar.style.display = 'none'; // 隱藏 #bar
    }
});

hamber.addEventListener('click', () => {
    if (hamber1.style.display === 'none' || hamber1.style.display === '') {
        hamber1.style.display = 'flex'; // 顯示 #bar
    } else {
        hamber1.style.display = 'none'; // 隱藏 #bar
    }
});

place1.addEventListener('mouseover', function() {
    if (place == 2){
        place1p.style.color = 'rgba(150, 239, 255, 1)';
        place1p.style.textShadow = ' 0 0 5px rgba(255, 255, 255, 0.7)';
    }
});

place1.addEventListener('mouseout', function() {
        place1p.style.color = '#FFF';
        place1p.style.textShadow = 'none';
});

place2.addEventListener('mouseover', function() {
    if (place == 1){
        place2p.style.color = 'rgba(150, 239, 255, 1)';
        place2p.style.textShadow = ' 0 0 5px rgba(255, 255, 255, 0.7)';
    }
});

place2.addEventListener('mouseout', function() {
    place2p.style.color = '#FFF';
    place2p.style.textShadow = 'none';
});

place1.addEventListener('click', () => {
    placeinfo1.style.display = 'flex'; // 顯示 #bar
    placeinfo2.style.display = 'none'; // 隱藏 #bar
    Rectangle.style.top = '78px';

    place = 1; 
});

place2.addEventListener('click', () => {
    placeinfo2.style.display = 'flex'; // 顯示 #bar
    placeinfo1.style.display = 'none'; // 隱藏 #bar
    Rectangle.style.top = '360px';
    place = 2;
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