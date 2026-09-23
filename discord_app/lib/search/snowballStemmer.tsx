// === Module 17233: snowballStemmer ===

// Module 17233 (snowballStemmer)
import module_17234 from "module_17234" /* 17234 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17234.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};