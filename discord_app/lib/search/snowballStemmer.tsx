// === Module 17723: snowballStemmer ===

// Module 17723 (snowballStemmer)
import module_17724 from "module_17724" /* 17724 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17724.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};