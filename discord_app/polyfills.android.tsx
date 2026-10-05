// === Module 13960: polyfills ===

// Module 13960 (polyfills)
import Locale from "Locale" /* 13961 */;
import polyfillsNative from "polyfillsNative" /* 14057 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");