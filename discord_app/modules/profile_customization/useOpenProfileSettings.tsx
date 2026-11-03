// === Module 11655: useOpenProfileSettings ===

// Module 11655 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import openUserSettings from "openUserSettings" /* 7687 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11657 */;
import UserStore from "UserStore" /* 1385 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11596 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8855 */;
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
  guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  items = [guild, scrollPosition, obj.analyticsLocations, guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return useCallback(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(guild.id);
    }
    if (null != guild) {
      let USER_PROFILE = constants.GUILD;
    } else {
      USER_PROFILE = constants.USER_PROFILE;
    }
    ProfileCustomizationNavigationStore.setState({ subsection: USER_PROFILE, scrollPosition });
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PROFILE_CUSTOMIZATION });
    const obj2 = { subsection: USER_PROFILE, scrollPosition };
    const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
  }, items);
};