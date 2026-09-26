// === Module 16503: snowballStemmer ===

// Module 16503 (snowballStemmer)
import module_16504 from "module_16504" /* 16504 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16504.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};