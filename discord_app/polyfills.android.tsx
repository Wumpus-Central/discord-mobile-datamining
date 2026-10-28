// === Module 15706: polyfills ===

// Module 15706 (polyfills)
import module_15707 from "module_15707" /* 15707 */;
import polyfillsNative from "polyfillsNative" /* 15803 */;
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