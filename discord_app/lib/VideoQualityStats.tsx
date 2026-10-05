// === Module 7232: VideoQualityStats ===

// Module 7232 (VideoQualityStats)
import TimeUtils from "TimeUtils" /* 4919 */;
import Histogram from "Histogram" /* 7233 */;
import SystemResourcesDefault from "SystemResources" /* 7239 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function parseEncoder(encoderImplementationName) {
  if (null == encoderImplementationName) {
    return obj2.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(closure_13);
    for (const item10012 of keys) {
      let formatted = encoderImplementationName.toLowerCase();
      if (formatted.includes(item10012)) {
        let tmp8 = closure_13[item10012];
        obj.return();
        return tmp8;
      }
    }
    return obj2.UNCATEGORIZED;
  }
}
function parseDecoder(decoderImplementationName) {
  if (null == decoderImplementationName) {
    return obj3.UNKNOWN;
  } else {
    const _Object = Object;
    const keys = Object.keys(closure_14);
    for (const item10012 of keys) {
      let formatted = decoderImplementationName.toLowerCase();
      if (formatted.includes(item10012)) {
        let tmp8 = closure_14[item10012];
        obj.return();
        return tmp8;
      }
    }
    return obj3.UNCATEGORIZED;
  }
}
const React3 = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000];
const hasOwnProperty = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const metroRequire = [720, 480, 360];
const metroImportDefault = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "networkFramesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "totalDecodeTime", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "cryptorMissingKeyCount", "cryptorInvalidNonceCount", "qualityDecodeErrors", "qualityDecoderReboots", "qualityScoreErrors", "qualityFrameDrops", "qualitySizeMismatches", "screenshareFramesUnique"];
let set = new Set(["passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "cryptorMissingKeyCount", "cryptorInvalidNonceCount"]);
const React4 = ["bytes", "packets", "framesNetwork", "framesCodec"];
const CodecTypes = { H264: "H264", H265: "H265", VP8: "VP8", VP9: "VP9", AV1: "AV1", UNKNOWN: "UNKNOWN" };
const obj2 = { NVIDIA_CUDA: "nvidia_cuda", NVIDIA_DIRECT_3D: "nvidia_direct_3d", NVIDIA_VULKAN: "nvidia_vulkan", OPENH264: "openh264", VIDEOTOOLBOX: "videotoolbox", AMD_DIRECT_3D: "amd_direct_3d", AMD_VAAPI: "amd_vaapi", INTEL: "intel", INTEL_DIRECT_3D: "intel_direct_3d", INTEL_VAAPI: "intel_vaapi", VP8_LIBVPX: "vp8_libvpx", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", WMF_SW: "wmf_sw", WMF_HW: "wmf_hw", WMF_DIRECT_3D: "wmf_direct_3d", WMF_DIRECT_3D_INTEL: "wmf_direct_3d_intel", WMF_DIRECT_3D_NVIDIA: "wmf_direct_3d_nvidia", WMF_DIRECT_3D_AMD: "wmf_direct_3d_amd", WMF_CHROME: "wmf_chrome", UNCATEGORIZED: "uncategorized", UNKNOWN: "unknown" };
const obj3 = { VIDEOTOOLBOX: "videotoolbox", VP8_LIBVPX: "vp8_libvpx", ELECTRON: "electron", FFMPEG: "ffmpeg", DAV1D: "dav1d", WEBRTC: "WebRTC", EXYNOS: "exynos", QUALCOMM: "qualcomm", MEDIATEK: "mediatek", UNCATEGORIZED: "uncategorized", D3D11VIDEODECODER: "d3d11videodecoder", ANDROID: "android", UNKNOWN: "unknown" };
const obj4 = { "mediafoundation direct3d intel": obj2.WMF_DIRECT_3D_INTEL, "mediafoundation direct3d nvidia": obj2.WMF_DIRECT_3D_NVIDIA, "mediafoundation direct3d amd": obj2.WMF_DIRECT_3D_AMD, mediafoundationvideoencodeaccelerator: obj2.WMF_CHROME, "nvidia: cuda": obj2.NVIDIA_CUDA, "nvidia: direct3d": obj2.NVIDIA_DIRECT_3D, "nvidia: vulkan": obj2.NVIDIA_VULKAN, "amd: direct3d": obj2.AMD_DIRECT_3D, "amd: vaapi": obj2.AMD_VAAPI, "intel: direct3d": obj2.INTEL_DIRECT_3D, "intel: vaapi": obj2.INTEL_VAAPI, intel: obj2.INTEL, videotoolbox: obj2.VIDEOTOOLBOX, openh264: obj2.OPENH264, libvpx: obj2.VP8_LIBVPX, "c2.exynos": obj2.EXYNOS, "omx.exynos": obj2.EXYNOS, "c2.qti": obj2.QUALCOMM, "omx.qcom": obj2.QUALCOMM, "c2.mtk": obj2.MEDIATEK, "omx.mtk": obj2.MEDIATEK, "mediafoundation sw": obj2.WMF_SW, "mediafoundation hw": obj2.WMF_HW, "mediafoundation direct3d": obj2.WMF_DIRECT_3D };
let closure_13 = Object.freeze(obj4);
const obj5 = { videotoolbox: obj3.VIDEOTOOLBOX, libvpx: obj3.VP8_LIBVPX, electron: obj3.ELECTRON, ffmpeg: obj3.FFMPEG, dav1d: obj3.DAV1D, webrtc: obj3.WEBRTC, "c2.exynos": obj3.EXYNOS, "omx.exynos": obj3.EXYNOS, "c2.qti": obj3.QUALCOMM, "omx.qcom": obj3.QUALCOMM, "c2.mtk": obj3.MEDIATEK, "omx.mtk": obj3.MEDIATEK, d3d11videodecoder: obj3.D3D11VIDEODECODER, "c2.android": obj3.ANDROID, "omx.google": obj3.ANDROID };
let closure_14 = Object.freeze(obj5);
const obj6 = { None: 0, [0]: "None", ClientSideDisableVideo: 1, [1]: "ClientSideDisableVideo", SenderStopped: 2, [2]: "SenderStopped" };
class RawVideoStats {
  constructor() {
    return Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
  }
  static parseInboundStats(found, timestamp) {
    let framesDecodeErrors;
    let framesDropped;
    let totalDecodeTime;
    if (typeof RawVideoStats === "function") {
      const merged = Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
      if (null != found) {
        let AV1;
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
          AV1 = obj.UNKNOWN;
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
  }
  static parseOutboundStats(resolution, timestamp) {
    let AV1;
    let encoderQualityPsnr;
    let encoderQualityVmaf;
    let framesDroppedEncoder;
    let framesSent;
    let freezeCount;
    let keyFramesEncoded;
    let num;
    let num10;
    let num11;
    let num12;
    let num13;
    let num14;
    let num15;
    let num16;
    let num17;
    let num18;
    let num2;
    let num3;
    let num4;
    let num5;
    let num6;
    let num7;
    let num8;
    let num9;
    let packetsLost;
    let prop;
    let prop1;
    let prop2;
    let sinkWantAsInt;
    if (typeof RawVideoStats === "function") {
      let merged = Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
      if (null != resolution) {
        const obj = { bytes: null, framesCodec: null, framesCodecError: null, framesNetwork: framesSent, packets: null, packetsLost, framesDropped: 0, networkFramesDropped: 0, resolution: num, minorResolution: num2, majorResolution: num3, timestamp, encoder: parseEncoder(resolution.encoderImplementationName), decoder: null, codecType: AV1, nackCount: null, pliCount: null, qpSum: null, freezeCount, pauseCount: 0, totalFreezesDuration: num4, totalPausesDuration: 0, totalFramesDuration: num5, totalDecodeTime: 0, outboundSinkWant: sinkWantAsInt, vmafScore: encoderQualityVmaf, qualityDecodeErrors: num6, qualityDecoderReboots: num7, qualityScoreErrors: num8, qualityFrameDrops: num9, qualitySizeMismatches: num10, psnrDb: encoderQualityPsnr, keyframes: keyFramesEncoded, framesDroppedRateLimiter: prop, framesDroppedEncoderQueue: prop1, framesDroppedCongestionWindow: prop2, framesDroppedEncoder, passthroughCount: num11, cryptorSuccessCount: num12, cryptorFailureCount: num13, cryptorDuration: num14, cryptorAttempts: num15, cryptorMaxAttempts: num16, cryptorMissingKeyCount: num17, cryptorInvalidNonceCount: 0, localWant: 0, consecutiveStaticColorFrames: num18, screenshareFramesUnique: 0 };
        ({ bytesSent: obj.bytes, framesEncoded: obj.framesCodec, framesSent } = resolution);
        if (framesSent == null) {
          framesSent = 0;
        }
        ({ packetsSent: obj.packets, packetsLost } = resolution);
        if (packetsLost == null) {
          packetsLost = 0;
        }
        num = 0;
        if (null != resolution.resolution) {
          num = resolution.resolution.height;
        }
        num2 = 0;
        if (null != resolution.resolution) {
          const _Math = Math;
          num2 = Math.min(resolution.resolution.height, resolution.resolution.width);
        }
        num3 = 0;
        if (null != resolution.resolution) {
          const _Math2 = Math;
          num3 = Math.max(resolution.resolution.height, resolution.resolution.width);
        }
        if (null == resolution.codec.name) {
          AV1 = obj.UNKNOWN;
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
        ({ nackCount: obj.nackCount, pliCount: obj.pliCount, qpSum: obj.qpSum, freezeCount } = resolution);
        if (freezeCount == null) {
          freezeCount = 0;
        }
        num4 = resolution.totalFreezesDuration;
        if (num4 == null) {
          num4 = 0;
        }
        num5 = resolution.totalFramesDuration;
        if (num5 == null) {
          num5 = 0;
        }
        sinkWantAsInt = resolution.sinkWantAsInt;
        if (sinkWantAsInt == null) {
          sinkWantAsInt = null;
        }
        encoderQualityVmaf = resolution.encoderQualityVmaf;
        if (encoderQualityVmaf == null) {
          encoderQualityVmaf = null;
        }
        num6 = resolution.qualityDecodeErrors;
        if (num6 == null) {
          num6 = 0;
        }
        num7 = resolution.qualityDecoderReboots;
        if (num7 == null) {
          num7 = 0;
        }
        num8 = resolution.qualityScoreErrors;
        if (num8 == null) {
          num8 = 0;
        }
        num9 = resolution.qualityFrameDrops;
        if (num9 == null) {
          num9 = 0;
        }
        num10 = resolution.qualitySizeMismatches;
        if (num10 == null) {
          num10 = 0;
        }
        encoderQualityPsnr = resolution.encoderQualityPsnr;
        if (encoderQualityPsnr == null) {
          encoderQualityPsnr = null;
        }
        keyFramesEncoded = resolution.keyFramesEncoded;
        if (keyFramesEncoded == null) {
          keyFramesEncoded = null;
        }
        prop = resolution.framesDroppedRateLimiter;
        if (prop == null) {
          prop = null;
        }
        prop1 = resolution.framesDroppedEncoderQueue;
        if (prop1 == null) {
          prop1 = null;
        }
        prop2 = resolution.framesDroppedCongestionWindow;
        if (prop2 == null) {
          prop2 = null;
        }
        framesDroppedEncoder = resolution.framesDroppedEncoder;
        if (framesDroppedEncoder == null) {
          framesDroppedEncoder = null;
        }
        num11 = resolution.passthroughCount;
        if (num11 == null) {
          num11 = 0;
        }
        num12 = resolution.encryptSuccessCount;
        if (num12 == null) {
          num12 = 0;
        }
        num13 = resolution.encryptFailureCount;
        if (num13 == null) {
          num13 = 0;
        }
        num14 = resolution.encryptDuration;
        if (num14 == null) {
          num14 = 0;
        }
        num15 = resolution.encryptAttempts;
        if (num15 == null) {
          num15 = 0;
        }
        num16 = resolution.encryptMaxAttempts;
        if (num16 == null) {
          num16 = 0;
        }
        num17 = resolution.encryptMissingKeyCount;
        if (num17 == null) {
          num17 = 0;
        }
        num18 = resolution.consecutiveStaticColorFrames;
        if (num18 == null) {
          num18 = 0;
        }
        merged = obj;
      }
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
class InboundStats {
  constructor(timestampProducer) {
    const obj = Object.create(new.target.prototype);
    const values = Object.values(obj3);
    obj.decoderBuckets = fromEntries(values.map((item) => {
      const items = [item, 0];
      return items;
    }));
    obj.codecBuckets = { H264: 0, H265: 0, VP8: 0, VP9: 0, AV1: 0, UNKNOWN: 0 };
    obj.statsWindow = [];
    if (typeof RawVideoStats === "function") {
      obj.previousAggregationStats = Object.assign({ bytes: 0, framesCodec: 0, framesCodecError: null, framesNetwork: 0, resolution: 0, minorResolution: 0, majorResolution: 0, timestamp: 0, packets: 0, packetsLost: 0, framesDropped: 0, networkFramesDropped: 0, nackCount: 0, pliCount: 0, encoder: null, decoder: null, codecType: null, qpSum: 0, freezeCount: 0, pauseCount: 0, totalFreezesDuration: 0, totalPausesDuration: 0, totalFramesDuration: 0, totalDecodeTime: 0, vmafScore: null, psnrDb: null, outboundSinkWant: null, keyframes: null, framesDroppedRateLimiter: null, framesDroppedEncoderQueue: null, framesDroppedCongestionWindow: null, framesDroppedEncoder: null, passthroughCount: 0, cryptorSuccessCount: 0, cryptorFailureCount: 0, cryptorDuration: 0, cryptorAttempts: 0, cryptorMaxAttempts: 0, cryptorMissingKeyCount: 0, cryptorInvalidNonceCount: 0, qualityDecodeErrors: 0, qualityDecoderReboots: 0, qualityScoreErrors: 0, qualityFrameDrops: 0, qualitySizeMismatches: 0, localWant: 0, consecutiveStaticColorFrames: 0, screenshareFramesUnique: 0 });
      const self = this;
      const self2 = this;
      const histogram = new Histogram.Histogram();
      obj.fpsHistogram = histogram;
      const self3 = this;
      const self4 = this;
      const histogram1 = new Histogram.Histogram();
      obj.bitrateHistogram = histogram1;
      const self5 = this;
      const self6 = this;
      const histogram2 = new Histogram.Histogram();
      obj.inboundBitrateEstimateHistogram = histogram2;
      const self7 = this;
      const self8 = this;
      const histogram3 = new Histogram.Histogram();
      obj.resolutionHistogram = histogram3;
      const self9 = this;
      const self10 = this;
      const histogram4 = new Histogram.Histogram();
      obj.localWantHistogram = histogram4;
      const self11 = this;
      const self12 = this;
      obj.systemResources = new SystemResourcesDefault();
      obj.decoderCodec = obj.UNKNOWN;
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
      obj.videoStoppedReason = obj6.None;
      const tmp17 = new SystemResourcesDefault();
      obj.startTime = timestampProducer.now();
      const self13 = this;
      const self14 = this;
      const stopWatch = new TimeUtils.StopWatch(timestampProducer);
      obj.videoStoppedWatch = stopWatch;
      const item = closure_4.forEach((item) => {
        obj.bitrateBuckets[item] = 0;
      });
      const item1 = closure_5.forEach((item) => {
        obj.fpsBuckets[item] = 0;
      });
      const item2 = closure_6.forEach((item) => {
        obj.resolutionBuckets[item] = 0;
      });
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  collectAggregationStats(parseInboundStatsResult, previousAggregationStats) {
    const self = this;
    let closure_0 = parseInboundStatsResult;
    let closure_1 = previousAggregationStats;
    const someResult = closure_9.some((item) => {
      let tmp2 = null != tmp;
      if (tmp2) {
        let num = closure_1[item];
        if (num == null) {
          num = 0;
        }
        tmp2 = num > tmp;
      }
      return tmp2;
    });
    const iter = closure_7[Symbol.iterator]();
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
        let aggregatedProperties2 = self.aggregatedProperties;
        if (tmp8 > tmp6) {
          if ("packetsLost" !== tmp4) {
            let diff = tmp5;
            aggregatedProperties2[tmp4] = tmp14 + diff;
          }
        }
        diff = tmp6 - tmp8;
      }
      continue;
    }
  }
  setVideoStopped(arg0, SenderStopped) {
    const self = this;
    const videoStoppedReason = this.videoStoppedReason;
    const tmp = arg0;
    if (tmp) {
      self.videoStoppedReason = videoStoppedReason | SenderStopped;
      const videoStoppedWatch2 = self.videoStoppedWatch;
      videoStoppedWatch2.start();
    } else {
      self.videoStoppedReason = videoStoppedReason & ~SenderStopped;
      if (self.videoStoppedReason === obj6.None) {
        const statsWindow = self.statsWindow;
        statsWindow.splice(0);
        const videoStoppedWatch = self.videoStoppedWatch;
        videoStoppedWatch.stop();
      }
    }
  }
  appendAndIncrementStats(parseInboundStatsResult) {
    let bytes;
    let bytes2;
    let codecType;
    let decoder;
    let encoder;
    let framesCodec;
    let framesCodec2;
    let localWant;
    let resolution;
    let timestamp;
    let timestamp2;
    const self = this;
    if (!this.isVideoStopped) {
      const statsWindow = self.statsWindow;
      statsWindow.push(parseInboundStatsResult);
      const result = self.collectAggregationStats(parseInboundStatsResult, self.previousAggregationStats);
      self.previousAggregationStats = parseInboundStatsResult;
      const tmp5 = null == self.cryptorFailureBeforeSuccessCount && parseInboundStatsResult.cryptorSuccessCount > 0;
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
              const tmp6 = null != tmp15.codecType && tmp15.codecType !== obj.UNKNOWN;
              if (tmp6) {
                self.encoderCodec = self.statsWindow[self.statsWindow.length - 1].codecType;
              }
              const tmp8 = null != parseInboundStatsResult.vmafScore && parseInboundStatsResult.vmafScore >= 0;
              if (tmp8) {
                self.vmafScoreNum = self.vmafScoreNum + 1;
                self.vmafScoreSum = self.vmafScoreSum + parseInboundStatsResult.vmafScore;
                const vmafHistogram = self.vmafHistogram;
                vmafHistogram.addSample(parseInboundStatsResult.vmafScore);
              }
              const tmp10 = null != parseInboundStatsResult.psnrDb && parseInboundStatsResult.psnrDb >= 0;
              if (tmp10) {
                self.psnrDbNum = self.psnrDbNum + 1;
                self.psnrDbSum = self.psnrDbSum + parseInboundStatsResult.psnrDb;
                const psnrHistogram = self.psnrHistogram;
                psnrHistogram.addSample(parseInboundStatsResult.psnrDb);
              }
              const tmp12 = null != parseInboundStatsResult.outboundSinkWant && 0 !== parseInboundStatsResult.outboundSinkWant;
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
              const tmp13 = null != tmp15.codecType && tmp15.codecType !== obj.UNKNOWN;
              if (tmp13) {
                self.decoderCodec = self.statsWindow[self.statsWindow.length - 1].codecType;
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
  }
  addSystemResources() {
    const systemResources = this.systemResources;
    systemResources.takeSample();
  }
  appendTransportStats(transport) {
    if (null != transport.inboundBitrateEstimate) {
      const self = this;
      const inboundBitrateEstimateHistogram = this.inboundBitrateEstimateHistogram;
      inboundBitrateEstimateHistogram.addSample(transport.inboundBitrateEstimate);
    }
  }
  getCodecsUsed() {
    set = new Set();
    const entries = Object.entries(this.codecBuckets);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let first = tmp5[0];
      if (tmp5[1] > 0) {
        let addResult = set.add(first);
      }
      continue;
    }
    return set;
  }
}
const prototype = InboundStats.prototype;
Object.defineProperty(prototype, "isVideoStopped", {
  get: function isVideoStopped() {
    return this.videoStoppedReason !== obj6.None;
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
let result = size.fileFinishedImporting("lib/VideoQualityStats.tsx");
class OutboundStats extends InboundStats {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const values = Object.values(obj2);
    applyArgumentsResult.encoderBuckets = fromEntries(values.map((item) => {
      const items = [item, 0];
      return items;
    }));
    applyArgumentsResult.encoderCodec = obj.UNKNOWN;
    applyArgumentsResult.targetFrames = 0;
    applyArgumentsResult.targetBytesMax = 0;
    applyArgumentsResult.targetBytesNetwork = 0;
    const histogram = new Histogram.Histogram();
    applyArgumentsResult.targetBitrateHistogram = histogram;
    applyArgumentsResult.outboundBytesAvailable = 0;
    const histogram1 = new Histogram.Histogram();
    applyArgumentsResult.outboundBandwidthSurplus = histogram1;
    applyArgumentsResult.averageEncodeTime = 0;
    applyArgumentsResult.vmafScoreSum = 0;
    applyArgumentsResult.vmafScoreNum = 0;
    const histogram2 = new Histogram.Histogram();
    applyArgumentsResult.vmafHistogram = histogram2;
    applyArgumentsResult.psnrDbSum = 0;
    applyArgumentsResult.psnrDbNum = 0;
    const histogram3 = new Histogram.Histogram();
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
  appendTargetRates(arg0, currentCPUUsagePercent, arg2, arg3) {
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
  }
}
const prototype2 = OutboundStats.prototype;

export { CodecTypes };
export const Encoders = obj2;
export const Decoders = obj3;
export const VideoStoppedReasons = obj6;
export { parseEncoder };
export { parseDecoder };
export const parseCodecType = function parseCodecType(name) {
  let AV1;
  if (null == name) {
    AV1 = obj.UNKNOWN;
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