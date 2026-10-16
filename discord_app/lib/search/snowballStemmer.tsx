// === Module 17757: snowballStemmer ===

// Module 17757 (snowballStemmer)
import module_17758 from "module_17758" /* 17758 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17758.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};