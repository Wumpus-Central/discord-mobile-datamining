// _runtime/metro/08282__.js
import _mod17 from "00017__.js";

const obj = {
  SLIDER_DEFAULT_INITIAL_VALUE: 0,
  MARGIN_HORIZONTAL_PADDING: 0.05,
  THUMB_SIZE: 20,
  STEP_NUMBER_TEXT_FONT_SMALL: 8,
  STEP_NUMBER_TEXT_FONT_BIG: 12,
  LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER,
  LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER,
  DEFAULT_STEP_RESOLUTION: null,
};
let num = 1000;
if ("android" === _mod17.Platform.OS) {
  num = 128;
}
obj.DEFAULT_STEP_RESOLUTION = num;

export const constants = obj;
