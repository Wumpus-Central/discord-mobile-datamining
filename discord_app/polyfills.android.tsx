// === Module 15150: polyfills ===

// Module 15150 (polyfills)
import module_15151 from "module_15151" /* 15151 */;
import polyfillsNative from "polyfillsNative" /* 15247 */;
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