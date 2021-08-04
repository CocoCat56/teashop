let teadata = [
    //紅茶
    {
        tabid: "item2",
        className: "紅茶",
        products: [{
            name: "蜜香紅茶",
            img: ["./image/teapot2.jpg", "./image/black_tea.jpg"],
            price: 1500,
            content: "嚴選蜜香紅茶，茶包20入",
            is_discount: true
        }, {
            name: "阿薩姆紅茶",
            img: ["./image/tea4.jpg", "./image/teapot2.jpg", "./image/black_tea.jpg"],
            price: 1600,
            content: "嚴選阿薩姆紅茶，茶包20入",
            is_discount: true
        }, {
            name: "錫蘭紅茶",
            img: ["./image/black_tea.jpg", "./image/teapot2.jpg"],
            price: 1800,
            content: "嚴選錫蘭紅茶，茶包20入",
            is_discount: true
        }, {
            name: "大吉嶺紅茶",
            img: ["./image/tea4.jpg", "./image/teapot2.jpg"],
            price: 1500,
            content: "嚴選大吉嶺紅茶，茶包20入",
            is_discount: true
        }, {
            name: "台茶18號",
            img: ["./image/teapot2.jpg", "./image/black_tea.jpg"],
            price: 1500,
            content: "嚴選台茶18號，茶包20入",
            is_discount: false
        }, {
            name: "台茶12號",
            img: ["./image/teapot2.jpg", "./image/black_tea.jpg"],
            price: 1900,
            content: "嚴選台茶12號，茶包20入",
            is_discount: false
        }]
    },
    //綠茶
    {
        tabid: "item3",
        className: "綠茶",
        products: [{
            name: "碧螺春",
            img: ["./image/green_tea.jpg", "./image/teapot2.jpg"],
            price: 1500,
            content: "嚴選碧螺春，茶包20入",
            is_discount: true
        }, {
            name: "龍井茶",
            img: ["./image/teapot2.jpg", "./image/green_tea.jpg"],
            price: 1800,
            content: "嚴選龍井茶，茶包20入",
            is_discount: true
        }]
    },
    //烏龍茶
    {
        tabid: "item4",
        className: "烏龍茶",
        products: [{
            name: "凍頂烏龍茶",
            img: ["./image/oolong_tea.jpg", "./image/teapot2.jpg"],
            price: 1500,
            content: "嚴選凍頂烏龍茶，茶包20入",
            is_discount: true
        }, {
            name: "高山烏龍茶",
            img: ["./image/teapot2.jpg", "./image/oolong_tea.jpg"],
            price: 1600,
            content: "嚴選高山烏龍茶，茶包20入",
            is_discount: false
        }, {
            name: "東方美人茶",
            img: ["./image/tea2.jpg", "./image/teapot2.jpg"],
            price: 1500,
            content: "嚴選東方美人茶，茶包20入",
            is_discount: true
        }, {
            name: "包種茶",
            img: ["./image/oolong_tea.jpg", "./image/teapot2.jpg"],
            price: 1400,
            content: "嚴選包種茶，茶包20入",
            is_discount: true
        }]
    }
];
let productInfo = Vue.createApp({
    data() {
        return {
            teadata: teadata
        }
    },
    methods: {
        openProductInfo: function (classid, teaid) {
            let modal = document.querySelector("#modal");
            modal.style.display = "block";
            let teaInfo = document.querySelector(".teaInfo");
            teaInfo.classList.remove("fade-out");
            teaInfo.classList.add("fade-in");

            //商品大圖
            let bigimg = document.querySelector("#bigimg");
            bigimg.src = this.teadata[classid].products[teaid].img[0];
            bigimg.alt = this.teadata[classid].products[teaid].name;
            
            //商品小圖
            let infoImg = document.querySelector(".infoImg");
            let imgThumbnail = document.querySelector(".imgThumbnail");
            let infoText = document.querySelector(".infoText");
            //每次開啟modal前先移除.imgThumbnail
            imgThumbnail.remove();
            //建立div並加上class
            imgThumbnail = document.createElement("div");
            imgThumbnail.classList.add("imgThumbnail");
            infoImg.appendChild(imgThumbnail);
            //thumbnailimg和image為多筆的資料陣列
            let thumbnailimg = [];
            let image = [];
            for (let i = 0; i < this.teadata[classid].products[teaid].img.length; i++) {
                //建立div並加上class
                thumbnailimg[i] = document.createElement("div");
                thumbnailimg[i].classList.add("thumbnailimg");
                //建立img設置src and alt
                image[i] = document.createElement("img");
                image[i].src = this.teadata[classid].products[teaid].img[i];
                image[i].alt = this.teadata[classid].products[teaid].name;
                thumbnailimg[i].appendChild(image[i]);
                imgThumbnail.appendChild(thumbnailimg[i]);
            }
            //商品詳細資訊
            infoText.children[0].innerHTML = this.teadata[classid].products[teaid].name;
            infoText.children[1].innerHTML = "NT$ " + this.teadata[classid].products[teaid].price;
            infoText.children[2].innerHTML = this.teadata[classid].products[teaid].content;

            //商品詳細頁-點小圖換大圖
            let thumimg = document.querySelectorAll(".thumbnailimg img");
            for(let i = 0; i < thumimg.length; i++) {
                bigimg.src = thumimg[0].src;
                thumimg[i].onclick = function() {
                    let img = thumimg[i].src;
                    bigimg.src = img;
                }
            }

            //商品詳細頁購買量加減
            let subbtn = document.querySelector(".subbtn");
            let addbtn = document.querySelector(".addbtn");
            let addnum = document.querySelector(".addnum");
            //每次打開預設皆為1
            addnum.value = 1;
            addbtn.onclick = function() {
                let n = Number(addnum.value);
                n++;
                if(n > 100){
                    n = 100;
                }
                addnum.value = n;
            }
            subbtn.onclick = function() {
                let n = Number(addnum.value);
                n--;
                if(n < 1){
                    n = 1;
                }
                addnum.value = n;
            }
        },
        closeProductInfo: function () {
            let teaInfo = document.querySelector(".teaInfo");
            teaInfo.classList.remove("fade-in");
            teaInfo.classList.add("fade-out");
            //當 fade-out 動作後才加上 display:none
            let modalClose = setTimeout(function(){
                let modal = document.querySelector("#modal");
                modal.style.display = "none";
            }, 260);
        }
    }
}).mount('.productInfo');