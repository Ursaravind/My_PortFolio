function readmore(){
    document.getElementById("read-more").style.display = "block"
    document.getElementById("read-more-btn").style.display = "none"
    document.getElementById("read-more").style.transform = "translateY(10px)";

}
function menubar(){
    var navbar=document.querySelector("nav")
    var menuIcon = document.getElementById("menuicon")

    navbar.classList.toggle("show")
    if (navbar.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}

function setActive(element){
    document.querySelectorAll('.navbar a').forEach(nav=>{
        nav.classList.remove('active')

    })
    element.classList.add('active')
}