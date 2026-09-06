// === Module 4677: transformStats ===

// Module 4677 (transformStats)
import transformStatsUtils from "transformStatsUtils" /* 4678 */;
import size from "module_2" /* 2 */;

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
  for (const key10006 in arg0) {
    let _Array = Array;
    let arr = arg0[key10006];
    if (Array.isArray(arg0[key10006])) {
      obj[key10006] = arr.map((item) => item * closure_1_2);
      continue;
    } else {
      if (null == arr) {
        continue;
      } else {
        let tmp = arg0[key10006];
        obj = { last: null, mean: null, p75: null, p95: null, p99: null, max: null };
        let _Math = Math;
        obj.last = Math.round(tmp.last * c2);
        let _Math2 = Math;
        obj.mean = Math.round(tmp.mean * c2);
        let _Math3 = Math;
        obj.p75 = Math.round(tmp.p75 * c2);
        let _Math4 = Math;
        obj.p95 = Math.round(tmp.p95 * c2);
        let _Math5 = Math;
        obj.p99 = Math.round(tmp.p99 * c2);
        let _Math6 = Math;
        obj.max = Math.round(tmp.max * c2);
        obj[key10006] = obj;
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
}
function transformOutboundVideoStats(substreams, id) {
  substreams = substreams.substreams;
  const found = substreams.find((isRTX) => {
    isRTX = isRTX.isRTX;
    let tmp = !isRTX;
    if (!isRTX) {
      tmp = !isRTX.isFlexFEC;
    }
    return tmp;
  });
  if (null != found) {
    const substreams1 = substreams.substreams;
    const substreams2 = substreams.substreams;
    const reduced = substreams1.reduce((acc, rtpStats) => acc + sumBytes(rtpStats.rtpStats), 0);
    let obj = { type: "video", ssrc: found.ssrc, sinkWant: null, sinkWantAsInt: null, codec: null, keyFrameInterval: null, bytesSent: null, packetsSent: null, packetsLost: null, fractionLost: null, bitrate: null, bitrateTarget: null, encoderImplementationName: null, encodeUsage: null, averageEncodeTime: null, resolution: null, framesSent: null, keyFramesEncoded: null, framesEncoded: null, frameRateInput: null, frameRateEncode: null, firCount: null, nackCount: null, pliCount: null, qpSum: null, bandwidthLimitedResolution: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, cpuLimitedResolution: null, encoderQualityVmaf: null, encoderQualityPsnr: null, qualityDecodeErrors: null, qualityDecoderReboots: null, qualityScoreErrors: null, qualityFrameDrops: null, qualitySizeMismatches: null, filter: null, passthroughCount: null, encryptSuccessCount: null, encryptFailureCount: null, encryptDuration: null, encryptAttempts: null, encryptMaxAttempts: null, encryptMissingKeyCount: null, hqSimulcastStreamEncoded: null, lqSimulcastStreamEncoded: null, bandwidthLimitedFrameRate: null, freezeCount: null, totalFreezesDuration: null, totalFramesDuration: null, videoEntropy: null, consecutiveStaticColorFrames: null, minResolutionWidth: null, minResolutionHeight: null, reconFramesRequested: null, reconFramesSuccessful: null, reconFramesFailed: null };
    const reduced1 = substreams2.reduce((acc, rtpStats) => {
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
    obj.sinkWant = transformStatsUtils.formatSinkWantStat(id, found.ssrc, true);
    obj.sinkWantAsInt = transformStatsUtils.formatSinkWantAsInt(id, found.ssrc);
    obj = { id: null, name: null };
    ({ codecPayloadType: obj4.id, codecName: obj4.name } = substreams);
    obj.codec = obj;
    obj.keyFrameInterval = substreams.keyFrameInterval;
    obj.bytesSent = reduced;
    obj.packetsSent = reduced1;
    const rtcpStats = found.rtcpStats;
    let num2;
    if (rtcpStats != null) {
      num2 = rtcpStats.packetsLost;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj.packetsLost = num2;
    const rtcpStats2 = found.rtcpStats;
    let num3;
    if (rtcpStats2 != null) {
      num3 = rtcpStats2.fractionLost;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj.fractionLost = num3;
    ({ mediaBitrate: obj.bitrate, targetMediaBitrate: obj.bitrateTarget, encoderImplementationName: obj.encoderImplementationName, encodeUsage: obj.encodeUsage, avgEncodeTime: obj.averageEncodeTime } = substreams);
    const size = { height: null, width: null };
    ({ height: obj5.height, width: obj5.width } = found);
    obj.resolution = size;
    obj.framesSent = found.frameCounts.keyFrames + found.frameCounts.deltaFrames;
    obj.keyFramesEncoded = found.frameCounts.keyFrames;
    ({ framesEncoded: obj.framesEncoded, inputFrameRate: obj.frameRateInput, encodeFrameRate: obj.frameRateEncode } = substreams);
    const rtcpStats3 = found.rtcpStats;
    let num4;
    if (rtcpStats3 != null) {
      num4 = rtcpStats3.firPackets;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj.firCount = num4;
    const rtcpStats4 = found.rtcpStats;
    let num5;
    if (rtcpStats4 != null) {
      num5 = rtcpStats4.nackPackets;
    }
    if (num5 == null) {
      num5 = 0;
    }
    obj.nackCount = num5;
    const rtcpStats5 = found.rtcpStats;
    let num6;
    if (rtcpStats5 != null) {
      num6 = rtcpStats5.pliPackets;
    }
    if (num6 == null) {
      num6 = 0;
    }
    obj.pliCount = num6;
    ({ qpSum: obj.qpSum, bwLimitedResolution: obj.bandwidthLimitedResolution, framesDroppedRateLimiter: obj.framesDroppedRateLimiter, framesDroppedEncoderQueue: obj.framesDroppedEncoderQueue, framesDroppedCongestionWindow: obj.framesDroppedCongestionWindow, framesDroppedEncoder: obj.framesDroppedEncoder, cpuLimitedResolution: obj.cpuLimitedResolution } = substreams);
    const encoderQualityStats = found.encoderQualityStats;
    let prop;
    if (encoderQualityStats != null) {
      prop = encoderQualityStats.imageQualityVmaf_v061;
    }
    obj.encoderQualityVmaf = prop;
    const encoderQualityStats2 = found.encoderQualityStats;
    let prop1;
    if (encoderQualityStats2 != null) {
      prop1 = encoderQualityStats2.imageQualityWebrtcPsnrDb;
    }
    obj.encoderQualityPsnr = prop1;
    const encoderQualityStats3 = found.encoderQualityStats;
    let decodeErrors;
    if (encoderQualityStats3 != null) {
      decodeErrors = encoderQualityStats3.decodeErrors;
    }
    obj.qualityDecodeErrors = decodeErrors;
    const encoderQualityStats4 = found.encoderQualityStats;
    let decoderReboots;
    if (encoderQualityStats4 != null) {
      decoderReboots = encoderQualityStats4.decoderReboots;
    }
    obj.qualityDecoderReboots = decoderReboots;
    const encoderQualityStats5 = found.encoderQualityStats;
    let scoreErrors;
    if (encoderQualityStats5 != null) {
      scoreErrors = encoderQualityStats5.scoreErrors;
    }
    obj.qualityScoreErrors = scoreErrors;
    const encoderQualityStats6 = found.encoderQualityStats;
    let frameDrops;
    if (encoderQualityStats6 != null) {
      frameDrops = encoderQualityStats6.frameDrops;
    }
    obj.qualityFrameDrops = frameDrops;
    const encoderQualityStats7 = found.encoderQualityStats;
    let sizeMismatches;
    if (encoderQualityStats7 != null) {
      sizeMismatches = encoderQualityStats7.sizeMismatches;
    }
    obj.qualitySizeMismatches = sizeMismatches;
    ({ filter: obj.filter, passthroughCount: obj.passthroughCount, encryptSuccessCount: obj.encryptSuccessCount, encryptFailureCount: obj.encryptFailureCount, encryptDuration: obj.encryptDuration, encryptAttempts: obj.encryptAttempts, encryptMaxAttempts: obj.encryptMaxAttempts, encryptMissingKeyCount: obj.encryptMissingKeyCount, hqSimulcastStreamEncoded: obj.hqSimulcastStreamEncoded, lqSimulcastStreamEncoded: obj.lqSimulcastStreamEncoded, bwLimitedFrameRate: obj.bandwidthLimitedFrameRate } = substreams);
    const encoderQualityStats8 = found.encoderQualityStats;
    let freezeCount;
    if (encoderQualityStats8 != null) {
      freezeCount = encoderQualityStats8.freezeCount;
    }
    obj.freezeCount = freezeCount;
    const encoderQualityStats9 = found.encoderQualityStats;
    let totalFreezesDuration;
    if (encoderQualityStats9 != null) {
      totalFreezesDuration = encoderQualityStats9.totalFreezesDuration;
    }
    obj.totalFreezesDuration = totalFreezesDuration;
    const encoderQualityStats10 = found.encoderQualityStats;
    let totalFramesDuration;
    if (encoderQualityStats10 != null) {
      totalFramesDuration = encoderQualityStats10.totalFramesDuration;
    }
    obj.totalFramesDuration = totalFramesDuration;
    const encoderQualityStats11 = found.encoderQualityStats;
    let interFrameEntropy;
    if (encoderQualityStats11 != null) {
      interFrameEntropy = encoderQualityStats11.interFrameEntropy;
    }
    obj.videoEntropy = interFrameEntropy;
    const encoderQualityStats12 = found.encoderQualityStats;
    let prop2;
    if (encoderQualityStats12 != null) {
      prop2 = encoderQualityStats12.consecutiveStaticColorFrames;
    }
    obj.consecutiveStaticColorFrames = prop2;
    const encoderQualityStats13 = found.encoderQualityStats;
    let minResolutionWidth;
    if (encoderQualityStats13 != null) {
      minResolutionWidth = encoderQualityStats13.minResolutionWidth;
    }
    obj.minResolutionWidth = minResolutionWidth;
    const encoderQualityStats14 = found.encoderQualityStats;
    let minResolutionHeight;
    if (encoderQualityStats14 != null) {
      minResolutionHeight = encoderQualityStats14.minResolutionHeight;
    }
    obj.minResolutionHeight = minResolutionHeight;
    const encoderQualityStats15 = found.encoderQualityStats;
    let reconFramesRequested;
    if (encoderQualityStats15 != null) {
      reconFramesRequested = encoderQualityStats15.reconFramesRequested;
    }
    obj.reconFramesRequested = reconFramesRequested;
    const encoderQualityStats16 = found.encoderQualityStats;
    let prop3;
    if (encoderQualityStats16 != null) {
      prop3 = encoderQualityStats16.reconFramesSuccessful;
    }
    obj.reconFramesSuccessful = prop3;
    const encoderQualityStats17 = found.encoderQualityStats;
    let reconFramesFailed;
    if (encoderQualityStats17 != null) {
      reconFramesFailed = encoderQualityStats17.reconFramesFailed;
    }
    obj.reconFramesFailed = reconFramesFailed;
    return obj;
  }
}
function transformInboundVideoStats(height, id, id, playout) {
  const rtpStats = height.rtpStats;
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
  let obj = { type: "video", ssrc: height.ssrc, sinkWant: null, sinkWantAsInt: null, sinkWantLocal: null, sinkWantLocalAsInt: null, codec: null, bytesReceived: null, packetsReceived: null, packetsLost: null, fractionLost: null, bitrate: null, jitterBuffer: null, currentDelay: null, targetDelay: null, minPlayoutDelay: null, renderDelay: null, averageDecodeTime: null, totalDecodeTime: null, resolution: null, decoderImplementationName: null, framesDecoded: null, framesDropped: null, framesDecodeErrors: null, framesReceived: null, networkFramesDropped: null, keyFramesDecoded: null, frameRateDecode: null, frameRateNetwork: null, frameRateRender: null, firCount: null, nackCount: null, pliCount: null, qpSum: null, freezeCount: null, pauseCount: null, totalFreezesDuration: null, totalPausesDuration: null, totalFramesDuration: null, sumOfSquaredFramesDurations: null, passthroughCount: null, decryptSuccessCount: null, decryptFailureCount: null, decryptDuration: null, decryptAttempts: null, decryptMissingKeyCount: null, decryptInvalidNonceCount: null, minResolutionWidth: null, minResolutionHeight: null };
  const sum1 = sum + num4 + num;
  const tmp = sumBytes(height.rtpStats);
  obj.sinkWant = transformStatsUtils.formatSinkWantStat(id, height.ssrc, true);
  obj.sinkWantAsInt = transformStatsUtils.formatSinkWantAsInt(id, height.ssrc);
  obj.sinkWantLocal = transformStatsUtils.formatSinkWantStat(id, height.ssrc, true);
  obj.sinkWantLocalAsInt = transformStatsUtils.formatSinkWantAsInt(id, height.ssrc);
  obj.codec = { id: height.codecPayloadType, name: height.codecName };
  obj.bytesReceived = tmp;
  obj.packetsReceived = sum1;
  let packetsLost = height.rtpStats.packetsLost;
  if (packetsLost == null) {
    packetsLost = height.rtcpStats.packetsLost;
  }
  obj.packetsLost = packetsLost;
  obj.fractionLost = height.rtcpStats.fractionLost;
  ({ totalBitrate: obj.bitrate, jitterBuffer: obj.jitterBuffer, currentDelay: obj.currentDelay, targetDelay: obj.targetDelay, minPlayoutDelay: obj.minPlayoutDelay, renderDelay: obj.renderDelay, decode: obj.averageDecodeTime, totalDecode: obj.totalDecodeTime } = height);
  obj.resolution = { height: height.height, width: height.width };
  ({ decoderImplementationName: obj.decoderImplementationName, framesDecoded: obj.framesDecoded, framesDropped: obj.framesDropped, framesDecodeErrors: obj.framesDecodeErrors } = height);
  obj.framesReceived = height.frameCounts.keyFrames + height.frameCounts.deltaFrames;
  let num5 = height.networkFramesDropped;
  if (num5 == null) {
    num5 = 0;
  }
  obj.networkFramesDropped = num5;
  obj.keyFramesDecoded = height.frameCounts.keyFrames;
  ({ decodeFrameRate: obj.frameRateDecode, networkFrameRate: obj.frameRateNetwork, renderFrameRate: obj.frameRateRender } = height);
  obj.firCount = height.rtcpStats.firPackets;
  obj.nackCount = height.rtcpStats.nackPackets;
  obj.pliCount = height.rtcpStats.pliPackets;
  ({ qpSum: obj.qpSum, freezeCount: obj.freezeCount, pauseCount: obj.pauseCount, totalFreezesDuration: obj.totalFreezesDuration, totalPausesDuration: obj.totalPausesDuration, totalFramesDuration: obj.totalFramesDuration, sumOfSquaredFramesDurations: obj.sumOfSquaredFramesDurations, passthroughCount: obj.passthroughCount, decryptSuccessCount: obj.decryptSuccessCount, decryptFailureCount: obj.decryptFailureCount, decryptDuration: obj.decryptDuration, decryptAttempts: obj.decryptAttempts, decryptMissingKeyCount: obj.decryptMissingKeyCount, decryptInvalidNonceCount: obj.decryptInvalidNonceCount, minResolutionWidth: obj.minResolutionWidth, minResolutionHeight: obj.minResolutionHeight } = height);
  if (null != playout) {
    obj = { videoJitterBuffer: null, videoJitterDelay: null, videoJitterTarget: null };
    ({ videoJitterBuffer: obj7.videoJitterBuffer, videoJitterDelay: obj7.videoJitterDelay, videoJitterTarget: obj7.videoJitterTarget } = playout);
    obj = transformPlayoutStats(obj);
  } else {
    obj = {};
  }
  const merged = Object.assign(obj);
  return obj;
}
let c2 = 1000;
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/transformStats.tsx");

export default function transformStats(mediaEngineConnectionId, str, id, arg3) {
  _require = id;
  dependencyMap = arg3;
  closure_2 = null;
  closure_3 = null;
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
      let inbound = { type: "audio", ssrc: audio.ssrc, sinkWant: null, sinkWantAsInt: null, codec: null, bytesSent: null, packetsSent: null, packetsLost: null, fractionLost: null, audioLevel: null, bitrate: null, bitrateTarget: null, audioDetected: null, framesCaptured: null, framesRendered: null, noiseCancellerFrames: null, noiseCancellerProcessTime: null, voiceActivityDetectorProcessTime: null, passthroughCount: null, encryptSuccessCount: null, encryptFailureCount: null, encryptDuration: null, encryptAttempts: null, encryptMaxAttempts: null, encryptMissingKeyCount: null, pttQueueLatencyMicrosSamples: null, sampleRateMismatchPercent: null, currentSampleRate: null };
      let obj1 = require("transformStatsUtils");
      inbound.sinkWant = obj1.formatSinkWantStat(id, audio.ssrc, false);
      let obj2 = require("transformStatsUtils");
      inbound.sinkWantAsInt = obj2.formatSinkWantAsInt(id, audio.ssrc);
      inbound = { id: null, name: null };
      ({ codecPayloadType: obj4.id, codecName: obj4.name } = audio);
      inbound.codec = inbound;
      ({ bytesSent: obj.bytesSent, packetsSent: obj.packetsSent } = audio);
      const _Math = Math;
      inbound.packetsLost = Math.max(0, audio.packetsLost);
      inbound.fractionLost = 100 * audio.fractionLost;
      inbound.audioLevel = audio.audioLevel / 32768;
      ({ mediaBitrate: obj.bitrate, targetMediaBitrate: obj.bitrateTarget, speaking: obj.audioDetected, framesCaptured: obj.framesCaptured, framesRendered: obj.framesRendered, noiseCancellerFrames: obj.noiseCancellerFrames, noiseCancellerProcessTime: obj.noiseCancellerProcessTime, voiceActivityDetectorProcessTime: obj.voiceActivityDetectorProcessTime, passthroughCount: obj.passthroughCount, encryptSuccessCount: obj.encryptSuccessCount, encryptFailureCount: obj.encryptFailureCount, encryptDuration: obj.encryptDuration, encryptAttempts: obj.encryptAttempts, encryptMaxAttempts: obj.encryptMaxAttempts, encryptMissingKeyCount: obj.encryptMissingKeyCount, pttQueueLatencyMicrosSamples: obj.pttQueueLatencyMicrosSamples, sampleRateMismatchPercent: obj.sampleRateMismatchPercent, currentSampleRate: obj.currentSampleRate } = audio);
      items.push(inbound);
    }
    if (null != videos) {
      let item = videos.forEach((item) => {
        const tmp = transformOutboundVideoStats(item, closure_0);
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
      const tmp7 = inbound(video, id);
      if (null != tmp7) {
        let num6 = closure_3;
        if (closure_3 == null) {
          num6 = 0;
        }
        closure_3 = num6 + tmp7.bytesSent;
        items.push(tmp7);
      }
    }
  }
  inbound = {};
  if (null != parsed.inbound) {
    inbound = parsed.inbound;
    const item1 = inbound.forEach((id) => {
      id = id.id;
      ({ audio, video, videos, playout } = id);
      codec[id] = [];
      if (null == audio) {
        if (null != videos) {
          const item = videos.forEach((rtpStats) => {
            let num = closure_2;
            const tmp = transformInboundVideoStats(rtpStats, closure_0, closure_1, playout);
            if (closure_2 == null) {
              num = 0;
            }
            closure_2 = num + sumBytes(rtpStats.rtpStats);
            let arr = obj[id];
            arr = arr.push(tmp);
          });
        } else if (null != video) {
          let num7 = closure_2;
          const tmp14 = transformInboundVideoStats(video, id, playout, playout);
          if (closure_2 == null) {
            num7 = 0;
          }
          closure_2 = num7 + closure_3(video.rtpStats);
          let arr = tmp[id].push(tmp14);
          const tmp16 = closure_3(video.rtpStats);
        }
      } else {
        let num = closure_2;
        if (closure_2 == null) {
          num = 0;
        }
        closure_2 = num + audio.bytesReceived;
        arr = tmp[id];
        codec = { type: "audio", ssrc: audio.ssrc, sinkWant: null, sinkWantAsInt: null, codec: null, bytesReceived: null, packetsReceived: null, packetsLost: null, fractionLost: null, fecPacketsReceived: null, fecPacketsDiscarded: null, audioLevel: null, audioDetected: null, currentSampleRate: null, jitter: null, jitterBuffer: null, jitterBufferPreferred: null, decodingCNG: null, decodingMutedOutput: null, decodingNormal: null, decodingPLC: null, decodingPLCCNG: null, nackCount: null, accelerateRate: null, expandRate: null, preemptiveExpandRate: null, speechExpandRate: null, secondaryDecodedRate: null, opSilence: null, opNormal: null, opMerge: null, opExpand: null, opAccelerate: null, opPreemptiveExpand: null, opCNG: null, delayEstimate: null, passthroughCount: null, decryptSuccessCount: null, decryptFailureCount: null, decryptDuration: null, decryptAttempts: null, decryptMissingKeyCount: null, decryptInvalidNonceCount: null };
        let obj2 = id(4678);
        codec.sinkWant = obj2.formatSinkWantStat(id, audio.ssrc, false);
        codec.sinkWantAsInt = id(4678).formatSinkWantAsInt(id, audio.ssrc);
        codec = { id: null, name: null };
        ({ codecPayloadType: obj4.id, codecName: obj4.name } = audio);
        codec.codec = codec;
        ({ bytesReceived: obj.bytesReceived, packetsReceived: obj.packetsReceived, packetsLost: obj.packetsLost } = audio);
        codec.fractionLost = 100 * audio.fractionLost;
        ({ fecPacketsReceived: obj.fecPacketsReceived, fecPacketsDiscarded: obj.fecPacketsDiscarded } = audio);
        codec.audioLevel = audio.audioLevel / 32768;
        ({ speaking: obj.audioDetected, currentSampleRate: obj.currentSampleRate, jitter: obj.jitter, jitterBuffer: obj.jitterBuffer, jitterBufferPreferred: obj.jitterBufferPreferred, decodingCNG: obj.decodingCNG, decodingMutedOutput: obj.decodingMutedOutput, decodingNormal: obj.decodingNormal, decodingPLC: obj.decodingPLC, decodingPLCCNG: obj.decodingPLCCNG, nackCount: obj.nackCount } = audio);
        codec.accelerateRate = 100 * audio.accelerateRate;
        codec.expandRate = 100 * audio.expandRate;
        codec.preemptiveExpandRate = 100 * audio.preemptiveExpandRate;
        codec.speechExpandRate = 100 * audio.speechExpandRate;
        codec.secondaryDecodedRate = 100 * audio.secondaryDecodedRate;
        ({ opSilence: obj.opSilence, opNormal: obj.opNormal, opMerge: obj.opMerge, opExpand: obj.opExpand, opAccelerate: obj.opAccelerate, opPreemptiveExpand: obj.opPreemptiveExpand, opCNG: obj.opCNG, delayEstimate: obj.delayEstimate, passthroughCount: obj.passthroughCount, decryptSuccessCount: obj.decryptSuccessCount, decryptFailureCount: obj.decryptFailureCount, decryptDuration: obj.decryptDuration, decryptAttempts: obj.decryptAttempts, decryptMissingKeyCount: obj.decryptMissingKeyCount, decryptInvalidNonceCount: obj.decryptInvalidNonceCount } = audio);
        if (null != playout) {
          ({ audioJitterBuffer: obj6.audioJitterBuffer, audioJitterBufferSamples: obj6.audioJitterBufferSamples, audioJitterDelay: obj6.audioJitterDelay, audioJitterDelaySamples: obj6.audioJitterDelaySamples, audioJitterTarget: obj6.audioJitterTarget, audioJitterTargetSamples: obj6.audioJitterTargetSamples, audioPlayoutUnderruns: obj6.audioPlayoutUnderruns, relativeReceptionDelay: obj6.relativeReceptionDelay, relativePlayoutDelay: obj6.relativePlayoutDelay } = playout);
          obj2 = items({ audioJitterBuffer: null, audioJitterBufferSamples: null, audioJitterDelay: null, audioJitterDelaySamples: null, audioJitterTarget: null, audioJitterTargetSamples: null, audioPlayoutUnderruns: null, relativeReceptionDelay: null, relativePlayoutDelay: null });
          const obj1 = { audioJitterBuffer: null, audioJitterBufferSamples: null, audioJitterDelay: null, audioJitterDelaySamples: null, audioJitterTarget: null, audioJitterTargetSamples: null, audioPlayoutUnderruns: null, relativeReceptionDelay: null, relativePlayoutDelay: null };
        } else {
          obj2 = {};
        }
        const merged = Object.assign(obj2);
        codec = arr.push(codec);
        const obj3 = id(4678);
      }
    });
  }
  const transport = parsed.transport;
  obj1 = {};
  if (null != transport) {
    ({ sendBandwidth: obj6.availableOutgoingBitrate, rtt: obj6.ping, decryptionFailures: obj6.decryptionFailures } = transport);
    if (null != transport.routingFailures) {
      obj1.routingFailures = transport.routingFailures;
    }
    ({ localAddress: obj6.localAddress, pacerDelay: obj6.pacerDelay } = transport);
    if (null != transport.receiverReports) {
      obj1.receiverReports = transport.receiverReports;
    }
    ({ receiverBitrateEstimate: obj6.receiverBitrateEstimate, outboundBitrateEstimate: obj6.outboundBitrateEstimate, inboundBitrateEstimate } = transport);
    if (inboundBitrateEstimate == null) {
      inboundBitrateEstimate = 0;
    }
    obj1.inboundBitrateEstimate = inboundBitrateEstimate;
    ({ packetsReceived: obj6.packetsReceived, packetsSent: obj6.packetsSent } = transport);
    if (null != transport.secureFramesProtocolVersion) {
      obj1.secureFramesProtocolVersion = transport.secureFramesProtocolVersion;
    }
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
    obj1.bytesReceived = bytesReceived1;
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
    obj1.bytesSent = bytesSent1;
  }
  const camera = parsed.camera;
  obj2 = { mediaEngineConnectionId, transport: obj1, screenshare: parsed.screenshare, camera: null, clips: null, audioDevice: null, rtp: null };
  let tmp25 = null;
  if (null != camera) {
    ({ capturedFramesDropped: obj8.capturedFramesDropped, capturedFramesCount: obj8.capturedFramesCount, capturedFramesMean: obj8.capturedFramesMean, capturedFramesStdev: obj8.capturedFramesStdev } = camera);
    tmp25 = { capturedFramesDropped: null, capturedFramesCount: null, capturedFramesMean: null, capturedFramesStdev: null };
    let obj3 = { capturedFramesDropped: null, capturedFramesCount: null, capturedFramesMean: null, capturedFramesStdev: null };
  }
  obj2.camera = tmp25;
  obj2.clips = parsed.clips;
  obj2.audioDevice = parsed.audioDevice;
  obj2.rtp = { inbound, outbound: items };
  return obj2;
};