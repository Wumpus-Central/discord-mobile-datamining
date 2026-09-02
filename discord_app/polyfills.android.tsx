// === Module 14074: toLocaleLowerCase ===

// Module 14074 (toLocaleLowerCase)
import set from "set" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 14075 */;
import module_14171 from "module_14171" /* 14171 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
    const tmp = toLocaleLowerCase;
  }
};
const result = set.fileFinishedImporting("polyfills.android.tsx");