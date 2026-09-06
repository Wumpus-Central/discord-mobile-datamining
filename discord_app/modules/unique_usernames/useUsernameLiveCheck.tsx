// discord_app/modules/unique_usernames/useUsernameLiveCheck.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import UniqueUsernamesUtils from "UniqueUsernamesUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UniqueUsernamesStore from "UniqueUsernamesStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/unique_usernames/useUsernameLiveCheck.tsx");

export const useUsernameLiveCheck = function useUsernameLiveCheck(username) {
  _require = username;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = arg3;
  if (arg3 === undefined) {
    flag3 = false;
  }
  let stateFromStores;
  const items = [stateFromStores];
  const items1 = [username];
  stateFromStores = require("useStateFromStores").useStateFromStores(
    items,
    () => UniqueUsernamesStore.validate(closure_0),
    items1,
  );
  let obj = require("useStateFromStores");
  const items2 = [stateFromStores];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () =>
    stateFromStores.isRateLimited(),
  );
  const items3 = [flag2, flag3];
  const memo = flag3.useMemo(
    () =>
      _mod12.debounce((arg0) => {
        let str = "modal";
        if (closure_1_2) {
          str = "registration";
        }
        return flag(flag2[4]).attemptUsername(arg0, str, closure_1_2, flag3);
      }, 800),
    items3,
  );
  const items4 = [flag, stateFromStores1, stateFromStores, username, memo];
  const effect = flag3.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !stateFromStores1;
    }
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      tmp = "" !== closure_0;
    }
    if (tmp) {
      memo(closure_0);
    }
  }, items4);
  const items5 = [stateFromStores];
  return flag3.useMemo(() => {
    let result;
    if (null != stateFromStores) {
      result = UniqueUsernamesUtils.formatUsernameLiveCheckValidation(tmp);
    }
    return result;
  }, items5);
};
