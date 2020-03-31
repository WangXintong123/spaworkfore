var $Carousel=(function(){
    var code=
    '<div class="slider" id="slider">'+
        '<div class="slide"><img src="img/b5.png" alt=""></div>'+
		'<div class="slide"><img src="img/b1.png" alt=""></div>'+
		'<div class="slide"><img src="img/b2.png" alt=""></div>'+
		'<div class="slide"><img src="img/b3.png" alt=""></div>'+
		'<div class="slide"><img src="img/b4.png" alt=""></div>'+
		'<div class="slide"><img src="img/b5.png" alt=""></div>'+
		'<div class="slide"><img src="img/b1.png" alt=""></div>'+
	'</div>'+
	'<span id="left">&lt;</span>'+
	'<span id="right">&gt;</span>'+
	'<ul class="nav" id="navs">'+
		'<li>1</li>'+
		'<li>2</li>'+
		'<li>3</li>'+
		'<li>4</li>'+
		'<li>5</li>'+
    '</ul>'
    var link={
        container:'#box'
    }
    // var slide=document.getElementsByClassName("slide");
    // var slider=document.getElementsByClassName('slider')[0];
    // var right=document.getElementById("right");
    // var left=document.getElementById("left");
    // var navs=document.getElementById('navs');
    var timer;
    var index=0;
    function show(conf){
        var $div=$(code)
        $(link.container).append($div)
        $.extend(link,conf);
        console.log($div)

    }
    function mouse(){
        var slide=document.getElementsByClassName("slide");
        var right=document.getElementById("right");
        var left=document.getElementById("left");
        for(var i=0;i<slide.length;i++){
            slide[i].onmouseover=function(){
                right.style.opacity=1
                left.style.opacity=1
                clearInterval(timer)
            }
            slide[i].onmouseout=function(){
                right.style.opacity=0;
                left.style.opacity=0;
                play();
            }
        }
    }
    function change(){
        var right=document.getElementById("right");
        var left=document.getElementById("left");
        right.onmouseover=function(){
            this.style.opacity=1
            left.style.opacity=1
            clearInterval(timer)
         }
         right.onmouseout=function(){
            play();
         }
         left.onmouseover=function(){
             this.style.opacity=1
             right.style.opacity=1
             clearInterval(timer)
         }
         left.onmouseout=function(){
            play();
         }
        right.onclick = function () {
            next();
        }
        left.onclick = function () {
            prev();
        }
    }
   
    function next(){
        var slider=document.getElementsByClassName('slider')[0];
        var newLeft;
        console.log(slider.offsetLeft)
        if(slider.offsetLeft===-7200){
            newLeft=-2400;
        }else{
            newLeft=parseInt(slider.offsetLeft)-1200;
        }
        slider.style.left=newLeft+"px";
        index++;
        if(index>4) index=0
        navPlay();
    }
    function prev(){
        var slider=document.getElementsByClassName('slider')[0];
        var newLeft;
        if(slider.offsetLeft===0){
            newLeft=-4800;
        }else{
            newLeft=parseInt(slider.offsetLeft)+1200;
        }
        slider.style.left=newLeft+"px";
        index--;
        if(index<0) index=4
        navPlay();
    }
    function play(){
        timer=setInterval(function(){
            next();
            navPlay();
        },2000)
    }
    // navs.children[0].style.background = "red";
    // play();

    function navPlay(){
        console.log(navs.children[index])
        
        for(var i=0; i<navs.children.length; i++){
            navs.children[i].style.background="#ccc";
        }
        navs.children[index].style.background = "red";
    }

    function dot(){
        var navs=document.getElementById('navs');
        for (var i=0; i<navs.children.length; i++){
            (function(i){
                navs.children[i].onclick = function () {
                    var dis=index-i;
                    if(index==4 && parseInt(slider.offsetLeft)!==-6000){
                        dis=dis-5;     
                    }
                    if(index==0 && parseInt(slider.offsetLeft)!== -1200){
                        dis=5+dis;
                    }
                    slider.style.left=(parseInt(slider.offsetLeft)+dis*1200)+"px";
                    index=i;
                    navPlay();
                }
            })(i);            
        }
    }
    return{
        show:show,
        mouse:mouse,
        change:change,
        next:next,
        prev:prev,
        play:play,
        navPlay:navPlay,
        dot:dot
    }


}())
    




// for(var i=0;i<slide.length;i++){
//     slide[i].onmouseover=function(){
//         right.style.opacity=1
//         left.style.opacity=1
//         clearInterval(timer)
//     }
//     slide[i].onmouseout=function(){
//         right.style.opacity=0;
//         left.style.opacity=0;
//         play();
//     }
// }
// right.onmouseover=function(){
//     this.style.opacity=1
//     left.style.opacity=1
//     clearInterval(timer)
//  }
//  right.onmouseout=function(){
//     play();
//  }
//  left.onmouseover=function(){
//      this.style.opacity=1
//      right.style.opacity=1
//      clearInterval(timer)
//  }
//  left.onmouseout=function(){
//     play();
//  }
// right.onclick = function () {
//     next();
// }
// left.onclick = function () {
//     prev();
// }
// function next(){
//     var newLeft;
//     console.log(slider.offsetLeft)
//     if(slider.offsetLeft===-7200){
//         newLeft=-2400;
//     }else{
//         newLeft=parseInt(slider.offsetLeft)-1200;
//     }
//     slider.style.left=newLeft+"px";
//     index++;
//     if(index>4) index=0
//     navPlay();
// }
// function prev(){
//     var newLeft;
//     if(slider.offsetLeft===0){
//         newLeft=-4800;
//     }else{
//         newLeft=parseInt(slider.offsetLeft)+1200;
//     }
//     slider.style.left=newLeft+"px";
//     index--;
//     if(index<0) index=4
//     navPlay();
// }
// function play(){
//     timer=setInterval(function(){
//         next();
//         navPlay();
//     },2000)
// }
// navs.children[0].style.background = "red";
// play();

// function navPlay(){
//     console.log(navs.children[index])
    
//     for(var i=0; i<navs.children.length; i++){
//         navs.children[i].style.background="#ccc";
//     }
//     navs.children[index].style.background = "red";
// }

// function dot(){
//     for (var i=0; i<navs.children.length; i++){
//         (function(i){
//             navs.children[i].onclick = function () {
//                 var dis=index-i;
//                 if(index==4 && parseInt(slider.offsetLeft)!==-6000){
//                     dis=dis-5;     
//                 }
//                 if(index==0 && parseInt(slider.offsetLeft)!== -1200){
//                     dis=5+dis;
//                 }
//                 slider.style.left=(parseInt(slider.offsetLeft)+dis*1200)+"px";
//                 index=i;
//                 navPlay();
//             }
//         })(i);            
//     }
// }
// dot();


