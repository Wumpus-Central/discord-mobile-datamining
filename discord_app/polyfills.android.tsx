// === Module 14277: polyfills ===

// Module 14277 (polyfills)
import module_14278 from "module_14278" /* 14278 */;
import polyfillsNative from "polyfillsNative" /* 14374 */;
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