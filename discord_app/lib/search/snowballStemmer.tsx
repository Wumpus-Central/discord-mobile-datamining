// === Module 17767: snowballStemmer ===

// Module 17767 (snowballStemmer)
import module_17768 from "module_17768" /* 17768 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17768.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};