// === Module 16170: polyfills ===

// Module 16170 (polyfills)
import module_16171 from "module_16171" /* 16171 */;
import polyfillsNative from "polyfillsNative" /* 16267 */;
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