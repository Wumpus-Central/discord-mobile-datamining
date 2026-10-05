// discord_app/modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import _modDef3237 from "../AccountLinking.messages.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const AppStates = Constants.AppStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, value, arg2) => {
      let closure_0;
      let closure_2;
      let obj3;
      let ref;
      let state;
      let tmp4;
      let tmp6;
      let tmp7;
      _require = arg0;
      let closure_1 = value;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(15);
      if (cResult[0] !== arg2) {
        let obj2 = arg2;
        if (undefined === arg2) {
          obj2 = {};
        }
        cResult[0] = arg2;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const showToastOnSuccess = tmp4.showToastOnSuccess;
      dependencyMap = tmp5;
      react = react.useRef(false);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [state];
        const fn = function v() {
          return state.getState() === previousWhen.ACTIVE;
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp7 = fn;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      const tmpResult3 = tmp(4851);
      const isInAppBrowserOpen = tmpResult3.useIsInAppBrowserOpen();
      if (cResult[4] !== arg0) {
        class A {
          constructor(arg0) {
            ref.current = true;
            return closure_0(arg0);
          }
        }
        cResult[4] = arg0;
        cResult[5] = A;
      } else {
        class A {
          constructor(arg0) {
            ref.current = true;
            return closure_0(arg0);
          }
        }
      }
      state = tmp12;
      if (cResult[6] === (stateFromStores && !isInAppBrowserOpen)) {
        class A {
          constructor(arg0) {
            ref.current = true;
            return closure_0(arg0);
          }
        }
        const tmpResult4 = tmp(7946);
        const previousWhen = tmpResult4.usePreviousWhen(obj3);
        if (cResult[9] === (stateFromStores && !isInAppBrowserOpen)) {
          class A {
            constructor(arg0) {
              ref.current = true;
              return closure_0(arg0);
            }
          }
        }
        const fn2 = function w() {
          let intl;
          if (ref.current) {
            if (false === previousWhen) {
              if (true === closure_1) {
                if (state) {
                  tmp.current = false;
                  if (closure_2) {
                    const obj = { content: intl.string(_modDef3237.uG6teD), key: "account-linked-toast" };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl2.intl;
                    open(obj);
                  }
                }
              }
            }
          }
        };
        const items1 = [
          value,
          previousWhen,
          undefined === showToastOnSuccess || showToastOnSuccess,
          stateFromStores && !isInAppBrowserOpen,
        ];
        cResult[9] = stateFromStores && !isInAppBrowserOpen;
        cResult[10] = value;
        cResult[11] = undefined === showToastOnSuccess || showToastOnSuccess;
        cResult[12] = previousWhen;
        cResult[13] = fn2;
        cResult[14] = items1;
      }
      obj3 = { value, shouldUpdate: stateFromStores && !isInAppBrowserOpen };
      cResult[6] = stateFromStores && !isInAppBrowserOpen;
      cResult[7] = value;
      cResult[8] = obj3;
    }
  : (arg0, value) => {
      let closure_0;
      let ref;
      _require = arg0;
      let closure_1 = value;
      let obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      let flag = obj.showToastOnSuccess;
      if (flag === undefined) {
        flag = true;
      }
      react = undefined;
      let stateFromStores;
      let previousWhen;
      const obj2 = react;
      react = react.useRef(false);
      const tmp = _require;
      const items = [stateFromStores];
      const obj3 = require("get initialized");
      stateFromStores = obj3.useStateFromStores(items, () => stateFromStores.getState() === previousWhen.ACTIVE);
      const items1 = [arg0];
      const obj4 = require("BrowserManager");
      const isInAppBrowserOpen = obj4.useIsInAppBrowserOpen();
      const callback = react.useCallback((arg0) => {
        ref.current = true;
        return closure_0(arg0);
      }, items1);
      const tmp2 = flag;
      if (stateFromStores) {
        stateFromStores = !isInAppBrowserOpen;
      }
      const obj5 = { value, shouldUpdate: stateFromStores };
      const tmpResult = tmp(tmp2[7]);
      previousWhen = tmpResult.usePreviousWhen(obj5);
      const items2 = [value, previousWhen, flag, stateFromStores];
      const effect = obj2.useEffect(() => {
        let intl;
        if (ref.current) {
          if (false === previousWhen) {
            if (true === closure_1) {
              if (stateFromStores) {
                tmp.current = false;
                if (false) {
                  const obj = { content: intl.string(_modDef3237.uG6teD), key: "account-linked-toast" };
                  const open = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  intl = intl2.intl;
                  open(obj);
                }
              }
            }
          }
        }
      }, items2);
      return callback;
    };
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx",
);

export const useDefaultAuthorizationNotifiers = tmp2;
