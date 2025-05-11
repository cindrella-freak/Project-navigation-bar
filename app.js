window.onscroll = function() {
    const navmenu = document.getElementById("navmenu");
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navmenu a'); // assuming links are inside navmenu

    // Change navmenu style after scrolling 50px
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navmenu.classList.add("scrolled");
    } else {
        navmenu.classList.remove("scrolled");
    }

    // Loop through sections to update active link
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
            // Remove 'active' from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Add 'active' to link that points to current section
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};
