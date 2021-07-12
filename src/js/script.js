

function changeTitle(title, e) {
    let h1 = document.getElementById("title");
    let li = e.target;
    let AllLi = document.querySelectorAll('li')
    h1.textContent = title;


    if (li) {
        for (let i = 0; i < AllLi.length; i++) {
            AllLi[i].classList.remove("active");
        }
        li.classList.toggle("active");
    }
}


function openMenu() {
    document.getElementById("sidebar").classList.toggle("sidebar-active");
}
