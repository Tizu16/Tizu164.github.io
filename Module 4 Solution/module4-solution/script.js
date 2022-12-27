(function () {
 

  var names = ["Tizta", "Jerry", "Tizta", "Jhon", "Baba", "Emu", "Jiji", "Tigst", "Eskedar", "jembera"];


  for (var i = 0; i < names.length; i++) {

  
     var firstLetter = names[i].charAt(0).toLowerCase();

    
    if (firstLetter === 'j') {
       byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
