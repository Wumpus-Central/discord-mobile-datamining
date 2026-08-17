// discord_app/lib/search/snowballStemmer.tsx
import set from "set" /* 2 */;
import 15935__ from "../../../_runtime/metro/15935__.js" /* 15935 */;

let closure_0 = module_15935.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};