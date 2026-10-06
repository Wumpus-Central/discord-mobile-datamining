// === Module 16885: snowballStemmer ===

// Module 16885 (snowballStemmer)
import module_16886 from "module_16886" /* 16886 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16886.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};