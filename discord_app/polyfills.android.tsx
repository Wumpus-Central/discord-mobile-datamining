// === Module 14415: polyfills ===

// Module 14415 (polyfills)
import module_14416 from "module_14416" /* 14416 */;
import polyfillsNative from "polyfillsNative" /* 14512 */;
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