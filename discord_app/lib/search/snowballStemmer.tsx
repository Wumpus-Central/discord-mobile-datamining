// === Module 17166: snowballStemmer ===

// Module 17166 (snowballStemmer)
import module_17167 from "module_17167" /* 17167 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17167.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};