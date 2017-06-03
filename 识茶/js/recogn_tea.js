window.onload =function(){

    // 轮播图
    var container = document.getElementById('carousel');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    var animated = false;
    var timer;

    //下面的小圆圈的属性的变化
    function showButton(){
        for(var i =0;i<buttons.length;i++){
            if(buttons[i].className =="on"){
                buttons[i].className ='';
                break;
            }
        }
        buttons[index - 1].className = "on";
    }

    //图片切换函数
    function animate(offset){
        animated = true;
        var time = 300 ;//位移总时间
        var interval = 20;//位移间隔时间
        var speed = offset/(time/interval);//每次位移量
        var newLeft = parseInt(list.style.left) + offset;
        function go(){
            if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed >0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go,interval);
            }//在一张图和两一张图切换过程中的动画实现
            else{
                animated = false;
                list.style.left = newLeft +'px';
                if(newLeft>-865){//如果一直向左点击，点击到第一张图的时候，返回到最后一张
                    list.style.left = -3460 + 'px';
                }
                if(newLeft<-3460){//如果一直向右点击，点击到最后一张图的时候，返回到第一张
                    list.style.left = -865 + 'px';
                }
            }
        }
        go();
        
    }
    //实现图片自动播放
    function play(){
        timer = setInterval(function(){
            next.onclick();
        },3000);
    }
    //去除图片自动播放
    function stop(){
        clearInterval(timer);
    }
    //点击图片右边的按钮，让图片切换到下一张
    next.onclick = function(){
        if(index == 4){
            index = 1;
        }
        else{
            index +=1;
        }
        showButton();
        if(!animated){
            animate(-865);
        }
    }

    //点击图片左边的按钮，让图片切换到上一张
    prev.onclick = function(){
        if(index == 1){
            index = 4;
        }
        else{
            index -=1;
        }
        showButton();
        if (!animated) {
            animate(865);
        }
        
    }
    //为每一个小圆圈添加点击事件
    for(var i = 0;i<buttons.length;i++){
        buttons[i].onclick = function(){
            if(this.className == "on"){
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            offset = -865*(myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
        }
    }
    //鼠标移上去，图片不自动播放
    container.onmouseover = stop;
    //鼠标移开，图片实现自动播放
    container.onmouseout = play;
    play();

    // 点击logo事件
    //获取识图
    // var tea_bottom = document.getElementById("tea_bottom");
    //获取首页
    // var first_index = document.getElementById("first_index");
    // var logo = document.getElementById("tea_logo");
    // logo.onclick = function(){
    //     tea_bottom.style.display = "none";
    //     first_index.style.display = "block";
    // }

    //点击首页按钮
    // var nav_index = document.getElementById("nav_index");
    // nav_index.onclick = function(){
    //     tea_bottom.style.display = "none";
    //     first_index.style.display = "block";
    //     nav_index.style.color = "#F69293";
    //     nav_recogn.style.color = "";
    // }
    // 点击识茶按钮
    // var nav_recogn = document.getElementById("nav_recogn");
    // nav_recogn.onclick = function(){
    //     tea_bottom.style.display = "block";
    //     first_index.style.display = "none";
    //     nav_recogn.style.color = "#F69293";
    //     nav_index.style.color = "";
    // }
    //点击查看更多茶叶图片
    var none_img1 = document.getElementById("none_img1");
    var none_img2 = document.getElementById("none_img2");
    var none_img3 = document.getElementById("none_img3");
    var none_img4 = document.getElementById("none_img4");
    var search_li = document.getElementById("search_li");
    var search_more = document.getElementById("searchimg_more");
    var img4 = document.getElementById("img4");
    search_more.onclick = function(){
        search_li.style.display ="none";
        none_img1.style.display ="block";
        none_img2.style.display ="block";
        none_img3.style.display ="block";
        img4.src = "images/shouqi.png";   
        none_img4.style.display ="block";
    }
    img4.onclick = function(){
        search_li.style.display ="block";
        none_img1.style.display ="none";
        none_img2.style.display ="none";
        none_img3.style.display ="none";
        none_img4.style.display ="none";
    }

}