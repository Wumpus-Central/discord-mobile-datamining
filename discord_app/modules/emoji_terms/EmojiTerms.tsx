// === Module 5467: ? ===

// Module 5467
import setParamsDefault from "setParams" /* 5468 */;
import emojiTermsImporter from "emojiTermsImporter" /* 5469 */;

require = arg1;
let closure_2 = new setParamsDefault(function loadEmoji(arg0) {
  const tmp = emojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((arg0) => arg0.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const obj = {
  setEmojiLocale(locale) {
    store.setParams(locale);
  },
  getTermsForEmoji(name) {
    const value = store.get();
    if (undefined !== value) {
      let items = value[name];
    } else {
      items = [];
    }
    return items;
  }
};
const tmp2 = new setParamsDefault(function loadEmoji(arg0) {
  const tmp = emojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((arg0) => arg0.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const result = require("set").fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

export default obj;