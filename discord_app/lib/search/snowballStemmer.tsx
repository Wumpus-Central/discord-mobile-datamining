// discord_app/lib/search/snowballStemmer.tsx
import 17102__ from "../../../_runtime/metro/17102__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_17102.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};