// discord_app/modules/go_live/StreamRTCConnection.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import CrossPlatformNativeUtilsDefault from "../../utils/CrossPlatformNativeUtils.native.tsx";
import SoundshareStatsAggregatorDefault from "../../lib/SoundshareStatsAggregator.tsx";
import StreamKeyUtils from "utils/StreamKeyUtils.tsx";
import VideoStreamStatsDefault from "VideoStreamStats.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import GameAnalyticsUtils from "../game_detection/GameAnalyticsUtils.tsx";
import getSoundshareAnalyticsContextDefault from "utils/getSoundshareAnalyticsContext.tsx";
import getReportedStreamResolutionDefault from "utils/getReportedStreamResolution.tsx";
import getStreamSourceMetadataDefault from "utils/getStreamSourceMetadata.native.tsx";
import getMediaPerformanceClassDefault from "../device/getMediaPerformanceClass.android.tsx";
import ClipsStore from "../clips/ClipsStore.tsx";
import ApplicationStreamingSettingsStore from "../../stores/ApplicationStreamingSettingsStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import HookErrorStore from "../../stores/HookErrorStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import NetworkStore from "../../stores/NetworkStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RTCRegionStore from "../../stores/RTCRegionStore.tsx";
import RTCConnection from "../../lib/RTCConnection.tsx";

