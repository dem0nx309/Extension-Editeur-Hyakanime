chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'notificationDebut') {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/warn.png', 
        title: 'Hyakanime Edit',
        message: 'Vérification de votre édit en cours , merci de ne pas toucher a la page pendant la manoeuvre.'
      });
    }
    if(message.action === 'manuel')
    {
      chrome.tabs.create({ url: 'https://hyakanime.notion.site/Manuel-Hyakanime-0c17cf3d80cf4d1092a8e17f1679cef6' });
    }
  });
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(changeInfo.url)
    if (changeInfo.url && changeInfo.url.startsWith("https://www.hyakanime.fr/edit/")) {
      chrome.tabs.reload(tabId);
      console.log("reload bien fait")
    } 

  });
  
  
  