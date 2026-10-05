// discord_app/utils/StreamQualityUtils.tsx
import get_initialized from "../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../_runtime/00576_react.js";
import Constants from "../Constants.tsx";
import intl3 from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import Constants2 from "../../discord_common/js/packages/media-engine/Constants.tsx";
import getReportedStreamResolutionDefault from "../modules/go_live/utils/getReportedStreamResolution.tsx";
import react from "../../_runtime/00019_react.js";
import ApplicationStreamingSettingsStore from "../stores/ApplicationStreamingSettingsStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import StreamSettingsConstants from "../modules/go_live/StreamSettingsConstants.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const AnalyticEvents = Constants.AnalyticEvents;
({
  ApplicationStreamFPS: c10,
  ApplicationStreamResolutions: unpackModuleId,
  ApplicationStreamSettingRequirements: closure_12,
  getApplicationFramerate: map1,
  getApplicationResolution: closure_14,
} = StreamSettingsConstants);
let closure_15 = PremiumConstants.StreamQualitiesToPremiumType;
const ResolutionTypes = Constants2.ResolutionTypes;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let guildId;
      let id;
      let state;
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStreamingSettingsStore];
        const fn = function o() {
          return state.getState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        const fn2 = function p() {
          return id.getId();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = get_initialized;
      const stateFromStores = tmpResult3.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [RTCConnectionStore];
        const fn3 = function c() {
          return guildId.getGuildId();
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        tmp13 = fn3;
        tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult4 = get_initialized;
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp13);
      if (stateFromStores === user.user.id) {
        let FIXED;
        const fps = stateFromStoresObject.fps;
        if (0 === stateFromStoresObject.resolution) {
          FIXED = ResolutionTypes.SOURCE;
        } else {
          FIXED = ResolutionTypes.FIXED;
        }
        if (cResult[6] === stateFromStores1) {
          if (cResult[7] === stateFromStoresObject.fps) {
            if (cResult[8] === stateFromStoresObject.resolution) {
              let tmp21;
              if (cResult[9] === FIXED) {
                tmp21 = cResult[10];
              }
              if (cResult[11] === stateFromStoresObject.fps) {
                let tmp26;
                if (cResult[12] === tmp21) {
                  tmp26 = cResult[13];
                }
                tmp16 = tmp26;
              }
              const obj2 = { maxFrameRate: fps, maxResolution: tmp21 };
              cResult[11] = stateFromStoresObject.fps;
              cResult[12] = tmp21;
              cResult[13] = obj2;
              tmp26 = obj2;
            }
          }
        }
        size = { height: stateFromStoresObject.resolution, width: 0, type: FIXED };
        const tmp25 = getReportedStreamResolutionDefault(
          "useMaxQuality",
          stateFromStores1,
          size,
          stateFromStoresObject.fps,
        );
        cResult[6] = stateFromStores1;
        cResult[7] = stateFromStoresObject.fps;
        cResult[8] = stateFromStoresObject.resolution;
        cResult[9] = FIXED;
        cResult[10] = tmp25;
        tmp21 = tmp25;
      } else if (cResult[14] !== user) {
        let tmp18 = null;
        if (null != user.maxResolution) {
          tmp18 = null;
          if (null != user.maxFrameRate) {
            const obj3 = { maxFrameRate: null, maxResolution: null };
            ({ maxFrameRate: obj5.maxFrameRate, maxResolution: obj5.maxResolution } = user);
            tmp18 = obj3;
          }
        }
        cResult[14] = user;
        cResult[15] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[15];
      }
      return tmp16;
    }
  : (arg0) => {
      let guildId;
      let id;
      let state;
      let stateFromStores;
      let user;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ApplicationStreamingSettingsStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => state.getState());
      let obj2 = require("get initialized");
      const items1 = [AuthenticationStore];
      stateFromStores = obj2.useStateFromStores(items1, () => id.getId());
      const items2 = [RTCConnectionStore];
      const obj3 = require("get initialized");
      const stateFromStores1 = obj3.useStateFromStores(items2, () => guildId.getGuildId());
      const items3 = [stateFromStores, stateFromStores1, arg0, stateFromStoresObject];
      return stateFromStores1.useMemo(() => {
        let FIXED;
        let tmp3;
        let tmp7;
        if (stateFromStores === user.user.id) {
          const obj2 = {
            maxFrameRate: stateFromStoresObject.fps,
            maxResolution: tmp7("useMaxQuality", stateFromStores1, size, stateFromStoresObject.fps),
          };
          size = { height: stateFromStoresObject.resolution, width: 0, type: FIXED };
          tmp7 = getReportedStreamResolutionDefault;
          if (0 === stateFromStoresObject.resolution) {
            FIXED = ResolutionTypes.SOURCE;
          } else {
            FIXED = ResolutionTypes.FIXED;
          }
          tmp3 = obj2;
        } else {
          tmp3 = null;
          if (null != user.maxResolution) {
            tmp3 = null;
            if (null != user.maxFrameRate) {
              const obj = { maxFrameRate: null, maxResolution: null };
              ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = user);
              tmp3 = obj;
            }
          }
        }
        return tmp3;
      }, items3);
    };
