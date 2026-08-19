// === Module 9667: isPremiumResolution ===

// Module 9667 (isPremiumResolution)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import noop from "noop" /* 19 */;
import ApplicationStreamPresets from "ApplicationStreamPresets" /* 4562 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { AnalyticEvents } from "ME" /* 676 */;
import RESOLUTION_720 from "RESOLUTION_720" /* 4524 */;
import { StreamQualitiesToPremiumType as closure_15 } from "GuildFeatures" /* 1924 */;
import { ResolutionTypes } from "DesktopSources" /* 4529 */;

require = fn;
({ ApplicationStreamFPS: c10, ApplicationStreamResolutions: unpackModuleId, ApplicationStreamSettingRequirements: closure_12, getApplicationFramerate: map1, getApplicationResolution: closure_14 } = RESOLUTION_720);
const result = require("obj132").fileFinishedImporting("utils/StreamQualityUtils.tsx");

export const isPremiumResolution = function isPremiumResolution(maxQuality) {
  if (null != maxQuality) {
    if (maxQuality.maxResolution.type === ResolutionTypes.SOURCE) {
      let height = constants.RESOLUTION_SOURCE;
    } else {
      height = maxQuality.maxResolution.height;
    }
    closure_0 = callback2(height);
    let tmp6 = callback(maxQuality.maxFrameRate) !== FPS_5.FPS_5;
    if (tmp6) {
      tmp6 = null == closure_12.find((item, index) => {
        let tmp = item.resolution === closure_0;
        if (tmp) {
          tmp = item.fps !== closure_1_10.FPS_5;
        }
        if (tmp) {
          tmp = !(null != item.quality || null != item.guildPremiumTier);
        }
        return tmp;
      });
    }
    return tmp6;
  }
};
export const isPremiumFPS = function isPremiumFPS(maxQuality) {
  if (null != maxQuality) {
    closure_0 = callback(maxQuality.maxFrameRate);
    return null == closure_12.find((item, index) => {
      let tmp = item.fps === closure_0;
      if (tmp) {
        tmp = !(null != item.quality || null != item.guildPremiumTier);
      }
      return tmp;
    });
  }
};
export const isPremiumRequirement = function isPremiumRequirement(quality) {
  return null != quality.quality || null != quality.guildPremiumTier;
};
export const getPremiumRequirement = function getPremiumRequirement(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return closure_12.find((item, index) => {
    let tmp = null == item.preset;
    if (!tmp) {
      tmp = item.preset === closure_0;
    }
    if (tmp) {
      tmp = item.resolution === closure_1;
    }
    if (tmp) {
      tmp = item.fps === closure_2;
    }
    return tmp;
  });
};
export const getResolutionText = function getResolutionText(maxResolution) {
  if (maxResolution.type === ResolutionTypes.SOURCE) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.XjXqzh);
  } else {
    const intl = getSystemLocale.intl;
    const obj = { resolution: null };
    obj[0] = maxResolution.height;
    stringResult = intl.formatToPlainString(getSystemLocale.t.TEOC0I, obj);
  }
  return stringResult;
};
export const getFPSText = function getFPSText(maxFrameRate) {
  const intl = getSystemLocale.intl;
  return intl.formatToPlainString(getSystemLocale.t.Qb44XH, { fps: maxFrameRate });
};
export const getMaxQuality = function getMaxQuality(participant) {
  let tmp = null;
  if (null != participant.maxResolution) {
    tmp = null;
    if (null != participant.maxFrameRate) {
      const obj = { maxFrameRate: null, maxResolution: null };
      ({ maxFrameRate: obj[0], maxResolution: obj[1] } = participant);
      tmp = obj;
    }
  }
  return tmp;
};
export const useMaxQuality = function useMaxQuality(participant) {
  const _require = participant;
  const items = [closure_4];
  const stateFromStoresObject = _require(stateFromStores[11]).useStateFromStoresObject(items, () => state.getState());
  let obj = _require(stateFromStores[11]);
  const items1 = [closure_5];
  stateFromStores = _require(stateFromStores[11]).useStateFromStores(items1, () => id.getId());
  const items2 = [stateFromStores, participant, stateFromStoresObject];
  return React.useMemo(() => {
    if (stateFromStores === participant.user.id) {
      let obj = { maxFrameRate: null, maxResolution: null };
      obj[0] = stateFromStoresObject.fps;
      obj = { height: null, width: 0, type: null };
      obj[0] = stateFromStoresObject.resolution;
      if (0 === stateFromStoresObject.resolution) {
        let FIXED = ResolutionTypes.SOURCE;
      } else {
        FIXED = ResolutionTypes.FIXED;
      }
      obj[2] = FIXED;
      obj[1] = obj;
    } else {
      let tmp3 = null;
      if (null != participant.maxResolution) {
        tmp3 = null;
        if (null != participant.maxFrameRate) {
          obj = { maxFrameRate: null, maxResolution: null };
          ({ maxFrameRate: obj[0], maxResolution: obj[1] } = participant);
          tmp3 = obj;
        }
      }
      return tmp3;
    }
  }, items2);
};
export const trackStreamSettingsUpdate = function trackStreamSettingsUpdate(preset, resolution, frameRate, sound) {
  closure_0 = preset;
  importDefault = resolution;
  dependencyMap = frameRate;
  const found = closure_12.find((item, index) => {
    let tmp = null == item.preset;
    if (!tmp) {
      tmp = item.preset === closure_0;
    }
    if (tmp) {
      tmp = item.resolution === closure_1;
    }
    if (tmp) {
      tmp = item.fps === closure_2;
    }
    return tmp;
  });
  currentUser = currentUser.getCurrentUser();
  guildId = guildId.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = guild.getGuild(guildId);
  }
  let obj = expandEventPropertiesDefault;
  let premiumType;
  if (currentUser != null) {
    premiumType = currentUser.premiumType;
  }
  obj = { user_premium_tier: premiumType, guild_premium_tier: null, stream_quality_user_premium_tier: null, stream_quality_guild_premium_tier: null, stream_quality_preset: null, stream_quality_resolution: null, stream_quality_frame_rate: null, soundshare_enabled: null };
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  obj[1] = premiumTier;
  let quality;
  if (found != null) {
    quality = found.quality;
  }
  let tmp9 = null;
  if (null != quality) {
    tmp9 = table[found.quality];
  }
  obj[2] = tmp9;
  let guildPremiumTier;
  if (found != null) {
    guildPremiumTier = found.guildPremiumTier;
  }
  obj[3] = guildPremiumTier;
  obj[4] = preset;
  obj[5] = resolution;
  obj[6] = frameRate;
  obj[7] = sound;
  obj.track(AnalyticEvents.STREAM_SETTINGS_UPDATE, obj);
};