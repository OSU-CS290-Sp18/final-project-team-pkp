 /*Enables the capacity to access the "hidden" element of the modals and edit it*/
var RemoveHiddenAccess = document.getElementsByClassName('hidden');                            

/*Connect The HTML elements of the Close/Cancel/Find buttons to be available to the event listeners*/
var ModalCloseButton = document.getElementsByClassName('modal-close-button');
var ModalCancelButton = document.getElementsByClassName('modal-cancel-button');

/*Information modal button/listener, to be applied to all 5 buttons*/
var CreateListenerUnhideInformationModal = document.getElementsByClassName('shop-button');
CreateListenerUnhideInformationModal[0].addEventListener('click',showInformationModal);
CreateListenerUnhideInformationModal[1].addEventListener('click',showInformationModal);
CreateListenerUnhideInformationModal[2].addEventListener('click',showInformationModal);
CreateListenerUnhideInformationModal[3].addEventListener('click',showInformationModal);
CreateListenerUnhideInformationModal[4].addEventListener('click',showInformationModal);
/*Connect the HTML element of the "Add shop" button so it can be listened for*/
var AddShopButton = document.getElementsByClassName('shop-addshop-button');
AddShopButton[0].addEventListener('click',showCreateShopModal);

/*Create all the variables to store info for within the create shop modal*/
var CreateNewShop = document.getElementsByClassName('modal-create-button');
CreateNewShop[0].addEventListener('click',checkNewShop);
var WhatsInType = document.getElementById('input-box-type');
var WhatsInName = document.getElementById('input-box-name');
var WhatsInAddress = document.getElementById('input-box-address');
var WhatsInPrice = document.getElementById('input-box-price');

/*To empty the search bar I need to access the content within it*/
var ContentInsideSearch = document.getElementById('shop-search-input');
/*Now I need to write a button access response for the "clear" button*/
var ClearSearchButton = document.getElementsByClassName('shop-clearSearch-button');
ClearSearchButton[0].addEventListener('click',clearTheSearchBar);

/*Create the capacity to, and listen for a click on the show button for search*/
var UnhideSearchModal = document.getElementsByClassName('shop-search-button');
UnhideSearchModal[0].addEventListener('click',showSearchModal);

/*now heres the function that connects the clear button and the search bar*/
function clearTheSearchBar(){
 console.log("Got into the function at least");
 ContentInsideSearch.value = "";
}

/*Shows the information modal when the choose button is clicked*/
function showInformationModal() {
  /*New style of getting to change the 'hidden' attribute*/
  RemoveHiddenAccess[0].style['display'] = 'block';
  RemoveHiddenAccess[1].style['display'] = 'block';
 
  /*Call hide when close or cancel are clicked*/
  ModalCloseButton[0].addEventListener('click',hideInformationModal);
  ModalCancelButton[0].addEventListener('click',hideInformationModal);
}
/*Hides the information modal when close or cancel buttons are clicked*/
function hideInformationModal() {
  RemoveHiddenAccess[0].style['display'] = 'none';
  RemoveHiddenAccess[1].style['display'] = 'none';
}

/*Unhides the create shop modal and background when called*/
function showCreateShopModal() {
  RemoveHiddenAccess[2].style['display'] = 'block';
  RemoveHiddenAccess[3].style['display'] = 'block'; 
  /*These might need to be individualized too?*/
  ModalCloseButton[1].addEventListener('click',hideCreateShopModal);
  ModalCancelButton[1].addEventListener('click',hideCreateShopModal);
}
/*Hides the create shop modal and background when called*/
function hideCreateShopModal() {
  RemoveHiddenAccess[2].style['display'] = 'none';
  RemoveHiddenAccess[3].style['display'] = 'none';
  /*Clear out the fields in the create new shop bar if they back out*/
  WhatsInType.value = "";
  WhatsInName.value = "";
  WhatsInAddress.value = "";
  WhatsInPrice.value = "";
}

/*Shows the search content modal*/
/*In ShowSearch modal There needs to be the call to the server that asks for data given whats in ContentInsideSearch*/
function showSearchModal(){
 /*Fill the modal with content based on content inside ContentInsideSearch*/
  console.log(ContentInsideSearch.value);
 
  RemoveHiddenAccess[4].style['display'] = 'block';
  RemoveHiddenAccess[5].style['display'] = 'block'; 
  /*These might need to be individualized too?*/
  ModalCloseButton[2].addEventListener('click',hideSearchModal);
  ModalCancelButton[2].addEventListener('click',hideSearchModal);
}
/*Hides the search content modal*/
function hideSearchModal() {
  RemoveHiddenAccess[4].style['display'] = 'none';
  RemoveHiddenAccess[5].style['display'] = 'none';
}

/*When they try to submit a new shop to the database, make sure the fields actually have values in them*/
function checkNewShop(){
 if(WhatsInType.value === '' || WhatsInName.value === '' || WhatsInAddress.value === '' || WhatsInPrice.value === ''){
     window.alert("Fill it out entirely please");
     console.log("Alert should have fired");
 }
 else{
   uploadToServer(WhatsInType.value,WhatsInName.value,WhatsInAddress.value,WhatsInPrice.value);
   hideCreateShopModal();
 }
}
/*Outline/placeholder for passing a correctly given input in create shop*/
function uploadToServer(a,b,c,d){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

function getPersonIdFromURL() {
 var path = window.location.pathname;
 var pathParts = path.split('/');
 if (pathParts[1] === "people"){
  return pathParts[2];
 }else {
  return null;
 }
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
/*Code GraveYard*/
/*
/*Listens for a click on the choose category button*/

  /*Icing your code again mybad*/
  /*var modalBackdrop = document.getElementById('modal-backdrop');
  var createShopModal = document.getElementById('create-shop-modal');
  modalBackdrop.classList.add('hidden');
  createShopModal.classList.add('hidden');*/
/*"Most recent variable" for storing which type of shop has been clicked most recently, to be passed into show information*/
/*var MostRecentShop = '';*/
/*Listeners on each shop type of button so I can pass to mostrecent value*/
/*var FastFoodButton = document.getElementsByClassName('shop-fastFood-button');
var GroceryStoreButton = document.getElementsByClassName('shop-groceryStore-button');
var PharmacyButton = document.getElementsByClassName('shop-pharmacy-button');
var BarsButton = document.getElementsByClassName('shop-bars-button');
var CoffeeButton = document.getElementsByClassName('shop-coffee-button');
*/
/*Listeners on these buttons that call the updateMostRecent shop selection function*/
/*FastFoodButton[0].addEventListener('click',updateMostRecent('shop-fastFood-button'));
GroceryStoreButton[0].addEventListener('click',updateMostRecent('shop-groceryStore-button'));
PharmacyButton[0].addEventListener('click',updateMostRecent('shop-pharmacy-button'));
BarsButton[0].addEventListener('click',updateMostRecent('shop-bars-button'));
CoffeeButton[0].addEventListener('click',updateMostRecent('shop-coffee-button'));*/
/*Function that updates the MostRecentShop variable so we can effectively fill out the showinformation correctly*/
/*function updateMostRecent(whatWasClicked){
  console.log(whatWasClicked);
  MostRecentShop = whatWasClicked;
}*/
/*Create the functionality this calls*/ /*Debugging//*ModalFindButton[0].addEventListener('click',FindLocation);  */
  
  /*Temporarily Icing your code to see if my way works*/
  /*var modalBackdrop = document.getElementById('modal-backdrop');
  var createShopModal = document.getElementById('create-shop-modal');
  modalBackdrop.classList.remove('hidden');
  createShopModal.classList.remove('hidden');*/
