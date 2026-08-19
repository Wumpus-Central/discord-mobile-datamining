// === Module 13572: toLocaleLowerCase ===

// Module 13572 (toLocaleLowerCase)
import obj132 from "obj132" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 13573 */;
import module_13669 from "module_13669" /* 13669 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
  }
};
const result = obj132.fileFinishedImporting("polyfills.android.tsx");