
let icecream = 'chocolate';
if(icecream === 'chocolate'){
    alert('我最喜欢冰淇淋了');
}else{
    alert('但是啤酒才我是的最爱啊');
}
function  multiply(num1,num2){
    let result = num1 * num2;
    return result;
}
multiply(4,8);
multiply(15.15);
multiply(0.3,6);
// document.querySelector('html').onclick = function(){
//     alert('别戳我，我怕疼');
// }
let myImage = document.querySelector('img');

myImage.onclick = function(){
    // console.log('12')
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './12344.jpg'){
        myImage.setAttribute('src','./2223.jpg');
    }else{
        myImage.setAttribute('src','./12344.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
// function setUserName(){
//     let myName = prompt('请输入你的名字');
//     localStorage.setItem('name',myName);
//     myHeading.textContent = '太帅了,'+myName;
// }
// if(!localStorage.getItem('name')){
//     setUserName();
// }else{
//     let storedName = localStorage.setItem('name');
//     myHeading.textContent = '太帅了，' + storedName;
// }
myButton.onclick = function(){
    setUserName();
}
function setUserName(){
    let myName = prompt('你的名字');
    if(!myName || myName === null){
        setUserName();

    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = '太帅了,' + myName;
    }
}