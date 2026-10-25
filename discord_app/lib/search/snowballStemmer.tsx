// === Module 18137: snowballStemmer ===

// Module 18137 (snowballStemmer)
import module_18138 from "module_18138" /* 18138 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18138.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};