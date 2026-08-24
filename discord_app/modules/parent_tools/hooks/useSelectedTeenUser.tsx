// discord_app/modules/parent_tools/hooks/useSelectedTeenUser.tsx
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import closure_4 from "../FamilyCenterControlledSettingsStore.tsx";
import closure_5 from "../FamilyCenterStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = function useSelectedTeenUser() {
  const _require = useIsInAdultAgeGroupDefault();
  const items = [closure_5, closure_3];
  return require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    if (true !== closure_0) {
      return closure_1_3.getCurrentUser();
    } else {
      const selectedTeenId = closure_1_5.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = closure_1_3.getUser(selectedTeenId);
      }
      return user;
    }
  });
};
export const useTeenUserForId = function useTeenUserForId(gifterUserId) {
  const _require = gifterUserId;
  const items = [closure_3];
  return require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => {
    const user = closure_1_3.getUser(closure_0);
    return null != user ? user : undefined;
  });
};
export const useShouldLoadSettingsForSelectedTeenUser = function useShouldLoadSettingsForSelectedTeenUser() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  const items = [closure_4];
  const stateFromStoresObject = selectedTeenId(647).useStateFromStoresObject(items, () => {
    let hasSettingsForUserResult = null != selectedTeenId;
    if (hasSettingsForUserResult) {
      hasSettingsForUserResult = closure_1_4.hasSettingsForUser(tmp);
    }
    return { hasLoadedSettings: hasSettingsForUserResult, isLoading: closure_1_4.isLoading };
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