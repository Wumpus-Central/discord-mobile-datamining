// === Module 16686: useDefaultAuthorizationNotifiers ===

// Module 16686 (useDefaultAuthorizationNotifiers)
import util from "util" /* 1115 */;
import _modDef3230 from "module_3230" /* 3230 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1979 */;

const require = globalThis.__r;

require = fn;
const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx");

export const useDefaultAuthorizationNotifiers = function useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked) {
  _require = startAuthorization;
  closure_1 = hasAlreadyLinked;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.showToastOnSuccess;
  if (flag === undefined) {
    flag = true;
  }
  noop = undefined;
  let stateFromStores;
  let previousWhen;
  noop = noop.useRef(false);
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores.getState() === previousWhen.ACTIVE);
  let obj2 = noop;
  const obj3 = require("initialize");
  const tmp = _require;
  const tmp2 = flag;
  const items1 = [startAuthorization];
  const isInAppBrowserOpen = require("BrowserManager").useIsInAppBrowserOpen();
  const callback = noop.useCallback((arg0) => {
    closure_3.current = true;
    return startAuthorization(arg0);
  }, items1);
  if (stateFromStores) {
    stateFromStores = !isInAppBrowserOpen;
  }
  const obj4 = require("BrowserManager");
  previousWhen = tmp(tmp2[5]).usePreviousWhen({ value: hasAlreadyLinked, shouldUpdate: stateFromStores });
  const items2 = [hasAlreadyLinked, previousWhen, flag, stateFromStores];
  const effect = obj2.useEffect(() => {
    if (ref.current) {
      if (false === previousWhen) {
        if (true === closure_1) {
          if (stateFromStores) {
            tmp.current = false;
            if (flag) {
              const obj2 = { content: null, key: "account-linked-toast" };
              const intl = util.intl;
              obj2.content = intl.string(_modDef3230.uG6teD);
              ToastActionCreatorsDefault.open(obj2);
            }
          }
        }
      }
    }
  }, items2);
  return callback;
};