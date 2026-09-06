// === Module 13626: collectCallFeedback ===

// Module 13626 (collectCallFeedback)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 9096 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import AudioRouteStore from "AudioRouteStore" /* 9083 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(fn, arg1, arg2, videoEnabled) {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const channel = ChannelStore.getChannel(voiceChannelId);
  if (null == arg1) {
    if (null != voiceChannelId) {
      if (null != channel) {
        let obj1 = RTCConnectionStore;
        const rTCConnection = RTCConnectionStore.getRTCConnection();
        let voiceDurationStats;
        if (rTCConnection != null) {
          voiceDurationStats = rTCConnection.getVoiceDurationStats();
        }
        let obj = { channel_id: null, channel_type: null, guild_id: null, rtc_connection_id: null, duration: null, media_session_id: null };
        ({ id: obj4.channel_id, type: obj4.channel_type } = channel);
        obj.guild_id = channel.getGuildId();
        obj.rtc_connection_id = obj1.getRTCConnectionId();
        obj.duration = obj1.getDuration();
        obj.media_session_id = obj1.getMediaSessionId();
        const guildId = obj1.getGuildId();
        const merged = Object.assign(AppAnalyticsUtils.getVoiceStateMetadata(guildId, obj1.getChannelId(), videoEnabled));
        let duration_muted_ms;
        if (voiceDurationStats != null) {
          duration_muted_ms = voiceDurationStats.duration_muted_ms;
        }
        if (duration_muted_ms == null) {
          duration_muted_ms = null;
        }
        obj.duration_muted_ms = duration_muted_ms;
        obj.output_audio_route_type = AudioRouteStore.getCurrentRouteType();
        fn();
        if (VideoBackgroundStore.hasUsedBackgroundInCall) {
          obj = {};
          const merged1 = Object.assign(obj);
          let tmp5Result = tmp5(9100);
          const lastUsedVideoBackgroundOption = tmp5Result.getLastUsedVideoBackgroundOption(UserStore.getCurrentUser());
          const videoDevices = MediaEngineStore.getVideoDevices();
          const tmp22 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
          let name;
          if (tmp22 != null) {
            name = tmp22.name;
          }
          obj1 = { video_device_name: name, video_hardware_scaling_enabled: MediaEngineStore.getHardwareEncoding(), video_effect_type: null, video_effect_detail: null };
          tmp5Result = tmp5(9097);
          obj1.video_effect_type = tmp5Result.getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          obj1.video_effect_detail = tmp5(9097).getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj1);
          const tmp5Result1 = tmp5(9097);
          const obj2 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj };
          DispatcherDefault.dispatch(obj2);
        } else {
          const obj3 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          DispatcherDefault.dispatch(obj3);
        }
      }
    }
  }
  fn();
};