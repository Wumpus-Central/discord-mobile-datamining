// === Module 4988: getAdaptiveImageCompressionQuality ===

// Module 4988 (getAdaptiveImageCompressionQuality)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

function getAdaptiveImageCompressionQuality(width, ADAPTIVE_COMPRESSION_CONFIG) {
  if (ADAPTIVE_COMPRESSION_CONFIG.useAdaptiveCompression) {
    if (null != width.width) {
      if (null != width.height) {
        const result = width.width * width.height;
        if (result <= obj.SMALL) {
          let HIGH5 = ADAPTIVE_COMPRESSION_CONFIG.veryHighQuality;
          if (HIGH5 == null) {
            HIGH5 = CompressionQuality.HIGH;
          }
          let HIGH = HIGH5;
        } else if (result <= tmp11.MEDIUM) {
          let HIGH4 = ADAPTIVE_COMPRESSION_CONFIG.highQuality;
          if (HIGH4 == null) {
            HIGH4 = CompressionQuality.HIGH;
          }
          HIGH = HIGH4;
        } else if (result <= tmp11.LARGE) {
          let HIGH3 = ADAPTIVE_COMPRESSION_CONFIG.mediumQuality;
          if (HIGH3 == null) {
            HIGH3 = CompressionQuality.HIGH;
          }
          HIGH = HIGH3;
        } else if (result <= tmp11.VERY_LARGE) {
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
const CompressionQuality = ME.CompressionQuality;
let obj = { SMALL: 921600, MEDIUM: 2073600, LARGE: 3686400, VERY_LARGE: 8294400 };
obj = { useAdaptiveCompression: true, veryHighQuality: 0.8, highQuality: 0.7, mediumQuality: 0.6, lowQuality: 0.5, veryLowQuality: 0.4, useOriginalIfSmaller: true };
let prototype;
prototype = function ImageEncodingLadder() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["selectEncodingConfig"] = function selectEncodingConfig(width) {
  ({ targetWidth, targetHeight } = prototype.clampDimensions(width.width, width.height, 3840, 2160));
  if (width.width === targetWidth) {
    if (width.height === targetHeight) {
      obj = { compressionQuality: null, targetWidth: null, targetHeight: null };
      obj = { width: null, height: null };
      obj[0] = targetWidth;
      obj[1] = targetHeight;
      obj[0] = 100 * getAdaptiveImageCompressionQuality(obj, obj);
      obj[1] = targetWidth;
      obj[2] = targetHeight;
    }
    return obj;
  }
  let num = obj.lowQuality;
  if (num == null) {
    num = 0.5;
  }
  obj = { compressionQuality: 100 * num, targetWidth, targetHeight };
};
prototype["clampDimensions"] = function clampDimensions(width, height, arg2, arg3) {
  const bound = Math.max(width, height);
  const bound1 = Math.min(width, height);
  const bound2 = Math.max(arg2, arg3);
  const bound3 = Math.min(arg2, arg3);
  if (bound <= bound2) {
    if (bound1 <= bound3) {
      obj = { targetWidth: null, targetHeight: null };
      obj[0] = width;
      obj[1] = height;
      return obj;
    }
  }
  const bound4 = Math.min(bound2 / bound, bound3 / bound1);
  obj = { targetWidth: Math.max(1, Math.round(width * bound4)), targetHeight: Math.max(1, Math.round(height * bound4)) };
  return obj;
};
let result = set.fileFinishedImporting("modules/media_uploads/ImageEncodingLadder.tsx");

export const IMAGE_COMPRESSION_THRESHOLDS = obj;
export const ADAPTIVE_COMPRESSION_CONFIG = obj;
export { getAdaptiveImageCompressionQuality };
export const ImageEncodingLadder = prototype;