function mainFunction() {
  var submitButton = document.querySelector('.edit-submit');

  var customButton = document.createElement('button');
  customButton.textContent = 'Vérif';
  customButton.classList.add('edit-submit');
  customButton.style.marginLeft = '10px';


  customButton.addEventListener('click', function () {
    
    chrome.runtime.sendMessage({ action: 'showNotification' }); // a voir si ca marche

    /** ---------------------------------------------------------------------------------------------------- */

    const editMenuItems = document.querySelectorAll('div.edit-menu-item');
    const spanElement = editMenuItems[3].querySelector('span');
    if (spanElement.textContent === 'Liens') { //0 Géneral - 1 Studios - 2 Image - 3 Liens
      editMenuItems[3].click();

      // Récupérer l'élément input par sa classe CSS et son ID

      const inputElement = document.querySelector('input.edit-input#Wakanim');

      //test récupération data
      if (inputElement && inputElement.value !== "") {
        const value = inputElement.value;

        console.log(value);
      } else {
        console.log("L'élément input n'a pas été trouvé.");
      }
    }


    /** ---------------------------------------------------------------------------------------------------- */


    var synopsisContent = "test"

    var textElement = document.createElement('p');
    textElement.style.color = 'red';
    textElement.textContent = synopsisContent;

    submitButton.parentNode.insertBefore(textElement, submitButton.nextSibling);
  });

  submitButton.parentNode.insertBefore(customButton, submitButton.nextSibling);
}


function recuperationDom() {
  chrome.runtime.sendMessage({ action: 'showNotification' });
  const editMenuItems = document.querySelectorAll('div.edit-menu-item');
}


// Injecte le bouton lors du chargement de la page
mainFunction();
