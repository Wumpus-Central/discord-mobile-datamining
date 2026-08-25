// === Module 4066: prototype ===

// Module 4066 (prototype)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const Links = ME.Links;
const V6OrEarlierAPIError = sendRequest.V6OrEarlierAPIError;
const prototype = function APIErrorWithDefaultMessage(arg0, arg1) {
  if (null != arg1) {
    const intl2 = getSystemLocale.intl;
    let obj = { statusPageURL: null, details: null };
    obj[0] = Links.STATUS;
    const _HermesInternal = HermesInternal;
    obj[1] = "" + arg1;
    intl2.formatToPlainString(getSystemLocale.t.aKRa0Q, obj);
  } else {
    const intl = getSystemLocale.intl;
    obj = { statusPageURL: null };
    obj[0] = Links.STATUS;
    intl.formatToPlainString(getSystemLocale.t.aTVNes, obj);
  }
  tmp = new tmp();
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends V6OrEarlierAPIError {
}
const result = set.fileFinishedImporting("errors/V6OrEarlierAPIError.tsx");

export default prototype;