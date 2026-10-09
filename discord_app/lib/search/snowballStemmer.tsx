// === Module 17316: snowballStemmer ===

// Module 17316 (snowballStemmer)
import module_17317 from "module_17317" /* 17317 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17317.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};