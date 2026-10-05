// discord_app/modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import useNavigatorBackPressHandler from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import ContactSyncConstants from "../ContactSyncConstants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let MinimizeApp, _require, dependencyMap;

const NativeModules = react_native.NativeModules;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_1;
      let state;
      _require = arg0;
      dependencyMap = arg1;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === arg1) {
        let tmp4;
        if (cResult[1] === arg0) {
          tmp4 = cResult[2];
        }
        const tmpResult = tmp(6016);
        tmpResult.useNavigatorBackPressHandler(tmp4);
      }
      const fn = function o() {
        if (null != closure_1) {
          tmp();
        } else {
          const items = [, ,];
          ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = ContactSyncScenes);
          const routes = state.getState().routes;
          if (routes.length <= 2) {
            state.pop();
          } else if (items.includes(routes[routes.length - 2].name)) {
            state.pop(routes.length - 1);
          }
        }
        return true;
      };
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (arg0, arg1) => {
      let closure_1;
      let state;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("useNavigatorBackPressHandler");
      obj.useNavigatorBackPressHandler(() => {
        if (null != closure_1) {
          tmp();
        } else {
          const items = [, ,];
          ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = ContactSyncScenes);
          const routes = state.getState().routes;
          if (routes.length <= 2) {
            state.pop();
          } else if (items.includes(routes[routes.length - 2].name)) {
            state.pop(routes.length - 1);
          }
        }
        return true;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmpResult = useNavigatorBackPressHandler;
      tmpResult.useNavigatorBackPressHandler(first);
    }
  : () => {
      const obj = useNavigatorBackPressHandler;
      obj.useNavigatorBackPressHandler(() => {
        MinimizeApp = MinimizeApp.MinimizeApp;
        MinimizeApp.minimizeApp();
        return true;
      });
    };
const result = size.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default tmp2;
export const useBackHandlerMinimizeApp = tmp3;
