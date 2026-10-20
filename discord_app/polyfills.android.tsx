// === Module 15269: polyfills ===

// Module 15269 (polyfills)
import module_15270 from "module_15270" /* 15270 */;
import polyfillsNative from "polyfillsNative" /* 15366 */;
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