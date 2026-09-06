// === Module 9097: VideoBackgroundUtils ===

// Module 9097 (VideoBackgroundUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

require = fn;
function isAnimatedBackgroundOption(type) {
  let tmp = typeof type === "number";
  if (typeof type === "number") {
    tmp = type in OPTION_1;
  }
  if (tmp) {
    let hasItem = React5.includes(type);
  } else {
    let tmp3 = null != type && typeof type === "object";
    if (tmp3) {
      tmp3 = "id" in type;
    }
    if (tmp3) {
      let flag = type.type === constants.BACKGROUND;
      if (!flag) {
        type = type.type;
        flag = false;
      }
      tmp3 = flag;
    }
    hasItem = tmp3;
    if (hasItem) {
      let isAnimatedIconHashResult = AvatarUtils.isAnimatedIconHash(type.asset);
      if (!isAnimatedIconHashResult) {
        isAnimatedIconHashResult = AvatarUtils.isVideoAssetHash(type.asset);
        const tmp6Result = AvatarUtils;
      }
      hasItem = isAnimatedIconHashResult;
    }
  }
  return hasItem;
}
function getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption) {
  let str = "None";
  if (null != lastUsedVideoBackgroundOption) {
    let tmp = null != lastUsedVideoBackgroundOption && typeof lastUsedVideoBackgroundOption === "object";
    if (tmp) {
      tmp = "id" in lastUsedVideoBackgroundOption;
    }
    if (tmp) {
      let flag = lastUsedVideoBackgroundOption.type === constants.BACKGROUND;
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
        if (OPTION_1.OPTION_1 !== lastUsedVideoBackgroundOption) {
          str6 = "Discord the Movie";
          if (OPTION_1.OPTION_2 !== lastUsedVideoBackgroundOption) {
            str6 = "Wumpus Vacation";
            if (OPTION_1.OPTION_3 !== lastUsedVideoBackgroundOption) {
              str6 = "Vaporwave";
              if (OPTION_1.OPTION_4 !== lastUsedVideoBackgroundOption) {
                str6 = "Capernite Day";
                if (OPTION_1.OPTION_7 !== lastUsedVideoBackgroundOption) {
                  str6 = "Capernite Night";
                  if (OPTION_1.OPTION_8 !== lastUsedVideoBackgroundOption) {
                    str6 = "Hacker Den";
                    if (OPTION_1.OPTION_9 !== lastUsedVideoBackgroundOption) {
                      if (OPTION_1.OPTION_10 === lastUsedVideoBackgroundOption) {
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
const VideoBackgroundConstants = fn(6987);
({ DefaultVideoBackground: hasOwnProperty, VideoFilterType: metroRequire, ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: closure_7 } = VideoBackgroundConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundUtils.tsx");

export const isCustomBackgroundOption = function isCustomBackgroundOption(videoBackgroundOptionFromProto) {
  let tmp = null != videoBackgroundOptionFromProto && typeof videoBackgroundOptionFromProto === "object";
  if (tmp) {
    tmp = "id" in videoBackgroundOptionFromProto;
  }
  if (tmp) {
    let flag = videoBackgroundOptionFromProto.type === constants.BACKGROUND;
    if (!flag) {
      const type = videoBackgroundOptionFromProto.type;
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
};
export const isDefaultBackgroundOption = function isDefaultBackgroundOption(videoBackgroundOptionFromProto) {
  let tmp = typeof videoBackgroundOptionFromProto === "number";
  if (typeof videoBackgroundOptionFromProto === "number") {
    tmp = videoBackgroundOptionFromProto in OPTION_1;
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
  const guildId = RTCConnectionStore.getGuildId();
  const channelId = RTCConnectionStore.getChannelId();
  const channel = ChannelStore.getChannel(channelId);
  const voiceStateMetadata = AppAnalyticsUtils.getVoiceStateMetadata(guildId, channelId, true);
  const obj = { location, effect_type: null, effect_detail: null, effect_state: null, channel_id: null, channel_type: null, guild_id: null, voice_state_count: null, video_stream_count: null, media_session_id: null, rtc_connection_id: null, is_animated: null };
  let str = "None";
  if (null != type) {
    str = "Video Background";
  }
  obj.effect_type = str;
  obj.effect_detail = getEffectDetailAnalyticsName(type);
  obj.effect_state = Enabled;
  obj.channel_id = channelId;
  type = undefined;
  if (channel != null) {
    type = channel.type;
  }
  obj.channel_type = type;
  obj.guild_id = guildId;
  ({ voice_state_count: obj4.voice_state_count, video_stream_count: obj4.video_stream_count } = voiceStateMetadata);
  obj.media_session_id = obj.getMediaSessionId();
  obj.rtc_connection_id = obj.getRTCConnectionId();
  obj.is_animated = isAnimatedBackgroundOption(type);
  AnalyticsUtilsDefault.track(AnalyticEvents.VIDEO_EFFECT_UPDATED, obj);
};
export const trackBackgroundOptionAdded = function trackBackgroundOptionAdded(type, is_video, is_from_tenor) {
  const obj = { is_animated: isAnimatedBackgroundOption(type), is_video, is_from_tenor };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_ADDED, obj);
};
export const trackBackgroundOptionDeleted = function trackBackgroundOptionDeleted(type) {
  const obj = { is_animated: isAnimatedBackgroundOption(type) };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_DELETED, obj);
};
export const getVideoBackgroundProtoFromOption = function getVideoBackgroundProtoFromOption(type) {
  if (null == type) {
    let obj = { oneofKind: "Array" };
  } else {
    let tmp = null != type && typeof type === "object";
    if (tmp) {
      tmp = "id" in type;
    }
    if (tmp) {
      let flag = type.type === constants.BACKGROUND;
      if (!flag) {
        type = type.type;
        flag = false;
      }
      tmp = flag;
    }
    if (tmp) {
      obj = { oneofKind: "customAsset", customAsset: null };
      obj = { id: null, assetHash: null };
      ({ id: obj4.id, asset: obj4.assetHash } = type);
      obj.customAsset = obj;
    } else if ("blur" === type) {
      const obj1 = { oneofKind: "blur", blur: { useBlur: true } };
      obj = obj1;
    } else {
      obj = { oneofKind: "presetOption", presetOption: type };
    }
  }
  return obj;
};
export const getVideoBackgroundOptionFromProto = function getVideoBackgroundOptionFromProto(prop, id) {
  if (null != prop) {
    if (undefined !== prop.oneofKind) {
      const oneofKind = prop.oneofKind;
      if ("customAsset" === oneofKind) {
        const obj = { type: constants.BACKGROUND, id: prop.customAsset.id, user_id: id, asset: prop.customAsset.assetHash };
        return obj;
      } else if ("blur" === oneofKind) {
        let str3 = null;
        if (prop.blur.useBlur) {
          str3 = "blur";
        }
        return str3;
      } else {
        return "presetOption" === oneofKind ? prop.presetOption : undefined;
      }
    }
  }
  return null;
};