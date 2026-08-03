// === Module 13877: useUsernameStatus ===

// Module 13877 (useUsernameStatus)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("useUsernameLiveCheck").fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (arg0, flag, flag2) => {
  const _require = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = tmp;
  let usernameLiveCheck;
  let React;
  usernameLiveCheck = _require(13878).useUsernameLiveCheck(arg0, flag, flag2);
  const tmp3 = usernameLiveCheck(React.useState(undefined), 2);
  React = tmp3[1];
  const items = [usernameLiveCheck, arg0, arg3];
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