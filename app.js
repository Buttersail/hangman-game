let hangman_words = [
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

window.onload = function () {
  let hangman_word = document.getElementById('answers')
  let letters = document.querySelector('#letters')
  //Change the userLife to correspond with the amount of life a hangman needs
  let userLife = 10

  document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

  let words = hangman_words[Math.floor(Math.random() * hangman_words.length)]
  console.log(words)

  // if the letter exists in the word, it should appear on the user's screen, depending on the position and number of the letter.
  document.querySelector('#a').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (words.includes('a')) {
        letters.innerText = 'a'
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
      } else {
        userLife--
      }
    } else if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    }
  }
}
