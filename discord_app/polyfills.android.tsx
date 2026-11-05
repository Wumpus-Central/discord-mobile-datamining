// === Module 16285: polyfills ===

// Module 16285 (polyfills)
import module_16286 from "module_16286" /* 16286 */;
import polyfillsNative from "polyfillsNative" /* 16382 */;
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