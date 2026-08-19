// discord_app/lib/VideoQualityStats.tsx
import getSamples from "Histogram.tsx";
import getStatsDefault from "SystemResources.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";

require = fn;
function parseEncoder(encoderImplementationName) {
  if (null == encoderImplementationName) {
    return obj.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(table);
    for (const item10012 of keys) {
      let formatted = arg0.toLowerCase();
      if (formatted.includes(item10012)) {
        obj.return();
        return table[item10012];
      }
    }
    return obj.UNCATEGORIZED;
  }
}
function parseDecoder(decoderImplementationName) {
  if (null == decoderImplementationName) {
    return obj.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(table2);
    for (const item10012 of keys) {
      let formatted = arg0.toLowerCase();
      if (formatted.includes(item10012)) {
        obj.return();
        return table2[item10012];
      }
    }
    return obj.UNCATEGORIZED;
  }
}
let closure_4 = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000];
let closure_5 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
let closure_6 = [720, 480, 360];
let closure_7 = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "networkFramesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "totalDecodeTime", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "cryptorMissingKeyCount", "cryptorInvalidNonceCount", "qualityDecodeErrors", "qualityDecoderReboots", "qualityScoreErrors", "qualityFrameDrops", "qualitySizeMismatches", "screenshareFramesUnique"];
let set = new Set(["passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "cryptorMissingKeyCount", "cryptorInvalidNonceCount"]);
let closure_9 = ["bytes", "packets", "framesNetwork", "framesCodec"];
let obj = { VIDEOTOOLBOX: "videotoolbox", VP8_LIBVPX: "vp8_libvpx", ELECTRON: "electron", FFMPEG: "ffmpeg", DAV1D: "dav1d", WEBRTC: "WebRTC", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", UNCATEGORIZED: "uncategorized", D3D11VIDEODECODER: "d3d11videodecoder", ANDROID: "android", UNKNOWN: "unknown" };
let closure_13 = Object.freeze({ "mediafoundation direct3d intel": obj.WMF_DIRECT_3D_INTEL, "mediafoundation direct3d nvidia": obj.WMF_DIRECT_3D_NVIDIA, "mediafoundation direct3d amd": obj.WMF_DIRECT_3D_AMD, mediafoundationvideoencodeaccelerator: obj.WMF_CHROME, "nvidia: cuda": obj.NVIDIA_CUDA, "nvidia: direct3d": obj.NVIDIA_DIRECT_3D, "nvidia: vulkan": obj.NVIDIA_VULKAN, "amd: direct3d": obj.AMD_DIRECT_3D, "amd: vaapi": obj.AMD_VAAPI, "intel: direct3d": obj.INTEL_DIRECT_3D, "intel: vaapi": obj.INTEL_VAAPI, intel: obj.INTEL, videotoolbox: obj.VIDEOTOOLBOX, openh264: obj.OPENH264, libvpx: obj.VP8_LIBVPX, "c2.exynos": obj.EXYNOS, "omx.exynos": obj.EXYNOS, "c2.qti": obj.QUALCOMM, "omx.qcom": obj.QUALCOMM, "c2.mtk": obj.MEDIATEK, "omx.mtk": obj.MEDIATEK, "mediafoundation sw": obj.WMF_SW, "mediafoundation hw": obj.WMF_HW, "mediafoundation direct3d": obj.WMF_DIRECT_3D });
let closure_14 = Object.freeze({ videotoolbox: obj.VIDEOTOOLBOX, libvpx: obj.VP8_LIBVPX, electron: obj.ELECTRON, ffmpeg: obj.FFMPEG, dav1d: obj.DAV1D, webrtc: obj.WEBRTC, "c2.exynos": obj.EXYNOS, "omx.exynos": obj.EXYNOS, "c2.qti": obj.QUALCOMM, "omx.qcom": obj.QUALCOMM, "c2.mtk": obj.MEDIATEK, "omx.mtk": obj.MEDIATEK, d3d11videodecoder: obj.D3D11VIDEODECODER, "c2.android": obj.ANDROID, "omx.google": obj.ANDROID });
const obj3 = { None: 0, [0]: "None", ClientSideDisableVideo: 1, [1]: "ClientSideDisableVideo", SenderStopped: 2, [2]: "SenderStopped" };
let RawVideoStats;
class RawVideoStats {
}
RawVideoStats["parseInboundStats"] = function parseInboundStats(found, closure_1) {
  if (typeof RawVideoStats !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(RawVideoStats.prototype);
  if (null != found) {
    ({ bytesReceived: tmp2.bytes, framesDecoded: tmp2.framesCodec, framesDecodeErrors } = found);
    if (framesDecodeErrors == null) {
      framesDecodeErrors = null;
    }
    obj.framesCodecError = framesDecodeErrors;
    ({ framesReceived: tmp2.framesNetwork, packetsReceived: tmp2.packets, packetsLost: tmp2.packetsLost, framesDropped } = found);
    if (framesDropped == null) {
      framesDropped = 0;
    }
    obj.framesDropped = framesDropped;
    let num = found.networkFramesDropped;
    if (num == null) {
      num = 0;
    }
    obj.networkFramesDropped = num;
    let num3 = 0;
    if (null != found.resolution) {
      num3 = found.resolution.height;
    }
    obj.resolution = num3;
    let num4 = 0;
    if (null != found.resolution) {
      const _Math = Math;
      num4 = Math.min(found.resolution.height, found.resolution.width);
    }
    obj.minorResolution = num4;
    let num5 = 0;
    if (null != found.resolution) {
      const _Math2 = Math;
      num5 = Math.max(found.resolution.height, found.resolution.width);
    }
    obj.majorResolution = num5;
    obj.timestamp = closure_1;
    ({ nackCount: tmp2.nackCount, pliCount: tmp2.pliCount } = found);
    obj.decoder = parseDecoder(found.decoderImplementationName);
    if (null == found.codec.name) {
      let AV1 = obj.UNKNOWN;
    } else {
      const formatted = str.toUpperCase();
      if ("H264" === formatted) {
        AV1 = obj.H264;
      } else if ("H265" === formatted) {
        AV1 = obj.H265;
      } else if ("VP8" === formatted) {
        AV1 = obj.VP8;
      } else if ("VP9" === formatted) {
        AV1 = obj.VP9;
      } else {
        if ("AV1" !== formatted) {
          if ("AV1X" !== formatted) {
            AV1 = obj.UNKNOWN;
          }
        }
        AV1 = obj.AV1;
      }
    }
    obj.codecType = AV1;
    obj.qpSum = 0;
    ({ freezeCount: tmp2.freezeCount, pauseCount: tmp2.pauseCount, totalFreezesDuration: tmp2.totalFreezesDuration, totalPausesDuration: tmp2.totalPausesDuration, totalFramesDuration: tmp2.totalFramesDuration, totalDecodeTime } = found);
    if (totalDecodeTime == null) {
      totalDecodeTime = 0;
    }
    obj.totalDecodeTime = totalDecodeTime;
    let keyFramesDecoded = found.keyFramesDecoded;
    if (keyFramesDecoded == null) {
      keyFramesDecoded = null;
    }
    obj.keyframes = keyFramesDecoded;
    let num6 = found.passthroughCount;
    if (num6 == null) {
      num6 = 0;
    }
    obj.passthroughCount = num6;
    let num7 = found.decryptSuccessCount;
    if (num7 == null) {
      num7 = 0;
    }
    obj.cryptorSuccessCount = num7;
    let num8 = found.decryptFailureCount;
    if (num8 == null) {
      num8 = 0;
    }
    obj.cryptorFailureCount = num8;
    let num9 = found.decryptDuration;
    if (num9 == null) {
      num9 = 0;
    }
    obj.cryptorDuration = num9;
    let num10 = found.decryptAttempts;
    if (num10 == null) {
      num10 = 0;
    }
    obj.cryptorAttempts = num10;
    let num11 = found.decryptMissingKeyCount;
    if (num11 == null) {
      num11 = 0;
    }
    obj.cryptorMissingKeyCount = num11;
    let num12 = found.decryptInvalidNonceCount;
    if (num12 == null) {
      num12 = 0;
    }
    obj.cryptorInvalidNonceCount = num12;
    let num13 = found.sinkWantLocalAsInt;
    if (num13 == null) {
      num13 = 0;
    }
    obj.localWant = num13;
  }
  return obj;
};
RawVideoStats["parseOutboundStats"] = function parseOutboundStats(resolution, closure_1) {
  if (typeof RawVideoStats !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = Object.create(RawVideoStats.prototype);
  if (null != resolution) {
    obj = { bytes: null, framesCodec: null, framesCodecError: null, framesNetwork: null, packets: null, packetsLost: null, framesDropped: 0, networkFramesDropped: 0, resolution: null, minorResolution: null, majorResolution: null, timestamp: null, encoder: null, decoder: null, codecType: null, nackCount: null, pliCount: null, qpSum: null, freezeCount: null, pauseCount: 0, totalFreezesDuration: null, totalPausesDuration: 0, totalFramesDuration: null, totalDecodeTime: 0, outboundSinkWant: null, vmafScore: null, qualityDecodeErrors: null, qualityDecoderReboots: null, qualityScoreErrors: null, qualityFrameDrops: null, qualitySizeMismatches: null, psnrDb: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: null, cryptorSuccessCount: null, cryptorFailureCount: null, cryptorDuration: null, cryptorAttempts: null, cryptorMaxAttempts: null, cryptorMissingKeyCount: null, cryptorInvalidNonceCount: 0, localWant: 0, consecutiveStaticColorFrames: null, screenshareFramesUnique: 0 };
    ({ bytesSent: obj[0], framesEncoded: obj[1], framesSent } = resolution);
    if (framesSent == null) {
      framesSent = 0;
    }
    obj[3] = framesSent;
    ({ packetsSent: obj[4], packetsLost } = resolution);
    if (packetsLost == null) {
      packetsLost = 0;
    }
    obj[5] = packetsLost;
    let num = 0;
    if (null != resolution.resolution) {
      num = resolution.resolution.height;
    }
    obj[8] = num;
    let num2 = 0;
    if (null != resolution.resolution) {
      const _Math = Math;
      num2 = Math.min(resolution.resolution.height, resolution.resolution.width);
    }
    obj[9] = num2;
    let num3 = 0;
    if (null != resolution.resolution) {
      const _Math2 = Math;
      num3 = Math.max(resolution.resolution.height, resolution.resolution.width);
    }
    obj[10] = num3;
    obj[11] = closure_1;
    obj[12] = parseEncoder(resolution.encoderImplementationName);
    if (null == resolution.codec.name) {
      let AV1 = obj.UNKNOWN;
    } else {
      const formatted = str.toUpperCase();
      if ("H264" === formatted) {
        AV1 = obj.H264;
      } else if ("H265" === formatted) {
        AV1 = obj.H265;
      } else if ("VP8" === formatted) {
        AV1 = obj.VP8;
      } else if ("VP9" === formatted) {
        AV1 = obj.VP9;
      } else {
        if ("AV1" !== formatted) {
          if ("AV1X" !== formatted) {
            AV1 = obj.UNKNOWN;
          }
        }
        AV1 = obj.AV1;
      }
    }
    obj[14] = AV1;
    ({ nackCount: obj[15], pliCount: obj[16], qpSum: obj[17], freezeCount } = resolution);
    if (freezeCount == null) {
      freezeCount = 0;
    }
    obj[18] = freezeCount;
    let num4 = resolution.totalFreezesDuration;
    if (num4 == null) {
      num4 = 0;
    }
    obj[20] = num4;
    let num5 = resolution.totalFramesDuration;
    if (num5 == null) {
      num5 = 0;
    }
    obj[22] = num5;
    let sinkWantAsInt = resolution.sinkWantAsInt;
    if (sinkWantAsInt == null) {
      sinkWantAsInt = null;
    }
    obj[24] = sinkWantAsInt;
    let encoderQualityVmaf = resolution.encoderQualityVmaf;
    if (encoderQualityVmaf == null) {
      encoderQualityVmaf = null;
    }
    obj[25] = encoderQualityVmaf;
    let num6 = resolution.qualityDecodeErrors;
    if (num6 == null) {
      num6 = 0;
    }
    obj[26] = num6;
    let num7 = resolution.qualityDecoderReboots;
    if (num7 == null) {
      num7 = 0;
    }
    obj[27] = num7;
    let num8 = resolution.qualityScoreErrors;
    if (num8 == null) {
      num8 = 0;
    }
    obj[28] = num8;
    let num9 = resolution.qualityFrameDrops;
    if (num9 == null) {
      num9 = 0;
    }
    obj[29] = num9;
    let num10 = resolution.qualitySizeMismatches;
    if (num10 == null) {
      num10 = 0;
    }
    obj[30] = num10;
    let encoderQualityPsnr = resolution.encoderQualityPsnr;
    if (encoderQualityPsnr == null) {
      encoderQualityPsnr = null;
    }
    obj[31] = encoderQualityPsnr;
    let keyFramesEncoded = resolution.keyFramesEncoded;
    if (keyFramesEncoded == null) {
      keyFramesEncoded = null;
    }
    obj[32] = keyFramesEncoded;
    let prop = resolution.framesDroppedRateLimiter;
    if (prop == null) {
      prop = null;
    }
    obj[33] = prop;
    let prop1 = resolution.framesDroppedEncoderQueue;
    if (prop1 == null) {
      prop1 = null;
    }
    obj[34] = prop1;
    let prop2 = resolution.framesDroppedCongestionWindow;
    if (prop2 == null) {
      prop2 = null;
    }
    obj[35] = prop2;
    let framesDroppedEncoder = resolution.framesDroppedEncoder;
    if (framesDroppedEncoder == null) {
      framesDroppedEncoder = null;
    }
    obj[36] = framesDroppedEncoder;
    let num11 = resolution.passthroughCount;
    if (num11 == null) {
      num11 = 0;
    }
    obj[37] = num11;
    let num12 = resolution.encryptSuccessCount;
    if (num12 == null) {
      num12 = 0;
    }
    obj[38] = num12;
    let num13 = resolution.encryptFailureCount;
    if (num13 == null) {
      num13 = 0;
    }
    obj[39] = num13;
    let num14 = resolution.encryptDuration;
    if (num14 == null) {
      num14 = 0;
    }
    obj[40] = num14;
    let num15 = resolution.encryptAttempts;
    if (num15 == null) {
      num15 = 0;
    }
    obj[41] = num15;
    let num16 = resolution.encryptMaxAttempts;
    if (num16 == null) {
      num16 = 0;
    }
    obj[42] = num16;
    let num17 = resolution.encryptMissingKeyCount;
    if (num17 == null) {
      num17 = 0;
    }
    obj[43] = num17;
    let num18 = resolution.consecutiveStaticColorFrames;
    if (num18 == null) {
      num18 = 0;
    }
    obj[46] = num18;
  }
  return obj;
};
class InboundStats {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    values = Object.values(closure_12);
    obj.decoderBuckets = Object.fromEntries(values.map((item, index) => {
      const items = [item, 0];
      return items;
    }));
    obj.codecBuckets = { H264: 0, H265: 0, VP8: 0, VP9: 0, AV1: 0, UNKNOWN: 0 };
    obj.statsWindow = [];
    tmp2 = RawVideoStats;
    if (typeof RawVideoStats !== "function") {
      str = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj.previousAggregationStats = Object.create(tmp2.prototype);
    histogram = new require("getSamples").Histogram();
    obj.fpsHistogram = histogram;
    histogram1 = new require("getSamples").Histogram();
    obj.bitrateHistogram = histogram1;
    histogram2 = new require("getSamples").Histogram();
    obj.inboundBitrateEstimateHistogram = histogram2;
    histogram3 = new require("getSamples").Histogram();
    obj.resolutionHistogram = histogram3;
    histogram4 = new require("getSamples").Histogram();
    obj.localWantHistogram = histogram4;
    tmp8 = new require("getStats")();
    obj.systemResources = tmp8;
    obj.decoderCodec = closure_10.UNKNOWN;
    obj.aggregatedProperties = { framesCodec: 0, framesNetwork: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, framesCodecError: 0, bytes: 0, nackCount: 0, pliCount: 0, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, keyframes: 0, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, screenshareFramesUnique: 0 };
    obj.aggregationDuration = 0;
    obj.bitrateBuckets = {};
    obj.fpsBuckets = {};
    obj.resolutionBuckets = {};
    obj.resolutionTotal = 0;
    obj.minorResolutionTotal = 0;
    obj.majorResolutionTotal = 0;
    obj.intervalTotal = 0;
    obj.cryptorMaxAttempts = 0;
    obj.minWidth = null;
    obj.minHeight = null;
    obj.maxConsecutiveStaticColorFrames = 0;
    obj.videoStoppedReason = closure_15.None;
    obj.startTime = global.now();
    stopWatch = new require("sleep").StopWatch(global);
    obj.videoStoppedWatch = stopWatch;
    item = closure_4.forEach((item, index) => {
      obj.bitrateBuckets[item] = 0;
    });
    item1 = closure_5.forEach((item, index) => {
      obj.fpsBuckets[item] = 0;
    });
    item2 = closure_6.forEach((item, index) => {
      obj.resolutionBuckets[item] = 0;
    });
    return obj;
  }
}
const prototype = InboundStats.prototype;
Object.defineProperty(prototype, "isVideoStopped", {
  get: function isVideoStopped() {
    return this.videoStoppedReason !== obj3.None;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoStoppedDuration", {
  get: function videoStoppedDuration() {
    const videoStoppedWatch = this.videoStoppedWatch;
    return videoStoppedWatch.elapsed();
  },
  set: undefined
});
prototype["collectAggregationStats"] = function collectAggregationStats(parseInboundStatsResult, previousAggregationStats) {
  const self = this;
  closure_0 = parseInboundStatsResult;
  closure_1 = previousAggregationStats;
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let tmp5 = parseInboundStatsResult[nextResult];
    let tmp6 = tmp5;
    if (null !== tmp5) {
      let num = previousAggregationStats[tmp4];
      if (num == null) {
        num = 0;
      }
      let tmp8 = num;
      if (someResult) {
        if (!set.has(tmp4)) {
          let aggregatedProperties = self.aggregatedProperties;
          aggregatedProperties[tmp4] = aggregatedProperties[tmp4] + tmp6;
        }
      }
      if (tmp8 <= tmp6) {
        let diff = tmp6 - tmp8;
        self.aggregatedProperties[tmp4] = tmp14 + diff;
      }
      diff = tmp5;
    }
    continue;
  }
  someResult = closure_9.some((item, index) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      let num = previousAggregationStats[item];
      if (num == null) {
        num = 0;
      }
      tmp2 = num > tmp;
    }
    return tmp2;
  });
};
prototype["setVideoStopped"] = function setVideoStopped(arg0, SenderStopped) {
  const self = this;
  const videoStoppedReason = this.videoStoppedReason;
  if (arg0) {
    self.videoStoppedReason = videoStoppedReason | SenderStopped;
    const videoStoppedWatch2 = self.videoStoppedWatch;
    videoStoppedWatch2.start();
  } else {
    self.videoStoppedReason = videoStoppedReason & ~SenderStopped;
    if (self.videoStoppedReason === obj3.None) {
      const statsWindow = self.statsWindow;
      statsWindow.splice(0);
      const videoStoppedWatch = self.videoStoppedWatch;
      videoStoppedWatch.stop();
    }
  }
};
prototype["appendAndIncrementStats"] = function appendAndIncrementStats(parseInboundStatsResult) {
  const self = this;
  if (!this.isVideoStopped) {
    const statsWindow = self.statsWindow;
    statsWindow.push(parseInboundStatsResult);
    const result = self.collectAggregationStats(parseInboundStatsResult, self.previousAggregationStats);
    self.previousAggregationStats = parseInboundStatsResult;
    let tmp5 = null == self.cryptorFailureBeforeSuccessCount;
    if (tmp5) {
      tmp5 = parseInboundStatsResult.cryptorSuccessCount > 0;
    }
    if (tmp5) {
      let num2 = self.aggregatedProperties.cryptorFailureCount;
      if (num2 == null) {
        num2 = 0;
      }
      self.cryptorFailureBeforeSuccessCount = num2;
    }
    if (self.statsWindow.length >= 2) {
      self.aggregationDuration = self.aggregationDuration + (self.statsWindow[self.statsWindow.length - 1].timestamp - self.statsWindow[self.statsWindow.length - 2].timestamp);
      ({ timestamp, resolution } = self.statsWindow[self.statsWindow.length - 1]);
      ({ encoder, decoder, codecType } = self.statsWindow[self.statsWindow.length - 1]);
      const result1 = (timestamp - tmp16.timestamp) / 1000;
      self.intervalTotal = self.intervalTotal + result1;
      self.resolutionTotal = self.resolutionTotal + resolution * result1;
      self.minorResolutionTotal = self.minorResolutionTotal + self.statsWindow[self.statsWindow.length - 1].minorResolution * result1;
      self.majorResolutionTotal = self.majorResolutionTotal + self.statsWindow[self.statsWindow.length - 1].majorResolution * result1;
      const _Math2 = Math;
      ({ bytes, framesCodec, localWant } = self.statsWindow[self.statsWindow.length - 1]);
      self.cryptorMaxAttempts = Math.max(self.cryptorMaxAttempts, self.statsWindow[self.statsWindow.length - 1].cryptorMaxAttempts);
      if (null != encoder) {
        if (null != codecType) {
          if ("encoderBuckets" in self) {
            const encoderBuckets = self.encoderBuckets;
            encoderBuckets[encoder] = encoderBuckets[encoder] + result1;
            const codecBuckets = self.codecBuckets;
            codecBuckets[codecType] = codecBuckets[codecType] + result1;
            let tmp6 = null != tmp15.codecType;
            if (tmp6) {
              tmp6 = tmp15.codecType !== obj.UNKNOWN;
            }
            if (tmp6) {
              self.encoderCodec = tmp15.codecType;
            }
            let tmp8 = null != parseInboundStatsResult.vmafScore;
            if (tmp8) {
              tmp8 = parseInboundStatsResult.vmafScore >= 0;
            }
            if (tmp8) {
              self.vmafScoreNum = self.vmafScoreNum + 1;
              self.vmafScoreSum = self.vmafScoreSum + parseInboundStatsResult.vmafScore;
              const vmafHistogram = self.vmafHistogram;
              vmafHistogram.addSample(parseInboundStatsResult.vmafScore);
            }
            let tmp10 = null != parseInboundStatsResult.psnrDb;
            if (tmp10) {
              tmp10 = parseInboundStatsResult.psnrDb >= 0;
            }
            if (tmp10) {
              self.psnrDbNum = self.psnrDbNum + 1;
              self.psnrDbSum = self.psnrDbSum + parseInboundStatsResult.psnrDb;
              const psnrHistogram = self.psnrHistogram;
              psnrHistogram.addSample(parseInboundStatsResult.psnrDb);
            }
            let tmp12 = null != parseInboundStatsResult.outboundSinkWant;
            if (tmp12) {
              tmp12 = 0 !== parseInboundStatsResult.outboundSinkWant;
            }
            if (tmp12) {
              self.outboundSinkWantNum = self.outboundSinkWantNum + 1;
              self.outboundSinkWantSum = self.outboundSinkWantSum + parseInboundStatsResult.outboundSinkWant;
            }
            const _Math = Math;
            self.consecutiveStaticColorFramesMax = Math.max(self.consecutiveStaticColorFramesMax, parseInboundStatsResult.consecutiveStaticColorFrames);
          }
        }
      }
      if (null != decoder) {
        if (null != codecType) {
          if ("decoderBuckets" in self) {
            const decoderBuckets = self.decoderBuckets;
            decoderBuckets[decoder] = decoderBuckets[decoder] + result1;
            const codecBuckets2 = self.codecBuckets;
            codecBuckets2[codecType] = codecBuckets2[codecType] + result1;
            let tmp13 = null != tmp15.codecType;
            if (tmp13) {
              tmp13 = tmp15.codecType !== obj.UNKNOWN;
            }
            if (tmp13) {
              self.decoderCodec = tmp15.codecType;
            }
          }
        }
      }
      if (self.statsWindow.length >= 6) {
        ({ bytes: bytes2, framesCodec: framesCodec2, timestamp: timestamp2 } = self.statsWindow[self.statsWindow.length - 3]);
        const item = closure_6.forEach((item, index) => {
          if (resolution <= item) {
            const resolutionBuckets = self.resolutionBuckets;
            resolutionBuckets[item] = resolutionBuckets[item] + result1;
          }
        });
        const result2 = (timestamp - timestamp2) / 1000;
        const result3 = 8 * (bytes - bytes2) / result2;
        const result4 = (framesCodec - framesCodec2) / result2;
        const item1 = self.forEach((item, index) => {
          if (result3 <= item) {
            const bitrateBuckets = self.bitrateBuckets;
            bitrateBuckets[item] = bitrateBuckets[item] + result1;
          }
        });
        const item2 = closure_5.forEach((item, index) => {
          if (result4 <= item) {
            const fpsBuckets = self.fpsBuckets;
            fpsBuckets[item] = fpsBuckets[item] + result1;
          }
        });
        const resolutionHistogram = self.resolutionHistogram;
        resolutionHistogram.addSample(resolution);
        const bitrateHistogram = self.bitrateHistogram;
        bitrateHistogram.addSample(result3);
        const fpsHistogram = self.fpsHistogram;
        fpsHistogram.addSample(result4);
        const localWantHistogram = self.localWantHistogram;
        localWantHistogram.addSample(localWant);
        const statsWindow1 = self.statsWindow;
        statsWindow1.shift();
      }
    }
  }
};
prototype["addSystemResources"] = function addSystemResources() {
  const systemResources = this.systemResources;
  systemResources.takeSample();
};
prototype["appendTransportStats"] = function appendTransportStats(transport) {
  if (null != transport.inboundBitrateEstimate) {
    const self = this;
    const inboundBitrateEstimateHistogram = this.inboundBitrateEstimateHistogram;
    inboundBitrateEstimateHistogram.addSample(transport.inboundBitrateEstimate);
  }
};
prototype["getCodecsUsed"] = function getCodecsUsed() {
  set = new Set();
  const entries = Object.entries(this.codecBuckets);
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    let first = tmp5[0];
    if (tmp5[1] > 0) {
      let addResult = set.add(first);
    }
    continue;
  }
  return set;
};
let result = require("obj132").fileFinishedImporting("lib/VideoQualityStats.tsx");
class OutboundStats extends InboundStats {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    values = Object.values(closure_11);
    applyArgumentsResult.encoderBuckets = Object.fromEntries(values.map((item, index) => {
      const items = [item, 0];
      return items;
    }));
    applyArgumentsResult.encoderCodec = closure_10.UNKNOWN;
    applyArgumentsResult.targetFrames = 0;
    applyArgumentsResult.targetBytesMax = 0;
    applyArgumentsResult.targetBytesNetwork = 0;
    histogram = new require("getSamples").Histogram();
    applyArgumentsResult.targetBitrateHistogram = histogram;
    applyArgumentsResult.outboundBytesAvailable = 0;
    histogram1 = new require("getSamples").Histogram();
    applyArgumentsResult.outboundBandwidthSurplus = histogram1;
    applyArgumentsResult.averageEncodeTime = 0;
    applyArgumentsResult.vmafScoreSum = 0;
    applyArgumentsResult.vmafScoreNum = 0;
    histogram2 = new require("getSamples").Histogram();
    applyArgumentsResult.vmafHistogram = histogram2;
    applyArgumentsResult.psnrDbSum = 0;
    applyArgumentsResult.psnrDbNum = 0;
    histogram3 = new require("getSamples").Histogram();
    applyArgumentsResult.psnrHistogram = histogram3;
    applyArgumentsResult.qualityDecodeErrors = 0;
    applyArgumentsResult.qualityDecoderReboots = 0;
    applyArgumentsResult.qualityScoreErrors = 0;
    applyArgumentsResult.qualityFrameDrops = 0;
    applyArgumentsResult.qualitySizeMismatches = 0;
    applyArgumentsResult.outboundSinkWantSum = 0;
    applyArgumentsResult.outboundSinkWantNum = 0;
    applyArgumentsResult.framesDroppedRateLimiter = null;
    applyArgumentsResult.framesDroppedEncoderQueue = null;
    applyArgumentsResult.framesDroppedCongestionWindow = null;
    applyArgumentsResult.framesDroppedEncoder = null;
    applyArgumentsResult.consecutiveStaticColorFramesMax = 0;
    return applyArgumentsResult;
  }
}
OutboundStats.prototype["appendTargetRates"] = function appendTargetRates(arg0, currentCPUUsagePercent) {
  const self = this;
  if (this.statsWindow.length >= 2) {
    let num = arg0;
    if (arg0 == null) {
      num = 0;
    }
    let num2 = currentCPUUsagePercent;
    if (currentCPUUsagePercent == null) {
      num2 = 0;
    }
    let num3 = arg2;
    if (arg2 == null) {
      num3 = 0;
    }
    let num4 = arg3;
    if (arg3 == null) {
      num4 = 0;
    }
    const result = (self.statsWindow[self.statsWindow.length - 1].timestamp - self.statsWindow[self.statsWindow.length - 2].timestamp) / 1000;
    self.targetFrames = self.targetFrames + num * result;
    self.targetBytesNetwork = self.targetBytesNetwork + num2 / 8 * result;
    self.targetBytesMax = self.targetBytesMax + num3 / 8 * result;
    self.outboundBytesAvailable = self.outboundBytesAvailable + num4 / 8 * result;
    const targetBitrateHistogram = self.targetBitrateHistogram;
    targetBitrateHistogram.addSample(num2);
    const outboundBandwidthSurplus = self.outboundBandwidthSurplus;
    outboundBandwidthSurplus.addSample(num4 - num2);
  }
};

export const CodecTypes = obj;
export const Encoders = obj;
export const Decoders = obj;
export const VideoStoppedReasons = obj3;
export { parseEncoder };
export { parseDecoder };
export const parseCodecType = function parseCodecType(name) {
  if (null == name) {
    let AV1 = obj.UNKNOWN;
  } else {
    const formatted = name.toUpperCase();
    if ("H264" === formatted) {
      AV1 = obj.H264;
    } else if ("H265" === formatted) {
      AV1 = obj.H265;
    } else if ("VP8" === formatted) {
      AV1 = obj.VP8;
    } else if ("VP9" === formatted) {
      AV1 = obj.VP9;
    } else {
      if ("AV1" !== formatted) {
        if ("AV1X" !== formatted) {
          AV1 = obj.UNKNOWN;
        }
      }
      AV1 = obj.AV1;
    }
  }
  return AV1;
};
export { RawVideoStats };
export { InboundStats };
export { OutboundStats };