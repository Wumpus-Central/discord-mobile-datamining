// === Module 16681: polyfills ===

// Module 16681 (polyfills)
import module_16682 from "module_16682" /* 16682 */;
import polyfillsNative from "polyfillsNative" /* 16778 */;
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