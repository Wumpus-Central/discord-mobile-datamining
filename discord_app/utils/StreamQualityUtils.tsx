// discord_app/utils/StreamQualityUtils.tsx
import util from "../intl/index.native.tsx";
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import getReportedStreamResolutionDefault from "../modules/go_live/utils/getReportedStreamResolution.tsx";
import noop from "../../_runtime/metro/00019__.js";
import ApplicationStreamingSettingsStore from "../stores/ApplicationStreamingSettingsStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import UserStore from "../stores/UserStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const StreamSettingsConstants = fn(4607);
({
  ApplicationStreamFPS: c10,
  ApplicationStreamResolutions: closure_11,
  ApplicationStreamSettingRequirements: closure_12,
  getApplicationFramerate: map1,
  getApplicationResolution: closure_14,
} = StreamSettingsConstants);
let closure_15 = fn(1373).StreamQualitiesToPremiumType;
const ResolutionTypes = fn(4585).ResolutionTypes;
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
    let tmp6 = closure_13(maxQuality.maxFrameRate) !== closure_10.FPS_5;
    if (tmp6) {
      tmp6 =
        null ==
        closure_12.find((resolution) => {
          let tmp = resolution.resolution === closure_0;
          if (tmp) {
            tmp = resolution.fps !== closure_2_10.FPS_5;
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
    closure_0 = map1(maxQuality.maxFrameRate);
    return (
      null ==
      closure_1_12.find((fps) => {
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
export const isPremiumRequirement = function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
};
export const getPremiumRequirement = function getPremiumRequirement(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return closure_1_12.find((preset) => {
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
};
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
export const getMaxQuality = function getMaxQuality(participant) {
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
};
export const useMaxQuality = function useMaxQuality(participant) {
  _require = participant;
  const items = [ApplicationStreamingSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => state.getState());
  let obj = require("initialize");
  const items1 = [AuthenticationStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => id.getId());
  const obj2 = require("initialize");
  const items2 = [RTCConnectionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => guildId.getGuildId());
  const items3 = [stateFromStores, stateFromStores1, participant, stateFromStoresObject];
  return stateFromStores1.useMemo(() => {
    if (stateFromStores === participant.user.id) {
      let obj = { maxFrameRate: null, maxResolution: null };
      let tmp7Result = stateFromStoresObject;
      obj.maxFrameRate = stateFromStoresObject.fps;
      const size = { height: stateFromStoresObject.resolution, width: 0, type: null };
      if (0 === stateFromStoresObject.resolution) {
        let FIXED = ResolutionTypes.SOURCE;
      } else {
        FIXED = ResolutionTypes.FIXED;
      }
      size.type = FIXED;
      tmp7Result = getReportedStreamResolutionDefault("useMaxQuality", stateFromStores1, size, tmp7Result.fps);
      obj.maxResolution = tmp7Result;
    } else {
      let tmp3 = null;
      if (null != participant.maxResolution) {
        tmp3 = null;
        if (null != participant.maxFrameRate) {
          obj = { maxFrameRate: null, maxResolution: null };
          ({ maxFrameRate: obj.maxFrameRate, maxResolution: obj.maxResolution } = participant);
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
  const found = closure_1_12.find((preset) => {
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
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  let obj = AnalyticsUtilsDefault;
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  obj = {
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
  obj.guild_premium_tier = premiumTier;
  let quality;
  if (found != null) {
    quality = found.quality;
  }
  let tmp9 = null;
  if (null != quality) {
    tmp9 = closure_15[found.quality];
  }
  obj.stream_quality_user_premium_tier = tmp9;
  let guildPremiumTier;
  if (found != null) {
    guildPremiumTier = found.guildPremiumTier;
  }
  obj.stream_quality_guild_premium_tier = guildPremiumTier;
  obj.stream_quality_preset = preset;
  obj.stream_quality_resolution = resolution;
  obj.stream_quality_frame_rate = frameRate;
  obj.soundshare_enabled = sound;
  obj.track(AnalyticEvents.STREAM_SETTINGS_UPDATE, obj);
};
