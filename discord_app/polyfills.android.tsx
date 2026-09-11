// === Module 14249: polyfills ===

// Module 14249 (polyfills)
import module_14250 from "module_14250" /* 14250 */;
import polyfillsNative from "polyfillsNative" /* 14346 */;
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