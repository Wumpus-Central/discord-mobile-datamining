// === Module 6734: ? ===

// Module 6734
import setParamsDefault from "setParams" /* 6735 */;
import emojiTermsImporter from "emojiTermsImporter" /* 6736 */;

require = fn;
let closure_2 = new setParamsDefault(function loadEmoji(arg0) {
  const tmp = emojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((result) => result.default);
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
    let nextPromise = tmp().then((result) => result.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const result = require("obj132").fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

export default obj;