// === Module 16841: snowballStemmer ===

// Module 16841 (snowballStemmer)
import module_16842 from "module_16842" /* 16842 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16842.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};