const navLinks = document.querySelectorAll('#menu-button')

setTimeout(() => {
    function smoothScroll(target) {
        const element = document.getElementById(target)
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        })
    }
}, 3000)

navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target')
      smoothScroll(target)
    })
})

const details = Array.from(document.querySelectorAll("details"));

details.forEach(targetDetail => {
  targetDetail.addEventListener("click", () => {
    details.forEach(detail => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});


const messField = $('#messField')

$(document).ready(function() {
  $('#inputField').click(function() {
    var formField = $('#formField').val();
    console.log(formField);
  });
});
