import STATUS_PADDING from "STATUS_PADDING";

let c3;
let obj1;
({ STATUS_PADDING: obj1, StatusSizes: c3 } = STATUS_PADDING);
const result = require("set").fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(items) {
  const sum = items + 2 * closure_2;
  return { width: sum, height: 1.4 * sum, cornerRadius: sum / 4 };
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(items) {
  const size = importDefault(13166)(items, false, true);
  return { width: size.width, height: size.height, cornerRadius: size.borderRadius };
};
export const getStatusTypingDimensions = function getStatusTypingDimensions(items) {
  if (constants.SMALL !== items) {
    if (tmp.XSMALL !== items) {
      let num = 6;
      let num2 = 28;
    }
    const obj = { width: null, height: null, dotSize: null };
    obj[0] = num2;
    const _Math = Math;
    obj[1] = Math.floor(num2 / 2.33);
    obj[2] = num;
    return obj;
  }
  num = 4;
  num2 = 22;
};