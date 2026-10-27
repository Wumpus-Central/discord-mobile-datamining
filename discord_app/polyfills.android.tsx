// === Module 15480: polyfills ===

// Module 15480 (polyfills)
import module_15481 from "module_15481" /* 15481 */;
import polyfillsNative from "polyfillsNative" /* 15577 */;
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