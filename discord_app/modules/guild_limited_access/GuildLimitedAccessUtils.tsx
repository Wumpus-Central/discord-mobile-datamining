// discord_app/modules/guild_limited_access/GuildLimitedAccessUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";

const AbortCodes = ME.AbortCodes;
const result = set.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

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