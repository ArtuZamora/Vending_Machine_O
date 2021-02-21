﻿const times = ['10000', '5000', '7000', '5000', '15000', '2000', '10000', '15000'];
const images = ['crepas.png', 'hamburguesa.png', 'hotdog.png', 'papas_fritas.png', 'pizza.png', 'soda.png', 'sorbete.png', 'tacos.png']
var btnProd = document.getElementById("products_option");
var btnPcss = document.getElementById("process_option");
var btnFnsh = document.getElementById("finished_option");
var image = document.getElementById("foodImg");
var buyAlert_overlay = document.getElementById("shim");
var buyAlert_message = document.getElementById("msgbx");
var buy_btns = document.getElementsByClassName("btn");
var divProd = document.getElementsByClassName("view_main");
var finished = [];
var proccess = [];
var product;

Array.from(buy_btns).forEach(button => {
    button.addEventListener('click', function () {
        BuyProduct(button.id);
    });
});

function ShowProducts() {
    btnProd.classList.add("active");
    btnPcss.classList.remove("active");
    btnFnsh.classList.remove("active");
    divProd[0].style.display = "block";
    divProd[1].style.display = "none";
    divProd[2].style.display = "none";
}
function ShowProcess() {
    btnPcss.classList.add("active");
    btnProd.classList.remove("active");
    btnFnsh.classList.remove("active");
    divProd[0].style.display = "none";
    divProd[1].style.display = "block";
    divProd[2].style.display = "none";
    if (proccess.length === 0) {
        document.getElementById("pc_p_1").style.display = "block";
        document.getElementById("pc_p_2").style.display = "none";
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
    }
    else {
        image.src = "Content/Images/" + images[proccess[0] - 1];
    }
    console.log(proccess);
}
function ShowFinished() {
    btnFnsh.classList.add("active");
    btnProd.classList.remove("active");
    btnPcss.classList.remove("active");
    divProd[0].style.display = "none";
    divProd[1].style.display = "none";
    divProd[2].style.display = "block";
}

function BuyProduct(id) {
    buyAlert_message.style.display = buyAlert_overlay.style.display = 'block';
    product = id;
}

function Accept() {
    document.getElementById("pc_p_1").style.display = "none";
    document.getElementById("pc_p_2").style.display = "block";
    HideMessage();
    proccess.push(product);
    if (proccess.length === 1) {
        setTimeout(ProcessFood, times[product - 1]);
    }
}

function Decline() {
    HideMessage();
}

function HideMessage() {
    setTimeout(function () {
        buyAlert_message.style.display = buyAlert_overlay.style.display = "none";
    }, 50);
}

function ProcessFood() {
    finished.push(proccess[0]);
    proccess.shift();
    toastr.info('El item ha sido entregado!')
    image.src = "Content/Images/" + images[proccess[0] - 1];
    if (proccess.length !== 0) {
        setTimeout(ProcessFood, times[proccess[0] - 1]);
    }
}