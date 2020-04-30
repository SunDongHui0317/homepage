import './index.scss';
const $ = selector => document.querySelector(selector);

$(".node").addEventListener('click', function(){
    console.log("点击！")
})
