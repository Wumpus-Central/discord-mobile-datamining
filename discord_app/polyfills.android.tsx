// === Module 15364: polyfills ===

// Module 15364 (polyfills)
import module_15365 from "module_15365" /* 15365 */;
import polyfillsNative from "polyfillsNative" /* 15461 */;
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