// === Module 19022: snowballStemmer ===

// Module 19022 (snowballStemmer)
import module_19023 from "module_19023" /* 19023 */;
import size from "module_2" /* 2 */;

let closure_0 = module_19023.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}