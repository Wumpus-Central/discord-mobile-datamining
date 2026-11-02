// === Module 16027: polyfills ===

// Module 16027 (polyfills)
import module_16028 from "module_16028" /* 16028 */;
import polyfillsNative from "polyfillsNative" /* 16124 */;
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