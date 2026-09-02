// === Module 9076: isLimitedAccessErrorCode ===

// Module 9076 (isLimitedAccessErrorCode)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const AbortCodes = ME.AbortCodes;
const result = set.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  let tmp = arg0 >= 400;
  if (tmp) {
    tmp = arg0 < 500;
  }
  if (tmp) {
    tmp = null != arg1;
  }
  if (tmp) {
    tmp = arg1 >= AbortCodes.USER_LIMITED_ACCESS_DEFAULT;
  }
  if (tmp) {
    tmp = arg1 <= AbortCodes.USER_LIMITED_ACCESS_MAX;
  }
  return tmp;
};