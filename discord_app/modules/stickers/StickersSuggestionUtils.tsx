// === Module 5270: StickersSuggestionUtils ===

// Module 5270 (StickersSuggestionUtils)
import size from "module_2" /* 2 */;

const re0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
const re1 = /(\n|\t|\s)/g;
const result = size.fileFinishedImporting("modules/stickers/StickersSuggestionUtils.tsx");

export const removePunctuation = function removePunctuation(str) {
  str = str.replace(re0, "");
  return str.replace(re1, " ");
};
export const getQueriesFromUserInput = function getQueriesFromUserInput(str) {
  if (null == str) {
    let items = [];
  } else {
    const str2 = "".replace(re0, "");
    const str4 = "".replace(re0, "").replace(re1, " ");
    items = "".replace(re0, "").replace(re1, " ").trim().split(" ");
    const str5 = "".replace(re0, "").replace(re1, " ").trim();
  }
  return items;
};