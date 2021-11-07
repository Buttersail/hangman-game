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
    'adi',
    'alma',
  ]
  let hiddenWord = []
  let answerString
  let selectedWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]

  for (var i = 0; i < selectedWord.length; i++) {
    hiddenWord[i] = '_'
  }

  answerString = hiddenWord.join(' ')
  document.querySelector('#hiddenWord').innerText = answerString

  let userLife = 10

  document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

  document.querySelector('#a').onclick = function () {
    if (userLife > 0) {
      if (selectedWord.indexOf('a') > -1) {
        let indexOfLetter = selectedWord.indexOf('a')
        do {
          hiddenWord[indexOfLetter] = 'a'
          indexOfLetter = selectedWord.indexOf('a', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#b').onclick = function () {
    if (userLife > 0) {
      if (selectedWord.indexOf('b') > -1) {
        let indexOfLetter = selectedWord.indexOf('b')
        do {
          hiddenWord[indexOfLetter] = 'b'
          indexOfLetter = selectedWord.indexOf('b', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#c').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('c') > -1) {
        let indexOfLetter = selectedWord.indexOf('c')
        do {
          hiddenWord[indexOfLetter] = 'c'
          indexOfLetter = selectedWord.indexOf('c', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#d').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('d') > -1) {
        let indexOfLetter = selectedWord.indexOf('d')
        do {
          hiddenWord[indexOfLetter] = 'd'
          indexOfLetter = selectedWord.indexOf('d', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#e').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('e') > -1) {
        let indexOfLetter = selectedWord.indexOf('e')
        do {
          hiddenWord[indexOfLetter] = 'e'
          indexOfLetter = selectedWord.indexOf('e', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#f').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('f') > -1) {
        let indexOfLetter = selectedWord.indexOf('f')
        do {
          hiddenWord[indexOfLetter] = 'f'
          indexOfLetter = selectedWord.indexOf('f', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#g').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('g') > -1) {
        let indexOfLetter = selectedWord.indexOf('g')
        do {
          hiddenWord[indexOfLetter] = 'g'
          indexOfLetter = selectedWord.indexOf('g', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#h').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('h') > -1) {
        let indexOfLetter = selectedWord.indexOf('h')
        do {
          hiddenWord[indexOfLetter] = 'h'
          indexOfLetter = selectedWord.indexOf('h', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#i').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('i') > -1) {
        let indexOfLetter = selectedWord.indexOf('i')
        do {
          hiddenWord[indexOfLetter] = 'i'
          indexOfLetter = selectedWord.indexOf('i', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#j').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('j') > -1) {
        let indexOfLetter = selectedWord.indexOf('j')
        do {
          hiddenWord[indexOfLetter] = 'j'
          indexOfLetter = selectedWord.indexOf('j', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#k').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('k') > -1) {
        let indexOfLetter = selectedWord.indexOf('k')
        do {
          hiddenWord[indexOfLetter] = 'k'
          indexOfLetter = selectedWord.indexOf('k', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#l').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('l') > -1) {
        let indexOfLetter = selectedWord.indexOf('l')
        do {
          hiddenWord[indexOfLetter] = 'l'
          indexOfLetter = selectedWord.indexOf('l', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#m').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('m') > -1) {
        let indexOfLetter = selectedWord.indexOf('m')
        do {
          hiddenWord[indexOfLetter] = 'm'
          indexOfLetter = selectedWord.indexOf('m', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#n').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('n') > -1) {
        let indexOfLetter = selectedWord.indexOf('n')
        do {
          hiddenWord[indexOfLetter] = 'n'
          indexOfLetter = selectedWord.indexOf('n', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#o').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('o') > -1) {
        let indexOfLetter = selectedWord.indexOf('o')
        do {
          hiddenWord[indexOfLetter] = 'o'
          indexOfLetter = selectedWord.indexOf('o', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#p').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('p') > -1) {
        let indexOfLetter = selectedWord.indexOf('p')
        do {
          hiddenWord[indexOfLetter] = 'p'
          indexOfLetter = selectedWord.indexOf('p', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#q').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('q') > -1) {
        let indexOfLetter = selectedWord.indexOf('q')
        do {
          hiddenWord[indexOfLetter] = 'q'
          indexOfLetter = selectedWord.indexOf('q', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#r').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('r') > -1) {
        let indexOfLetter = selectedWord.indexOf('r')
        do {
          hiddenWord[indexOfLetter] = 'r'
          indexOfLetter = selectedWord.indexOf('r', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#s').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('s') > -1) {
        let indexOfLetter = selectedWord.indexOf('s')
        do {
          hiddenWord[indexOfLetter] = 's'
          indexOfLetter = selectedWord.indexOf('s', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#t').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('t') > -1) {
        let indexOfLetter = selectedWord.indexOf('t')
        do {
          hiddenWord[indexOfLetter] = 't'
          indexOfLetter = selectedWord.indexOf('t', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#u').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('u') > -1) {
        let indexOfLetter = selectedWord.indexOf('u')
        do {
          hiddenWord[indexOfLetter] = 'u'
          indexOfLetter = selectedWord.indexOf('u', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#v').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('v') > -1) {
        let indexOfLetter = selectedWord.indexOf('v')
        do {
          hiddenWord[indexOfLetter] = 'v'
          indexOfLetter = selectedWord.indexOf('v', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#w').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('w') > -1) {
        let indexOfLetter = selectedWord.indexOf('w')
        do {
          hiddenWord[indexOfLetter] = 'w'
          indexOfLetter = selectedWord.indexOf('w', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#x').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('x') > -1) {
        let indexOfLetter = selectedWord.indexOf('x')
        do {
          hiddenWord[indexOfLetter] = 'x'
          indexOfLetter = selectedWord.indexOf('x', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#y').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('y') > -1) {
        let indexOfLetter = selectedWord.indexOf('y')
        do {
          hiddenWord[indexOfLetter] = 'y'
          indexOfLetter = selectedWord.indexOf('y', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }

  document.querySelector('#z').onclick = function () {
    if (userLife >= 0) {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife

      if (selectedWord.indexOf('z') > -1) {
        let indexOfLetter = selectedWord.indexOf('z')
        do {
          hiddenWord[indexOfLetter] = 'z'
          indexOfLetter = selectedWord.indexOf('z', indexOfLetter + 1)
        } while (indexOfLetter > -1)

        document.querySelector('#hiddenWord').innerText = hiddenWord.join(' ')
      } else {
        userLife--
      }
    }

    if (userLife <= 0) {
      document.querySelector('#lives').innerText = 'You have lost'
    } else {
      document.querySelector('#lives').innerText = 'Amount of lives left: ' + userLife
    }
  }
}
