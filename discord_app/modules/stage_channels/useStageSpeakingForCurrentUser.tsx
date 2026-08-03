import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import { Permissions } from "sum";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = require(4409) /* useAgeVerificationRunner */.useIsVerifiedTeen();
  const obj = require(4409) /* useAgeVerificationRunner */;
  const obj2 = require(3872) /* isFeatureAgeGated */;
  return require(3872) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5017) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = require(4409) /* useAgeVerificationRunner */;
  const isVerifiedTeenResult = require(4409) /* useAgeVerificationRunner */.isVerifiedTeen();
  const obj2 = require(3872) /* isFeatureAgeGated */;
  return require(3872) /* isFeatureAgeGated */.isFeatureAgeGated(require(5017) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = require(4409) /* useAgeVerificationRunner */;
  if (null == id) {
    channelId = store.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = channel.getChannel(channelId);
  }
  let canResult = null != channel;
  if (canResult) {
    canResult = getUncachedChannelPermissions.can(Permissions.REQUEST_TO_SPEAK, channel);
  }
  const isVerifiedAdultResult = require(4409) /* useAgeVerificationRunner */.isVerifiedAdult();
  const tmp2Result = require(3872) /* isFeatureAgeGated */;
  return require(3872) /* isFeatureAgeGated */.isFeatureAgeGated(require(5017) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = function useShouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [getUncachedChannelPermissions, ensureGuildLoaded];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = outer1_2.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isVerifiedAdult = channelId(4409).useIsVerifiedAdult();
  const obj2 = channelId(4409);
  const obj3 = channelId(3872);
  return channelId(3872).useIsFeatureAgeGated(channelId(5017).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
};
export const useShouldShowAgeVerificationPopover = function useShouldShowAgeVerificationPopover(id) {
  let channelId = id;
  if (null == id) {
    channelId = store.getChannelId();
  }
  const items = [getUncachedChannelPermissions, ensureGuildLoaded];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = outer1_2.getChannel(tmp);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isAgeVerified = channelId(4409).useIsAgeVerified();
  const obj2 = channelId(4409);
  const obj3 = channelId(3872);
  return channelId(3872).useIsFeatureAgeGated(channelId(5017).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = require(4409) /* useAgeVerificationRunner */.useIsVerifiedAdult();
  const obj = require(4409) /* useAgeVerificationRunner */;
  const obj2 = require(3872) /* isFeatureAgeGated */;
  return require(3872) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5017) /* AgeGatedFeature */.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};