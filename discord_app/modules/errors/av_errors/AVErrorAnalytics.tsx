// discord_app/modules/errors/av_errors/AVErrorAnalytics.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import updateAveragedStatsHelper from "../../media_engine/MediaEngineStatsStore.tsx";
import { getSystemAnalyticsInfo } from "../../system_analytics/SystemAnalyticsStore.native.tsx";
import ApplicationStreamPresets from "../../../stores/ApplicationStreamingSettingsStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import initialize from "../../../stores/RTCRegionStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";
import initialize2 from "../../../stores/StreamRTCConnectionStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import DesktopSources from "../../../../discord_common/js/packages/media-engine/Constants.tsx";

const require = fn;
function getCurrentScreenshareCaptureMethod(mediaEngineConnectionId) {
  const connectionStats = store.getConnectionStats(mediaEngineConnectionId);
  const lastConnectionStats = store.getLastConnectionStats(mediaEngineConnectionId);
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
        let tmp21 = callback(tmp18, 2);
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
({ MediaEngineContextTypes: closure_14, SIMULCAST_HQ_QUALITY: closure_15 } = DesktopSources);
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/AVErrorAnalytics.tsx");

export const sendAVErrorAnalyticsEvent = function sendAVErrorAnalyticsEvent(error, context) {
  const _require = error;
  errorInfo = _require(errorInfo[12]).getErrorInfo(error);
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
  let tmp25 = null;
  if (tmp6 != streamKey) {
    let streamApplication;
    if (rTCConnection != tmp6) {
      let analyticsContext = rTCConnection.analyticsContext;
      if (analyticsContext != tmp6) {
        streamApplication = analyticsContext.streamApplication;
      }
    }
    tmp25 = streamApplication;
  }
  const state = underlyingError.getState();
  ({ resolution: closure_20, fps: closure_21 } = state);
  tmpResult = tmp(tmp2[14]);
  const runningGameAnalytics = tmpResult.getRunningGameAnalytics(tmp25);
  ({ gameName: closure_22, gameId: closure_23, exe: closure_24, distributor: closure_25 } = runningGameAnalytics);
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
        if (!tmp36) {
          const outboundStats = rTCConnection1.getOutboundStats();
          tmp6 = outboundStats == tmp6;
          if (!tmp6) {
            found = outboundStats.find((item, index) => item.quality === prop1);
          }
        }
        let inboundStats = found;
      } else if (!tmp36) {
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
    let tmp32 = maxByResult;
    let obj5 = inboundStats1(tmp2[15]);
  } else {
    tmp32 = null;
    if (tmp6 != userId) {
      inboundStats1 = undefined;
      if (rTCConnection1 != tmp6) {
        inboundStats1 = rTCConnection1.getInboundStats(userId);
      }
      tmp32 = inboundStats1;
    }
  }
  inboundStats1 = tmp32;
  let obj = _require(errorInfo[12]);
  mediaContext().then((result) => {
    const obj = { error_name: error.valueOf(), error_code: errorInfo.errorCode, error_severity: errorInfo.severity, error_category: errorInfo.category, underlying_error: null, error_message: null, guild_id: null, channel_id: null, channel_type: null, rtc_connection_id: null, media_session_id: null, parent_media_session_id: null, context: null, voice_backend_version: null, rtc_worker_backend_version: null, guild_region: null, hostname: null, duration: null, participant_type: null, num_frames: null, num_packets: null, num_bytes: null, num_packets_lost: null, video_codec: null, video_encoder: null, video_decoder: null, audio_capture_sample_rate_mismatch_percent: null, audio_capture_processing_sample_rate: null, incoming_video_stopped_for_occlusion: null, bitrate: null, target_bitrate: null, fps: null, target_fps: null, sender_user_id: null, stream_region: null, stream_source_type: null, num_stream_viewers: null, video_input_resolution_height: null, video_input_frame_rate: null, screenshare_capture_method: null, share_application_name: null, share_application_id: null, share_application_executable: null, share_application_distributor: null, cpu_brand: null, cpu_vendor: null, cpu_memory: null, gpu_brand: null, gpu_count: null, gpu_memory: null, gpu_device_vendor_id: null, gpu_device_device_id: null, gpu_device_sub_sys_id: null, gpu_device_revision: null, gpu_driver_version: null, cpu_usage: null, memory_usage: null, outbound_bitrate_estimate: null, inbound_bitrate_estimate: null, hardware_enabled: null, audio_input_device_name: null, audio_output_device_name: null, video_device_name: null, audio_subsystem: null, automatic_audio_subsystem: null, audio_layer: null, audio_input_mode: null, automatic_audio_input_sensitivity_enabled: null, audio_input_sensitivity: null, echo_cancellation_enabled: null, noise_suppression_enabled: null, noise_cancellation_enabled: null, automatic_gain_control_enabled: null, sidechain_compression_enabled: null, input_volume: null, output_volume: null, audio_input_device_count: null, audio_output_device_count: null, app_hardware_acceleration_enabled: null, input_device_os_muted: null, input_device_os_volume: null };
    let tmp = underlyingError;
    if (underlyingError == null) {
      tmp = null;
    }
    obj[4] = tmp;
    let tmp2 = errorMessage;
    if (errorMessage == null) {
      tmp2 = null;
    }
    obj[5] = tmp2;
    let guild_id;
    if (store != null) {
      guild_id = store.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj[6] = guild_id;
    let tmp5 = channelId;
    if (channelId == null) {
      tmp5 = null;
    }
    obj[7] = tmp5;
    let type;
    if (store != null) {
      type = store.type;
    }
    if (type == null) {
      type = null;
    }
    obj[8] = type;
    let tmp7 = rtcConnectionId;
    if (rtcConnectionId == null) {
      tmp7 = null;
    }
    obj[9] = tmp7;
    if (mediaSessionId == null) {
      mediaSessionId = rtcConnectionId.getMediaSessionId();
    }
    if (mediaSessionId == null) {
      mediaSessionId = null;
    }
    obj[10] = mediaSessionId;
    let parentMediaSessionId;
    if (rTCConnection != null) {
      parentMediaSessionId = obj2.parentMediaSessionId;
    }
    if (parentMediaSessionId == null) {
      parentMediaSessionId = null;
    }
    obj[11] = parentMediaSessionId;
    let tmp11 = mediaContext;
    if (mediaContext == null) {
      tmp11 = null;
    }
    obj[12] = tmp11;
    rTCConnection = rtcConnectionId.getRTCConnection();
    let voiceVersion;
    if (rTCConnection != null) {
      voiceVersion = rTCConnection.getVoiceVersion();
    }
    if (voiceVersion == null) {
      voiceVersion = null;
    }
    obj[13] = voiceVersion;
    rTCConnection1 = rtcConnectionId.getRTCConnection();
    let rtcWorkerVersion;
    if (rTCConnection1 != null) {
      rtcWorkerVersion = rTCConnection1.getRtcWorkerVersion();
    }
    if (rtcWorkerVersion == null) {
      rtcWorkerVersion = null;
    }
    obj[14] = rtcWorkerVersion;
    let region = videoCodec.getRegion(rtcConnectionId.getHostname());
    if (region == null) {
      region = null;
    }
    obj[15] = region;
    let hostname = rtcConnectionId.getHostname();
    if (hostname == null) {
      hostname = null;
    }
    obj[16] = hostname;
    let durationSeconds;
    if (rTCConnection1 != null) {
      durationSeconds = obj5.getDurationSeconds();
    }
    if (durationSeconds == null) {
      durationSeconds = null;
    }
    obj[17] = durationSeconds;
    let tmp17 = str;
    if (str == null) {
      tmp17 = null;
    }
    obj[18] = tmp17;
    let num;
    if (inboundStats1 != null) {
      num = inboundStats1.num_frames;
    }
    if (num == null) {
      num = 0;
    }
    obj[19] = num;
    let num2;
    if (inboundStats1 != null) {
      num2 = inboundStats1.num_packets;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[20] = num2;
    let num3;
    if (inboundStats1 != null) {
      num3 = inboundStats1.num_bytes;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj[21] = num3;
    if (isErrorOutbound) {
      const connectionStats = store.getConnectionStats(mediaEngineConnectionId);
      let tmp29 = null;
      if (null != connectionStats) {
        const outbound = connectionStats.stats.rtp.outbound;
        let found = outbound.find((item, index) => "video" === item.type);
        if (found == null) {
          found = null;
        }
        tmp29 = found;
      }
      let tmp22 = tmp29;
    } else {
      tmp22 = null;
      if (null != userId) {
        const connectionStats1 = store.getConnectionStats(mediaEngineConnectionId);
        tmp22 = null;
        if (null != connectionStats1) {
          let tmp25 = null;
          if (null != connectionStats1.stats.rtp.inbound[userId]) {
            let found1 = arr.find((item, index) => "video" === item.type);
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
    obj[22] = num4;
    let parseCodecTypeResult = videoCodec;
    if (videoCodec == null) {
      if (isErrorOutbound) {
        const connectionStats2 = store.getConnectionStats(mediaEngineConnectionId);
        let tmp39 = null;
        if (null != connectionStats2) {
          const outbound1 = connectionStats2.stats.rtp.outbound;
          let found2 = outbound1.find((item, index) => "video" === item.type);
          if (found2 == null) {
            found2 = null;
          }
          tmp39 = found2;
        }
        let tmp32 = tmp39;
      } else {
        tmp32 = null;
        if (null != userId) {
          const connectionStats3 = store.getConnectionStats(mediaEngineConnectionId);
          tmp32 = null;
          if (null != connectionStats3) {
            let tmp35 = null;
            if (null != connectionStats3.stats.rtp.inbound[userId]) {
              let found3 = arr3.find((item, index) => "video" === item.type);
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
      parseCodecTypeResult = error(errorInfo[16]).parseCodecType(name);
      const obj15 = error(errorInfo[16]);
    }
    if (parseCodecTypeResult == null) {
      parseCodecTypeResult = null;
    }
    obj[23] = parseCodecTypeResult;
    let parseEncoderResult = videoEncoder;
    if (videoEncoder == null) {
      const connectionStats4 = store.getConnectionStats(mediaEngineConnectionId);
      let tmp47 = null;
      if (null != connectionStats4) {
        const outbound2 = connectionStats4.stats.rtp.outbound;
        let found4 = outbound2.find((item, index) => "video" === item.type);
        if (found4 == null) {
          found4 = null;
        }
        tmp47 = found4;
      }
      prop = undefined;
      if (tmp47 != null) {
        prop = tmp47.encoderImplementationName;
      }
      parseEncoderResult = error(errorInfo[16]).parseEncoder(prop);
      const obj6 = error(errorInfo[16]);
    }
    if (parseEncoderResult == null) {
      parseEncoderResult = null;
    }
    obj[24] = parseEncoderResult;
    let parseDecoderResult = videoDecoder;
    if (videoDecoder == null) {
      let tmp53 = null;
      if (null != userId) {
        const connectionStats5 = store.getConnectionStats(mediaEngineConnectionId);
        tmp53 = null;
        if (null != connectionStats5) {
          let tmp54 = null;
          if (null != connectionStats5.stats.rtp.inbound[userId]) {
            let found5 = arr6.find((item, index) => "video" === item.type);
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
      parseDecoderResult = error(errorInfo[16]).parseDecoder(prop1);
      const obj16 = error(errorInfo[16]);
    }
    if (parseDecoderResult == null) {
      parseDecoderResult = null;
    }
    obj[25] = parseDecoderResult;
    let tmp57 = prop;
    if (prop == null) {
      tmp57 = null;
    }
    obj[26] = tmp57;
    const connectionStats6 = store.getConnectionStats(mediaEngineConnectionId);
    let currentSampleRate;
    if (connectionStats6 != null) {
      const outbound3 = connectionStats6.stats.rtp.outbound;
      const found6 = outbound3.find((item, index) => "audio" === item.type);
      if (found6 != null) {
        currentSampleRate = found6.currentSampleRate;
      }
    }
    if (currentSampleRate == null) {
      currentSampleRate = null;
    }
    obj[27] = currentSampleRate;
    const WindowVisibilityVideoManager = error(errorInfo[17]).WindowVisibilityVideoManager;
    obj[28] = !WindowVisibilityVideoManager.isIncomingVideoEnabled();
    if (isErrorOutbound) {
      const connectionStats7 = store.getConnectionStats(mediaEngineConnectionId);
      let tmp67 = null;
      if (null != connectionStats7) {
        const outbound4 = connectionStats7.stats.rtp.outbound;
        let found7 = outbound4.find((item, index) => "video" === item.type);
        if (found7 == null) {
          found7 = null;
        }
        tmp67 = found7;
      }
      let tmp62 = tmp67;
    } else {
      tmp62 = null;
      if (null != userId) {
        const connectionStats8 = store.getConnectionStats(mediaEngineConnectionId);
        tmp62 = null;
        if (null != connectionStats8) {
          let tmp64 = null;
          if (null != connectionStats8.stats.rtp.inbound[userId]) {
            let found8 = arr8.find((item, index) => "video" === item.type);
            if (found8 == null) {
              found8 = null;
            }
            tmp64 = found8;
          }
          tmp62 = tmp64;
        }
      }
    }
    let bitrate;
    if (tmp62 != null) {
      bitrate = tmp62.bitrate;
    }
    if (bitrate == null) {
      bitrate = null;
    }
    obj[29] = bitrate;
    let tmp70 = null;
    if (isErrorOutbound) {
      const connectionStats9 = store.getConnectionStats(mediaEngineConnectionId);
      let tmp72 = null;
      if (null != connectionStats9) {
        const outbound5 = connectionStats9.stats.rtp.outbound;
        let found9 = outbound5.find((item, index) => "video" === item.type);
        if (found9 == null) {
          found9 = null;
        }
        tmp72 = found9;
      }
      let bitrateTarget;
      if (tmp72 != null) {
        bitrateTarget = tmp72.bitrateTarget;
      }
      if (bitrateTarget == null) {
        bitrateTarget = null;
      }
      tmp70 = bitrateTarget;
    }
    obj[30] = tmp70;
    if (isErrorOutbound) {
      const connectionStats10 = store.getConnectionStats(mediaContext);
      let tmp82 = null;
      if (null != connectionStats10) {
        const outbound6 = connectionStats10.stats.rtp.outbound;
        let found10 = outbound6.find((item, index) => "video" === item.type);
        if (found10 == null) {
          found10 = null;
        }
        tmp82 = found10;
      }
      let frameRateEncode;
      if (tmp82 != null) {
        frameRateEncode = tmp82.frameRateEncode;
      }
      if (frameRateEncode == null) {
        frameRateEncode = null;
      }
      let frameRateDecode = frameRateEncode;
    } else {
      let tmp76 = null;
      if (null != userId) {
        const connectionStats11 = store.getConnectionStats(mediaContext);
        tmp76 = null;
        if (null != connectionStats11) {
          let tmp78 = null;
          if (null != connectionStats11.stats.rtp.inbound[userId]) {
            let found11 = arr11.find((item, index) => "video" === item.type);
            if (found11 == null) {
              found11 = null;
            }
            tmp78 = found11;
          }
          tmp76 = tmp78;
        }
      }
      frameRateDecode = undefined;
      if (tmp76 != null) {
        frameRateDecode = tmp76.frameRateDecode;
      }
      if (frameRateDecode == null) {
        frameRateDecode = null;
      }
    }
    if (frameRateDecode == null) {
      frameRateDecode = null;
    }
    obj[31] = frameRateDecode;
    let tmp85 = null;
    if (mediaContext === audioInputDeviceName.STREAM) {
      tmp85 = null;
      if (isErrorOutbound) {
        tmp85 = closure_21;
      }
    }
    obj[32] = tmp85;
    let ownerId;
    if (decodeStreamKeyResult != null) {
      ownerId = decodeStreamKeyResult.ownerId;
    }
    if (ownerId == null) {
      ownerId = null;
    }
    obj[33] = ownerId;
    let region1;
    if (rTCConnection != null) {
      region1 = obj2.getRegion();
    }
    if (region1 == null) {
      region1 = null;
    }
    obj[34] = region1;
    let tmp88 = null;
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
      tmp88 = streamSourceType;
    }
    obj[35] = tmp88;
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
    obj[36] = numViewers;
    let tmp91 = null;
    if (isErrorOutbound) {
      let tmp92 = closure_20;
      if (closure_20 == null) {
        tmp92 = null;
      }
      tmp91 = tmp92;
    }
    obj[37] = tmp91;
    let tmp93 = null;
    if (isErrorOutbound) {
      let tmp94 = closure_21;
      if (closure_21 == null) {
        tmp94 = null;
      }
      tmp93 = tmp94;
    }
    obj[38] = tmp93;
    obj[39] = videoDeviceName(mediaEngineConnectionId);
    let tmp95 = closure_22;
    if (closure_22 == null) {
      tmp95 = null;
    }
    obj[40] = tmp95;
    let tmp96 = closure_23;
    if (closure_23 == null) {
      tmp96 = null;
    }
    obj[41] = tmp96;
    let tmp97 = closure_24;
    if (closure_24 == null) {
      tmp97 = null;
    }
    obj[42] = tmp97;
    let tmp98 = closure_25;
    if (closure_25 == null) {
      tmp98 = null;
    }
    obj[43] = tmp98;
    let cpu_brand;
    if (result != null) {
      cpu_brand = result.cpu_brand;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[44] = cpu_brand;
    let cpu_vendor;
    if (result != null) {
      cpu_vendor = result.cpu_vendor;
    }
    if (cpu_vendor == null) {
      cpu_vendor = null;
    }
    obj[45] = cpu_vendor;
    let cpu_memory;
    if (result != null) {
      cpu_memory = result.cpu_memory;
    }
    if (cpu_memory == null) {
      cpu_memory = null;
    }
    obj[46] = cpu_memory;
    let gpu_brand;
    if (result != null) {
      gpu_brand = result.gpu_brand;
    }
    if (gpu_brand == null) {
      gpu_brand = null;
    }
    obj[47] = gpu_brand;
    let gpu_count;
    if (result != null) {
      gpu_count = result.gpu_count;
    }
    if (gpu_count == null) {
      gpu_count = null;
    }
    obj[48] = gpu_count;
    let gpu_memory;
    if (result != null) {
      gpu_memory = result.gpu_memory;
    }
    if (gpu_memory == null) {
      gpu_memory = null;
    }
    obj[49] = gpu_memory;
    let gpu_device_vendor_id;
    if (result != null) {
      gpu_device_vendor_id = result.gpu_device_vendor_id;
    }
    if (gpu_device_vendor_id == null) {
      gpu_device_vendor_id = null;
    }
    obj[50] = gpu_device_vendor_id;
    let gpu_device_device_id;
    if (result != null) {
      gpu_device_device_id = result.gpu_device_device_id;
    }
    if (gpu_device_device_id == null) {
      gpu_device_device_id = null;
    }
    obj[51] = gpu_device_device_id;
    let prop2;
    if (result != null) {
      prop2 = result.gpu_device_sub_sys_id;
    }
    if (prop2 == null) {
      prop2 = null;
    }
    obj[52] = prop2;
    let gpu_device_revision;
    if (result != null) {
      gpu_device_revision = result.gpu_device_revision;
    }
    if (gpu_device_revision == null) {
      gpu_device_revision = null;
    }
    obj[53] = gpu_device_revision;
    let gpu_driver_version;
    if (result != null) {
      gpu_driver_version = result.gpu_driver_version;
    }
    if (gpu_driver_version == null) {
      gpu_driver_version = null;
    }
    obj[54] = gpu_driver_version;
    let currentCPUUsagePercent = inboundStats1(errorInfo[18]).getCurrentCPUUsagePercent();
    if (currentCPUUsagePercent == null) {
      currentCPUUsagePercent = null;
    }
    obj[55] = currentCPUUsagePercent;
    let tmp110Result = inboundStats1(errorInfo[18]);
    let currentMemoryUsageKB = tmp110Result.getCurrentMemoryUsageKB();
    if (currentMemoryUsageKB == null) {
      currentMemoryUsageKB = null;
    }
    obj[56] = currentMemoryUsageKB;
    const connectionStats12 = store.getConnectionStats(mediaEngineConnectionId);
    let prop3;
    if (connectionStats12 != null) {
      prop3 = connectionStats12.stats.transport.outboundBitrateEstimate;
    }
    if (prop3 == null) {
      prop3 = null;
    }
    obj[57] = prop3;
    const connectionStats13 = store.getConnectionStats(mediaEngineConnectionId);
    let prop4;
    if (connectionStats13 != null) {
      prop4 = connectionStats13.stats.transport.inboundBitrateEstimate;
    }
    if (prop4 == null) {
      prop4 = null;
    }
    obj[58] = prop4;
    obj[59] = mediaSessionId.getHardwareEncoding();
    let tmp117 = audioInputDeviceName;
    if (audioInputDeviceName == null) {
      const inputDevices = obj10.getInputDevices();
      const tmp119 = inputDevices[obj10.getInputDeviceId(obj10)];
      let name1;
      if (tmp119 != null) {
        name1 = tmp119.name;
      }
      tmp117 = name1;
    }
    obj[60] = tmp117;
    let tmp121 = prop1;
    if (prop1 == null) {
      const outputDevices = obj10.getOutputDevices();
      const tmp123 = outputDevices[obj10.getOutputDeviceId(obj10)];
      let name2;
      if (tmp123 != null) {
        name2 = tmp123.name;
      }
      tmp121 = name2;
    }
    obj[61] = tmp121;
    let tmp125 = videoDeviceName;
    if (videoDeviceName == null) {
      const videoDevices = obj10.getVideoDevices();
      const tmp127 = videoDevices[obj10.getVideoDeviceId(obj10)];
      let name3;
      if (tmp127 != null) {
        name3 = tmp127.name;
      }
      tmp125 = name3;
    }
    obj[62] = tmp125;
    const mediaEngine = obj10.getMediaEngine();
    obj[63] = mediaEngine.getAudioSubsystem();
    obj[64] = mediaSessionId.getSettings().automaticAudioSubsystem;
    const mediaEngine1 = obj10.getMediaEngine();
    obj[65] = mediaEngine1.getAudioLayer();
    obj[66] = mediaSessionId.getSettings().mode;
    obj[67] = mediaSessionId.getSettings().modeOptions.autoThreshold;
    obj[68] = mediaSessionId.getSettings().modeOptions.threshold;
    obj[69] = mediaSessionId.getEchoCancellation();
    obj[70] = mediaSessionId.getNoiseSuppression();
    obj[71] = mediaSessionId.getNoiseCancellation();
    obj[72] = mediaSessionId.getAutomaticGainControl();
    obj[73] = mediaSessionId.getSidechainCompression();
    obj[74] = mediaSessionId.getInputVolume();
    obj[75] = mediaSessionId.getOutputVolume();
    obj[76] = Object.keys(mediaSessionId.getInputDevices()).length;
    obj[77] = Object.keys(mediaSessionId.getOutputDevices()).length;
    tmp110Result = inboundStats1(errorInfo[19]);
    obj[78] = tmp110Result.getAppHardwareAccelerationEnabled();
    let inputDeviceOSMuted = obj10.getInputDeviceOSMuted();
    if (inputDeviceOSMuted == null) {
      inputDeviceOSMuted = null;
    }
    obj[79] = inputDeviceOSMuted;
    let inputDeviceOSVolume = obj10.getInputDeviceOSVolume();
    if (inputDeviceOSVolume == null) {
      inputDeviceOSVolume = null;
    }
    obj[80] = inputDeviceOSVolume;
    obj5 = rTCConnection1;
    const obj8 = inboundStats1(errorInfo[18]);
    inboundStats1(errorInfo[20]).track(prop.AV_ERROR_REPORTED, obj);
    const tmp110Result1 = inboundStats1(errorInfo[20]);
  });
};