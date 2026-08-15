// discord_app/utils/ErrorUtils.tsx
import { BAGGAGE_HEADER_NAME } from "../../_runtime/07732_BAGGAGE_HEADER_NAME.js";
function getUnderlyingIOSExceptionRecursively(NSUnderlyingError) {
  if (null != NSUnderlyingError.userInfo.NSUnderlyingError) {
    const tmp2 = getUnderlyingIOSExceptionRecursively(NSUnderlyingError.userInfo.NSUnderlyingError);
    if (null != tmp2) {
      return tmp2;
    }
  }
  return NSUnderlyingError.userInfo.NSLocalizedDescription;
}
const result = require("set").fileFinishedImporting("utils/ErrorUtils.tsx");

export const getUnderlyingIOSError = function getUnderlyingIOSError(c11) {
  try {
    let tmp3 = getUnderlyingIOSExceptionRecursively(c11);
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp3;
  } catch (err) {
    return null;
  }
};
export const serializeError = function serializeError(arg0) {
  let error = arg0;
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