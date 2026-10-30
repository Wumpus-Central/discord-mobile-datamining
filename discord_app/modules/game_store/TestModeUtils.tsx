// === Module 9535: TestModeUtils ===

// Module 9535 (TestModeUtils)
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5669 */;
import TestModeStore from "TestModeStore" /* 5668 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export function isTestModeForApplication(applicationId) {
  let result = TestModeStore.inTestModeForApplication(applicationId);
  if (!result) {
    result = DeveloperActivityShelfStore.inDevModeForApplication(applicationId);
  }
  return result;
}
export function isAnyApplicationInTestMode() {
  let isEnabled = null != TestModeStore.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = DeveloperActivityShelfStore.getIsEnabled();
  }
  return isEnabled;
}
export function useIsTestModeForApplication(id) {
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
}