// discord_common/js/packages/media-engine/native/transformStats.tsx
import transformStatsUtils from "../utils/transformStatsUtils.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function sumBytes(rtpStats) {
  let num;
  if (rtpStats != null) {
    num = rtpStats.headerBytes;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (rtpStats != null) {
    num2 = rtpStats.payloadBytes;
  }
  if (num2 == null) {
    num2 = 0;
  }
  let num3;
  const sum = num + num2;
  if (rtpStats != null) {
    num3 = rtpStats.paddingBytes;
  }
  if (num3 == null) {
    num3 = 0;
  }
  let num4;
  const sum1 = sum + num3;
  if (rtpStats != null) {
    const fec = rtpStats.fec;
    if (fec != null) {
      num4 = fec.headerBytes;
    }
  }
  if (num4 == null) {
    num4 = 0;
  }
  let num5;
  if (rtpStats != null) {
    const fec2 = rtpStats.fec;
    if (fec2 != null) {
      num5 = fec2.payloadBytes;
    }
  }
  if (num5 == null) {
    num5 = 0;
  }
  let num6;
  const sum2 = num4 + num5;
  if (rtpStats != null) {
    const fec3 = rtpStats.fec;
    if (fec3 != null) {
      num6 = fec3.paddingBytes;
    }
  }
  if (num6 == null) {
    num6 = 0;
  }
  let num7;
  const sum3 = sum2 + num6;
  if (rtpStats != null) {
    const retransmitted = rtpStats.retransmitted;
    if (retransmitted != null) {
      num7 = retransmitted.headerBytes;
    }
  }
  if (num7 == null) {
    num7 = 0;
  }
  let num8;
  const sum4 = sum3 + num7;
  if (rtpStats != null) {
    const retransmitted2 = rtpStats.retransmitted;
    if (retransmitted2 != null) {
      num8 = retransmitted2.payloadBytes;
    }
  }
  if (num8 == null) {
    num8 = 0;
  }
  let num9;
  const sum5 = sum4 + num8;
  if (rtpStats != null) {
    const retransmitted3 = rtpStats.retransmitted;
    if (retransmitted3 != null) {
      num9 = retransmitted3.paddingBytes;
    }
  }
  if (num9 == null) {
    num9 = 0;
  }
  let num10;
  const sum6 = sum5 + num9;
  if (rtpStats != null) {
    const transmitted = rtpStats.transmitted;
    if (transmitted != null) {
      num10 = transmitted.headerBytes;
    }
  }
  if (num10 == null) {
    num10 = 0;
  }
  let num11;
  const sum7 = sum6 + num10;
  if (rtpStats != null) {
    const transmitted2 = rtpStats.transmitted;
    if (transmitted2 != null) {
      num11 = transmitted2.payloadBytes;
    }
  }
  if (num11 == null) {
    num11 = 0;
  }
  let num12;
  const sum8 = sum7 + num11;
  if (rtpStats != null) {
    const transmitted3 = rtpStats.transmitted;
    if (transmitted3 != null) {
      num12 = transmitted3.paddingBytes;
    }
  }
  if (num12 == null) {
    num12 = 0;
  }
  return sum8 + num12 + sum1;
}
function transformPlayoutStats(obj) {
  obj = {};
  for (const key10006 in obj) {
    let _Array = Array;
    let arr = obj[key10006];
    if (Array.isArray(obj[key10006])) {
      obj[key10006] = arr.map((item) => item * closure_1_2);
      continue;
    } else {
      if (null == arr) {
        continue;
      } else {
        let tmp = obj[key10006];
        let obj2 = {
          last: Math.round(tmp.last * c2),
          mean: Math.round(tmp.mean * c2),
          p75: Math.round(tmp.p75 * c2),
          p95: Math.round(tmp.p95 * c2),
          p99: Math.round(tmp.p99 * c2),
          max: Math.round(tmp.max * c2),
        };
        let _Math = Math;
        let _Math2 = Math;
        let _Math3 = Math;
        let _Math4 = Math;
        let _Math5 = Math;
        let _Math6 = Math;
        obj[key10006] = obj2;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
}
function transformOutboundVideoStats(substreams, id) {
  let decodeErrors;
  let decoderReboots;
  let frameDrops;
  let freezeCount;
  let interFrameEntropy;
  let minResolutionHeight;
  let minResolutionWidth;
  let num2;
  let num3;
  let num4;
  let num5;
  let num6;
  let obj2;
  let obj3;
  let obj6;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let reconFramesFailed;
  let reconFramesRequested;
  let reduced1;
  let scoreErrors;
  let sizeMismatches;
  let totalFramesDuration;
  let totalFreezesDuration;
  substreams = substreams.substreams;
  const found = substreams.find((isRTX) => !isRTX.isRTX && !isRTX.isFlexFEC);
  if (null != found) {
    const substreams1 = substreams.substreams;
    let num = 0;
    const substreams2 = substreams.substreams;
    const reduced = substreams1.reduce((acc, rtpStats) => acc + sumBytes(rtpStats.rtpStats), 0);
    const obj = {
      type: "video",
      ssrc: found.ssrc,
      sinkWant: obj2.formatSinkWantStat(id, found.ssrc, true),
      sinkWantAsInt: obj3.formatSinkWantAsInt(id, found.ssrc),
      codec: obj6,
      keyFrameInterval: substreams.keyFrameInterval,
      bytesSent: reduced,
      packetsSent: reduced1,
      packetsLost: num2,
      fractionLost: num3,
      bitrate: null,
      bitrateTarget: null,
      encoderImplementationName: null,
      encodeUsage: null,
      averageEncodeTime: null,
      resolution: size,
      framesSent: found.frameCounts.keyFrames + found.frameCounts.deltaFrames,
      keyFramesEncoded: found.frameCounts.keyFrames,
      framesEncoded: null,
      frameRateInput: null,
      frameRateEncode: null,
      firCount: num4,
      nackCount: num5,
      pliCount: num6,
      qpSum: null,
      bandwidthLimitedResolution: null,
      framesDroppedRateLimiter: null,
      framesDroppedEncoderQueue: null,
      framesDroppedCongestionWindow: null,
      framesDroppedEncoder: null,
      cpuLimitedResolution: null,
      encoderQualityVmaf: prop,
      encoderQualityPsnr: prop1,
      qualityDecodeErrors: decodeErrors,
      qualityDecoderReboots: decoderReboots,
      qualityScoreErrors: scoreErrors,
      qualityFrameDrops: frameDrops,
      qualitySizeMismatches: sizeMismatches,
      filter: null,
      passthroughCount: null,
      encryptSuccessCount: null,
      encryptFailureCount: null,
      encryptDuration: null,
      encryptAttempts: null,
      encryptMaxAttempts: null,
      encryptMissingKeyCount: null,
      hqSimulcastStreamEncoded: null,
      lqSimulcastStreamEncoded: null,
      bandwidthLimitedFrameRate: null,
      freezeCount,
      totalFreezesDuration,
      totalFramesDuration,
      videoEntropy: interFrameEntropy,
      consecutiveStaticColorFrames: prop2,
      minResolutionWidth,
      minResolutionHeight,
      reconFramesRequested,
      reconFramesSuccessful: prop3,
      reconFramesFailed,
    };
    reduced1 = substreams2.reduce((acc, rtpStats) => {
      rtpStats = rtpStats.rtpStats;
      let num;
      if (rtpStats != null) {
        num = rtpStats.packets;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (rtpStats != null) {
        const fec = rtpStats.fec;
        if (fec != null) {
          num2 = fec.packets;
        }
      }
      if (num2 == null) {
        num2 = 0;
      }
      let num3;
      if (rtpStats != null) {
        const retransmitted = rtpStats.retransmitted;
        if (retransmitted != null) {
          num3 = retransmitted.packets;
        }
      }
      if (num3 == null) {
        num3 = 0;
      }
      let num4;
      const sum = num2 + num3;
      if (rtpStats != null) {
        const transmitted = rtpStats.transmitted;
        if (transmitted != null) {
          num4 = transmitted.packets;
        }
      }
      if (num4 == null) {
        num4 = 0;
      }
      return acc + (sum + num4 + num);
    }, 0);
    obj2 = transformStatsUtils;
    obj6 = { id: null, name: null };
    ({ codecPayloadType: obj4.id, codecName: obj4.name } = substreams);
    const rtcpStats = found.rtcpStats;
    num2 = undefined;
    obj3 = transformStatsUtils;
    if (rtcpStats != null) {
      num2 = rtcpStats.packetsLost;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const rtcpStats2 = found.rtcpStats;
    num3 = undefined;
    if (rtcpStats2 != null) {
      num3 = rtcpStats2.fractionLost;
    }
    if (num3 == null) {
      num3 = 0;
    }
    ({
      mediaBitrate: obj.bitrate,
      targetMediaBitrate: obj.bitrateTarget,
      encoderImplementationName: obj.encoderImplementationName,
      encodeUsage: obj.encodeUsage,
      avgEncodeTime: obj.averageEncodeTime,
    } = substreams);
    size = { height: null, width: null };
    ({ height: obj5.height, width: obj5.width } = found);
    ({
      framesEncoded: obj.framesEncoded,
      inputFrameRate: obj.frameRateInput,
      encodeFrameRate: obj.frameRateEncode,
    } = substreams);
    const rtcpStats3 = found.rtcpStats;
    num4 = undefined;
    if (rtcpStats3 != null) {
      num4 = rtcpStats3.firPackets;
    }
    if (num4 == null) {
      num4 = 0;
    }
    const rtcpStats4 = found.rtcpStats;
    num5 = undefined;
    if (rtcpStats4 != null) {
      num5 = rtcpStats4.nackPackets;
    }
    if (num5 == null) {
      num5 = 0;
    }
    const rtcpStats5 = found.rtcpStats;
    num6 = undefined;
    if (rtcpStats5 != null) {
      num6 = rtcpStats5.pliPackets;
    }
    if (num6 == null) {
      num6 = 0;
    }
    ({
      qpSum: obj.qpSum,
      bwLimitedResolution: obj.bandwidthLimitedResolution,
      framesDroppedRateLimiter: obj.framesDroppedRateLimiter,
      framesDroppedEncoderQueue: obj.framesDroppedEncoderQueue,
      framesDroppedCongestionWindow: obj.framesDroppedCongestionWindow,
      framesDroppedEncoder: obj.framesDroppedEncoder,
      cpuLimitedResolution: obj.cpuLimitedResolution,
    } = substreams);
    const encoderQualityStats = found.encoderQualityStats;
    prop = undefined;
    if (encoderQualityStats != null) {
      prop = encoderQualityStats.imageQualityVmaf_v061;
    }
    const encoderQualityStats2 = found.encoderQualityStats;
    prop1 = undefined;
    if (encoderQualityStats2 != null) {
      prop1 = encoderQualityStats2.imageQualityWebrtcPsnrDb;
    }
    const encoderQualityStats3 = found.encoderQualityStats;
    decodeErrors = undefined;
    if (encoderQualityStats3 != null) {
      decodeErrors = encoderQualityStats3.decodeErrors;
    }
    const encoderQualityStats4 = found.encoderQualityStats;
    decoderReboots = undefined;
    if (encoderQualityStats4 != null) {
      decoderReboots = encoderQualityStats4.decoderReboots;
    }
    const encoderQualityStats5 = found.encoderQualityStats;
    scoreErrors = undefined;
    if (encoderQualityStats5 != null) {
      scoreErrors = encoderQualityStats5.scoreErrors;
    }
    const encoderQualityStats6 = found.encoderQualityStats;
    frameDrops = undefined;
    if (encoderQualityStats6 != null) {
      frameDrops = encoderQualityStats6.frameDrops;
    }
    const encoderQualityStats7 = found.encoderQualityStats;
    sizeMismatches = undefined;
    if (encoderQualityStats7 != null) {
      sizeMismatches = encoderQualityStats7.sizeMismatches;
    }
    ({
      filter: obj.filter,
      passthroughCount: obj.passthroughCount,
      encryptSuccessCount: obj.encryptSuccessCount,
      encryptFailureCount: obj.encryptFailureCount,
      encryptDuration: obj.encryptDuration,
      encryptAttempts: obj.encryptAttempts,
      encryptMaxAttempts: obj.encryptMaxAttempts,
      encryptMissingKeyCount: obj.encryptMissingKeyCount,
      hqSimulcastStreamEncoded: obj.hqSimulcastStreamEncoded,
      lqSimulcastStreamEncoded: obj.lqSimulcastStreamEncoded,
      bwLimitedFrameRate: obj.bandwidthLimitedFrameRate,
    } = substreams);
    const encoderQualityStats8 = found.encoderQualityStats;
    freezeCount = undefined;
    if (encoderQualityStats8 != null) {
      freezeCount = encoderQualityStats8.freezeCount;
    }
    const encoderQualityStats9 = found.encoderQualityStats;
    totalFreezesDuration = undefined;
    if (encoderQualityStats9 != null) {
      totalFreezesDuration = encoderQualityStats9.totalFreezesDuration;
    }
    const encoderQualityStats10 = found.encoderQualityStats;
    totalFramesDuration = undefined;
    if (encoderQualityStats10 != null) {
      totalFramesDuration = encoderQualityStats10.totalFramesDuration;
    }
    const encoderQualityStats11 = found.encoderQualityStats;
    interFrameEntropy = undefined;
    if (encoderQualityStats11 != null) {
      interFrameEntropy = encoderQualityStats11.interFrameEntropy;
    }
    const encoderQualityStats12 = found.encoderQualityStats;
    prop2 = undefined;
    if (encoderQualityStats12 != null) {
      prop2 = encoderQualityStats12.consecutiveStaticColorFrames;
    }
    const encoderQualityStats13 = found.encoderQualityStats;
    minResolutionWidth = undefined;
    if (encoderQualityStats13 != null) {
      minResolutionWidth = encoderQualityStats13.minResolutionWidth;
    }
    const encoderQualityStats14 = found.encoderQualityStats;
    minResolutionHeight = undefined;
    if (encoderQualityStats14 != null) {
      minResolutionHeight = encoderQualityStats14.minResolutionHeight;
    }
    const encoderQualityStats15 = found.encoderQualityStats;
    reconFramesRequested = undefined;
    if (encoderQualityStats15 != null) {
      reconFramesRequested = encoderQualityStats15.reconFramesRequested;
    }
    const encoderQualityStats16 = found.encoderQualityStats;
    prop3 = undefined;
    if (encoderQualityStats16 != null) {
      prop3 = encoderQualityStats16.reconFramesSuccessful;
    }
    const encoderQualityStats17 = found.encoderQualityStats;
    reconFramesFailed = undefined;
    if (encoderQualityStats17 != null) {
      reconFramesFailed = encoderQualityStats17.reconFramesFailed;
    }
    return obj;
  }
}
function transformInboundVideoStats(height, id, id2, playout) {
  let num5;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj9;
  let packetsLost;
  let sum1;
  const rtpStats = height.rtpStats;
  let num;
  const tmp = sumBytes(height.rtpStats);
  if (rtpStats != null) {
    num = rtpStats.packets;
  }
  if (num == null) {
    num = 0;
  }
  let num2;
  if (rtpStats != null) {
    const fec = rtpStats.fec;
    if (fec != null) {
      num2 = fec.packets;
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  let num3;
  if (rtpStats != null) {
    const retransmitted = rtpStats.retransmitted;
    if (retransmitted != null) {
      num3 = retransmitted.packets;
    }
  }
  if (num3 == null) {
    num3 = 0;
  }
  let num4;
  const sum = num2 + num3;
  if (rtpStats != null) {
    const transmitted = rtpStats.transmitted;
    if (transmitted != null) {
      num4 = transmitted.packets;
    }
  }
  if (num4 == null) {
    num4 = 0;
  }
  const obj = {
    type: "video",
    ssrc: height.ssrc,
    sinkWant: obj2.formatSinkWantStat(id, height.ssrc, true),
    sinkWantAsInt: obj3.formatSinkWantAsInt(id, height.ssrc),
    sinkWantLocal: obj4.formatSinkWantStat(id, height.ssrc, true),
    sinkWantLocalAsInt: obj5.formatSinkWantAsInt(id, height.ssrc),
    codec: { id: height.codecPayloadType, name: height.codecName },
    bytesReceived: tmp,
    packetsReceived: sum1,
    packetsLost,
    fractionLost: height.rtcpStats.fractionLost,
    bitrate: null,
    jitterBuffer: null,
    currentDelay: null,
    targetDelay: null,
    minPlayoutDelay: null,
    renderDelay: null,
    averageDecodeTime: null,
    totalDecodeTime: null,
    resolution: { height: height.height, width: height.width },
    decoderImplementationName: null,
    framesDecoded: null,
    framesDropped: null,
    framesDecodeErrors: null,
    framesReceived: height.frameCounts.keyFrames + height.frameCounts.deltaFrames,
    networkFramesDropped: num5,
    keyFramesDecoded: height.frameCounts.keyFrames,
    frameRateDecode: null,
    frameRateNetwork: null,
    frameRateRender: null,
    firCount: height.rtcpStats.firPackets,
    nackCount: height.rtcpStats.nackPackets,
    pliCount: height.rtcpStats.pliPackets,
    qpSum: null,
    freezeCount: null,
    pauseCount: null,
    totalFreezesDuration: null,
    totalPausesDuration: null,
    totalFramesDuration: null,
    sumOfSquaredFramesDurations: null,
    passthroughCount: null,
    decryptSuccessCount: null,
    decryptFailureCount: null,
    decryptDuration: null,
    decryptAttempts: null,
    decryptMissingKeyCount: null,
    decryptInvalidNonceCount: null,
    minResolutionWidth: null,
    minResolutionHeight: null,
  };
  sum1 = sum + num4 + num;
  obj2 = transformStatsUtils;
  obj3 = transformStatsUtils;
  obj4 = transformStatsUtils;
  packetsLost = height.rtpStats.packetsLost;
  obj5 = transformStatsUtils;
  if (packetsLost == null) {
    packetsLost = height.rtcpStats.packetsLost;
  }
  ({
    totalBitrate: obj.bitrate,
    jitterBuffer: obj.jitterBuffer,
    currentDelay: obj.currentDelay,
    targetDelay: obj.targetDelay,
    minPlayoutDelay: obj.minPlayoutDelay,
    renderDelay: obj.renderDelay,
    decode: obj.averageDecodeTime,
    totalDecode: obj.totalDecodeTime,
  } = height);
  ({
    decoderImplementationName: obj.decoderImplementationName,
    framesDecoded: obj.framesDecoded,
    framesDropped: obj.framesDropped,
    framesDecodeErrors: obj.framesDecodeErrors,
  } = height);
  num5 = height.networkFramesDropped;
  if (num5 == null) {
    num5 = 0;
  }
  ({
    decodeFrameRate: obj.frameRateDecode,
    networkFrameRate: obj.frameRateNetwork,
    renderFrameRate: obj.frameRateRender,
  } = height);
  ({
    qpSum: obj.qpSum,
    freezeCount: obj.freezeCount,
    pauseCount: obj.pauseCount,
    totalFreezesDuration: obj.totalFreezesDuration,
    totalPausesDuration: obj.totalPausesDuration,
    totalFramesDuration: obj.totalFramesDuration,
    sumOfSquaredFramesDurations: obj.sumOfSquaredFramesDurations,
    passthroughCount: obj.passthroughCount,
    decryptSuccessCount: obj.decryptSuccessCount,
    decryptFailureCount: obj.decryptFailureCount,
    decryptDuration: obj.decryptDuration,
    decryptAttempts: obj.decryptAttempts,
    decryptMissingKeyCount: obj.decryptMissingKeyCount,
    decryptInvalidNonceCount: obj.decryptInvalidNonceCount,
    minResolutionWidth: obj.minResolutionWidth,
    minResolutionHeight: obj.minResolutionHeight,
  } = height);
  if (null != playout) {
    const obj6 = { videoJitterBuffer: null, videoJitterDelay: null, videoJitterTarget: null };
    ({
      videoJitterBuffer: obj7.videoJitterBuffer,
      videoJitterDelay: obj7.videoJitterDelay,
      videoJitterTarget: obj7.videoJitterTarget,
    } = playout);
    obj9 = transformPlayoutStats(obj6);
  } else {
    obj9 = {};
  }
  const merged = Object.assign(obj9);
  return obj;
}
let c2 = 1000;
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/transformStats.tsx");

export default function transformStats(mediaEngineConnectionId, str, id, arg3) {
  let audio;
  let audioDevice;
  let closure_1;
  let inboundBitrateEstimate;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let tmp25;
  let video;
  let videos;
  _require = id;
  dependencyMap = arg3;
  let closure_2 = null;
  let closure_3 = null;
  let parsed = str;
  if (typeof str === "string") {
    const _JSON = JSON;
    parsed = JSON.parse(str);
  }
  const items = [];
  if (null != parsed.outbound) {
    ({ audio, video, videos } = parsed.outbound);
    if (null != audio) {
      let num = closure_3;
      if (closure_3 == null) {
        num = 0;
      }
      closure_3 = num + audio.bytesSent;
      let obj = {
        type: "audio",
        ssrc: audio.ssrc,
        sinkWant: obj2.formatSinkWantStat(id, audio.ssrc, false),
        sinkWantAsInt: obj3.formatSinkWantAsInt(id, audio.ssrc),
        codec: obj5,
        bytesSent: null,
        packetsSent: null,
        packetsLost: Math.max(0, audio.packetsLost),
        fractionLost: 100 * audio.fractionLost,
        audioLevel: audio.audioLevel / 32768,
        bitrate: null,
        bitrateTarget: null,
        audioDetected: null,
        framesCaptured: null,
        framesRendered: null,
        noiseCancellerFrames: null,
        noiseCancellerProcessTime: null,
        voiceActivityDetectorProcessTime: null,
        passthroughCount: null,
        encryptSuccessCount: null,
        encryptFailureCount: null,
        encryptDuration: null,
        encryptAttempts: null,
        encryptMaxAttempts: null,
        encryptMissingKeyCount: null,
        pttQueueLatencyMicrosSamples: null,
        sampleRateMismatchPercent: null,
        currentSampleRate: null,
        captureProcessingDelayMs: null,
        captureProcessingFrameCount: null,
        apmProcessTimeMs: null,
        apmFrameCount: null,
        sendDelayMs: null,
        sendPacketCount: null,
        totalPacketSendDelayMs: null,
      };
      let tmp2 = _require;
      let push = items.push;
      obj2 = require("transformStatsUtils");
      obj3 = require("transformStatsUtils");
      obj5 = { id: null, name: null };
      ({ codecPayloadType: obj4.id, codecName: obj4.name } = audio);
      ({ bytesSent: obj.bytesSent, packetsSent: obj.packetsSent } = audio);
      const _Math = Math;
      ({
        mediaBitrate: obj.bitrate,
        targetMediaBitrate: obj.bitrateTarget,
        speaking: obj.audioDetected,
        framesCaptured: obj.framesCaptured,
        framesRendered: obj.framesRendered,
        noiseCancellerFrames: obj.noiseCancellerFrames,
        noiseCancellerProcessTime: obj.noiseCancellerProcessTime,
        voiceActivityDetectorProcessTime: obj.voiceActivityDetectorProcessTime,
        passthroughCount: obj.passthroughCount,
        encryptSuccessCount: obj.encryptSuccessCount,
        encryptFailureCount: obj.encryptFailureCount,
        encryptDuration: obj.encryptDuration,
        encryptAttempts: obj.encryptAttempts,
        encryptMaxAttempts: obj.encryptMaxAttempts,
        encryptMissingKeyCount: obj.encryptMissingKeyCount,
        pttQueueLatencyMicrosSamples: obj.pttQueueLatencyMicrosSamples,
        sampleRateMismatchPercent: obj.sampleRateMismatchPercent,
        currentSampleRate: obj.currentSampleRate,
        captureProcessingDelayMs: obj.captureProcessingDelayMs,
        captureProcessingFrameCount: obj.captureProcessingFrameCount,
        apmProcessTimeMs: obj.apmProcessTimeMs,
        apmFrameCount: obj.apmFrameCount,
        sendDelayMs: obj.sendDelayMs,
        sendPacketCount: obj.sendPacketCount,
        totalPacketSendDelayMs: obj.totalPacketSendDelayMs,
      } = audio);
      let arr = push(obj);
    }
    if (null != videos) {
      let item = videos.forEach((item) => {
        const tmp = transformOutboundVideoStats(item, id);
        if (null != tmp) {
          let num = closure_3;
          if (closure_3 == null) {
            num = 0;
          }
          closure_3 = num + tmp.bytesSent;
          items.push(tmp);
        }
      });
    } else if (null != video) {
      const tmp7 = obj7(video, id);
      if (null != tmp7) {
        let num6 = closure_3;
        if (closure_3 == null) {
          num6 = 0;
        }
        closure_3 = num6 + tmp7.bytesSent;
        let arr2 = items.push(tmp7);
      }
    }
  }
  obj7 = {};
  if (null != parsed.inbound) {
    const inbound = parsed.inbound;
    const item1 = inbound.forEach((id) => {
      let audio;
      let audioReceiverDelayMs;
      let obj2;
      let obj3;
      let obj5;
      let playout;
      let prop;
      let video;
      let videos;
      id = id.id;
      ({ audio, video, videos, playout } = id);
      obj7[id] = [];
      if (null != audio) {
        let obj10;
        let num = closure_2;
        if (closure_2 == null) {
          num = 0;
        }
        closure_2 = num + audio.bytesReceived;
        let arr = obj7[id];
        const obj = {
          type: "audio",
          ssrc: audio.ssrc,
          sinkWant: obj2.formatSinkWantStat(id, audio.ssrc, false),
          sinkWantAsInt: obj3.formatSinkWantAsInt(id, audio.ssrc),
          codec: obj5,
          bytesReceived: null,
          packetsReceived: null,
          packetsLost: null,
          fractionLost: 100 * audio.fractionLost,
          fecPacketsReceived: null,
          fecPacketsDiscarded: null,
          audioLevel: audio.audioLevel / 32768,
          audioDetected: null,
          currentSampleRate: null,
          jitter: null,
          jitterBuffer: null,
          jitterBufferPreferred: null,
          decodingCNG: null,
          decodingMutedOutput: null,
          decodingNormal: null,
          decodingPLC: null,
          decodingPLCCNG: null,
          nackCount: null,
          accelerateRate: 100 * audio.accelerateRate,
          expandRate: 100 * audio.expandRate,
          preemptiveExpandRate: 100 * audio.preemptiveExpandRate,
          speechExpandRate: 100 * audio.speechExpandRate,
          secondaryDecodedRate: 100 * audio.secondaryDecodedRate,
          opSilence: null,
          opNormal: null,
          opMerge: null,
          opExpand: null,
          opAccelerate: null,
          opPreemptiveExpand: null,
          opCNG: null,
          delayEstimate: null,
          passthroughCount: null,
          decryptSuccessCount: null,
          decryptFailureCount: null,
          decryptDuration: null,
          decryptAttempts: null,
          decryptMissingKeyCount: null,
          decryptInvalidNonceCount: null,
          audioReceiverDelayMs,
          audioReceiverPacketCount: prop,
        };
        let tmp2 = id;
        const push = arr.push;
        obj2 = id(closure_1[0]);
        obj5 = { id: null, name: null };
        ({ codecPayloadType: obj4.id, codecName: obj4.name } = audio);
        ({
          bytesReceived: obj.bytesReceived,
          packetsReceived: obj.packetsReceived,
          packetsLost: obj.packetsLost,
        } = audio);
        ({ fecPacketsReceived: obj.fecPacketsReceived, fecPacketsDiscarded: obj.fecPacketsDiscarded } = audio);
        ({
          speaking: obj.audioDetected,
          currentSampleRate: obj.currentSampleRate,
          jitter: obj.jitter,
          jitterBuffer: obj.jitterBuffer,
          jitterBufferPreferred: obj.jitterBufferPreferred,
          decodingCNG: obj.decodingCNG,
          decodingMutedOutput: obj.decodingMutedOutput,
          decodingNormal: obj.decodingNormal,
          decodingPLC: obj.decodingPLC,
          decodingPLCCNG: obj.decodingPLCCNG,
          nackCount: obj.nackCount,
        } = audio);
        ({
          opSilence: obj.opSilence,
          opNormal: obj.opNormal,
          opMerge: obj.opMerge,
          opExpand: obj.opExpand,
          opAccelerate: obj.opAccelerate,
          opPreemptiveExpand: obj.opPreemptiveExpand,
          opCNG: obj.opCNG,
          delayEstimate: obj.delayEstimate,
          passthroughCount: obj.passthroughCount,
          decryptSuccessCount: obj.decryptSuccessCount,
          decryptFailureCount: obj.decryptFailureCount,
          decryptDuration: obj.decryptDuration,
          decryptAttempts: obj.decryptAttempts,
          decryptMissingKeyCount: obj.decryptMissingKeyCount,
          decryptInvalidNonceCount: obj.decryptInvalidNonceCount,
        } = audio);
        audioReceiverDelayMs = undefined;
        obj3 = id(closure_1[0]);
        if (playout != null) {
          audioReceiverDelayMs = playout.audioReceiverDelayMs;
        }
        prop = undefined;
        if (playout != null) {
          prop = playout.audioReceiverPacketCount;
        }
        if (null != playout) {
          const obj9 = {
            audioJitterBuffer: null,
            audioJitterBufferSamples: null,
            audioJitterDelay: null,
            audioJitterDelaySamples: null,
            audioJitterTarget: null,
            audioJitterTargetSamples: null,
            audioPlayoutUnderruns: null,
            relativeReceptionDelay: null,
            relativePlayoutDelay: null,
          };
          ({
            audioJitterBuffer: obj6.audioJitterBuffer,
            audioJitterBufferSamples: obj6.audioJitterBufferSamples,
            audioJitterDelay: obj6.audioJitterDelay,
            audioJitterDelaySamples: obj6.audioJitterDelaySamples,
            audioJitterTarget: obj6.audioJitterTarget,
            audioJitterTargetSamples: obj6.audioJitterTargetSamples,
            audioPlayoutUnderruns: obj6.audioPlayoutUnderruns,
            relativeReceptionDelay: obj6.relativeReceptionDelay,
            relativePlayoutDelay: obj6.relativePlayoutDelay,
          } = playout);
          obj10 = items(obj9);
        } else {
          obj10 = {};
        }
        const merged = Object.assign(obj10);
        push(obj);
      }
      if (null != videos) {
        const item = videos.forEach((rtpStats) => {
          let num = closure_2;
          const tmp = transformInboundVideoStats(rtpStats, closure_0, closure_1, playout);
          const tmp2 = sumBytes(rtpStats.rtpStats);
          if (closure_2 == null) {
            num = 0;
          }
          closure_2 = num + tmp2;
          const arr = obj7[id];
          arr.push(tmp);
        });
      } else if (null != video) {
        let num7 = closure_2;
        const tmp17 = transformInboundVideoStats(video, id, playout, playout);
        const tmp19 = closure_3(video.rtpStats);
        if (closure_2 == null) {
          num7 = 0;
        }
        closure_2 = num7 + tmp19;
        const arr2 = obj7[id];
        arr2.push(tmp17);
      }
    });
  }
  const transport = parsed.transport;
  const obj13 = {};
  const clips = parsed.clips;
  if (null != transport) {
    ({
      sendBandwidth: obj6.availableOutgoingBitrate,
      rtt: obj6.ping,
      decryptionFailures: obj6.decryptionFailures,
    } = transport);
    if (null != transport.routingFailures) {
      obj13.routingFailures = transport.routingFailures;
    }
    ({ localAddress: obj6.localAddress, pacerDelay: obj6.pacerDelay } = transport);
    if (null != transport.receiverReports) {
      obj13.receiverReports = transport.receiverReports;
    }
    ({
      receiverBitrateEstimate: obj6.receiverBitrateEstimate,
      outboundBitrateEstimate: obj6.outboundBitrateEstimate,
      inboundBitrateEstimate,
    } = transport);
    if (inboundBitrateEstimate == null) {
      inboundBitrateEstimate = 0;
    }
    obj13.inboundBitrateEstimate = inboundBitrateEstimate;
    ({ packetsReceived: obj6.packetsReceived, packetsSent: obj6.packetsSent } = transport);
    if (null != transport.secureFramesProtocolVersion) {
      obj13.secureFramesProtocolVersion = transport.secureFramesProtocolVersion;
    }
    ({ transportDelayMs: obj6.transportDelayMs, transportPacketCount: obj6.transportPacketCount } = transport);
  }
  let bytesReceived;
  if (transport != null) {
    bytesReceived = transport.bytesReceived;
  }
  let tmp12 = null != bytesReceived;
  if (!tmp12) {
    let tmp14 = null != closure_2;
    if (tmp14) {
      const _Number = Number;
      tmp14 = !Number.isNaN(closure_2);
    }
    tmp12 = tmp14;
  }
  if (tmp12) {
    let bytesReceived1;
    if (transport != null) {
      bytesReceived1 = transport.bytesReceived;
    }
    if (bytesReceived1 == null) {
      bytesReceived1 = closure_2;
    }
    obj13.bytesReceived = bytesReceived1;
  }
  let bytesSent;
  if (transport != null) {
    bytesSent = transport.bytesSent;
  }
  let tmp19 = null != bytesSent;
  if (!tmp19) {
    let tmp21 = null != closure_3;
    if (tmp21) {
      const _Number2 = Number;
      tmp21 = !Number.isNaN(closure_3);
    }
    tmp19 = tmp21;
  }
  if (tmp19) {
    let bytesSent1;
    if (transport != null) {
      bytesSent1 = transport.bytesSent;
    }
    if (bytesSent1 == null) {
      bytesSent1 = closure_3;
    }
    obj13.bytesSent = bytesSent1;
  }
  const camera = parsed.camera;
  const obj14 = {
    mediaEngineConnectionId,
    transport: obj13,
    screenshare: parsed.screenshare,
    camera: tmp25,
    clips,
    audioDevice,
    rtp: { inbound: obj7, outbound: items },
  };
  tmp25 = null;
  audioDevice = parsed.audioDevice;
  if (null != camera) {
    const obj15 = {
      capturedFramesDropped: null,
      capturedFramesCount: null,
      capturedFramesMean: null,
      capturedFramesStdev: null,
    };
    ({
      capturedFramesDropped: obj8.capturedFramesDropped,
      capturedFramesCount: obj8.capturedFramesCount,
      capturedFramesMean: obj8.capturedFramesMean,
      capturedFramesStdev: obj8.capturedFramesStdev,
    } = camera);
    tmp25 = obj15;
  }
  return obj14;
}
