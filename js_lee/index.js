function loaded() {
    let magazineImages = document.getElementsByClassName('style-magazine-image');
    let timerSeeker = 0;
    let magazine1Timer = setInterval(function () {
        switch (timerSeeker) {
            case 0:
                magazineImages[0].src = "./image_lee/index_image/index_spring_swipper_02.jpg"
                break;
            case 1:
                magazineImages[1].src = "./image_lee/index_image/index_spring_swipper_04.jpg"
                break;
            case 2:
                magazineImages[2].src = "./image_lee/index_image/index_spring_swipper_08.jpg"
                break;
            case 3:
                magazineImages[0].src = "./image_lee/index_image/index_spring_swipper_01.jpg"
                magazineImages[1].src = "./image_lee/index_image/index_spring_swipper_03.jpg"
                magazineImages[2].src = "./image_lee/index_image/index_spring_swipper_07.jpg"
                break;
        }
        timerSeeker++;
        if(timerSeeker == 4) timerSeeker = 0;
    }, 2000)
}