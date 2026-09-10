// === Module 14273: polyfills ===

// Module 14273 (polyfills)
import module_14274 from "module_14274" /* 14274 */;
import polyfillsNative from "polyfillsNative" /* 14370 */;
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