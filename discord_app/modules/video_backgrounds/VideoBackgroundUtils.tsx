// discord_app/modules/video_backgrounds/VideoBackgroundUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import VideoFilterType from "VideoFilterType";
import { AnalyticEvents } from "ME";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { getAvatarURL } from "../../utils/AvatarUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function isAnimatedBackgroundOption(closure_0) {
  let tmp = typeof closure_0 === "number";
  if (typeof closure_0 === "number") {
    tmp = closure_0 in closure_5;
  }
  if (tmp) {
    let hasItem = closure_7.includes(closure_0);
  } else {
    let tmp3 = null != closure_0 && typeof closure_0 === "object";
    if (tmp3) {
      tmp3 = "id" in closure_0;
    }
    if (tmp3) {
      let flag = closure_0.type === constants.BACKGROUND;
      if (!flag) {
        const type = closure_0.type;
        flag = false;
      }
      tmp3 = flag;
    }
    hasItem = tmp3;
    if (hasItem) {
      let isAnimatedIconHashResult = getAvatarURL.isAnimatedIconHash(closure_0.asset);
      if (!isAnimatedIconHashResult) {
        isAnimatedIconHashResult = tmp6(1416).isVideoAssetHash(closure_0.asset);
        const tmp6Result = tmp6(1416);
      }
      hasItem = isAnimatedIconHashResult;
      const obj = getAvatarURL;
      tmp6 = require;
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
          if (tmp4.OPTION_2 !== lastUsedVideoBackgroundOption) {
            str6 = "Wumpus Vacation";
            if (tmp4.OPTION_3 !== lastUsedVideoBackgroundOption) {
              str6 = "Vaporwave";
              if (tmp4.OPTION_4 !== lastUsedVideoBackgroundOption) {
                str6 = "Capernite Day";
                if (tmp4.OPTION_7 !== lastUsedVideoBackgroundOption) {
                  str6 = "Capernite Night";
                  if (tmp4.OPTION_8 !== lastUsedVideoBackgroundOption) {
                    str6 = "Hacker Den";
                    if (tmp4.OPTION_9 !== lastUsedVideoBackgroundOption) {
                      if (tmp4.OPTION_10 === lastUsedVideoBackgroundOption) {
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
({ DefaultVideoBackground: c5, VideoFilterType: closure_6, ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: error } = VideoFilterType);
const result = require("VideoFilterType").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundUtils.tsx");

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
    tmp = videoBackgroundOptionFromProto in closure_5;
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
export const trackBackgroundOptionUpdated = function trackBackgroundOptionUpdated(closure_0, location, Enabled) {
  let obj = store;
  const guildId = store.getGuildId();
  const channelId = store.getChannelId();
  channel = channel.getChannel(channelId);
  const voiceStateMetadata = collectGuildAnalyticsMetadata.getVoiceStateMetadata(guildId, channelId, true);
  const obj2 = collectGuildAnalyticsMetadata;
  obj = { location, effect_type: null, effect_detail: null, effect_state: null, channel_id: null, channel_type: null, guild_id: null, voice_state_count: null, video_stream_count: null, media_session_id: null, rtc_connection_id: null, is_animated: null };
  let str = "None";
  if (null != closure_0) {
    str = "Video Background";
  }
  obj[1] = str;
  obj[2] = getEffectDetailAnalyticsName(closure_0);
  obj[3] = Enabled;
  obj[4] = channelId;
  let type;
  if (channel != null) {
    type = channel.type;
  }
  obj[5] = type;
  obj[6] = guildId;
  ({ voice_state_count: obj4[7], video_stream_count: obj4[8] } = voiceStateMetadata);
  obj[9] = obj.getMediaSessionId();
  obj[10] = obj.getRTCConnectionId();
  obj[11] = isAnimatedBackgroundOption(closure_0);
  expandEventProperties.track(AnalyticEvents.VIDEO_EFFECT_UPDATED, obj);
};
export const trackBackgroundOptionAdded = function trackBackgroundOptionAdded(closure_0, is_video, is_from_tenor) {
  let obj = expandEventProperties;
  obj = { is_animated: isAnimatedBackgroundOption(closure_0), is_video, is_from_tenor };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_ADDED, obj);
};
export const trackBackgroundOptionDeleted = function trackBackgroundOptionDeleted(closure_0) {
  let obj = expandEventProperties;
  obj = { is_animated: isAnimatedBackgroundOption(closure_0) };
  obj.track(AnalyticEvents.VIDEO_BACKGROUND_DELETED, obj);
};
export const getVideoBackgroundProtoFromOption = function getVideoBackgroundProtoFromOption(closure_0) {
  if (null == closure_0) {
    let obj = { oneofKind: "sa" };
  } else {
    let tmp = null != closure_0 && typeof closure_0 === "object";
    if (tmp) {
      tmp = "id" in closure_0;
    }
    if (tmp) {
      let flag = closure_0.type === constants.BACKGROUND;
      if (!flag) {
        const type = closure_0.type;
        flag = false;
      }
      tmp = flag;
    }
    if (tmp) {
      obj = { oneofKind: "customAsset", customAsset: null };
      obj = { id: null, assetHash: null };
      ({ id: obj4[0], asset: obj4[1] } = closure_0);
      obj[1] = obj;
    } else if ("blur" === closure_0) {
      const obj1 = { oneofKind: "blur", blur: null };
      obj1[1] = { useBlur: true };
      obj = obj1;
    } else {
      obj = { oneofKind: "presetOption", presetOption: null };
      obj[1] = closure_0;
    }
  }
  return obj;
};
export const getVideoBackgroundOptionFromProto = function getVideoBackgroundOptionFromProto(prop, id) {
  if (null != prop) {
    if (undefined !== prop.oneofKind) {
      const oneofKind = prop.oneofKind;
      if ("customAsset" === oneofKind) {
        const obj = { type: null, id: null, user_id: null, asset: null };
        obj[0] = constants.BACKGROUND;
        obj[1] = prop.customAsset.id;
        obj[2] = id;
        obj[3] = prop.customAsset.assetHash;
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