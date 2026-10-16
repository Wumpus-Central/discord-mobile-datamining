// === Module 15140: polyfills ===

// Module 15140 (polyfills)
import module_15141 from "module_15141" /* 15141 */;
import polyfillsNative from "polyfillsNative" /* 15237 */;
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