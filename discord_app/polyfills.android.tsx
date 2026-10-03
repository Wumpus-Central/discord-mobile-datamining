// === Module 13958: polyfills ===

// Module 13958 (polyfills)
import module_13959 from "module_13959" /* 13959 */;
import polyfillsNative from "polyfillsNative" /* 14055 */;
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