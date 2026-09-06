// discord_app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx",
);

export const useSafetyAlertsSettingOrDefault = function useSafetyAlertsSettingOrDefault() {
  const currentUser = UserStore.getCurrentUser();
  const items = [UserSettingsProtoStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
  let userIsTeen = useUserIsTeen.useUserIsTeen();
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
