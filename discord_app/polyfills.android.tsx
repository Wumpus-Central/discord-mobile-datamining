// === Module 13960: polyfills ===

// Module 13960 (polyfills)
import module_13961 from "module_13961" /* 13961 */;
import polyfillsNative from "polyfillsNative" /* 14057 */;
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