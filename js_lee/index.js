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
    
    var megaMenuContainer = document.getElementById('mega_menu_container');
    var article = document.getElementById('main_article');
    var mainCategoryItems = document.getElementsByClassName('main_category_items');
    var navigationFolw = document.getElementsByClassName('navigationFlow');
    for (let i = 0; i < mainCategoryItems.length; i++) {
        mainCategoryItems[i].addEventListener('mouseover', function(){
            megaMenuContainer.style.position = 'relative';
            megaMenuContainer.style.height = '350px';
            megaMenuContainer.style.zIndex = '2';``
            navigationFolw[i].style.height = '350px';
            $('#mega_menu_container').slideDown('slow');
            $('.main_category_items').slideDown('slow');
            article.style.position = 'relative';
            article.style.zIndex = '1';
            article.style.top = '-350px';
        });

        navigationFolw[i].addEventListener('mouseover', function(){
            megaMenuContainer.style.position = 'relative';
            megaMenuContainer.style.height = '350px';
            megaMenuContainer.style.zIndex = '2';
            navigationFolw[i].style.height = '350px';
            $('#mega_menu_container').slideDown('slow');
            $('.main_category_items').slideDown('slow');
            article.style.position = 'relative';
            article.style.zIndex = '1';
            article.style.top = '-350px';
        });

        mainCategoryItems[i].addEventListener('mouseout', function(){
            megaMenuContainer.style.position = 'relative';
            megaMenuContainer.style.height = '0px';
            megaMenuContainer.style.zIndex = '2';
            navigationFolw[i].style.height = '0px';
            article.style.position = 'relative';
            article.style.zIndex = '1';
            article.style.top = '0px';
        });

        navigationFolw[i].addEventListener('mouseout', function(){
            megaMenuContainer.style.position = 'relative';
            megaMenuContainer.style.height = '0px';
            megaMenuContainer.style.zIndex = '2';
            navigationFolw[i].style.height = '0px';
            article.style.position = 'relative';
            article.style.zIndex = '1';
            article.style.top = '0px';
        });
        
    }
}