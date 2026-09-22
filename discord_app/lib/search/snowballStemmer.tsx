// === Module 17200: snowballStemmer ===

// Module 17200 (snowballStemmer)
import module_17201 from "module_17201" /* 17201 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17201.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};