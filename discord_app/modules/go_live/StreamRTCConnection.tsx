// === Module 4680: StreamRTCConnection ===

// Module 4680 (StreamRTCConnection)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4630 */;
import SoundshareStatsAggregatorDefault from "SoundshareStatsAggregator" /* 4687 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4688 */;
import VideoStreamStatsDefault from "VideoStreamStats" /* 4689 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4691 */;
import GameAnalyticsUtils from "GameAnalyticsUtils" /* 4765 */;
import getSoundshareAnalyticsContextDefault from "getSoundshareAnalyticsContext" /* 4771 */;
import getReportedStreamResolutionDefault from "getReportedStreamResolution" /* 4772 */;
import getStreamSourceMetadataDefault from "getStreamSourceMetadata" /* 4776 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7774 */;
import ClipsStore from "ClipsStore" /* 1914 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4682 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import HookErrorStore from "HookErrorStore" /* 4684 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import NetworkStore from "NetworkStore" /* 4685 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;
import RTCRegionStore from "RTCRegionStore" /* 4686 */;
import RTCConnection from "RTCConnection" /* 4663 */;

require = fn;
const getSystemAnalyticsInfo = fn(4681).getSystemAnalyticsInfo;
const Constants = fn(1074);
({ AnalyticEvents: map1, MediaEngineHookTypes: closure_14, RTCConnectionStates: closure_15 } = Constants);
const MediaEngineContextTypes = fn(4661).MediaEngineContextTypes;
let closure_17 = 5 * DurationsDefault.Millis.SECOND;
let closure_18 = { DETACHED: 0, [0]: "DETACHED", WAITING: 1, [1]: "WAITING", ATTACHED: 2, [2]: "ATTACHED", STARTED: 3, [3]: "STARTED", PLAYING: 4, [4]: "PLAYING", SILENCE: 5, [5]: "SILENCE" };
class StreamRTCConnection extends tmp3 {
  constructor(arg0) {
    ({ sessionId, streamKey, serverId, initialLayout, channelId } = global);
    closure_0 = undefined;
    ({ analyticsContext, parentMediaSessionId } = global);
    obj = closure_0(closure_2[16]);
    decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    guildId = decodeStreamKeyResult.guildId;
    obj1 = { userId: null, sessionId: null, guildId: null, channelId: null, context: null, streamServerId: null, streamChannelId: null, parentMediaSessionId: null, joinVoiceId: null };
    id = closure_6.getId();
    obj1.userId = id;
    obj1.sessionId = sessionId;
    obj1.guildId = guildId;
    obj1.channelId = decodeStreamKeyResult.channelId;
    STREAM = MediaEngineContextTypes.STREAM;
    obj1.context = STREAM;
    obj1.streamServerId = serverId;
    obj1.streamChannelId = channelId;
    obj1.parentMediaSessionId = parentMediaSessionId;
    tmp1 = new tmp(obj1, tmp2, closure_6, id, sessionId, guildId, STREAM, serverId, channelId, new.target, tmp, new.target, closure_0, initialLayout);
    closure_0 = tmp1;
    tmp5 = new closure_1(closure_2[14])();
    tmp1.soundshareStats = tmp5;
    tmp1._firstFrameDelivered = false;
    tmp1.screenshareFinishedCount = 0;
    tmp1.soundshareFailuresReported = {};
    timeout = new closure_0(closure_2[15]).Timeout();
    tmp1.errorTimer = timeout;
    tmp1.streamContext = decodeStreamKeyResult;
    tmp1.streamKey = streamKey;
    tmp7 = new closure_1(closure_2[17])(initialLayout, tmp1.isOwner);
    tmp1.videoStreamStats = tmp7;
    tmp1.analyticsContext = analyticsContext;
    obj4 = closure_1(closure_2[18]);
    tmp1.updateVideoStreamId = obj4.debounce((streamId, rtcServerId) => {
      ({ guildId, channelId, ownerId } = StreamKeyUtils.decodeStreamKey(mediaEngineConnectionId.streamKey));
      const decodeStreamKeyResult = StreamKeyUtils.decodeStreamKey(mediaEngineConnectionId.streamKey);
      const obj2 = DispatcherDefault;
      obj2.dispatch({ type: "RTC_CONNECTION_VIDEO", guildId, channelId, userId: ownerId, streamId, rtcServerId, mediaEngineConnectionId: mediaEngineConnectionId.getMediaEngineConnectionId(), context: MediaEngineContextTypes.STREAM });
    }, 200);
    videoStreamStats = tmp1.videoStreamStats;
    startResult = videoStreamStats.start();
    initializeEventsResult = tmp1.initializeEvents();
    return tmp1;
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
  sendVideo(arg0, arg1, arg2, arg3) {
    self = this;
    sendVideoResult = super.sendVideo(global, fn, importDefault, importAll.map((maxResolution) => {
      let tmp = maxResolution;
      if (null != maxResolution.maxResolution) {
        tmp = maxResolution;
        if (null != maxResolution.maxFrameRate) {
          const obj = {};
          const merged = Object.assign(maxResolution);
          obj.maxResolution = getReportedStreamResolutionDefault("StreamRTCConnection", self.guildId, maxResolution.maxResolution, maxResolution.maxFrameRate);
          tmp = obj;
        }
      }
      return tmp;
    }));
    return;
  }
}
const prototype = StreamRTCConnection.prototype;
Object.defineProperty(prototype, "isOwner", {
  get: function isOwner() {
    return AuthenticationStore.getId() === this.streamContext.ownerId;
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
    ({ duration: obj3.duration, avg_bitrate: obj3.avg_bitrate, avg_fps: obj3.avg_fps, avg_resolution: obj3.avg_resolution, inbound_bitrate_estimate_percentile99: obj3.inbound_bitrate_estimate_percentile99 } = inboundStats);
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
  _require = false;
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.State, (state, arg1, arg2) => {
    let obj2 = { type: "RTC_CONNECTION_STATE", state };
    let merged = Object.assign(arg1);
    let merged1 = Object.assign(arg2);
    obj2.streamKey = self.streamKey;
    DispatcherDefault.dispatch(obj2);
    if (state === constants2.RTC_CONNECTED) {
      const _connection8 = self._connection;
      if (_connection8 != null) {
        _connection8.on(BaseConnectionEvent.BaseConnectionEvent.ScreenshareFinish, (screenshare_frames, videohook_frames, hybrid_dxgi_frames, hybrid_gdi_frames, hybrid_videohook_frames, hybrid_graphics_capture_frames, hybrid_capture_method_switches, hybrid_gdi_bitblt_frames, hybrid_gdi_printwindow_frames, hybrid_graphics_capture_frames_unique, hybrid_dxgi_frames_unique, hybrid_videohook_frames_unique, hybrid_gdi_bitblt_frames_unique, hybrid_gdi_printwindow_frames_unique, skip_history_json, quartz_frames, desktop_capturer_type, activity, go_live_camera_frames, screencapturekit_frames, hdr_frames_capable, hdr_frames, target_window_elevated, pipewire_frames, x11_frames, videohook_backend) => {
          let analyticsContext = videohook_frames.analyticsContext;
          videohook_frames.screenshareFinishedCount = videohook_frames.screenshareFinishedCount + 1;
          const streamApplicationFromHistory = analyticsContext.getStreamApplicationFromHistory(videohook_frames.screenshareFinishedCount);
          const runningGameAnalytics = closure_1_0(dependencyMap[22]).getRunningGameAnalytics(streamApplicationFromHistory);
          ({ gameName: closure_26, gameId: closure_27, exe: closure_28, distributor: closure_29 } = runningGameAnalytics);
          const media_session_id = videohook_frames.getMediaSessionId();
          const rtc_connection_id = videohook_frames.getRTCConnectionId();
          let obj = closure_1_0(dependencyMap[22]);
          closure_1_4().then((result) => {
            let tmp = null;
            if (null != result) {
              const obj = { cpu_brand: null, cpu_vendor: null, cpu_memory: null, gpu_brand: null, gpu_memory: null };
              ({ cpu_brand: obj.cpu_brand, cpu_vendor: obj.cpu_vendor, cpu_memory: obj.cpu_memory, gpu_brand: obj.gpu_brand, gpu_memory: obj.gpu_memory } = result);
              tmp = obj;
            }
            const obj3 = { screenshare_frames, videohook_frames, hybrid_dxgi_frames, hybrid_gdi_frames, hybrid_videohook_frames, hybrid_graphics_capture_frames, hybrid_capture_method_switches, hybrid_gdi_bitblt_frames, hybrid_gdi_printwindow_frames, hybrid_graphics_capture_frames_unique, hybrid_dxgi_frames_unique, hybrid_videohook_frames_unique, hybrid_gdi_bitblt_frames_unique, hybrid_gdi_printwindow_frames_unique, skip_history_json, quartz_frames, screencapturekit_frames, go_live_camera_frames, total_frames: null, total_frames_unique: null, desktop_capturer_type: null, media_session_id: null, rtc_connection_id: null, context: null, activity: null, soundshare_session: null, picker_type_used: null, duration: null, share_game_name: null, share_game_id: null, share_game_exe: null, share_game_distributor: null, hdr_frames_capable: null, hdr_frames: null, discord_is_elevated: null, target_window_elevated: null, pipewire_frames: null, x11_frames: null, videohook_backend: null };
            let num = screenshare_frames;
            let num2 = videohook_frames;
            let num3 = hybrid_dxgi_frames;
            let num4 = hybrid_gdi_frames;
            let num5 = hybrid_videohook_frames;
            let num6 = hybrid_graphics_capture_frames;
            let num7 = hybrid_graphics_capture_frames_unique;
            let num8 = hybrid_dxgi_frames_unique;
            let num9 = hybrid_videohook_frames_unique;
            let num10 = hybrid_gdi_bitblt_frames_unique;
            let num11 = hybrid_gdi_printwindow_frames_unique;
            let num12 = quartz_frames;
            let num13 = screencapturekit_frames;
            let num14 = go_live_camera_frames;
            if (screenshare_frames == null) {
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
            let num15 = x11_frames;
            const sum7 = sum6 + num14;
            if (x11_frames == null) {
              num15 = 0;
            }
            let num16 = pipewire_frames;
            const sum8 = sum7 + num15;
            if (pipewire_frames == null) {
              num16 = 0;
            }
            obj3.total_frames = sum8 + num16;
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
            obj3.total_frames_unique = sum11 + num11;
            obj3.desktop_capturer_type = desktop_capturer_type;
            obj3.media_session_id = media_session_id;
            obj3.rtc_connection_id = rtc_connection_id;
            obj3.context = constants3.STREAM;
            obj3.activity = activity;
            const soundshareStats = closure_2_1.soundshareStats;
            obj3.soundshare_session = soundshareStats.getStats().soundshare_last_session;
            let str = "internal";
            if (null != closure_2_1.analyticsContext.nativePickerStyleUsed) {
              str = "native";
            }
            obj3.picker_type_used = str;
            const analyticsContext = closure_2_1.analyticsContext;
            obj3.duration = analyticsContext.getDuration();
            obj3.share_game_name = share_game_name;
            obj3.share_game_id = share_game_id;
            obj3.share_game_exe = share_game_exe;
            obj3.share_game_distributor = share_game_distributor;
            obj3.hdr_frames_capable = hdr_frames_capable;
            obj3.hdr_frames = hdr_frames;
            const obj2 = self(1240);
            obj3.discord_is_elevated = self(4630).getDiscordIsElevated();
            obj3.target_window_elevated = target_window_elevated;
            obj3.pipewire_frames = pipewire_frames;
            obj3.x11_frames = x11_frames;
            obj3.videohook_backend = videohook_backend;
            const merged = Object.assign(tmp);
            obj2.track(constants.SCREENSHARE_FINISHED, obj3);
            const tmp2Result = self(4630);
          });
        });
      }
      const _connection = self._connection;
      if (_connection != null) {
        _connection.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareAttached, () => {
          const goLiveSource = MediaEngineStore.getGoLiveSource();
          let desktopSource;
          if (goLiveSource != null) {
            desktopSource = goLiveSource.desktopSource;
          }
          if (null != desktopSource) {
            let desktopSource1;
            const obj = self(1240);
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            const obj2 = {};
            const merged = Object.assign(self(4771)(desktopSource1));
            const merged1 = Object.assign(closure_1_1.getSoundshareAnalyticsProperties());
            obj.track(constants.SOUNDSHARE_ATTACHED, obj2);
            const tmp6 = self(4771);
          }
        });
      }
      const _connection2 = self._connection;
      if (_connection2 != null) {
        _connection2.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareFailed, (arg0) => {
          ({ failureCode, failureReason, willRetry } = arg0);
          const goLiveSource = MediaEngineStore.getGoLiveSource();
          let desktopSource;
          if (goLiveSource != null) {
            desktopSource = goLiveSource.desktopSource;
          }
          const result = self.reportSoundshareFailure(desktopSource, failureCode, failureReason, willRetry);
        });
      }
      const _connection3 = self._connection;
      if (_connection3 != null) {
        _connection3.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareSpeaking, () => {
          const goLiveSource = MediaEngineStore.getGoLiveSource();
          let desktopSource;
          if (goLiveSource != null) {
            desktopSource = goLiveSource.desktopSource;
          }
          if (null != desktopSource) {
            let desktopSource1;
            const obj3 = self(1240);
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            const obj = {};
            const merged = Object.assign(self(4771)(desktopSource1));
            const merged1 = Object.assign(closure_1_1.getSoundshareAnalyticsProperties());
            obj3.track(constants.SOUNDSHARE_TRANSMITTING, obj);
            if (null != hookError.getHookError(constants2.SOUND)) {
              self(573).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              const tmp13Result = self(573);
            }
            const tmp16 = self(4771);
          }
        });
      }
      const _connection4 = self._connection;
      if (_connection4 != null) {
        _connection4.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareTrace, (type) => {
          const goLiveSource = MediaEngineStore.getGoLiveSource();
          const soundshareStats = closure_1_1.soundshareStats;
          let soundshareSession;
          if (goLiveSource != null) {
            const desktopSource = goLiveSource.desktopSource;
            if (desktopSource != null) {
              soundshareSession = desktopSource.soundshareSession;
            }
          }
          soundshareStats.traceEvent(soundshareSession, type);
          type = type.type;
          if ("soundshare_attach_requested" === type) {
            const errorTimer2 = closure_1_1.errorTimer;
            errorTimer2.start(closure_2_17, () => {
              closure_1_1(closure_1_2[19]).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: "Sound Hook Failed" });
            });
          } else if ("soundshare_recv_failed" === type) {
            ({ reason, code, retry } = type);
            let desktopSource1;
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            if (null != desktopSource1) {
              let desktopSource2;
              if (goLiveSource != null) {
                desktopSource2 = goLiveSource.desktopSource;
              }
              const result = closure_1_1.reportSoundshareFailure(desktopSource2, code, reason, retry);
              if (!retry) {
                const errorTimer = closure_1_1.errorTimer;
                errorTimer.stop();
                const obj3 = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: reason, errorCode: code };
                self(573).dispatch(obj3);
                const obj2 = self(573);
              }
            }
          } else if ("soundshare_state_transition" === type) {
            if (type.newState === constants4.PLAYING) {
              const errorTimer3 = closure_1_1.errorTimer;
              errorTimer3.stop();
              self(573).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              const obj4 = self(573);
            }
          }
        });
      }
      const _connection5 = self._connection;
      if (_connection5 != null) {
        _connection5.on(BaseConnectionEvent.BaseConnectionEvent.FirstFrameStats, (remoteVideoStreamCreatedTimestamp) => {
          if (!closure_1_1._firstFrameDelivered) {
            closure_1_1._firstFrameDelivered = true;
            const streamAnalyticsProperties = closure_1_1.getStreamAnalyticsProperties();
            const obj5 = { guild_id: null, channel_id: null, rtc_connection_id: null, media_session_id: null, parent_media_session_id: null, num_viewers: null, time_connected_to_first_frame_delivered: null, time_total_to_first_frame: null, time_remote_user_to_video_stream_created: null, time_video_stream_created_to_video_data_received: null, time_video_data_received_to_video_source_delivered_frame: null, time_remote_user_to_mls_external_sender_updated: null, time_remote_user_to_secure_frame_remote_key_ratchet_set: null, time_remote_user_to_secure_frame_local_key_ratchet_set: null, time_remote_user_to_first_frame_decrypted: null };
            ({ guild_id: obj3.guild_id, channel_id: obj3.channel_id, rtc_connection_id: obj3.rtc_connection_id, media_session_id: obj3.media_session_id, parent_media_session_id: obj3.parent_media_session_id } = streamAnalyticsProperties);
            obj5.num_viewers = closure_1_1.analyticsContext.numViewers;
            obj5.time_connected_to_first_frame_delivered = closure_1_1.getDuration();
            const obj2 = self(1240);
            const obj4 = c0(4665);
            obj5.time_total_to_first_frame = c0(4665).now() - closure_1_1.getCreatedTime();
            let NumberResult = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
              NumberResult = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number = Number;
                NumberResult = Number(remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj5.time_remote_user_to_video_stream_created = NumberResult;
            let NumberResult1 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
              NumberResult1 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
                const _Number2 = Number;
                NumberResult1 = Number(remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp - remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp);
              }
            }
            obj5.time_video_stream_created_to_video_data_received = NumberResult1;
            let NumberResult2 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp) {
              NumberResult2 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
                const _Number3 = Number;
                NumberResult2 = Number(remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp - remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp);
              }
            }
            obj5.time_video_data_received_to_video_source_delivered_frame = NumberResult2;
            let NumberResult3 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp) {
              NumberResult3 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number4 = Number;
                NumberResult3 = Number(remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj5.time_remote_user_to_mls_external_sender_updated = NumberResult3;
            let NumberResult4 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
              NumberResult4 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number5 = Number;
                NumberResult4 = Number(remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj5.time_remote_user_to_secure_frame_remote_key_ratchet_set = NumberResult4;
            let NumberResult5 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
              NumberResult5 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number6 = Number;
                NumberResult5 = Number(remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj5.time_remote_user_to_secure_frame_local_key_ratchet_set = NumberResult5;
            let NumberResult6 = null;
            if (undefined !== remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp) {
              NumberResult6 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                const _Number7 = Number;
                NumberResult6 = Number(remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp - remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp);
              }
            }
            obj5.time_remote_user_to_first_frame_decrypted = NumberResult6;
            obj2.track(constants.RECEIVER_FIRST_FRAME_DELIVERED, obj5);
            const nowResult = c0(4665).now();
          }
        });
      }
      const _connection6 = self._connection;
      if (_connection6 != null) {
        _connection6.on(BaseConnectionEvent.BaseConnectionEvent.FirstFrameEncryptedStats, (videoReceiversSetTimestamp) => {
          const streamAnalyticsProperties = closure_1_1.getStreamAnalyticsProperties();
          const obj2 = { guild_id: streamAnalyticsProperties.guild_id, channel_id: streamAnalyticsProperties.channel_id, rtc_connection_id: streamAnalyticsProperties.rtc_connection_id, media_session_id: streamAnalyticsProperties.media_session_id, parent_media_session_id: streamAnalyticsProperties.parent_media_session_id, time_local_user_to_video_receivers_set: null, time_local_user_to_mls_external_sender_updated: null, time_local_user_to_secure_frame_remote_key_ratchet_set: null, time_local_user_to_secure_frame_local_key_ratchet_set: null, time_local_user_to_first_frame_encrypted: null };
          let NumberResult = null;
          if (undefined !== videoReceiversSetTimestamp.videoReceiversSetTimestamp) {
            NumberResult = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number = Number;
              NumberResult = Number(videoReceiversSetTimestamp.videoReceiversSetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj2.time_local_user_to_video_receivers_set = NumberResult;
          let NumberResult1 = null;
          if (undefined !== videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp) {
            NumberResult1 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number2 = Number;
              NumberResult1 = Number(videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj2.time_local_user_to_mls_external_sender_updated = NumberResult1;
          let NumberResult2 = null;
          if (undefined !== videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
            NumberResult2 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number3 = Number;
              NumberResult2 = Number(videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj2.time_local_user_to_secure_frame_remote_key_ratchet_set = NumberResult2;
          let NumberResult3 = null;
          if (undefined !== videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
            NumberResult3 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number4 = Number;
              NumberResult3 = Number(videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj2.time_local_user_to_secure_frame_local_key_ratchet_set = NumberResult3;
          let NumberResult4 = null;
          if (undefined !== videoReceiversSetTimestamp.firstFrameEncryptedTimestamp) {
            NumberResult4 = null;
            if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
              const _Number5 = Number;
              NumberResult4 = Number(videoReceiversSetTimestamp.firstFrameEncryptedTimestamp - videoReceiversSetTimestamp.localUserCreatedTimestamp);
            }
          }
          obj2.time_local_user_to_first_frame_encrypted = NumberResult4;
          self(1240).track(constants.STREAMER_FIRST_FRAME_ENCRYPTED, obj2);
        });
      }
      const _connection7 = self._connection;
      if (_connection7 != null) {
        _connection7.on(BaseConnectionEvent.BaseConnectionEvent.Destroy, () => {
          const errorTimer = self.errorTimer;
          errorTimer.stop();
        });
      }
    }
  });
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.Video, (arg0, arg1, arg2, arg3, arg4) => {
    const decodeStreamKeyResult = StreamKeyUtils.decodeStreamKey(self.streamKey);
    let tmp2 = decodeStreamKeyResult.guildId === arg0;
    if (tmp2) {
      tmp2 = decodeStreamKeyResult.channelId === arg1;
    }
    if (tmp2) {
      tmp2 = decodeStreamKeyResult.ownerId === arg2;
    }
    if (tmp2) {
      if (!tmp6) {
        self.trackVideoStartStats();
        c0 = true;
      }
      self.updateVideoStreamId(arg3, arg4);
      tmp6 = null == self.getMediaSessionId() || c0;
    }
  });
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.VideoSourceQualityChanged, (guildId, channelId, senderUserId, arg3, maxFrameRate, context) => {
    id = id.getId();
    const obj2 = { type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", guildId, channelId, senderUserId, maxResolution: null, maxFrameRate: null, context: null };
    let tmp4 = arg3;
    if (senderUserId === id) {
      tmp4 = self(4772)("StreamRTCConnection", guildId, arg3, maxFrameRate);
    }
    obj2.maxResolution = tmp4;
    obj2.maxFrameRate = maxFrameRate;
    obj2.context = context;
    self(573).dispatch(obj2);
    const obj = self(573);
  });
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.SecureFramesUpdate, () => {
    self(573).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
  });
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.RosterMapUpdate, (userIds) => {
    self(573).dispatch({ type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds });
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
    tmp6 = !self.soundshareFailuresReported[str].has(code);
  }
  if (tmp6) {
    self.soundshareFailuresReported[str].add(code);
  }
  if (tmp8) {
    const obj4 = { soundshare_failure_code: code, soundshare_failure_reason: failureReason, soundshare_failure_will_retry: retry };
    const merged = Object.assign(getSoundshareAnalyticsContextDefault(desktopSource));
    const merged1 = Object.assign(self.getSoundshareAnalyticsProperties());
    AnalyticsUtilsDefault.track(constants.SOUNDSHARE_FAILED, obj4);
  }
  tmp8 = null == code || tmp6;
};
prototype["getStreamAnalyticsProperties"] = function getStreamAnalyticsProperties() {
  const self = this;
  ({ analyticsContext, streamContext } = this);
  ({ streamRegion, streamApplication, streamSourceType, actionContext } = analyticsContext);
  ({ ownerId, guildId } = streamContext);
  const region = RTCRegionStore.getRegion(RTCConnectionStore.getHostname());
  const runningGameAnalytics = GameAnalyticsUtils.getRunningGameAnalytics(streamApplication);
  const obj3 = { channel_id: this.channelId, rtc_connection_id: this.getRTCConnectionId(), media_session_id: this.getMediaSessionId(), parent_media_session_id: this.parentMediaSessionId, sender_user_id: ownerId, context: MediaEngineContextTypes.STREAM, guild_id: guildId, stream_region: streamRegion, stream_source_type: streamSourceType, guild_region: region, participant_type: null, share_application_name: null, share_application_id: null, share_application_executable: null, share_application_distributor: null, share_application_distributor_game_id: null, share_application_game_metadata: null, video_layout: null, client_event_source: null, voice_backend_version: null, rtc_worker_backend_version: null };
  ({ gameName, gameId, exe, distributor, sku, gameMetadata } = runningGameAnalytics);
  let str = "receiver";
  if (this.isOwner) {
    str = "streamer";
  }
  obj3.participant_type = str;
  obj3.share_application_name = gameName;
  obj3.share_application_id = gameId;
  obj3.share_application_executable = exe;
  obj3.share_application_distributor = distributor;
  obj3.share_application_distributor_game_id = sku;
  obj3.share_application_game_metadata = gameMetadata;
  const videoStreamStats = self.videoStreamStats;
  obj3.video_layout = videoStreamStats.getLayout();
  obj3.client_event_source = actionContext;
  ({ voiceVersion: obj2.voice_backend_version, rtcWorkerVersion: obj2.rtc_worker_backend_version } = self);
  return obj3;
};
prototype["getSoundshareAnalyticsProperties"] = function getSoundshareAnalyticsProperties() {
  return { rtc_connection_id: this.getRTCConnectionId(), soundshare_experimental: MediaEngineStore.getExperimentalSoundshare() };
};
prototype["trackVideoStartStats"] = function trackVideoStartStats() {
  const self = this;
  let tmp = null;
  if (this.isOwner) {
    tmp = getStreamSourceMetadataDefault();
  }
  const obj2 = {};
  const merged = Object.assign(self.getStreamAnalyticsProperties());
  const merged1 = Object.assign(tmp);
  obj2.connection_type = NetworkStore.getType();
  obj2.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj2.service_provider = NetworkStore.getServiceProvider();
  obj2.duration_go_live_modal = self.analyticsContext.goLiveModalDurationMs;
  obj2.source_location_stack = self.analyticsContext.analyticsLocations;
  AnalyticsUtilsDefault.track(constants.VIDEO_STREAM_STARTED, obj2);
};
prototype["trackVideoEndStats"] = function trackVideoEndStats(reason) {
  const self = this;
  const channel = obj3.getChannel(this.channelId);
  let type = null;
  if (null != channel) {
    type = channel.type;
  }
  let _videoQuality = self._videoQuality;
  if (null != _videoQuality) {
    dependencyMap = _videoQuality.getNetworkStats();
    const getCodecUsageStats = _videoQuality.getCodecUsageStats;
    if (self.isOwner) {
      let codecUsageStats = getCodecUsageStats("streamer", self.userId);
    } else {
      codecUsageStats = getCodecUsageStats("receiver", tmp3);
    }
    let obj = { stream_application_name: obj5(4777).default.getApplicationNames() };
    if (self.isOwner) {
      let obj2 = { clips_enabled: tmp5(13764).isClipsEnabled(), clips_buffer_length: tmp8.clipsLength };
      obj3 = obj2;
      const tmp5Result = tmp5(13764);
    } else {
      obj3 = {};
    }
    if (self.isOwner) {
      let obj4 = { bandwidth_estimation_experiment: self.getBandwidthEstimationExperiment() };
      obj5 = obj4;
    } else {
      obj5 = {};
    }
    const outboundStats = _videoQuality.getOutboundStats();
    const item = outboundStats.forEach((num_frames) => {
      let num = num_frames.num_frames;
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        obj = {};
        const merged = Object.assign(codecUsageStats);
        const merged1 = Object.assign(closure_2);
        const merged2 = Object.assign(obj);
        const videoStreamStats = self.videoStreamStats;
        const merged3 = Object.assign(videoStreamStats.getStats());
        const merged4 = Object.assign(num_frames);
        const soundshareStats = self.soundshareStats;
        const merged5 = Object.assign(soundshareStats.getStats());
        const merged6 = Object.assign(self.getStreamAnalyticsProperties());
        const merged7 = Object.assign(obj3);
        const merged8 = Object.assign(MediaEngineStore);
        const obj2 = AnalyticsUtilsDefault;
        obj.app_hardware_acceleration_enabled = CrossPlatformNativeUtilsDefault.getAppHardwareAccelerationEnabled();
        obj.channel_type = type;
        obj.reason = reason;
        obj.max_viewers = self.analyticsContext.maxViewers;
        obj.hostname = self.hostname;
        obj.hardware_enabled = MediaEngineStore.getHardwareEncoding();
        let tmp = null;
        if (self.isOwner) {
          tmp = getMediaPerformanceClassDefault();
        }
        obj.device_performance_class = tmp;
        obj.soundshare_experimental = MediaEngineStore.getExperimentalSoundshare();
        obj.quality_preset = ApplicationStreamingSettingsStore.getState().preset;
        obj.discord_is_elevated = CrossPlatformNativeUtilsDefault.getDiscordIsElevated();
        obj2.track(constants.VIDEO_STREAM_ENDED, obj);
        const tmp4Result = CrossPlatformNativeUtilsDefault;
      }
    });
    _videoQuality = _videoQuality.getInboundParticipants();
    const item1 = _videoQuality.forEach((item) => {
      const inboundStats = _videoQuality.getInboundStats(item);
      let num;
      if (inboundStats != null) {
        num = inboundStats.num_frames;
      }
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        obj = AnalyticsUtilsDefault;
        const obj2 = {};
        const merged = Object.assign(codecUsageStats);
        const merged1 = Object.assign(closure_2);
        const merged2 = Object.assign(obj);
        const videoStreamStats = self.videoStreamStats;
        const merged3 = Object.assign(videoStreamStats.getStats());
        const merged4 = Object.assign(inboundStats);
        const soundshareStats = self.soundshareStats;
        const merged5 = Object.assign(soundshareStats.getStats());
        const merged6 = Object.assign(self.getStreamAnalyticsProperties());
        const merged7 = Object.assign(obj3);
        const merged8 = Object.assign(obj5);
        obj3 = CrossPlatformNativeUtilsDefault;
        obj2.app_hardware_acceleration_enabled = obj3.getAppHardwareAccelerationEnabled();
        obj2.channel_type = type;
        obj2.reason = reason;
        obj2.max_viewers = self.analyticsContext.maxViewers;
        obj2.hostname = self.hostname;
        obj2.hardware_enabled = MediaEngineStore.getHardwareEncoding();
        let tmp2 = null;
        if (self.isOwner) {
          tmp2 = getMediaPerformanceClassDefault();
        }
        obj2.device_performance_class = tmp2;
        obj.track(constants.VIDEO_STREAM_ENDED, obj2);
      }
    });
    const _default = obj5(4777).default;
    tmp5 = obj5;
  }
};
prototype["getExtraConnectionOptions"] = function getExtraConnectionOptions() {
  const obj = { streamUserId: StreamKeyUtils.decodeStreamKey(this.streamKey).ownerId };
  return obj;
};
prototype["getMediaStreamKey"] = function getMediaStreamKey() {
  return this.streamKey;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/StreamRTCConnection.tsx");
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
prototype2["setNativePickerStyleUsed"] = function setNativePickerStyleUsed(nativePickerStyleUsed) {
  this.nativePickerStyleUsed = nativePickerStyleUsed;
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