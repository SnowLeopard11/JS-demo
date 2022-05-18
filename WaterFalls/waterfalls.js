const container = document.querySelector('.container');
const items = document.querySelectorAll('.item');
// 设定间隙为10
const gap = 10;

// 使页面可以提前加载，无需等待调用
window.onload = function(){
    waterFall();
}

const waterFall = function(){
    // 确定列的数量
    let windowWidth = getClient().width;
    let itemWidth = items[0].offsetWidth;
    let columns = parseInt(windowWidth / (itemWidth + gap));

    // 建立arr数组，放置图片高度
    let arr = [];
    for(let i = 0 ;i<items.length;i++){
        if(i < columns){
            // 满足此条件则图片放在第一行
            items[i].style.top = 0;
            items[i].style.left = (itemWidth + gap) * i + 'px';
            arr.push(items[i].offsetHeight);
        }else{
            // 将图片放在其他行
            let minheight = Math.min(...arr);
            let minIndex = arr.indexOf(minheight);
            let offsetLeft = items[minIndex].offsetLeft;
            items[i].style.position = "absolute";
            items[i].style.left = offsetLeft + "px";
            items[i].style.top = minheight + "px";
            arr[minIndex] += items[i].offsetHeight;
        }
    }
}

// 获取滚动高度
const scrollTop = function(){
    return window.pageYOffset || document.documentElement.scrollTop;
}

// 获取屏幕可视区域的宽与高
const getClient = function(){
    return{
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}

// 页面尺寸发生变化时触发瀑布流
window.onresize = function(){
    console.log('resize');
    window.location.reload();
}