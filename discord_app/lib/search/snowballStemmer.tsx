// === Module 16259: snowballStem ===

// Module 16259 (snowballStem)
import set from "set" /* 2 */;
import module_16260 from "module_16260" /* 16260 */;

let closure_0 = module_16260.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};