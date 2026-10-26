// === Module 15443: polyfills ===

// Module 15443 (polyfills)
import module_15444 from "module_15444" /* 15444 */;
import polyfillsNative from "polyfillsNative" /* 15540 */;
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