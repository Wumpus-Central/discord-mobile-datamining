// discord_app/modules/game_store/TestModeUtils.tsx
import initialize from "initialize";
import reset from "reset";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/game_store/TestModeUtils.tsx");

export const isTestModeForApplication = function isTestModeForApplication(applicationId) {
  let result = reset.inTestModeForApplication(applicationId);
  if (!result) {
    result = initialize.inDevModeForApplication(applicationId);
  }
  return result;
};
export const isAnyApplicationInTestMode = function isAnyApplicationInTestMode() {
  let isEnabled = null != reset.getTestModeApplicationId();
  if (!isEnabled) {
    isEnabled = initialize.getIsEnabled();
  }
  return isEnabled;
};
export const useIsTestModeForApplication = function useIsTestModeForApplication(id) {
  const _require = id;
  const items = [reset, initialize];
  const items1 = [id];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let result = outer1_3.inTestModeForApplication(tmp);
      if (!result) {
        result = outer1_2.inDevModeForApplication(tmp);
      }
      tmp2 = result;
    }
    return tmp2;
  }, items1);
};