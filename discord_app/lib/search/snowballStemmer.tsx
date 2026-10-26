// === Module 18136: snowballStemmer ===

// Module 18136 (snowballStemmer)
import module_18137 from "module_18137" /* 18137 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18137.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};