// discord_app/lib/VideoSpinnerTimer.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import Constants from "../Constants.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import NetworkStore from "../stores/NetworkStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const map = new Map();
let result = size.fileFinishedImporting("lib/VideoSpinnerTimer.tsx");
class VideoSpinnerTimer {
  constructor(_location) {
    const merged = Object.assign({ spinnerVisibleStart: null });
    merged.logger = new LoggerDefault(_location);
    new LoggerDefault(_location);
    return merged;
  }
  onSpinnerStarted() {
    if (null == this.spinnerVisibleStart) {
      const obj = TimeUtils;
      tmp.spinnerVisibleStart = obj.now();
    }
  }
  trackSpinnerDuration(videoSpinnerContext, userId, arg2) {
    const self = this;
    if (null != this.spinnerVisibleStart) {
      let num = map.get(arg2);
      if (num == null) {
        num = 0;
      }
      const sum = num + 1;
      const result = map.set(arg2, sum);
      const obj = TimeUtils;
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
        const obj2 = {
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
        const track = AnalyticsUtilsDefault.track;
        const VIDEO_SPINNER_SHOWN_V2 = AnalyticEvents.VIDEO_SPINNER_SHOWN_V2;
        AnalyticsUtilsDefault;
        track(VIDEO_SPINNER_SHOWN_V2, obj2);
      }
    }
  }
}
const prototype = VideoSpinnerTimer.prototype;

export const VideoSpinnerContext = {
  SELF_VIDEO: "self_video",
  SELF_STREAM: "self_stream",
  REMOTE_VIDEO: "remote_video",
  REMOTE_STREAM: "remote_stream",
  CHANGE_VIDEO_BACKGROUND: "change_video_background",
  REPLAY_VIDEO_STREAM: "replay_video_stream",
};
export { VideoSpinnerTimer };
