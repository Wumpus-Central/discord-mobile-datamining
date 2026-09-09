// === Module 16753: snowballStemmer ===

// Module 16753 (snowballStemmer)
import module_16754 from "module_16754" /* 16754 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16754.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};