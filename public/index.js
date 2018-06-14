/*Connect The HTML elements of the Close/Cancel/Find buttons to be available to the event listeners*/
var ModalCloseButton = document.getElementsByClassName('modal-close-button');
var ModalCancelButton = document.getElementsByClassName('modal-cancel-button');
var ModalFindButton = document.getElementsByClassName('modal-find-button');

/*Connect the HTML element of the "Add shop" button so it can be listened for*/
var AddShopButton = document.getElementsByClassName('shop-addshop-button');
AddShopButton[0].addEventListener('click',showCreateShopModal);

/*Listens for a click on the choose category button*/
var CreateListenerUnhideInformationModal = document.getElementById('shop-choose-button');
CreateListenerUnhideInformationModal.addEventListener('click',showInformationModal);
/*Enables the capacity to access the "hidden" element of the modals and edit it*/
var RemoveHiddenAccess = document.getElementsByClassName('hidden');

/*Shows the modal when the choose button is clicked*/
function showInformationModal() {
  /*New style of getting to change the 'hidden' attribute*/
  RemoveHiddenAccess[0].style['display'] = 'block';
  RemoveHiddenAccess[1].style['display'] = 'block';
  
  /*Call hide when close or cancel are clicked*/
  ModalCloseButton[0].addEventListener('click',hideInformationModal);
  ModalCancelButton[0].addEventListener('click',hideInformationModal);
/*Create the functionality this calls*/  ModalFindButton[0].addEventListener('click',FindLocation);  
  
  /*Temporarily Icing your code to see if my way works*/
  /*var modalBackdrop = document.getElementById('modal-backdrop');
  var createShopModal = document.getElementById('create-shop-modal');
  modalBackdrop.classList.remove('hidden');
  createShopModal.classList.remove('hidden');*/
}
/*Hides the modal when close or cancel buttons are clicked*/
function hideInformationModal() {
  RemoveHiddenAccess[0].style['display'] = 'none';
  RemoveHiddenAccess[1].style['display'] = 'none';
  /*Icing your code again mybad*/
  /*var modalBackdrop = document.getElementById('modal-backdrop');
  var createShopModal = document.getElementById('create-shop-modal');
  modalBackdrop.classList.add('hidden');
  createShopModal.classList.add('hidden');*/
}
function showCreateShopModal() {
  RemoveHiddenAccess[2].style['display'] = 'block';
  
  /*These might need to be individualized too?*/
  ModalCloseButton[2].addEventListener('click',hideCreateShopModal);
  ModalCancelButton[2].addEventListener('click',hideCreateShopModal);
}
function hideCreateShopModal() {
  RemoveHiddenAccess[2].style['display'] = 'none';
}

/*Wait for DOM content to load, then hook up UI interactions*/
window.addEventListener('DOMContentLoaded', function () {

  var shopChooseButton = document.getElementById('.shop-choose-button');
  if(shopChooseButton) {
    shopChooseButton.addEventListener('click', showCreateShopModal);
  }

  var modalCloseButton = document.querySelector(/*'#create-shop-modal */'.modal-close-button');
  if(modalCloseButton) {
    modalCloseButton.addEventListener('click', hideCreateShopModal);
  }

  var modalCancelButton = document.querySelector(/*'#create-shop-modal */'.modal-cancel-button');
  if(modalCancelButton) {
    modalCancelButton.addEventListener('click', hideCreateShopModal);
  }
  /*
  var modalFindButton = document.querySelector('create-shop-modal .modal-find-button');
  if(modalFindButton) {
    modalFindButton.addEventListener('click', handleModalFindClick);
  }*/
  /*
  var searchButton = document.getElementById('shop-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }*/
  /*
  var searchInput = document.getElementById('shop-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }*/
});
