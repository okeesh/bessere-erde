$(".usp_contain").each(function (index) {
    let childTriggers = $(this).find(".usp_content_text-item");
    let childTargets = $(this).find(".usp_visual_img-item");

    // switch active class
    function makeItemActive(index) {
        childTriggers.removeClass('is-active');
        childTargets.removeClass('is-active');
        childTriggers.eq(index).addClass('is-active');
        childTargets.eq(index).addClass('is-active')
    }
})