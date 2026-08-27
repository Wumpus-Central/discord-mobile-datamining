// === Module 16207: snowballStem ===

// Module 16207 (snowballStem)
import set from "set" /* 2 */;
import module_16208 from "module_16208" /* 16208 */;

let closure_0 = module_16208.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};