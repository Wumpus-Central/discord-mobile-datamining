// === Module 9416: useOpenProfileSettings ===

// Module 9416 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9419 */;
import UserStore from "UserStore" /* 1377 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9417 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = guild(scrollPosition[7]).c(7);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  guild = tmp4.guild;
  scrollPosition = tmp4.scrollPosition;
  const analyticsLocations = tmp4.analyticsLocations;
  let obj = guild(scrollPosition[7]);
  const isEligibleForUserProfileWYSIWYGEditing = guild(scrollPosition[8]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings");
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === guild) {
      if (cResult[4] === isEligibleForUserProfileWYSIWYGEditing) {
        if (cResult[5] === scrollPosition) {
          let tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
  }
  const fn = function c() {
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
  };
  cResult[2] = analyticsLocations;
  cResult[3] = guild;
  cResult[4] = isEligibleForUserProfileWYSIWYGEditing;
  cResult[5] = scrollPosition;
  cResult[6] = fn;
  tmp6 = fn;
}) : (() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  const items = [guild, scrollPosition, obj.analyticsLocations, guild(scrollPosition[8]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
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
});