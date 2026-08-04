import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import createRTCConnection from "createRTCConnection";
import updateVoiceState from "updateVoiceState";
import { AnalyticEvents } from "ME";

const require = arg1;
const map = new Map();
let result = require("handleConnectionInfoChange").fileFinishedImporting("lib/VideoSpinnerTimer.tsx");
class VideoSpinnerTimer {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    tmp2 = new require("timestamp")(global);
    obj.logger = tmp2;
    return obj;
  }
}
const prototype = VideoSpinnerTimer.prototype;
prototype["onSpinnerStarted"] = function onSpinnerStarted() {
  if (null == this.spinnerVisibleStart) {
    tmp.spinnerVisibleStart = require(4360) /* sleep */.now();
    const obj = require(4360) /* sleep */;
  }
};
prototype["trackSpinnerDuration"] = function trackSpinnerDuration(videoSpinnerContext, userId, arg2) {
  const self = this;
  if (null != this.spinnerVisibleStart) {
    let num = map.get(arg2);
    if (num == null) {
      num = 0;
    }
    const sum = num + 1;
    const result = map.set(arg2, sum);
    let obj = require(4360) /* sleep */;
    const diff = obj.now() - self.spinnerVisibleStart;
    self.spinnerVisibleStart = null;
    if (diff < 0) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("spinner duration is negative: " + diff + " ms\n        [" + videoSpinnerContext + ", count for stream: " + sum + "]");
    } else {
      const logger2 = self.logger;
      const _HermesInternal2 = HermesInternal;
      logger2.info("spinner visible for " + diff + " ms\n      [" + videoSpinnerContext + ", count for stream: " + sum + "]");
      guildId = guildId.getGuildId();
      userVoiceChannelId = userVoiceChannelId.getUserVoiceChannelId(guildId, id.getId());
      channel = channel.getChannel(userVoiceChannelId);
      let str = null;
      if (null != channel) {
        str = "guild_voice";
        if (!channel.isGuildVoice()) {
          str = "is_stage_channel";
          if (!channel.isGuildStageVoice()) {
            str = "dm";
            if (!channel.isDM()) {
              str = null;
              if (channel.isGroupDM()) {
                str = "group_dm";
              }
            }
          }
        }
      }
      obj = { video_spinner_context: null, duration_video_spinner_visible_ms: null, rtc_connection_id: null, media_session_id: null, event_count_for_stream: null, guild_id: null, channel_id: null, channel_type: null, spinning_user_id: null, connection_type: null, effective_connection_speed: null, service_provider: null };
      obj[0] = videoSpinnerContext;
      obj[1] = diff;
      obj[2] = guildId.getRTCConnectionId();
      obj[3] = guildId.getMediaSessionId();
      obj[4] = sum;
      obj[5] = guildId;
      obj[6] = userVoiceChannelId;
      obj[7] = str;
      obj[8] = userId;
      obj[9] = store.getType();
      obj[10] = store.getEffectiveConnectionSpeed();
      obj[11] = store.getServiceProvider();
      importDefault(698).track(AnalyticEvents.VIDEO_SPINNER_SHOWN_V2, obj);
      const obj2 = importDefault(698);
    }
    const obj4 = map;
  }
};

export const VideoSpinnerContext = { SELF_VIDEO: "self_video", SELF_STREAM: "self_stream", REMOTE_VIDEO: "remote_video", REMOTE_STREAM: "remote_stream", CHANGE_VIDEO_BACKGROUND: "change_video_background", REPLAY_VIDEO_STREAM: "replay_video_stream" };
export { VideoSpinnerTimer };