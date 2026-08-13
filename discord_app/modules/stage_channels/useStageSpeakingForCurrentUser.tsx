// discord_app/modules/stage_channels/useStageSpeakingForCurrentUser.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import { Permissions } from "sum";
import { AgeGatedFeature } from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import { useAgeVerificationRunner } from "../age_assurance/AgeVerificationUtils.tsx";
import { isFeatureAgeGated } from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = function useIsStageSpeakingDisabledForCurrentUser() {
  const isVerifiedTeen = useAgeVerificationRunner.useIsVerifiedTeen();
  const obj = useAgeVerificationRunner;
  const obj2 = isFeatureAgeGated;
  return isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
};
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = useAgeVerificationRunner;
  const isVerifiedTeenResult = useAgeVerificationRunner.isVerifiedTeen();
  const obj2 = isFeatureAgeGated;
  return isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = useAgeVerificationRunner;
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
  const isVerifiedAdultResult = useAgeVerificationRunner.isVerifiedAdult();
  const tmp2Result = isFeatureAgeGated;
  return isFeatureAgeGated.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
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
  const isVerifiedAdult = channelId(4560).useIsVerifiedAdult();
  const obj2 = channelId(4560);
  const obj3 = channelId(4040);
  return channelId(4040).useIsFeatureAgeGated(channelId(5182).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
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
  const isAgeVerified = channelId(4560).useIsAgeVerified();
  const obj2 = channelId(4560);
  const obj3 = channelId(4040);
  return channelId(4040).useIsFeatureAgeGated(channelId(5182).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = useAgeVerificationRunner.useIsVerifiedAdult();
  const obj = useAgeVerificationRunner;
  const obj2 = isFeatureAgeGated;
  return isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};