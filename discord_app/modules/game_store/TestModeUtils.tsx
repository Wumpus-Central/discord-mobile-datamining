// === Module 8854: TestModeUtils ===

// Module 8854 (TestModeUtils)
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8855 */;
import TestModeStore from "TestModeStore" /* 8857 */;

const require = fn;
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
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  _require = id;
  const items = [TestModeStore, DeveloperActivityShelfStore];
  const items1 = [id];
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
};