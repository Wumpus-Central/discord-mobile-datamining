// === Module 16528: polyfills ===

// Module 16528 (polyfills)
import module_16529 from "module_16529" /* 16529 */;
import polyfillsNative from "polyfillsNative" /* 16625 */;
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