

function changeTitle(title, e) {
    let h1 = document.getElementById("title");
    let li = e.target;
    let AllLi = document.querySelectorAll('li')
    h1.textContent = title;


    if (li) {
        for (let i = 0; i < AllLi.length; i++) {
            AllLi[i].classList.remove("active");
        }
        if (li.id === "link") {
            li.classList.toggle("active");
        } else {
            li.parentElement.classList.toggle("active");
        }
    }
}


function openMenu() {
    document.getElementById("sidebar").classList.toggle("sidebar-active");
    if (!document.getElementById("sidebar").classList.contains("sidebar-active")) {
        for (let i = 0; i < document.getElementsByClassName("sidebar-menu__link").length; i++) {
            document.getElementsByClassName("sidebar-menu__link")[i].style.display = "none";
        }
        document.getElementsByClassName("sidebar-logo__title")[0].style.display = "none";
    } else {
        for (let i = 0; i < document.getElementsByClassName("sidebar-menu__link").length; i++) {
            document.getElementsByClassName("sidebar-menu__link")[i].style.display = "block";
        }
        document.getElementsByClassName("sidebar-logo__title")[0].style.display = "block";
    }
}