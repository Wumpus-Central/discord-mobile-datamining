// === Module 7383: AgeRestrictedContentSettingsUtils ===

// Module 7383 (AgeRestrictedContentSettingsUtils)
import UserSettings from "UserSettings" /* 4834 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6720 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6725 */;
import useNSFWAllowed from "useNSFWAllowed" /* 7384 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

export function resolveNsfwTogglesWithDefaults(arg0, arg1, arg2, arg3) {
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
}
export function useViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const nSFWAllowed = useNSFWAllowed.useNSFWAllowed();
  const tmp3 = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
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
}
export function useViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  const nSFWAllowed = useNSFWAllowed.useNSFWAllowed();
  const tmp3 = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
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
}
export function getViewNsfwCommandsOrDefault() {
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const currentUser = UserStore.getCurrentUser();
  const isAgeVerifiedResult = AgeVerificationUtils.isAgeVerified();
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
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
}
export function getViewNsfwGuildsOrDefault() {
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const currentUser = UserStore.getCurrentUser();
  const isAgeVerifiedResult = AgeVerificationUtils.isAgeVerified();
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
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
}