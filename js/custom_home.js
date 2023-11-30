(() => {
    
    function rejectHomeConverHeight() {
        document.querySelectorAll('.home-article-item > .home-article-item-top').forEach(ele => {
            ele.setAttribute('style', 'height: 20rem');
        })
    }

    function init() {
        rejectHomeConverHeight();
    }

    init();
})();