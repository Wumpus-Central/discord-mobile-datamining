// discord_app/lib/search/snowballStemmer.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import 15935__ from "../../../_runtime/metro/15935__.js";

let closure_0 = module_15935.newStemmer("english");
const result = obj132.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};