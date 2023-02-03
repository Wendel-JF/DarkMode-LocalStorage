const main = document.querySelector("main")
const root = document.querySelector(":root")
const SwitchButton = document.getElementById("themeSwitcher")

document.body.onload = themeLocalStorage 

function themeLocalStorage() {
  if (localStorage.getItem('theme') === "light") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    SwitchButton.classList.add('right')
  }
}

function themeSwitcher() {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
    SwitchButton.classList.remove('right')
    console.log(main.dataset.theme)
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
    SwitchButton.classList.add('right')
    console.log(main.dataset.theme)
  }
  localStorage.setItem('theme', main.dataset.theme)
}

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)

