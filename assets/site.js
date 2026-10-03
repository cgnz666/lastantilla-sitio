/* Last Antilla Travel Co. · shared behavior: the mobile menu.
   The planner (plan.html) carries its own script. */
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    var lab = btn.querySelector(".menu-label");
    var setOpen = function (o) {
      btn.setAttribute("aria-expanded", o ? "true" : "false");
      nav.classList.toggle("open", o);
      if (lab) lab.textContent = o ? "Close" : "Menu";
    };
    btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); btn.focus(); }
    });
    matchMedia("(min-width: 861px)").addEventListener("change", function (m) { if (m.matches) setOpen(false); });
  }
})();
