// === Module 13765: toLocaleLowerCase ===

// Module 13765 (toLocaleLowerCase)
import set from "set" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 13766 */;
import module_13862 from "module_13862" /* 13862 */;

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