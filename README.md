[![NPM](https://nodei.co/npm/memanki.png)](https://nodei.co/npm/memanki/) 
 ![npm](https://img.shields.io/npm/dt/memanki.svg)

# MEMANKI

Builds anki decks from a memrise lesson ID

## What is anki anyway?
Anki is a flashcard program which makes remembering things easy, using the SRS principle (spaced repetition system) for optimum information retention.

For those who like to know how things work, the SRS algorithm used by anki was originally written empirically by Piotr Woźniak and can be found [HERE](https://www.supermemo.com/english/ol/sm2.htm).
You can visit the [ANKI website](https://apps.ankiweb.net) for more informations.

If you want to know more about the Spaced Repetition System principle click [HERE](https://www.supermemo.com/articles/theory.htm)

## Why convert memrise lessons to Anki?
While memrise is awesome for learning new words/things, I always thought Anki was much better at long term information retention.
I like to use it both, Memrise for learning, and anki for not forgetting.
Memrise lessons can be found [HERE](https://www.memrise.com/courses/english/).

## Usage

```javascript
const memanki = require('memanki');

// memrise IDs are found in lesson urls, ex:
// https://www.memrise.com/course/1098043/spanish-spain-1/
// here 1098043 is the memrise lesson ID

// this will generate one anki-deck per sub-lesson
// each deck will take the name of the sub-lesson
memanki.getAnkiDeck(1098043);

// this will merge all sub-lessons into a single anki-deck,
// the deck will take the name of the global lesson
memanki.getAnkiDeck(1098043, true);

// decks will be generated in current folder
```
