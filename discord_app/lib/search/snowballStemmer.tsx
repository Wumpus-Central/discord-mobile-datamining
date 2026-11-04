// discord_app/lib/search/snowballStemmer.tsx
import 19037__ from "../../../_runtime/metro/19037__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_19037.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}