// discord_app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx");

export const useSafetyAlertsSettingOrDefault = function useSafetyAlertsSettingOrDefault() {
  currentUser = currentUser.getCurrentUser();
  const items = [handleConnectionClosedOrResumed];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
    const privacy = settings.settings.privacy;
    let flag;
    if (privacy != null) {
      if (privacy.inappropriateConversationWarnings != null) {
        flag = iter.value;
      }
    }
    if (flag == null) {
      flag = true;
    }
    return flag;
  });
  const obj2 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  let userIsTeen = require("../../hooks/useUserIsTeen.tsx") /* useUserIsTeen */.useUserIsTeen();
  const obj3 = require("../../hooks/useUserIsTeen.tsx") /* useUserIsTeen */;
  let tmp3 = !userIsTeen;
  if (userIsTeen) {
    tmp3 = !obj4.useIsEligibleForInappropriateConversationDefaultOn({ location: "useSafetyAlertsSettingOrDefault" });
  }
  let tmp4 = !tmp3;
  if (tmp3) {
    if (!userIsTeen) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      userIsTeen = true === isStaffResult;
    }
    if (userIsTeen) {
      userIsTeen = stateFromStores;
    }
    tmp4 = userIsTeen;
  }
  return tmp4;
};