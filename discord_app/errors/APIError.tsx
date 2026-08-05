// discord_app/errors/APIError.tsx
import { Links } from "ME";
import { V8APIError } from "sendRequest";

const prototype = function APIErrorWithDefaultMessage(arg0, arg1) {
  if (null != arg1) {
    const intl2 = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { statusPageURL: null, details: null };
    obj[0] = Links.STATUS;
    const _HermesInternal = HermesInternal;
    obj[1] = "" + arg1;
    intl2.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t.aKRa0Q, obj);
  } else {
    const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { statusPageURL: null };
    obj[0] = Links.STATUS;
    intl.formatToPlainString(require("../intl/index.native.tsx") /* getSystemLocale */.t.aTVNes, obj);
  }
  tmp = new tmp();
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends V8APIError {
}
const result = require("getSystemLocale").fileFinishedImporting("errors/APIError.tsx");

export default prototype;