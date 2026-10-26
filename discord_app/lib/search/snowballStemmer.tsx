// === Module 18145: snowballStemmer ===

// Module 18145 (snowballStemmer)
import module_18146 from "module_18146" /* 18146 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18146.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};