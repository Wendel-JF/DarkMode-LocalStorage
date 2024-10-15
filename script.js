const SwitchButton = document.getElementById("themeSwitcher");

document.body.onload = SwitchButtonPosition 

function themeSwitcher() {
  if (document.documentElement.getAttribute('theme') == 'dark') {
    changeThemeToLight()
    SwitchButton.classList.remove("right");
  } else {
    changeThemeToDark()
    SwitchButton.classList.add("right");
  }
}

SwitchButton.addEventListener("click", themeSwitcher);

function SwitchButtonPosition() {
  if (document.documentElement.getAttribute('theme') == 'dark') SwitchButton.classList.add("right");
  else SwitchButton.classList.remove("right");
}