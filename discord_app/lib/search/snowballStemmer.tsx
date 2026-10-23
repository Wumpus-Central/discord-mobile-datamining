// === Module 18056: snowballStemmer ===

// Module 18056 (snowballStemmer)
import module_18057 from "module_18057" /* 18057 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18057.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};