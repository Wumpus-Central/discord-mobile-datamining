// discord_app/polyfills.android.tsx
import addLikelySubtags from "addLikelySubtags";
import polyfillsNative from "polyfillsNative.tsx";

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
const result = require("set").fileFinishedImporting("polyfills.android.tsx");