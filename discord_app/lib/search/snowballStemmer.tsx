// === Module 19067: snowballStemmer ===

// Module 19067 (snowballStemmer)
import module_19068 from "module_19068" /* 19068 */;
import size from "module_2" /* 2 */;

let closure_0 = module_19068.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}