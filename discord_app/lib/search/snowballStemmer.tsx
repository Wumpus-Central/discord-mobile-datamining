// === Module 16961: snowballStemmer ===

// Module 16961 (snowballStemmer)
import module_16962 from "module_16962" /* 16962 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16962.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};