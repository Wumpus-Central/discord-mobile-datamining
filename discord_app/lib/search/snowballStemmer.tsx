// === Module 17831: snowballStemmer ===

// Module 17831 (snowballStemmer)
import module_17832 from "module_17832" /* 17832 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17832.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};