

$(document).ready(function () {
    $("#Personal").hide();
    $("#Address").hide();
});


function adcat() {


    $("#Admission_cat").show();
    $("#Personal").hide();
    $("#Address").hide();

    let ad = document.getElementById("Ad_cat");
    ad.classList.add("active");


    let pd = document.getElementById("person_det");
    pd.classList.remove("active");
    let adr = document.getElementById("address_det");
    adr.classList.remove("active");

}

function personal() {

    $("#Personal").show();
    $("#Admission_cat").hide();
    $("#Address").hide();




    let pd = document.getElementById("person_det");
    pd.classList.add("active");


    let ad = document.getElementById("Ad_cat");
    ad.classList.remove("active");
    let adr = document.getElementById("address_det");
    adr.classList.remove("active");
}



function adrdet() {
    $("#Address").show();
    $("#Admission_cat").hide();
    $("#Personal").hide();

    let adr = document.getElementById("address_det");
    adr.classList.add("active");


    let pd = document.getElementById("person_det");
    pd.classList.remove("active");
    let ad = document.getElementById("Ad_cat");
    ad.classList.remove("active");




}

