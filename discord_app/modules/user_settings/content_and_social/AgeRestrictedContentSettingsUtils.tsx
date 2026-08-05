// discord_app/modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("useAgeVerificationRunner").fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

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
  const ViewNsfwCommands = require("../UserSettings.tsx") /* explicitContentFromProto */.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const isAgeVerified = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
  const obj = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
  const nSFWAllowed = require("useNSFWAllowed.tsx") /* useNSFWAllowed */.useNSFWAllowed();
  const obj2 = require("useNSFWAllowed.tsx") /* useNSFWAllowed */;
  const tmp3 = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useIsFeatureAgeGated(require("../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx") /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
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
  const ViewNsfwGuilds = require("../UserSettings.tsx") /* explicitContentFromProto */.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const isAgeVerified = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.useIsAgeVerified();
  const obj = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
  const nSFWAllowed = require("useNSFWAllowed.tsx") /* useNSFWAllowed */.useNSFWAllowed();
  const obj2 = require("useNSFWAllowed.tsx") /* useNSFWAllowed */;
  const tmp3 = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.useIsFeatureAgeGated(require("../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx") /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
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
  const ViewNsfwCommands = require("../UserSettings.tsx") /* explicitContentFromProto */.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const obj = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.isAgeVerified();
  let isFeatureAgeGatedResult = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.isFeatureAgeGated(require("../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx") /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE);
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
  const ViewNsfwGuilds = require("../UserSettings.tsx") /* explicitContentFromProto */.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const obj = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */;
  const currentUser = authStore.getCurrentUser();
  const isAgeVerifiedResult = require("../../age_assurance/AgeVerificationUtils.tsx") /* useAgeVerificationRunner */.isAgeVerified();
  let isFeatureAgeGatedResult = require("../../regional_feature_config/RegionalFeatureConfigUtils.tsx") /* isFeatureAgeGated */.isFeatureAgeGated(require("../../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx") /* AgeGatedFeature */.AgeGatedFeature.COMMANDS_TOGGLE);
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