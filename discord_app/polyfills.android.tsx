// === Module 13687: polyfills ===

// Module 13687 (polyfills)
import module_13688 from "module_13688" /* 13688 */;
import polyfillsNative from "polyfillsNative" /* 13784 */;
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