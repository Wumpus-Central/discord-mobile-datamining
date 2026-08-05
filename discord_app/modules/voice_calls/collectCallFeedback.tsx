import { dispatcher } from "../../Dispatcher.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
// discord_app/modules/voice_calls/collectCallFeedback.tsx
import handleSyncedStoresUpdate from "handleSyncedStoresUpdate";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleAudioRouteChanged from "handleAudioRouteChanged";

const require = arg1;
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(arg0, arg1, arg2, videoEnabled) {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  channel = channel.getChannel(voiceChannelId);
  if (null == arg1) {
    if (null != voiceChannelId) {
      if (null != channel) {
        let obj1 = rTCConnection;
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
        const merged = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.getVoiceStateMetadata(guildId, obj1.getChannelId(), videoEnabled));
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
          let tmp5Result = tmp5(9087);
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
          tmp5Result = tmp5(9084);
          obj1[2] = tmp5Result.getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          obj1[3] = tmp5(9084).getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj1);
          const obj10 = store;
          const tmp5Result1 = tmp5(9084);
          const obj2 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: null };
          obj2[1] = obj;
          dispatcher.dispatch(obj2);
          const obj14 = dispatcher;
        } else {
          const obj3 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: null };
          obj3[1] = obj;
          dispatcher.dispatch(obj3);
          const obj6 = dispatcher;
        }
        const obj5 = collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */;
      }
    }
  }
  arg0();
};