// === Module 9536: useOpenProfileSettings ===

// Module 9536 (useOpenProfileSettings)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import mergeGuildAvatarDefault from "mergeGuildAvatar" /* 1922 */;
import zustandStore from "zustandStore" /* 9537 */;
import handleFormOpen from "handleFormOpen" /* 8370 */;

noop.useCallback;
mergeGuildAvatarDefault;
const UserSettingsSections = ME.UserSettingsSections;
let closure_5 = MAX_FAVORITES.ProfileCustomizationSubsection;
const result = obj132.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

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
      const guildIdentitySettings = obj.initGuildIdentitySettings(guild.id);
    }
    if (null != guild) {
      let USER_PROFILE = closure_1_5.GUILD;
    } else {
      USER_PROFILE = closure_1_5.USER_PROFILE;
    }
    obj = { subsection: USER_PROFILE, scrollPosition };
    closure_1_3.setState(obj);
    obj = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
};