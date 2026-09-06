// discord_app/modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx
import UserSettings from "../UserSettings.tsx";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import useNSFWAllowed from "useNSFWAllowed.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx",
);

export const resolveNsfwTogglesWithDefaults = function resolveNsfwTogglesWithDefaults(arg0, arg1, arg2, arg3) {
  let tmp = arg1;
  if (arg1) {
    tmp = !arg3;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    let tmp5 = false !== arg2;
    if (tmp5) {
      let flag2 = arg0;
      if (arg0 == null) {
        flag2 = false;
      }
      tmp5 = flag2;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useViewNsfwCommandsOrDefault = function useViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const nSFWAllowed = useNSFWAllowed.useNSFWAllowed();
  const tmp3 =
    RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  let tmp4 = !tmp3;
  if (!tmp3) {
    let tmp5 = false !== nSFWAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export const useViewNsfwGuildsOrDefault = function useViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const nSFWAllowed = useNSFWAllowed.useNSFWAllowed();
  const tmp3 =
    RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  let tmp4 = !tmp3;
  if (!tmp3) {
    let tmp5 = false !== nSFWAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export const getViewNsfwCommandsOrDefault = function getViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const currentUser = UserStore.getCurrentUser();
  const isAgeVerifiedResult = AgeVerificationUtils.isAgeVerified();
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(
    AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE,
  );
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (!isFeatureAgeGatedResult) {
    let tmp5 = false !== nsfwAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
export const getViewNsfwGuildsOrDefault = function getViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const currentUser = UserStore.getCurrentUser();
  const isAgeVerifiedResult = AgeVerificationUtils.isAgeVerified();
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(
    AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE,
  );
  if (currentUser != null) {
    const nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (!isFeatureAgeGatedResult) {
    let tmp5 = false !== nsfwAllowed;
    if (tmp5) {
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    tmp4 = tmp5;
  }
  return tmp4;
};
