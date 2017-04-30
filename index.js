const fs = require('fs');
const ankiExport = require('anki-apkg-export').default;

const saveDeck = (ankiDeck, deckName) => {
  ankiDeck
  .save()
  .then(zip => {
    fs.writeFileSync(`${deckName}.apkg`, zip, 'binary');
    console.log(`Package has been generated: ${deckName}.apkg`);
  })
  .catch(err => console.log(err.stack || err));
}

const buildDeck = (courseName, memriseData, mergeDecks) => {
  if (!courseName) return false;
  if (mergeDecks) var newDeck = new ankiExport(courseName);
  for (const key in memriseData) {
    if (memriseData.hasOwnProperty(key)) {
      if (!mergeDecks) var newDeck = new ankiExport(memriseData[key]['name']);
      const currentLessonVocab = memriseData[key]['words'];
      for (const vocab in currentLessonVocab) {
        if (currentLessonVocab.hasOwnProperty(vocab)) {
          newDeck.addCard(currentLessonVocab[vocab]['word'], currentLessonVocab[vocab]['meaning']);
        }
      }
      if (!mergeDecks) saveDeck(newDeck, memriseData[key]['name']);
    }
  }
  if (mergeDecks) saveDeck(newDeck, courseName);
}

module.exports.getAnkiDeck = (memId, mergeDecks = false) => {
  const memparse = require('memparse')(memId);
  memparse.parse()
  .then(json => {
    buildDeck(json.course, json.levels, mergeDecks);
  });
}