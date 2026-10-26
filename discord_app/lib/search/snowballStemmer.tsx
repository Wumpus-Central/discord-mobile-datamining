// discord_app/lib/search/snowballStemmer.tsx
import 18146__ from "../../../_runtime/metro/18146__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_18146.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};