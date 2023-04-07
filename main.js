function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;

}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    const text = document.querySelector('.content .textBox h2 .DunkinText')
    const learn_text = document.querySelector('.content .textBox a')
    circle.style.background = color;
    text.style.color = color;
    learn_text.style.background=color;
    
}
