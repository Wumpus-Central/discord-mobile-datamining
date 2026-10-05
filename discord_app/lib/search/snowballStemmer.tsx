// === Module 16860: snowballStemmer ===

// Module 16860 (snowballStemmer)
import module_16861 from "module_16861" /* 16861 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16861.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};