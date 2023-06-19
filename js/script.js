


const buttonCadastrarEvento = document.querySelector(".btn-cadastrar-atividade")
const buttonFecharModal = document.querySelector(".btn-fechar-modal")
const modal = document.querySelector("dialog")

buttonCadastrarEvento.onclick = function () {
    modal.showModal()
}

buttonFecharModal.onclick = function () {
    modal.close()
}