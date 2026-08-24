// === Module 16031: snowballStem ===

// Module 16031 (snowballStem)
import set from "set" /* 2 */;
import module_16032 from "module_16032" /* 16032 */;

let closure_0 = module_16032.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};