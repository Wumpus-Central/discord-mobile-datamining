// === Module 18179: snowballStemmer ===

// Module 18179 (snowballStemmer)
import module_18180 from "module_18180" /* 18180 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18180.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};