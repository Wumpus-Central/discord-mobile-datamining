// === Module 16023: polyfills ===

// Module 16023 (polyfills)
import module_16024 from "module_16024" /* 16024 */;
import polyfillsNative from "polyfillsNative" /* 16120 */;
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