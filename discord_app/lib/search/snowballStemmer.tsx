// === Module 15934: snowballStem ===

// Module 15934 (snowballStem)
import set from "set" /* 2 */;
import module_15935 from "module_15935" /* 15935 */;

let closure_0 = module_15935.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};