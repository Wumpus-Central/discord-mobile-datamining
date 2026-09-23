// === Module 14562: polyfills ===

// Module 14562 (polyfills)
import module_14563 from "module_14563" /* 14563 */;
import polyfillsNative from "polyfillsNative" /* 14659 */;
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