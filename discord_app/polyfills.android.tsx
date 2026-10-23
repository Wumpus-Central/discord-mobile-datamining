// === Module 15398: polyfills ===

// Module 15398 (polyfills)
import module_15399 from "module_15399" /* 15399 */;
import polyfillsNative from "polyfillsNative" /* 15495 */;
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