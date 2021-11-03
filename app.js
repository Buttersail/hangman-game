window.onload = function () {
  let hangmanWords = [
    'able',
    'about',
    'account',
    'acid',
    'across',
    'act',
    'addition',
    'adjustment',
    'advertisement',
    'after',
    'again',
    'against',
    'agreement',
    'air',
    'all',
    'almost',
    'among',
    'amount',
    'amusement',
    'and',
    'Adi',
  ]

  let letters = document.querySelector('#letters')
  let hiddenWord = []
  let answerString
  let words = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]
  console.log(words)

  //Logic to make the word appear with underscores

  for (var i = 0; i < words.length; i++) {
    hiddenWord[i] = '_'
  }

  answerString = hiddenWord.join(' ')
  document.querySelector('#hiddenWord').innerText = answerString

  //Got sidetracked trying to figure out how to make an array list the buttons instead of raw HTML code

  // let hangman_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  // var generateKeys = function (keys) {
  //   for (var i = 0; i < keys.length; i++) {
  //     for (var j = 0; j < keys[i].length; j++) {
  //       var input = document.getElementById('myInput')
  //       input.value = keys[i][j]
  //     }
  //   }
  // }

  // generateKeys(hangman_letters)

  //Change the userLife to correspond with the amount of life a hangman needs
  let userLife = 10

  document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

  // if the letter exists in the word, it should appear on the user's screen, depending on the position and number of the letter.
  document.querySelector('#a').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (words.includes('a')) {
        document.querySelector('#hiddenWord').innerText = 'a'
      } else {
        userLife--
      }
    } else if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    }
  }

  document.querySelector('#b').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (words.includes('b')) {
        letters.innerText = 'b'
        // document.querySelector('#hiddenWord').innerText = 'b'
      } else {
        userLife--
      }
    } else if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    }
  }

  document.querySelector('#c').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (words.includes('c')) {
        letters.innerText = 'c'
        // document.querySelector('#hiddenWord').innerText = 'c'
      } else {
        userLife--
      }
    } else if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    }
  }
}
