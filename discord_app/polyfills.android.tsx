// === Module 15942: polyfills ===

// Module 15942 (polyfills)
import module_15943 from "module_15943" /* 15943 */;
import polyfillsNative from "polyfillsNative" /* 16039 */;
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