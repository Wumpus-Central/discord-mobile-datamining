// === Module 5105: toString ===

// Module 5105 (toString)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;

const VideoCompressionQuality = CHANNEL_SIDEBAR_WIDTH.VideoCompressionQuality;
let closure_1 = new timestampDefault("VideoUploadUtils.tsx");
let VideoQualityTarget;
class VideoQualityTarget {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.value = global;
    obj.targetResolution = require;
    obj.targetBitrate = importDefault;
    return obj;
  }
}
VideoQualityTarget.prototype["toString"] = function toString() {
  return this.value;
};
let obj = Object.create(VideoQualityTarget.prototype);
obj.value = "very_low";
obj.targetResolution = 360;
obj.targetBitrate = 800000;
VideoQualityTarget.VERY_LOW = obj;
obj = Object.create(VideoQualityTarget.prototype);
obj.value = "low";
obj.targetResolution = 360;
obj.targetBitrate = 1200000;
VideoQualityTarget.LOW = obj;
const obj1 = Object.create(VideoQualityTarget.prototype);
obj1.value = "medium";
obj1.targetResolution = 480;
obj1.targetBitrate = 1800000;
VideoQualityTarget.MEDIUM = obj1;
const obj2 = Object.create(VideoQualityTarget.prototype);
obj2.value = "high";
obj2.targetResolution = 720;
obj2.targetBitrate = 2250000;
VideoQualityTarget.HIGH = obj2;
const obj3 = Object.create(VideoQualityTarget.prototype);
obj3.value = "very_high";
obj3.targetResolution = 1080;
obj3.targetBitrate = 7000000;
VideoQualityTarget.VERY_HIGH = obj3;
VideoQualityTarget.fromCompressionQuality = function fromCompressionQuality(videoQualitySetting) {
  if (VideoCompressionQuality.VERY_LOW === videoQualitySetting) {
    let VERY_HIGH = VideoQualityTarget.VERY_LOW;
  } else if (tmp.LOW === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.LOW;
  } else if (tmp.MEDIUM === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.MEDIUM;
  } else if (tmp.HIGH === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.HIGH;
  } else if (tmp.VERY_HIGH === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.VERY_HIGH;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unknown compression quality: " + videoQualitySetting);
    throw error;
  }
  return VERY_HIGH;
};
obj = { bitrateFloor: 300000, createHDR: false, frameRate: 30, keyFrameIntervalSeconds: 2, rotationDegrees: 0, skipVideoTranscode: false, targetBitrate: VideoQualityTarget.MEDIUM.targetBitrate, targetHeight: 480, targetWidth: 640, useHEVC: false, videoQuality: VideoQualityTarget.MEDIUM, hevcIsSupported: false, useTranscodedVideoForMovSources: true, transmuxLivePhotos: true, progressUpdateGranularity: 10 };
const tmp2 = new timestampDefault("VideoUploadUtils.tsx");
let result = set.fileFinishedImporting("modules/media_uploads/native/VideoUploadUtils.tsx");

