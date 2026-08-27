// === Module 4606: sumBytes ===

// Module 4606 (sumBytes)
import set from "set" /* 2 */;
import formatSinkWantStat from "formatSinkWantStat" /* 4607 */;

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
    let tmp3 = key10006;
    let _Array = Array;
    let arr = arg0[key10006];
    if (Array.isArray(arg0[key10006])) {
      obj[key10006] = arr.map((arg0) => arg0 * closure_2);
      continue;
    } else {
      if (null == arr) {
        continue;
      } else {
        let tmp = arg0[key10006];
        obj = { last: null, mean: null, p75: null, p95: null, p99: null, max: null };
        let _Math = Math;
        let tmp2 = c2;
        obj[0] = Math.round(tmp.last * c2);
        let _Math2 = Math;
        obj[1] = Math.round(tmp.mean * c2);
        let _Math3 = Math;
        obj[2] = Math.round(tmp.p75 * c2);
        let _Math4 = Math;
        obj[3] = Math.round(tmp.p95 * c2);
        let _Math5 = Math;
        obj[4] = Math.round(tmp.p99 * c2);
        let _Math6 = Math;
        obj[5] = Math.round(tmp.max * c2);
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
    const reduced = substreams1.reduce((arg0, rtpStats) => arg0 + callback(rtpStats.rtpStats), 0);
    let obj = { type: "video", ssrc: null, sinkWant: null, sinkWantAsInt: null, codec: null, keyFrameInterval: null, bytesSent: null, packetsSent: null, packetsLost: null, fractionLost: null, bitrate: null, bitrateTarget: null, encoderImplementationName: null, encodeUsage: null, averageEncodeTime: null, resolution: null, framesSent: null, keyFramesEncoded: null, framesEncoded: null, frameRateInput: null, frameRateEncode: null, firCount: null, nackCount: null, pliCount: null, qpSum: null, bandwidthLimitedResolution: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, cpuLimitedResolution: null, encoderQualityVmaf: null, encoderQualityPsnr: null, qualityDecodeErrors: null, qualityDecoderReboots: null, qualityScoreErrors: null, qualityFrameDrops: null, qualitySizeMismatches: null, filter: null, passthroughCount: null, encryptSuccessCount: null, encryptFailureCount: null, encryptDuration: null, encryptAttempts: null, encryptMaxAttempts: null, encryptMissingKeyCount: null, hqSimulcastStreamEncoded: null, lqSimulcastStreamEncoded: null, bandwidthLimitedFrameRate: null, freezeCount: null, totalFreezesDuration: null, totalFramesDuration: null, videoEntropy: null, consecutiveStaticColorFrames: null, minResolutionWidth: null, minResolutionHeight: null, reconFramesRequested: null, reconFramesSuccessful: null, reconFramesFailed: null };
    obj[1] = found.ssrc;
    const reduced1 = substreams2.reduce((arg0, rtpStats) => {
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
      return arg0 + (sum + num4 + num);
    }, 0);
    obj[2] = formatSinkWantStat.formatSinkWantStat(id, found.ssrc, true);
    const obj2 = formatSinkWantStat;
    obj[3] = formatSinkWantStat.formatSinkWantAsInt(id, found.ssrc);
    obj = { id: null, name: null };
    ({ codecPayloadType: obj4[0], codecName: obj4[1] } = substreams);
    obj[4] = obj;
    obj[5] = substreams.keyFrameInterval;
    obj[6] = reduced;
    obj[7] = reduced1;
    const rtcpStats = found.rtcpStats;
    let num2;
    if (rtcpStats != null) {
      num2 = rtcpStats.packetsLost;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj[8] = num2;
    const rtcpStats2 = found.rtcpStats;
    let num3;
    if (rtcpStats2 != null) {
      num3 = rtcpStats2.fractionLost;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj[9] = num3;
    ({ mediaBitrate: obj[10], targetMediaBitrate: obj[11], encoderImplementationName: obj[12], encodeUsage: obj[13], avgEncodeTime: obj[14] } = substreams);
    obj = { height: null, width: null };
    ({ height: obj5[0], width: obj5[1] } = found);
    obj[15] = obj;
    obj[16] = found.frameCounts.keyFrames + found.frameCounts.deltaFrames;
    obj[17] = found.frameCounts.keyFrames;
    ({ framesEncoded: obj[18], inputFrameRate: obj[19], encodeFrameRate: obj[20] } = substreams);
    const rtcpStats3 = found.rtcpStats;
    let num4;
    if (rtcpStats3 != null) {
      num4 = rtcpStats3.firPackets;
    }
    if (num4 == null) {
      num4 = 0;
    }
    obj[21] = num4;
    const rtcpStats4 = found.rtcpStats;
    let num5;
    if (rtcpStats4 != null) {
      num5 = rtcpStats4.nackPackets;
    }
    if (num5 == null) {
      num5 = 0;
    }
    obj[22] = num5;
    const rtcpStats5 = found.rtcpStats;
    let num6;
    if (rtcpStats5 != null) {
      num6 = rtcpStats5.pliPackets;
    }
    if (num6 == null) {
      num6 = 0;
    }
    obj[23] = num6;
    ({ qpSum: obj[24], bwLimitedResolution: obj[25], framesDroppedRateLimiter: obj[26], framesDroppedEncoderQueue: obj[27], framesDroppedCongestionWindow: obj[28], framesDroppedEncoder: obj[29], cpuLimitedResolution: obj[30] } = substreams);
    const encoderQualityStats = found.encoderQualityStats;
    let prop;
    if (encoderQualityStats != null) {
      prop = encoderQualityStats.imageQualityVmaf_v061;
    }
    obj[31] = prop;
    const encoderQualityStats2 = found.encoderQualityStats;
    let prop1;
    if (encoderQualityStats2 != null) {
      prop1 = encoderQualityStats2.imageQualityWebrtcPsnrDb;
    }
    obj[32] = prop1;
    const encoderQualityStats3 = found.encoderQualityStats;
    let decodeErrors;
    if (encoderQualityStats3 != null) {
      decodeErrors = encoderQualityStats3.decodeErrors;
    }
    obj[33] = decodeErrors;
    const encoderQualityStats4 = found.encoderQualityStats;
    let decoderReboots;
    if (encoderQualityStats4 != null) {
      decoderReboots = encoderQualityStats4.decoderReboots;
    }
    obj[34] = decoderReboots;
    const encoderQualityStats5 = found.encoderQualityStats;
    let scoreErrors;
    if (encoderQualityStats5 != null) {
      scoreErrors = encoderQualityStats5.scoreErrors;
    }
    obj[35] = scoreErrors;
    const encoderQualityStats6 = found.encoderQualityStats;
    let frameDrops;
    if (encoderQualityStats6 != null) {
      frameDrops = encoderQualityStats6.frameDrops;
    }
    obj[36] = frameDrops;
    const encoderQualityStats7 = found.encoderQualityStats;
    let sizeMismatches;
    if (encoderQualityStats7 != null) {
      sizeMismatches = encoderQualityStats7.sizeMismatches;
    }
    obj[37] = sizeMismatches;
    ({ filter: obj[38], passthroughCount: obj[39], encryptSuccessCount: obj[40], encryptFailureCount: obj[41], encryptDuration: obj[42], encryptAttempts: obj[43], encryptMaxAttempts: obj[44], encryptMissingKeyCount: obj[45], hqSimulcastStreamEncoded: obj[46], lqSimulcastStreamEncoded: obj[47], bwLimitedFrameRate: obj[48] } = substreams);
    const encoderQualityStats8 = found.encoderQualityStats;
    let freezeCount;
    if (encoderQualityStats8 != null) {
      freezeCount = encoderQualityStats8.freezeCount;
    }
    obj[49] = freezeCount;
    const encoderQualityStats9 = found.encoderQualityStats;
    let totalFreezesDuration;
    if (encoderQualityStats9 != null) {
      totalFreezesDuration = encoderQualityStats9.totalFreezesDuration;
    }
    obj[50] = totalFreezesDuration;
    const encoderQualityStats10 = found.encoderQualityStats;
    let totalFramesDuration;
    if (encoderQualityStats10 != null) {
      totalFramesDuration = encoderQualityStats10.totalFramesDuration;
    }
    obj[51] = totalFramesDuration;
    const encoderQualityStats11 = found.encoderQualityStats;
    let interFrameEntropy;
    if (encoderQualityStats11 != null) {
      interFrameEntropy = encoderQualityStats11.interFrameEntropy;
    }
    obj[52] = interFrameEntropy;
    const encoderQualityStats12 = found.encoderQualityStats;
    let prop2;
    if (encoderQualityStats12 != null) {
      prop2 = encoderQualityStats12.consecutiveStaticColorFrames;
    }
    obj[53] = prop2;
    const encoderQualityStats13 = found.encoderQualityStats;
    let minResolutionWidth;
    if (encoderQualityStats13 != null) {
      minResolutionWidth = encoderQualityStats13.minResolutionWidth;
    }
    obj[54] = minResolutionWidth;
    const encoderQualityStats14 = found.encoderQualityStats;
    let minResolutionHeight;
    if (encoderQualityStats14 != null) {
      minResolutionHeight = encoderQualityStats14.minResolutionHeight;
    }
    obj[55] = minResolutionHeight;
    const encoderQualityStats15 = found.encoderQualityStats;
    let reconFramesRequested;
    if (encoderQualityStats15 != null) {
      reconFramesRequested = encoderQualityStats15.reconFramesRequested;
    }
    obj[56] = reconFramesRequested;
    const encoderQualityStats16 = found.encoderQualityStats;
    let prop3;
    if (encoderQualityStats16 != null) {
      prop3 = encoderQualityStats16.reconFramesSuccessful;
    }
    obj[57] = prop3;
    const encoderQualityStats17 = found.encoderQualityStats;
    let reconFramesFailed;
    if (encoderQualityStats17 != null) {
      reconFramesFailed = encoderQualityStats17.reconFramesFailed;
    }
    obj[58] = reconFramesFailed;
    return obj;
  }
}
function transformInboundVideoStats(height, id, id) {
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
  obj[2] = formatSinkWantStat.formatSinkWantStat(id, height.ssrc, true);
  const obj2 = formatSinkWantStat;
  obj[3] = formatSinkWantStat.formatSinkWantAsInt(id, height.ssrc);
  const obj3 = formatSinkWantStat;
  obj[4] = formatSinkWantStat.formatSinkWantStat(id, height.ssrc, true);
  const obj4 = formatSinkWantStat;
  obj[5] = formatSinkWantStat.formatSinkWantAsInt(id, height.ssrc);
  obj[6] = { id: height.codecPayloadType, name: height.codecName };
  obj[7] = tmp;
  obj[8] = sum1;
  let packetsLost = height.rtpStats.packetsLost;
  if (packetsLost == null) {
    packetsLost = height.rtcpStats.packetsLost;
  }
  obj[9] = packetsLost;
  obj[10] = height.rtcpStats.fractionLost;
  ({ totalBitrate: obj[11], jitterBuffer: obj[12], currentDelay: obj[13], targetDelay: obj[14], minPlayoutDelay: obj[15], renderDelay: obj[16], decode: obj[17], totalDecode: obj[18] } = height);
  obj[19] = { height: height.height, width: height.width };
  ({ decoderImplementationName: obj[20], framesDecoded: obj[21], framesDropped: obj[22], framesDecodeErrors: obj[23] } = height);
  obj[24] = height.frameCounts.keyFrames + height.frameCounts.deltaFrames;
  let num5 = height.networkFramesDropped;
  if (num5 == null) {
    num5 = 0;
  }
  obj[25] = num5;
  obj[26] = height.frameCounts.keyFrames;
  ({ decodeFrameRate: obj[27], networkFrameRate: obj[28], renderFrameRate: obj[29] } = height);
  obj[30] = height.rtcpStats.firPackets;
  obj[31] = height.rtcpStats.nackPackets;
  obj[32] = height.rtcpStats.pliPackets;
  ({ qpSum: obj[33], freezeCount: obj[34], pauseCount: obj[35], totalFreezesDuration: obj[36], totalPausesDuration: obj[37], totalFramesDuration: obj[38], sumOfSquaredFramesDurations: obj[39], passthroughCount: obj[40], decryptSuccessCount: obj[41], decryptFailureCount: obj[42], decryptDuration: obj[43], decryptAttempts: obj[44], decryptMissingKeyCount: obj[45], decryptInvalidNonceCount: obj[46], minResolutionWidth: obj[47], minResolutionHeight: obj[48] } = height);
  if (null != arg3) {
    obj = { videoJitterBuffer: null, videoJitterDelay: null, videoJitterTarget: null };
    ({ videoJitterBuffer: obj7[0], videoJitterDelay: obj7[1], videoJitterTarget: obj7[2] } = arg3);
    obj = transformPlayoutStats(obj);
  } else {
    obj = {};
  }
  const merged = Object.assign(obj);
  return obj;
}
let c2 = 1000;
const result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/native/transformStats.tsx");

export default function transformStats(mediaEngineConnectionId, str, id) {
  const _require = id;
  dependencyMap = arg3;
  c2 = null;
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
      let obj = { type: "audio", ssrc: null, sinkWant: null, sinkWantAsInt: null, codec: null, bytesSent: null, packetsSent: null, packetsLost: null, fractionLost: null, audioLevel: null, bitrate: null, bitrateTarget: null, audioDetected: null, framesCaptured: null, framesRendered: null, noiseCancellerFrames: null, noiseCancellerProcessTime: null, voiceActivityDetectorProcessTime: null, passthroughCount: null, encryptSuccessCount: null, encryptFailureCount: null, encryptDuration: null, encryptAttempts: null, encryptMaxAttempts: null, encryptMissingKeyCount: null, pttQueueLatencyMicrosSamples: null, sampleRateMismatchPercent: null, currentSampleRate: null };
      obj[1] = audio.ssrc;
      obj1 = _require(4607);
      obj[2] = obj1.formatSinkWantStat(id, audio.ssrc, false);
      let obj2 = _require(4607);
      obj[3] = obj2.formatSinkWantAsInt(id, audio.ssrc);
      obj = { id: null, name: null };
      ({ codecPayloadType: obj4[0], codecName: obj4[1] } = audio);
      obj[4] = obj;
      ({ bytesSent: obj[5], packetsSent: obj[6] } = audio);
      const _Math = Math;
      obj[7] = Math.max(0, audio.packetsLost);
      obj[8] = 100 * audio.fractionLost;
      obj[9] = audio.audioLevel / 32768;
      ({ mediaBitrate: obj[10], targetMediaBitrate: obj[11], speaking: obj[12], framesCaptured: obj[13], framesRendered: obj[14], noiseCancellerFrames: obj[15], noiseCancellerProcessTime: obj[16], voiceActivityDetectorProcessTime: obj[17], passthroughCount: obj[18], encryptSuccessCount: obj[19], encryptFailureCount: obj[20], encryptDuration: obj[21], encryptAttempts: obj[22], encryptMaxAttempts: obj[23], encryptMissingKeyCount: obj[24], pttQueueLatencyMicrosSamples: obj[25], sampleRateMismatchPercent: obj[26], currentSampleRate: obj[27] } = audio);
      items.push(obj);
    }
    if (null != videos) {
      let item = videos.forEach((arg0) => {
        const tmp = obj(arg0, closure_0);
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
      const tmp7 = obj(video, id);
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
  obj = {};
  if (null != parsed.inbound) {
    const inbound = parsed.inbound;
    const item1 = inbound.forEach((id) => {
      id = id.id;
      ({ audio, video, videos, playout } = id);
      obj[id] = [];
      if (null == audio) {
        if (null != videos) {
          const item = videos.forEach((rtpStats) => {
            let num = closure_2;
            const tmp = closure_2_6(rtpStats, id, playout, playout);
            if (closure_2 == null) {
              num = 0;
            }
            closure_2 = num + callback(rtpStats.rtpStats);
            let arr = closure_1_5[id];
            arr = arr.push(tmp);
          });
        } else if (null != video) {
          let num7 = closure_2;
          const tmp14 = closure_1_6(video, id, playout, playout);
          if (closure_2 == null) {
            num7 = 0;
          }
          closure_2 = num7 + callback(video.rtpStats);
          let arr = tmp[id].push(tmp14);
          const arr2 = tmp[id];
          const tmp16 = callback(video.rtpStats);
        }
      } else {
        let num = closure_2;
        if (closure_2 == null) {
          num = 0;
        }
        closure_2 = num + audio.bytesReceived;
        arr = tmp[id];
        obj = { type: "audio", ssrc: null, sinkWant: null, sinkWantAsInt: null, codec: null, bytesReceived: null, packetsReceived: null, packetsLost: null, fractionLost: null, fecPacketsReceived: null, fecPacketsDiscarded: null, audioLevel: null, audioDetected: null, currentSampleRate: null, jitter: null, jitterBuffer: null, jitterBufferPreferred: null, decodingCNG: null, decodingMutedOutput: null, decodingNormal: null, decodingPLC: null, decodingPLCCNG: null, nackCount: null, accelerateRate: null, expandRate: null, preemptiveExpandRate: null, speechExpandRate: null, secondaryDecodedRate: null, opSilence: null, opNormal: null, opMerge: null, opExpand: null, opAccelerate: null, opPreemptiveExpand: null, opCNG: null, delayEstimate: null, passthroughCount: null, decryptSuccessCount: null, decryptFailureCount: null, decryptDuration: null, decryptAttempts: null, decryptMissingKeyCount: null, decryptInvalidNonceCount: null };
        obj[1] = audio.ssrc;
        let obj2 = id(4607);
        obj[2] = obj2.formatSinkWantStat(id, audio.ssrc, false);
        obj[3] = id(4607).formatSinkWantAsInt(id, audio.ssrc);
        obj = { id: null, name: null };
        ({ codecPayloadType: obj4[0], codecName: obj4[1] } = audio);
        obj[4] = obj;
        ({ bytesReceived: obj[5], packetsReceived: obj[6], packetsLost: obj[7] } = audio);
        obj[8] = 100 * audio.fractionLost;
        ({ fecPacketsReceived: obj[9], fecPacketsDiscarded: obj[10] } = audio);
        obj[11] = audio.audioLevel / 32768;
        ({ speaking: obj[12], currentSampleRate: obj[13], jitter: obj[14], jitterBuffer: obj[15], jitterBufferPreferred: obj[16], decodingCNG: obj[17], decodingMutedOutput: obj[18], decodingNormal: obj[19], decodingPLC: obj[20], decodingPLCCNG: obj[21], nackCount: obj[22] } = audio);
        obj[23] = 100 * audio.accelerateRate;
        obj[24] = 100 * audio.expandRate;
        obj[25] = 100 * audio.preemptiveExpandRate;
        obj[26] = 100 * audio.speechExpandRate;
        obj[27] = 100 * audio.secondaryDecodedRate;
        ({ opSilence: obj[28], opNormal: obj[29], opMerge: obj[30], opExpand: obj[31], opAccelerate: obj[32], opPreemptiveExpand: obj[33], opCNG: obj[34], delayEstimate: obj[35], passthroughCount: obj[36], decryptSuccessCount: obj[37], decryptFailureCount: obj[38], decryptDuration: obj[39], decryptAttempts: obj[40], decryptMissingKeyCount: obj[41], decryptInvalidNonceCount: obj[42] } = audio);
        if (null != playout) {
          ({ audioJitterBuffer: obj6[0], audioJitterBufferSamples: obj6[1], audioJitterDelay: obj6[2], audioJitterDelaySamples: obj6[3], audioJitterTarget: obj6[4], audioJitterTargetSamples: obj6[5], audioPlayoutUnderruns: obj6[6], relativeReceptionDelay: obj6[7], relativePlayoutDelay: obj6[8] } = playout);
          obj2 = items({ audioJitterBuffer: null, audioJitterBufferSamples: null, audioJitterDelay: null, audioJitterDelaySamples: null, audioJitterTarget: null, audioJitterTargetSamples: null, audioPlayoutUnderruns: null, relativeReceptionDelay: null, relativePlayoutDelay: null });
          obj1 = { audioJitterBuffer: null, audioJitterBufferSamples: null, audioJitterDelay: null, audioJitterDelaySamples: null, audioJitterTarget: null, audioJitterTargetSamples: null, audioPlayoutUnderruns: null, relativeReceptionDelay: null, relativePlayoutDelay: null };
        } else {
          obj2 = {};
        }
        const merged = Object.assign(obj2);
        obj = arr.push(obj);
        const obj3 = id(4607);
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
    let tmp14 = null != c2;
    if (tmp14) {
      const _Number = Number;
      tmp14 = !Number.isNaN(c2);
    }
    tmp12 = tmp14;
  }
  if (tmp12) {
    let bytesReceived1;
    if (transport != null) {
      bytesReceived1 = transport.bytesReceived;
    }
    if (bytesReceived1 == null) {
      bytesReceived1 = c2;
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
    ({ capturedFramesDropped: obj8[0], capturedFramesCount: obj8[1], capturedFramesMean: obj8[2], capturedFramesStdev: obj8[3] } = camera);
    tmp25 = { capturedFramesDropped: null, capturedFramesCount: null, capturedFramesMean: null, capturedFramesStdev: null };
    let obj3 = { capturedFramesDropped: null, capturedFramesCount: null, capturedFramesMean: null, capturedFramesStdev: null };
  }
  obj2[3] = tmp25;
  obj2[4] = parsed.clips;
  obj2[5] = parsed.audioDevice;
  obj2[6] = { inbound: obj, outbound: items };
  return obj2;
};