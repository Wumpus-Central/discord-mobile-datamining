// === Module 7910: isTestModeForApplication ===

// Module 7910 (isTestModeForApplication)
import closure_2 from "initialize" /* 7911 */;
import closure_3 from "reset" /* 7913 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  let result = closure_3.inTestModeForApplication(applicationId);
  if (!result) {
    result = closure_2.inDevModeForApplication(applicationId);
  }
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  let isEnabled = null != closure_3.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = closure_2.getIsEnabled();
  }
  return isEnabled;
};
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  const _require = id;
  const items = [closure_3, closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let result = closure_1_3.inTestModeForApplication(tmp);
      if (!result) {
        result = closure_1_2.inDevModeForApplication(tmp);
      }
      tmp2 = result;
    }
    return tmp2;
  }, items1);
};