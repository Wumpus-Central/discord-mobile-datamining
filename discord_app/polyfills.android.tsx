// === Module 15439: polyfills ===

// Module 15439 (polyfills)
import module_15440 from "module_15440" /* 15440 */;
import polyfillsNative from "polyfillsNative" /* 15536 */;
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