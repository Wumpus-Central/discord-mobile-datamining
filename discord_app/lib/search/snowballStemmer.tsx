// discord_app/lib/search/snowballStemmer.tsx
import 17189__ from "../../../_runtime/metro/17189__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_17189.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};