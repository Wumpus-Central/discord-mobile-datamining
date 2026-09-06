// === Module 7741: VideoQualityStats ===

// Module 7741 (VideoQualityStats)
import TimeUtils from "TimeUtils" /* 4589 */;
import Histogram from "Histogram" /* 7742 */;
import SystemResourcesDefault from "SystemResources" /* 7748 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function parseEncoder(encoderImplementationName) {
  if (null == encoderImplementationName) {
    return obj.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(closure_13);
    for (const item10012 of keys) {
      let formatted = arg0.toLowerCase();
      if (formatted.includes(item10012)) {
        obj.return();
        return closure_13[item10012];
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
    const keys = Object.keys(closure_14);
    for (const item10012 of keys) {
      let formatted = arg0.toLowerCase();
      if (formatted.includes(item10012)) {
        obj.return();
        return closure_14[item10012];
      }
    }
    return obj.UNCATEGORIZED;
  }
}
const React4 = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000];
const hasOwnProperty = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const timestampProducer = [720, 480, 360];
const dependencyMap = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "networkFramesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "totalDecodeTime", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "cryptorMissingKeyCount", "cryptorInvalidNonceCount", "qualityDecodeErrors", "qualityDecoderReboots", "qualityScoreErrors", "qualityFrameDrops", "qualitySizeMismatches", "screenshareFramesUnique"];
let set = new Set(["passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "cryptorMissingKeyCount", "cryptorInvalidNonceCount"]);
let closure_9 = ["bytes", "packets", "framesNetwork", "framesCodec"];
let obj = { H264: "H264", H265: "H265", VP8: "VP8", VP9: "VP9", AV1: "AV1", UNKNOWN: "UNKNOWN" };
obj = { NVIDIA_CUDA: "nvidia_cuda", NVIDIA_DIRECT_3D: "nvidia_direct_3d", NVIDIA_VULKAN: "nvidia_vulkan", OPENH264: "openh264", VIDEOTOOLBOX: "videotoolbox", AMD_DIRECT_3D: "amd_direct_3d", AMD_VAAPI: "amd_vaapi", INTEL: "intel", INTEL_DIRECT_3D: "intel_direct_3d", INTEL_VAAPI: "intel_vaapi", VP8_LIBVPX: "vp8_libvpx", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", WMF_SW: "wmf_sw", WMF_HW: "wmf_hw", WMF_DIRECT_3D: "wmf_direct_3d", WMF_DIRECT_3D_INTEL: "wmf_direct_3d_intel", WMF_DIRECT_3D_NVIDIA: "wmf_direct_3d_nvidia", WMF_DIRECT_3D_AMD: "wmf_direct_3d_amd", WMF_CHROME: "wmf_chrome", UNCATEGORIZED: "uncategorized", UNKNOWN: "unknown" };
obj = { VIDEOTOOLBOX: "videotoolbox", VP8_LIBVPX: "vp8_libvpx", ELECTRON: "electron", FFMPEG: "ffmpeg", DAV1D: "dav1d", WEBRTC: "WebRTC", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", UNCATEGORIZED: "uncategorized", D3D11VIDEODECODER: "d3d11videodecoder", ANDROID: "android", UNKNOWN: "unknown" };
let closure_13 = Object.freeze({ "mediafoundation direct3d intel": obj.WMF_DIRECT_3D_INTEL, "mediafoundation direct3d nvidia": obj.WMF_DIRECT_3D_NVIDIA, "mediafoundation direct3d amd": obj.WMF_DIRECT_3D_AMD, mediafoundationvideoencodeaccelerator: obj.WMF_CHROME, "nvidia: cuda": obj.NVIDIA_CUDA, "nvidia: direct3d": obj.NVIDIA_DIRECT_3D, "nvidia: vulkan": obj.NVIDIA_VULKAN, "amd: direct3d": obj.AMD_DIRECT_3D, "amd: vaapi": obj.AMD_VAAPI, "intel: direct3d": obj.INTEL_DIRECT_3D, "intel: vaapi": obj.INTEL_VAAPI, intel: obj.INTEL, videotoolbox: obj.VIDEOTOOLBOX, openh264: obj.OPENH264, libvpx: obj.VP8_LIBVPX, "c2.exynos": obj.EXYNOS, "omx.exynos": obj.EXYNOS, "c2.qti": obj.QUALCOMM, "omx.qcom": obj.QUALCOMM, "c2.mtk": obj.MEDIATEK, "omx.mtk": obj.MEDIATEK, "mediafoundation sw": obj.WMF_SW, "mediafoundation hw": obj.WMF_HW, "mediafoundation direct3d": obj.WMF_DIRECT_3D });
let closure_14 = Object.freeze({ videotoolbox: obj.VIDEOTOOLBOX, libvpx: obj.VP8_LIBVPX, electron: obj.ELECTRON, ffmpeg: obj.FFMPEG, dav1d: obj.DAV1D, webrtc: obj.WEBRTC, "c2.exynos": obj.EXYNOS, "omx.exynos": obj.EXYNOS, "c2.qti": obj.QUALCOMM, "omx.qcom": obj.QUALCOMM, "c2.mtk": obj.MEDIATEK, "omx.mtk": obj.MEDIATEK, d3d11videodecoder: obj.D3D11VIDEODECODER, "c2.android": obj.ANDROID, "omx.google": obj.ANDROID });
const obj3 = { None: 0, [0]: "None", ClientSideDisableVideo: 1, [1]: "ClientSideDisableVideo", SenderStopped: 2, [2]: "SenderStopped" };
let RawVideoStats;
class RawVideoStats {
  constructor() {
    return Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
  }
}
RawVideoStats["parseInboundStats"] = function parseInboundStats(found, timestamp) {
  if (typeof RawVideoStats === "function") {
    const merged = Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
    if (null != found) {
      ({ bytesReceived: tmp3.bytes, framesDecoded: tmp3.framesCodec, framesDecodeErrors } = found);
      if (framesDecodeErrors == null) {
        framesDecodeErrors = null;
      }
      merged.framesCodecError = framesDecodeErrors;
      ({ framesReceived: tmp3.framesNetwork, packetsReceived: tmp3.packets, packetsLost: tmp3.packetsLost, framesDropped } = found);
      if (framesDropped == null) {
        framesDropped = 0;
      }
      merged.framesDropped = framesDropped;
      let num = found.networkFramesDropped;
      if (num == null) {
        num = 0;
      }
      merged.networkFramesDropped = num;
      let num3 = 0;
      if (null != found.resolution) {
        num3 = found.resolution.height;
      }
      merged.resolution = num3;
      let num4 = 0;
      if (null != found.resolution) {
        const _Math = Math;
        num4 = Math.min(found.resolution.height, found.resolution.width);
      }
      merged.minorResolution = num4;
      let num5 = 0;
      if (null != found.resolution) {
        const _Math2 = Math;
        num5 = Math.max(found.resolution.height, found.resolution.width);
      }
      merged.majorResolution = num5;
      merged.timestamp = timestamp;
      ({ nackCount: tmp3.nackCount, pliCount: tmp3.pliCount } = found);
      merged.decoder = parseDecoder(found.decoderImplementationName);
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
      merged.codecType = AV1;
      merged.qpSum = 0;
      ({ freezeCount: tmp3.freezeCount, pauseCount: tmp3.pauseCount, totalFreezesDuration: tmp3.totalFreezesDuration, totalPausesDuration: tmp3.totalPausesDuration, totalFramesDuration: tmp3.totalFramesDuration, totalDecodeTime } = found);
      if (totalDecodeTime == null) {
        totalDecodeTime = 0;
      }
      merged.totalDecodeTime = totalDecodeTime;
      let keyFramesDecoded = found.keyFramesDecoded;
      if (keyFramesDecoded == null) {
        keyFramesDecoded = null;
      }
      merged.keyframes = keyFramesDecoded;
      let num6 = found.passthroughCount;
      if (num6 == null) {
        num6 = 0;
      }
      merged.passthroughCount = num6;
      let num7 = found.decryptSuccessCount;
      if (num7 == null) {
        num7 = 0;
      }
      merged.cryptorSuccessCount = num7;
      let num8 = found.decryptFailureCount;
      if (num8 == null) {
        num8 = 0;
      }
      merged.cryptorFailureCount = num8;
      let num9 = found.decryptDuration;
      if (num9 == null) {
        num9 = 0;
      }
      merged.cryptorDuration = num9;
      let num10 = found.decryptAttempts;
      if (num10 == null) {
        num10 = 0;
      }
      merged.cryptorAttempts = num10;
      let num11 = found.decryptMissingKeyCount;
      if (num11 == null) {
        num11 = 0;
      }
      merged.cryptorMissingKeyCount = num11;
      let num12 = found.decryptInvalidNonceCount;
      if (num12 == null) {
        num12 = 0;
      }
      merged.cryptorInvalidNonceCount = num12;
      let num13 = found.sinkWantLocalAsInt;
      if (num13 == null) {
        num13 = 0;
      }
      merged.localWant = num13;
    }
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
RawVideoStats["parseOutboundStats"] = function parseOutboundStats(resolution, timestamp) {
  if (typeof RawVideoStats === "function") {
    let merged = Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
    if (null != resolution) {
      obj = { bytes: null, framesCodec: null, framesCodecError: null, framesNetwork: null, packets: null, packetsLost: null, framesDropped: 0, networkFramesDropped: 0, resolution: null, minorResolution: null, majorResolution: null, timestamp: null, encoder: null, decoder: null, codecType: null, nackCount: null, pliCount: null, qpSum: null, freezeCount: null, pauseCount: 0, totalFreezesDuration: null, totalPausesDuration: 0, totalFramesDuration: null, totalDecodeTime: 0, outboundSinkWant: null, vmafScore: null, qualityDecodeErrors: null, qualityDecoderReboots: null, qualityScoreErrors: null, qualityFrameDrops: null, qualitySizeMismatches: null, psnrDb: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: null, cryptorSuccessCount: null, cryptorFailureCount: null, cryptorDuration: null, cryptorAttempts: null, cryptorMaxAttempts: null, cryptorMissingKeyCount: null, cryptorInvalidNonceCount: 0, localWant: 0, consecutiveStaticColorFrames: null, screenshareFramesUnique: 0 };
      ({ bytesSent: obj.bytes, framesEncoded: obj.framesCodec, framesSent } = resolution);
      if (framesSent == null) {
        framesSent = 0;
      }
      obj.framesNetwork = framesSent;
      ({ packetsSent: obj.packets, packetsLost } = resolution);
      if (packetsLost == null) {
        packetsLost = 0;
      }
      obj.packetsLost = packetsLost;
      let num = 0;
      if (null != resolution.resolution) {
        num = resolution.resolution.height;
      }
      obj.resolution = num;
      let num2 = 0;
      if (null != resolution.resolution) {
        const _Math = Math;
        num2 = Math.min(resolution.resolution.height, resolution.resolution.width);
      }
      obj.minorResolution = num2;
      let num3 = 0;
      if (null != resolution.resolution) {
        const _Math2 = Math;
        num3 = Math.max(resolution.resolution.height, resolution.resolution.width);
      }
      obj.majorResolution = num3;
      obj.timestamp = timestamp;
      obj.encoder = parseEncoder(resolution.encoderImplementationName);
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
      obj.codecType = AV1;
      ({ nackCount: obj.nackCount, pliCount: obj.pliCount, qpSum: obj.qpSum, freezeCount } = resolution);
      if (freezeCount == null) {
        freezeCount = 0;
      }
      obj.freezeCount = freezeCount;
      let num4 = resolution.totalFreezesDuration;
      if (num4 == null) {
        num4 = 0;
      }
      obj.totalFreezesDuration = num4;
      let num5 = resolution.totalFramesDuration;
      if (num5 == null) {
        num5 = 0;
      }
      obj.totalFramesDuration = num5;
      let sinkWantAsInt = resolution.sinkWantAsInt;
      if (sinkWantAsInt == null) {
        sinkWantAsInt = null;
      }
      obj.outboundSinkWant = sinkWantAsInt;
      let encoderQualityVmaf = resolution.encoderQualityVmaf;
      if (encoderQualityVmaf == null) {
        encoderQualityVmaf = null;
      }
      obj.vmafScore = encoderQualityVmaf;
      let num6 = resolution.qualityDecodeErrors;
      if (num6 == null) {
        num6 = 0;
      }
      obj.qualityDecodeErrors = num6;
      let num7 = resolution.qualityDecoderReboots;
      if (num7 == null) {
        num7 = 0;
      }
      obj.qualityDecoderReboots = num7;
      let num8 = resolution.qualityScoreErrors;
      if (num8 == null) {
        num8 = 0;
      }
      obj.qualityScoreErrors = num8;
      let num9 = resolution.qualityFrameDrops;
      if (num9 == null) {
        num9 = 0;
      }
      obj.qualityFrameDrops = num9;
      let num10 = resolution.qualitySizeMismatches;
      if (num10 == null) {
        num10 = 0;
      }
      obj.qualitySizeMismatches = num10;
      let encoderQualityPsnr = resolution.encoderQualityPsnr;
      if (encoderQualityPsnr == null) {
        encoderQualityPsnr = null;
      }
      obj.psnrDb = encoderQualityPsnr;
      let keyFramesEncoded = resolution.keyFramesEncoded;
      if (keyFramesEncoded == null) {
        keyFramesEncoded = null;
      }
      obj.keyframes = keyFramesEncoded;
      let prop = resolution.framesDroppedRateLimiter;
      if (prop == null) {
        prop = null;
      }
      obj.framesDroppedRateLimiter = prop;
      let prop1 = resolution.framesDroppedEncoderQueue;
      if (prop1 == null) {
        prop1 = null;
      }
      obj.framesDroppedEncoderQueue = prop1;
      let prop2 = resolution.framesDroppedCongestionWindow;
      if (prop2 == null) {
        prop2 = null;
      }
      obj.framesDroppedCongestionWindow = prop2;
      let framesDroppedEncoder = resolution.framesDroppedEncoder;
      if (framesDroppedEncoder == null) {
        framesDroppedEncoder = null;
      }
      obj.framesDroppedEncoder = framesDroppedEncoder;
      let num11 = resolution.passthroughCount;
      if (num11 == null) {
        num11 = 0;
      }
      obj.passthroughCount = num11;
      let num12 = resolution.encryptSuccessCount;
      if (num12 == null) {
        num12 = 0;
      }
      obj.cryptorSuccessCount = num12;
      let num13 = resolution.encryptFailureCount;
      if (num13 == null) {
        num13 = 0;
      }
      obj.cryptorFailureCount = num13;
      let num14 = resolution.encryptDuration;
      if (num14 == null) {
        num14 = 0;
      }
      obj.cryptorDuration = num14;
      let num15 = resolution.encryptAttempts;
      if (num15 == null) {
        num15 = 0;
      }
      obj.cryptorAttempts = num15;
      let num16 = resolution.encryptMaxAttempts;
      if (num16 == null) {
        num16 = 0;
      }
      obj.cryptorMaxAttempts = num16;
      let num17 = resolution.encryptMissingKeyCount;
      if (num17 == null) {
        num17 = 0;
      }
      obj.cryptorMissingKeyCount = num17;
      let num18 = resolution.consecutiveStaticColorFrames;
      if (num18 == null) {
        num18 = 0;
      }
      obj.consecutiveStaticColorFrames = num18;
      merged = obj;
    }
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
class InboundStats {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    values = Object.values(closure_12);
    obj.decoderBuckets = Object.fromEntries(values.map((item) => {
      const items = [item, 0];
      return items;
    }));
    obj.codecBuckets = { H264: 0, H265: 0, VP8: 0, VP9: 0, AV1: 0, UNKNOWN: 0 };
    obj.statsWindow = [];
    if (typeof RawVideoStats === "function") {
      tmp3 = global;
      obj.previousAggregationStats = Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
      tmp4 = closure_0;
      tmp5 = closure_2;
      tmp6 = new.target;
      tmp7 = new.target;
      histogram = new closure_0(closure_2[1]).Histogram();
      tmp9 = histogram;
      obj.fpsHistogram = histogram;
      tmp10 = new.target;
      tmp11 = new.target;
      histogram1 = new closure_0(closure_2[1]).Histogram();
      tmp13 = histogram1;
      obj.bitrateHistogram = histogram1;
      tmp14 = new.target;
      tmp15 = new.target;
      histogram2 = new closure_0(closure_2[1]).Histogram();
      tmp17 = histogram2;
      obj.inboundBitrateEstimateHistogram = histogram2;
      tmp18 = new.target;
      tmp19 = new.target;
      histogram3 = new closure_0(closure_2[1]).Histogram();
      tmp21 = histogram3;
      obj.resolutionHistogram = histogram3;
      tmp22 = new.target;
      tmp23 = new.target;
      histogram4 = new closure_0(closure_2[1]).Histogram();
      tmp25 = histogram4;
      obj.localWantHistogram = histogram4;
      tmp26 = closure_1;
      tmp27 = new.target;
      tmp28 = new.target;
      tmp29 = new closure_1(closure_2[2])();
      tmp30 = tmp29;
      obj.systemResources = tmp29;
      tmp31 = closure_10;
      obj.decoderCodec = closure_10.UNKNOWN;
      obj.aggregatedProperties = { framesCodec: 0, framesNetwork: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, framesCodecError: 0, bytes: 0, nackCount: 0, pliCount: 0, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, keyframes: 0, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, screenshareFramesUnique: 0 };
      num = 0;
      obj.aggregationDuration = 0;
      obj.bitrateBuckets = {};
      obj.fpsBuckets = {};
      obj.resolutionBuckets = {};
      obj.resolutionTotal = 0;
      obj.minorResolutionTotal = 0;
      obj.majorResolutionTotal = 0;
      obj.intervalTotal = 0;
      obj.cryptorMaxAttempts = 0;
      tmp32 = null;
      obj.minWidth = null;
      obj.minHeight = null;
      obj.maxConsecutiveStaticColorFrames = 0;
      tmp33 = closure_15;
      obj.videoStoppedReason = closure_15.None;
      obj.startTime = global.now();
      tmp34 = new.target;
      tmp35 = new.target;
      tmp36 = global;
      stopWatch = new closure_0(closure_2[3]).StopWatch(global);
      tmp38 = stopWatch;
      obj.videoStoppedWatch = stopWatch;
      tmp39 = closure_4;
      item = closure_4.forEach((item) => {
        obj.bitrateBuckets[item] = 0;
      });
      tmp41 = closure_5;
      item1 = closure_5.forEach((item) => {
        obj.fpsBuckets[item] = 0;
      });
      tmp43 = closure_6;
      item2 = closure_6.forEach((item) => {
        obj.resolutionBuckets[item] = 0;
      });
      return obj;
    } else {
      str = "Trying to call a non-function";
      throw new TypeError("Trying to call a non-function");
    }
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
        const item = closure_6.forEach((item) => {
          if (resolution <= item) {
            const resolutionBuckets = self.resolutionBuckets;
            resolutionBuckets[item] = resolutionBuckets[item] + result1;
          }
        });
        const result2 = (timestamp - timestamp2) / 1000;
        const result3 = 8 * (bytes - bytes2) / result2;
        const result4 = (framesCodec - framesCodec2) / result2;
        const item1 = closure_4.forEach((item) => {
          if (result3 <= item) {
            const bitrateBuckets = self.bitrateBuckets;
            bitrateBuckets[item] = bitrateBuckets[item] + result1;
          }
        });
        const item2 = closure_5.forEach((item) => {
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
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    if (tmp5[1] > 0) {
      let addResult = set.add(first);
    }
    continue;
  }
  return set;
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/VideoQualityStats.tsx");
class OutboundStats extends InboundStats {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    values = Object.values(closure_11);
    applyArgumentsResult.encoderBuckets = Object.fromEntries(values.map((item) => {
      const items = [item, 0];
      return items;
    }));
    applyArgumentsResult.encoderCodec = closure_10.UNKNOWN;
    applyArgumentsResult.targetFrames = 0;
    applyArgumentsResult.targetBytesMax = 0;
    applyArgumentsResult.targetBytesNetwork = 0;
    histogram = new closure_0(closure_2[1]).Histogram();
    applyArgumentsResult.targetBitrateHistogram = histogram;
    applyArgumentsResult.outboundBytesAvailable = 0;
    histogram1 = new closure_0(closure_2[1]).Histogram();
    applyArgumentsResult.outboundBandwidthSurplus = histogram1;
    applyArgumentsResult.averageEncodeTime = 0;
    applyArgumentsResult.vmafScoreSum = 0;
    applyArgumentsResult.vmafScoreNum = 0;
    histogram2 = new closure_0(closure_2[1]).Histogram();
    applyArgumentsResult.vmafHistogram = histogram2;
    applyArgumentsResult.psnrDbSum = 0;
    applyArgumentsResult.psnrDbNum = 0;
    histogram3 = new closure_0(closure_2[1]).Histogram();
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
OutboundStats.prototype["appendTargetRates"] = function appendTargetRates(arg0, currentCPUUsagePercent, arg2, arg3) {
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