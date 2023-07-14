$(document).ready(function () {



    // hide
    $(".hide").hide();

    // case1

    $(".show1").on("click", function () {
        $(".show1").hide();
        $(".hide1").show();
    })

    $(".hide1").on("click", function () {
        $(".show1").show();
        $(".hide1").hide();
    })

    // case2

    $(".show2").on("click", function () {
        $(".show2").hide();
        $(".hide2").show();
    })

    $(".hide2").on("click", function () {
        $(".show2").show();
        $(".hide2").hide();
    })

    // case3

    $(".show3").on("click", function () {
        $(".show3").hide();
        $(".hide3").show();
    })

    $(".hide3").on("click", function () {
        $(".show3").show();
        $(".hide3").hide();
    })


})