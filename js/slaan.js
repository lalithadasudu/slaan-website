/* =========================================================
   SLAAN — Sri Lalitha Annapoorneshwari Aradhana Nilayam
   V1 Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader");
    const darshan = document.querySelector(".darshan");
    const enterButton = document.querySelector("#enter");
    const home = document.querySelector(".home");

    const menuButton = document.querySelector("#menu");
    const nav = document.querySelector("#nav");

    const year = document.querySelector("#year");


    /* =====================================================
       FOOTER YEAR
       ===================================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       INITIAL LOADER
       ===================================================== */

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 900);


    /* =====================================================
       AMMA'S SANNIDHI — ENTER
       ===================================================== */

    function enterSannidhi() {

        if (!darshan) return;

        /*
         * Opening the temple doors.
         */

        darshan.classList.add("open");


        /*
         * After the doors begin opening,
         * reveal the main website.
         */

        setTimeout(() => {

            if (home) {
                home.classList.add("visible");
            }

        }, 1900);


        /*
         * Remove the opening screen completely
         * after the darshan transition.
         */

        setTimeout(() => {

            darshan.classList.add("exit");

        }, 4000);

    }


    if (enterButton) {

        enterButton.addEventListener(
            "click",
            enterSannidhi
        );

    }


    /* =====================================================
       AUTOMATIC OPENING
       ===================================================== */

    /*
     * The visitor has the opportunity to read
     * "అమ్మ పిలుస్తోంది…" before the doors open.
     *
     * The button remains available for immediate entry.
     */

    const automaticOpening = setTimeout(() => {

        enterSannidhi();

    }, 6500);


    /*
     * If the visitor enters manually,
     * cancel the automatic sequence.
     */

    if (enterButton) {

        enterButton.addEventListener("click", () => {

            clearTimeout(automaticOpening);

        }, { once: true });

    }


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            const open = nav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                open ? "true" : "false"
            );

        });


        /*
         * Close the mobile menu after
         * selecting a navigation item.
         */

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (nav) {
                nav.classList.remove("open");
            }

        }

    });

});
