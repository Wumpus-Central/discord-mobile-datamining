// discord_app/polyfills.android.tsx
import set from "set" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 13573 */;
import polyfillsNative from "polyfillsNative.tsx" /* 13669 */;

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