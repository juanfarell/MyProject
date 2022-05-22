$(document).ready(function () {
    // let slideCount = $(".slides").length;
    // let slideWidth = $(".slides").width();
    // let totalWidth = slideCount * slideWidth;
    // $(".slides").css({
    //     width: totalWidth,
    //     marginLeft: -slideWidth,
    // });
    // $(".slide:last-child").prependTo(".slides");
    // function slideleft() {
    //     $(".slides").animate(
    //         {
    //             left: slideWidth,
    //         },
    //         () => {
    //             $(".slide:last-child").prependTo(".slides");
    //             $(".slides").css({
    //                 left: 0,
    //             });
    //         }
    //     );
    // }
    // setInterval(slideleft, 5000);

    var slidecount = $(".slider div.slides div.slide").length;
    var slidewidth = $(".slider div.slides div.slide").width();
    var slideheigth = $(".slider div.slides div.slide").height();
    var totalwidth = slidecount * slidewidth;

    // $(".slider").css({ width: slidewidth, height: slideheigth });
    $(".slider div.slides").css({ width: totalwidth, marginLeft: -slidewidth });
    $(".slider div.slides div.slide:last-child").prependTo(
        ".slider div.slides"
    );

    $("#prev").click(function () {
        $(".slider div.slides").animate(
            {
                left: slidewidth,
            },
            1000,
            function () {
                $(".slider div.slides div.slide:last-child").prependTo(
                    ".slider div.slides"
                );
                $(".slider div.slides").css({ left: "" });
            }
        );
    });

    $("#next").click(function () {
        $(".slider div.slides").animate(
            {
                left: -slidewidth,
            },
            1000,
            function () {
                $(".slider div.slides div.slide:first-child").appendTo(
                    ".slider div.slides"
                );
                $(".slider div.slides").css({ left: "" });
            }
        );
    });
});
