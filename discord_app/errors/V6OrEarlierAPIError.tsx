// discord_app/errors/V6OrEarlierAPIError.tsx
import Constants from "../Constants.tsx";
import util from "../intl/index.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Links = Constants.Links;
const V6OrEarlierAPIError = HTTPUtils.V6OrEarlierAPIError;
const prototype = function APIErrorWithDefaultMessage(arg0, arg1) {
  if (null != arg1) {
    const intl2 = util.intl;
    let obj = { statusPageURL: Links.STATUS, details: null };
    const _HermesInternal = HermesInternal;
    obj.details = "" + arg1;
    intl2.formatToPlainString(util.t.aKRa0Q, obj);
  } else {
    const intl = util.intl;
    obj = { statusPageURL: Links.STATUS };
    intl.formatToPlainString(util.t.aTVNes, obj);
  }
  tmp = new tmp();
  return tmp;
}.prototype;
class prototype extends V6OrEarlierAPIError {}
const result = size.fileFinishedImporting("errors/V6OrEarlierAPIError.tsx");

export default prototype;
