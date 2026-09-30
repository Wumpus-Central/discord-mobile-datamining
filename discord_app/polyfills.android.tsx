// === Module 13883: polyfills ===

// Module 13883 (polyfills)
import module_13884 from "module_13884" /* 13884 */;
import polyfillsNative from "polyfillsNative" /* 13980 */;
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