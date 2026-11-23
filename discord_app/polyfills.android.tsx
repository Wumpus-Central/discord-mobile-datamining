// === Module 15437: polyfills ===

// Module 15437 (polyfills)
import module_15438 from "module_15438" /* 15438 */;
import polyfillsNative from "polyfillsNative" /* 15534 */;
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