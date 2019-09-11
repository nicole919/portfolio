$(() => {
  $('#projectsLink').on('click', () => {
    document.getElementById("projectsSection").scrollIntoView({behavior: 'smooth'});
  })
  $('#bioLink').on('click', () => {
    document.getElementById("bioBio").scrollIntoView({behavior: 'smooth', block:'center'});
  })


  $('#hamburger').on('click',(e) => {
    const menuLinks = $('#myLinks');
    const hamburgerIcon = $('#hamburgerIcon');
    if (menuLinks.css('display') === "flex") {
      menuLinks.css('display', 'none');
      hamburgerIcon.removeClass('fa-close');
      hamburgerIcon.addClass('fa-bars');
    } else {
      menuLinks.css('display','flex');
      hamburgerIcon.removeClass('fa-bars');
      hamburgerIcon.addClass('fa-close');
    }
  })
});