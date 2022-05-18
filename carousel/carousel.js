const left = document.querySelector('#left');
const right = document.querySelector('#right');
const list = document.querySelector('#list');
const buttons = document.querySelectorAll('#button > span');
const container = document.querySelector('#container');

// 点击左右两边箭头切换图片
function slider(value){
    let leftSide = parseInt(list.style.left) + value;
    list.style.left = leftSide + 'px';
    // 设置切换时的间隔时间
    list.style.transition = '300ms ease';
    // 设置最后一张与第一张的无缝切换
    if (leftSide <= -1080){
        list.style.left = 0 + 'px';
    }
    if(leftSide > 0){
        list.style.left = - 810 + 'px';
    }
}

// 圆点显示当前图片
let index = 1;
function showFocus(){
    // 消除其它按钮“on”状态时样式
    for(let i = 0;i < buttons.length;i++){
        if(buttons[i].className == 'on'){
            buttons[i].className = '';
        }
    }
    // 使当前按钮状态为on
    buttons[index - 1].className = 'on';
}
left.onclick = function(){
    index -= 1;
    if(index < 1){
        index = 4;
    }
    showFocus();
    slider(270);
}
right.onclick = function(){
    index += 1;
    if(index > 4){
        index =  1;
    }
    showFocus();
    slider(-270);
}

// 点击圆点按钮切换到相应图片
for(let j = 0;j < buttons.length; j++){
    buttons[j].onclick = function(){
        let buttonIndex = parseInt(this.getAttribute('index'));
        let offset = 270*(index - buttonIndex);
        slider(offset);
        index = buttonIndex;
        showFocus();
    }
}

// 轮播图自动播放
let setTime = 0;
const autoPlay = function(){
    setTime = setInterval(function(){
        right.onclick();
    },2000);
}
const stopPlay = function(){
    clearInterval(setTime);
}

autoPlay();
container.onmouseover = stopPlay;
container.onmouseout = autoPlay;
 

