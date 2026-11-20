// === Module 9304: useOpenProfileSettings ===

// Module 9304 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1071 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import openUserSettings from "openUserSettings" /* 8074 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9307 */;
import UserStore from "UserStore" /* 1386 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9305 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8012 */;
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
    const obj2 = { subsection: USER_PROFILE, scrollPosition, editingTab: null };
    let str = initialTab;
    if (initialTab == null) {
      str = "main";
    }
    obj2.editingTab = str;
    ProfileCustomizationNavigationStore.setState(obj2);
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PROFILE_CUSTOMIZATION, params: { initialTab } });
    const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION, params: { initialTab } };
  }, items);
};