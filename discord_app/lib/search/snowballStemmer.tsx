// === Module 16922: snowballStemmer ===

// Module 16922 (snowballStemmer)
import module_16923 from "module_16923" /* 16923 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16923.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};