// === Module 14103: Status/StatusUtils ===

// Module 14103 (Status/StatusUtils)
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 14104 */;
import StatusConstants from "StatusConstants" /* 1179 */;
import size from "module_2" /* 2 */;

({ STATUS_PADDING: c2, StatusSizes: c3 } = StatusConstants);
const result = size.fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(items) {
  const size = { width: null, height: null, cornerRadius: null };
  const sum = items + 2 * React2;
  size.width = sum;
  size.height = 1.4 * sum;
  size.cornerRadius = sum / 4;
  return size;
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(items) {
  let size = getStatusContainerStyleDefault(items, false, true);
  size = { width: size.width, height: size.height, cornerRadius: size.borderRadius };
  return size;
};
export const getStatusTypingDimensions = function getStatusTypingDimensions(items) {
  if (constants.SMALL !== items) {
    if (tmp.XSMALL !== items) {
      let num = 6;
      let num2 = 28;
    }
    const size = { width: num2, height: null, dotSize: null };
    const _Math = Math;
    size.height = Math.floor(num2 / 2.33);
    size.dotSize = num;
    return size;
  }
  num = 4;
  num2 = 22;
};