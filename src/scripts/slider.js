const slider = function() {
    let offset = 0;
    const sliderLine = document.querySelector(".slider-line"),
        btnPrev = document.querySelector(".slider-prev"),
        btnNext =document.querySelector('.slider-next'),
        slides = document.querySelectorAll(".result__slide");
    let count = 0;
    let width;
    
    function init() {
        width = document.querySelector('.result__slider').offsetWidth;
        sliderLine.style.width = width*slides.length+ "px";
        slides.forEach(item =>{
            item.style.width = width + "px";
        })
        rollSlider()
    }
    window.addEventListener("resize", init);
    init();

    btnNext.addEventListener("click", ()=>{
        count++;
        if(count >= slides.length){
            count = 0;
        }
        rollSlider();
    })

    btnPrev.addEventListener("click", ()=>{
        count--;
        if(count < 0){
            count = slides.length -1;
        }
        rollSlider();
    })

    function rollSlider(){
        sliderLine.style.transform = "translate(-"+count*width+"px)";
    }
}
export default slider;