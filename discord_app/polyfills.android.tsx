// === Module 14312: polyfills ===

// Module 14312 (polyfills)
import module_14313 from "module_14313" /* 14313 */;
import polyfillsNative from "polyfillsNative" /* 14409 */;
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