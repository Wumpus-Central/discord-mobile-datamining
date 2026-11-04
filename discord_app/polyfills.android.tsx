// === Module 16259: polyfills ===

// Module 16259 (polyfills)
import module_16260 from "module_16260" /* 16260 */;
import polyfillsNative from "polyfillsNative" /* 16356 */;
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