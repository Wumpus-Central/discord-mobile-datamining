// discord_app/modules/stickers/StickersSuggestionUtils.tsx
import set from "../../../_runtime/00002_set.js";

const re0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
const re1 = /(\n|\t|\s)/g;
const result = set.fileFinishedImporting("modules/stickers/StickersSuggestionUtils.tsx");

export const removePunctuation = function removePunctuation(str) {
  return str.replace(closure_0, "").replace(closure_1, " ");
};
export const getQueriesFromUserInput = function getQueriesFromUserInput(str) {
  if (null == str) {
    let items = [];
  } else {
    const str2 = str.replace(closure_0, "");
    const str4 = str.replace(closure_0, "").replace(closure_1, " ");
    items = str.replace(closure_0, "").replace(closure_1, " ").trim().split(" ");
    const str5 = str.replace(closure_0, "").replace(closure_1, " ").trim();
  }
  return items;
};
