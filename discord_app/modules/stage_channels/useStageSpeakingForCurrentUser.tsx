// === Module 5579: useStageSpeakingForCurrentUser ===

// Module 5579 (useStageSpeakingForCurrentUser)
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5581 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

require = fn;
const Permissions = fn(1096).Permissions;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
}) : (() => {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(6);
  if (cResult[0] !== arg0) {
    let channelId = arg0;
    if (null == arg0) {
      channelId = SelectedChannelStore.getChannelId();
    }
    cResult[0] = arg0;
    cResult[1] = channelId;
    let tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ChannelStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = E;
    cResult[5] = items1;
    let tmp12 = items1;
  } else {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    tmp12 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, E, tmp12);
  const tmpResult = require("initialize");
  const isVerifiedAdult = require("AgeVerificationUtils").useIsVerifiedAdult();
  const tmpResult3 = require("AgeVerificationUtils");
  const tmpResult4 = require("RegionalFeatureConfigUtils");
  return require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
}) : ((arg0) => {
  let channelId = arg0;
  if (null == arg0) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const items = [PermissionStore, ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(504);
  const isVerifiedAdult = channelId(5102).useIsVerifiedAdult();
  const obj2 = channelId(5102);
  const obj3 = channelId(5580);
  return channelId(5580).useIsFeatureAgeGated(channelId(5581).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(6);
  if (cResult[0] !== arg0) {
    let channelId = arg0;
    if (null == arg0) {
      channelId = SelectedChannelStore.getChannelId();
    }
    cResult[0] = arg0;
    cResult[1] = channelId;
    let tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ChannelStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = E;
    cResult[5] = items1;
    let tmp12 = items1;
  } else {
    class E {
      constructor() {
        channel = null;
        if (null != closure_0) {
          tmp3 = closure_2;
          channel = closure_2.getChannel(tmp);
        }
        canResult = null != channel;
        if (canResult) {
          tmp5 = closure_3;
          tmp6 = Permissions;
          canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
        }
        return canResult;
      }
    }
    tmp12 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, E, tmp12);
  const tmpResult = require("initialize");
  const isAgeVerified = require("AgeVerificationUtils").useIsAgeVerified();
  const tmpResult3 = require("AgeVerificationUtils");
  const tmpResult4 = require("RegionalFeatureConfigUtils");
  return require("RegionalFeatureConfigUtils").useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
}) : ((arg0) => {
  let channelId = arg0;
  if (null == arg0) {
    channelId = SelectedChannelStore.getChannelId();
  }
  const items = [PermissionStore, ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(504);
  const isAgeVerified = channelId(5102).useIsAgeVerified();
  const obj2 = channelId(5102);
  const obj3 = channelId(5580);
  return channelId(5580).useIsFeatureAgeGated(channelId(5581).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = tmp2;
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = SelectedChannelStore.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  let canResult = null != channel;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
  }
  const isVerifiedAdultResult = AgeVerificationUtils.isVerifiedAdult();
  const tmp2Result = RegionalFeatureConfigUtils;
  return RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = tmp3;
export const useShouldShowAgeVerificationPopover = tmp4;
export const useShouldShowAgeVerificationForEvent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
}) : (() => {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
});