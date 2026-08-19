// === Module 16505: isLimitedAccessErrorCode ===

// Module 16505 (isLimitedAccessErrorCode)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const AbortCodes = ME.AbortCodes;
const result = obj132.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  let tmp = 403 === arg0;
  if (tmp) {
    tmp = null != arg1;
  }
  if (tmp) {
    tmp = arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT;
  }
  if (tmp) {
    tmp = arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX;
  }
  return tmp;
};