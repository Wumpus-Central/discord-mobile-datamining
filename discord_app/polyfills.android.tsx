// === Module 14571: polyfills ===

// Module 14571 (polyfills)
import module_14572 from "module_14572" /* 14572 */;
import polyfillsNative from "polyfillsNative" /* 14668 */;
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