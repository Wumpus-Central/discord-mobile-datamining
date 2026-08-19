// discord_app/modules/stickers/StickersSuggestionUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const re0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
const re1 = /(\n|\t|\s)/g;
const result = obj132.fileFinishedImporting("modules/stickers/StickersSuggestionUtils.tsx");

export const removePunctuation = function removePunctuation(str) {
  str = str.replace(closure_0, "");
  return str.replace(closure_1, " ");
};
export const getQueriesFromUserInput = function getQueriesFromUserInput(str) {
  if (null == str) {
    let items = [];
  } else {
    const str2 = "".replace(closure_0, "");
    const str4 = "".replace(closure_0, "").replace(closure_1, " ");
    items = "".replace(closure_0, "").replace(closure_1, " ").trim().split(" ");
    const str5 = "".replace(closure_0, "").replace(closure_1, " ").trim();
  }
  return items;
};