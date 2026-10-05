// discord_app/modules/user_limited_access/UserLimitedAccessUtils.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/user_limited_access/UserLimitedAccessUtils.tsx");

export const isLimitedAccessErrorCode = function isLimitedAccessErrorCode(status, arg1) {
  return (
    status >= 400 &&
    status < 500 &&
    null != arg1 &&
    arg1 >= AbortCodes.USER_LIMITED_ACCESS_DEFAULT &&
    arg1 <= AbortCodes.USER_LIMITED_ACCESS_MAX
  );
};
