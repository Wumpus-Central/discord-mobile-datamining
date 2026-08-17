// discord_app/modules/unique_usernames/useUsernameLiveCheck.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "isRateLimited" /* 14119 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/unique_usernames/useUsernameLiveCheck.tsx");

export const useUsernameLiveCheck = function useUsernameLiveCheck(arg0, flag, flag2) {
  const _require = arg0;
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
  let stateFromStores1;
  let memo;
  const items = [stateFromStores];
  const items1 = [arg0];
  stateFromStores = _require(flag2[2]).useStateFromStores(items, () => stateFromStores.validate(closure_0), items1);
  let obj = _require(flag2[2]);
  const items2 = [stateFromStores];
  stateFromStores1 = _require(flag2[2]).useStateFromStores(items2, () => stateFromStores.isRateLimited());
  const items3 = [flag2, flag3];
  memo = flag3.useMemo(() => callback(flag2[3]).debounce((arg0) => {
    let str = "modal";
    if (closure_2) {
      str = "registration";
    }
    return closure_1_1(closure_1_2[4]).attemptUsername(arg0, str, closure_2, closure_3);
  }, 800), items3);
  const items4 = [flag, stateFromStores1, stateFromStores, arg0, memo];
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
      result = callback(flag2[5]).formatUsernameLiveCheckValidation(tmp);
      const obj = callback(flag2[5]);
    }
    return result;
  }, items5);
};