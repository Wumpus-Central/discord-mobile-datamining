// === Module 17860: snowballStemmer ===

// Module 17860 (snowballStemmer)
import module_17861 from "module_17861" /* 17861 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17861.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};