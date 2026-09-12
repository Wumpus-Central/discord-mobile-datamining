// === Module 14284: polyfills ===

// Module 14284 (polyfills)
import module_14285 from "module_14285" /* 14285 */;
import polyfillsNative from "polyfillsNative" /* 14381 */;
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