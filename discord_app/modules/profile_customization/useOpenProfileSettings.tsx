// discord_app/modules/profile_customization/useOpenProfileSettings.tsx
import set from "../../../_runtime/00002_set.js";
import noop from "../../../_runtime/00019_noop.js";
import ME from "../../Constants.tsx";
import MAX_FAVORITES from "../user_settings/UserSettingsConstants.tsx";
import mergeGuildAvatarDefault from "../../stores/UserStore.tsx";
import closure_3 from "ProfileCustomizationNavigationStore.tsx";
import handleFormOpen from "../user_profile/UserProfileSettingsStore.tsx";

noop.useCallback;
mergeGuildAvatarDefault;
const UserSettingsSections = ME.UserSettingsSections;
let closure_5 = MAX_FAVORITES.ProfileCustomizationSubsection;
const result = set.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default function useOpenProfileSettings() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  const items = [
    guild,
    scrollPosition,
    obj.analyticsLocations,
    guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings"),
  ];
  return useCallback(() => {
    if (null != guild) {
      let obj = guild(scrollPosition[7]);
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    if (null != guild) {
      let USER_PROFILE = closure_1_5.GUILD;
    } else {
      USER_PROFILE = closure_1_5.USER_PROFILE;
    }
    obj = { subsection: USER_PROFILE, scrollPosition };
    closure_1_3.setState(obj);
    obj = { screen: closure_1_4.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
}
