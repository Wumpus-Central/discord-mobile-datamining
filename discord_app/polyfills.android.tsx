// === Module 14809: polyfills ===

// Module 14809 (polyfills)
import module_14810 from "module_14810" /* 14810 */;
import polyfillsNative from "polyfillsNative" /* 14906 */;
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