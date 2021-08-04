// banner
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);

//search
let search_btn = document.getElementById("search").querySelector("i");
let search_input = document.getElementById("search").querySelector("input");
search_btn.addEventListener( 'click', function(e) {
    if (search_input.style.display === "none") {
        search_input.style.display = "block";
        search_btn.style.color = "white";
    } else {
        search_input.style.display = "none";
    search_btn.style.color = "#bbb";
    }
});
//data_about
let data_icon = document.getElementsByClassName("fa-leaf");
let data_text = document.getElementsByClassName("about_text");
for (let i = 0; i < data_icon.length; i++) {
    data_icon[i].addEventListener('click', function(e) {        
        if (data_text[i].style.display === "none") {
            data_text[i].style.display = "block";
            data_icon[i].style.color = "#6C504E";
        }
        else {
            data_text[i].style.display = "none";
            data_icon[i].style.color = "#427C64";
        }
    });
    data_text[i].addEventListener('mouseover', function(e) {
        data_text[i].style.display = "block";
        data_icon[i].style.color = "#6C504E";
    });
    data_text[i].addEventListener('mouseout', function(e) {
        data_text[i].style.display = "none";
        data_icon[i].style.color = "#427C64";
    });
}

//站外連結和top
let allLink = document.querySelectorAll(".elinks");
let linkOpen = document.querySelector(".elinks.open");
linkOpen.addEventListener("click", () => {
    for(let i of allLink) {
        i.classList.toggle("show");
        linkOpen.children[0].querySelector("i").classList.toggle("fa-angle-double-up");
        linkOpen.children[0].querySelector("i").classList.toggle("fa-angle-double-down");
    }
});

//商品資訊tab
let tabs = document.getElementById("tabs").querySelectorAll("li");
let tab_inner = document.getElementById("tab_inner").querySelectorAll(".tab_content");
//預設第一個panel打開
panel_show(tabs[0]);
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(e) {
        e.preventDefault();
        panel_show(this);
    });
}
function panel_show(panel) {
    for ( let i = 0; i < tabs.length; i++) {
        if (tabs[i] == panel) {
            tabs[i].classList.add("active");
            tab_inner[i].style.display = "block";
        } else {
            tabs[i].classList.remove("active");
            tab_inner[i].style.display = "none";
        }
    }
}


//最新消息和商品資訊slide
var click_count = [];   //分別紀錄所有(最新消息、紅茶、綠茶、烏龍茶)點擊次數陣列
var mul = 25;     //控制要移動的長度
var div_num = 4;    //顯示幾個slide_item
var slide_left = document.querySelectorAll('.slidebtn_left');
var slide_right = document.querySelectorAll('.slidebtn_right');
// Mobile view
var mobile_view768 = window.matchMedia("(max-width: 768px)");
if(mobile_view768.matches) {
    mul = 33;     
    div_num = 3;    
}
var mobile_view540 = window.matchMedia("(max-width: 540px)");
if(mobile_view540.matches) {
    mul = 50;     
    div_num = 2;    
}
var mobile_view370 = window.matchMedia("(max-width: 370px)");
if(mobile_view370.matches) {
    mul = 100;     
    div_num = 1;    
}
//click next and previous
for ( let i = 0; i < slide_left.length; i++) {
    //將所有的slide點擊次數初值皆設為0
    click_count[i] = 0;
    //依據class name(item$)控制目前是哪個資訊在動作
    let slideItem = "." + "item" + ( i + 1 );
    let slide_item = document.querySelectorAll(slideItem);
    //當資訊不需要左右移動，隱藏左右btn
    if (slide_item.length <= div_num) {
        slide_left[i].style.display = "none";
        slide_right[i].style.display = "none";
    } else {
        slide_left[i].style.display = "block";
        slide_right[i].style.display = "block";
    }
    //一開始點擊次數為0，隱藏左邊btn
    if (click_count[i] <= 0) {
        slide_left[i].style.display = "none";
    }
    // next
    slide_right[i].addEventListener('click', function(e) {
        //該項目的點擊次數+1
        click_count[i]++;
        //將新的點擊次數click_count[i]更新進click_count陣列
        click_count.forEach((item, index, arr)=>{
            //目前該項目被點擊的btn索引值
            index = i;
            //當不需要點擊時
            if (click_count[i] < 0) {   
                click_count[i] = 0;
            }
            //當點擊次數大於要顯示的資訊長度時，點擊次數等於資訊長度並隱藏右邊btn
            if (click_count[i] >= (slide_item.length - div_num)){     
                click_count[i] = slide_item.length - div_num;
                slide_right[i].style.display = "none";
            } 
            click_count[i] = click_count[i];
            slide_left[i].style.display = "block";
            arr[index] = click_count[i];    //將新的點擊次數更新到陣列中
        });
        //滑動的距離
        for (const a of slide_item) {
            a.style.left = '-' + (mul * click_count[i]) + '%';
        }
    });
    //previous
    slide_left[i].addEventListener('click', function(e) {
        click_count[i]--;
        click_count.forEach((item, index, arr)=>{
            index = i;
            // 當點擊次數<0
            if (click_count[i] <= 0) {
                click_count[i] = 0;
                slide_left[i].style.display = "none";
            }
            arr[index] = click_count[i];    //將新的點擊次數更新到陣列中
        });
        slide_right[i].style.display = "block";
        //滑動的距離
        for (const a of slide_item) {
            a.style.left = '-' + (mul * click_count[i]) + '%';
        }
    });
}

//表單重填
function formReset() {
    let contact_class = document.getElementById("contact_class");
    let subject = document.getElementById("contact_subject");
    let email = document.getElementById("user_email");
    let name = document.getElementById("user_name");
    let phone = document.getElementById("user_phone");
    let content = document.getElementById("contact_content");
    contact_class.value = 1;
    subject.value = "";
    email.value = "";
    name.value = "";
    phone.value = "";
    content.value = "";
    contact_class.focus();
}

//screen < width:992px navbar
let navbar_btn = document.querySelector(".navbar_icon .navbar_btn");
let  menu = document.querySelector(".navbar_item .menu");
let mark = document.querySelectorAll(".mark");
let close_btn = menu.children[0];
let item_btn = menu.children[1].querySelectorAll("a");

//預設關閉mark
for(let i of mark) {
    i.style.display = "none";
}
menu.classList.add("hidden");
navbar_btn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("hidden");
    for(let i of mark) {
        i.style.display = "block";
    }
});

close_btn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("hidden");
    for(let i of mark) {
        i.style.display = "none";
    }
});

for(let i of item_btn) {
    i.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        for(let i of mark) {
            i.style.display = "none";
        }
    });
}