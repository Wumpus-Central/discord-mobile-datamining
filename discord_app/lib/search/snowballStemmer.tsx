// === Module 17449: snowballStemmer ===

// Module 17449 (snowballStemmer)
import module_17450 from "module_17450" /* 17450 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17450.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};