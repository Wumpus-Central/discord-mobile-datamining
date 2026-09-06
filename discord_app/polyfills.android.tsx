// discord_app/polyfills.android.tsx
import 14197__ from "../_runtime/metro/14197__.js";
import polyfillsNative from "polyfillsNative.tsx";
import size from "../_runtime/metro/00002__.js";

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
  }
};
const result = size.fileFinishedImporting("polyfills.android.tsx");