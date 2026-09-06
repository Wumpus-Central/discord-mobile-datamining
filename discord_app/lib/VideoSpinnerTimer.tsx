// discord_app/lib/VideoSpinnerTimer.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import NetworkStore from "../stores/NetworkStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("lib/VideoSpinnerTimer.tsx");
class VideoSpinnerTimer {
  constructor(arg0) {
    merged = Object.assign({ spinnerVisibleStart: null });
    tmp2 = new closure_1(closure_2[6])(global);
    merged.logger = tmp2;
    return merged;
  }
}
const prototype = VideoSpinnerTimer.prototype;
prototype["onSpinnerStarted"] = function onSpinnerStarted() {
  if (null == this.spinnerVisibleStart) {
    tmp.spinnerVisibleStart = TimeUtils.now();
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
    let obj = TimeUtils;
    const diff = obj.now() - self.spinnerVisibleStart;
    self.spinnerVisibleStart = null;
    if (diff < 0) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.warn(
        "spinner duration is negative: " +
          diff +
          " ms\n        [" +
          videoSpinnerContext +
          ", count for stream: " +
          sum +
          "]",
      );
    } else {
      const logger2 = self.logger;
      const _HermesInternal2 = HermesInternal;
      logger2.info(
        "spinner visible for " + diff + " ms\n      [" + videoSpinnerContext + ", count for stream: " + sum + "]",
      );
      const guildId = RTCConnectionStore.getGuildId();
      const userVoiceChannelId = VoiceStateStore.getUserVoiceChannelId(guildId, AuthenticationStore.getId());
      const channel = ChannelStore.getChannel(userVoiceChannelId);
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
      obj = {
        video_spinner_context: videoSpinnerContext,
        duration_video_spinner_visible_ms: diff,
        rtc_connection_id: RTCConnectionStore.getRTCConnectionId(),
        media_session_id: RTCConnectionStore.getMediaSessionId(),
        event_count_for_stream: sum,
        guild_id: guildId,
        channel_id: userVoiceChannelId,
        channel_type: str,
        spinning_user_id: userId,
        connection_type: NetworkStore.getType(),
        effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
        service_provider: NetworkStore.getServiceProvider(),
      };
      AnalyticsUtilsDefault.track(AnalyticEvents.VIDEO_SPINNER_SHOWN_V2, obj);
    }
  }
};

export const VideoSpinnerContext = {
  SELF_VIDEO: "self_video",
  SELF_STREAM: "self_stream",
  REMOTE_VIDEO: "remote_video",
  REMOTE_STREAM: "remote_stream",
  CHANGE_VIDEO_BACKGROUND: "change_video_background",
  REPLAY_VIDEO_STREAM: "replay_video_stream",
};
export { VideoSpinnerTimer };
