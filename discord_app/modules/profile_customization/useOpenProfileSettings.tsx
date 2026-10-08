// discord_app/modules/profile_customization/useOpenProfileSettings.tsx
import _mod19 from "../../../_runtime/metro/00019__.js";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import openUserSettings from "../user_settings/core/native/openUserSettings.tsx";
import GuildIdentityActionCreators from "../guild_identity/GuildIdentityActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../user_profile/UserProfileSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

_mod19.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useOpenProfileSettings(arg0) {
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
      const isEligibleForUserProfileWYSIWYGEditing = guild(scrollPosition[8]).useIsEligibleForUserProfileWYSIWYGEditing(
        "useOpenProfileSettings",
      );
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
    }
  : function useOpenProfileSettings() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      guild = obj.guild;
      const scrollPosition = obj.scrollPosition;
      const items = [
        guild,
        scrollPosition,
        obj.analyticsLocations,
        guild(scrollPosition[8]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings"),
      ];
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
