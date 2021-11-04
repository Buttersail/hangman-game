window.onload = function () {
  let hangmanWords = ['able', 'about', 'acne', 'adi']

  let letters = document.querySelector('#letters')
  let hiddenWord = []
  let answerString
  let splitWords = []
  let words = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]
  console.log(words)

  //Logic to make the word appear with underscores
  for (var i = 0; i < words.length; i++) {
    hiddenWord[i] = '_'
  }

  answerString = hiddenWord.join(' ')
  document.querySelector('#hiddenWord').innerText = answerString

  //Splitting the words into singular letters
  splitWords = words.split('')
  console.log(splitWords)

  //Change the userLife to correspond with the amount of life a hangman needs
  let userLife = 10

  document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

  // if the letter exists in the word, it should appear on the user's screen, depending on the position and number of the letter.
  document.querySelector('#a').onclick = function () {
    for (var i = 0; i < splitWords.length; i++) {
      if (userLife >= 0) {
        document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

        if (words.includes(splitWords[i])) {
          //Have to figure out a way to make this logic works as intended.
          //Doesn't put the letter in the right spot, just fills out the word currently
          document.querySelector('#hiddenWord').innerText = splitWords.join('')
        } else {
          userLife--
        }
      } else if (userLife <= 0) {
        document.querySelector('#lives').innerText = 'You have lost'
      }
    }
  }

  document.querySelector('#b').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (splitWords.includes('b')) {
        document.querySelector('#hiddenWord').innerText = 'b'
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

      if (splitWords.includes('c')) {
        document.querySelector('#hiddenWord').innerText = 'c'
      } else {
        userLife--
      }
    } else if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    }
  }

  document.querySelector('#d').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (splitWords.includes('d')) {
        document.querySelector('#hiddenWord').innerText = 'd'
      } else {
        userLife--
      }
    } else if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    }
  }
}
