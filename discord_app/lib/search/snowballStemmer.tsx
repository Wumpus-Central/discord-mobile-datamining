// discord_app/lib/search/snowballStemmer.tsx
import 15811__ from "../../../_runtime/metro/15811__.js";

let closure_0 = module_15811.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};