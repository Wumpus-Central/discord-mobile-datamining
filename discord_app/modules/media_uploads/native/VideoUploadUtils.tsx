// === Module 5161: VideoUploadUtils ===

// Module 5161 (VideoUploadUtils)
import LoggerDefault from "Logger" /* 3 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import size from "module_2" /* 2 */;

const VideoCompressionQuality = UnsyncedUserSettingsStore.VideoCompressionQuality;
const logger = new LoggerDefault("VideoUploadUtils.tsx");
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
  } else if (VideoCompressionQuality.LOW === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.LOW;
  } else if (VideoCompressionQuality.MEDIUM === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.MEDIUM;
  } else if (VideoCompressionQuality.HIGH === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.HIGH;
  } else if (VideoCompressionQuality.VERY_HIGH === videoQualitySetting) {
    VERY_HIGH = VideoQualityTarget.VERY_HIGH;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown compression quality: " + videoQualitySetting);
    throw error;
  }
  return VERY_HIGH;
};
obj = { bitrateFloor: 300000, createHDR: false, frameRate: 30, keyFrameIntervalSeconds: 2, rotationDegrees: 0, skipVideoTranscode: false, targetBitrate: VideoQualityTarget.MEDIUM.targetBitrate, targetHeight: 480, targetWidth: 640, videoQuality: VideoQualityTarget.MEDIUM, useTranscodedVideoForMovSources: true, transmuxLivePhotos: true, progressUpdateGranularity: 10 };
let result = size.fileFinishedImporting("modules/media_uploads/native/VideoUploadUtils.tsx");

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
  const size = { width: sum, height: null };
  let sum1 = rounded1;
  if (rounded1 % 2 !== 0) {
    sum1 = rounded1 + 1;
  }
  size.height = sum1;
  return size;
};
export const canSkipVideoTranscode = function canSkipVideoTranscode(targetResolution, videoMetadata, fileSize, arg3) {
  if (null != fileSize) {
    if (null != arg3) {
      if (fileSize > arg3) {
        return false;
      }
    }
  }
  targetResolution = targetResolution.targetResolution;
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
  let sum1 = rounded1;
  if (rounded1 % 2 !== 0) {
    sum1 = rounded1 + 1;
  }
  const rounded2 = Math.round(videoMetadata.width);
  const tmp11 = rounded2 <= sum && Math.round(videoMetadata.height) <= sum1;
  let tmp12 = !tmp11;
  if (tmp11) {
    tmp12 = videoMetadata.bitRate > targetResolution.targetBitrate;
  }
  if (!tmp12) {
    tmp12 = null == videoMetadata.format;
  }
  if (!tmp12) {
    tmp12 = null === videoMetadata.format.match(/(avc1|hvc1|video\/(avc|hevc))/i);
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
  let str;
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
  const info = logger.info;
  if (videoQuality.skipVideoTranscode) {
    info("- Skip Video Transcode: Yes");
  } else {
    info("- Codec: avc1 (H.264)");
    const _HermesInternal = HermesInternal;
    logger.info("- Dimensions: " + videoQuality.targetWidth + "x" + videoQuality.targetHeight);
    const _HermesInternal2 = HermesInternal;
    logger.info("- Bitrate: " + videoQuality.targetBitrate + " bps");
    const _HermesInternal3 = HermesInternal;
    logger.info("- Frame Rate: " + videoQuality.frameRate + " fps");
    const _HermesInternal4 = HermesInternal;
    logger.info("- Key Frame Interval: " + videoQuality.keyFrameIntervalSeconds + " seconds");
    let str10 = "No";
    if (videoQuality.createHDR) {
      str10 = "Yes";
    }
    logger.info(`- Create HDR: ${str10}`);
    const _HermesInternal5 = HermesInternal;
    logger.info("- Rotation Degrees: " + videoQuality.rotationDegrees);
    const _HermesInternal6 = HermesInternal;
    logger.info("- Progress Update Granularity: " + videoQuality.progressUpdateGranularity);
  }
};
export const calculateOptimalBitrate = function calculateOptimalBitrate(videoMetadata, targetBitrate, bitrateFloor) {
  return Math.min(Math.max(videoMetadata.bitRate, bitrateFloor), targetBitrate.targetBitrate);
};