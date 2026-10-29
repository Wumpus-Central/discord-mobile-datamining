// discord_app/lib/search/snowballStemmer.tsx
import 18654__ from "../../../_runtime/metro/18654__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = module_18654.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}