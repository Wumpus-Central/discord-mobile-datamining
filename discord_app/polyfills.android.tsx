// === Module 14450: polyfills ===

// Module 14450 (polyfills)
import module_14451 from "module_14451" /* 14451 */;
import polyfillsNative from "polyfillsNative" /* 14547 */;
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