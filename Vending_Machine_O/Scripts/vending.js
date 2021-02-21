const times = ['10000', '5000', '7000', '5000', '15000', '2000', '10000', '15000'];
var divProd = document.getElementsByClassName("view_main");
var btnProd = document.getElementById("products_option");
var btnPcss = document.getElementById("process_option");
var btnFnsh = document.getElementById("finished_option");
var buy_btns = document.getElementsByClassName("btn");
var buyAlert_overlay = document.getElementById("shim");
var buyAlert_message = document.getElementById("msgbx");
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
    HideMessage();
    proccess.push(product);
    console.log(proccess);
}

function Decline() {
    HideMessage();
}

function HideMessage() {
    setTimeout(function () {
        buyAlert_message.style.display = buyAlert_overlay.style.display = "none";
    }, 50);
}