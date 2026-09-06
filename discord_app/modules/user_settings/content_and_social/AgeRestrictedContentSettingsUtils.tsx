// === Module 9296: resolveNsfwTogglesWithDefaults ===

// Module 9296 (resolveNsfwTogglesWithDefaults)
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4773 */;
import isFeatureAgeGated from "isFeatureAgeGated" /* 5423 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5424 */;
import useNSFWAllowed from "useNSFWAllowed" /* 9297 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

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
  const ViewNsfwCommands = explicitContentFromProto.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
  const obj = useAgeVerificationRunner;
  const nSFWAllowed = useNSFWAllowed.useNSFWAllowed();
  const obj2 = useNSFWAllowed;
  const tmp3 = isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
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
  const ViewNsfwGuilds = explicitContentFromProto.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const isAgeVerified = useAgeVerificationRunner.useIsAgeVerified();
  const obj = useAgeVerificationRunner;
  const nSFWAllowed = useNSFWAllowed.useNSFWAllowed();
  const obj2 = useNSFWAllowed;
  const tmp3 = isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
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
  const ViewNsfwCommands = explicitContentFromProto.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const obj = useAgeVerificationRunner;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = useAgeVerificationRunner.isAgeVerified();
  let isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
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
  const ViewNsfwGuilds = explicitContentFromProto.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const obj = useAgeVerificationRunner;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = useAgeVerificationRunner.isAgeVerified();
  let isFeatureAgeGatedResult = isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
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