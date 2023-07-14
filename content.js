
function mainFunction() {
  var boutonVerif = document.createElement('button');
  boutonVerif.textContent = 'Vérifier';
  boutonVerif.classList.add('edit-submit');
  boutonVerif.style.float = 'right';
  boutonVerif.style.display = 'flex';
  boutonVerif.style.justifyContent = 'center';
  boutonVerif.style.marginTop = '-60px';
  
  var divSubmit = document.querySelector('div.edit-submit');
  divSubmit.insertAdjacentElement('afterend', boutonVerif);

  boutonVerif.addEventListener('click', function () {
    suppression()
    recuperationDom();
  });
  
  var boutonManuel = document.createElement('button');
  boutonManuel.textContent = 'Manuel';
  boutonManuel.classList.add('edit-submit');
  boutonManuel.style.float = 'left';
  boutonManuel.style.display = 'flex';
  boutonManuel.style.justifyContent = 'center';
  boutonManuel.style.marginTop = '-60px';
  
  var divSubmit = document.querySelector('div.edit-submit');
  divSubmit.insertAdjacentElement('afterend', boutonManuel);

  boutonManuel.addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: 'manuel' });
  });
}


function recuperationDom() {
  chrome.runtime.sendMessage({ action: 'notificationDebut' });
  let titreFrancais, titreAnglais, titreNatif, titreRomaji, synonymes, synopsis, format, source, origine, nombreEpisodes, dureeMoyenne, statutDiffusion, saison, dateDebut, dateFin, genres, idMal, idAnilist, sources, studios, image, baniere, siteOfficiel, twitterFr, twitterJp, hashtag, crunchyroll, wakanim, adn, netflix, prime, disney
  //click bouton 
  const editMenuItems = document.querySelectorAll('div.edit-menu-item');
  editMenuItems[0].click();

  //Recuperation info page Général

  var inputElement = document.querySelector('input.edit-input#title');
  if (inputElement && inputElement.value !== "") {
    titreFrancais = inputElement.value;
    console.log(titreFrancais);
  } else {
    console.log("L'élément Français n'a pas été trouvé.");
    titreFrancais = undefined;
  }

  inputElement = document.querySelector('input.edit-input#titleEN');
  if (inputElement && inputElement.value !== "") {
    titreAnglais = inputElement.value;
    console.log(titreAnglais);
  } else {
    console.log("L'élément Anglais n'a pas été trouvé.");
    titreAnglais = undefined;
  }

  inputElement = document.querySelector('input.edit-input#romanji');
  if (inputElement && inputElement.value !== "") {
    titreRomaji = inputElement.value;
    console.log(titreRomaji);
  } else {
    console.log("L'élément Romaji n'a pas été trouvé.");
    titreRomaji = undefined;
  }

  inputElement = document.querySelector('input.edit-input#titleJp');
  if (inputElement && inputElement.value !== "") {
    titreNatif = inputElement.value;
    console.log(titreNatif);
  } else {
    console.log("L'élément Natif n'a pas été trouvé.");
    titreNatif = undefined;
  }

  var selectControlDiv = document.querySelector('div.select__control.css-1s2u09g-control');

  var divElements = selectControlDiv.querySelectorAll('.css-1rhbuit-multiValue .css-12jo7m5');
  synonymes = Array.from(divElements).map(function (divElement) {
    return divElement.textContent;
  });
  if (synonymes == "") {
    synonymes = undefined
  }
  console.log(synonymes);



  inputElement = document.querySelector('.edit-textarea#synopsis');
  if (inputElement && inputElement.value !== "") {
    synopsis = inputElement.value;
    console.log(synopsis);
  } else {
    console.log("L'élément Synopsis n'a pas été trouvé.");
    synopsis = undefined;
  }

  inputElement = document.querySelector('input[name="format"][type="hidden"]');
  if (inputElement && inputElement.value !== "") {
    format = inputElement.value;
    console.log(format);
  } else {
    console.log("L'élément Format n'a pas été trouvé.");
    format = undefined;
  }

  inputElement = document.querySelector('input[name="source"][type="hidden"]');
  if (inputElement && inputElement.value !== "") {
    source = inputElement.value;
    console.log(source);
  } else {
    console.log("L'élément Source n'a pas été trouvé.");
    source = undefined;
  }

  inputElement = document.querySelector('input[name="origin"][type="hidden"]');
  if (inputElement && inputElement.value !== "") {
    origine = inputElement.value;
    console.log(origine);
  } else {
    console.log("L'élément Origine n'a pas été trouvé.");
    origine = undefined;
  }

  inputElement = document.querySelector('input.edit-input#NbEpisodes');
  if (inputElement && inputElement.value !== "") {
    nombreEpisodes = inputElement.value;
    console.log(nombreEpisodes);
  } else {
    console.log("L'élément Nombre Episodes n'a pas été trouvé.");
    nombreEpisodes = undefined;
  }

  inputElement = document.querySelector('input.edit-input#EpAverage');
  if (inputElement && inputElement.value !== "") {
    dureeMoyenne = inputElement.value;
    console.log(dureeMoyenne);
  } else {
    console.log("L'élément Durée Moyenne n'a pas été trouvé.");
    dureeMoyenne = undefined;
  }

  inputElement = document.querySelector('input[name="statut"][type="hidden"]');
  if (inputElement && inputElement.value !== "") {
    statutDiffusion = inputElement.value;
    console.log(statutDiffusion);
  } else {
    console.log("L'élément Origine de Diffusion n'a pas été trouvé.");
    statutDiffusion = undefined;
  }
  inputElement = document.querySelector('input[name="season"][type="hidden"]');
  if (inputElement && inputElement.value !== "") {
    saison = inputElement.value;
    console.log(saison);
  } else {
    console.log("L'élément Saison n'a pas été trouvé.");
    saison = undefined;
  }

  inputElement = document.querySelector('input.edit-input#startdate');
  if (inputElement && inputElement.value !== "") {
    dateDebut = inputElement.value;
    console.log(dateDebut);
  } else {
    console.log("L'élément Date de Début n'a pas été trouvé.");
    dateDebut = undefined;
  }

  inputElement = document.querySelector('input.edit-input#enddate');
  if (inputElement && inputElement.value !== "") {
    dateFin = inputElement.value;
    console.log(dateFin);
  } else {
    console.log("L'élément Date de Fin n'a pas été trouvé.");
    dateFin = undefined;
  }

  var selectControlDiv = document.querySelectorAll('div.select__control.css-1s2u09g-control')[6];
  var divElements = selectControlDiv.querySelectorAll('.css-1rhbuit-multiValue .css-12jo7m5');
  genres = Array.from(divElements).map(function (divElement) {
    return divElement.textContent;
  });
  if (genres == "") {
    genres = undefined
  }
  console.log(genres);

  inputElement = document.querySelector('input.edit-input#idMAL');
  if (inputElement && inputElement.value !== "") {
    idMal = inputElement.value;
    console.log(idMal);
  } else {
    console.log("L'élément id Mal n'a pas été trouvé.");
    idMal = undefined;
  }

  inputElement = document.querySelector('input.edit-input#idAnilist');
  if (inputElement && inputElement.value !== "") {
    idAnilist = inputElement.value;
    console.log(idAnilist);
  } else {
    console.log("L'élément id Anilist n'a pas été trouvé.");
    idAnilist = undefined;
  }

  inputElement = document.querySelector('.edit-textarea#sources');
  if (inputElement && inputElement.value !== "") {
    sources = inputElement.value;
    console.log(sources);
  } else {
    if(!inputElement)
    {
      console.log("L'élément sources est pas sur la page édit")
      sources = "L'élément sources est pas sur la page édit, ca viendras peut etre plus tard"
    }
    else{
    console.log("L'élément Sources n'a pas été trouvé.");
    sources = undefined;
    }
  }

  //click Studios
  editMenuItems[1].click();

  inputElement = document.querySelector('input.edit-input#studios');
  if (inputElement && inputElement.value !== "") {
    studios = inputElement.value;
    console.log(studios);
  } else {
    console.log("L'élément Studios n'a pas été trouvé.");
    studios = undefined;
  }

  //click Image
  editMenuItems[2].click();

  inputElement = document.querySelector('input.edit-input#image');
  if (inputElement && inputElement.value !== "") {
    image = inputElement.value;
    console.log(image);
  } else {
    console.log("L'élément Image n'a pas été trouvé.");
    image = undefined;
  }

  inputElement = document.querySelector('input.edit-input#bannerURL');
  if (inputElement && inputElement.value !== "") {
    banniere = inputElement.value;
    console.log(banniere);
  } else {
    console.log("L'élément Banniere n'a pas été trouvé.");
    banniere = undefined;
  }

  //click Liens
  editMenuItems[3].click();

  inputElement = document.querySelector('input.edit-input#website');
  if (inputElement && inputElement.value !== "") {
    siteOfficiel = inputElement.value;
    console.log(siteOfficiel);
  } else {
    console.log("L'élément site Officiel n'a pas été trouvé.");
    siteOfficiel = undefined;
  }

  inputElement = document.querySelector('input.edit-input#TwitterFR');
  if (inputElement && inputElement.value !== "") {
    twitterFr = inputElement.value;
    console.log(twitterFr);
  } else {
    console.log("L'élément Twitter Fr n'a pas été trouvé.");
    twitterFr = undefined;
  }

  inputElement = document.querySelector('input.edit-input#TwitterJP');
  if (inputElement && inputElement.value !== "") {
    twitterJp = inputElement.value;
    console.log(twitterJp);
  } else {
    console.log("L'élément Twitter Jp n'a pas été trouvé.");
    twitterJp = undefined;
  }

  inputElement = document.querySelector('input.edit-input#Hashtag');
  if (inputElement && inputElement.value !== "") {
    hashtag = inputElement.value;
    console.log(hashtag);
  } else {
    console.log("L'élément Hashtag n'a pas été trouvé.");
    hashtag = undefined;
  }

  inputElement = document.querySelector('input.edit-input#Crunchyroll');
  if (inputElement && inputElement.value !== "") {
    crunchyroll = inputElement.value;
    console.log(crunchyroll);
  } else {
    console.log("L'élément Crunchyroll n'a pas été trouvé.");
    crunchyroll = undefined;
  }

  inputElement = document.querySelector('input.edit-input#Wakanim');
  if (inputElement && inputElement.value !== "") {
    wakanim = inputElement.value;
    console.log(wakanim);
  } else {
    console.log("L'élément Wakanim n'a pas été trouvé.");
    wakanim = undefined;
  }

  inputElement = document.querySelector('input.edit-input#ADN');
  if (inputElement && inputElement.value !== "") {
    adn = inputElement.value;
    console.log(adn);
  } else {
    console.log("L'élément ADN n'a pas été trouvé.");
    adn = undefined;
  }

  inputElement = document.querySelector('input.edit-input#Netflix');
  if (inputElement && inputElement.value !== "") {
    netflix = inputElement.value;
    console.log(netflix);
  } else {
    console.log("L'élément Netflix n'a pas été trouvé.");
    netflix = undefined;
  }

  inputElement = document.querySelector('input.edit-input#Prime');
  if (inputElement && inputElement.value !== "") {
    prime = inputElement.value;
    console.log(prime);
  } else {
    console.log("L'élément Prime n'a pas été trouvé.");
    prime = undefined;
  }

  inputElement = document.querySelector('input.edit-input#Disney');
  if (inputElement && inputElement.value !== "") {
    disney = inputElement.value;
    console.log(disney);
  } else {
    console.log("L'élément Disney n'a pas été trouvé.");
    disney = undefined;
  }

  editMenuItems[0].click();
  console.log(titreFrancais)
  verification(titreFrancais, crunchyroll, wakanim, adn, netflix, prime, disney, nombreEpisodes, statutDiffusion, dateDebut, dateFin, sources, format, twitterFr, twitterJp, hashtag, idAnilist, idMal, synopsis, studios, saison, dureeMoyenne);

}

