console.log("javascript attached");

const openModal = document.querySelector("#open-modal");
const dialog = document.querySelector("#dialog");
const closeModal= document.querySelector("#close-modal");

openModal.addEventListener("click", openDialogFunction);
closeModal.addEventListener("click", closeDialogFunction);

function openDialogFunction(e) {
    dialog.showModal();
}

function closeDialogFunction(e) {
    dialog.close();
}

// optional task:

dialog.addEventListener("click", onClickOutsideDialog);

function onClickOutsideDialog(e) {
const dialogDimensions = dialog.getBoundingClientRect();
if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom) {
    e.currentTarget.close();
}
}