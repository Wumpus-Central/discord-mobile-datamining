// === Module 17334: getDisplayNameStylesGradientLocations ===

// Module 17334 (getDisplayNameStylesGradientLocations)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1401 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ DISPLAY_NAME_STYLES_GRADIENT_PRESETS: c2, DISPLAY_NAME_STYLES_PRISM_PRESETS: c3 } = DisplayNameStylesConstants);
let closure_4 = { defaultGradient: [0.11728, 0.92181], defaultPrismBar: [0.075906, 0.29442, 0.48678, 0.72287, 0.9217], defaultPrismSwatch: [0.06422, 0.2867, 0.50459, 0.72133, 0.94037], otherPrismSwatches: [0.0013937, 0.21059, 0.41978, 0.63299, 0.83816] };
const result = size.fileFinishedImporting("modules/display_name_styles/native/getDisplayNameStylesGradientLocations.tsx");

export default function getDisplayNameStylesGradientLocations(arg0, arr) {
  _require = arr;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (arg0 === require("DisplayNameEffect").DisplayNameEffect.GRADIENT) {
    if (tmpResult.areArraysShallowEqual(arr, closure_2[0].colors)) {
      return closure_4.defaultGradient;
    }
    tmpResult = tmp(558);
  }
  if (arg0 === require("DisplayNameEffect").DisplayNameEffect.PRISM) {
    const findIndexResult = closure_3.findIndex((item) => discord_common_shallowEqual.areArraysShallowEqual(closure_0, item));
    if (0 === findIndexResult) {
      return flag ? closure_4.defaultPrismBar : closure_4.defaultPrismSwatch;
    } else if (findIndexResult > 0) {
      if (!flag) {
        return closure_4.otherPrismSwatches;
      }
    }
  }
  return arr.map((item, index) => index / Math.max(closure_0.length - 1, 1));
};