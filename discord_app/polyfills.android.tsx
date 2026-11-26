// === Module 15631: polyfills ===

// Module 15631 (polyfills)
import module_15632 from "module_15632" /* 15632 */;
import polyfillsNative from "polyfillsNative" /* 15728 */;
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