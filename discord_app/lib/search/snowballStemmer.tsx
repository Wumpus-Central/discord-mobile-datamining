// === Module 18919: snowballStemmer ===

// Module 18919 (snowballStemmer)
import module_18920 from "module_18920" /* 18920 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18920.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}