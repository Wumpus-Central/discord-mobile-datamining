// discord_app/modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3095 from "../AccountLinking.messages.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx",
);

export const useDefaultAuthorizationNotifiers = function useDefaultAuthorizationNotifiers(
  startAuthorization,
  hasAlreadyLinked,
  value,
) {
  _require = startAuthorization;
  closure_1 = hasAlreadyLinked;
  let obj = value;
  if (value === undefined) {
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
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => stateFromStores.getState() === previousWhen.ACTIVE,
  );
  const obj2 = noop;
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
  obj = { value: hasAlreadyLinked, shouldUpdate: stateFromStores };
  previousWhen = tmp(tmp2[5]).usePreviousWhen(obj);
  const items2 = [hasAlreadyLinked, previousWhen, flag, stateFromStores];
  const effect = obj2.useEffect(() => {
    if (ref.current) {
      if (false === previousWhen) {
        if (true === closure_1) {
          if (stateFromStores) {
            tmp.current = false;
            if (flag) {
              const obj = { content: null, key: "account-linked-toast" };
              const intl = util.intl;
              obj.content = intl.string(_modDef3095.uG6teD);
              obj.open(obj);
            }
          }
        }
      }
    }
  }, items2);
  return callback;
};
