// === Module 17177: snowballStemmer ===

// Module 17177 (snowballStemmer)
import module_17178 from "module_17178" /* 17178 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17178.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};