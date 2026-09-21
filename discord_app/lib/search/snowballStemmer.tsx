// === Module 17188: snowballStemmer ===

// Module 17188 (snowballStemmer)
import module_17189 from "module_17189" /* 17189 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17189.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};