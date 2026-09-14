// === Module 14285: polyfills ===

// Module 14285 (polyfills)
import module_14286 from "module_14286" /* 14286 */;
import polyfillsNative from "polyfillsNative" /* 14382 */;
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