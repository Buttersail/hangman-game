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
  // change to queryselector later
  // let hangman_word = document.getElementById('answers')
  let letters = document.getElementById('letters')
  let userLife = 10

  let words = hangman_words[Math.floor(Math.random() * hangman_words.length)]
  console.log(words)

  // if the letter exists in the word, it should appear on the user's screen, depending on the position and number of the letter.
  document.querySelector('#a').onclick = function () {
    if (words.includes('a')) {
    } else {
      userLife--
    }
  }

  document.querySelector('#b').onclick = function () {
    if (words.includes('b')) {
    } else {
      userLife--
    }
  }

  document.querySelector('#c').onclick = function () {
    if (words.includes('c')) {
    } else {
      userLife--
    }
  }
}
