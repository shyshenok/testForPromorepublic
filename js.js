/**
 * Created by shyshenok on 24.05.2018.
 */
$(document).ready(function () {

    var height = $(window).height();
    var width = $(window).width();

    if (width >= 992) {
        $('body').click(function () {

            if (event.target !== event.currentTarget) return;

            var x = event.x;
            var y = event.y;

            var top = y < height / 2;
            var left = x < width / 2;

            if (top) {
                if (left) {

                    translate(0, 0, x, y);

                } else {

                    translate(-100, 0, x, y);
                }
            } else {
                if (left) {
                    translate(0, -100, x, y);

                } else {
                    translate(-100, -100, x, y);

                }
            }

        });
    }


    $('#font-size').change(function () {
        var newValue = this.value;
        console.log(newValue);
        $('#font-size-input').val(newValue);
    });

    $('#font-size-input').on('input', function () {
        $('#font-size').val(this.value);
    });

    $('#line-height').change(function () {
        var newValue = this.value;
        console.log(newValue);
        $('#line-height-input').val(newValue);
    });

    $('#line-height-input').on('input', function () {
        $('#line-height').val(this.value);
    });
    $('#letter-spacing').change(function () {
        var newValue = this.value;
        console.log(newValue);
        $('#letter-spacing-input').val(newValue);
    });

    $('#letter-spacing-input').on('input', function () {
        $('#letter-spacing-input').val(this.value);
    });


});

function translate(xTran, yTran, x, y) {
    $("#text-options").css({top: y, left: x, opacity: 1, transform: "translate3d(" + xTran + "%," + yTran + "%, 0)"});

    if ($("#text-options").css('display') === 'none') {
        $("#text-options").toggle(300);

    } else {
        $("#text-options").toggle(0);
    }
}