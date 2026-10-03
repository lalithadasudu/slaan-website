/* =========================================================
   SLAAN — Sri Lalitha Annapoorneshwari Aradhana Nilayam
   Main Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const darshanScreen = document.querySelector(".darshan-screen");
    const templeDoors = document.querySelector(".temple-doors");
    const ammaDarshan = document.querySelector(".amma-darshan");
    const site = document.querySelector(".site");

    /*
     * Opening sequence:
     *
     * 1. Amma's call is displayed.
     * 2. Temple doors slowly open.
     * 3. Amma's darshan is revealed.
     * 4. Main website becomes visible.
     */

    if (darshanScreen && templeDoors) {

        setTimeout(() => {
            templeDoors.classList.add("open");
        }, 2500);

        setTimeout(() => {
            if (ammaDarshan) {
                ammaDarshan.classList.add("visible");
            }
        }, 4300);

        setTimeout(() => {
            if (site) {
                site.classList.add("visible");
            }
        }, 5600);

        setTimeout(() => {
            darshanScreen.classList.add("hidden");
        }, 7200);
    } else if (site) {

        site.classList.add("visible");
    }

    /* ---------- MOBILE MENU ---------- */

    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });

        });
    }

});
