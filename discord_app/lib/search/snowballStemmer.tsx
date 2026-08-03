// === Module 15637: snowballStem ===

// Module 15637 (snowballStem)
import module_15638 from "module_15638";

let closure_0 = module_15638.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};