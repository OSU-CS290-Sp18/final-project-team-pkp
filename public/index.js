
function handle

function handleModalFindClick() {

}

/*Shows the modal when the choose button is clicked*/
function showCreateShopModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createShopModal = document.getElementById('create-shop-modal');

  modalBackdrop.classList.remove('hidden');
  createShopModal.classList.remove('hidden');
}

/*Hides the modal when close or cancel buttons are clicked*/
function hideCreateShopModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createShopModal = document.getElementById('create-shop-modal');

  modalBackdrop.classList.add('hidden');
  createShopModal.classList.add('hidden');
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
