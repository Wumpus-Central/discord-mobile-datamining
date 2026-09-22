// === Module 4658: APIError ===

// Module 4658 (APIError)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import size from "module_2" /* 2 */;

const Links = Constants.Links;
const V8APIError = HTTPUtils.V8APIError;
const prototype = function APIErrorWithDefaultMessage(arg0, arg1) {
  if (null != arg1) {
    const intl2 = util.intl;
    const obj2 = { statusPageURL: Links.STATUS, details: null };
    const _HermesInternal = HermesInternal;
    obj2.details = "" + arg1;
    intl2.formatToPlainString(util.t.aKRa0Q, obj2);
  } else {
    const intl = util.intl;
    const obj = { statusPageURL: Links.STATUS };
    intl.formatToPlainString(util.t.aTVNes, obj);
  }
  return new tmp();
}.prototype;
class prototype extends V8APIError {
}
const result = size.fileFinishedImporting("errors/APIError.tsx");

export default prototype;