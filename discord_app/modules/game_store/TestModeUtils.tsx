// === Module 9030: TestModeUtils ===

// Module 9030 (TestModeUtils)
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9031 */;
import TestModeStore from "TestModeStore" /* 9032 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  let result = TestModeStore.inTestModeForApplication(applicationId);
  if (!result) {
    result = DeveloperActivityShelfStore.inDevModeForApplication(applicationId);
  }
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  let isEnabled = null != TestModeStore.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = DeveloperActivityShelfStore.getIsEnabled();
  }
  return isEnabled;
};
export const useIsTestModeForApplication = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsTestModeForApplication(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [TestModeStore, DeveloperActivityShelfStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        let result = TestModeStore.inTestModeForApplication(closure_0);
        if (!result) {
          result = DeveloperActivityShelfStore.inDevModeForApplication(closure_0);
        }
        tmp2 = result;
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useIsTestModeForApplication(arg0) {
  _require = arg0;
  const items = [TestModeStore, DeveloperActivityShelfStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let result = TestModeStore.inTestModeForApplication(closure_0);
      if (!result) {
        result = DeveloperActivityShelfStore.inDevModeForApplication(closure_0);
      }
      tmp2 = result;
    }
    return tmp2;
  }, items1);
});