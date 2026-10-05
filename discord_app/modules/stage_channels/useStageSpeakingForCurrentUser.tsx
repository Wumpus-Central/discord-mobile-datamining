// discord_app/modules/stage_channels/useStageSpeakingForCurrentUser.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import AgeVerificationUtils from "../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeGatedFeature from "../../../discord_common/js/shared/shared-constants/AgeGatedFeature.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, tmp6;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = AgeVerificationUtils;
      const isVerifiedTeen = obj.useIsVerifiedTeen();
      const obj2 = RegionalFeatureConfigUtils;
      const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
      return tmp2;
    }
  : () => {
      const obj = AgeVerificationUtils;
      const isVerifiedTeen = obj.useIsVerifiedTeen();
      const obj2 = RegionalFeatureConfigUtils;
      const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeen;
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp12;
      let tmp4;
      let tmp8;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] !== arg0) {
        let channelId = arg0;
        if (null == arg0) {
          channelId = SelectedChannelStore.getChannelId();
        }
        cResult[0] = arg0;
        cResult[1] = channelId;
        tmp4 = channelId;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, ChannelStore];
        cResult[2] = items;
        tmp8 = items;
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
        tmp12 = items1;
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
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp8, E, tmp12);
      const tmpResult3 = tmp(5102);
      const isVerifiedAdult = tmpResult3.useIsVerifiedAdult();
      const tmpResult4 = tmp(5580);
      const tmp15 =
        tmpResult4.useIsFeatureAgeGated(tmp(5581).AgeGatedFeature.STAGE_SPEAKING) &&
        !isVerifiedAdult &&
        stateFromStores;
      return tmp15;
    }
  : (arg0) => {
      let channelId = arg0;
      if (null == arg0) {
        channelId = SelectedChannelStore.getChannelId();
      }
      const items = [PermissionStore, ChannelStore];
      const items1 = [channelId];
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          let channel = null;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          const canResult = null != channel && PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
          return canResult;
        },
        items1,
      );
      const obj2 = channelId(5102);
      const isVerifiedAdult = obj2.useIsVerifiedAdult();
      const obj3 = channelId(5580);
      const tmp5 =
        obj3.useIsFeatureAgeGated(channelId(5581).AgeGatedFeature.STAGE_SPEAKING) &&
        !isVerifiedAdult &&
        stateFromStores;
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp12;
      let tmp4;
      let tmp8;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] !== arg0) {
        let channelId = arg0;
        if (null == arg0) {
          channelId = SelectedChannelStore.getChannelId();
        }
        cResult[0] = arg0;
        cResult[1] = channelId;
        tmp4 = channelId;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore, ChannelStore];
        cResult[2] = items;
        tmp8 = items;
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
        tmp12 = items1;
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
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp8, E, tmp12);
      const tmpResult3 = tmp(5102);
      const isAgeVerified = tmpResult3.useIsAgeVerified();
      const tmpResult4 = tmp(5580);
      const tmp15 =
        tmpResult4.useIsFeatureAgeGated(tmp(5581).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
      return tmp15;
    }
  : (arg0) => {
      let channelId = arg0;
      if (null == arg0) {
        channelId = SelectedChannelStore.getChannelId();
      }
      const items = [PermissionStore, ChannelStore];
      const items1 = [channelId];
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          let channel = null;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          const canResult = null != channel && PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
          return canResult;
        },
        items1,
      );
      const obj2 = channelId(5102);
      const isAgeVerified = obj2.useIsAgeVerified();
      const obj3 = channelId(5580);
      const tmp5 =
        obj3.useIsFeatureAgeGated(channelId(5581).AgeGatedFeature.STAGE_SPEAKING) && !isAgeVerified && stateFromStores;
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = AgeVerificationUtils;
      const isVerifiedAdult = obj.useIsVerifiedAdult();
      const obj2 = RegionalFeatureConfigUtils;
      const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
      return tmp2;
    }
  : () => {
      const obj = AgeVerificationUtils;
      const isVerifiedAdult = obj.useIsVerifiedAdult();
      const obj2 = RegionalFeatureConfigUtils;
      const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdult;
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/stage_channels/useStageSpeakingForCurrentUser.tsx");

export const useIsStageSpeakingDisabledForCurrentUser = tmp2;
export const isStageSpeakingDisabledForCurrentUser = function isStageSpeakingDisabledForCurrentUser() {
  const obj = AgeVerificationUtils;
  const isVerifiedTeenResult = obj.isVerifiedTeen();
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && isVerifiedTeenResult;
  return tmp2;
};
export const shouldAgeVerifyToSpeakForCurrentUser = function shouldAgeVerifyToSpeakForCurrentUser(id) {
  let channelId = id;
  const obj = AgeVerificationUtils;
  const isVerifiedAdultResult = obj.isVerifiedAdult();
  if (null == id) {
    channelId = SelectedChannelStore.getChannelId();
  }
  let channel = null;
  if (null != channelId) {
    channel = ChannelStore.getChannel(channelId);
  }
  const canResult = null != channel && PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel);
  const tmp2Result = RegionalFeatureConfigUtils;
  const tmp11 =
    tmp2Result.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.STAGE_SPEAKING) && !isVerifiedAdultResult && canResult;
  return tmp11;
};
export const useShouldAgeVerifyToSpeakForCurrentUser = tmp3;
export const useShouldShowAgeVerificationPopover = tmp4;
export const useShouldShowAgeVerificationForEvent = tmp5;
