// === Module 16798: snowballStemmer ===

// Module 16798 (snowballStemmer)
import module_16799 from "module_16799" /* 16799 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16799.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};