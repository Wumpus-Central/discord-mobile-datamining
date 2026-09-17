// === Module 5250: ImageEncodingLadder ===

// Module 5250 (ImageEncodingLadder)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function getAdaptiveImageCompressionQuality(size, ADAPTIVE_COMPRESSION_CONFIG) {
  if (ADAPTIVE_COMPRESSION_CONFIG.useAdaptiveCompression) {
    if (null != size.width) {
      if (null != size.height) {
        const result = size.width * size.height;
        if (result <= obj.SMALL) {
          let HIGH5 = ADAPTIVE_COMPRESSION_CONFIG.veryHighQuality;
          if (HIGH5 == null) {
            HIGH5 = CompressionQuality.HIGH;
          }
          let HIGH = HIGH5;
        } else if (result <= obj.MEDIUM) {
          let HIGH4 = ADAPTIVE_COMPRESSION_CONFIG.highQuality;
          if (HIGH4 == null) {
            HIGH4 = CompressionQuality.HIGH;
          }
          HIGH = HIGH4;
        } else if (result <= obj.LARGE) {
          let HIGH3 = ADAPTIVE_COMPRESSION_CONFIG.mediumQuality;
          if (HIGH3 == null) {
            HIGH3 = CompressionQuality.HIGH;
          }
          HIGH = HIGH3;
        } else if (result <= obj.VERY_LARGE) {
          let HIGH2 = ADAPTIVE_COMPRESSION_CONFIG.lowQuality;
          if (HIGH2 == null) {
            HIGH2 = CompressionQuality.HIGH;
          }
          HIGH = HIGH2;
        } else {
          HIGH = ADAPTIVE_COMPRESSION_CONFIG.veryLowQuality;
          if (HIGH == null) {
            HIGH = CompressionQuality.HIGH;
          }
        }
        return HIGH;
      }
    }
    return CompressionQuality.HIGH;
  } else {
    return CompressionQuality.HIGH;
  }
}
const CompressionQuality = Constants.CompressionQuality;
const IMAGE_COMPRESSION_THRESHOLDS = { SMALL: 921600, MEDIUM: 2073600, LARGE: 3686400, VERY_LARGE: 8294400 };
let obj2 = { useAdaptiveCompression: true, veryHighQuality: 0.8, highQuality: 0.7, mediumQuality: 0.6, lowQuality: 0.5, veryLowQuality: 0.4, useOriginalIfSmaller: true };
const prototype = function ImageEncodingLadder() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["selectEncodingConfig"] = function selectEncodingConfig(size1) {
  ({ targetWidth, targetHeight } = prototype.clampDimensions(size1.width, size1.height, 3840, 2160));
  if (size1.width === targetWidth) {
    if (size1.height === targetHeight) {
      obj2 = { compressionQuality: null, targetWidth: null, targetHeight: null };
      const size = { width: targetWidth, height: targetHeight };
      obj2.compressionQuality = 100 * getAdaptiveImageCompressionQuality(size, obj2);
      obj2.targetWidth = targetWidth;
      obj2.targetHeight = targetHeight;
      let obj = obj2;
    }
    return obj;
  }
  let num = obj2.lowQuality;
  if (num == null) {
    num = 0.5;
  }
  obj = { compressionQuality: 100 * num, targetWidth, targetHeight };
  const clampDimensionsResult = prototype.clampDimensions(size1.width, size1.height, 3840, 2160);
};
prototype["clampDimensions"] = function clampDimensions(width, height, arg2, arg3) {
  const bound = Math.max(width, height);
  const bound1 = Math.min(width, height);
  const bound2 = Math.max(arg2, arg3);
  const bound3 = Math.min(arg2, arg3);
  if (bound <= bound2) {
    if (bound1 <= bound3) {
      obj2 = { targetWidth: width, targetHeight: height };
      return obj2;
    }
  }
  const bound4 = Math.min(bound2 / bound, bound3 / bound1);
  return { targetWidth: Math.max(1, Math.round(width * bound4)), targetHeight: Math.max(1, Math.round(height * bound4)) };
};
let result = size.fileFinishedImporting("modules/media_uploads/ImageEncodingLadder.tsx");

export { IMAGE_COMPRESSION_THRESHOLDS };
export const ADAPTIVE_COMPRESSION_CONFIG = obj2;
export { getAdaptiveImageCompressionQuality };
export const ImageEncodingLadder = prototype;