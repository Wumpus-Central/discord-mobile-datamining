// === Module 16294: snowballStem ===

// Module 16294 (snowballStem)
import set from "set" /* 2 */;
import module_16295 from "module_16295" /* 16295 */;

let closure_0 = module_16295.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};