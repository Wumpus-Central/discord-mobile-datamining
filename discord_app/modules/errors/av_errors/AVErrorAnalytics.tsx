// discord_app/modules/errors/av_errors/AVErrorAnalytics.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ProcessUtilsDefault from "../../../utils/ProcessUtils.native.tsx";
import CrossPlatformNativeUtilsDefault from "../../../utils/CrossPlatformNativeUtils.native.tsx";
import VideoQualityStats from "../../../lib/VideoQualityStats.tsx";
import WindowVisibilityVideoManager2 from "../../../lib/WindowVisibilityVideoManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import MediaEngineStatsStore from "../../media_engine/MediaEngineStatsStore.tsx";
import ApplicationStreamingSettingsStore from "../../../stores/ApplicationStreamingSettingsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import RTCRegionStore from "../../../stores/RTCRegionStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
function getCurrentScreenshareCaptureMethod(mediaEngineConnectionId) {
  const connectionStats = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
  const lastConnectionStats = MediaEngineStatsStore.getLastConnectionStats(mediaEngineConnectionId);
  if (null != connectionStats) {
    if (null != lastConnectionStats) {
      const obj = {};
      const items = [
        "videohookFrames",
        "hybridDxgiFrames",
        "hybridGdiFrames",
        "hybridVideohookFrames",
        "hybridGraphicsCaptureFrames",
        "hybridGdiBitBltFrames",
        "hybridGdiPrintWindowFrames",
        "quartzFrames",
        "screenCaptureKitFrames",
      ];
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
        let tmp21 = _slicedToArray(tmp18, 2);
        let tmp23 = tmp21[1];
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
const getSystemAnalyticsInfo = fn(4605).getSystemAnalyticsInfo;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Constants = fn(4585);
({ MediaEngineContextTypes: closure_14, SIMULCAST_HQ_QUALITY: closure_15 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorAnalytics.tsx");

export const sendAVErrorAnalyticsEvent = function sendAVErrorAnalyticsEvent(error, context) {
  _require = error;
  errorInfo = require("AVError").getErrorInfo(error);
  let channelId;
  const voiceChannelId = videoEncoder.getVoiceChannelId();
  if ("channelId" in context) {
    channelId = context.channelId;
  }
  let tmp6 = null;
  if (channelId == null) {
    channelId = voiceChannelId;
  }
  if (channelId == tmp6) {
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
  if (tmp6 != streamKey) {
    let tmpResult = tmp(tmp2[13]);
    decodeStreamKeyResult = tmpResult.decodeStreamKey(streamKey);
  }
  let rTCConnection = null;
  if (tmp6 != streamKey) {
    rTCConnection = videoDecoder.getRTCConnection(streamKey);
  }
  let rTCConnection1 = rTCConnection;
  if (tmp6 == streamKey) {
    rTCConnection1 = rtcConnectionId.getRTCConnection();
  }
  let tmp26 = null;
  if (tmp6 != streamKey) {
    let streamApplication;
    if (rTCConnection != tmp6) {
      let analyticsContext = rTCConnection.analyticsContext;
      if (analyticsContext != tmp6) {
        streamApplication = analyticsContext.streamApplication;
      }
    }
    tmp26 = streamApplication;
  }
  const state = underlyingError.getState();
  ({ resolution: closure_21, fps: closure_22 } = state);
  tmpResult = tmp(tmp2[14]);
  const runningGameAnalytics = tmpResult.getRunningGameAnalytics(tmp26);
  ({ gameName: closure_23, gameId: closure_24, exe: closure_25, distributor: closure_26 } = runningGameAnalytics);
  const isErrorOutbound = errorInfo.isErrorOutbound;
  if (mediaContext == tmp6) {
    mediaContext = audioInputDeviceName.DEFAULT;
  }
  if (tmp6 != decodeStreamKeyResult) {
    userId = decodeStreamKeyResult.ownerId;
  }
  if (tmp6 != rTCConnection) {
    let voiceParticipantType;
    if (rTCConnection != tmp6) {
      voiceParticipantType = rTCConnection.getVoiceParticipantType();
    }
  } else {
    let str = "receiver";
    if (isErrorOutbound) {
      str = "sender";
    }
  }
  let mediaEngineConnectionId;
  if (rTCConnection1 != tmp6) {
    mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
  }
  if (mediaEngineConnectionId == tmp6) {
    mediaEngineConnectionId = null;
  }
  if (tmp6 != streamKey) {
    if (tmp6 != decodeStreamKeyResult) {
      if (isErrorOutbound) {
        let found;
        if (!tmp37) {
          const outboundStats = rTCConnection1.getOutboundStats();
          tmp6 = outboundStats == tmp6;
          if (!tmp6) {
            found = outboundStats.find((quality) => quality.quality === prop1);
          }
        }
        let inboundStats = found;
      } else if (!tmp37) {
        inboundStats = rTCConnection1.getInboundStats(decodeStreamKeyResult.ownerId);
      }
    }
  }
  if (isErrorOutbound) {
    let outboundStats1;
    if (rTCConnection1 != tmp6) {
      outboundStats1 = rTCConnection1.getOutboundStats();
    }
    if (outboundStats1 == tmp6) {
      outboundStats1 = [];
    }
    let maxByResult = inboundStats1(tmp2[15]).maxBy(outboundStats1, (num_frames) => num_frames.num_frames);
    if (maxByResult == tmp6) {
      maxByResult = null;
    }
    let tmp33 = maxByResult;
    let obj5 = inboundStats1(tmp2[15]);
  } else {
    tmp33 = null;
    if (tmp6 != userId) {
      inboundStats1 = undefined;
      if (rTCConnection1 != tmp6) {
        inboundStats1 = rTCConnection1.getInboundStats(userId);
      }
      tmp33 = inboundStats1;
    }
  }
  inboundStats1 = tmp33;
  let obj = require("AVError");
  mediaContext().then((cpu_brand) => {
    const obj = {
      error_name: error.valueOf(),
      error_code: errorInfo.errorCode,
      error_severity: errorInfo.severity,
      error_category: errorInfo.category,
      underlying_error: null,
      error_message: null,
      guild_id: null,
      channel_id: null,
      channel_type: null,
      rtc_connection_id: null,
      media_session_id: null,
      parent_media_session_id: null,
      context: null,
      voice_backend_version: null,
      rtc_worker_backend_version: null,
      guild_region: null,
      hostname: null,
      duration: null,
      participant_type: null,
      num_frames: null,
      num_packets: null,
      num_bytes: null,
      num_packets_lost: null,
      video_codec: null,
      video_encoder: null,
      video_decoder: null,
      audio_capture_sample_rate_mismatch_percent: null,
      audio_capture_processing_sample_rate: null,
      voice_processing_process_time_us: null,
      voice_processing_frame_count: null,
      voice_processing_sample_rate: null,
      voice_processing_setup_count: null,
      incoming_video_stopped_for_occlusion: null,
      bitrate: null,
      target_bitrate: null,
      fps: null,
      target_fps: null,
      sender_user_id: null,
      stream_region: null,
      stream_source_type: null,
      num_stream_viewers: null,
      video_input_resolution_height: null,
      video_input_frame_rate: null,
      screenshare_capture_method: null,
      share_application_name: null,
      share_application_id: null,
      share_application_executable: null,
      share_application_distributor: null,
      cpu_brand: null,
      cpu_vendor: null,
      cpu_memory: null,
      gpu_brand: null,
      gpu_count: null,
      gpu_memory: null,
      gpu_device_vendor_id: null,
      gpu_device_device_id: null,
      gpu_device_sub_sys_id: null,
      gpu_device_revision: null,
      gpu_driver_version: null,
      cpu_usage: null,
      memory_usage: null,
      outbound_bitrate_estimate: null,
      inbound_bitrate_estimate: null,
      hardware_enabled: null,
      audio_input_device_name: null,
      audio_output_device_name: null,
      video_device_name: null,
      audio_subsystem: null,
      automatic_audio_subsystem: null,
      audio_layer: null,
      audio_input_mode: null,
      automatic_audio_input_sensitivity_enabled: null,
      audio_input_sensitivity: null,
      echo_cancellation_enabled: null,
      noise_suppression_enabled: null,
      noise_cancellation_enabled: null,
      automatic_gain_control_enabled: null,
      sidechain_compression_enabled: null,
      input_volume: null,
      output_volume: null,
      audio_input_device_count: null,
      audio_output_device_count: null,
      app_hardware_acceleration_enabled: null,
      input_device_os_muted: null,
      input_device_os_volume: null,
    };
    let tmp = underlyingError;
    if (underlyingError == null) {
      tmp = null;
    }
    obj.underlying_error = tmp;
    let tmp2 = errorMessage;
    if (errorMessage == null) {
      tmp2 = null;
    }
    obj.error_message = tmp2;
    let guild_id;
    if (closure_4 != null) {
      guild_id = closure_4.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj.guild_id = guild_id;
    let tmp5 = channelId;
    if (channelId == null) {
      tmp5 = null;
    }
    obj.channel_id = tmp5;
    let type;
    if (closure_4 != null) {
      type = closure_4.type;
    }
    if (type == null) {
      type = null;
    }
    obj.channel_type = type;
    let tmp7 = rtcConnectionId;
    if (rtcConnectionId == null) {
      tmp7 = null;
    }
    obj.rtc_connection_id = tmp7;
    if (mediaSessionId == null) {
      mediaSessionId = RTCConnectionStore.getMediaSessionId();
    }
    if (mediaSessionId == null) {
      mediaSessionId = null;
    }
    obj.media_session_id = mediaSessionId;
    let parentMediaSessionId;
    if (rTCConnection != null) {
      parentMediaSessionId = obj2.parentMediaSessionId;
    }
    if (parentMediaSessionId == null) {
      parentMediaSessionId = null;
    }
    obj.parent_media_session_id = parentMediaSessionId;
    let tmp11 = mediaContext;
    if (mediaContext == null) {
      tmp11 = null;
    }
    obj.context = tmp11;
    rTCConnection = RTCConnectionStore.getRTCConnection();
    let voiceVersion;
    if (rTCConnection != null) {
      voiceVersion = rTCConnection.getVoiceVersion();
    }
    if (voiceVersion == null) {
      voiceVersion = null;
    }
    obj.voice_backend_version = voiceVersion;
    rTCConnection1 = RTCConnectionStore.getRTCConnection();
    let rtcWorkerVersion;
    if (rTCConnection1 != null) {
      rtcWorkerVersion = rTCConnection1.getRtcWorkerVersion();
    }
    if (rtcWorkerVersion == null) {
      rtcWorkerVersion = null;
    }
    obj.rtc_worker_backend_version = rtcWorkerVersion;
    let region = RTCRegionStore.getRegion(RTCConnectionStore.getHostname());
    if (region == null) {
      region = null;
    }
    obj.guild_region = region;
    let hostname = RTCConnectionStore.getHostname();
    if (hostname == null) {
      hostname = null;
    }
    obj.hostname = hostname;
    let durationSeconds;
    if (rTCConnection1 != null) {
      durationSeconds = obj5.getDurationSeconds();
    }
    if (durationSeconds == null) {
      durationSeconds = null;
    }
    obj.duration = durationSeconds;
    let tmp17 = str;
    if (str == null) {
      tmp17 = null;
    }
    obj.participant_type = tmp17;
    let num;
    if (inboundStats1 != null) {
      num = inboundStats1.num_frames;
    }
    if (num == null) {
      num = 0;
    }
    obj.num_frames = num;
    let num2;
    if (inboundStats1 != null) {
      num2 = inboundStats1.num_packets;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj.num_packets = num2;
    let num3;
    if (inboundStats1 != null) {
      num3 = inboundStats1.num_bytes;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj.num_bytes = num3;
    if (isErrorOutbound) {
      const connectionStats = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      let tmp29 = null;
      if (null != connectionStats) {
        const outbound = connectionStats.stats.rtp.outbound;
        let found = outbound.find((type) => "video" === type.type);
        if (found == null) {
          found = null;
        }
        tmp29 = found;
      }
      let tmp22 = tmp29;
    } else {
      tmp22 = null;
      if (null != userId) {
        const connectionStats1 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        tmp22 = null;
        if (null != connectionStats1) {
          let tmp25 = null;
          if (null != connectionStats1.stats.rtp.inbound[userId]) {
            let found1 = arr.find((type) => "video" === type.type);
            if (found1 == null) {
              found1 = null;
            }
            tmp25 = found1;
          }
          tmp22 = tmp25;
        }
      }
    }
    let num4;
    if (tmp22 != null) {
      num4 = tmp22.packetsLost;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj.num_packets_lost = num4;
    let parseCodecTypeResult = videoCodec;
    if (videoCodec == null) {
      if (isErrorOutbound) {
        const connectionStats2 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        let tmp39 = null;
        if (null != connectionStats2) {
          const outbound1 = connectionStats2.stats.rtp.outbound;
          let found2 = outbound1.find((type) => "video" === type.type);
          if (found2 == null) {
            found2 = null;
          }
          tmp39 = found2;
        }
        let tmp32 = tmp39;
      } else {
        tmp32 = null;
        if (null != userId) {
          const connectionStats3 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
          tmp32 = null;
          if (null != connectionStats3) {
            let tmp35 = null;
            if (null != connectionStats3.stats.rtp.inbound[userId]) {
              let found3 = arr3.find((type) => "video" === type.type);
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
      parseCodecTypeResult = VideoQualityStats.parseCodecType(name);
    }
    if (parseCodecTypeResult == null) {
      parseCodecTypeResult = null;
    }
    obj.video_codec = parseCodecTypeResult;
    let parseEncoderResult = videoEncoder;
    if (videoEncoder == null) {
      const connectionStats4 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      let tmp47 = null;
      if (null != connectionStats4) {
        const outbound2 = connectionStats4.stats.rtp.outbound;
        let found4 = outbound2.find((type) => "video" === type.type);
        if (found4 == null) {
          found4 = null;
        }
        tmp47 = found4;
      }
      prop = undefined;
      if (tmp47 != null) {
        prop = tmp47.encoderImplementationName;
      }
      parseEncoderResult = VideoQualityStats.parseEncoder(prop);
    }
    if (parseEncoderResult == null) {
      parseEncoderResult = null;
    }
    obj.video_encoder = parseEncoderResult;
    let parseDecoderResult = videoDecoder;
    if (videoDecoder == null) {
      let tmp53 = null;
      if (null != userId) {
        const connectionStats5 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        tmp53 = null;
        if (null != connectionStats5) {
          let tmp54 = null;
          if (null != connectionStats5.stats.rtp.inbound[userId]) {
            let found5 = arr6.find((type) => "video" === type.type);
            if (found5 == null) {
              found5 = null;
            }
            tmp54 = found5;
          }
          tmp53 = tmp54;
        }
      }
      prop1 = undefined;
      if (tmp53 != null) {
        prop1 = tmp53.decoderImplementationName;
      }
      parseDecoderResult = VideoQualityStats.parseDecoder(prop1);
    }
    if (parseDecoderResult == null) {
      parseDecoderResult = null;
    }
    obj.video_decoder = parseDecoderResult;
    let tmp57 = prop;
    if (prop == null) {
      tmp57 = null;
    }
    obj.audio_capture_sample_rate_mismatch_percent = tmp57;
    const connectionStats6 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
    let currentSampleRate;
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
    obj.audio_capture_processing_sample_rate = currentSampleRate;
    let processTimeUs;
    if (prop2 != null) {
      processTimeUs = tmp61.processTimeUs;
    }
    if (processTimeUs == null) {
      processTimeUs = null;
    }
    obj.voice_processing_process_time_us = processTimeUs;
    let frameCount;
    if (prop2 != null) {
      frameCount = tmp61.frameCount;
    }
    if (frameCount == null) {
      frameCount = null;
    }
    obj.voice_processing_frame_count = frameCount;
    let sampleRate;
    if (prop2 != null) {
      sampleRate = tmp61.sampleRate;
    }
    if (sampleRate == null) {
      sampleRate = null;
    }
    obj.voice_processing_sample_rate = sampleRate;
    let setupCount;
    if (prop2 != null) {
      setupCount = tmp61.setupCount;
    }
    if (setupCount == null) {
      setupCount = null;
    }
    obj.voice_processing_setup_count = setupCount;
    const WindowVisibilityVideoManager = WindowVisibilityVideoManager2.WindowVisibilityVideoManager;
    obj.incoming_video_stopped_for_occlusion = !WindowVisibilityVideoManager.isIncomingVideoEnabled();
    if (isErrorOutbound) {
      const connectionStats7 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      let tmp72 = null;
      if (null != connectionStats7) {
        const outbound4 = connectionStats7.stats.rtp.outbound;
        let found7 = outbound4.find((type) => "video" === type.type);
        if (found7 == null) {
          found7 = null;
        }
        tmp72 = found7;
      }
      let tmp67 = tmp72;
    } else {
      tmp67 = null;
      if (null != userId) {
        const connectionStats8 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
        tmp67 = null;
        if (null != connectionStats8) {
          let tmp69 = null;
          if (null != connectionStats8.stats.rtp.inbound[userId]) {
            let found8 = arr8.find((type) => "video" === type.type);
            if (found8 == null) {
              found8 = null;
            }
            tmp69 = found8;
          }
          tmp67 = tmp69;
        }
      }
    }
    let bitrate;
    if (tmp67 != null) {
      bitrate = tmp67.bitrate;
    }
    if (bitrate == null) {
      bitrate = null;
    }
    obj.bitrate = bitrate;
    let tmp75 = null;
    if (isErrorOutbound) {
      const connectionStats9 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
      let tmp77 = null;
      if (null != connectionStats9) {
        const outbound5 = connectionStats9.stats.rtp.outbound;
        let found9 = outbound5.find((type) => "video" === type.type);
        if (found9 == null) {
          found9 = null;
        }
        tmp77 = found9;
      }
      let bitrateTarget;
      if (tmp77 != null) {
        bitrateTarget = tmp77.bitrateTarget;
      }
      if (bitrateTarget == null) {
        bitrateTarget = null;
      }
      tmp75 = bitrateTarget;
    }
    obj.target_bitrate = tmp75;
    if (isErrorOutbound) {
      const connectionStats10 = MediaEngineStatsStore.getConnectionStats(mediaContext);
      let tmp87 = null;
      if (null != connectionStats10) {
        const outbound6 = connectionStats10.stats.rtp.outbound;
        let found10 = outbound6.find((type) => "video" === type.type);
        if (found10 == null) {
          found10 = null;
        }
        tmp87 = found10;
      }
      let frameRateEncode;
      if (tmp87 != null) {
        frameRateEncode = tmp87.frameRateEncode;
      }
      if (frameRateEncode == null) {
        frameRateEncode = null;
      }
      let frameRateDecode = frameRateEncode;
    } else {
      let tmp81 = null;
      if (null != userId) {
        const connectionStats11 = MediaEngineStatsStore.getConnectionStats(mediaContext);
        tmp81 = null;
        if (null != connectionStats11) {
          let tmp83 = null;
          if (null != connectionStats11.stats.rtp.inbound[userId]) {
            let found11 = arr11.find((type) => "video" === type.type);
            if (found11 == null) {
              found11 = null;
            }
            tmp83 = found11;
          }
          tmp81 = tmp83;
        }
      }
      frameRateDecode = undefined;
      if (tmp81 != null) {
        frameRateDecode = tmp81.frameRateDecode;
      }
      if (frameRateDecode == null) {
        frameRateDecode = null;
      }
    }
    if (frameRateDecode == null) {
      frameRateDecode = null;
    }
    obj.fps = frameRateDecode;
    let tmp90 = null;
    if (mediaContext === constants.STREAM) {
      tmp90 = null;
      if (isErrorOutbound) {
        tmp90 = closure_1_22;
      }
    }
    obj.target_fps = tmp90;
    let ownerId;
    if (decodeStreamKeyResult != null) {
      ownerId = decodeStreamKeyResult.ownerId;
    }
    if (ownerId == null) {
      ownerId = null;
    }
    obj.sender_user_id = ownerId;
    let region1;
    if (rTCConnection != null) {
      region1 = obj2.getRegion();
    }
    if (region1 == null) {
      region1 = null;
    }
    obj.stream_region = region1;
    let tmp93 = null;
    if (isErrorOutbound) {
      let streamSourceType;
      if (obj2 != null) {
        const analyticsContext = obj2.analyticsContext;
        if (analyticsContext != null) {
          streamSourceType = analyticsContext.streamSourceType;
        }
      }
      if (streamSourceType == null) {
        streamSourceType = null;
      }
      tmp93 = streamSourceType;
    }
    obj.stream_source_type = tmp93;
    let numViewers;
    if (rTCConnection != null) {
      const analyticsContext2 = obj2.analyticsContext;
      if (analyticsContext2 != null) {
        numViewers = analyticsContext2.numViewers;
      }
    }
    if (numViewers == null) {
      numViewers = null;
    }
    obj.num_stream_viewers = numViewers;
    let tmp96 = null;
    if (isErrorOutbound) {
      let tmp97 = closure_1_21;
      if (closure_1_21 == null) {
        tmp97 = null;
      }
      tmp96 = tmp97;
    }
    obj.video_input_resolution_height = tmp96;
    let tmp98 = null;
    if (isErrorOutbound) {
      let tmp99 = closure_1_22;
      if (closure_1_22 == null) {
        tmp99 = null;
      }
      tmp98 = tmp99;
    }
    obj.video_input_frame_rate = tmp98;
    obj.screenshare_capture_method = getCurrentScreenshareCaptureMethod(mediaEngineConnectionId);
    let tmp100 = closure_1_23;
    if (closure_1_23 == null) {
      tmp100 = null;
    }
    obj.share_application_name = tmp100;
    let tmp101 = closure_1_24;
    if (closure_1_24 == null) {
      tmp101 = null;
    }
    obj.share_application_id = tmp101;
    let tmp102 = closure_1_25;
    if (closure_1_25 == null) {
      tmp102 = null;
    }
    obj.share_application_executable = tmp102;
    let tmp103 = closure_1_26;
    if (closure_1_26 == null) {
      tmp103 = null;
    }
    obj.share_application_distributor = tmp103;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.cpu_brand;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj.cpu_brand = cpu_brand;
    let cpu_vendor;
    if (cpu_brand != null) {
      cpu_vendor = cpu_brand.cpu_vendor;
    }
    if (cpu_vendor == null) {
      cpu_vendor = null;
    }
    obj.cpu_vendor = cpu_vendor;
    let cpu_memory;
    if (cpu_brand != null) {
      cpu_memory = cpu_brand.cpu_memory;
    }
    if (cpu_memory == null) {
      cpu_memory = null;
    }
    obj.cpu_memory = cpu_memory;
    let gpu_brand;
    if (cpu_brand != null) {
      gpu_brand = cpu_brand.gpu_brand;
    }
    if (gpu_brand == null) {
      gpu_brand = null;
    }
    obj.gpu_brand = gpu_brand;
    let gpu_count;
    if (cpu_brand != null) {
      gpu_count = cpu_brand.gpu_count;
    }
    if (gpu_count == null) {
      gpu_count = null;
    }
    obj.gpu_count = gpu_count;
    let gpu_memory;
    if (cpu_brand != null) {
      gpu_memory = cpu_brand.gpu_memory;
    }
    if (gpu_memory == null) {
      gpu_memory = null;
    }
    obj.gpu_memory = gpu_memory;
    let gpu_device_vendor_id;
    if (cpu_brand != null) {
      gpu_device_vendor_id = cpu_brand.gpu_device_vendor_id;
    }
    if (gpu_device_vendor_id == null) {
      gpu_device_vendor_id = null;
    }
    obj.gpu_device_vendor_id = gpu_device_vendor_id;
    let gpu_device_device_id;
    if (cpu_brand != null) {
      gpu_device_device_id = cpu_brand.gpu_device_device_id;
    }
    if (gpu_device_device_id == null) {
      gpu_device_device_id = null;
    }
    obj.gpu_device_device_id = gpu_device_device_id;
    prop2 = undefined;
    if (cpu_brand != null) {
      prop2 = cpu_brand.gpu_device_sub_sys_id;
    }
    if (prop2 == null) {
      prop2 = null;
    }
    obj.gpu_device_sub_sys_id = prop2;
    let gpu_device_revision;
    if (cpu_brand != null) {
      gpu_device_revision = cpu_brand.gpu_device_revision;
    }
    if (gpu_device_revision == null) {
      gpu_device_revision = null;
    }
    obj.gpu_device_revision = gpu_device_revision;
    let gpu_driver_version;
    if (cpu_brand != null) {
      gpu_driver_version = cpu_brand.gpu_driver_version;
    }
    if (gpu_driver_version == null) {
      gpu_driver_version = null;
    }
    obj.gpu_driver_version = gpu_driver_version;
    let currentCPUUsagePercent = ProcessUtilsDefault.getCurrentCPUUsagePercent();
    if (currentCPUUsagePercent == null) {
      currentCPUUsagePercent = null;
    }
    obj.cpu_usage = currentCPUUsagePercent;
    let tmp115Result = ProcessUtilsDefault;
    let currentMemoryUsageKB = tmp115Result.getCurrentMemoryUsageKB();
    if (currentMemoryUsageKB == null) {
      currentMemoryUsageKB = null;
    }
    obj.memory_usage = currentMemoryUsageKB;
    const connectionStats12 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
    let prop3;
    if (connectionStats12 != null) {
      prop3 = connectionStats12.stats.transport.outboundBitrateEstimate;
    }
    if (prop3 == null) {
      prop3 = null;
    }
    obj.outbound_bitrate_estimate = prop3;
    const connectionStats13 = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
    let prop4;
    if (connectionStats13 != null) {
      prop4 = connectionStats13.stats.transport.inboundBitrateEstimate;
    }
    if (prop4 == null) {
      prop4 = null;
    }
    obj.inbound_bitrate_estimate = prop4;
    obj.hardware_enabled = MediaEngineStore.getHardwareEncoding();
    let tmp122 = audioInputDeviceName;
    if (audioInputDeviceName == null) {
      const inputDevices = MediaEngineStore.getInputDevices();
      const tmp124 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
      let name1;
      if (tmp124 != null) {
        name1 = tmp124.name;
      }
      tmp122 = name1;
    }
    obj.audio_input_device_name = tmp122;
    let tmp126 = prop1;
    if (prop1 == null) {
      const outputDevices = MediaEngineStore.getOutputDevices();
      const tmp128 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
      let name2;
      if (tmp128 != null) {
        name2 = tmp128.name;
      }
      tmp126 = name2;
    }
    obj.audio_output_device_name = tmp126;
    let tmp130 = videoDeviceName;
    if (videoDeviceName == null) {
      const videoDevices = MediaEngineStore.getVideoDevices();
      const tmp132 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
      let name3;
      if (tmp132 != null) {
        name3 = tmp132.name;
      }
      tmp130 = name3;
    }
    obj.video_device_name = tmp130;
    const mediaEngine = MediaEngineStore.getMediaEngine();
    obj.audio_subsystem = mediaEngine.getAudioSubsystem();
    obj.automatic_audio_subsystem = MediaEngineStore.getSettings().automaticAudioSubsystem;
    const mediaEngine1 = MediaEngineStore.getMediaEngine();
    obj.audio_layer = mediaEngine1.getAudioLayer();
    obj.audio_input_mode = MediaEngineStore.getSettings().mode;
    obj.automatic_audio_input_sensitivity_enabled = MediaEngineStore.getSettings().modeOptions.autoThreshold;
    obj.audio_input_sensitivity = MediaEngineStore.getSettings().modeOptions.threshold;
    obj.echo_cancellation_enabled = MediaEngineStore.getEchoCancellation();
    obj.noise_suppression_enabled = MediaEngineStore.getNoiseSuppression();
    obj.noise_cancellation_enabled = MediaEngineStore.getNoiseCancellation();
    obj.automatic_gain_control_enabled = MediaEngineStore.getAutomaticGainControl();
    obj.sidechain_compression_enabled = MediaEngineStore.getSidechainCompression();
    obj.input_volume = MediaEngineStore.getInputVolume();
    obj.output_volume = MediaEngineStore.getOutputVolume();
    obj.audio_input_device_count = Object.keys(MediaEngineStore.getInputDevices()).length;
    obj.audio_output_device_count = Object.keys(MediaEngineStore.getOutputDevices()).length;
    tmp115Result = CrossPlatformNativeUtilsDefault;
    obj.app_hardware_acceleration_enabled = tmp115Result.getAppHardwareAccelerationEnabled();
    let inputDeviceOSMuted = MediaEngineStore.getInputDeviceOSMuted();
    if (inputDeviceOSMuted == null) {
      inputDeviceOSMuted = null;
    }
    obj.input_device_os_muted = inputDeviceOSMuted;
    let inputDeviceOSVolume = MediaEngineStore.getInputDeviceOSVolume();
    if (inputDeviceOSVolume == null) {
      inputDeviceOSVolume = null;
    }
    obj.input_device_os_volume = inputDeviceOSVolume;
    obj5 = rTCConnection1;
    AnalyticsUtilsDefault.track(AnalyticEvents.AV_ERROR_REPORTED, obj);
    const tmp115Result1 = AnalyticsUtilsDefault;
  });
};
