// === Module 15105: polyfills ===

// Module 15105 (polyfills)
import module_15106 from "module_15106" /* 15106 */;
import polyfillsNative from "polyfillsNative" /* 15202 */;
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