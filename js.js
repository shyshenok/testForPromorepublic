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

    range('font-size', 'font-size-input')
    range('line-height', 'line-height-input')
    range('letter-spacing', 'letter-spacing-input')

});

function range(idRange, idFild) {
    $('#'+ idRange+'').change(function () {
        var newValue = this.value;
        console.log(newValue);
        $('#'+ idFild+'').val(newValue);
    });

    $('#'+ idFild+'').on('input', function () {
        $('#'+ idRange+'').val(this.value);
    });

}

function translate(xTran, yTran, x, y) {
    $("#text-options").css({top: y, left: x, opacity: 1, transform: "translate3d(" + xTran + "%," + yTran + "%, 0)"});

    if ($("#text-options").css('display') === 'none') {
        $("#text-options").toggle(300);

    } else {
        $("#text-options").toggle(0);
    }
}