// === Module 16367: polyfills ===

// Module 16367 (polyfills)
import module_16368 from "module_16368" /* 16368 */;
import polyfillsNative from "polyfillsNative" /* 16464 */;
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