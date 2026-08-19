// === Module 10200: useFrecencySettings ===

// Module 10200 (useFrecencySettings)
import noop from "noop" /* 19 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings(flag2) {
  let flag = flag2;
  if (flag2 === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = React.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = flag(dependencyMap[2]).FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [closure_3];
  return flag(589).useStateFromStores(items1, () => obj.frecencyWithoutFetchingLatest);
};