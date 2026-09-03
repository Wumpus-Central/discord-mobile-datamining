// === Module 17692: getCurrentScreenshareCaptureMethod ===

// Module 17692 (getCurrentScreenshareCaptureMethod)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "updateAveragedStatsHelper" /* 4567 */;
import { getSystemAnalyticsInfo } from "getSystemAnalyticsInfo" /* 4551 */;
import closure_6 from "ApplicationStreamPresets" /* 4572 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import closure_8 from "_detectH265HardwareDecode" /* 4529 */;
import closure_9 from "createRTCConnection" /* 4554 */;
import closure_10 from "initialize" /* 4575 */;
import closure_11 from "handleConnectionOpen" /* 1980 */;
import closure_12 from "initialize" /* 4568 */;
import { AnalyticEvents } from "ME" /* 673 */;
import DesktopSources from "DesktopSources" /* 4542 */;

const require = arg1;
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
          let tmp7 = nextResult;
          num = screenshare[tmp6];
        }
        if (num == null) {
          num = 0;
        }
        let screenshare2 = connectionStats.stats.screenshare;
        let num2;
        let tmp8 = num;
        if (screenshare2 != null) {
          let tmp9 = nextResult;
          num2 = screenshare2[tmp6];
        }
        if (num2 == null) {
          num2 = 0;
        }
        let tmp10 = nextResult;
        let tmp11 = num;
        obj[tmp6] = num2 - tmp8;
        continue;
      }
      let num3 = -1;
      let tmp12 = null;
      const _Object = Object;
      const entries = Object.entries(obj);
      const tmp16 = entries[Symbol.iterator]();
      while (tmp16 !== undefined) {
        let tmp20 = callback;
        let tmp21 = callback(tmp18, 2);
        let tmp23 = tmp21[1];
        let tmp24 = tmp23;
        let tmp25 = num3;
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
const result = require("set").fileFinishedImporting("modules/errors/av_errors/AVErrorAnalytics.tsx");

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
    let str = voiceParticipantType;
  } else {
    str = "receiver";
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
  let obj = _require(errorInfo[12]);
  mediaContext().then((cpu_brand) => {
    const obj = { error_name: error.valueOf(), error_code: errorInfo.errorCode, error_severity: errorInfo.severity, error_category: errorInfo.category, underlying_error: null, error_message: null, guild_id: null, channel_id: null, channel_type: null, rtc_connection_id: null, media_session_id: null, parent_media_session_id: null, context: null, voice_backend_version: null, rtc_worker_backend_version: null, guild_region: null, hostname: null, duration: null, participant_type: null, num_frames: null, num_packets: null, num_bytes: null, num_packets_lost: null, video_codec: null, video_encoder: null, video_decoder: null, audio_capture_sample_rate_mismatch_percent: null, audio_capture_processing_sample_rate: null, voice_processing_process_time_us: null, voice_processing_frame_count: null, voice_processing_sample_rate: null, voice_processing_setup_count: null, incoming_video_stopped_for_occlusion: null, bitrate: null, target_bitrate: null, fps: null, target_fps: null, sender_user_id: null, stream_region: null, stream_source_type: null, num_stream_viewers: null, video_input_resolution_height: null, video_input_frame_rate: null, screenshare_capture_method: null, share_application_name: null, share_application_id: null, share_application_executable: null, share_application_distributor: null, cpu_brand: null, cpu_vendor: null, cpu_memory: null, gpu_brand: null, gpu_count: null, gpu_memory: null, gpu_device_vendor_id: null, gpu_device_device_id: null, gpu_device_sub_sys_id: null, gpu_device_revision: null, gpu_driver_version: null, cpu_usage: null, memory_usage: null, outbound_bitrate_estimate: null, inbound_bitrate_estimate: null, hardware_enabled: null, audio_input_device_name: null, audio_output_device_name: null, video_device_name: null, audio_subsystem: null, automatic_audio_subsystem: null, audio_layer: null, audio_input_mode: null, automatic_audio_input_sensitivity_enabled: null, audio_input_sensitivity: null, echo_cancellation_enabled: null, noise_suppression_enabled: null, noise_cancellation_enabled: null, automatic_gain_control_enabled: null, sidechain_compression_enabled: null, input_volume: null, output_volume: null, audio_input_device_count: null, audio_output_device_count: null, app_hardware_acceleration_enabled: null, input_device_os_muted: null, input_device_os_volume: null };
    cpu_brand = underlyingError;
    if (underlyingError == null) {
      cpu_brand = null;
    }
    obj[4] = cpu_brand;
    let tmp2 = errorMessage;
    if (errorMessage == null) {
      tmp2 = null;
    }
    obj[5] = tmp2;
    let guild_id;
    if (store != null) {
      guild_id = tmp3.guild_id;
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
      type = tmp3.type;
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
      num = tmp18.num_frames;
    }
    if (num == null) {
      num = 0;
    }
    obj[19] = num;
    let num2;
    if (inboundStats1 != null) {
      num2 = tmp18.num_packets;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[20] = num2;
    let num3;
    if (inboundStats1 != null) {
      num3 = tmp18.num_bytes;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj[21] = num3;
    if (isErrorOutbound) {
      const connectionStats = store.getConnectionStats(tmp20);
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
      if (null != tmp21) {
        const connectionStats1 = store.getConnectionStats(tmp20);
        tmp22 = null;
        if (null != connectionStats1) {
          let tmp25 = null;
          if (null != connectionStats1.stats.rtp.inbound[tmp21]) {
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
    obj[22] = num4;
    let parseCodecTypeResult = videoCodec;
    if (videoCodec == null) {
      cpu_brand = error;
      cpu_brand = errorInfo;
      if (tmp19) {
        const connectionStats2 = store.getConnectionStats(tmp20);
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
        if (null != tmp21) {
          const connectionStats3 = store.getConnectionStats(tmp20);
          tmp32 = null;
          if (null != connectionStats3) {
            let tmp35 = null;
            if (null != connectionStats3.stats.rtp.inbound[tmp21]) {
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
      parseCodecTypeResult = error(errorInfo[16]).parseCodecType(name);
      const obj15 = error(errorInfo[16]);
    }
    if (parseCodecTypeResult == null) {
      parseCodecTypeResult = null;
    }
    obj[23] = parseCodecTypeResult;
    let parseEncoderResult = videoEncoder;
    if (videoEncoder == null) {
      const connectionStats4 = store.getConnectionStats(tmp20);
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
      parseEncoderResult = error(errorInfo[16]).parseEncoder(prop);
      const obj6 = error(errorInfo[16]);
    }
    if (parseEncoderResult == null) {
      parseEncoderResult = null;
    }
    obj[24] = parseEncoderResult;
    let parseDecoderResult = videoDecoder;
    if (videoDecoder == null) {
      cpu_brand = error;
      cpu_brand = errorInfo;
      let tmp53 = null;
      if (null != tmp21) {
        const connectionStats5 = store.getConnectionStats(tmp20);
        tmp53 = null;
        if (null != connectionStats5) {
          let tmp54 = null;
          if (null != connectionStats5.stats.rtp.inbound[tmp21]) {
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
    const connectionStats6 = store.getConnectionStats(tmp20);
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
    obj[27] = currentSampleRate;
    let processTimeUs;
    if (prop2 != null) {
      processTimeUs = tmp61.processTimeUs;
    }
    if (processTimeUs == null) {
      processTimeUs = null;
    }
    obj[28] = processTimeUs;
    let frameCount;
    if (prop2 != null) {
      frameCount = tmp61.frameCount;
    }
    if (frameCount == null) {
      frameCount = null;
    }
    obj[29] = frameCount;
    let sampleRate;
    if (prop2 != null) {
      sampleRate = tmp61.sampleRate;
    }
    if (sampleRate == null) {
      sampleRate = null;
    }
    obj[30] = sampleRate;
    let setupCount;
    if (prop2 != null) {
      setupCount = tmp61.setupCount;
    }
    if (setupCount == null) {
      setupCount = null;
    }
    obj[31] = setupCount;
    const WindowVisibilityVideoManager = error(errorInfo[17]).WindowVisibilityVideoManager;
    obj[32] = !WindowVisibilityVideoManager.isIncomingVideoEnabled();
    if (isErrorOutbound) {
      const connectionStats7 = obj7.getConnectionStats(tmp20);
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
      if (null != tmp21) {
        const connectionStats8 = obj7.getConnectionStats(tmp20);
        tmp67 = null;
        if (null != connectionStats8) {
          let tmp69 = null;
          if (null != connectionStats8.stats.rtp.inbound[tmp21]) {
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
    obj[33] = bitrate;
    let tmp75 = null;
    if (isErrorOutbound) {
      const connectionStats9 = obj7.getConnectionStats(tmp20);
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
    obj[34] = tmp75;
    if (isErrorOutbound) {
      const connectionStats10 = obj7.getConnectionStats(tmp80);
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
      if (null != tmp21) {
        const connectionStats11 = obj7.getConnectionStats(tmp80);
        tmp81 = null;
        if (null != connectionStats11) {
          let tmp83 = null;
          if (null != connectionStats11.stats.rtp.inbound[tmp21]) {
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
    obj[35] = frameRateDecode;
    let tmp90 = null;
    if (mediaContext === audioInputDeviceName.STREAM) {
      tmp90 = null;
      if (tmp19) {
        tmp90 = closure_22;
      }
    }
    obj[36] = tmp90;
    let ownerId;
    if (decodeStreamKeyResult != null) {
      ownerId = decodeStreamKeyResult.ownerId;
    }
    if (ownerId == null) {
      ownerId = null;
    }
    obj[37] = ownerId;
    let region1;
    if (rTCConnection != null) {
      region1 = obj2.getRegion();
    }
    if (region1 == null) {
      region1 = null;
    }
    obj[38] = region1;
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
    obj[39] = tmp93;
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
    obj[40] = numViewers;
    let tmp96 = null;
    if (isErrorOutbound) {
      let tmp97 = closure_21;
      if (closure_21 == null) {
        tmp97 = null;
      }
      tmp96 = tmp97;
    }
    obj[41] = tmp96;
    let tmp98 = null;
    if (isErrorOutbound) {
      let tmp99 = closure_22;
      if (closure_22 == null) {
        tmp99 = null;
      }
      tmp98 = tmp99;
    }
    obj[42] = tmp98;
    obj[43] = videoDeviceName(mediaEngineConnectionId);
    cpu_brand = closure_23;
    if (closure_23 == null) {
      cpu_brand = null;
    }
    obj[44] = cpu_brand;
    cpu_brand = closure_24;
    if (closure_24 == null) {
      cpu_brand = null;
    }
    obj[45] = cpu_brand;
    cpu_brand = closure_25;
    if (closure_25 == null) {
      cpu_brand = null;
    }
    obj[46] = cpu_brand;
    cpu_brand = closure_26;
    if (closure_26 == null) {
      cpu_brand = null;
    }
    obj[47] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.cpu_brand;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[48] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.cpu_vendor;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[49] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.cpu_memory;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[50] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_brand;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[51] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_count;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[52] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_memory;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[53] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_device_vendor_id;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[54] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_device_device_id;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[55] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_device_sub_sys_id;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[56] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_device_revision;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[57] = cpu_brand;
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.gpu_driver_version;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[58] = cpu_brand;
    cpu_brand = inboundStats1;
    cpu_brand = inboundStats1(errorInfo[18]).getCurrentCPUUsagePercent();
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[59] = cpu_brand;
    obj5 = rTCConnection1;
    const obj8 = inboundStats1(errorInfo[18]);
    cpu_brand = cpu_brand(errorInfo[18]).getCurrentMemoryUsageKB();
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[60] = cpu_brand;
    cpu_brand = obj7.getConnectionStats(tmp20);
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.stats.transport.outboundBitrateEstimate;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[61] = cpu_brand;
    cpu_brand = obj7.getConnectionStats(tmp20);
    cpu_brand = undefined;
    if (cpu_brand != null) {
      cpu_brand = cpu_brand.stats.transport.inboundBitrateEstimate;
    }
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[62] = cpu_brand;
    obj[63] = mediaSessionId.getHardwareEncoding();
    cpu_brand = audioInputDeviceName;
    if (audioInputDeviceName == null) {
      cpu_brand = obj10.getInputDevices();
      cpu_brand = cpu_brand[obj10.getInputDeviceId(obj10)];
      cpu_brand = undefined;
      if (cpu_brand != null) {
        cpu_brand = cpu_brand.name;
      }
    }
    obj[64] = cpu_brand;
    cpu_brand = prop1;
    if (prop1 == null) {
      cpu_brand = obj10.getOutputDevices();
      cpu_brand = cpu_brand[obj10.getOutputDeviceId(obj10)];
      cpu_brand = undefined;
      if (cpu_brand != null) {
        cpu_brand = cpu_brand.name;
      }
    }
    obj[65] = cpu_brand;
    cpu_brand = videoDeviceName;
    if (videoDeviceName == null) {
      cpu_brand = obj10.getVideoDevices();
      cpu_brand = cpu_brand[obj10.getVideoDeviceId(obj10)];
      cpu_brand = undefined;
      if (cpu_brand != null) {
        cpu_brand = cpu_brand.name;
      }
    }
    obj[66] = cpu_brand;
    const mediaEngine = obj10.getMediaEngine();
    obj[67] = mediaEngine.getAudioSubsystem();
    obj[68] = mediaSessionId.getSettings().automaticAudioSubsystem;
    const mediaEngine1 = obj10.getMediaEngine();
    obj[69] = mediaEngine1.getAudioLayer();
    obj[70] = mediaSessionId.getSettings().mode;
    obj[71] = mediaSessionId.getSettings().modeOptions.autoThreshold;
    obj[72] = mediaSessionId.getSettings().modeOptions.threshold;
    obj[73] = mediaSessionId.getEchoCancellation();
    obj[74] = mediaSessionId.getNoiseSuppression();
    obj[75] = mediaSessionId.getNoiseCancellation();
    obj[76] = mediaSessionId.getAutomaticGainControl();
    obj[77] = mediaSessionId.getSidechainCompression();
    obj[78] = mediaSessionId.getInputVolume();
    obj[79] = mediaSessionId.getOutputVolume();
    obj[80] = Object.keys(mediaSessionId.getInputDevices()).length;
    obj[81] = Object.keys(mediaSessionId.getOutputDevices()).length;
    const cpu_brandResult = cpu_brand(errorInfo[18]);
    obj[82] = cpu_brand(errorInfo[19]).getAppHardwareAccelerationEnabled();
    cpu_brand = obj10.getInputDeviceOSMuted();
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[83] = cpu_brand;
    cpu_brand = obj10.getInputDeviceOSVolume();
    if (cpu_brand == null) {
      cpu_brand = null;
    }
    obj[84] = cpu_brand;
    const cpu_brandResult1 = cpu_brand(errorInfo[19]);
    cpu_brand = cpu_brand(errorInfo[20]).track(prop.AV_ERROR_REPORTED, obj);
  });
};