function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
}
function getPremiumRequirement(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return closure_12.find(
    (preset) =>
      (null == preset.preset || preset.preset === closure_0) &&
      preset.resolution === closure_1 &&
      preset.fps === closure_2,
  );
}
function getMaxQuality(participant) {
  let tmp = null;
  if (null != participant.maxResolution) {
    tmp = null;
    if (null != participant.maxFrameRate) {
      const obj = { maxFrameRate: null, maxResolution: null };
      ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = participant);
      tmp = obj;
    }
  }
  return tmp;
}
let size = size_mod;
const result = size.fileFinishedImporting("utils/StreamQualityUtils.tsx");

export const isPremiumResolution = function isPremiumResolution(maxQuality) {
  if (null != maxQuality) {
    let height;
    if (maxQuality.maxResolution.type === ResolutionTypes.SOURCE) {
      height = constants.RESOLUTION_SOURCE;
    } else {
      height = maxQuality.maxResolution.height;
    }
    let closure_0 = closure_14(height);
    const tmp6 =
      closure_13(maxQuality.maxFrameRate) !== FPS_5.FPS_5 &&
      null ==
        closure_12.find((resolution) => {
          let tmp = resolution.resolution === closure_0 && resolution.fps !== authStore.FPS_5;
          if (tmp) {
            tmp = !(null != resolution.quality || null != resolution.guildPremiumTier);
          }
          return tmp;
        });
    return tmp6;
  }
};
export const isPremiumFPS = function isPremiumFPS(maxQuality) {
  if (null != maxQuality) {
    let closure_0 = map1(maxQuality.maxFrameRate);
    return (
      null ==
      closure_12.find((fps) => {
        let tmp = fps.fps === closure_0;
        if (tmp) {
          tmp = !(null != fps.quality || null != fps.guildPremiumTier);
        }
        return tmp;
      })
    );
  }
};
export { isPremiumRequirement };
export { getPremiumRequirement };
export const getResolutionText = function getResolutionText(maxResolution) {
  let stringResult;
  if (maxResolution.type === ResolutionTypes.SOURCE) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.XjXqzh);
  } else {
    const intl = intl3.intl;
    const obj = { resolution: maxResolution.height };
    stringResult = intl.formatToPlainString(intl3.t.TEOC0I, obj);
  }
  return stringResult;
};
export const getFPSText = function getFPSText(maxFrameRate) {
  const intl = intl3.intl;
  const obj = { fps: maxFrameRate };
  return intl.formatToPlainString(intl3.t.Qb44XH, obj);
};
export { getMaxQuality };
export const useMaxQuality = tmp3;
export const trackStreamSettingsUpdate = function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  let guildPremiumTier;
  let premiumTier;
  let tmp10;
  let closure_0 = preset;
  let closure_1 = resolution;
  let closure_2 = frameRate;
  const found = closure_12.find(
    (preset) =>
      (null == preset.preset || preset.preset === closure_0) &&
      preset.resolution === closure_1 &&
      preset.fps === closure_2,
  );
  const currentUser = UserStore.getCurrentUser();
  const guildId = RTCConnectionStore.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let premiumType;
  const track = AnalyticsUtilsDefault.track;
  const STREAM_SETTINGS_UPDATE = AnalyticEvents.STREAM_SETTINGS_UPDATE;
  AnalyticsUtilsDefault;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  const obj = {
    user_premium_tier: premiumType,
    guild_premium_tier: premiumTier,
    stream_quality_user_premium_tier: tmp10,
    stream_quality_guild_premium_tier: guildPremiumTier,
    stream_quality_preset: preset,
    stream_quality_resolution: resolution,
    stream_quality_frame_rate: frameRate,
    soundshare_enabled: sound,
  };
  premiumTier = undefined;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  let quality;
  if (found != null) {
    quality = found.quality;
  }
  tmp10 = null;
  if (null != quality) {
    tmp10 = closure_15[found.quality];
  }
  guildPremiumTier = undefined;
  if (found != null) {
    guildPremiumTier = found.guildPremiumTier;
  }
  track(STREAM_SETTINGS_UPDATE, obj);
};
