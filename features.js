// Interactive mobile menu script
    const menuOpenClose = () => {
        let navButton1 = document.getElementById("navlink1");
        let navButton2 = document.getElementById("navlink2");
        let navButton3 = document.getElementById("navlink3");
        let navButton4 = document.getElementById("navlink4");
        let navButton5 = document.getElementById("navlink5");
        let navButton6 = document.getElementById("navlink6");
        let navButtons = [navButton1, navButton2, navButton3, navButton4, navButton5, navButton6]
        console.log(navButton1.style.display);
        for (i=0; i<navButtons.length; i++) {
            console.log(navButtons[i]);
            console.log(navButtons[i].style.display);
            if (navButtons[i].style.display === "none" || navButtons[i].style.display === undefined || navButtons[i].style.display === "") {
                navButtons[i].style.display = "inline-flex";
            } else if (navButtons[i].style.display === "inline-flex") {
                navButtons[i].style.display = "none";
            }
        }

    }

// Download CV button script

// Implement playlist feature from old site

// Implement randomised video feature from old site

// Implement dice roller game from old site (maybe)