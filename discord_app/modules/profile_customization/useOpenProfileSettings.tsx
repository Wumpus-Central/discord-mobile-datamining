// discord_app/modules/profile_customization/useOpenProfileSettings.tsx
import react from "../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import openUserSettings from "../user_settings/core/native/openUserSettings.tsx";
import GuildIdentityActionCreators from "../guild_identity/GuildIdentityActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../user_profile/UserProfileSettingsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useCallback = react.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guild;
      let scrollPosition;
      let tmp4;
      let obj = guild(scrollPosition[7]);
      const cResult = obj.c(7);
      const tmp = guild;
      const tmp2 = scrollPosition;
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      guild = tmp4.guild;
      scrollPosition = tmp4.scrollPosition;
      const analyticsLocations = tmp4.analyticsLocations;
      const tmpResult = tmp(tmp2[8]);
      const isEligibleForUserProfileWYSIWYGEditing =
        tmpResult.useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings");
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === guild) {
          if (cResult[4] === isEligibleForUserProfileWYSIWYGEditing) {
            let tmp6;
            if (cResult[5] === scrollPosition) {
              tmp6 = cResult[6];
            }
            return tmp6;
          }
        }
      }
      const fn = function c() {
        let USER_PROFILE;
        if (null != guild) {
          const obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(guild.id);
        }
        const setState = ProfileCustomizationNavigationStore.setState;
        if (null != guild) {
          USER_PROFILE = constants.GUILD;
        } else {
          USER_PROFILE = constants.USER_PROFILE;
        }
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        setState(obj2);
        const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
        openUserSettings.openUserSettings(obj3);
      };
      cResult[2] = analyticsLocations;
      cResult[3] = guild;
      cResult[4] = isEligibleForUserProfileWYSIWYGEditing;
      cResult[5] = scrollPosition;
      cResult[6] = fn;
      tmp6 = fn;
    }
  : () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      const guild = obj.guild;
      const scrollPosition = obj.scrollPosition;
      const analyticsLocations = obj.analyticsLocations;
      let obj2 = guild(scrollPosition[8]);
      const items = [
        guild,
        scrollPosition,
        analyticsLocations,
        obj2.useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings"),
      ];
      return useCallback(() => {
        let USER_PROFILE;
        if (null != guild) {
          const obj = GuildIdentityActionCreators;
          const guildIdentitySettings = obj.initGuildIdentitySettings(guild.id);
        }
        const setState = ProfileCustomizationNavigationStore.setState;
        if (null != guild) {
          USER_PROFILE = constants.GUILD;
        } else {
          USER_PROFILE = constants.USER_PROFILE;
        }
        const obj2 = { subsection: USER_PROFILE, scrollPosition };
        setState(obj2);
        const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
        openUserSettings.openUserSettings(obj3);
      }, items);
    };
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default tmp4;
