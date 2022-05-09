// items

const menu = [

    {
        id: 1,
        title: "Breakfast combo              £13.99",
        category: "breakfast",
        price: 13.99,
        img: "images/breakfast-pic.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",

    },
    {

        id: 2,
        title: "Pancake deal     £8.99",
        category: "breakfast",
        price: 8.99,
        img: "images/breakfast-pic2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",

    },

    {
        id: 3,
        title: "The Deli Sandwich Meal     £6.99",
        category: "lunch",
        price: 6.99,
        img: "images/lunch-pic.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",
    },

    {
        id: 4,
        title: "The Salad Deal    £9.99",
        category: "lunch",
        price: 9.99,
        img: "images/lunch-pic2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",
    },

    {
        id: 5,
        title: "The Ultimate Dinner Combo    £19.99",
        category: "dinner",
        price: 19.99,
        img: "images/dinner-pic.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",
    },

    {
        id: 6,
        title: "Seafood Dinner Deal      £21.99",
        category: "dinner",
        price: 21.99,
        img: "images/dinner-pic2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",
    },

    {
        id: 7,
        title: "Two For One Drinks        £22.99",
        category: "drinks",
        price: 22.99,
        img: "images/drinks-pic.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",
    },

    {
        id: 8,
        title: "All Night Long Cocktails    £24.99",
        category: "drinks",
        price: 24.99,
        img: "images/drinks-pic2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Officiis eveniet quos repellendus molestias sunt rerum accusamus ut deleniti impedit corporis?<br>Cupiditate ratione quibusdam suscipit praesentium rerum, itaque dolorum placeat hic.",
    },

];



const menuCenter = document.querySelector(".menu-container");


const filterBtns = document.querySelectorAll('.buttons')


//load items
window.addEventListener("DOMContentLoaded", function () {


});


// filter items

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {

            if (menuItem.category === category) {
                return menuItem;
            }


        });

        if (category === 'all') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory);
        }

    });
});






function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        //console.log(item);

        return `<div class="dish-info">
        <img src=${item.img} alt=${item.title} class="food-img">
        <div class="food-description">
            <div class="info-box">
                <h4>${item.title}</h4>

                <p>${item.desc}</p>
            </div>


        </div>
    </div>
`;

    });

    displayMenu = displayMenu.join("")
    menuCenter.innerHTML = displayMenu;
}