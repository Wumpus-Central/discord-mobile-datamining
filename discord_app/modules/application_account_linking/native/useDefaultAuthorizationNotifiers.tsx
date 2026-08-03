// === Module 15248: useDefaultAuthorizationNotifiers ===

// Module 15248 (useDefaultAuthorizationNotifiers)
import noop from "noop";
import getState from "getState";
import { AppStates } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx");

export const useDefaultAuthorizationNotifiers = function useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked, value) {
  const _require = startAuthorization;
  let closure_1 = hasAlreadyLinked;
  let obj = value;
  if (value === undefined) {
    obj = {};
  }
  let flag = obj.showToastOnSuccess;
  if (flag === undefined) {
    flag = true;
  }
  let React;
  let stateFromStores;
  let previousWhen;
  React = React.useRef(false);
  const items = [stateFromStores];
  stateFromStores = _require(flag[3]).useStateFromStores(items, () => stateFromStores.getState() === previousWhen.ACTIVE);
  const obj2 = React;
  const obj3 = _require(flag[3]);
  const tmp = _require;
  const tmp2 = flag;
  const items1 = [startAuthorization];
  const isInAppBrowserOpen = _require(flag[4]).useIsInAppBrowserOpen();
  const callback = React.useCallback((arg0) => {
    noop.current = true;
    return startAuthorization(arg0);
  }, items1);
  if (stateFromStores) {
    stateFromStores = !isInAppBrowserOpen;
  }
  const obj4 = _require(flag[4]);
  obj = { value: hasAlreadyLinked, shouldUpdate: stateFromStores };
  previousWhen = tmp(tmp2[5]).usePreviousWhen(obj);
  const items2 = [hasAlreadyLinked, previousWhen, flag, stateFromStores];
  const effect = obj2.useEffect(() => {
    if (ref.current) {
      if (false === previousWhen) {
        if (true === hasAlreadyLinked) {
          if (stateFromStores) {
            tmp.current = false;
            if (flag) {
              let obj = hasAlreadyLinked(flag[6]);
              obj = { content: null, key: "account-linked-toast" };
              const intl = startAuthorization(flag[7]).intl;
              obj[0] = intl.string(hasAlreadyLinked(flag[8]).uG6teD);
              obj.open(obj);
            }
          }
        }
      }
    }
  }, items2);
  return callback;
};