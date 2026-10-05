// === Module 9317: VideoBackgroundUtils ===

// Module 9317 (VideoBackgroundUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6484 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function isAnimatedBackgroundOption(type) {
  let hasItem;
  let tmp = typeof type === "number";
  if (typeof type === "number") {
    tmp = type in hasOwnProperty;
  }
  if (tmp) {
    hasItem = metroImportDefault.includes(type);
  } else {
    let tmp3 = null != type && typeof type === "object" && "id" in type;
    if (tmp3) {
      let flag = type.type === metroRequire.BACKGROUND;
      if (!flag) {
        type = type.type;
        flag = false;
      }
      tmp3 = flag;
    }
    hasItem = tmp3;
    if (hasItem) {
      const obj = AvatarUtils;
      let isAnimatedIconHashResult = obj.isAnimatedIconHash(type.asset);
      if (!isAnimatedIconHashResult) {
        const tmp6Result = AvatarUtils;
        isAnimatedIconHashResult = tmp6Result.isVideoAssetHash(type.asset);
      }
      hasItem = isAnimatedIconHashResult;
    }
  }
  return hasItem;
}
function getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption) {
  let str = "None";
  if (null != lastUsedVideoBackgroundOption) {
    let tmp = null != lastUsedVideoBackgroundOption && typeof lastUsedVideoBackgroundOption === "object" && "id" in lastUsedVideoBackgroundOption;
    if (tmp) {
      let flag = lastUsedVideoBackgroundOption.type === metroRequire.BACKGROUND;
      if (!flag) {
        const type = lastUsedVideoBackgroundOption.type;
        flag = false;
      }
      tmp = flag;
    }
    let str3 = "Custom";
    if (!tmp) {
      let str4 = "Blur";
      if ("blur" !== lastUsedVideoBackgroundOption) {
        let str6 = "Cybercity";
        if (hasOwnProperty.OPTION_1 !== lastUsedVideoBackgroundOption) {
          str6 = "Discord the Movie";
          if (hasOwnProperty.OPTION_2 !== lastUsedVideoBackgroundOption) {
            str6 = "Wumpus Vacation";
            if (hasOwnProperty.OPTION_3 !== lastUsedVideoBackgroundOption) {
              str6 = "Vaporwave";
              if (hasOwnProperty.OPTION_4 !== lastUsedVideoBackgroundOption) {
                str6 = "Capernite Day";
                if (hasOwnProperty.OPTION_7 !== lastUsedVideoBackgroundOption) {
                  str6 = "Capernite Night";
                  if (hasOwnProperty.OPTION_8 !== lastUsedVideoBackgroundOption) {
                    str6 = "Hacker Den";
                    if (hasOwnProperty.OPTION_9 !== lastUsedVideoBackgroundOption) {
                      if (hasOwnProperty.OPTION_10 === lastUsedVideoBackgroundOption) {
                        str6 = "Wumpice";
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const _HermesInternal = HermesInternal;
        str4 = "Preset - " + str6;
      }
      str3 = str4;
    }
    str = str3;
  }
  return str;
}
({ DefaultVideoBackground: hasOwnProperty, VideoFilterType: metroRequire, ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: metroImportDefault } = VideoBackgroundConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundUtils.tsx");

export const isCustomBackgroundOption = function isCustomBackgroundOption(stateFromStores) {
  let tmp = null != stateFromStores && typeof stateFromStores === "object" && "id" in stateFromStores;
  if (tmp) {
    let flag = stateFromStores.type === metroRequire.BACKGROUND;
    if (!flag) {
      const type = stateFromStores.type;
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
export const isDefaultBackgroundOption = function isDefaultBackgroundOption(stateFromStores) {
  let tmp = typeof stateFromStores === "number";
  if (typeof stateFromStores === "number") {
    tmp = stateFromStores in hasOwnProperty;
  }
  return tmp;
};
export { isAnimatedBackgroundOption };
export const getEffectAnalyticsType = function getEffectAnalyticsType(lastUsedVideoBackgroundOption) {
  let str = "None";
  if (null != lastUsedVideoBackgroundOption) {
    str = "Video Background";
  }
  return str;
};
export { getEffectDetailAnalyticsName };
export const trackBackgroundOptionUpdated = function trackBackgroundOptionUpdated(type, location, Enabled) {
  let str;
  const guildId = RTCConnectionStore.getGuildId();
  const channelId = RTCConnectionStore.getChannelId();
  const channel = ChannelStore.getChannel(channelId);
  const obj2 = AppAnalyticsUtils;
  const voiceStateMetadata = obj2.getVoiceStateMetadata(guildId, channelId, true);
  const obj4 = { location, effect_type: str, effect_detail: getEffectDetailAnalyticsName(type), effect_state: Enabled, channel_id: channelId, channel_type: type, guild_id: guildId, voice_state_count: null, video_stream_count: null, media_session_id: RTCConnectionStore.getMediaSessionId(), rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), is_animated: isAnimatedBackgroundOption(type) };
  str = "None";
  const track = AnalyticsUtilsDefault.track;
  const VIDEO_EFFECT_UPDATED = AnalyticEvents.VIDEO_EFFECT_UPDATED;
  AnalyticsUtilsDefault;
  if (null != type) {
    str = "Video Background";
  }
  type = undefined;
  if (channel != null) {
    type = channel.type;
  }
  ({ voice_state_count: obj3.voice_state_count, video_stream_count: obj3.video_stream_count } = voiceStateMetadata);
  track(VIDEO_EFFECT_UPDATED, obj4);
};
export const trackBackgroundOptionAdded = function trackBackgroundOptionAdded(type, is_video, is_from_tenor) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { is_animated: isAnimatedBackgroundOption(type), is_video, is_from_tenor };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_ADDED, obj2);
};
export const trackBackgroundOptionDeleted = function trackBackgroundOptionDeleted(type) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { is_animated: isAnimatedBackgroundOption(type) };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_DELETED, obj2);
};
export const getVideoBackgroundProtoFromOption = function getVideoBackgroundProtoFromOption(type) {
  let obj;
  let obj3;
  if (null == type) {
    obj = { oneofKind: "r" };
  } else {
    let tmp = null != type && typeof type === "object" && "id" in type;
    if (tmp) {
      let flag = type.type === metroRequire.BACKGROUND;
      if (!flag) {
        type = type.type;
        flag = false;
      }
      tmp = flag;
    }
    if (tmp) {
      const obj2 = { oneofKind: "customAsset", customAsset: obj3 };
      obj3 = { id: null, assetHash: null };
      ({ id: obj4.id, asset: obj4.assetHash } = type);
      obj = obj2;
    } else if ("blur" === type) {
      obj = { oneofKind: "blur", blur: { useBlur: true } };
      const obj7 = { oneofKind: "blur", blur: { useBlur: true } };
    } else {
      obj = { oneofKind: "presetOption", presetOption: type };
    }
  }
  return obj;
};
export const getVideoBackgroundOptionFromProto = function getVideoBackgroundOptionFromProto(oneofKind, user_id) {
  if (null != oneofKind) {
    if (undefined !== oneofKind.oneofKind) {
      oneofKind = oneofKind.oneofKind;
      if ("customAsset" === oneofKind) {
        return { type: metroRequire.BACKGROUND, id: oneofKind.customAsset.id, user_id, asset: oneofKind.customAsset.assetHash };
      } else if ("blur" === oneofKind) {
        let str3 = null;
        if (oneofKind.blur.useBlur) {
          str3 = "blur";
        }
        return str3;
      } else {
        return "presetOption" === oneofKind ? oneofKind.presetOption : undefined;
      }
    }
  }
  return null;
};