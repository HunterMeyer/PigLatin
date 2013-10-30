describe("pigLatinTranslator", function(){
  it("should add 'ay' to the end of a word that begins with a vowel", function() {
    pigLatinTranslator("apple").should.equal("appleay");
  });

  it("should take the first letter and put it on the end if not a vowel, then add 'ay'", function() {
    pigLatinTranslator("computer").should.equal("omputercay");
  });

  it("should take all the beginning consonants, move them to the end, then add 'ay'", function() {
    pigLatinTranslator("three").should.equal("eethray");
  });

  it("should take a word that starts with 'qu', move 'qu' to the end of a word and add 'ay'", function() {
    pigLatinTranslator("quickly").should.equal("icklyquay");
  });

  it("should just move first letter of word that begins with 'q' if the second letter is not 'u'", function() {
    pigLatinTranslator("qat").should.equal("atqay");
  });

  it("should move 'qu' and consonants beforehand to the end and then add 'ay'", function() {
    pigLatinTranslator("squeak").should.equal("eaksquay");
  });
});

describe("stringHandler", function() {
  it("should split words into array, translate to Pig Latin, join array into a string and return it", function(){
    stringHandler("hello how are you").should.equal("ellohay owhay areay ouyay");
  });

  it("should convert the string to lowercase", function() {
    stringHandler("HELLO yOu").should.equal("ellohay ouyay");
  });

  it("should return an error if the given string contains characters other than letters", function() {
    stringHandler("Hi how are you!").should.equal("ERROR, Letters Only!");
  });
});

describe("nonLetterError", function() {
  it("should return an error message when any characters in the user's string are not letters", function() {
    nonLetterError("This is an error!").should.equal(true);
  });
});

describe("specialCharacterCheck", function() {
  it("should determine if there's a special character, if so, return it's position", function() {
    specialCharacterCheck("Hello!").should.equal(5);
  });
});

describe("isVowel", function() {
  it("should return true if character given is a vowel", function() {
    isVowel('u').should.equal(true);
  });
});

describe("checkForQu", function() {
  it("should return true if the two arguments it's passed are 'q' and 'u'", function() {
    checkForQu('q', 'u').should.equal(true);
  });
});