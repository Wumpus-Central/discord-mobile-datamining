// discord_app/modules/go_live/StreamRTCConnection.tsx
import _migrateDefaultStorage from "_migrateDefaultStorage";
import { getSystemAnalyticsInfo } from "getSystemAnalyticsInfo";
import ApplicationStreamPresets from "ApplicationStreamPresets";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import getHookError from "getHookError";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import ME from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import "getEventHistoryString";
import { RTCConnectionEvent } from "../../lib/RTCConnectionEvent.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { removeExecutablePathPrefix } from "../game_detection/GameAnalyticsUtils.tsx";
import { getSoundshareAnalyticsContext } from "utils/getSoundshareAnalyticsContext.tsx";
import { getStreamSourceMetadata } from "utils/getStreamSourceMetadata.native.tsx";
import { isStreamKey } from "utils/StreamKeyUtils.tsx";

let closure_14;
let closure_15;
let map1;
const require = arg1;
({ AnalyticEvents: map1, MediaEngineHookTypes: closure_14, RTCConnectionStates: closure_15 } = ME);
let closure_17 = 5 * require("set").Millis.SECOND;
let closure_18 = { DETACHED: 0, [0]: "DETACHED", WAITING: 1, [1]: "WAITING", ATTACHED: 2, [2]: "ATTACHED", STARTED: 3, [3]: "STARTED", PLAYING: 4, [4]: "PLAYING", SILENCE: 5, [5]: "SILENCE" };
class StreamRTCConnection extends tmp3 {
  constructor(arg0) {
    ({ sessionId, streamKey, serverId, initialLayout, channelId } = global);
    decodeStreamKey = undefined;
    ({ analyticsContext, parentMediaSessionId } = global);
    obj = require("isStreamKey");
    decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    guildId = decodeStreamKeyResult.guildId;
    obj = { userId: null, sessionId: null, guildId: null, channelId: null, context: null, streamServerId: null, streamChannelId: null, parentMediaSessionId: null, joinVoiceId: null };
    id = getSystemAnalyticsInfo.getId();
    obj[0] = id;
    obj[1] = sessionId;
    obj[2] = guildId;
    obj[3] = decodeStreamKeyResult.channelId;
    STREAM = MediaEngineContextTypes.STREAM;
    obj[4] = STREAM;
    obj[5] = serverId;
    obj[6] = channelId;
    obj[7] = parentMediaSessionId;
    tmp = new tmp(obj, tmp2, getSystemAnalyticsInfo, id, sessionId, guildId, STREAM, serverId, channelId, new.target, tmp, new.target, decodeStreamKey, initialLayout);
    // ThrowIfThisInitialized (0x7c)
    decodeStreamKey = tmp;
    tmp5 = new require("traceEvent")();
    tmp.soundshareStats = tmp5;
    tmp._firstFrameDelivered = false;
    tmp.screenshareFinishedCount = 0;
    tmp.soundshareFailuresReported = {};
    timeout = new require("start").Timeout();
    tmp.errorTimer = timeout;
    tmp.streamContext = decodeStreamKeyResult;
    tmp.streamKey = streamKey;
    tmp7 = new require("start")(initialLayout, tmp.isOwner);
    tmp.videoStreamStats = tmp7;
    tmp.analyticsContext = analyticsContext;
    obj4 = require("apply");
    tmp.updateVideoStreamId = obj4.debounce((streamId, rtcServerId) => {
      let channelId;
      let guildId;
      let ownerId;
      ({ guildId, channelId, ownerId } = tmp4(tmp3.streamKey));
      const tmp4Result = tmp4(tmp3.streamKey);
      obj = { type: "RTC_CONNECTION_VIDEO", guildId, channelId, userId: ownerId, streamId, rtcServerId, mediaEngineConnectionId: obj.getMediaEngineConnectionId(), context: outer1_16.STREAM };
      outer1_1(tmp2[19]).dispatch(obj);
      return tmp;
    }, 200);
    videoStreamStats = tmp.videoStreamStats;
    startResult = videoStreamStats.start();
    initializeEventsResult = tmp.initializeEvents();
    return tmp;
  }
  destroy(arg0) {
    videoStreamStats = this.videoStreamStats;
    stopResult = videoStreamStats.stop();
    trackVideoEndStatsResult = this.trackVideoEndStats(global);
    updateVideoStreamId = this.updateVideoStreamId;
    cancelResult = updateVideoStreamId.cancel();
    updateVideoStreamIdResult = this.updateVideoStreamId(null, null);
    updateVideoStreamId2 = this.updateVideoStreamId;
    flushResult = updateVideoStreamId2.flush();
    errorTimer = this.errorTimer;
    stopResult1 = errorTimer.stop();
    destroyResult = super.destroy();
    return;
  }
}
const prototype = StreamRTCConnection.prototype;
Object.defineProperty(prototype, "isOwner", {
  get: function isOwner() {
    return store.getId() === this.streamContext.ownerId;
  },
  set: undefined
});
prototype["streamUpdate"] = function streamUpdate(arg0) {
  const _videoQuality = this._videoQuality;
  if (null != _videoQuality) {
    if (arg0) {
      _videoQuality.pause();
    } else {
      _videoQuality.resume();
    }
  }
};
prototype["layoutChange"] = function layoutChange(arg0) {
  const videoStreamStats = this.videoStreamStats;
  videoStreamStats.layoutChange(arg0);
};
prototype["autoQualityChange"] = function autoQualityChange() {
  const videoStreamStats = this.videoStreamStats;
  videoStreamStats.autoQualityChange();
};
prototype["getVideoStats"] = function getVideoStats() {
  const _videoQuality = this._videoQuality;
  if (null != _videoQuality) {
    if (this.isOwner) {
      let first = _videoQuality.getOutboundStats()[0];
      if (first == null) {
        first = {};
      }
      let inboundStats = first;
    } else {
      inboundStats = _videoQuality.getInboundStats(tmp);
      if (inboundStats == null) {
        inboundStats = {};
      }
    }
    ({ duration: obj3[0], avg_bitrate: obj3[1], avg_fps: obj3[2], avg_resolution: obj3[3], inbound_bitrate_estimate_percentile99: obj3[4] } = inboundStats);
    return { duration: null, avg_bitrate: null, avg_fps: null, avg_resolution: null, inbound_bitrate_estimate_percentile99: null };
  } else {
    return null;
  }
};
prototype["getRegion"] = function getRegion() {
  return this.analyticsContext.streamRegion;
};
prototype["getMaxViewers"] = function getMaxViewers() {
  return this.analyticsContext.maxViewers;
};
prototype["getVoiceParticipantType"] = function getVoiceParticipantType() {
  let str = "receiver";
  if (this.isOwner) {
    str = "streamer";
  }
  return str;
};
prototype["initializeEvents"] = function initializeEvents() {
  const self = this;
  const _require = false;
  this.on(_RTCConnectionEvent.RTCConnectionEvent.State, (state) => {
    let obj = self(outer1_2[19]);
    obj = { type: "RTC_CONNECTION_STATE", state };
    let merged = Object.assign(arg1);
    let merged1 = Object.assign(arg2);
    obj.streamKey = self.streamKey;
    obj.dispatch(obj);
    if (state === outer1_15.RTC_CONNECTED) {
      const _connection8 = tmp4._connection;
      if (_connection8 != null) {
        _connection8.on(callback(tmp[21]).BaseConnectionEvent.ScreenshareFinish, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25) => {
          let closure_26;
          let closure_27;
          let closure_28;
          let closure_29;
          let closure_0 = arg0;
          const store = arg1;
          let closure_2 = arg2;
          let _migrateDefaultStorage = arg3;
          let closure_4 = arg4;
          let ApplicationStreamPresets = arg5;
          let fetchFingerprint = arg6;
          let ensureGuildLoaded = arg7;
          let getHookError = arg8;
          let _detectH265HardwareDecode = arg9;
          let handleConnectionInfoChange = arg10;
          let createRTCConnection = arg11;
          let initialize = arg12;
          let closure_13 = arg13;
          let closure_14 = arg14;
          let closure_15 = arg15;
          let closure_16 = arg16;
          let closure_17 = arg17;
          let closure_18 = arg18;
          let closure_19 = arg19;
          let closure_20 = arg20;
          let closure_21 = arg21;
          let closure_22 = arg22;
          let closure_23 = arg23;
          let closure_24 = arg24;
          let closure_25 = arg25;
          let analyticsContext = store.analyticsContext;
          store.screenshareFinishedCount = store.screenshareFinishedCount + 1;
          const streamApplicationFromHistory = analyticsContext.getStreamApplicationFromHistory(store.screenshareFinishedCount);
          const runningGameAnalytics = outer1_0(outer1_2[22]).getRunningGameAnalytics(streamApplicationFromHistory);
          ({ gameName: closure_26, gameId: closure_27, exe: closure_28, distributor: closure_29 } = runningGameAnalytics);
          const mediaSessionId = store.getMediaSessionId();
          const rTCConnectionId = store.getRTCConnectionId();
          let obj = outer1_0(outer1_2[22]);
          outer1_4().then((arg0) => {
            let tmp = null;
            if (null != arg0) {
              let obj = { cpu_brand: null, cpu_vendor: null, cpu_memory: null, gpu_brand: null, gpu_memory: null };
              ({ cpu_brand: obj[0], cpu_vendor: obj[1], cpu_memory: obj[2], gpu_brand: obj[3], gpu_memory: obj[4] } = arg0);
              tmp = obj;
            }
            obj = { screenshare_frames: closure_0, videohook_frames: closure_1, hybrid_dxgi_frames: closure_2, hybrid_gdi_frames: _migrateDefaultStorage, hybrid_videohook_frames: closure_4, hybrid_graphics_capture_frames: ApplicationStreamPresets, hybrid_capture_method_switches: fetchFingerprint, hybrid_gdi_bitblt_frames: ensureGuildLoaded, hybrid_gdi_printwindow_frames: getHookError, hybrid_graphics_capture_frames_unique: _detectH265HardwareDecode, hybrid_dxgi_frames_unique: handleConnectionInfoChange, hybrid_videohook_frames_unique: createRTCConnection, hybrid_gdi_bitblt_frames_unique: initialize, hybrid_gdi_printwindow_frames_unique: closure_13, skip_history_json: closure_14, quartz_frames: closure_15, screencapturekit_frames: closure_19, go_live_camera_frames: closure_18, total_frames: null, total_frames_unique: null, desktop_capturer_type: null, media_session_id: null, rtc_connection_id: null, context: null, activity: null, soundshare_session: null, picker_type_used: null, duration: null, share_game_name: null, share_game_id: null, share_game_exe: null, share_game_distributor: null, hdr_frames_capable: null, hdr_frames: null, discord_is_elevated: null, target_window_elevated: null, pipewire_frames: null, x11_frames: null, videohook_backend: null };
            let num = closure_0;
            let num2 = closure_1;
            let num3 = closure_2;
            let num4 = _migrateDefaultStorage;
            let num5 = closure_4;
            let num6 = ApplicationStreamPresets;
            let num7 = _detectH265HardwareDecode;
            let num8 = handleConnectionInfoChange;
            let num9 = createRTCConnection;
            let num10 = initialize;
            let num11 = closure_13;
            let num12 = closure_15;
            let num13 = closure_19;
            let num14 = closure_18;
            if (closure_0 == null) {
              num = 0;
            }
            if (num2 == null) {
              num2 = 0;
            }
            const sum = num + num2;
            if (num3 == null) {
              num3 = 0;
            }
            const sum1 = sum + num3;
            if (num4 == null) {
              num4 = 0;
            }
            const sum2 = sum1 + num4;
            if (num5 == null) {
              num5 = 0;
            }
            const sum3 = sum2 + num5;
            if (num6 == null) {
              num6 = 0;
            }
            const sum4 = sum3 + num6;
            if (num12 == null) {
              num12 = 0;
            }
            const sum5 = sum4 + num12;
            if (num13 == null) {
              num13 = 0;
            }
            const sum6 = sum5 + num13;
            if (num14 == null) {
              num14 = 0;
            }
            let num15 = closure_24;
            const sum7 = sum6 + num14;
            if (closure_24 == null) {
              num15 = 0;
            }
            let num16 = closure_23;
            const sum8 = sum7 + num15;
            if (closure_23 == null) {
              num16 = 0;
            }
            obj[18] = sum8 + num16;
            if (num7 == null) {
              num7 = 0;
            }
            if (num8 == null) {
              num8 = 0;
            }
            const sum9 = num7 + num8;
            if (num9 == null) {
              num9 = 0;
            }
            const sum10 = sum9 + num9;
            if (num10 == null) {
              num10 = 0;
            }
            const sum11 = sum10 + num10;
            if (num11 == null) {
              num11 = 0;
            }
            obj[19] = sum11 + num11;
            obj[20] = closure_16;
            obj[21] = closure_30;
            obj[22] = closure_31;
            obj[23] = outer2_16.STREAM;
            obj[24] = closure_17;
            const soundshareStats = closure_1.soundshareStats;
            obj[25] = soundshareStats.getStats().soundshare_last_session;
            let str = "internal";
            if (null != closure_1.analyticsContext.nativePickerStyleUsed) {
              str = "native";
            }
            obj[26] = str;
            const analyticsContext = closure_1.analyticsContext;
            obj[27] = analyticsContext.getDuration();
            obj[28] = closure_26;
            obj[29] = closure_27;
            obj[30] = closure_28;
            obj[31] = closure_29;
            obj[32] = closure_20;
            obj[33] = closure_21;
            const obj2 = outer2_1(outer2_2[23]);
            const tmp12 = closure_24;
            const tmp14 = closure_23;
            const tmp18 = closure_1;
            const tmp2 = outer2_1;
            const tmp3 = outer2_2;
            obj[34] = outer2_1(outer2_2[24]).getDiscordIsElevated();
            obj[35] = closure_22;
            obj[36] = tmp14;
            obj[37] = tmp12;
            obj[38] = closure_25;
            const merged = Object.assign(tmp);
            obj2.track(outer2_13.SCREENSHARE_FINISHED, obj);
          });
        });
      }
      const _connection = tmp4._connection;
      if (_connection != null) {
        _connection.on(callback(tmp[21]).BaseConnectionEvent.SoundshareAttached, () => {
          const goLiveSource = outer1_9.getGoLiveSource();
          let desktopSource;
          if (goLiveSource != null) {
            desktopSource = goLiveSource.desktopSource;
          }
          if (null != desktopSource) {
            let obj = outer1_1(outer1_2[23]);
            let desktopSource1;
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            obj = {};
            const merged = Object.assign(outer1_1(outer1_2[25])(desktopSource1));
            const merged1 = Object.assign(store.getSoundshareAnalyticsProperties());
            obj.track(outer1_13.SOUNDSHARE_ATTACHED, obj);
            const tmp6 = outer1_1(outer1_2[25]);
          }
        });
      }
      const _connection2 = tmp4._connection;
      if (_connection2 != null) {
        _connection2.on(callback(tmp[21]).BaseConnectionEvent.SoundshareFailed, (arg0) => {
          let failureCode;
          let failureReason;
          let willRetry;
          ({ failureCode, failureReason, willRetry } = arg0);
          const goLiveSource = outer1_9.getGoLiveSource();
          let desktopSource;
          if (goLiveSource != null) {
            desktopSource = goLiveSource.desktopSource;
          }
          const result = store.reportSoundshareFailure(desktopSource, failureCode, failureReason, willRetry);
        });
      }
      const _connection3 = tmp4._connection;
      if (_connection3 != null) {
        _connection3.on(callback(tmp[21]).BaseConnectionEvent.SoundshareSpeaking, () => {
          const goLiveSource = outer1_9.getGoLiveSource();
          let desktopSource;
          if (goLiveSource != null) {
            desktopSource = goLiveSource.desktopSource;
          }
          if (null != desktopSource) {
            let desktopSource1;
            const obj3 = outer1_1(outer1_2[23]);
            const tmp13 = outer1_1;
            const tmp14 = outer1_2;
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            const obj = {};
            const merged = Object.assign(outer1_1(outer1_2[25])(desktopSource1));
            const merged1 = Object.assign(store.getSoundshareAnalyticsProperties());
            obj3.track(outer1_13.SOUNDSHARE_TRANSMITTING, obj);
            if (null != outer1_8.getHookError(outer1_14.SOUND)) {
              tmp13(tmp14[19]).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              const tmp13Result = tmp13(tmp14[19]);
            }
            const tmp16 = outer1_1(outer1_2[25]);
          }
        });
      }
      const _connection4 = tmp4._connection;
      if (_connection4 != null) {
        _connection4.on(callback(tmp[21]).BaseConnectionEvent.SoundshareTrace, (type) => {
          let code;
          let reason;
          let retry;
          const goLiveSource = outer1_9.getGoLiveSource();
          let obj = store;
          const soundshareStats = store.soundshareStats;
          let soundshareSession;
          if (goLiveSource != null) {
            let desktopSource = goLiveSource.desktopSource;
            if (desktopSource != null) {
              soundshareSession = desktopSource.soundshareSession;
            }
          }
          soundshareStats.traceEvent(soundshareSession, type);
          type = type.type;
          if ("soundshare_attach_requested" === type) {
            const errorTimer2 = obj.errorTimer;
            errorTimer2.start(outer1_17, () => {
              callback(table[19]).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: "Sound Hook Failed" });
            });
          } else if ("soundshare_recv_failed" === type) {
            ({ reason, code, retry } = type);
            desktopSource = undefined;
            if (goLiveSource != null) {
              desktopSource = goLiveSource.desktopSource;
            }
            if (null != desktopSource) {
              let desktopSource1;
              if (goLiveSource != null) {
                desktopSource1 = goLiveSource.desktopSource;
              }
              const result = obj.reportSoundshareFailure(desktopSource1, code, reason, retry);
              if (!retry) {
                const errorTimer = obj.errorTimer;
                errorTimer.stop();
                obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: null, errorCode: null };
                obj[1] = reason;
                obj[2] = code;
                outer1_1(outer1_2[19]).dispatch(obj);
                const obj2 = outer1_1(outer1_2[19]);
              }
            }
          } else if ("soundshare_state_transition" === type) {
            if (type.newState === outer1_18.PLAYING) {
              const errorTimer3 = obj.errorTimer;
              errorTimer3.stop();
              outer1_1(outer1_2[19]).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              const obj4 = outer1_1(outer1_2[19]);
            }
          }
        });
      }
      const _connection5 = tmp4._connection;
      if (_connection5 != null) {
        _connection5.on(callback(tmp[21]).BaseConnectionEvent.FirstFrameStats, (remoteVideoStreamCreatedTimestamp) => {
          let obj = store;
          if (!store._firstFrameDelivered) {
            obj._firstFrameDelivered = true;
            const streamAnalyticsProperties = obj.getStreamAnalyticsProperties();
            obj = { guild_id: null, channel_id: null, rtc_connection_id: null, media_session_id: null, parent_media_session_id: null, num_viewers: null, time_connected_to_first_frame_delivered: null, time_total_to_first_frame: null, time_remote_user_to_video_stream_created: null, time_video_stream_created_to_video_data_received: null, time_video_data_received_to_video_source_delivered_frame: null, time_remote_user_to_mls_external_sender_updated: null, time_remote_user_to_secure_frame_remote_key_ratchet_set: null, time_remote_user_to_secure_frame_local_key_ratchet_set: null, time_remote_user_to_first_frame_decrypted: null };
            ({ guild_id: obj3[0], channel_id: obj3[1], rtc_connection_id: obj3[2], media_session_id: obj3[3], parent_media_session_id: obj3[4] } = streamAnalyticsProperties);
            obj[5] = obj.analyticsContext.numViewers;
            obj[6] = obj.getDuration();
            const obj2 = outer1_1(outer1_2[23]);
            const obj4 = outer1_0(outer1_2[26]);
            obj[7] = outer1_0(outer1_2[26]).now() - obj.getCreatedTime();
            let NumberResult = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
              NumberResult = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number = Number;
                NumberResult = Number(remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj[8] = NumberResult;
            let NumberResult1 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
              NumberResult1 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
                const _Number2 = Number;
                NumberResult1 = Number(remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp - remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp);
              }
            }
            obj[9] = NumberResult1;
            let NumberResult2 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp) {
              NumberResult2 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
                const _Number3 = Number;
                NumberResult2 = Number(remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp - remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp);
              }
            }
            obj[10] = NumberResult2;
            let NumberResult3 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp) {
              NumberResult3 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number4 = Number;
                NumberResult3 = Number(remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj[11] = NumberResult3;
            let NumberResult4 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
              NumberResult4 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number5 = Number;
                NumberResult4 = Number(remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj[12] = NumberResult4;
            let NumberResult5 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
              NumberResult5 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number6 = Number;
                NumberResult5 = Number(remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj[13] = NumberResult5;
            let NumberResult6 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp) {
              NumberResult6 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number7 = Number;
                NumberResult6 = Number(remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj[14] = NumberResult6;
            obj2.track(outer1_13.RECEIVER_FIRST_FRAME_DELIVERED, obj);
            const nowResult = outer1_0(outer1_2[26]).now();
          }
        });
      }
      const _connection6 = tmp4._connection;
      if (_connection6 != null) {
        _connection6.on(callback(tmp[21]).BaseConnectionEvent.FirstFrameEncryptedStats, (videoReceiversSetTimestamp) => {
          const streamAnalyticsProperties = store.getStreamAnalyticsProperties();
          let obj = outer1_1(outer1_2[23]);
          obj = { guild_id: streamAnalyticsProperties.guild_id, channel_id: streamAnalyticsProperties.channel_id, rtc_connection_id: streamAnalyticsProperties.rtc_connection_id, media_session_id: streamAnalyticsProperties.media_session_id, parent_media_session_id: streamAnalyticsProperties.parent_media_session_id, time_local_user_to_video_receivers_set: null, time_local_user_to_mls_external_sender_updated: null, time_local_user_to_secure_frame_remote_key_ratchet_set: null, time_local_user_to_secure_frame_local_key_ratchet_set: null, time_local_user_to_first_frame_encrypted: null };
          let NumberResult = null;
          if (undefined !== videoReceiversSetTimestamp.videoReceiversSetTimestamp) {
            NumberResult = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number = Number;
              NumberResult = Number(videoReceiversSetTimestamp.videoReceiversSetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj[5] = NumberResult;
          let NumberResult1 = null;
          if (undefined !== videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp) {
            NumberResult1 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number2 = Number;
              NumberResult1 = Number(videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj[6] = NumberResult1;
          let NumberResult2 = null;
          if (undefined !== videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
            NumberResult2 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number3 = Number;
              NumberResult2 = Number(videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj[7] = NumberResult2;
          let NumberResult3 = null;
          if (undefined !== videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
            NumberResult3 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number4 = Number;
              NumberResult3 = Number(videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj[8] = NumberResult3;
          let NumberResult4 = null;
          if (undefined !== videoReceiversSetTimestamp.firstFrameEncryptedTimestamp) {
            NumberResult4 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number5 = Number;
              NumberResult4 = Number(videoReceiversSetTimestamp.firstFrameEncryptedTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj[9] = NumberResult4;
          obj.track(outer1_13.STREAMER_FIRST_FRAME_ENCRYPTED, obj);
        });
      }
      const _connection7 = tmp4._connection;
      if (_connection7 != null) {
        _connection7.on(callback(tmp[21]).BaseConnectionEvent.Destroy, () => {
          const errorTimer = store.errorTimer;
          errorTimer.stop();
        });
      }
    }
  });
  this.on(_RTCConnectionEvent.RTCConnectionEvent.Video, (arg0, arg1, arg2, arg3, arg4) => {
    const decodeStreamKeyResult = callback(outer1_2[16]).decodeStreamKey(self.streamKey);
    let tmp2 = decodeStreamKeyResult.guildId === arg0;
    if (tmp2) {
      tmp2 = decodeStreamKeyResult.channelId === arg1;
    }
    if (tmp2) {
      tmp2 = decodeStreamKeyResult.ownerId === arg2;
    }
    if (tmp2) {
      if (!tmp6) {
        obj2.trackVideoStartStats();
        callback = true;
      }
      obj2.updateVideoStreamId(arg3, arg4);
      tmp6 = null == obj2.getMediaSessionId() || callback;
    }
  });
  this.on(_RTCConnectionEvent.RTCConnectionEvent.VideoSourceQualityChanged, (guildId, channelId, senderUserId, maxResolution, maxFrameRate, context) => {
    let obj = self(709);
    obj = { type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", guildId, channelId, senderUserId, maxResolution, maxFrameRate, context };
    obj.dispatch(obj);
  });
  this.on(_RTCConnectionEvent.RTCConnectionEvent.SecureFramesUpdate, () => {
    self(709).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
  });
  this.on(_RTCConnectionEvent.RTCConnectionEvent.RosterMapUpdate, (userIds) => {
    let obj = self(709);
    obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds };
    obj.dispatch(obj);
  });
};
prototype["reportSoundshareFailure"] = function reportSoundshareFailure(desktopSource, code, failureReason, retry) {
  let str;
  if (desktopSource != null) {
    str = desktopSource.soundshareSession;
  }
  if (str == null) {
    str = "";
  }
  const self = this;
  if (null == this.soundshareFailuresReported[str]) {
    const _Set = Set;
    const set = new Set();
    self.soundshareFailuresReported[str] = set;
  }
  let tmp6 = null != code;
  if (tmp6) {
    let obj = self.soundshareFailuresReported[str];
    tmp6 = !obj.has(code);
  }
  if (tmp6) {
    self.soundshareFailuresReported[str].add(code);
    const obj2 = self.soundshareFailuresReported[str];
  }
  if (tmp8) {
    obj = { soundshare_failure_code: null, soundshare_failure_reason: null, soundshare_failure_will_retry: null };
    obj[0] = code;
    obj[1] = failureReason;
    obj[2] = retry;
    const merged = Object.assign(getSoundshareAnalyticsContext(desktopSource));
    const merged1 = Object.assign(self.getSoundshareAnalyticsProperties());
    expandEventProperties.track(constants.SOUNDSHARE_FAILED, obj);
    const obj3 = expandEventProperties;
  }
};
prototype["getStreamAnalyticsProperties"] = function getStreamAnalyticsProperties() {
  let actionContext;
  let analyticsContext;
  let distributor;
  let exe;
  let gameId;
  let gameMetadata;
  let gameName;
  let guildId;
  let ownerId;
  let sku;
  let streamApplication;
  let streamContext;
  let streamRegion;
  let streamSourceType;
  const self = this;
  ({ analyticsContext, streamContext } = this);
  ({ streamRegion, streamApplication, streamSourceType, actionContext } = analyticsContext);
  ({ ownerId, guildId } = streamContext);
  region = region.getRegion(hostname.getHostname());
  let obj = removeExecutablePathPrefix;
  const runningGameAnalytics = obj.getRunningGameAnalytics(streamApplication);
  obj = { channel_id: this.channelId, rtc_connection_id: this.getRTCConnectionId(), media_session_id: this.getMediaSessionId(), parent_media_session_id: this.parentMediaSessionId, sender_user_id: ownerId, context: MediaEngineContextTypes.STREAM, guild_id: guildId, stream_region: streamRegion, stream_source_type: streamSourceType, guild_region: region, participant_type: null, share_application_name: null, share_application_id: null, share_application_executable: null, share_application_distributor: null, share_application_distributor_game_id: null, share_application_game_metadata: null, video_layout: null, client_event_source: null, voice_backend_version: null, rtc_worker_backend_version: null };
  ({ gameName, gameId, exe, distributor, sku, gameMetadata } = runningGameAnalytics);
  let str = "receiver";
  if (this.isOwner) {
    str = "streamer";
  }
  obj[10] = str;
  obj[11] = gameName;
  obj[12] = gameId;
  obj[13] = exe;
  obj[14] = distributor;
  obj[15] = sku;
  obj[16] = gameMetadata;
  const videoStreamStats = self.videoStreamStats;
  obj[17] = videoStreamStats.getLayout();
  obj[18] = actionContext;
  ({ voiceVersion: obj2[19], rtcWorkerVersion: obj2[20] } = self);
  return obj;
};
prototype["getSoundshareAnalyticsProperties"] = function getSoundshareAnalyticsProperties() {
  return { rtc_connection_id: this.getRTCConnectionId(), soundshare_experimental: experimentalSoundshare.getExperimentalSoundshare() };
};
prototype["trackVideoStartStats"] = function trackVideoStartStats() {
  const self = this;
  let tmp = null;
  if (this.isOwner) {
    tmp = getStreamSourceMetadata();
  }
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(self.getStreamAnalyticsProperties());
  const merged1 = Object.assign(tmp);
  obj.connection_type = store2.getType();
  obj.effective_connection_speed = store2.getEffectiveConnectionSpeed();
  obj.service_provider = store2.getServiceProvider();
  obj.duration_go_live_modal = self.analyticsContext.goLiveModalDurationMs;
  obj.source_location_stack = self.analyticsContext.analyticsLocations;
  obj.track(constants.VIDEO_STREAM_STARTED, obj);
};
prototype["trackVideoEndStats"] = function trackVideoEndStats(arg0) {
  let self = this;
  self = this;
  let closure_1 = arg0;
  const channel = obj.getChannel(this.channelId);
  let type = null;
  if (null != channel) {
    type = channel.type;
  }
  let _videoQuality = self._videoQuality;
  if (null != _videoQuality) {
    const dependencyMap = _videoQuality.getNetworkStats();
    const getCodecUsageStats = _videoQuality.getCodecUsageStats;
    if (self.isOwner) {
      let codecUsageStats = getCodecUsageStats("streamer", self.userId);
    } else {
      codecUsageStats = getCodecUsageStats("receiver", tmp3);
    }
    obj = { stream_application_name: null };
    obj[0] = obj2(4522).default.getApplicationNames();
    if (self.isOwner) {
      obj = { clips_enabled: null, clips_buffer_length: null };
      obj[0] = tmp5(4403).isClipsEnabled();
      obj[1] = tmp8.clipsLength;
      const tmp5Result = tmp5(4403);
    } else {
      obj = {};
    }
    if (self.isOwner) {
      const obj1 = { bandwidth_estimation_experiment: null };
      obj1[0] = self.getBandwidthEstimationExperiment();
      obj2 = obj1;
    } else {
      obj2 = {};
    }
    const outboundStats = _videoQuality.getOutboundStats();
    const item = outboundStats.forEach((num_frames) => {
      let num = num_frames.num_frames;
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        const obj2 = callback(698);
        const obj = {};
        const merged = Object.assign(codecUsageStats);
        const merged1 = Object.assign(dependencyMap);
        const merged2 = Object.assign(obj);
        const videoStreamStats = self.videoStreamStats;
        const merged3 = Object.assign(videoStreamStats.getStats());
        const merged4 = Object.assign(num_frames);
        const soundshareStats = self.soundshareStats;
        const merged5 = Object.assign(soundshareStats.getStats());
        const merged6 = Object.assign(self.getStreamAnalyticsProperties());
        const merged7 = Object.assign(obj);
        const merged8 = Object.assign(obj2);
        obj.app_hardware_acceleration_enabled = callback(4336).getAppHardwareAccelerationEnabled();
        obj.channel_type = type;
        obj.reason = callback;
        obj.max_viewers = self.analyticsContext.maxViewers;
        obj.hostname = self.hostname;
        obj.hardware_enabled = outer1_9.getHardwareEncoding();
        let tmp = null;
        if (self.isOwner) {
          tmp = tmp4(7199)();
        }
        obj.device_performance_class = tmp;
        obj.soundshare_experimental = outer1_9.getExperimentalSoundshare();
        obj.quality_preset = _videoQuality.getState().preset;
        const obj4 = callback(4336);
        const obj5 = outer1_9;
        obj.discord_is_elevated = callback(4336).getDiscordIsElevated();
        obj2.track(outer1_13.VIDEO_STREAM_ENDED, obj);
        const tmp4Result = callback(4336);
      }
    });
    _videoQuality = _videoQuality.getInboundParticipants();
    const item1 = _videoQuality.forEach((arg0) => {
      const inboundStats = _videoQuality.getInboundStats(arg0);
      let num;
      if (inboundStats != null) {
        num = inboundStats.num_frames;
      }
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        let obj = callback(698);
        obj = {};
        const merged = Object.assign(codecUsageStats);
        const merged1 = Object.assign(dependencyMap);
        const merged2 = Object.assign(obj);
        const videoStreamStats = self.videoStreamStats;
        const merged3 = Object.assign(videoStreamStats.getStats());
        const merged4 = Object.assign(inboundStats);
        const soundshareStats = self.soundshareStats;
        const merged5 = Object.assign(soundshareStats.getStats());
        const merged6 = Object.assign(self.getStreamAnalyticsProperties());
        const merged7 = Object.assign(obj);
        const merged8 = Object.assign(obj2);
        obj.app_hardware_acceleration_enabled = callback(4336).getAppHardwareAccelerationEnabled();
        obj.channel_type = type;
        obj.reason = callback;
        obj.max_viewers = self.analyticsContext.maxViewers;
        obj.hostname = self.hostname;
        obj.hardware_enabled = outer1_9.getHardwareEncoding();
        let tmp2 = null;
        if (self.isOwner) {
          tmp2 = tmp4(7199)();
        }
        obj.device_performance_class = tmp2;
        obj.track(outer1_13.VIDEO_STREAM_ENDED, obj);
        const obj3 = callback(4336);
        tmp4 = callback;
      }
    });
    const _default = obj2(4522).default;
    tmp5 = obj2;
  }
};
prototype["getExtraConnectionOptions"] = function getExtraConnectionOptions() {
  const obj = { streamUserId: null };
  obj[0] = isStreamKey.decodeStreamKey(this.streamKey).ownerId;
  return obj;
};
prototype["getMediaStreamKey"] = function getMediaStreamKey() {
  return this.streamKey;
};
let result = require("ApplicationStreamPresets").fileFinishedImporting("modules/go_live/StreamRTCConnection.tsx");
class StreamRTCAnalyticsContext {
  constructor(arg0) {
    ({ streamApplication, numViewers, analyticsLocations } = global);
    ({ streamRegion, streamSourceType, actionContext, goLiveModalDurationMs } = global);
    obj = Object.create(new.target.prototype);
    obj.streamRegion = streamRegion;
    obj.streamApplication = streamApplication;
    items = [];
    items[0] = streamApplication;
    obj.streamApplicationHistory = items;
    obj.streamSourceType = streamSourceType;
    obj.actionContext = actionContext;
    obj.maxViewers = numViewers;
    obj.goLiveModalDurationMs = goLiveModalDurationMs;
    obj.numViewers = numViewers;
    if (analyticsLocations == null) {
      analyticsLocations = [];
    }
    obj.analyticsLocations = analyticsLocations;
    return obj;
  }
}
const prototype2 = StreamRTCAnalyticsContext.prototype;
prototype2["setActionContext"] = function setActionContext(appContext) {
  this.actionContext = appContext;
};
prototype2["updateStreamApplication"] = function updateStreamApplication(streamApplication) {
  this.streamApplication = streamApplication;
  const items = [];
  items[HermesBuiltin.arraySpread(this.streamApplicationHistory, 0)] = streamApplication;
  this.streamApplicationHistory = items;
};
prototype2["setAnalyticsLocations"] = function setAnalyticsLocations(analyticsLocations) {
  this.analyticsLocations = analyticsLocations;
};
prototype2["trackViewerCount"] = function trackViewerCount(length) {
  this.maxViewers = Math.max(length, this.maxViewers);
  this.numViewers = length;
};
prototype2["setNativePickerStyleUsed"] = function setNativePickerStyleUsed(closure_1) {
  this.nativePickerStyleUsed = closure_1;
};
prototype2["trackStart"] = function trackStart() {
  this.startTime = performance.now();
};
prototype2["trackEnd"] = function trackEnd() {
  this.endTime = performance.now();
};
prototype2["getStreamApplicationFromHistory"] = function getStreamApplicationFromHistory(screenshareFinishedCount) {
  return this.streamApplicationHistory[screenshareFinishedCount];
};
prototype2["getDuration"] = function getDuration() {
  const self = this;
  if (null == this.startTime) {
    return null;
  } else {
    const _performance = performance;
    let endTime = self.endTime;
    if (endTime == null) {
      endTime = performance.now();
    }
    return endTime - self.startTime;
  }
};

export default StreamRTCConnection;
export { StreamRTCAnalyticsContext };