// === Module 15251: polyfills ===

// Module 15251 (polyfills)
import module_15252 from "module_15252" /* 15252 */;
import polyfillsNative from "polyfillsNative" /* 15348 */;
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