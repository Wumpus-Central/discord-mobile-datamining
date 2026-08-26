// === Module 10157: useFrecencySettings ===

// Module 10157 (useFrecencySettings)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1340 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings(flag2) {
  let flag = flag2;
  if (flag2 === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = React.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = flag(closure_1_1[2]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [closure_3];
  return flag(589).useStateFromStores(items1, () => obj.frecencyWithoutFetchingLatest);
};