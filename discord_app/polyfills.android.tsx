// === Module 16330: polyfills ===

// Module 16330 (polyfills)
import module_16331 from "module_16331" /* 16331 */;
import polyfillsNative from "polyfillsNative" /* 16427 */;
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