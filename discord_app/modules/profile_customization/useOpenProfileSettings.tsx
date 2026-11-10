// === Module 11672: useOpenProfileSettings ===

// Module 11672 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import openUserSettings from "openUserSettings" /* 7638 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11674 */;
import UserStore from "UserStore" /* 1385 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11610 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8808 */;
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
  const initialTab = obj.initialTab;
  items = [guild, scrollPosition, initialTab, obj.analyticsLocations, guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return initialTab(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(guild.id);
    }
    if (null != guild) {
      let USER_PROFILE = constants.GUILD;
    } else {
      USER_PROFILE = constants.USER_PROFILE;
    }
    ProfileCustomizationNavigationStore.setState({ subsection: USER_PROFILE, scrollPosition });
    const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION, params: { initialTab } };
    openUserSettings.openUserSettings(obj3);
    const obj2 = { subsection: USER_PROFILE, scrollPosition };
    const obj4 = { initialTab };
  }, items);
};