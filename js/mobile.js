(() => {
    const refs = {
      openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
      closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
      mobile_menu: document.querySelector("[data-mobile-menu]"),
    };

    function togglemobilemenu() {
      refs.mobile_menu.classList.toggle("is-hidden");
    }

    refs.openMobileMenuBtn.addEventListener("click", togglemobilemenu);
    refs.closeMobileMenuBtn.addEventListener("click", togglemobilemenu);
  })();