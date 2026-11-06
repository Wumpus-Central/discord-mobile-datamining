// === Module 16282: polyfills ===

// Module 16282 (polyfills)
import module_16283 from "module_16283" /* 16283 */;
import polyfillsNative from "polyfillsNative" /* 16379 */;
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