// === Module 14199: polyfills ===

// Module 14199 (polyfills)
import module_14200 from "module_14200" /* 14200 */;
import polyfillsNative from "polyfillsNative" /* 14296 */;
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