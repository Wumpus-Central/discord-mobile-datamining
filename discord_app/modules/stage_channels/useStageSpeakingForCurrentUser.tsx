// === Module 4991: useIsStageSpeakingDisabledForCurrentUser ===

// Module 4991 (useIsStageSpeakingDisabledForCurrentUser)
import isFeatureAgeGated from "isFeatureAgeGated" /* 4072 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5039 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import { Permissions } from "sum" /* 505 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
  return isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeenResult = useAgeVerificationRunner.isVerifiedTeen();
  return isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = channel.getChannel(channelId);
  }
  let canResult = null != channel;
  if (canResult) {
    canResult = closure_3.can(Permissions.REQUEST_TO_SPEAK, channel);
  }
  const isVerifiedAdultResult = useAgeVerificationRunner.isVerifiedAdult();
  const tmp2Result = isFeatureAgeGated;
  return isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [closure_3, closure_2];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = closure_1_2.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isVerifiedAdult = channelId(4992).useIsVerifiedAdult();
  const obj2 = channelId(4992);
  const obj3 = channelId(4072);
  return channelId(4072).useIsFeatureAgeGated(channelId(5039).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [closure_3, closure_2];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = closure_1_2.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isAgeVerified = channelId(4992).useIsAgeVerified();
  const obj2 = channelId(4992);
  const obj3 = channelId(4072);
  return channelId(4072).useIsFeatureAgeGated(channelId(5039).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = useAgeVerificationRunner.useIsVerifiedAdult();
  return isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};