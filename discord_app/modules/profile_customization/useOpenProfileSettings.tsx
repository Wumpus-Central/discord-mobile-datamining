// === Module 9814: useOpenProfileSettings ===

// Module 9814 (useOpenProfileSettings)
import "mergeGuildAvatar";
import zustandStore from "zustandStore";
import { UserSettingsSections } from "ME";
import { ProfileCustomizationSubsection as closure_5 } from "MAX_FAVORITES";
import handleFormOpen from "handleFormOpen";

require("noop").useCallback;
const result = require("zustandStore").fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

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
      let USER_PROFILE = outer1_5.GUILD;
    } else {
      USER_PROFILE = outer1_5.USER_PROFILE;
    }
    obj = { subsection: USER_PROFILE, scrollPosition };
    outer1_3.setState(obj);
    obj = { screen: outer1_4.PROFILE_CUSTOMIZATION };
    guild(scrollPosition[8]).openUserSettings(obj);
  }, items);
};