// === Module 16474: snowballStemmer ===

// Module 16474 (snowballStemmer)
import module_16475 from "module_16475" /* 16475 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16475.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};