// discord_app/lib/search/snowballStemmer.tsx
import 19068__ from "../../../_runtime/metro/19068__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_19068.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}