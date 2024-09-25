$("#menu1").hide();
$(".article3").hide();
$(".article4").hide();



$("#menu1").click(function () {
    $("#menu1").hide();
    $("#menu2").show();
    $("#menu3").show();

    $(".article1").show();
    $(".article2").show();
    $(".article3").hide();
    $(".article4").hide();

})

$("#menu2").click(function () {
    $("#menu1").show();
    $("#menu2").hide();
    $("#menu3").show();

    $(".article1").hide();
    $(".article2").hide();
    $(".article3").show();
    $(".article4").hide();


})

$("#menu3").click(function () {
    $("#menu1").show();
    $("#menu2").show();
    $("#menu3").hide();

    $(".article1").hide();
    $(".article2").hide();
    $(".article3").hide();
    $(".article4").show();


})



setInterval("progress();", 500);

function len(a) {
    var c = 0;
    while (a[c]) {
        c++;
    }
    return c;
}
var annonce = "Bienvenu sur KUNLE : ma page personelle ";
var i = 0;


function progress() {
    $('#annonce').append(annonce[i]);
    if (i == annonce.length - 1) {
        $('#annonce').html("");
        i = -1

    }
    i++;

}