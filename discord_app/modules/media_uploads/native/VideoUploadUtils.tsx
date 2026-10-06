// === Module 7307: VideoUploadUtils ===

// Module 7307 (VideoUploadUtils)
import LoggerDefault from "Logger" /* 3 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import size_mod from "module_2" /* 2 */;

const VideoCompressionQuality = UnsyncedUserSettingsStore.VideoCompressionQuality;
const logger = new LoggerDefault("VideoUploadUtils.tsx");
const tmp2 = new LoggerDefault("VideoUploadUtils.tsx");
class VideoQualityTarget {
  constructor(value, targetResolution, targetBitrate) {
    const obj = Object.create(new.target.prototype);
    obj.value = value;
    obj.targetResolution = targetResolution;
    obj.targetBitrate = targetBitrate;
    return obj;
  }
  toString() {
    return this.value;
  }
  static fromCompressionQuality(videoQualitySetting) {
    let VERY_HIGH;
    if (VideoCompressionQuality.VERY_LOW === videoQualitySetting) {
      VERY_HIGH = VideoQualityTarget.VERY_LOW;
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
      const self = this;
      const self2 = this;
      const error = new Error("Unknown compression quality: " + videoQualitySetting);
      throw error;
    }
    return VERY_HIGH;
  }
}
const prototype = VideoQualityTarget.prototype;
const obj2 = Object.create(VideoQualityTarget.prototype);
obj2.value = "very_low";
obj2.targetResolution = 360;
obj2.targetBitrate = 800000;
VideoQualityTarget.VERY_LOW = obj2;
const obj7 = Object.create(VideoQualityTarget.prototype);
obj7.value = "low";
obj7.targetResolution = 360;
obj7.targetBitrate = 1200000;
VideoQualityTarget.LOW = obj7;
const obj8 = Object.create(VideoQualityTarget.prototype);
obj8.value = "medium";
obj8.targetResolution = 480;
obj8.targetBitrate = 1800000;
VideoQualityTarget.MEDIUM = obj8;
const obj9 = Object.create(VideoQualityTarget.prototype);
obj9.value = "high";
obj9.targetResolution = 720;
obj9.targetBitrate = 2250000;
VideoQualityTarget.HIGH = obj9;
const obj10 = Object.create(VideoQualityTarget.prototype);
obj10.value = "very_high";
obj10.targetResolution = 1080;
obj10.targetBitrate = 7000000;
VideoQualityTarget.VERY_HIGH = obj10;
let obj = { bitrateFloor: 300000, createHDR: false, frameRate: 30, keyFrameIntervalSeconds: 2, rotationDegrees: 0, skipVideoTranscode: false, targetBitrate: VideoQualityTarget.MEDIUM.targetBitrate, targetHeight: 480, targetWidth: 640, videoQuality: VideoQualityTarget.MEDIUM, useTranscodedVideoForMovSources: true, transmuxLivePhotos: true, progressUpdateGranularity: 10 };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_uploads/native/VideoUploadUtils.tsx");

export { VideoQualityTarget };
export const DEFAULT_VIDEO_ENCODING_CONFIG = obj;
export const calculateTargetDimensions = function calculateTargetDimensions(videoMetadata, targetResolution) {
  let rounded;
  let rounded1;
  let sum1;
  const result = videoMetadata.width / videoMetadata.height;
  if (videoMetadata.width > videoMetadata.height) {
    const _Math3 = Math;
    const bound = Math.min(targetResolution, videoMetadata.height);
    const _Math4 = Math;
    rounded = Math.round(bound * result);
    rounded1 = bound;
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
  size = { width: sum, height: sum1 };
  sum1 = rounded1;
  if (rounded1 % 2 !== 0) {
    sum1 = rounded1 + 1;
  }
  return size;
};
export const canSkipVideoTranscode = function canSkipVideoTranscode(targetResolution, videoMetadata, fileSize, effectiveUploadLimit) {
  let rounded;
  let rounded1;
  if (null != fileSize) {
    if (null != effectiveUploadLimit) {
      if (fileSize > effectiveUploadLimit) {
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
    rounded = Math.round(bound * result);
    rounded1 = bound;
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
    const str = videoMetadata.format;
    tmp12 = null === str.match(/(avc1|hvc1|video\/(avc|hevc))/i);
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
  const info = logger.info;
  if (format.isHDRContent) {
    str2 = "Yes";
  }
  info(`- HDR: ${str2}`);
  logger.info("- Rotation Degrees: " + format.rotationDegrees);
  logger.info("- Profile: " + format.sourceProfile);
  logger.info("- Level: " + format.sourceLevel);
  logger.info("- Duration: " + format.durationMs + " ms");
};
export const logEncoderSettings = function logEncoderSettings(videoQuality) {
  logger.info("Encoder Video Quality Settings:");
  let str1;
  const info = logger.info;
  if (videoQuality.videoQuality != null) {
    str1 = str.toString();
  }
  info("- Compression Quality: " + str1);
  videoQuality = videoQuality.videoQuality;
  let targetResolution;
  const info2 = logger.info;
  if (videoQuality != null) {
    targetResolution = videoQuality.targetResolution;
  }
  info2("- Compression Quality Target Resolution: " + targetResolution + "p");
  const videoQuality2 = videoQuality.videoQuality;
  let targetBitrate;
  const info3 = logger.info;
  if (videoQuality2 != null) {
    targetBitrate = videoQuality2.targetBitrate;
  }
  info3("- Compression Quality Max Bitrate: " + targetBitrate + " bps");
  logger.info("Encoder Video Transcoding Settings:");
  const info4 = logger.info;
  if (videoQuality.skipVideoTranscode) {
    info4("- Skip Video Transcode: Yes");
  } else {
    info4("- Codec: avc1 (H.264)");
    const _HermesInternal = HermesInternal;
    logger.info("- Dimensions: " + videoQuality.targetWidth + "x" + videoQuality.targetHeight);
    const _HermesInternal2 = HermesInternal;
    logger.info("- Bitrate: " + videoQuality.targetBitrate + " bps");
    const _HermesInternal3 = HermesInternal;
    logger.info("- Frame Rate: " + videoQuality.frameRate + " fps");
    const _HermesInternal4 = HermesInternal;
    logger.info("- Key Frame Interval: " + videoQuality.keyFrameIntervalSeconds + " seconds");
    let str10 = "No";
    const info5 = logger.info;
    if (videoQuality.createHDR) {
      str10 = "Yes";
    }
    info5(`- Create HDR: ${str10}`);
    const _HermesInternal5 = HermesInternal;
    logger.info("- Rotation Degrees: " + videoQuality.rotationDegrees);
    const _HermesInternal6 = HermesInternal;
    logger.info("- Progress Update Granularity: " + videoQuality.progressUpdateGranularity);
  }
};
export const calculateOptimalBitrate = function calculateOptimalBitrate(videoMetadata, targetBitrate, bitrateFloor) {
  return Math.min(Math.max(videoMetadata.bitRate, bitrateFloor), targetBitrate.targetBitrate);
};