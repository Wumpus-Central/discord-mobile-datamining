// === Module 13978: polyfills ===

// Module 13978 (polyfills)
import module_13979 from "module_13979" /* 13979 */;
import polyfillsNative from "polyfillsNative" /* 14075 */;
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