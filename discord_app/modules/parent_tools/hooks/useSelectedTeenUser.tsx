// === Module 13943: useSelectedTeenUser ===

// Module 13943 (useSelectedTeenUser)
import mergeGuildAvatar from "mergeGuildAvatar";
import getSettings from "getSettings";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeenUser.tsx");

export const useSelectedTeenUser = function useSelectedTeenUser() {
  const _require = importDefault(6259)();
  const items = [freshTeenActivityWithMap, mergeGuildAvatar];
  return _require(647).useStateFromStores(items, () => {
    if (true !== closure_0) {
      return outer1_3.getCurrentUser();
    } else {
      const selectedTeenId = outer1_5.getSelectedTeenId();
      let user;
      if (null !== selectedTeenId) {
        user = outer1_3.getUser(selectedTeenId);
      }
      return user;
    }
  });
};
export const useTeenUserForId = function useTeenUserForId(gifterUserId) {
  const _require = gifterUserId;
  const items = [mergeGuildAvatar];
  return _require(647).useStateFromStores(items, () => {
    const user = outer1_3.getUser(closure_0);
    return null != user ? user : undefined;
  });
};
export const useShouldLoadSettingsForSelectedTeenUser = function useShouldLoadSettingsForSelectedTeenUser() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  const items = [getSettings];
  const stateFromStoresObject = selectedTeenId(647).useStateFromStoresObject(items, () => {
    let hasSettingsForUserResult = null != selectedTeenId;
    if (hasSettingsForUserResult) {
      hasSettingsForUserResult = outer1_4.hasSettingsForUser(tmp);
    }
    return { hasLoadedSettings: hasSettingsForUserResult, isLoading: outer1_4.isLoading };
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