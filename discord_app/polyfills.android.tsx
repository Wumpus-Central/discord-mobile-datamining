// === Module 13665: toLocaleLowerCase ===

// Module 13665 (toLocaleLowerCase)
import set from "set" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 13666 */;
import module_13762 from "module_13762" /* 13762 */;

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