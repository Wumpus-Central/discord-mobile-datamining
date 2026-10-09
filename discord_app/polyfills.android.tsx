// === Module 14373: polyfills ===

// Module 14373 (polyfills)
import module_14374 from "module_14374" /* 14374 */;
import polyfillsNative from "polyfillsNative" /* 14470 */;
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