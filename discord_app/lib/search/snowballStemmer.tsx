// === Module 16713: snowballStem ===

// Module 16713 (snowballStem)
import set from "set" /* 2 */;
import module_16714 from "module_16714" /* 16714 */;

let closure_0 = module_16714.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};