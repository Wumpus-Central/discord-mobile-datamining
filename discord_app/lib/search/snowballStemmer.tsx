// === Module 17827: snowballStemmer ===

// Module 17827 (snowballStemmer)
import module_17828 from "module_17828" /* 17828 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17828.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};