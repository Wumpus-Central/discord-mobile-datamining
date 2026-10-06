// === Module 6727: AgeRestrictedContentSettingsUtils ===

// Module 6727 (AgeRestrictedContentSettingsUtils)
import react from "react" /* 576 */;
import UserSettings from "UserSettings" /* 2028 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5108 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5587 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5588 */;
import useNSFWAllowed from "useNSFWAllowed" /* 6728 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(5);
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  const setting = ViewNsfwCommands.useSetting();
  const obj2 = AgeVerificationUtils;
  const isAgeVerified = obj2.useIsAgeVerified();
  const obj3 = useNSFWAllowed;
  const nSFWAllowed = obj3.useNSFWAllowed();
  const obj4 = RegionalFeatureConfigUtils;
  const isFeatureAgeGated = obj4.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (cResult[0] === isFeatureAgeGated) {
    if (cResult[1] === setting) {
      if (cResult[2] === isAgeVerified) {
        let tmp6;
        if (cResult[3] === nSFWAllowed) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
    }
  }
  let tmp8 = !(isFeatureAgeGated && !isAgeVerified);
  if (tmp8) {
    let tmp9 = false !== nSFWAllowed;
    if (tmp9) {
      let flag2 = setting;
      if (setting == null) {
        flag2 = false;
      }
      tmp9 = flag2;
    }
    tmp8 = tmp9;
  }
  cResult[0] = isFeatureAgeGated;
  cResult[1] = setting;
  cResult[2] = isAgeVerified;
  cResult[3] = nSFWAllowed;
  cResult[4] = tmp8;
  tmp6 = tmp8;
}) : (() => {
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.useSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = useNSFWAllowed;
  const nSFWAllowed = obj2.useNSFWAllowed();
  const obj3 = RegionalFeatureConfigUtils;
  let tmp4 = !(obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified);
  obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  if (tmp4) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(5);
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  const setting = ViewNsfwGuilds.useSetting();
  const obj2 = AgeVerificationUtils;
  const isAgeVerified = obj2.useIsAgeVerified();
  const obj3 = useNSFWAllowed;
  const nSFWAllowed = obj3.useNSFWAllowed();
  const obj4 = RegionalFeatureConfigUtils;
  const isFeatureAgeGated = obj4.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (cResult[0] === isFeatureAgeGated) {
    if (cResult[1] === setting) {
      if (cResult[2] === isAgeVerified) {
        let tmp6;
        if (cResult[3] === nSFWAllowed) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
    }
  }
  let tmp8 = !(isFeatureAgeGated && !isAgeVerified);
  if (tmp8) {
    let tmp9 = false !== nSFWAllowed;
    if (tmp9) {
      let flag2 = setting;
      if (setting == null) {
        flag2 = false;
      }
      tmp9 = flag2;
    }
    tmp8 = tmp9;
  }
  cResult[0] = isFeatureAgeGated;
  cResult[1] = setting;
  cResult[2] = isAgeVerified;
  cResult[3] = nSFWAllowed;
  cResult[4] = tmp8;
  tmp6 = tmp8;
}) : (() => {
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.useSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = useNSFWAllowed;
  const nSFWAllowed = obj2.useNSFWAllowed();
  const obj3 = RegionalFeatureConfigUtils;
  let tmp4 = !(obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified);
  obj3.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE) && !isAgeVerified;
  if (tmp4) {
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
});
function resolveNsfwTogglesWithDefaults(arg0, arg1, arg2, arg3) {
  let tmp3 = !(arg1 && !arg3);
  const tmp = arg1 && !arg3;
  if (tmp3) {
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
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/AgeRestrictedContentSettingsUtils.tsx");

export { resolveNsfwTogglesWithDefaults };
export const useViewNsfwCommandsOrDefault = tmp2;
export const useViewNsfwGuildsOrDefault = tmp3;
export const getViewNsfwCommandsOrDefault = function getViewNsfwCommandsOrDefault() {
  let nsfwAllowed;
  const ViewNsfwCommands = UserSettings.ViewNsfwCommands;
  let flag = ViewNsfwCommands.getSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerifiedResult = obj.isAgeVerified();
  const currentUser = UserStore.getCurrentUser();
  const obj2 = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (tmp4) {
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
  let nsfwAllowed;
  const ViewNsfwGuilds = UserSettings.ViewNsfwGuilds;
  let flag = ViewNsfwGuilds.getSetting();
  const obj = AgeVerificationUtils;
  const isAgeVerifiedResult = obj.isAgeVerified();
  const currentUser = UserStore.getCurrentUser();
  const obj2 = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.COMMANDS_TOGGLE);
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = !isAgeVerifiedResult;
  }
  let tmp4 = !isFeatureAgeGatedResult;
  if (tmp4) {
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