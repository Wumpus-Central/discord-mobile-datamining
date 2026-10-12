// === Module 17445: snowballStemmer ===

// Module 17445 (snowballStemmer)
import module_17446 from "module_17446" /* 17446 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17446.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};