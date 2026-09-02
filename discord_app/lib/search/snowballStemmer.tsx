// discord_app/lib/search/snowballStemmer.tsx
import set from "../../../_runtime/00002_set.js";
import 16527__ from "../../../_runtime/metro/16527__.js";

let closure_0 = module_16527.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};