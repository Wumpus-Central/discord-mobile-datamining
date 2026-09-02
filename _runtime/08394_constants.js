// === Module 8394: constants ===

// Module 8394 (constants)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const obj = { SLIDER_DEFAULT_INITIAL_VALUE: 0, MARGIN_HORIZONTAL_PADDING: 0.05, THUMB_SIZE: 20, STEP_NUMBER_TEXT_FONT_SMALL: 8, STEP_NUMBER_TEXT_FONT_BIG: 12, LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER, LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER, DEFAULT_STEP_RESOLUTION: null };
let num = 1000;
if ("android" === get_ActivityIndicator.Platform.OS) {
  num = 128;
}
obj[7] = num;

export const constants = obj;