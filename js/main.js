function toggleMenu (element) {
  let menu = document.querySelector(`.${element}`);
  
  menu.style.display = menu.style.display == "block" ? "none" : "block"; 
}