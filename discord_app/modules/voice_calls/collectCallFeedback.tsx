// === Module 13283: collectCallFeedback ===

// Module 13283 (collectCallFeedback)
import dispatcherDefault from "dispatcher" /* 709 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4700 */;
import closure_3 from "handleSyncedStoresUpdate" /* 9787 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "_detectH265HardwareDecode" /* 4529 */;
import closure_6 from "createRTCConnection" /* 4554 */;
import closure_7 from "handleConnectionOpen" /* 1981 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import closure_9 from "handleAudioRouteChanged" /* 9775 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(arg0, arg1, arg2, videoEnabled) {
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
        arg0();
        if (obj.hasUsedBackgroundInCall) {
          obj = {};
          const merged1 = Object.assign(obj);
          let tmp5Result = tmp5(9791);
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
          tmp5Result = tmp5(9788);
          obj1[2] = tmp5Result.getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          obj1[3] = tmp5(9788).getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj1);
          const obj10 = store;
          const tmp5Result1 = tmp5(9788);
          const obj2 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: null };
          obj2[1] = obj;
          dispatcherDefault.dispatch(obj2);
          const obj14 = dispatcherDefault;
        } else {
          const obj3 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: null };
          obj3[1] = obj;
          dispatcherDefault.dispatch(obj3);
          const obj6 = dispatcherDefault;
        }
        const obj5 = collectGuildAnalyticsMetadata;
      }
    }
  }
  arg0();
};