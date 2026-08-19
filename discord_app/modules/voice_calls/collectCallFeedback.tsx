// discord_app/modules/voice_calls/collectCallFeedback.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import isAnimatedBackgroundOption from "../video_backgrounds/VideoBackgroundUtils.tsx";
import getLastUsedVideoBackgroundOption from "../video_backgrounds/LastUsedVideoBackgroundOption.tsx";
import handleSyncedStoresUpdate from "../video_backgrounds/VideoBackgroundStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import handleAudioRouteChanged from "AudioRouteStore.native.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(fn, arg1, arg2, videoEnabled) {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  channel = channel.getChannel(voiceChannelId);
  if (null == arg1) {
    if (null != voiceChannelId) {
      if (null != channel) {
        obj1 = rTCConnection;
        rTCConnection = rTCConnection.getRTCConnection();
        let voiceDurationStats;
        if (rTCConnection != null) {
          voiceDurationStats = rTCConnection.getVoiceDurationStats();
        }
        let obj = { channel_id: null, channel_type: null, guild_id: null, rtc_connection_id: null, duration: null, media_session_id: null };
        ({ id: obj4[0], type: obj4[1] } = channel);
        obj[2] = channel.getGuildId();
        obj[3] = obj1.getRTCConnectionId();
        obj[4] = obj1.getDuration();
        obj[5] = obj1.getMediaSessionId();
        const guildId = obj1.getGuildId();
        const merged = Object.assign(collectGuildAnalyticsMetadata.getVoiceStateMetadata(guildId, obj1.getChannelId(), videoEnabled));
        let duration_muted_ms;
        if (voiceDurationStats != null) {
          duration_muted_ms = voiceDurationStats.duration_muted_ms;
        }
        if (duration_muted_ms == null) {
          duration_muted_ms = null;
        }
        obj.duration_muted_ms = duration_muted_ms;
        obj.output_audio_route_type = currentRouteType.getCurrentRouteType();
        fn();
        if (obj.hasUsedBackgroundInCall) {
          obj = {};
          const merged1 = Object.assign(obj);
          let tmp5Result = getLastUsedVideoBackgroundOption;
          const lastUsedVideoBackgroundOption = tmp5Result.getLastUsedVideoBackgroundOption(currentUser.getCurrentUser());
          const videoDevices = store.getVideoDevices();
          const tmp22 = videoDevices[store.getVideoDeviceId(store)];
          let name;
          if (tmp22 != null) {
            name = tmp22.name;
          }
          obj1 = { video_device_name: null, video_hardware_scaling_enabled: null, video_effect_type: null, video_effect_detail: null };
          obj1[0] = name;
          obj1[1] = store.getHardwareEncoding();
          tmp5Result = isAnimatedBackgroundOption;
          obj1[2] = tmp5Result.getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          obj1[3] = isAnimatedBackgroundOption.getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj1);
          const tmp5Result1 = isAnimatedBackgroundOption;
          const obj2 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: null };
          obj2[1] = obj;
          dispatcherDefault.dispatch(obj2);
        } else {
          const obj3 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: null };
          obj3[1] = obj;
          dispatcherDefault.dispatch(obj3);
        }
      }
    }
  }
  fn();
};