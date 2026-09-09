// === Module 14224: polyfills ===

// Module 14224 (polyfills)
import module_14225 from "module_14225" /* 14225 */;
import polyfillsNative from "polyfillsNative" /* 14321 */;
import size from "module_2" /* 2 */;

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