// === Module 18712: snowballStemmer ===

// Module 18712 (snowballStemmer)
import module_18713 from "module_18713" /* 18713 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18713.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}