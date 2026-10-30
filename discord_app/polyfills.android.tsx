// === Module 15982: polyfills ===

// Module 15982 (polyfills)
import module_15983 from "module_15983" /* 15983 */;
import polyfillsNative from "polyfillsNative" /* 16079 */;
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