// === Module 15314: polyfills ===

// Module 15314 (polyfills)
import module_15315 from "module_15315" /* 15315 */;
import polyfillsNative from "polyfillsNative" /* 15411 */;
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