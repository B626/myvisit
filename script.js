const anchors = document.querySelectorAll('first-section_nav-item_link')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(".Second-section_about-me")
            behavior: "smooth", 
            block: "start"
        })
    })
}
