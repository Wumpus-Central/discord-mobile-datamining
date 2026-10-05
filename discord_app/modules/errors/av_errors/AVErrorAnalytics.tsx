// === Module 18047: AVErrorAnalytics ===

// Module 18047 (AVErrorAnalytics)
import Constants2 from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ProcessUtilsDefault from "ProcessUtils" /* 1363 */;
import CrossPlatformNativeUtilsDefault from "CrossPlatformNativeUtils" /* 4884 */;
import SystemAnalyticsStore from "SystemAnalyticsStore" /* 4935 */;
import VideoQualityStats from "VideoQualityStats" /* 7232 */;
import WindowVisibilityVideoManager2 from "WindowVisibilityVideoManager" /* 9109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MediaEngineStatsStore from "MediaEngineStatsStore" /* 4928 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4936 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import RTCRegionStore from "RTCRegionStore" /* 4940 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import Constants from "Constants" /* 4915 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, cpu_brand;

let closure_14;
let closure_15;
function getCurrentScreenshareCaptureMethod(mediaEngineConnectionId) {
  let tmp23;
  const connectionStats = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
  const lastConnectionStats = MediaEngineStatsStore.getLastConnectionStats(mediaEngineConnectionId);
  if (null != connectionStats) {
    if (null != lastConnectionStats) {
      const obj = {};
      const items = ["videohookFrames", "hybridDxgiFrames", "hybridGdiFrames", "hybridVideohookFrames", "hybridGraphicsCaptureFrames", "hybridGdiBitBltFrames", "hybridGdiPrintWindowFrames", "quartzFrames", "screenCaptureKitFrames"];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        let screenshare = lastConnectionStats.stats.screenshare;
        let num;
        if (screenshare != null) {
          num = screenshare[tmp6];
        }
        if (num == null) {
          num = 0;
        }
        let screenshare2 = connectionStats.stats.screenshare;
        let num2;
        let tmp8 = num;
        if (screenshare2 != null) {
          num2 = screenshare2[tmp6];
        }
        if (num2 == null) {
          num2 = 0;
        }
        obj[tmp6] = num2 - tmp8;
        continue;
      }
      let num3 = -1;
      let tmp12 = null;
      const _Object = Object;
      const entries = Object.entries(obj);
      const tmp16 = entries[Symbol.iterator]();
      while (tmp16 !== undefined) {
        [, tmp23] = tmp18;
        if (tmp23 > num3) {
          num3 = tmp23;
          tmp12 = tmp22;
        }
        continue;
      }
      let tmp26 = null;
      if (num3 > 0) {
        tmp26 = tmp12;
      }
      return tmp26;
    }
  }
  return null;
}
const getSystemAnalyticsInfo = SystemAnalyticsStore.getSystemAnalyticsInfo;
const AnalyticEvents = Constants2.AnalyticEvents;
({ MediaEngineContextTypes: closure_14, SIMULCAST_HQ_QUALITY: closure_15 } = Constants);
const result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorAnalytics.tsx");

export const sendAVErrorAnalyticsEvent = function sendAVErrorAnalyticsEvent(error, context) {
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_4;
  let errorInfo;
  let errorMessage;
  let inboundStats;
  let tmp32;
  let videoEncoder;
  _require = error;
  let tmp = _require;
  let tmp2 = errorInfo;
  let obj = require("AVError");
  errorInfo = obj.getErrorInfo(error);
  let channelId;
  const voiceChannelId = videoEncoder.getVoiceChannelId();
  if ("channelId" in context) {
    channelId = context.channelId;
  }
  if (channelId == null) {
    channelId = voiceChannelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  const channel = errorMessage.getChannel(channelId);
  let streamKey;
  if ("streamKey" in context) {
    streamKey = context.streamKey;
  }
  let mediaContext;
  if ("mediaContext" in context) {
    mediaContext = context.mediaContext;
  }
  let underlyingError;
  if ("underlyingError" in context) {
    underlyingError = context.underlyingError;
  }
  errorMessage = undefined;
  if ("errorMessage" in context) {
    errorMessage = context.errorMessage;
  }
  let mediaSessionId;
  if ("mediaSessionId" in context) {
    mediaSessionId = context.mediaSessionId;
  }
  let rtcConnectionId;
  if ("rtcConnectionId" in context) {
    rtcConnectionId = context.rtcConnectionId;
  }
  let videoCodec;
  if ("videoCodec" in context) {
    videoCodec = context.videoCodec;
  }
  videoEncoder = undefined;
  if ("videoEncoder" in context) {
    videoEncoder = context.videoEncoder;
  }
  let videoDecoder;
  if ("videoDecoder" in context) {
    videoDecoder = context.videoDecoder;
  }
  let prop;
  if ("audioCaptureSampleRateMismatchPercent" in context) {
    prop = context.audioCaptureSampleRateMismatchPercent;
  }
  let audioInputDeviceName;
  if ("audioInputDeviceName" in context) {
    audioInputDeviceName = context.audioInputDeviceName;
  }
  let prop1;
  if ("audioOutputDeviceName" in context) {
    prop1 = context.audioOutputDeviceName;
  }
  let videoDeviceName;
  if ("videoDeviceName" in context) {
    videoDeviceName = context.videoDeviceName;
  }
  let userId;
  if ("userId" in context) {
    userId = context.userId;
  }
  let prop2;
  if ("voiceProcessingErrorDetails" in context) {
    prop2 = context.voiceProcessingErrorDetails;
  }
  let decodeStreamKeyResult = null;
  if (null != streamKey) {
    const tmpResult = tmp(tmp2[13]);
    decodeStreamKeyResult = tmpResult.decodeStreamKey(streamKey);
  }
  let rTCConnection = null;
  if (null != streamKey) {
    rTCConnection = videoDecoder.getRTCConnection(streamKey);
  }
  let rTCConnection1 = rTCConnection;
  if (null == streamKey) {
    rTCConnection1 = rtcConnectionId.getRTCConnection();
  }
  let tmp25 = null;
  if (null != streamKey) {
    let streamApplication;
    if (rTCConnection != null) {
      let analyticsContext = rTCConnection.analyticsContext;
      if (analyticsContext != null) {
        streamApplication = analyticsContext.streamApplication;
      }
    }
    tmp25 = streamApplication;
  }
  const state = underlyingError.getState();
  ({ resolution: closure_21, fps: closure_22 } = state);
  const tmpResult2 = tmp(tmp2[14]);
  const runningGameAnalytics = tmpResult2.getRunningGameAnalytics(tmp25);
  ({ gameName: closure_23, gameId: closure_24, exe: closure_25, distributor: closure_26 } = runningGameAnalytics);
  const isErrorOutbound = errorInfo.isErrorOutbound;
  if (mediaContext == null) {
    let tmp29 = audioInputDeviceName;
    mediaContext = audioInputDeviceName.DEFAULT;
  }
  if (null != decodeStreamKeyResult) {
    userId = decodeStreamKeyResult.ownerId;
  }
  if (null != rTCConnection) {
    let voiceParticipantType;
    if (rTCConnection != null) {
      voiceParticipantType = rTCConnection.getVoiceParticipantType();
    }
    let str = voiceParticipantType;
  } else {
    str = "receiver";
    if (isErrorOutbound) {
      str = "sender";
    }
  }
  let mediaEngineConnectionId;
  if (rTCConnection1 != null) {
    mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
  }
  if (mediaEngineConnectionId == null) {
    mediaEngineConnectionId = null;
  }
  if (null != streamKey) {
    if (null != decodeStreamKeyResult) {
      if (isErrorOutbound) {
        let found;
        if (rTCConnection1 != null) {
          const outboundStats = rTCConnection1.getOutboundStats();
          if (outboundStats != null) {
            found = outboundStats.find((quality) => quality.quality === prop1);
          }
        }
        inboundStats = found;
      } else if (rTCConnection1 != null) {
        inboundStats = rTCConnection1.getInboundStats(decodeStreamKeyResult.ownerId);
      }
      tmp32 = inboundStats;
    }
    inboundStats = tmp32;
    const promise = mediaContext();
    promise.then((cpu_brand) => {
      let WindowVisibilityVideoManager;
      let bitrate;
      let cpu_memory;
      let cpu_vendor;
      let currentCPUUsagePercent;
      let currentMemoryUsageKB;
      let currentSampleRate;
      let durationSeconds;
      let frameCount;
      let frameRateDecode;
      let gpu_brand;
      let gpu_count;
      let gpu_device_device_id;
      let gpu_device_revision;
      let gpu_device_vendor_id;
      let gpu_driver_version;
      let gpu_memory;
      let guild_id;
      let hostname;
      let inputDeviceOSMuted;
      let inputDeviceOSVolume;
      let mediaEngine;
      let mediaEngine1;
      let num;
      let num2;
      let num3;
      let num4;
      let numViewers;
      let ownerId;
      let parentMediaSessionId;
      let parseCodecTypeResult;
      let parseDecoderResult;
      let parseEncoderResult;
      let processTimeUs;
      let prop3;
      let prop4;
      let region;
      let region1;
      let rtcWorkerVersion;
      let sampleRate;
      let setupCount;
      let tmp;
      let tmp101;
      let tmp102;
      let tmp103;
      let tmp104;
      let tmp11;
      let tmp116Result3;
      let tmp123;
      let tmp127;
      let tmp131;
      let tmp17;
      let tmp2;
      let tmp22;
      let tmp5;
      let tmp58;
      let tmp68;
      let tmp7;
      let tmp76;
      let tmp91;
      let tmp94;
      let tmp97;
      let tmp99;
      let type;
      let voiceVersion;
      const f133000 = (type) => "video" === type.type;
      const f133001 = (type) => "video" === type.type;
      const obj = { error_name: error.valueOf(), error_code: errorInfo.errorCode, error_severity: errorInfo.severity, error_category: errorInfo.category, underlying_error: tmp, error_message: tmp2, guild_id, channel_id: tmp5, channel_type: type, rtc_connection_id: tmp7, media_session_id: mediaSessionId, parent_media_session_id: parentMediaSessionId, context: tmp11, voice_backend_version: voiceVersion, rtc_worker_backend_version: rtcWorkerVersion, guild_region: region, hostname, duration: durationSeconds, participant_type: tmp17, num_frames: num, num_packets: num2, num_bytes: num3, num_packets_lost: num4, video_codec: parseCodecTypeResult, video_encoder: parseEncoderResult, video_decoder: parseDecoderResult, audio_capture_sample_rate_mismatch_percent: tmp58, audio_capture_processing_sample_rate: currentSampleRate, voice_processing_process_time_us: processTimeUs, voice_processing_frame_count: frameCount, voice_processing_sample_rate: sampleRate, voice_processing_setup_count: setupCount, incoming_video_stopped_for_occlusion: !WindowVisibilityVideoManager.isIncomingVideoEnabled(), bitrate, target_bitrate: tmp76, fps: frameRateDecode, target_fps: tmp91, sender_user_id: ownerId, stream_region: region1, stream_source_type: tmp94, num_stream_viewers: numViewers, video_input_resolution_height: tmp97, video_input_frame_rate: tmp99, screenshare_capture_method: getCurrentScreenshareCaptureMethod(mediaEngineConnectionId), share_application_name: tmp101, share_application_id: tmp102, share_application_executable: tmp103, share_application_distributor: tmp104, cpu_brand, cpu_vendor, cpu_memory, gpu_brand, gpu_count, gpu_memory, gpu_device_vendor_id, gpu_device_device_id, gpu_device_sub_sys_id: prop2, gpu_device_revision, gpu_driver_version, cpu_usage: currentCPUUsagePercent, memory_usage: currentMemoryUsageKB, outbound_bitrate_estimate: prop3, inbound_bitrate_estimate: prop4, hardware_enabled: MediaEngineStore.getHardwareEncoding(), audio_input_device_name: tmp123, audio_output_device_name: tmp127, video_device_name: tmp131, audio_subsystem: mediaEngine.getAudioSubsystem(), automatic_audio_subsystem: MediaEngineStore.getSettings().automaticAudioSubsystem, audio_layer: mediaEngine1.getAudioLayer(), audio_input_mode: MediaEngineStore.getSettings().mode, automatic_audio_input_sensitivity_enabled: MediaEngineStore.getSettings().modeOptions.autoThreshold, audio_input_sensitivity: MediaEngineStore.getSettings().modeOptions.threshold, echo_cancellation_enabled: MediaEngineStore.getEchoCancellation(), noise_suppression_enabled: MediaEngineStore.getNoiseSuppression(), noise_cancellation_enabled: MediaEngineStore.getNoiseCancellation(), automatic_gain_control_enabled: MediaEngineStore.getAutomaticGainControl(), sidechain_compression_enabled: MediaEngineStore.getSidechainCompression(), input_volume: MediaEngineStore.getInputVolume(), output_volume: MediaEngineStore.getOutputVolume(), audio_input_device_count: Object.keys(MediaEngineStore.getInputDevices()).length, audio_output_device_count: Object.keys(MediaEngineStore.getOutputDevices()).length, app_hardware_acceleration_enabled: tmp116Result3.getAppHardwareAccelerationEnabled(), input_device_os_muted: inputDeviceOSMuted, input_device_os_volume: inputDeviceOSVolume };
      tmp = underlyingError;
      if (underlyingError == null) {
        tmp = null;
      }
      tmp2 = errorMessage;
      if (errorMessage == null) {
        tmp2 = null;
      }
      guild_id = undefined;
      if (closure_4 != null) {
        guild_id = closure_4.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      tmp5 = channelId;
      if (channelId == null) {
        tmp5 = null;
      }
      type = undefined;
      if (closure_4 != null) {
        type = closure_4.type;
      }
      if (type == null) {
        type = null;
      }
      tmp7 = rtcConnectionId;
      if (rtcConnectionId == null) {
        tmp7 = null;
      }
      if (mediaSessionId == null) {
        mediaSessionId = RTCConnectionStore.getMediaSessionId();
      }
      if (mediaSessionId == null) {
        mediaSessionId = null;
      }
      parentMediaSessionId = undefined;
      if (rTCConnection != null) {
        parentMediaSessionId = obj2.parentMediaSessionId;
      }
      if (parentMediaSessionId == null) {
        parentMediaSessionId = null;
      }
      tmp11 = mediaContext;
      if (mediaContext == null) {
        tmp11 = null;
      }
      rTCConnection = RTCConnectionStore.getRTCConnection();
      voiceVersion = undefined;
      if (rTCConnection != null) {
        voiceVersion = rTCConnection.getVoiceVersion();
      }
      if (voiceVersion == null) {
        voiceVersion = null;
      }
      rTCConnection1 = RTCConnectionStore.getRTCConnection();
      rtcWorkerVersion = undefined;
      if (rTCConnection1 != null) {
        rtcWorkerVersion = rTCConnection1.getRtcWorkerVersion();
      }
      if (rtcWorkerVersion == null) {
        rtcWorkerVersion = null;
      }
      region = RTCRegionStore.getRegion(RTCConnectionStore.getHostname());
      if (region == null) {
        region = null;
      }
      hostname = RTCConnectionStore.getHostname();
      if (hostname == null) {
        hostname = null;
      }
      durationSeconds = undefined;
      const obj5 = rTCConnection1;
      if (rTCConnection1 != null) {
        durationSeconds = obj5.getDurationSeconds();
      }
      if (durationSeconds == null) {
        durationSeconds = null;
      }
      tmp17 = str;
      if (str == null) {
        tmp17 = null;
      }
      num = undefined;
      if (inboundStats != null) {
        num = inboundStats.num_frames;
      }
      if (num == null) {
        num = 0;
      }
      num2 = undefined;
      if (inboundStats != null) {
        num2 = inboundStats.num_packets;
      }
      if (num2 == null) {
        num2 = 0;
      }
      num3 = undefined;
      if (inboundStats != null) {
        num3 = inboundStats.num_bytes;
      }
      if (num3 == null) {
        num3 = 0;
      }
      if (isErrorOutbound) {
        const connectionStats = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        let tmp29 = null;
        if (null != connectionStats) {
          const outbound = connectionStats.stats.rtp.outbound;
          let found = outbound.find(f133000);
          if (found == null) {
            found = null;
          }
          tmp29 = found;
        }
        tmp22 = tmp29;
      } else {
        tmp22 = null;
        if (null != userId) {
          const connectionStats1 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
          tmp22 = null;
          if (null != connectionStats1) {
            let tmp25 = null;
            if (null != connectionStats1.stats.rtp.inbound[userId]) {
              let found1 = arr.find(f133001);
              if (found1 == null) {
                found1 = null;
              }
              tmp25 = found1;
            }
            tmp22 = tmp25;
          }
        }
      }
      num4 = undefined;
      if (tmp22 != null) {
        num4 = tmp22.packetsLost;
      }
      if (num4 == null) {
        num4 = 0;
      }
      parseCodecTypeResult = videoCodec;
      if (videoCodec == null) {
        let tmp32;
        const parseCodecType = VideoQualityStats.parseCodecType;
        VideoQualityStats;
        if (isErrorOutbound) {
          const connectionStats2 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
          let tmp39 = null;
          if (null != connectionStats2) {
            const outbound1 = connectionStats2.stats.rtp.outbound;
            let found2 = outbound1.find(f133000);
            if (found2 == null) {
              found2 = null;
            }
            tmp39 = found2;
          }
          tmp32 = tmp39;
        } else {
          tmp32 = null;
          if (null != userId) {
            const connectionStats3 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
            tmp32 = null;
            if (null != connectionStats3) {
              let tmp35 = null;
              if (null != connectionStats3.stats.rtp.inbound[userId]) {
                let found3 = arr3.find(f133001);
                if (found3 == null) {
                  found3 = null;
                }
                tmp35 = found3;
              }
              tmp32 = tmp35;
            }
          }
        }
        let name;
        if (tmp32 != null) {
          name = tmp32.codec.name;
        }
        parseCodecTypeResult = parseCodecType(name);
      }
      if (parseCodecTypeResult == null) {
        parseCodecTypeResult = null;
      }
      parseEncoderResult = videoEncoder;
      if (videoEncoder == null) {
        const parseEncoder = VideoQualityStats.parseEncoder;
        VideoQualityStats;
        const connectionStats4 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        let tmp48 = null;
        if (null != connectionStats4) {
          const outbound2 = connectionStats4.stats.rtp.outbound;
          let found4 = outbound2.find(f133000);
          if (found4 == null) {
            found4 = null;
          }
          tmp48 = found4;
        }
        prop = undefined;
        if (tmp48 != null) {
          prop = tmp48.encoderImplementationName;
        }
        parseEncoderResult = parseEncoder(prop);
      }
      if (parseEncoderResult == null) {
        parseEncoderResult = null;
      }
      parseDecoderResult = videoDecoder;
      if (videoDecoder == null) {
        let tmp54 = null;
        const parseDecoder = VideoQualityStats.parseDecoder;
        VideoQualityStats;
        if (null != userId) {
          const connectionStats5 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
          tmp54 = null;
          if (null != connectionStats5) {
            let tmp55 = null;
            if (null != connectionStats5.stats.rtp.inbound[userId]) {
              let found5 = arr6.find(f133001);
              if (found5 == null) {
                found5 = null;
              }
              tmp55 = found5;
            }
            tmp54 = tmp55;
          }
        }
        prop1 = undefined;
        if (tmp54 != null) {
          prop1 = tmp54.decoderImplementationName;
        }
        parseDecoderResult = parseDecoder(prop1);
      }
      if (parseDecoderResult == null) {
        parseDecoderResult = null;
      }
      tmp58 = prop;
      if (prop == null) {
        tmp58 = null;
      }
      const connectionStats6 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      currentSampleRate = undefined;
      if (connectionStats6 != null) {
        const outbound3 = connectionStats6.stats.rtp.outbound;
        const found6 = outbound3.find((type) => "audio" === type.type);
        if (found6 != null) {
          currentSampleRate = found6.currentSampleRate;
        }
      }
      if (currentSampleRate == null) {
        currentSampleRate = null;
      }
      processTimeUs = undefined;
      if (prop2 != null) {
        processTimeUs = tmp62.processTimeUs;
      }
      if (processTimeUs == null) {
        processTimeUs = null;
      }
      frameCount = undefined;
      if (prop2 != null) {
        frameCount = tmp62.frameCount;
      }
      if (frameCount == null) {
        frameCount = null;
      }
      sampleRate = undefined;
      if (prop2 != null) {
        sampleRate = tmp62.sampleRate;
      }
      if (sampleRate == null) {
        sampleRate = null;
      }
      setupCount = undefined;
      if (prop2 != null) {
        setupCount = tmp62.setupCount;
      }
      if (setupCount == null) {
        setupCount = null;
      }
      WindowVisibilityVideoManager = WindowVisibilityVideoManager2.WindowVisibilityVideoManager;
      if (isErrorOutbound) {
        const connectionStats7 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        let tmp73 = null;
        if (null != connectionStats7) {
          const outbound4 = connectionStats7.stats.rtp.outbound;
          let found7 = outbound4.find(f133000);
          if (found7 == null) {
            found7 = null;
          }
          tmp73 = found7;
        }
        tmp68 = tmp73;
      } else {
        tmp68 = null;
        if (null != userId) {
          const connectionStats8 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
          tmp68 = null;
          if (null != connectionStats8) {
            let tmp70 = null;
            if (null != connectionStats8.stats.rtp.inbound[userId]) {
              let found8 = arr8.find(f133001);
              if (found8 == null) {
                found8 = null;
              }
              tmp70 = found8;
            }
            tmp68 = tmp70;
          }
        }
      }
      bitrate = undefined;
      if (tmp68 != null) {
        bitrate = tmp68.bitrate;
      }
      if (bitrate == null) {
        bitrate = null;
      }
      tmp76 = null;
      if (isErrorOutbound) {
        const connectionStats9 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        let tmp78 = null;
        if (null != connectionStats9) {
          const outbound5 = connectionStats9.stats.rtp.outbound;
          let found9 = outbound5.find(f133000);
          if (found9 == null) {
            found9 = null;
          }
          tmp78 = found9;
        }
        let bitrateTarget;
        if (tmp78 != null) {
          bitrateTarget = tmp78.bitrateTarget;
        }
        if (bitrateTarget == null) {
          bitrateTarget = null;
        }
        tmp76 = bitrateTarget;
      }
      if (isErrorOutbound) {
        const connectionStats10 = MediaEngineStatsStore.getConnectionStats(mediaContext);
        let tmp88 = null;
        if (null != connectionStats10) {
          const outbound6 = connectionStats10.stats.rtp.outbound;
          let found10 = outbound6.find(f133000);
          if (found10 == null) {
            found10 = null;
          }
          tmp88 = found10;
        }
        let frameRateEncode;
        if (tmp88 != null) {
          frameRateEncode = tmp88.frameRateEncode;
        }
        if (frameRateEncode == null) {
          frameRateEncode = null;
        }
        frameRateDecode = frameRateEncode;
      } else {
        let tmp82 = null;
        if (null != userId) {
          const connectionStats11 = MediaEngineStatsStore.getConnectionStats(mediaContext);
          tmp82 = null;
          if (null != connectionStats11) {
            let tmp84 = null;
            if (null != connectionStats11.stats.rtp.inbound[userId]) {
              let found11 = arr11.find(f133001);
              if (found11 == null) {
                found11 = null;
              }
              tmp84 = found11;
            }
            tmp82 = tmp84;
          }
        }
        frameRateDecode = undefined;
        if (tmp82 != null) {
          frameRateDecode = tmp82.frameRateDecode;
        }
        if (frameRateDecode == null) {
          frameRateDecode = null;
        }
      }
      if (frameRateDecode == null) {
        frameRateDecode = null;
      }
      tmp91 = null;
      if (mediaContext === audioInputDeviceName.STREAM) {
        tmp91 = null;
        if (isErrorOutbound) {
          tmp91 = closure_22;
        }
      }
      ownerId = undefined;
      if (decodeStreamKeyResult != null) {
        ownerId = decodeStreamKeyResult.ownerId;
      }
      if (ownerId == null) {
        ownerId = null;
      }
      region1 = undefined;
      if (rTCConnection != null) {
        region1 = obj2.getRegion();
      }
      if (region1 == null) {
        region1 = null;
      }
      tmp94 = null;
      if (isErrorOutbound) {
        let streamSourceType;
        if (rTCConnection != null) {
          const analyticsContext = obj2.analyticsContext;
          if (analyticsContext != null) {
            streamSourceType = analyticsContext.streamSourceType;
          }
        }
        if (streamSourceType == null) {
          streamSourceType = null;
        }
        tmp94 = streamSourceType;
      }
      numViewers = undefined;
      if (rTCConnection != null) {
        const analyticsContext2 = obj2.analyticsContext;
        if (analyticsContext2 != null) {
          numViewers = analyticsContext2.numViewers;
        }
      }
      if (numViewers == null) {
        numViewers = null;
      }
      tmp97 = null;
      if (isErrorOutbound) {
        let tmp98 = closure_21;
        if (closure_21 == null) {
          tmp98 = null;
        }
        tmp97 = tmp98;
      }
      tmp99 = null;
      if (isErrorOutbound) {
        let tmp100 = closure_22;
        if (closure_22 == null) {
          tmp100 = null;
        }
        tmp99 = tmp100;
      }
      tmp101 = closure_23;
      if (closure_23 == null) {
        tmp101 = null;
      }
      tmp102 = closure_24;
      if (closure_24 == null) {
        tmp102 = null;
      }
      tmp103 = closure_25;
      if (closure_25 == null) {
        tmp103 = null;
      }
      tmp104 = closure_26;
      if (closure_26 == null) {
        tmp104 = null;
      }
      cpu_brand = undefined;
      if (cpu_brand != null) {
        cpu_brand = cpu_brand.cpu_brand;
      }
      if (cpu_brand == null) {
        cpu_brand = null;
      }
      cpu_vendor = undefined;
      if (cpu_brand != null) {
        cpu_vendor = cpu_brand.cpu_vendor;
      }
      if (cpu_vendor == null) {
        cpu_vendor = null;
      }
      cpu_memory = undefined;
      if (cpu_brand != null) {
        cpu_memory = cpu_brand.cpu_memory;
      }
      if (cpu_memory == null) {
        cpu_memory = null;
      }
      gpu_brand = undefined;
      if (cpu_brand != null) {
        gpu_brand = cpu_brand.gpu_brand;
      }
      if (gpu_brand == null) {
        gpu_brand = null;
      }
      gpu_count = undefined;
      if (cpu_brand != null) {
        gpu_count = cpu_brand.gpu_count;
      }
      if (gpu_count == null) {
        gpu_count = null;
      }
      gpu_memory = undefined;
      if (cpu_brand != null) {
        gpu_memory = cpu_brand.gpu_memory;
      }
      if (gpu_memory == null) {
        gpu_memory = null;
      }
      gpu_device_vendor_id = undefined;
      if (cpu_brand != null) {
        gpu_device_vendor_id = cpu_brand.gpu_device_vendor_id;
      }
      if (gpu_device_vendor_id == null) {
        gpu_device_vendor_id = null;
      }
      gpu_device_device_id = undefined;
      if (cpu_brand != null) {
        gpu_device_device_id = cpu_brand.gpu_device_device_id;
      }
      if (gpu_device_device_id == null) {
        gpu_device_device_id = null;
      }
      prop2 = undefined;
      if (cpu_brand != null) {
        prop2 = cpu_brand.gpu_device_sub_sys_id;
      }
      if (prop2 == null) {
        prop2 = null;
      }
      gpu_device_revision = undefined;
      if (cpu_brand != null) {
        gpu_device_revision = cpu_brand.gpu_device_revision;
      }
      if (gpu_device_revision == null) {
        gpu_device_revision = null;
      }
      gpu_driver_version = undefined;
      if (cpu_brand != null) {
        gpu_driver_version = cpu_brand.gpu_driver_version;
      }
      if (gpu_driver_version == null) {
        gpu_driver_version = null;
      }
      const obj7 = ProcessUtilsDefault;
      currentCPUUsagePercent = obj7.getCurrentCPUUsagePercent();
      if (currentCPUUsagePercent == null) {
        currentCPUUsagePercent = null;
      }
      const tmp116Result = ProcessUtilsDefault;
      currentMemoryUsageKB = tmp116Result.getCurrentMemoryUsageKB();
      if (currentMemoryUsageKB == null) {
        currentMemoryUsageKB = null;
      }
      const connectionStats12 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      prop3 = undefined;
      if (connectionStats12 != null) {
        prop3 = connectionStats12.stats.transport.outboundBitrateEstimate;
      }
      if (prop3 == null) {
        prop3 = null;
      }
      const connectionStats13 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      prop4 = undefined;
      if (connectionStats13 != null) {
        prop4 = connectionStats13.stats.transport.inboundBitrateEstimate;
      }
      if (prop4 == null) {
        prop4 = null;
      }
      tmp123 = audioInputDeviceName;
      if (audioInputDeviceName == null) {
        const inputDevices = MediaEngineStore.getInputDevices();
        const tmp125 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
        let name1;
        if (tmp125 != null) {
          name1 = tmp125.name;
        }
        tmp123 = name1;
      }
      tmp127 = prop1;
      if (prop1 == null) {
        const outputDevices = MediaEngineStore.getOutputDevices();
        const tmp129 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
        let name2;
        if (tmp129 != null) {
          name2 = tmp129.name;
        }
        tmp127 = name2;
      }
      tmp131 = videoDeviceName;
      if (videoDeviceName == null) {
        const videoDevices = MediaEngineStore.getVideoDevices();
        const tmp133 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
        let name3;
        if (tmp133 != null) {
          name3 = tmp133.name;
        }
        tmp131 = name3;
      }
      mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine1 = MediaEngineStore.getMediaEngine();
      tmp116Result3 = CrossPlatformNativeUtilsDefault;
      inputDeviceOSMuted = MediaEngineStore.getInputDeviceOSMuted();
      if (inputDeviceOSMuted == null) {
        inputDeviceOSMuted = null;
      }
      inputDeviceOSVolume = MediaEngineStore.getInputDeviceOSVolume();
      if (inputDeviceOSVolume == null) {
        inputDeviceOSVolume = null;
      }
      const tmp116Result4 = AnalyticsUtilsDefault;
      tmp116Result4.track(AnalyticEvents.AV_ERROR_REPORTED, obj);
    });
  }
  if (isErrorOutbound) {
    let tmp35 = inboundStats(tmp2[15]);
    let outboundStats1;
    const maxBy = tmp35.maxBy;
    if (rTCConnection1 != null) {
      outboundStats1 = rTCConnection1.getOutboundStats();
    }
    if (outboundStats1 == null) {
      outboundStats1 = [];
    }
    let maxByResult = maxBy(outboundStats1, (num_frames) => num_frames.num_frames);
    if (maxByResult == null) {
      maxByResult = null;
    }
    tmp32 = maxByResult;
  } else {
    tmp32 = null;
    if (null != userId) {
      let inboundStats1;
      if (rTCConnection1 != null) {
        inboundStats1 = rTCConnection1.getInboundStats(userId);
      }
      tmp32 = inboundStats1;
    }
  }
};