// === Module 14427: polyfills ===

// Module 14427 (polyfills)
import module_14428 from "module_14428" /* 14428 */;
import polyfillsNative from "polyfillsNative" /* 14524 */;
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