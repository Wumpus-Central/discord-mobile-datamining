// discord_app/lib/search/snowballStemmer.tsx
import 16754__ from "../../../_runtime/metro/16754__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_16754.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};