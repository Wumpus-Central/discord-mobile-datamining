// === Module 13732: polyfills ===

// Module 13732 (polyfills)
import module_13733 from "module_13733" /* 13733 */;
import polyfillsNative from "polyfillsNative" /* 13829 */;
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