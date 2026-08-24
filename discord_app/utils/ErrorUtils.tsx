// === Module 7769: getUnderlyingIOSExceptionRecursively ===

// Module 7769 (getUnderlyingIOSExceptionRecursively)
import set from "set" /* 2 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 7770 */;

function getUnderlyingIOSExceptionRecursively(NSUnderlyingError) {
  if (null != NSUnderlyingError.userInfo.NSUnderlyingError) {
    const tmp2 = getUnderlyingIOSExceptionRecursively(NSUnderlyingError.userInfo.NSUnderlyingError);
    if (null != tmp2) {
      return tmp2;
    }
  }
  return NSUnderlyingError.userInfo.NSLocalizedDescription;
}
const result = set.fileFinishedImporting("utils/ErrorUtils.tsx");

export const getUnderlyingIOSError = function getUnderlyingIOSError(closure_8) {
  try {
    let tmp3 = getUnderlyingIOSExceptionRecursively(closure_8);
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp3;
  } catch (err) {
    return null;
  }
};
export const serializeError = function serializeError(arg0) {
  error = arg0;
  if (!Boolean(arg0)) {
    const _Error = Error;
    error = new Error("unknown error");
  }
  let error1 = error;
  if (typeof error !== "object") {
    const _Error2 = Error;
    const _String = String;
    error1 = new Error(String(error));
  }
  return JSON.stringify(BAGGAGE_HEADER_NAME.normalizeToSize(error1));
};