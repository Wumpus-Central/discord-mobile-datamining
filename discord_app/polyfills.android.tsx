// === Module 15385: polyfills ===

// Module 15385 (polyfills)
import module_15386 from "module_15386" /* 15386 */;
import polyfillsNative from "polyfillsNative" /* 15482 */;
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