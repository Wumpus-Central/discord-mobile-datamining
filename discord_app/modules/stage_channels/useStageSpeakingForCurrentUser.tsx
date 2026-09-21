// === Module 5639: useStageSpeakingForCurrentUser ===

// Module 5639 (useStageSpeakingForCurrentUser)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4968 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5640 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5641 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;

require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
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
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
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
  const isVerifiedAdult = channelId(4968).useIsVerifiedAdult();
  const obj2 = channelId(4968);
  const obj3 = channelId(5640);
  return channelId(5640).useIsFeatureAgeGated(channelId(5641).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
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
  const isAgeVerified = channelId(4968).useIsAgeVerified();
  const obj2 = channelId(4968);
  const obj3 = channelId(5640);
  return channelId(5640).useIsFeatureAgeGated(channelId(5641).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};