// === Module 15934: snowballStem ===

// Module 15934 (snowballStem)
import obj132 from "obj132" /* 2 */;
import module_15935 from "module_15935" /* 15935 */;

let closure_0 = module_15935.newStemmer("english");
const result = obj132.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};