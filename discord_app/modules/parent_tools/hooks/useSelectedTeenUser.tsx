// === Module 17068: useSelectedTeenUser ===

// Module 17068 (useSelectedTeenUser)
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8516 */;
import UserStore from "UserStore" /* 1385 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7863 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7860 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export function useSelectedTeenUser() {
  _require = useIsInAdultAgeGroupDefault();
  items = [FamilyCenterStore, UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    if (true !== closure_0) {
      return UserStore.getCurrentUser();
    } else {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = UserStore.getUser(selectedTeenId);
      }
      return user;
    }
  });
}
export function useTeenUserForId(gifterUserId) {
  _require = gifterUserId;
  items = [UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const user = UserStore.getUser(closure_0);
    return null != user ? user : undefined;
  });
}
export function useShouldLoadSettingsForSelectedTeenUser() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  items = [FamilyCenterControlledSettingsStore];
  const stateFromStoresObject = selectedTeenId(563).useStateFromStoresObject(items, () => {
    let hasSettingsForUserResult = null != selectedTeenId;
    if (hasSettingsForUserResult) {
      hasSettingsForUserResult = FamilyCenterControlledSettingsStore.hasSettingsForUser(tmp);
    }
    return { hasLoadedSettings: hasSettingsForUserResult, isLoading: FamilyCenterControlledSettingsStore.isLoading };
  });
  const hasLoadedSettings = stateFromStoresObject.hasLoadedSettings;
  let tmp4 = null !== selectedTeenId;
  if (tmp4) {
    let tmp5 = !hasLoadedSettings;
    if (!hasLoadedSettings) {
      tmp5 = !tmp3;
    }
    tmp4 = tmp5;
  }
  return tmp4;
}