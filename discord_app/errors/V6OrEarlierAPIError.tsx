// discord_app/errors/V6OrEarlierAPIError.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../Constants.tsx";
import getSystemLocale from "../intl/index.native.tsx";

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
const result = obj132.fileFinishedImporting("errors/V6OrEarlierAPIError.tsx");

export default prototype;