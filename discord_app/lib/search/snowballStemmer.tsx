// discord_app/lib/search/snowballStemmer.tsx
import 17965__ from "../../../_runtime/metro/17965__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_17965.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};