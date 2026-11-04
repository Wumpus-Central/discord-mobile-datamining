// === Module 19036: snowballStemmer ===

// Module 19036 (snowballStemmer)
import module_19037 from "module_19037" /* 19037 */;
import size from "module_2" /* 2 */;

let closure_0 = module_19037.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}