export { VideoQualityTarget };
export const DEFAULT_VIDEO_ENCODING_CONFIG = obj;
export const calculateTargetDimensions = function calculateTargetDimensions(videoMetadata, targetResolution) {
  const result = videoMetadata.width / videoMetadata.height;
  if (videoMetadata.width > videoMetadata.height) {
    const _Math3 = Math;
    const bound = Math.min(targetResolution, videoMetadata.height);
    const _Math4 = Math;
    let rounded = Math.round(bound * result);
    let rounded1 = bound;
  } else {
    const _Math = Math;
    rounded = Math.min(targetResolution, videoMetadata.width);
    const _Math2 = Math;
    rounded1 = Math.round(rounded / result);
  }
  let sum = rounded;
  if (rounded % 2 !== 0) {
    sum = rounded + 1;
  }
  const obj = { width: sum, height: null };
  let sum1 = rounded1;
  if (rounded1 % 2 !== 0) {
    sum1 = rounded1 + 1;
  }
  obj[1] = sum1;
  return obj;
};
export const canSkipVideoTranscode = function canSkipVideoTranscode(result, videoMetadata, fileSize, arg3) {
  if (null != fileSize) {
    if (null != arg3) {
      if (fileSize > arg3) {
        return false;
      }
    }
  }
  const targetResolution = result.targetResolution;
  result = videoMetadata.width / videoMetadata.height;
  if (videoMetadata.width > videoMetadata.height) {
    const _Math3 = Math;
    const bound = Math.min(targetResolution, videoMetadata.height);
    const _Math4 = Math;
    let rounded = Math.round(bound * result);
    let rounded1 = bound;
  } else {
    const _Math = Math;
    rounded = Math.min(targetResolution, videoMetadata.width);
    const _Math2 = Math;
    rounded1 = Math.round(rounded / result);
  }
  let sum = rounded;
  if (rounded % 2 !== 0) {
    sum = rounded + 1;
  }
  let sum1 = rounded1;
  if (rounded1 % 2 !== 0) {
    sum1 = rounded1 + 1;
  }
  const rounded2 = Math.round(videoMetadata.width);
  const tmp11 = rounded2 <= sum && Math.round(videoMetadata.height) <= sum1;
  let tmp12 = !tmp11;
  if (tmp11) {
    tmp12 = videoMetadata.bitRate > result.targetBitrate;
  }
  if (!tmp12) {
    tmp12 = null == videoMetadata.format;
  }
  if (!tmp12) {
    tmp12 = null === videoMetadata.format.match(/(avc1|hvc1|video\/(avc|hevc))/i);
    const str = videoMetadata.format;
  }
  return !tmp12;
};
export const logSourceMetadata = function logSourceMetadata(format) {
  let str = "unknown";
  if (null != format.format) {
    format = { hvc1: "hvc1 (HEVC)", avc1: "avc1 (H.264)" }[format.format];
    if (format == null) {
      format = format.format;
    }
    str = format;
  }
  logger.info("Video Source Metadata:");
  logger.info("- Codec: " + str);
  logger.info("- Dimensions: " + format.width + "x" + format.height);
  logger.info("- Bitrate: " + format.bitRate + " bps");
  logger.info("- Frame Rate: " + format.frameRate + " fps");
  let str2 = "No";
  if (format.isHDRContent) {
    str2 = "Yes";
  }
  logger.info(`- HDR: ${str2}`);
  logger.info("- Rotation Degrees: " + format.rotationDegrees);
  logger.info("- Profile: " + format.sourceProfile);
  logger.info("- Level: " + format.sourceLevel);
  logger.info("- Duration: " + format.durationMs + " ms");
};
export const logEncoderSettings = function logEncoderSettings(videoQuality) {
  logger.info("Encoder Video Quality Settings:");
  let str = videoQuality.videoQuality;
  str = undefined;
  if (str != null) {
    str = str.toString();
  }
  logger.info("- Compression Quality: " + str);
  videoQuality = videoQuality.videoQuality;
  let targetResolution;
  if (videoQuality != null) {
    targetResolution = videoQuality.targetResolution;
  }
  logger.info("- Compression Quality Target Resolution: " + targetResolution + "p");
  const videoQuality2 = videoQuality.videoQuality;
  let targetBitrate;
  if (videoQuality2 != null) {
    targetBitrate = videoQuality2.targetBitrate;
  }
  logger.info("- Compression Quality Max Bitrate: " + targetBitrate + " bps");
  logger.info("Encoder Video Transcoding Settings:");
  const info = obj.info;
  if (videoQuality.skipVideoTranscode) {
    info("- Skip Video Transcode: Yes");
  } else {
    let str2 = "avc1 (H.264)";
    if (videoQuality.useHEVC) {
      str2 = "hvc1 (HEVC)";
    }
    info(`- Codec: ${str2}`);
    const _HermesInternal = HermesInternal;
    obj.info("- Dimensions: " + videoQuality.targetWidth + "x" + videoQuality.targetHeight);
    const _HermesInternal2 = HermesInternal;
    obj.info("- Bitrate: " + videoQuality.targetBitrate + " bps");
    const _HermesInternal3 = HermesInternal;
    obj.info("- Frame Rate: " + videoQuality.frameRate + " fps");
    const _HermesInternal4 = HermesInternal;
    obj.info("- Key Frame Interval: " + videoQuality.keyFrameIntervalSeconds + " seconds");
    let str11 = "No";
    let str12 = "No";
    if (videoQuality.createHDR) {
      str12 = "Yes";
    }
    obj.info(`- Create HDR: ${str12}`);
    const _HermesInternal5 = HermesInternal;
    obj.info("- Rotation Degrees: " + videoQuality.rotationDegrees);
    if (videoQuality.hevcIsSupported) {
      str11 = "Yes";
    }
    obj.info(`- HEVC Supported: ${str11}`);
    const _HermesInternal6 = HermesInternal;
    obj.info("- Progress Update Granularity: " + videoQuality.progressUpdateGranularity);
  }
};
export const calculateOptimalBitrate = function calculateOptimalBitrate(videoMetadata, result, bitrateFloor) {
  return Math.min(Math.max(videoMetadata.bitRate, bitrateFloor), result.targetBitrate);
};
export const shouldUseHEVC = function shouldUseHEVC(rotationDegrees) {
  let tmp = !arg1;
  if (arg1) {
    tmp = !arg2;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    let tmp4 = arg3;
    if (arg3) {
      tmp4 = 0 !== rotationDegrees.rotationDegrees;
    }
    if (tmp4) {
      tmp4 = !arg4;
    }
    tmp3 = !tmp4;
  }
  return tmp3;
};