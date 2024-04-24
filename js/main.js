
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    // If There Is Color In Local Storage
    // [1] Add Color To Div
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove Active Class From All Lis
    lis.forEach((li)=>{
        li.classList.remove("active");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach( (li) => {
    li.addEventListener("click",(e)=>{
       // e.target.dataset.color;
       // console.log(e.currentTarget.dataset.color);

      // Remove Active Class From all Lis
        lis.forEach((li)=>{
            li.classList.remove("active");
        });
     // Add Active Class To Current Element
        li.classList.add("active");// or e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
        window.localStorage.setItem("color",e.target.dataset.color);
    // Change Div Background Color
        exp.style.backgroundColor = e.target.dataset.color;
    });
});