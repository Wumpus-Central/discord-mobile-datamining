// discord_app/polyfills.android.tsx
import Locale from "../_runtime/13979_Locale.js";
import polyfillsNative from "polyfillsNative.tsx";
import size from "../_runtime/metro/00002__.js";

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
