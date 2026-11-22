// === Module 15435: polyfills ===

// Module 15435 (polyfills)
import module_15436 from "module_15436" /* 15436 */;
import polyfillsNative from "polyfillsNative" /* 15532 */;
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