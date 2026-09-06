// === Module 9045: UserLimitedAccessUtils ===

// Module 9045 (UserLimitedAccessUtils)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

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