$(document).ready(function () {
    if ($(window).width() > 768) {

        $(window).resize(function () {
            calculateNewScale();
        });

        calculateNewScale();
        function calculateNewScale() {
            var percentageOn1 = $(window).width() / 1240;
            $(".wrapper").css({
                "-moz-transform": "scale(" + percentageOn1 + ")",
                "-webkit-transform": "scale(" + percentageOn1 + ")",
                transform: "scale(" + percentageOn1 + ")",
                "transform-origin": "left top",
            });
        }
    }

    if ($(window).width() < 768) {

        $(window).resize(function () {
            calculateNewScale();
        });

        calculateNewScale();

        function calculateNewScale() {
            var percentageOn1 = $(window).width() / 768;
            $(".wrapper").css({
                "-moz-transform": "scale(" + percentageOn1 + ")",
                "-webkit-transform": "scale(" + percentageOn1 + ")",
                transform: "scale(" + percentageOn1 + ")",
                "transform-origin": "left top",
            });
        }
    }
});