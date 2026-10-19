// === Module 15223: polyfills ===

// Module 15223 (polyfills)
import module_15224 from "module_15224" /* 15224 */;
import polyfillsNative from "polyfillsNative" /* 15320 */;
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