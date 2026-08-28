// === Module 16225: snowballStem ===

// Module 16225 (snowballStem)
import set from "set" /* 2 */;
import module_16226 from "module_16226" /* 16226 */;

let closure_0 = module_16226.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};