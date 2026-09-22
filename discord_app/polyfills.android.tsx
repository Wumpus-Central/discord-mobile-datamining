// === Module 14482: polyfills ===

// Module 14482 (polyfills)
import module_14483 from "module_14483" /* 14483 */;
import polyfillsNative from "polyfillsNative" /* 14579 */;
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