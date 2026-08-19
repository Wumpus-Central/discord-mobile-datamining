// discord_app/modules/unique_usernames/useUsernameStatus.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (arg0, flag, flag2, username) => {
  const _require = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  dependencyMap = tmp;
  let React;
  const usernameLiveCheck = require("useUsernameLiveCheck.tsx").useUsernameLiveCheck(arg0, flag, flag2);
  const tmp3 = usernameLiveCheck(React.useState(undefined), 2);
  React = tmp3[1];
  const items = [usernameLiveCheck, arg0, username];
  const effect = React.useEffect(() => {
    if ("" !== closure_0) {
      if (tmp !== closure_1) {
        if (null != usernameLiveCheck) {
          callback(tmp3);
        }
      }
    }
    callback(undefined);
  }, items);
  return tmp3[0];
};