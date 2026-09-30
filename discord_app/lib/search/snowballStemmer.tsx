// === Module 16730: snowballStemmer ===

// Module 16730 (snowballStemmer)
import module_16731 from "module_16731" /* 16731 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16731.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};