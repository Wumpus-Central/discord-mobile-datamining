// discord_app/modules/go_live/StreamRTCConnection.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import CrossPlatformNativeUtilsDefault from "../../utils/CrossPlatformNativeUtils.native.tsx";
import Constants2 from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import SystemAnalyticsStore from "../system_analytics/SystemAnalyticsStore.native.tsx";
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
import Constants from "../../Constants.tsx";
import RTCConnection from "../../lib/RTCConnection.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0, dependencyMap, goLiveSource, set;

let closure_14;
let closure_15;
let map1;
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
({ AnalyticEvents: map1, MediaEngineHookTypes: closure_14, RTCConnectionStates: closure_15 } = Constants);
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
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
class StreamRTCConnection extends RTCConnection {
  constructor(arg0) {
    let STREAM;
    let analyticsContext;
    let channelId;
    let channelId2;
    let id;
    let initialLayout;
    let mediaEngineConnectionId;
    let parentMediaSessionId;
    let serverId;
    let sessionId;
    let streamKey;
    ({ sessionId, streamKey, serverId, initialLayout, channelId } = arg0);
    _require = undefined;
    ({ analyticsContext, parentMediaSessionId } = arg0);
    let obj = require("StreamKeyUtils");
    const decodeStreamKeyResult = obj.decodeStreamKey(streamKey);
    const guildId = decodeStreamKeyResult.guildId;
    let obj2 = {
      userId: id,
      sessionId,
      guildId,
      channelId: channelId2,
      context: STREAM,
      streamServerId: serverId,
      streamChannelId: channelId,
      parentMediaSessionId,
      joinVoiceId: null,
    };
    channelId2 = decodeStreamKeyResult.channelId;
    id = AuthenticationStore.getId();
    STREAM = MediaEngineContextTypes.STREAM;
    const tmp3 = new tmp(
      obj2,
      tmp2,
      AuthenticationStore,
      id,
      sessionId,
      guildId,
      STREAM,
      serverId,
      channelId,
      new.target,
      tmp,
      this,
      _require,
      initialLayout,
    );
    _require = tmp3;
    tmp3.soundshareStats = new SoundshareStatsAggregatorDefault();
    tmp3._firstFrameDelivered = false;
    tmp3.screenshareFinishedCount = 0;
    tmp3.soundshareFailuresReported = {};
    new SoundshareStatsAggregatorDefault();
    const timeout = new require("Timers").Timeout();
    tmp3.errorTimer = timeout;
    tmp3.streamContext = decodeStreamKeyResult;
    tmp3.streamKey = streamKey;
    tmp3.videoStreamStats = new VideoStreamStatsDefault(initialLayout, tmp3.isOwner);
    tmp3.analyticsContext = analyticsContext;
    new VideoStreamStatsDefault(initialLayout, tmp3.isOwner);
    const obj4 = _modDef12;
    tmp3.updateVideoStreamId = obj4.debounce((streamId, rtcServerId) => {
      let channelId;
      let guildId;
      let ownerId;
      const obj = StreamKeyUtils;
      ({ guildId, channelId, ownerId } = obj.decodeStreamKey(mediaEngineConnectionId.streamKey));
      obj.decodeStreamKey(mediaEngineConnectionId.streamKey);
      const obj2 = DispatcherDefault;
      const obj3 = {
        type: "RTC_CONNECTION_VIDEO",
        guildId,
        channelId,
        userId: ownerId,
        streamId,
        rtcServerId,
        mediaEngineConnectionId: mediaEngineConnectionId.getMediaEngineConnectionId(),
        context: MediaEngineContextTypes.STREAM,
      };
      obj2.dispatch(obj3);
    }, 200);
    const videoStreamStats = tmp3.videoStreamStats;
    videoStreamStats.start();
    tmp3.initializeEvents();
    return tmp3;
  }
  destroy(arg0) {
    const videoStreamStats = this.videoStreamStats;
    videoStreamStats.stop();
    this.trackVideoEndStats(arg0);
    const updateVideoStreamId = this.updateVideoStreamId;
    updateVideoStreamId.cancel();
    this.updateVideoStreamId(null, null);
    const updateVideoStreamId2 = this.updateVideoStreamId;
    updateVideoStreamId2.flush();
    const errorTimer = this.errorTimer;
    errorTimer.stop();
    super.destroy();
  }
  streamUpdate(arg0) {
    const _videoQuality = this._videoQuality;
    if (null != _videoQuality) {
      const tmp = arg0;
      if (tmp) {
        _videoQuality.pause();
      } else {
        _videoQuality.resume();
      }
    }
  }
  layoutChange(arg0) {
    const videoStreamStats = this.videoStreamStats;
    videoStreamStats.layoutChange(arg0);
  }
  autoQualityChange() {
    const videoStreamStats = this.videoStreamStats;
    videoStreamStats.autoQualityChange();
  }
  getVideoStats() {
    const _videoQuality = this._videoQuality;
    if (null != _videoQuality) {
      let inboundStats;
      if (this.isOwner) {
        let first = _videoQuality.getOutboundStats()[0];
        if (first == null) {
          first = {};
        }
        inboundStats = first;
      } else {
        inboundStats = _videoQuality.getInboundStats(tmp);
        if (inboundStats == null) {
          inboundStats = {};
        }
      }
      const obj = {
        duration: null,
        avg_bitrate: null,
        avg_fps: null,
        avg_resolution: null,
        inbound_bitrate_estimate_percentile99: null,
      };
      ({
        duration: obj3.duration,
        avg_bitrate: obj3.avg_bitrate,
        avg_fps: obj3.avg_fps,
        avg_resolution: obj3.avg_resolution,
        inbound_bitrate_estimate_percentile99: obj3.inbound_bitrate_estimate_percentile99,
      } = inboundStats);
      return obj;
    } else {
      return null;
    }
  }
  getRegion() {
    return this.analyticsContext.streamRegion;
  }
  getMaxViewers() {
    return this.analyticsContext.maxViewers;
  }
  getVoiceParticipantType() {
    let str = "receiver";
    if (this.isOwner) {
      str = "streamer";
    }
    return str;
  }
  initializeEvents() {
    let constants3;
    let constants4;
    let hookError;
    const self = this;
    _require = false;
    this.on(require("RTCConnectionEvent").RTCConnectionEvent.State, (state, arg1, arg2) => {
      const tmp2 = DispatcherDefault;
      let obj = { type: "RTC_CONNECTION_STATE", state, streamKey: self.streamKey };
      const dispatch = tmp2.dispatch;
      let merged = Object.assign(arg1);
      let merged1 = Object.assign(arg2);
      const dispatchResult = dispatch(obj);
      if (state === constants.RTC_CONNECTED) {
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
              let closure_26;
              let closure_27;
              let closure_28;
              let closure_29;
              let share_game_distributor;
              let share_game_exe;
              let share_game_id;
              let share_game_name;
              let analyticsContext = videohook_frames.analyticsContext;
              videohook_frames.screenshareFinishedCount = videohook_frames.screenshareFinishedCount + 1;
              const streamApplicationFromHistory = analyticsContext.getStreamApplicationFromHistory(
                videohook_frames.screenshareFinishedCount,
              );
              let obj = closure_1_0(closure_1_2[22]);
              const runningGameAnalytics = obj.getRunningGameAnalytics(streamApplicationFromHistory);
              ({
                gameName: closure_26,
                gameId: closure_27,
                exe: closure_28,
                distributor: closure_29,
              } = runningGameAnalytics);
              const media_session_id = videohook_frames.getMediaSessionId();
              const rtc_connection_id = videohook_frames.getRTCConnectionId();
              const promise = closure_1_4();
              promise.then((result) => {
                let analyticsContext;
                let num11;
                let num16;
                let soundshareStats;
                let str;
                let sum11;
                let sum8;
                let tmp2Result;
                let tmp = null;
                if (null != result) {
                  const obj = {
                    cpu_brand: null,
                    cpu_vendor: null,
                    cpu_memory: null,
                    gpu_brand: null,
                    gpu_memory: null,
                  };
                  ({
                    cpu_brand: obj.cpu_brand,
                    cpu_vendor: obj.cpu_vendor,
                    cpu_memory: obj.cpu_memory,
                    gpu_brand: obj.gpu_brand,
                    gpu_memory: obj.gpu_memory,
                  } = result);
                  tmp = obj;
                }
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
                const obj2 = {
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
                  total_frames: sum8 + num16,
                  total_frames_unique: sum11 + num11,
                  desktop_capturer_type,
                  media_session_id,
                  rtc_connection_id,
                  context: constants3.STREAM,
                  activity,
                  soundshare_session: soundshareStats.getStats().soundshare_last_session,
                  picker_type_used: str,
                  duration: analyticsContext.getDuration(),
                  share_game_name,
                  share_game_id,
                  share_game_exe,
                  share_game_distributor,
                  hdr_frames_capable,
                  hdr_frames,
                  discord_is_elevated: tmp2Result.getDiscordIsElevated(),
                  target_window_elevated,
                  pipewire_frames,
                  x11_frames,
                  videohook_backend,
                };
                num11 = hybrid_gdi_printwindow_frames_unique;
                let num12 = quartz_frames;
                let num13 = screencapturekit_frames;
                let num14 = go_live_camera_frames;
                const track = self(dependencyMap[23]).track;
                const SCREENSHARE_FINISHED = constants.SCREENSHARE_FINISHED;
                self(dependencyMap[23]);
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
                num16 = pipewire_frames;
                sum8 = sum7 + num15;
                if (pipewire_frames == null) {
                  num16 = 0;
                }
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
                sum11 = sum10 + num10;
                if (num11 == null) {
                  num11 = 0;
                }
                soundshareStats = closure_2_1.soundshareStats;
                str = "internal";
                if (null != closure_2_1.analyticsContext.nativePickerStyleUsed) {
                  str = "native";
                }
                analyticsContext = closure_2_1.analyticsContext;
                tmp2Result = self(dependencyMap[24]);
                const merged = Object.assign(tmp);
                track(SCREENSHARE_FINISHED, obj2);
              });
            },
          );
        }
        const _connection = self._connection;
        if (_connection != null) {
          _connection.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareAttached, () => {
            goLiveSource = MediaEngineStore.getGoLiveSource();
            let desktopSource;
            if (goLiveSource != null) {
              desktopSource = goLiveSource.desktopSource;
            }
            if (null != desktopSource) {
              const track = self(dependencyMap[23]).track;
              const SOUNDSHARE_ATTACHED = constants.SOUNDSHARE_ATTACHED;
              let desktopSource1;
              self(dependencyMap[23]);
              const tmp7 = self(dependencyMap[25]);
              if (goLiveSource != null) {
                desktopSource1 = goLiveSource.desktopSource;
              }
              const obj = {};
              const merged = Object.assign(tmp7(desktopSource1));
              const merged1 = Object.assign(closure_1_1.getSoundshareAnalyticsProperties());
              track(SOUNDSHARE_ATTACHED, obj);
            }
          });
        }
        const _connection2 = self._connection;
        if (_connection2 != null) {
          _connection2.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareFailed, (arg0) => {
            let failureCode;
            let failureReason;
            let willRetry;
            ({ failureCode, failureReason, willRetry } = arg0);
            goLiveSource = MediaEngineStore.getGoLiveSource();
            let desktopSource;
            const reportSoundshareFailure = self.reportSoundshareFailure;
            if (goLiveSource != null) {
              desktopSource = goLiveSource.desktopSource;
            }
            const result = reportSoundshareFailure(desktopSource, failureCode, failureReason, willRetry);
          });
        }
        const _connection3 = self._connection;
        if (_connection3 != null) {
          _connection3.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareSpeaking, () => {
            goLiveSource = MediaEngineStore.getGoLiveSource();
            let desktopSource;
            if (goLiveSource != null) {
              desktopSource = goLiveSource.desktopSource;
            }
            if (null != desktopSource) {
              const track = self(dependencyMap[23]).track;
              const SOUNDSHARE_TRANSMITTING = constants.SOUNDSHARE_TRANSMITTING;
              let desktopSource1;
              self(dependencyMap[23]);
              const tmp17 = self(dependencyMap[25]);
              if (goLiveSource != null) {
                desktopSource1 = goLiveSource.desktopSource;
              }
              const obj = {};
              const merged = Object.assign(tmp17(desktopSource1));
              const merged1 = Object.assign(closure_1_1.getSoundshareAnalyticsProperties());
              track(SOUNDSHARE_TRANSMITTING, obj);
              if (null != hookError.getHookError(constants2.SOUND)) {
                const tmp13Result = self(dependencyMap[19]);
                tmp13Result.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              }
            }
          });
        }
        const _connection4 = self._connection;
        if (_connection4 != null) {
          _connection4.on(BaseConnectionEvent.BaseConnectionEvent.SoundshareTrace, (type) => {
            let code;
            let reason;
            let retry;
            goLiveSource = MediaEngineStore.getGoLiveSource();
            const soundshareStats = closure_1_1.soundshareStats;
            let soundshareSession;
            const traceEvent = soundshareStats.traceEvent;
            if (goLiveSource != null) {
              const desktopSource = goLiveSource.desktopSource;
              if (desktopSource != null) {
                soundshareSession = desktopSource.soundshareSession;
              }
            }
            traceEvent(soundshareSession, type);
            type = type.type;
            if ("soundshare_attach_requested" === type) {
              const errorTimer2 = closure_1_1.errorTimer;
              errorTimer2.start(closure_2_17, () => {
                const obj = closure_1_1(closure_1_2[19]);
                obj.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: "Sound Hook Failed" });
              });
            } else if ("soundshare_recv_failed" === type) {
              ({ reason, code, retry } = type);
              let desktopSource1;
              if (goLiveSource != null) {
                desktopSource1 = goLiveSource.desktopSource;
              }
              if (null != desktopSource1) {
                let desktopSource2;
                const reportSoundshareFailure = closure_1_1.reportSoundshareFailure;
                if (goLiveSource != null) {
                  desktopSource2 = goLiveSource.desktopSource;
                }
                const result = reportSoundshareFailure(desktopSource2, code, reason, retry);
                if (!retry) {
                  const errorTimer = closure_1_1.errorTimer;
                  errorTimer.stop();
                  let obj = self(dependencyMap[19]);
                  const obj2 = { type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: reason, errorCode: code };
                  obj.dispatch(obj2);
                }
              }
            } else if ("soundshare_state_transition" === type) {
              if (type.newState === constants4.PLAYING) {
                const errorTimer3 = closure_1_1.errorTimer;
                errorTimer3.stop();
                const obj3 = self(dependencyMap[19]);
                obj3.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING" });
              }
            }
          });
        }
        const _connection5 = self._connection;
        if (_connection5 != null) {
          _connection5.on(
            BaseConnectionEvent.BaseConnectionEvent.FirstFrameStats,
            (remoteVideoStreamCreatedTimestamp) => {
              let NumberResult;
              let NumberResult1;
              let NumberResult2;
              let NumberResult3;
              let NumberResult4;
              let NumberResult5;
              let NumberResult6;
              let nowResult;
              if (!closure_1_1._firstFrameDelivered) {
                closure_1_1._firstFrameDelivered = true;
                const streamAnalyticsProperties = closure_1_1.getStreamAnalyticsProperties();
                ({
                  guild_id: obj2.guild_id,
                  channel_id: obj2.channel_id,
                  rtc_connection_id: obj2.rtc_connection_id,
                  media_session_id: obj2.media_session_id,
                  parent_media_session_id: obj2.parent_media_session_id,
                } = streamAnalyticsProperties);
                const obj4 = {
                  guild_id: null,
                  channel_id: null,
                  rtc_connection_id: null,
                  media_session_id: null,
                  parent_media_session_id: null,
                  num_viewers: closure_1_1.analyticsContext.numViewers,
                  time_connected_to_first_frame_delivered: closure_1_1.getDuration(),
                  time_total_to_first_frame: nowResult - closure_1_1.getCreatedTime(),
                  time_remote_user_to_video_stream_created: NumberResult,
                  time_video_stream_created_to_video_data_received: NumberResult1,
                  time_video_data_received_to_video_source_delivered_frame: NumberResult2,
                  time_remote_user_to_mls_external_sender_updated: NumberResult3,
                  time_remote_user_to_secure_frame_remote_key_ratchet_set: NumberResult4,
                  time_remote_user_to_secure_frame_local_key_ratchet_set: NumberResult5,
                  time_remote_user_to_first_frame_decrypted: NumberResult6,
                };
                const track = self(dependencyMap[23]).track;
                const RECEIVER_FIRST_FRAME_DELIVERED = constants.RECEIVER_FIRST_FRAME_DELIVERED;
                self(dependencyMap[23]);
                const obj3 = c0(dependencyMap[26]);
                NumberResult = null;
                nowResult = obj3.now();
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
                NumberResult1 = null;
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
                NumberResult2 = null;
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
                NumberResult3 = null;
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
                NumberResult4 = null;
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
                NumberResult5 = null;
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
                NumberResult6 = null;
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
                track(RECEIVER_FIRST_FRAME_DELIVERED, obj4);
              }
            },
          );
        }
        const _connection6 = self._connection;
        if (_connection6 != null) {
          _connection6.on(
            BaseConnectionEvent.BaseConnectionEvent.FirstFrameEncryptedStats,
            (videoReceiversSetTimestamp) => {
              let NumberResult;
              let NumberResult1;
              let NumberResult2;
              let NumberResult3;
              let NumberResult4;
              const streamAnalyticsProperties = closure_1_1.getStreamAnalyticsProperties();
              const obj = {
                guild_id: streamAnalyticsProperties.guild_id,
                channel_id: streamAnalyticsProperties.channel_id,
                rtc_connection_id: streamAnalyticsProperties.rtc_connection_id,
                media_session_id: streamAnalyticsProperties.media_session_id,
                parent_media_session_id: streamAnalyticsProperties.parent_media_session_id,
                time_local_user_to_video_receivers_set: NumberResult,
                time_local_user_to_mls_external_sender_updated: NumberResult1,
                time_local_user_to_secure_frame_remote_key_ratchet_set: NumberResult2,
                time_local_user_to_secure_frame_local_key_ratchet_set: NumberResult3,
                time_local_user_to_first_frame_encrypted: NumberResult4,
              };
              NumberResult = null;
              const track = self(dependencyMap[23]).track;
              const STREAMER_FIRST_FRAME_ENCRYPTED = constants.STREAMER_FIRST_FRAME_ENCRYPTED;
              self(dependencyMap[23]);
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
              NumberResult1 = null;
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
              NumberResult2 = null;
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
              NumberResult3 = null;
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
              NumberResult4 = null;
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
              track(STREAMER_FIRST_FRAME_ENCRYPTED, obj);
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
      const obj = StreamKeyUtils;
      const decodeStreamKeyResult = obj.decodeStreamKey(self.streamKey);
      const tmp2 =
        decodeStreamKeyResult.guildId === arg0 &&
        decodeStreamKeyResult.channelId === arg1 &&
        decodeStreamKeyResult.ownerId === arg2;
      if (tmp2) {
        const tmp6 = null == self.getMediaSessionId() || c0;
        if (!tmp6) {
          self.trackVideoStartStats();
          c0 = true;
        }
        self.updateVideoStreamId(arg3, arg4);
      }
    });
    this.on(
      require("RTCConnectionEvent").RTCConnectionEvent.VideoSourceQualityChanged,
      (guildId, channelId, senderUserId, arg3, maxFrameRate, context) => {
        let tmp5;
        id = id.getId();
        const obj = {
          type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
          guildId,
          channelId,
          senderUserId,
          maxResolution: tmp5,
          maxFrameRate,
          context,
        };
        tmp5 = arg3;
        const dispatch = self(dependencyMap[19]).dispatch;
        self(dependencyMap[19]);
        if (senderUserId === id) {
          tmp5 = self(dependencyMap[27])("StreamRTCConnection", guildId, arg3, maxFrameRate);
        }
        dispatch(obj);
      },
    );
    this.on(require("RTCConnectionEvent").RTCConnectionEvent.SecureFramesUpdate, () => {
      const obj = self(dependencyMap[19]);
      obj.dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
    });
    this.on(require("RTCConnectionEvent").RTCConnectionEvent.RosterMapUpdate, (userIds) => {
      const obj = self(dependencyMap[19]);
      const obj2 = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds };
      obj.dispatch(obj2);
    });
  }
  reportSoundshareFailure(desktopSource, code, failureReason, retry) {
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
      const self2 = this;
      const self3 = this;
      const soundshareFailuresReported = self.soundshareFailuresReported;
      soundshareFailuresReported[str] = new Set();
      set = new Set();
    }
    let tmp4 = null != code;
    if (tmp4) {
      const obj = self.soundshareFailuresReported[str];
      tmp4 = !obj.has(code);
    }
    if (tmp4) {
      const obj2 = self.soundshareFailuresReported[str];
      obj2.add(code);
    }
    const tmp6 = null == code || tmp4;
    if (tmp6) {
      const obj3 = {
        soundshare_failure_code: code,
        soundshare_failure_reason: failureReason,
        soundshare_failure_will_retry: retry,
      };
      const track = AnalyticsUtilsDefault.track;
      const SOUNDSHARE_FAILED = map1.SOUNDSHARE_FAILED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(getSoundshareAnalyticsContextDefault(desktopSource));
      const merged1 = Object.assign(self.getSoundshareAnalyticsProperties());
      track(SOUNDSHARE_FAILED, obj3);
    }
  }
  getStreamAnalyticsProperties() {
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
    let str;
    let streamApplication;
    let streamContext;
    let streamRegion;
    let streamSourceType;
    let videoStreamStats;
    const self = this;
    ({ analyticsContext, streamContext } = this);
    ({ streamRegion, streamApplication, streamSourceType, actionContext } = analyticsContext);
    ({ ownerId, guildId } = streamContext);
    const region = RTCRegionStore.getRegion(RTCConnectionStore.getHostname());
    const obj = GameAnalyticsUtils;
    const runningGameAnalytics = obj.getRunningGameAnalytics(streamApplication);
    const obj3 = {
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
      participant_type: str,
      share_application_name: gameName,
      share_application_id: gameId,
      share_application_executable: exe,
      share_application_distributor: distributor,
      share_application_distributor_game_id: sku,
      share_application_game_metadata: gameMetadata,
      video_layout: videoStreamStats.getLayout(),
      client_event_source: actionContext,
      voice_backend_version: null,
      rtc_worker_backend_version: null,
    };
    ({ gameName, gameId, exe, distributor, sku, gameMetadata } = runningGameAnalytics);
    str = "receiver";
    if (this.isOwner) {
      str = "streamer";
    }
    videoStreamStats = self.videoStreamStats;
    ({ voiceVersion: obj2.voice_backend_version, rtcWorkerVersion: obj2.rtc_worker_backend_version } = self);
    return obj3;
  }
  getSoundshareAnalyticsProperties() {
    const obj = {
      rtc_connection_id: this.getRTCConnectionId(),
      soundshare_experimental: MediaEngineStore.getExperimentalSoundshare(),
    };
    return obj;
  }
  trackVideoStartStats() {
    const self = this;
    let tmp = null;
    if (this.isOwner) {
      tmp = getStreamSourceMetadataDefault();
    }
    const obj = {
      connection_type: NetworkStore.getType(),
      effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(),
      service_provider: NetworkStore.getServiceProvider(),
      duration_go_live_modal: self.analyticsContext.goLiveModalDurationMs,
      source_location_stack: self.analyticsContext.analyticsLocations,
    };
    const track = AnalyticsUtilsDefault.track;
    const VIDEO_STREAM_STARTED = map1.VIDEO_STREAM_STARTED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(self.getStreamAnalyticsProperties());
    const merged1 = Object.assign(tmp);
    track(VIDEO_STREAM_STARTED, obj);
  }
  trackVideoEndStats(reason) {
    let _default;
    let closure_2;
    let obj3;
    let obj5;
    let tmp5Result;
    const self = this;
    const channel = obj3.getChannel(this.channelId);
    let type = null;
    if (null != channel) {
      type = channel.type;
    }
    const _videoQuality = self._videoQuality;
    if (null != _videoQuality) {
      dependencyMap = _videoQuality.getNetworkStats();
      const getCodecUsageStats = _videoQuality.getCodecUsageStats;
      if (self.isOwner) {
        let codecUsageStats = getCodecUsageStats("streamer", self.userId);
      } else {
        codecUsageStats = getCodecUsageStats("receiver", tmp3);
      }
      let obj = { stream_application_name: _default.getApplicationNames() };
      _default = obj5(5031).default;
      const tmp5 = obj5;
      if (self.isOwner) {
        let obj2 = { clips_enabled: tmp5Result.isClipsEnabled(), clips_buffer_length: tmp8.clipsLength };
        obj3 = obj2;
        tmp5Result = tmp5(13485);
      } else {
        obj3 = {};
      }
      if (self.isOwner) {
        obj5 = { bandwidth_estimation_experiment: self.getBandwidthEstimationExperiment() };
        const obj4 = { bandwidth_estimation_experiment: self.getBandwidthEstimationExperiment() };
      } else {
        obj5 = {};
      }
      const outboundStats = _videoQuality.getOutboundStats();
      const item = outboundStats.forEach((num_frames) => {
        let tmp;
        let tmp4Result;
        let num = num_frames.num_frames;
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          obj = {
            app_hardware_acceleration_enabled: obj3.getAppHardwareAccelerationEnabled(),
            channel_type: type,
            reason,
            max_viewers: self.analyticsContext.maxViewers,
            hostname: self.hostname,
            hardware_enabled: MediaEngineStore.getHardwareEncoding(),
            device_performance_class: tmp,
            soundshare_experimental: MediaEngineStore.getExperimentalSoundshare(),
            quality_preset: ApplicationStreamingSettingsStore.getState().preset,
            discord_is_elevated: tmp4Result.getDiscordIsElevated(),
          };
          const track = AnalyticsUtilsDefault.track;
          const VIDEO_STREAM_ENDED = map1.VIDEO_STREAM_ENDED;
          AnalyticsUtilsDefault;
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
          const merged8 = Object.assign(obj5);
          obj3 = CrossPlatformNativeUtilsDefault;
          tmp = null;
          if (self.isOwner) {
            tmp = getMediaPerformanceClassDefault();
          }
          tmp4Result = CrossPlatformNativeUtilsDefault;
          track(VIDEO_STREAM_ENDED, obj);
        }
      });
      const inboundParticipants = _videoQuality.getInboundParticipants();
      const item1 = inboundParticipants.forEach((item) => {
        let obj2;
        let tmp2;
        const inboundStats = _videoQuality.getInboundStats(item);
        let num;
        if (inboundStats != null) {
          num = inboundStats.num_frames;
        }
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          obj = {
            app_hardware_acceleration_enabled: obj2.getAppHardwareAccelerationEnabled(),
            channel_type: type,
            reason,
            max_viewers: self.analyticsContext.maxViewers,
            hostname: self.hostname,
            hardware_enabled: MediaEngineStore.getHardwareEncoding(),
            device_performance_class: tmp2,
          };
          const track = AnalyticsUtilsDefault.track;
          const VIDEO_STREAM_ENDED = map1.VIDEO_STREAM_ENDED;
          AnalyticsUtilsDefault;
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
          tmp2 = null;
          obj2 = CrossPlatformNativeUtilsDefault;
          if (self.isOwner) {
            tmp2 = getMediaPerformanceClassDefault();
          }
          track(VIDEO_STREAM_ENDED, obj);
        }
      });
    }
  }
  getExtraConnectionOptions() {
    let obj2;
    const obj = { streamUserId: obj2.decodeStreamKey(this.streamKey).ownerId };
    obj2 = StreamKeyUtils;
    return obj;
  }
  getMediaStreamKey() {
    return this.streamKey;
  }
  sendVideo(arg0, arg1, arg2, arr) {
    const self = this;
    super.sendVideo(
      arg0,
      arg1,
      arg2,
      arr.map((maxResolution) => {
        let tmp = maxResolution;
        if (null != maxResolution.maxResolution) {
          tmp = maxResolution;
          if (null != maxResolution.maxFrameRate) {
            const obj = {
              maxResolution: getReportedStreamResolutionDefault(
                "StreamRTCConnection",
                self.guildId,
                maxResolution.maxResolution,
                maxResolution.maxFrameRate,
              ),
            };
            const merged = Object.assign(maxResolution);
            tmp = obj;
          }
        }
        return tmp;
      }),
    );
  }
}
const prototype = StreamRTCConnection.prototype;
Object.defineProperty(prototype, "isOwner", {
  get: function isOwner() {
    return AuthenticationStore.getId() === this.streamContext.ownerId;
  },
  set: undefined,
});
let result = size.fileFinishedImporting("modules/go_live/StreamRTCConnection.tsx");
class StreamRTCAnalyticsContext {
  constructor(arg0) {
    let actionContext;
    let analyticsLocations;
    let goLiveModalDurationMs;
    let numViewers;
    let streamApplication;
    let streamRegion;
    let streamSourceType;
    ({ streamApplication, numViewers, analyticsLocations } = arg0);
    ({ streamRegion, streamSourceType, actionContext, goLiveModalDurationMs } = arg0);
    const obj = Object.create(new.target.prototype);
    obj.streamRegion = streamRegion;
    obj.streamApplication = streamApplication;
    const items = [streamApplication];
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
  setActionContext(appContext) {
    this.actionContext = appContext;
  }
  updateStreamApplication(streamApplication) {
    this.streamApplication = streamApplication;
    const items = [];
    items[HermesBuiltin.arraySpread(items, this.streamApplicationHistory, 0)] = streamApplication;
    this.streamApplicationHistory = items;
  }
  setAnalyticsLocations(analyticsLocations) {
    this.analyticsLocations = analyticsLocations;
  }
  trackViewerCount(length) {
    this.maxViewers = Math.max(length, this.maxViewers);
    this.numViewers = length;
  }
  setNativePickerStyleUsed(nativePickerStyleUsed) {
    this.nativePickerStyleUsed = nativePickerStyleUsed;
  }
  trackStart() {
    this.startTime = performance.now();
  }
  trackEnd() {
    this.endTime = performance.now();
  }
  getStreamApplicationFromHistory(screenshareFinishedCount) {
    return this.streamApplicationHistory[screenshareFinishedCount];
  }
  getDuration() {
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
  }
}
const prototype2 = StreamRTCAnalyticsContext.prototype;

export default StreamRTCConnection;
export { StreamRTCAnalyticsContext };
