// === Module 18132: snowballStemmer ===

// Module 18132 (snowballStemmer)
import module_18133 from "module_18133" /* 18133 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18133.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};