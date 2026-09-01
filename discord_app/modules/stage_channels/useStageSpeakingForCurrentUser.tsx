// discord_app/modules/stage_channels/useStageSpeakingForCurrentUser.tsx
import isFeatureAgeGated from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import useAgeVerificationRunner from "../age_assurance/AgeVerificationUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";
import closure_3 from "../../stores/PermissionStore.tsx";
import closure_4 from "../../stores/SelectedChannelStore.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

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
      canResult = closure_1_3.can(closure_1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isVerifiedAdult = channelId(4733).useIsVerifiedAdult();
  const obj2 = channelId(4733);
  const obj3 = channelId(4172);
  return channelId(4172).useIsFeatureAgeGated(channelId(5367).AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult && stateFromStores;
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
      canResult = closure_1_3.can(closure_1_5.REQUEST_TO_SPEAK, channel);
    }
    return canResult;
  }, items1);
  const obj = channelId(589);
  const isAgeVerified = channelId(4733).useIsAgeVerified();
  const obj2 = channelId(4733);
  const obj3 = channelId(4172);
  return channelId(4172).useIsFeatureAgeGated(channelId(5367).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
};
export const useShouldShowAgeVerificationForEvent = function useShouldShowAgeVerificationForEvent() {
  const isVerifiedAdult = useAgeVerificationRunner.useIsVerifiedAdult();
  const obj = useAgeVerificationRunner;
  const obj2 = isFeatureAgeGated;
  return isFeatureAgeGated.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
};