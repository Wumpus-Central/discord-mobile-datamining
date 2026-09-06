// discord_app/modules/profile_customization/useOpenProfileSettings.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import openUserSettings from "../user_settings/core/native/openUserSettings.tsx";
import GuildIdentityActionCreators from "../guild_identity/GuildIdentityActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../user_profile/UserProfileSettingsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  const items = [
    guild,
    scrollPosition,
    obj.analyticsLocations,
    guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings"),
  ];
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
}
