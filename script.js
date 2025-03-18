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
    makeItemActive(0);
    // create triggers for each of these items in the list
    childTriggers.each(function (index) {
        ScrollTrigger.create({
            trigger: $(this),
            start: "top center",
            end: "bottom center",
            onToggle: (isActive) => {
                if(isActive) {
                    makeItemActive(index)
                }
            }
        });
    });
});