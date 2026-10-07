// discord_app/modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3265 from "../AccountLinking.messages.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;

require = fn;
const AppStates = fn(1085).AppStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx",
);

export const useDefaultAuthorizationNotifiers = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, value, arg2) => {
      _require = arg0;
      closure_1 = value;
      const cResult = require("c").c(15);
      if (cResult[0] !== arg2) {
        let obj2 = arg2;
        if (undefined === arg2) {
          obj2 = {};
        }
        cResult[0] = arg2;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const showToastOnSuccess = tmp4.showToastOnSuccess;
      dependencyMap = tmp5;
      noop = noop.useRef(false);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores];
        const fn = function v() {
          return stateFromStores.getState() === previousWhen.ACTIVE;
        };
        cResult[2] = items;
        cResult[3] = fn;
        let tmp7 = fn;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
      const tmpResult = require("initialize");
      const isInAppBrowserOpen = require("BrowserManager").useIsInAppBrowserOpen();
      if (cResult[4] !== arg0) {
        class A {
          constructor(arg0) {
            closure_3.current = true;
            return closure_0(arg0);
          }
        }
        cResult[4] = arg0;
        cResult[5] = A;
      } else {
        class A {
          constructor(arg0) {
            closure_3.current = true;
            return closure_0(arg0);
          }
        }
      }
      if (stateFromStores) {
        class A {
          constructor(arg0) {
            closure_3.current = true;
            return closure_0(arg0);
          }
        }
      }
      stateFromStores = tmp12;
      if (cResult[6] === stateFromStores) {
        class A {
          constructor(arg0) {
            closure_3.current = true;
            return closure_0(arg0);
          }
        }
        const previousWhen = tmp(7957).usePreviousWhen(obj3);
        if (cResult[9] === tmp12) {
          class A {
            constructor(arg0) {
              closure_3.current = true;
              return closure_0(arg0);
            }
          }
        }
        const fn2 = function w() {
          if (ref.current) {
            if (false === previousWhen) {
              if (true === closure_1) {
                if (stateFromStores) {
                  tmp.current = false;
                  if (closure_2) {
                    const obj2 = { content: null, key: "account-linked-toast" };
                    const intl = util.intl;
                    obj2.content = intl.string(_modDef3265.uG6teD);
                    ToastActionCreatorsDefault.open(obj2);
                  }
                }
              }
            }
          }
        };
        const items1 = [value, previousWhen, tmp5, tmp12];
        cResult[9] = tmp12;
        cResult[10] = value;
        cResult[11] = tmp5;
        cResult[12] = previousWhen;
        cResult[13] = fn2;
        cResult[14] = items1;
        const tmpResult4 = tmp(7957);
      }
      obj3 = { value, shouldUpdate: stateFromStores };
      cResult[6] = stateFromStores;
      cResult[7] = value;
      cResult[8] = obj3;
      const tmpResult3 = require("BrowserManager");
    }
  : (arg0, value) => {
      _require = arg0;
      closure_1 = value;
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
      stateFromStores = require("initialize").useStateFromStores(
        items,
        () => stateFromStores.getState() === previousWhen.ACTIVE,
      );
      let obj2 = noop;
      const obj3 = require("initialize");
      const tmp = _require;
      const tmp2 = flag;
      const items1 = [arg0];
      const isInAppBrowserOpen = require("BrowserManager").useIsInAppBrowserOpen();
      const callback = noop.useCallback((arg0) => {
        closure_3.current = true;
        return closure_0(arg0);
      }, items1);
      if (stateFromStores) {
        stateFromStores = !isInAppBrowserOpen;
      }
      const obj4 = require("BrowserManager");
      previousWhen = tmp(tmp2[7]).usePreviousWhen({ value, shouldUpdate: stateFromStores });
      const items2 = [value, previousWhen, flag, stateFromStores];
      const effect = obj2.useEffect(() => {
        if (ref.current) {
          if (false === previousWhen) {
            if (true === closure_1) {
              if (stateFromStores) {
                tmp.current = false;
                if (flag) {
                  const obj2 = { content: null, key: "account-linked-toast" };
                  const intl = util.intl;
                  obj2.content = intl.string(_modDef3265.uG6teD);
                  ToastActionCreatorsDefault.open(obj2);
                }
              }
            }
          }
        }
      }, items2);
      return callback;
    };
