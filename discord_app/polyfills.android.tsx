// === Module 15419: polyfills ===

// Module 15419 (polyfills)
import module_15420 from "module_15420" /* 15420 */;
import polyfillsNative from "polyfillsNative" /* 15516 */;
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