function verification(titreFrancais, crunchyroll, wakanim, adn, netflix, prime, disney, nombreEpisodes, statutDiffusion, dateDebut, dateFin, sources, format, twitterFr, twitterJp, hashtag, idAnilist, idMal, synopsis, studios, saison, dureeMoyenne) {

  if (titreFrancais != undefined && (crunchyroll == undefined && wakanim == undefined && adn == netflix && prime == undefined && disney == undefined)) { //le if n'est pas bon
    warning("⚠️ S'il y a un titre français il est probable que cela est licencié")
  }
  if (nombreEpisodes != undefined && dureeMoyenne == undefined) {
    alerte("⚠️ Il est probable que vous pouvez remplir la durée moyenne d'un épisode")
  }
  if (titreFrancais == undefined && (crunchyroll != undefined || wakanim != undefined || adn != netflix || prime != undefined || disney != undefined)) {
    alerte("⚠️ Si l'anime est licencié un titre Français est obligatoire")
  }

  if (nombreEpisodes != undefined && statutDiffusion == 2) {
    alerte("⚠️ Si l'anime est prochainement diffusé il ne faut pas mettre de nombre d'épisodes")
  }
  //detection si le synopsis contient un (source)

  if (synopsis) {
    var pattern = /\(source\s*[^)]+\)/gi;
    var resultats = synopsis.match(pattern);
    if (resultats) {
      var texteSource = resultats[0];
      console.log(texteSource)

      pattern = /Source/g;
      resultats = texteSource.match(pattern);
      if (!resultats) {
        alerte("⚠️ Merci de mettre une majuscule au début du mot Source ")
      }

      pattern = /.*\n{2,}\(source\s*:[^)]+\)/gi;
      resultats = synopsis.match(pattern);
      if (!resultats) {
        alerte("⚠️ Merci de mettre un retour à la ligne entre le synopsis et la source ")
      }
      pattern = /\s:\s/g;
      resultats = texteSource.match(pattern);
      if (!resultats) {
        alerte("⚠️ Merci de mettre un espace avant et après votre : dans la source du synopsis ")
      }
      pattern = /,/g;
      resultats = texteSource.match(pattern);
      if (resultats) {
        pattern = /[^ ]+,\s/;
        resultats = texteSource.match(pattern);
        if (!resultats) {
          alerte("⚠️ La , n'est pas correctement mis dans le synopsis il faut qu'il soit comme cela texte, suite")
        }
      }
      pattern = /\b(?:Anilist|MAL|MyAnimeList)\b/i;//surement a add de nouvelles sources anglaise dont j'ai pas idée la
      resultats = texteSource.match(pattern);
      if (resultats) {
        var texteSouceSite = resultats[0];
        pattern = /\b(traduit)\b/i;
        resultats = texteSource.match(pattern);
        if (!resultats) {
          alerte("⚠️ La source du synopsis est anglaise merci de préciser le traduit sans la source")
        }
        //test
        var regex = /anilist/i;
        if (regex.test(texteSouceSite) && texteSouceSite != "AniList") {
          alerte("⚠️ Il manque des majuscules a AniList")
        }
        var regex = /MyAnimeList/i;
        if (regex.test(texteSouceSite) && texteSouceSite != "MyAnimeList") {
          alerte("⚠️ Il manque des majuscules a MyAnimeList")
        }
        var regex = /Mal/i;
        if (regex.test(texteSouceSite) && texteSouceSite != "MyAnimeList") {
          alerte("⚠️ Merci d'écrire en source MyAnimeList au lieu de Mal")
        }
      }
    }
    else {
      warning("⚠️ Si vous avez pris le synopsis de quelque part merci de mettre la source comme cela (Source : Anilist, traduit)")
    }
  }

  if (studios != undefined) {
    var pattern = /,/g;
    var resultats = studios.match(pattern);
    if (resultats) {
      pattern = /[^ ]+,\s/;
      resultats = studios.match(pattern);
      if (!resultats) {
        alerte("⚠️ La , n'est pas correctement mis dans le studio il faut qu'elle soit comme cela texte, suite")
      }
    }
  }


  if (dateDebut != undefined) {
    var saisonComparatif = "";
    var annee = "";

    var parts = dateDebut.split("-");
    var year = parseInt(parts[0]);
    var month = parseInt(parts[1]);

    if (month >= 1 && month <= 3) {
      saisonComparatif = "Hiver";
    } else if (month >= 4 && month <= 6) {
      saisonComparatif = "Printemps";
    } else if (month >= 7 && month <= 9) {
      saisonComparatif = "Été";
    } else if (month >= 10 && month <= 12) {
      saisonComparatif = "Automne";
    }

    // Vérifier l'année
    if (!isNaN(year)) {
      annee = year.toString();
    }


    saisonAnnee = saisonComparatif + " " + annee;

    if (saison != saisonAnnee) {
      warning("⚠️ La saison n'est probablement pas bonne vérifier vos dates ou la saison")
    }
    if (!(year >= 1950 && year <= 2050)) {
      alerte("⚠️ La date de début n'est pas bonne")
    }
    if (dateFin != undefined) {
      var parts = dateFin.split("-");
      var year = parseInt(parts[0]);
      if (!(year >= 1950 && year <= 2050)) {
        alerte("⚠️ La date de fin n'est pas bonne")
      }
    }
  }

  if (hashtag != undefined) {
    var pattern = /#/g;
    var matchCount = (hashtag.match(pattern) || []).length;

    if (matchCount >= 2) {
      var pattern = /,/g;
      var resultats = hashtag.match(pattern);
      if (resultats) {
        alerte("⚠️ Merci de mettre seulement un espace et pas une , dans le hashtag")
      }
    }
  }

  if (statutDiffusion == 3 && (dateDebut == undefined || dateFin == undefined)) {
    warning("⚠️ Vous avez mis l'anime en diffusion terminer mais vous n'avez pas donné la date de début ou de fin")
  }

  if (format == "Film" && dateDebut != dateFin) {
    alerte("⚠️ Pour un film merci de mettre la même date de début et fin")
  }

  //** avec les id faire un système qui check les potentiels doublons et averti si jamais */

  if ((idAnilist < 10000 || idMal < 10000) && idAnilist != idMal) {
    console.log(idAnilist)
    console.log(idMal)
    warning("⚠️ L'id Mal Et Anilist n'est probablement pas bon merci de vérifier")
  }

  if (sources == undefined || sources.length < 50) {
    warning("⚠️ Vérifier bien d'avoir mis vos sources et notes, avec où vous avez tiré vos informations et des liens")
  }

  if ((twitterFr != undefined || twitterJp != undefined) && hashtag == undefined) {
    alerte("⚠️ Merci de préciser l'hashtag twitter vu que vous avez mis le twitter")
  }

  if (hashtag != undefined && twitterFr == undefined && twitterJp == undefined) {
    alerte("⚠️ Merci de préciser le compte twitter jp ou fr si disponible vu que vous avez mis l'hashtag twitter")
  }

}


function warning(message) {
  var synopsisContent = message;

  var textElement = document.createElement('p');
  textElement.style.color = 'orange';
  textElement.textContent = synopsisContent;
  textElement.id = 'message-prevention'
  var lastEditSubmit = document.querySelectorAll('.edit-submit');
  lastEditSubmit = lastEditSubmit[lastEditSubmit.length - 1];

  var parentElement = lastEditSubmit.parentNode;
  parentElement.style.textAlign = '';

  parentElement.insertAdjacentElement('afterend', textElement);

}

function alerte(message) {
  var synopsisContent = message;

  var textElement = document.createElement('p');
  textElement.style.color = 'red';
  textElement.textContent = synopsisContent;
  textElement.id = 'message-prevention'
  var lastEditSubmit = document.querySelectorAll('.edit-submit');
  lastEditSubmit = lastEditSubmit[lastEditSubmit.length - 1];

  var parentElement = lastEditSubmit.parentNode;
  parentElement.style.textAlign = '';

  parentElement.insertAdjacentElement('afterend', textElement);

}

function suppression() {

  var elements = document.querySelectorAll('#message-prevention');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.parentNode.removeChild(element);
  }


}
// Injecte le bouton lors du chargement de la page

mainFunction();

