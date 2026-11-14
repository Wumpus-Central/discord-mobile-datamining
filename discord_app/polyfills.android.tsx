// === Module 16646: polyfills ===

// Module 16646 (polyfills)
import module_16647 from "module_16647" /* 16647 */;
import polyfillsNative from "polyfillsNative" /* 16743 */;
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