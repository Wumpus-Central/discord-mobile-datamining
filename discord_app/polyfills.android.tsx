// === Module 15350: polyfills ===

// Module 15350 (polyfills)
import module_15351 from "module_15351" /* 15351 */;
import polyfillsNative from "polyfillsNative" /* 15447 */;
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