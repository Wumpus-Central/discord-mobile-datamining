// === Module 18761: snowballStemmer ===

// Module 18761 (snowballStemmer)
import module_18762 from "module_18762" /* 18762 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18762.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}