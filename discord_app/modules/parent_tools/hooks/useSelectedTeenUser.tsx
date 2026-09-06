// discord_app/modules/parent_tools/hooks/useSelectedTeenUser.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterControlledSettingsStore from "../FamilyCenterControlledSettingsStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = function useSelectedTeenUser() {
  _require = useIsInAdultAgeGroupDefault();
  const items = [FamilyCenterStore, UserStore];
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
};
export const useTeenUserForId = function useTeenUserForId(gifterUserId) {
  _require = gifterUserId;
  const items = [UserStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const user = UserStore.getUser(closure_0);
    return null != user ? user : undefined;
  });
};
export const useShouldLoadSettingsForSelectedTeenUser = function useShouldLoadSettingsForSelectedTeenUser() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  const items = [FamilyCenterControlledSettingsStore];
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
};
