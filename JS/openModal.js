let modal = document.querySelector("#modal_Position")
let x_Icon = document.querySelector(".x_Icon").addEventListener('click', fecharModal)
let Fecha_Modal = document.querySelector("#button_Fecha_Modal").addEventListener('click', fecharModal)
let html = document.querySelector('html')

function fecharModal() {
    modal.style.display = 'none'
    html.style.overflowY = 'auto'
}



let open_Modal = document.querySelector("#open_Modal").addEventListener('click', () => {
    modal.style.display = 'flex'
    html.style.overflowY = 'hidden'
})