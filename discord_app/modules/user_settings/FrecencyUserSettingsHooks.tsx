// === Module 10371: FrecencyUserSettingsHooks ===

// Module 10371 (FrecencyUserSettingsHooks)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export const useFrecencySettings = function useFrecencySettings() {
  if (flag === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = noop.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [UserSettingsProtoStore];
  return flag(504).useStateFromStores(items1, () => UserSettingsProtoStore.frecencyWithoutFetchingLatest);
};