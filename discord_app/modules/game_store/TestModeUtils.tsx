// discord_app/modules/game_store/TestModeUtils.tsx
import DeveloperActivityShelfStore from "../activities/DeveloperActivityShelfStore.tsx";
import TestModeStore from "../../stores/game_store/TestModeStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [TestModeStore, DeveloperActivityShelfStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const result =
              TestModeStore.inTestModeForApplication(closure_0) ||
              DeveloperActivityShelfStore.inDevModeForApplication(closure_0);
            tmp2 = result;
          }
          return tmp2;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [TestModeStore, DeveloperActivityShelfStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          let tmp2 = null != closure_0;
          if (tmp2) {
            const result =
              TestModeStore.inTestModeForApplication(closure_0) ||
              DeveloperActivityShelfStore.inDevModeForApplication(closure_0);
            tmp2 = result;
          }
          return tmp2;
        },
        items1,
      );
    };
let result = size.fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  const result =
    TestModeStore.inTestModeForApplication(applicationId) ||
    DeveloperActivityShelfStore.inDevModeForApplication(applicationId);
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  const isEnabled = null != TestModeStore.getTestModeApplicationId() || DeveloperActivityShelfStore.getIsEnabled();
  return isEnabled;
};
export const useIsTestModeForApplication = tmp2;
