// === Module 5422: useStageSpeakingForCurrentUser ===

// Module 5422 (useStageSpeakingForCurrentUser)
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5424 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

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
  const isVerifiedAdult = channelId(4773).useIsVerifiedAdult();
  const obj2 = channelId(4773);
  const obj3 = channelId(5423);
  return channelId(5423).useIsFeatureAgeGated(channelId(5424).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
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
  const isAgeVerified = channelId(4773).useIsAgeVerified();
  const obj2 = channelId(4773);
  const obj3 = channelId(5423);
  return channelId(5423).useIsFeatureAgeGated(channelId(5424).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = AgeVerificationUtils.useIsVerifiedAdult();
  return RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};