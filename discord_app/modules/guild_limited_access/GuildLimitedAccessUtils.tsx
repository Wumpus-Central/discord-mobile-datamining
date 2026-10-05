// discord_app/modules/guild_limited_access/GuildLimitedAccessUtils.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/guild_limited_access/GuildLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(arg0, arg1) {
  return (
    403 === arg0 &&
    null != arg1 &&
    arg1 >= AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT &&
    arg1 <= AbortCodes.GUILD_LIMITED_ACCESS_MAX
  );
};
