// === Module 14294: polyfills ===

// Module 14294 (polyfills)
import module_14295 from "module_14295" /* 14295 */;
import polyfillsNative from "polyfillsNative" /* 14391 */;
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