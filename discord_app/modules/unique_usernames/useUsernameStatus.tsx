// discord_app/modules/unique_usernames/useUsernameStatus.tsx
import useUsernameLiveCheck from "useUsernameLiveCheck.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (username) => {
  closure_0 = username;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  closure_1 = tmp;
  const usernameLiveCheck = useUsernameLiveCheck.useUsernameLiveCheck(username, flag, flag2);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  closure_3 = tmp3[1];
  const items = [usernameLiveCheck, username, username];
  const effect = noop.useEffect(() => {
    if ("" !== closure_0) {
      if (tmp !== closure_1) {
        if (null != usernameLiveCheck) {
          closure_3(tmp3);
        }
      }
    }
    closure_3(undefined);
  }, items);
  return tmp3[0];
};
