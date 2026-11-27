// === Module 15638: polyfills ===

// Module 15638 (polyfills)
import module_15639 from "module_15639" /* 15639 */;
import polyfillsNative from "polyfillsNative" /* 15735 */;
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