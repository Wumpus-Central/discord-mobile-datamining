// === Module 7956: react-native ===

// Module 7956 (react-native)
import react_native from "react-native" /* 17 */;

let num;
const obj = { SLIDER_DEFAULT_INITIAL_VALUE: 0, MARGIN_HORIZONTAL_PADDING: 0.05, THUMB_SIZE: 20, STEP_NUMBER_TEXT_FONT_SMALL: 8, STEP_NUMBER_TEXT_FONT_BIG: 12, LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER, LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER, DEFAULT_STEP_RESOLUTION: num };
num = 1000;
if ("android" === react_native.Platform.OS) {
  num = 128;
}

export const constants = obj;