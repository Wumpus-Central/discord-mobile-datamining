// === Module 9739: isLimitedAccessErrorCode ===

// Module 9739 (isLimitedAccessErrorCode)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const AbortCodes = ME.AbortCodes;
const result = obj132.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

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