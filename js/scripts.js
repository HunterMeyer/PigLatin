var vowels = "aeiouAEIOU";
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

function pigLatinTranslator(word) {
  for (var i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      return word.slice(i) + word.slice(0, i) + 'ay';
      break;
    } 
    else if (checkForQu(word[i], word[i + 1])) {
      return word.slice(i+2) + word.slice(0, i+2) + 'ay';
      break;
    }
  } 
}

function stringHandler(string) {
  var words =  string.toLowerCase().split(' ');
  var translated_words = [];

  if (nonLetterError(string)) {
    return "ERROR, Letters Only!";
  } else {
    words.forEach(function(word) {
      translated_words.push(pigLatinTranslator(word))
    });
    return translated_words.join(' '); 
  }
}
  
function nonLetterError(string) {
  for (i = 0; i < string.length; i++) {
    if (alphabet.indexOf(string[i]) < 0) {
      return true;
      break;
    }
  }  
}

function isVowel(letter) {
  if (vowels.indexOf(letter) !== -1) {
    return true;
  } else {
    return false;
  }
}

function checkForQu(letter1, letter2) {
  if (letter1.toLowerCase() === 'q' && letter2.toLowerCase() === 'u') {
    return true;
  }  
}

function specialCharacterCheck(word) {
  for (i = 0; i <= word.length; i++) {
    if (alphabet.indexOf(word[i]) === -1) {
      return i;
    }
  }
}

$(function() {
  $('.dropdown-toggle').dropdown();

  $("#user_input").submit(function(){
    var englishWords = $("#english_words").val();
    var translatedWords = stringHandler(englishWords);

  $("#output h1").empty().append(translatedWords);

  $("#output").fadeIn();
  return false;
  })
})

