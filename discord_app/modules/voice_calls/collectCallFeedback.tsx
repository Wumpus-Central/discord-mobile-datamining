// === Module 13885: collectCallFeedback ===

// Module 13885 (collectCallFeedback)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 9918 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 9921 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 9917 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4779 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import UserStore from "UserStore" /* 1372 */;
import AudioRouteStore from "AudioRouteStore" /* 9904 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(fn, arg1, arg2, videoEnabled) {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const channel = ChannelStore.getChannel(voiceChannelId);
  if (null == arg1) {
    if (null != voiceChannelId) {
      if (null != channel) {
        const rTCConnection = RTCConnectionStore.getRTCConnection();
        let voiceDurationStats;
        if (rTCConnection != null) {
          voiceDurationStats = rTCConnection.getVoiceDurationStats();
        }
        const obj = { channel_id: null, channel_type: null, guild_id: null, rtc_connection_id: null, duration: null, media_session_id: null };
        ({ id: obj4.channel_id, type: obj4.channel_type } = channel);
        obj.guild_id = channel.getGuildId();
        obj.rtc_connection_id = RTCConnectionStore.getRTCConnectionId();
        obj.duration = RTCConnectionStore.getDuration();
        obj.media_session_id = RTCConnectionStore.getMediaSessionId();
        const guildId = RTCConnectionStore.getGuildId();
        const merged = Object.assign(AppAnalyticsUtils.getVoiceStateMetadata(guildId, RTCConnectionStore.getChannelId(), videoEnabled));
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
          const obj3 = {};
          const merged1 = Object.assign(obj);
          const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.getLastUsedVideoBackgroundOption(UserStore.getCurrentUser());
          const videoDevices = MediaEngineStore.getVideoDevices();
          const tmp22 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
          let name;
          if (tmp22 != null) {
            name = tmp22.name;
          }
          const obj7 = { video_device_name: name, video_hardware_scaling_enabled: MediaEngineStore.getHardwareEncoding(), video_effect_type: null, video_effect_detail: null };
          const tmp5Result = LastUsedVideoBackgroundOption;
          obj7.video_effect_type = VideoBackgroundUtils.getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          const tmp5Result3 = VideoBackgroundUtils;
          obj7.video_effect_detail = VideoBackgroundUtils.getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj7);
          const tmp5Result4 = VideoBackgroundUtils;
          const obj8 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj3 };
          DispatcherDefault.dispatch(obj8);
        } else {
          const obj9 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          DispatcherDefault.dispatch(obj9);
        }
      }
    }
  }
  fn();
};