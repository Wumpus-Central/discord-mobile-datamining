// discord_app/polyfills.android.tsx
import set from "../_runtime/00002_set.js";
import addLikelySubtags from "../_runtime/13573_addLikelySubtags.js";
import polyfillsNative from "polyfillsNative.tsx";

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
    const tmp = toLocaleLowerCase;
  }
};
const result = set.fileFinishedImporting("polyfills.android.tsx");