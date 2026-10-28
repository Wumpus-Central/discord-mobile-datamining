// === Module 18419: snowballStemmer ===

// Module 18419 (snowballStemmer)
import module_18420 from "module_18420" /* 18420 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18420.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};