// === Module 9207: useOpenProfileSettings ===

// Module 9207 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9210 */;
import UserStore from "UserStore" /* 1371 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9208 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8160 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default function useOpenProfileSettings() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  const items = [guild, scrollPosition, obj.analyticsLocations, guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return useCallback(() => {
    if (null != guild) {
      let obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(guild.id);
    }
    if (null != guild) {
      let USER_PROFILE = constants.GUILD;
    } else {
      USER_PROFILE = constants.USER_PROFILE;
    }
    obj = { subsection: USER_PROFILE, scrollPosition };
    ProfileCustomizationNavigationStore.setState(obj);
    obj = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
    openUserSettings.openUserSettings(obj);
  }, items);
};