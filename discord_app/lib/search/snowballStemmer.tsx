// === Module 16713: snowballStemmer ===

// Module 16713 (snowballStemmer)
import module_16714 from "module_16714" /* 16714 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16714.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};