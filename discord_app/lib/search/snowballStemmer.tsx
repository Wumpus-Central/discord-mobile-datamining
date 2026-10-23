// === Module 18100: snowballStemmer ===

// Module 18100 (snowballStemmer)
import module_18101 from "module_18101" /* 18101 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18101.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};