require = fn;
const getSystemAnalyticsInfo = fn(4605).getSystemAnalyticsInfo;
const Constants = fn(1074);
({ AnalyticEvents: map1, MediaEngineHookTypes: closure_14, RTCConnectionStates: closure_15 } = Constants);
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
let closure_17 = 5 * DurationsDefault.Millis.SECOND;
let closure_18 = {
  DETACHED: 0,
  [0]: "DETACHED",
  WAITING: 1,
  [1]: "WAITING",
  ATTACHED: 2,
  [2]: "ATTACHED",
  STARTED: 3,
  [3]: "STARTED",
  PLAYING: 4,
  [4]: "PLAYING",
  SILENCE: 5,
  [5]: "SILENCE",
};
class StreamRTCConnection extends tmp3 {
  constructor(arg0) {
    ({ sessionId, streamKey, serverId, initialLayout, channelId } = global);
    closure_0 = undefined;
    ({ analyticsContext, parentMediaSessionId } = global);
    obj = closure_0(closure_2[16]);
    decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    guildId = decodeStreamKeyResult.guildId;
    obj = {
      userId: null,
      sessionId: null,
      guildId: null,
      channelId: null,
      context: null,
      streamServerId: null,
      streamChannelId: null,
      parentMediaSessionId: null,
      joinVoiceId: null,
    };
    id = closure_6.getId();
    obj.userId = id;
    obj.sessionId = sessionId;
    obj.guildId = guildId;
    obj.channelId = decodeStreamKeyResult.channelId;
    STREAM = MediaEngineContextTypes.STREAM;
    obj.context = STREAM;
    obj.streamServerId = serverId;
    obj.streamChannelId = channelId;
    obj.parentMediaSessionId = parentMediaSessionId;
    tmp = new tmp(
      obj,
      tmp2,
      closure_6,
      id,
      sessionId,
      guildId,
      STREAM,
      serverId,
      channelId,
      new.target,
      tmp,
      new.target,
      closure_0,
      initialLayout,
    );
    closure_0 = tmp;
    tmp5 = new closure_1(closure_2[14])();
    tmp.soundshareStats = tmp5;
    tmp._firstFrameDelivered = false;
    tmp.screenshareFinishedCount = 0;
    tmp.soundshareFailuresReported = {};
    timeout = new closure_0(closure_2[15]).Timeout();
    tmp.errorTimer = timeout;
    tmp.streamContext = decodeStreamKeyResult;
    tmp.streamKey = streamKey;
    tmp7 = new closure_1(closure_2[17])(initialLayout, tmp.isOwner);
    tmp.videoStreamStats = tmp7;
    tmp.analyticsContext = analyticsContext;
    obj4 = closure_1(closure_2[18]);
    tmp.updateVideoStreamId = obj4.debounce((streamId, rtcServerId) => {
      let obj = StreamKeyUtils;
      ({ guildId, channelId, ownerId } = obj.decodeStreamKey(mediaEngineConnectionId.streamKey));
      const decodeStreamKeyResult = obj.decodeStreamKey(mediaEngineConnectionId.streamKey);
      obj = {
        type: "RTC_CONNECTION_VIDEO",
        guildId,
        channelId,
        userId: ownerId,
        streamId,
        rtcServerId,
        mediaEngineConnectionId: mediaEngineConnectionId.getMediaEngineConnectionId(),
        context: MediaEngineContextTypes.STREAM,
      };
      DispatcherDefault.dispatch(obj);
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
  sendVideo(arg0, arg1, arg2, arg3) {
    self = this;
    sendVideoResult = super.sendVideo(
      global,
      fn,
      importDefault,
      importAll.map((maxResolution) => {
        let tmp = maxResolution;
        if (null != maxResolution.maxResolution) {
          tmp = maxResolution;
          if (null != maxResolution.maxFrameRate) {
            const obj = {};
            const merged = Object.assign(maxResolution);
            obj.maxResolution = getReportedStreamResolutionDefault(
              "StreamRTCConnection",
              self.guildId,
              maxResolution.maxResolution,
              maxResolution.maxFrameRate,
            );
            tmp = obj;
          }
        }
        return tmp;
      }),
    );
    return;
  }
}
const prototype = StreamRTCConnection.prototype;
Object.defineProperty(prototype, "isOwner", {
  get: function isOwner() {
    return AuthenticationStore.getId() === this.streamContext.ownerId;
  },
  set: undefined,
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
    ({
      duration: obj3.duration,
      avg_bitrate: obj3.avg_bitrate,
      avg_fps: obj3.avg_fps,
      avg_resolution: obj3.avg_resolution,
      inbound_bitrate_estimate_percentile99: obj3.inbound_bitrate_estimate_percentile99,
    } = inboundStats);
    return {
      duration: null,
      avg_bitrate: null,
      avg_fps: null,
      avg_resolution: null,
      inbound_bitrate_estimate_percentile99: null,
    };
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
    let obj = { type: "RTC_CONNECTION_STATE", state };
    let merged = Object.assign(arg1);
    let merged1 = Object.assign(arg2);
    obj.streamKey = self.streamKey;
    obj.dispatch(obj);
    if (state === constants2.RTC_CONNECTED) {
      const _connection8 = self._connection;
      if (_connection8 != null) {
        _connection8.on(
          BaseConnectionEvent.BaseConnectionEvent.ScreenshareFinish,
          (
            screenshare_frames,
            videohook_frames,
            hybrid_dxgi_frames,
            hybrid_gdi_frames,
            hybrid_videohook_frames,
            hybrid_graphics_capture_frames,
            hybrid_capture_method_switches,
            hybrid_gdi_bitblt_frames,
            hybrid_gdi_printwindow_frames,
            hybrid_graphics_capture_frames_unique,
            hybrid_dxgi_frames_unique,
            hybrid_videohook_frames_unique,
            hybrid_gdi_bitblt_frames_unique,
            hybrid_gdi_printwindow_frames_unique,
            skip_history_json,
            quartz_frames,
            desktop_capturer_type,
            activity,
            go_live_camera_frames,
            screencapturekit_frames,
            hdr_frames_capable,
            hdr_frames,
            target_window_elevated,
            pipewire_frames,
            x11_frames,
            videohook_backend,
          ) => {
            let analyticsContext = videohook_frames.analyticsContext;
            videohook_frames.screenshareFinishedCount = videohook_frames.screenshareFinishedCount + 1;
            const streamApplicationFromHistory = analyticsContext.getStreamApplicationFromHistory(
              videohook_frames.screenshareFinishedCount,
            );
            const runningGameAnalytics = closure_1_0(dependencyMap[22]).getRunningGameAnalytics(
              streamApplicationFromHistory,
            );
            ({
              gameName: closure_26,
              gameId: closure_27,
              exe: closure_28,
              distributor: closure_29,
            } = runningGameAnalytics);
            const media_session_id = videohook_frames.getMediaSessionId();
            const rtc_connection_id = videohook_frames.getRTCConnectionId();
            let obj = closure_1_0(dependencyMap[22]);
            closure_1_4().then((result) => {
              let tmp = null;
              if (null != result) {
                let obj = { cpu_brand: null, cpu_vendor: null, cpu_memory: null, gpu_brand: null, gpu_memory: null };
                ({
                  cpu_brand: obj.cpu_brand,
                  cpu_vendor: obj.cpu_vendor,
                  cpu_memory: obj.cpu_memory,
                  gpu_brand: obj.gpu_brand,
                  gpu_memory: obj.gpu_memory,
                } = result);
                tmp = obj;
              }
              obj = {
                screenshare_frames,
                videohook_frames,
                hybrid_dxgi_frames,
                hybrid_gdi_frames,
                hybrid_videohook_frames,
                hybrid_graphics_capture_frames,
                hybrid_capture_method_switches,
                hybrid_gdi_bitblt_frames,
                hybrid_gdi_printwindow_frames,
                hybrid_graphics_capture_frames_unique,
                hybrid_dxgi_frames_unique,
                hybrid_videohook_frames_unique,
                hybrid_gdi_bitblt_frames_unique,
                hybrid_gdi_printwindow_frames_unique,
                skip_history_json,
                quartz_frames,
                screencapturekit_frames,
                go_live_camera_frames,
                total_frames: null,
                total_frames_unique: null,
                desktop_capturer_type: null,
                media_session_id: null,
                rtc_connection_id: null,
                context: null,
                activity: null,
                soundshare_session: null,
                picker_type_used: null,
                duration: null,
                share_game_name: null,
                share_game_id: null,
                share_game_exe: null,
                share_game_distributor: null,
                hdr_frames_capable: null,
                hdr_frames: null,
                discord_is_elevated: null,
                target_window_elevated: null,
                pipewire_frames: null,
                x11_frames: null,
                videohook_backend: null,
              };
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
              obj.total_frames = sum8 + num16;
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
              obj.total_frames_unique = sum11 + num11;
              obj.desktop_capturer_type = desktop_capturer_type;
              obj.media_session_id = media_session_id;
              obj.rtc_connection_id = rtc_connection_id;
              obj.context = constants3.STREAM;
              obj.activity = activity;
              const soundshareStats = closure_2_1.soundshareStats;
              obj.soundshare_session = soundshareStats.getStats().soundshare_last_session;
              let str = "internal";
              if (null != closure_2_1.analyticsContext.nativePickerStyleUsed) {
                str = "native";
              }
              obj.picker_type_used = str;
              const analyticsContext = closure_2_1.analyticsContext;
              obj.duration = analyticsContext.getDuration();
              obj.share_game_name = share_game_name;
              obj.share_game_id = share_game_id;
              obj.share_game_exe = share_game_exe;
              obj.share_game_distributor = share_game_distributor;
              obj.hdr_frames_capable = hdr_frames_capable;
              obj.hdr_frames = hdr_frames;
              const obj2 = self(1242);
              obj.discord_is_elevated = self(4554).getDiscordIsElevated();
              obj.target_window_elevated = target_window_elevated;
              obj.pipewire_frames = pipewire_frames;
              obj.x11_frames = x11_frames;
              obj.videohook_backend = videohook_backend;
              const merged = Object.assign(tmp);
              obj2.track(constants.SCREENSHARE_FINISHED, obj);
              const tmp2Result = self(4554);
            });
          },
        );
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
            let obj = self(1242);
            let desktopSource1;
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            obj = {};
            const merged = Object.assign(self(4695)(desktopSource1));
            const merged1 = Object.assign(closure_1_1.getSoundshareAnalyticsProperties());
            obj.track(constants.SOUNDSHARE_ATTACHED, obj);
            const tmp6 = self(4695);
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
            const obj3 = self(1242);
            if (goLiveSource != null) {
              desktopSource1 = goLiveSource.desktopSource;
            }
            const obj = {};
            const merged = Object.assign(self(4695)(desktopSource1));
            const merged1 = Object.assign(closure_1_1.getSoundshareAnalyticsProperties());
            obj3.track(constants.SOUNDSHARE_TRANSMITTING, obj);
            if (null != hookError.getHookError(constants2.SOUND)) {
              self(573).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              const tmp13Result = self(573);
            }
            const tmp16 = self(4695);
          }
        });
      }
      const _connection4 = self._connection;
      if (_connection4 != null) {
        _connection4.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareTrace, (type) => {
          const goLiveSource = MediaEngineStore.getGoLiveSource();
          let obj = closure_1_1;
          const soundshareStats = closure_1_1.soundshareStats;
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
            errorTimer2.start(closure_2_17, () => {
              closure_1_1(closure_1_2[19]).dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed",
              });
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
                obj = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: reason, errorCode: code };
                self(573).dispatch(obj);
                const obj2 = self(573);
              }
            }
          } else if ("soundshare_state_transition" === type) {
            if (type.newState === constants4.PLAYING) {
              const errorTimer3 = obj.errorTimer;
              errorTimer3.stop();
              self(573).dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              const obj4 = self(573);
            }
          }
        });
      }
      const _connection5 = self._connection;
      if (_connection5 != null) {
        _connection5.on(
          BaseConnectionEvent.BaseConnectionEvent.FirstFrameStats,
          (remoteVideoStreamCreatedTimestamp) => {
            let obj = closure_1_1;
            if (!closure_1_1._firstFrameDelivered) {
              obj._firstFrameDelivered = true;
              const streamAnalyticsProperties = obj.getStreamAnalyticsProperties();
              obj = {
                guild_id: null,
                channel_id: null,
                rtc_connection_id: null,
                media_session_id: null,
                parent_media_session_id: null,
                num_viewers: null,
                time_connected_to_first_frame_delivered: null,
                time_total_to_first_frame: null,
                time_remote_user_to_video_stream_created: null,
                time_video_stream_created_to_video_data_received: null,
                time_video_data_received_to_video_source_delivered_frame: null,
                time_remote_user_to_mls_external_sender_updated: null,
                time_remote_user_to_secure_frame_remote_key_ratchet_set: null,
                time_remote_user_to_secure_frame_local_key_ratchet_set: null,
                time_remote_user_to_first_frame_decrypted: null,
              };
              ({
                guild_id: obj3.guild_id,
                channel_id: obj3.channel_id,
                rtc_connection_id: obj3.rtc_connection_id,
                media_session_id: obj3.media_session_id,
                parent_media_session_id: obj3.parent_media_session_id,
              } = streamAnalyticsProperties);
              obj.num_viewers = obj.analyticsContext.numViewers;
              obj.time_connected_to_first_frame_delivered = obj.getDuration();
              const obj2 = self(1242);
              const obj4 = c0(4589);
              obj.time_total_to_first_frame = c0(4589).now() - obj.getCreatedTime();
              let NumberResult = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
                NumberResult = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                  const _Number = Number;
                  NumberResult = Number(
                    remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp -
                      remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp,
                  );
                }
              }
              obj.time_remote_user_to_video_stream_created = NumberResult;
              let NumberResult1 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
                NumberResult1 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp) {
                  const _Number2 = Number;
                  NumberResult1 = Number(
                    remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp -
                      remoteVideoStreamCreatedTimestamp.remoteVideoStreamCreatedTimestamp,
                  );
                }
              }
              obj.time_video_stream_created_to_video_data_received = NumberResult1;
              let NumberResult2 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp) {
                NumberResult2 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp) {
                  const _Number3 = Number;
                  NumberResult2 = Number(
                    remoteVideoStreamCreatedTimestamp.videoSourceDeliveredFrameTimestamp -
                      remoteVideoStreamCreatedTimestamp.videoDataReceivedTimestamp,
                  );
                }
              }
              obj.time_video_data_received_to_video_source_delivered_frame = NumberResult2;
              let NumberResult3 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp) {
                NumberResult3 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                  const _Number4 = Number;
                  NumberResult3 = Number(
                    remoteVideoStreamCreatedTimestamp.updateMLSExternalSenderTimestamp -
                      remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp,
                  );
                }
              }
              obj.time_remote_user_to_mls_external_sender_updated = NumberResult3;
              let NumberResult4 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
                NumberResult4 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                  const _Number5 = Number;
                  NumberResult4 = Number(
                    remoteVideoStreamCreatedTimestamp.setRemoteSecureFrameKeyRatchetTimestamp -
                      remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp,
                  );
                }
              }
              obj.time_remote_user_to_secure_frame_remote_key_ratchet_set = NumberResult4;
              let NumberResult5 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
                NumberResult5 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                  const _Number6 = Number;
                  NumberResult5 = Number(
                    remoteVideoStreamCreatedTimestamp.setLocalSecureFrameKeyRatchetTimestamp -
                      remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp,
                  );
                }
              }
              obj.time_remote_user_to_secure_frame_local_key_ratchet_set = NumberResult5;
              let NumberResult6 = null;
              if (undefined !== remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp) {
                NumberResult6 = null;
                if (undefined !== remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp) {
                  const _Number7 = Number;
                  NumberResult6 = Number(
                    remoteVideoStreamCreatedTimestamp.firstFrameDecryptedTimestamp -
                      remoteVideoStreamCreatedTimestamp.remoteUserCreatedTimestamp,
                  );
                }
              }
              obj.time_remote_user_to_first_frame_decrypted = NumberResult6;
              obj2.track(constants.RECEIVER_FIRST_FRAME_DELIVERED, obj);
              const nowResult = c0(4589).now();
            }
          },
        );
      }
      const _connection6 = self._connection;
      if (_connection6 != null) {
        _connection6.on(
          BaseConnectionEvent.BaseConnectionEvent.FirstFrameEncryptedStats,
          (videoReceiversSetTimestamp) => {
            const streamAnalyticsProperties = closure_1_1.getStreamAnalyticsProperties();
            self(1242);
            const obj = {
              guild_id: streamAnalyticsProperties.guild_id,
              channel_id: streamAnalyticsProperties.channel_id,
              rtc_connection_id: streamAnalyticsProperties.rtc_connection_id,
              media_session_id: streamAnalyticsProperties.media_session_id,
              parent_media_session_id: streamAnalyticsProperties.parent_media_session_id,
              time_local_user_to_video_receivers_set: null,
              time_local_user_to_mls_external_sender_updated: null,
              time_local_user_to_secure_frame_remote_key_ratchet_set: null,
              time_local_user_to_secure_frame_local_key_ratchet_set: null,
              time_local_user_to_first_frame_encrypted: null,
            };
            let NumberResult = null;
            if (undefined !== videoReceiversSetTimestamp.videoReceiversSetTimestamp) {
              NumberResult = null;
              if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                const _Number = Number;
                NumberResult = Number(
                  videoReceiversSetTimestamp.videoReceiversSetTimestamp -
                    videoReceiversSetTimestamp.localUserCreatedTimestamp,
                );
              }
            }
            obj.time_local_user_to_video_receivers_set = NumberResult;
            let NumberResult1 = null;
            if (undefined !== videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp) {
              NumberResult1 = null;
              if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                const _Number2 = Number;
                NumberResult1 = Number(
                  videoReceiversSetTimestamp.updateMLSExternalSenderTimestamp -
                    videoReceiversSetTimestamp.localUserCreatedTimestamp,
                );
              }
            }
            obj.time_local_user_to_mls_external_sender_updated = NumberResult1;
            let NumberResult2 = null;
            if (undefined !== videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp) {
              NumberResult2 = null;
              if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                const _Number3 = Number;
                NumberResult2 = Number(
                  videoReceiversSetTimestamp.setRemoteSecureFrameKeyRatchetTimestamp -
                    videoReceiversSetTimestamp.localUserCreatedTimestamp,
                );
              }
            }
            obj.time_local_user_to_secure_frame_remote_key_ratchet_set = NumberResult2;
            let NumberResult3 = null;
            if (undefined !== videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp) {
              NumberResult3 = null;
              if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                const _Number4 = Number;
                NumberResult3 = Number(
                  videoReceiversSetTimestamp.setLocalSecureFrameKeyRatchetTimestamp -
                    videoReceiversSetTimestamp.localUserCreatedTimestamp,
                );
              }
            }
            obj.time_local_user_to_secure_frame_local_key_ratchet_set = NumberResult3;
            let NumberResult4 = null;
            if (undefined !== videoReceiversSetTimestamp.firstFrameEncryptedTimestamp) {
              NumberResult4 = null;
              if (undefined !== videoReceiversSetTimestamp.localUserCreatedTimestamp) {
                const _Number5 = Number;
                NumberResult4 = Number(
                  videoReceiversSetTimestamp.firstFrameEncryptedTimestamp -
                    videoReceiversSetTimestamp.localUserCreatedTimestamp,
                );
              }
            }
            obj.time_local_user_to_first_frame_encrypted = NumberResult4;
            obj.track(constants.STREAMER_FIRST_FRAME_ENCRYPTED, obj);
          },
        );
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
  this.on(
    require("RTCConnectionEvent").RTCConnectionEvent.VideoSourceQualityChanged,
    (guildId, channelId, senderUserId, arg3, maxFrameRate, context) => {
      id = id.getId();
      self(573);
      const obj = {
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId,
        channelId,
        senderUserId,
        maxResolution: null,
        maxFrameRate: null,
        context: null,
      };
      let tmp4 = arg3;
      if (senderUserId === id) {
        tmp4 = self(4696)("StreamRTCConnection", guildId, arg3, maxFrameRate);
      }
      obj.maxResolution = tmp4;
      obj.maxFrameRate = maxFrameRate;
      obj.context = context;
      obj.dispatch(obj);
    },
  );
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.SecureFramesUpdate, () => {
    self(573).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
  });
  this.on(require("RTCConnectionEvent").RTCConnectionEvent.RosterMapUpdate, (userIds) => {
    self(573);
    const obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds };
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
  }
  if (tmp8) {
    obj = {
      soundshare_failure_code: code,
      soundshare_failure_reason: failureReason,
      soundshare_failure_will_retry: retry,
    };
    const merged = Object.assign(getSoundshareAnalyticsContextDefault(desktopSource));
    const merged1 = Object.assign(self.getSoundshareAnalyticsProperties());
    AnalyticsUtilsDefault.track(constants.SOUNDSHARE_FAILED, obj);
  }
  tmp8 = null == code || tmp6;
};
prototype["getStreamAnalyticsProperties"] = function getStreamAnalyticsProperties() {
  const self = this;
  ({ analyticsContext, streamContext } = this);
  ({ streamRegion, streamApplication, streamSourceType, actionContext } = analyticsContext);
  ({ ownerId, guildId } = streamContext);
  const region = RTCRegionStore.getRegion(RTCConnectionStore.getHostname());
  let obj = GameAnalyticsUtils;
  const runningGameAnalytics = obj.getRunningGameAnalytics(streamApplication);
  obj = {
    channel_id: this.channelId,
    rtc_connection_id: this.getRTCConnectionId(),
    media_session_id: this.getMediaSessionId(),
    parent_media_session_id: this.parentMediaSessionId,
    sender_user_id: ownerId,
    context: MediaEngineContextTypes.STREAM,
    guild_id: guildId,
    stream_region: streamRegion,
    stream_source_type: streamSourceType,
    guild_region: region,
    participant_type: null,
    share_application_name: null,
    share_application_id: null,
    share_application_executable: null,
    share_application_distributor: null,
    share_application_distributor_game_id: null,
    share_application_game_metadata: null,
    video_layout: null,
    client_event_source: null,
    voice_backend_version: null,
    rtc_worker_backend_version: null,
  };
  ({ gameName, gameId, exe, distributor, sku, gameMetadata } = runningGameAnalytics);
  let str = "receiver";
  if (this.isOwner) {
    str = "streamer";
  }
  obj.participant_type = str;
  obj.share_application_name = gameName;
  obj.share_application_id = gameId;
  obj.share_application_executable = exe;
  obj.share_application_distributor = distributor;
  obj.share_application_distributor_game_id = sku;
  obj.share_application_game_metadata = gameMetadata;
  const videoStreamStats = self.videoStreamStats;
  obj.video_layout = videoStreamStats.getLayout();
  obj.client_event_source = actionContext;
  ({ voiceVersion: obj2.voice_backend_version, rtcWorkerVersion: obj2.rtc_worker_backend_version } = self);
  return obj;
};
prototype["getSoundshareAnalyticsProperties"] = function getSoundshareAnalyticsProperties() {
  return {
    rtc_connection_id: this.getRTCConnectionId(),
    soundshare_experimental: MediaEngineStore.getExperimentalSoundshare(),
  };
};
prototype["trackVideoStartStats"] = function trackVideoStartStats() {
  const self = this;
  let tmp = null;
  if (this.isOwner) {
    tmp = getStreamSourceMetadataDefault();
  }
  const obj = {};
  const merged = Object.assign(self.getStreamAnalyticsProperties());
  const merged1 = Object.assign(tmp);
  obj.connection_type = NetworkStore.getType();
  obj.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
  obj.service_provider = NetworkStore.getServiceProvider();
  obj.duration_go_live_modal = self.analyticsContext.goLiveModalDurationMs;
  obj.source_location_stack = self.analyticsContext.analyticsLocations;
  obj.track(constants.VIDEO_STREAM_STARTED, obj);
};
prototype["trackVideoEndStats"] = function trackVideoEndStats(reason) {
  const self = this;
  const channel = obj.getChannel(this.channelId);
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
    obj = { stream_application_name: obj2(4701).default.getApplicationNames() };
    if (self.isOwner) {
      obj = { clips_enabled: tmp5(13674).isClipsEnabled(), clips_buffer_length: tmp8.clipsLength };
      const tmp5Result = tmp5(13674);
    } else {
      obj = {};
    }
    if (self.isOwner) {
      const obj1 = { bandwidth_estimation_experiment: self.getBandwidthEstimationExperiment() };
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
        obj2 = AnalyticsUtilsDefault;
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
        const merged7 = Object.assign(obj);
        const merged8 = Object.assign(obj2);
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
        obj = {};
        const merged = Object.assign(codecUsageStats);
        const merged1 = Object.assign(closure_2);
        const merged2 = Object.assign(obj);
        const videoStreamStats = self.videoStreamStats;
        const merged3 = Object.assign(videoStreamStats.getStats());
        const merged4 = Object.assign(inboundStats);
        const soundshareStats = self.soundshareStats;
        const merged5 = Object.assign(soundshareStats.getStats());
        const merged6 = Object.assign(self.getStreamAnalyticsProperties());
        const merged7 = Object.assign(obj);
        const merged8 = Object.assign(obj2);
        obj.app_hardware_acceleration_enabled = CrossPlatformNativeUtilsDefault.getAppHardwareAccelerationEnabled();
        obj.channel_type = type;
        obj.reason = reason;
        obj.max_viewers = self.analyticsContext.maxViewers;
        obj.hostname = self.hostname;
        obj.hardware_enabled = MediaEngineStore.getHardwareEncoding();
        let tmp2 = null;
        if (self.isOwner) {
          tmp2 = getMediaPerformanceClassDefault();
        }
        obj.device_performance_class = tmp2;
        obj.track(constants.VIDEO_STREAM_ENDED, obj);
      }
    });
    const _default = obj2(4701).default;
    tmp5 = obj2;
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
