let data = [
    {
        title: "茶文化",
        date: "2021-06-20",
        img: "./image/tea7.jpg",
        img_web: "Unsplash",
        img_href: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        img_author: "五玄土 ORIENTO",
        img_author_href: "https://unsplash.com/@oriento?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        content: "從茶葉的栽培、採茶、制茶，到品茶都有很多文化內涵的內容",
        content_author: "維基百科-茶文化",
        content_href: "https://zh.wikipedia.org/wiki/%E8%8C%B6%E6%96%87%E5%8C%96"
    },
    {
        title: "臺灣茶藝",
        date: "2021-06-15",
        img: "./image/tea1.jpg",
        img_web: "Unsplash",
        img_href: "https://unsplash.com/s/photos/tea-culture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        img_author: "Manki Kim",
        img_author_href: "https://unsplash.com/@kimdonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        content: "指臺灣獨自發展形成的儀式化的泡茶與飲茶技藝，和其他東亞",
        content_author: "維基百科-台灣茶藝",
        content_href: "https://zh.wikipedia.org/wiki/%E8%87%BA%E7%81%A3%E8%8C%B6%E8%97%9D"
    },
    {
        title: "烏龍茶",
        date: "2021-06-13",
        img: "./image/oolong_tea.jpg",
        img_web: "Unsplash",
        img_href: "https://unsplash.com/s/photos/oolong-tea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        img_author: "TeaCora Rooibos",
        img_author_href: "https://unsplash.com/@teacora?utm_source=unsplash&utm_medium=referralutm_content=creditCopyText",
        content: "青茶的一種，知名茶葉品種，原產地未有定論。烏龍茶分類、",
        content_author: "維基百科-烏龍茶",
        content_href: "https://zh.wikipedia.org/wiki/%E4%B9%8C%E9%BE%99%E8%8C%B6"
    },
    {
        title: "紅茶",
        date: "2021-06-09",
        img: "./image/black_tea.jpg",
        img_web: "Unsplash",
        img_href: "https://unsplash.com/s/photos/black-tea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        img_author: "Aidana Khabdesh",
        img_author_href: "https://unsplash.com/@aidanaesthete?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        content: "紅茶是經過採摘、萎凋、揉捻、發酵、乾燥等步驟生產出來的",
        content_author: "維基百科-紅茶",
        content_href: "https://zh.wikipedia.org/wiki/%E7%BA%A2%E8%8C%B6"
    },
    {
        title: "綠茶",
        date: "2021-06-08",
        img: "./image/green_tea.jpg",
        img_web: "Unsplash",
        img_href: "https://unsplash.com/s/photos/green-tea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        img_author: "CRYSTALWEED cannabis",
        img_author_href: "https://unsplash.com/@crystalweed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        content: "綠茶是茶葉的一種。經過殺青、揉捻、乾燥，大部份白毫脫落",
        content_author: "維基百科-綠茶",
        content_href: "https://zh.wikipedia.org/wiki/%E7%B6%A0%E8%8C%B6"
    }
];
let teaknowls = Vue.createApp({
    data(){
        return {
            teaknowls: data
        }
    }
}).mount('#news');
