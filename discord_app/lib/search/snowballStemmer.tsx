// === Module 16716: snowballStemmer ===

// Module 16716 (snowballStemmer)
import module_16717 from "module_16717" /* 16717 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16717.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};