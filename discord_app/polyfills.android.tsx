// === Module 14196: polyfills ===

// Module 14196 (polyfills)
import module_14197 from "module_14197" /* 14197 */;
import polyfillsNative from "polyfillsNative" /* 14293 */;
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