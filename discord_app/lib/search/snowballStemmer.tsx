// === Module 18754: snowballStemmer ===

// Module 18754 (snowballStemmer)
import module_18755 from "module_18755" /* 18755 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18755.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}