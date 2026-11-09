// === Module 16340: polyfills ===

// Module 16340 (polyfills)
import module_16341 from "module_16341" /* 16341 */;
import polyfillsNative from "polyfillsNative" /* 16437 */;
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