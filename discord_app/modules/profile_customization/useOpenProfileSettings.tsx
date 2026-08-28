// === Module 8971: useOpenProfileSettings ===

// Module 8971 (useOpenProfileSettings)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import mergeGuildAvatarDefault from "mergeGuildAvatar" /* 1923 */;
import closure_3 from "zustandStore" /* 8972 */;
import handleFormOpen from "handleFormOpen" /* 8016 */;

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
  const items = [guild, scrollPosition, obj.analyticsLocations, guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
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
};