// === Module 14476: polyfills ===

// Module 14476 (polyfills)
import module_14477 from "module_14477" /* 14477 */;
import polyfillsNative from "polyfillsNative" /* 14573 */;
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