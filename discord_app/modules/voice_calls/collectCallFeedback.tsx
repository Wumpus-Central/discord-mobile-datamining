// === Module 13456: collectCallFeedback ===

// Module 13456 (collectCallFeedback)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 8089 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 8090 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 8086 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserStore from "UserStore" /* 1377 */;
import AudioRouteStore from "AudioRouteStore" /* 9335 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(fn, arg1, arg2, videoEnabled) {
  let duration_muted_ms;
  let tmp5Result3;
  let tmp5Result4;
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
        const obj = { channel_id: null, channel_type: null, guild_id: channel.getGuildId(), rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), duration: RTCConnectionStore.getDuration(), media_session_id: RTCConnectionStore.getMediaSessionId(), duration_muted_ms, output_audio_route_type: AudioRouteStore.getCurrentRouteType() };
        ({ id: obj4.channel_id, type: obj4.channel_type } = channel);
        const getVoiceStateMetadata = AppAnalyticsUtils.getVoiceStateMetadata;
        AppAnalyticsUtils;
        const guildId = RTCConnectionStore.getGuildId();
        const merged = Object.assign(getVoiceStateMetadata(guildId, RTCConnectionStore.getChannelId(), videoEnabled));
        duration_muted_ms = undefined;
        if (voiceDurationStats != null) {
          duration_muted_ms = voiceDurationStats.duration_muted_ms;
        }
        if (duration_muted_ms == null) {
          duration_muted_ms = null;
        }
        fn();
        if (VideoBackgroundStore.hasUsedBackgroundInCall) {
          const obj3 = {};
          const merged1 = Object.assign(obj);
          const tmp5Result = LastUsedVideoBackgroundOption;
          const lastUsedVideoBackgroundOption = tmp5Result.getLastUsedVideoBackgroundOption(UserStore.getCurrentUser());
          const videoDevices = MediaEngineStore.getVideoDevices();
          const tmp23 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
          let name;
          if (tmp23 != null) {
            name = tmp23.name;
          }
          const obj6 = { video_device_name: name, video_hardware_scaling_enabled: MediaEngineStore.getHardwareEncoding(), video_effect_type: tmp5Result3.getEffectAnalyticsType(lastUsedVideoBackgroundOption), video_effect_detail: tmp5Result4.getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption) };
          tmp5Result3 = VideoBackgroundUtils;
          tmp5Result4 = VideoBackgroundUtils;
          const merged2 = Object.assign(obj6);
          const obj7 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj3 };
          const obj13 = DispatcherDefault;
          obj13.dispatch(obj7);
        } else {
          const obj8 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          const obj5 = DispatcherDefault;
          obj5.dispatch(obj8);
        }
      }
    }
  }
  fn();
};