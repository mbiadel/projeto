/* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img=document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
img.setAttribute('src','./assets/avatar-light.png')
  } else {
    //se estiver sem light mode, manter a original
img.setAttribute('src','./assets/avatar.png')
  }

}
