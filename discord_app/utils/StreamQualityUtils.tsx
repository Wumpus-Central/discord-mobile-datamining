// discord_app/utils/StreamQualityUtils.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import c from "../../_runtime/00576_c.js";
import util from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import getReportedStreamResolutionDefault from "../modules/go_live/utils/getReportedStreamResolution.tsx";
import noop from "../../_runtime/metro/00019__.js";
import ApplicationStreamingSettingsStore from "../stores/ApplicationStreamingSettingsStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const StreamSettingsConstants = fn(4943);
({
  ApplicationStreamFPS: c10,
  ApplicationStreamResolutions: closure_11,
  ApplicationStreamSettingRequirements: closure_12,
  getApplicationFramerate: map1,
  getApplicationResolution: closure_14,
} = StreamSettingsConstants);
let closure_15 = fn(1379).StreamQualitiesToPremiumType;
const ResolutionTypes = fn(4921).ResolutionTypes;
const ReactCompilerGating = fn(558);
function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
}
function getPremiumRequirement(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return __initData.find((preset) => {
    let tmp = null == preset.preset;
    if (!tmp) {
      tmp = preset.preset === closure_0;
    }
    if (tmp) {
      tmp = preset.resolution === closure_1;
    }
    if (tmp) {
      tmp = preset.fps === closure_2;
    }
    return tmp;
  });
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
let size = fn(2);
const result = size.fileFinishedImporting("utils/StreamQualityUtils.tsx");

export const isPremiumResolution = function isPremiumResolution(maxQuality) {
  if (null != maxQuality) {
    if (maxQuality.maxResolution.type === ResolutionTypes.SOURCE) {
      let height = constants.RESOLUTION_SOURCE;
    } else {
      height = maxQuality.maxResolution.height;
    }
    closure_0 = closure_14(height);
    let tmp6 = closure_13(maxQuality.maxFrameRate) !== FPS_5.FPS_5;
    if (tmp6) {
      tmp6 =
        null ==
        closure_12.find((resolution) => {
          let tmp = resolution.resolution === closure_0;
          if (tmp) {
            tmp = resolution.fps !== v65535.FPS_5;
          }
          if (tmp) {
            tmp = !(null != resolution.quality || null != resolution.guildPremiumTier);
            const tmp4 = null != resolution.quality || null != resolution.guildPremiumTier;
          }
          return tmp;
        });
    }
    return tmp6;
  }
};
export const isPremiumFPS = function isPremiumFPS(maxQuality) {
  if (null != maxQuality) {
    closure_0 = __initData2(maxQuality.maxFrameRate);
    return (
      null ==
      __initData.find((fps) => {
        let tmp = fps.fps === closure_0;
        if (tmp) {
          tmp = !(null != fps.quality || null != fps.guildPremiumTier);
          const tmp3 = null != fps.quality || null != fps.guildPremiumTier;
        }
        return tmp;
      })
    );
  }
};
export { isPremiumRequirement };
export { getPremiumRequirement };
export const getResolutionText = function getResolutionText(maxResolution) {
  if (maxResolution.type === ResolutionTypes.SOURCE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.XjXqzh);
  } else {
    const intl = util.intl;
    const obj = { resolution: maxResolution.height };
    stringResult = intl.formatToPlainString(util.t.TEOC0I, obj);
  }
  return stringResult;
};
export const getFPSText = function getFPSText(maxFrameRate) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.Qb44XH, { fps: maxFrameRate });
};
export { getMaxQuality };
export const useMaxQuality = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      const cResult = c.c(16);
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
      let fps = initialize.useStateFromStoresObject(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        const fn2 = function p() {
          return id.getId();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp8 = fn2;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [RTCConnectionStore];
        const fn3 = function c() {
          return guildId.getGuildId();
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        let tmp12 = fn3;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult3 = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
      if (stateFromStores === user.user.id) {
        if (0 === fps.resolution) {
          let FIXED = ResolutionTypes.SOURCE;
        } else {
          FIXED = ResolutionTypes.FIXED;
        }
        if (cResult[6] === stateFromStores1) {
          if (cResult[7] === fps.fps) {
            if (cResult[8] === fps.resolution) {
              if (cResult[9] === FIXED) {
                let tmp20 = cResult[10];
              }
              if (cResult[11] === fps.fps) {
              }
              const obj2 = { maxFrameRate: fps.fps, maxResolution: tmp20 };
              fps = fps.fps;
              cResult[11] = fps;
              cResult[12] = tmp20;
              cResult[13] = obj2;
            }
          }
        }
        const size = { height: fps.resolution, width: 0, type: FIXED };
        const tmp24 = getReportedStreamResolutionDefault("useMaxQuality", stateFromStores1, size, fps.fps);
        cResult[6] = stateFromStores1;
        cResult[7] = fps.fps;
        cResult[8] = fps.resolution;
        cResult[9] = FIXED;
        cResult[10] = tmp24;
        tmp20 = tmp24;
      } else {
        if (cResult[14] !== user) {
          let tmp17 = null;
          if (null != user.maxResolution) {
            tmp17 = null;
            if (null != user.maxFrameRate) {
              ({ maxFrameRate: obj5.maxFrameRate, maxResolution: obj5.maxResolution } = user);
              tmp17 = { maxFrameRate: null, maxResolution: null };
              const obj3 = { maxFrameRate: null, maxResolution: null };
            }
          }
          cResult[14] = user;
          cResult[15] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[15];
        }
        return tmp15;
      }
      const tmpResult4 = initialize;
    }
  : (arg0) => {
      _require = arg0;
      const items = [ApplicationStreamingSettingsStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => state.getState());
      let obj = require("initialize");
      const items1 = [AuthenticationStore];
      stateFromStores = require("initialize").useStateFromStores(items1, () => id.getId());
      let obj2 = require("initialize");
      const items2 = [RTCConnectionStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items2, () => guildId.getGuildId());
      const items3 = [stateFromStores, stateFromStores1, arg0, stateFromStoresObject];
      return stateFromStores1.useMemo(() => {
        if (stateFromStores === user.user.id) {
          const obj2 = { maxFrameRate: null, maxResolution: null };
          let tmp7Result = stateFromStoresObject;
          obj2.maxFrameRate = stateFromStoresObject.fps;
          const size = { height: stateFromStoresObject.resolution, width: 0, type: null };
          if (0 === stateFromStoresObject.resolution) {
            let FIXED = ResolutionTypes.SOURCE;
          } else {
            FIXED = ResolutionTypes.FIXED;
          }
          size.type = FIXED;
          tmp7Result = getReportedStreamResolutionDefault("useMaxQuality", stateFromStores1, size, tmp7Result.fps);
          obj2.maxResolution = tmp7Result;
        } else {
          let tmp3 = null;
          if (null != user.maxResolution) {
            tmp3 = null;
            if (null != user.maxFrameRate) {
              const obj = { maxFrameRate: null, maxResolution: null };
              ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = user);
              tmp3 = obj;
            }
          }
          return tmp3;
        }
      }, items3);
    };
export const trackStreamSettingsUpdate = function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  closure_0 = preset;
  closure_1 = resolution;
  closure_2 = frameRate;
  const found = __initData.find((preset) => {
    let tmp = null == preset.preset;
    if (!tmp) {
      tmp = preset.preset === closure_0;
    }
    if (tmp) {
      tmp = preset.resolution === closure_1;
    }
    if (tmp) {
      tmp = preset.fps === closure_2;
    }
    return tmp;
  });
  const currentUser = UserStore.getCurrentUser();
  const guildId = RTCConnectionStore.getGuildId();
  guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  const obj2 = {
    user_premium_tier: premiumType,
    guild_premium_tier: null,
    stream_quality_user_premium_tier: null,
    stream_quality_guild_premium_tier: null,
    stream_quality_preset: null,
    stream_quality_resolution: null,
    stream_quality_frame_rate: null,
    soundshare_enabled: null,
  };
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  obj2.guild_premium_tier = premiumTier;
  let quality;
  if (found != null) {
    quality = found.quality;
  }
  let tmp9 = null;
  if (null != quality) {
    tmp9 = closure_15[found.quality];
  }
  obj2.stream_quality_user_premium_tier = tmp9;
  let guildPremiumTier;
  if (found != null) {
    guildPremiumTier = found.guildPremiumTier;
  }
  obj2.stream_quality_guild_premium_tier = guildPremiumTier;
  obj2.stream_quality_preset = preset;
  obj2.stream_quality_resolution = resolution;
  obj2.stream_quality_frame_rate = frameRate;
  obj2.soundshare_enabled = sound;
  AnalyticsUtilsDefault.track(AnalyticEvents.STREAM_SETTINGS_UPDATE, obj2);
};
