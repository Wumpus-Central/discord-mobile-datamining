// discord_app/errors/V6OrEarlierAPIError.tsx
import { Links } from "ME";
import { V6OrEarlierAPIError } from "sendRequest";
import { getSystemLocale } from "../intl/index.native.tsx";

const prototype = function APIErrorWithDefaultMessage(arg0, arg1) {
  if (null != arg1) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    let obj = { statusPageURL: null, details: null };
    obj[0] = Links.STATUS;
    const _HermesInternal = HermesInternal;
    obj[1] = "" + arg1;
    intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.aKRa0Q, obj);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj = { statusPageURL: null };
    obj[0] = Links.STATUS;
    intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.aTVNes, obj);
  }
  tmp = new tmp();
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends V6OrEarlierAPIError {
}
const result = require("getSystemLocale").fileFinishedImporting("errors/V6OrEarlierAPIError.tsx");

export default prototype;