// discord_app/polyfills.android.tsx
import obj132 from "../_runtime/00002_obj132.js";
import addLikelySubtags from "../_runtime/13573_addLikelySubtags.js";
import polyfillsNative from "polyfillsNative.tsx";

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
  }
};
const result = obj132.fileFinishedImporting("polyfills.android.tsx");