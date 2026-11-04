// === Module 10427: FrecencyUserSettingsHooks ===

// Module 10427 (FrecencyUserSettingsHooks)
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4971 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsHooks.tsx");

export function useFrecencySettings() {
  if (flag === undefined) {
    flag = true;
  }
  items = [flag];
  const effect = noop.useEffect(() => {
    if (flag) {
      const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
      const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
    }
  }, items);
  const items1 = [UserSettingsProtoStore];
  return flag(504).useStateFromStores(items1, () => UserSettingsProtoStore.frecencyWithoutFetchingLatest);
}