// === Module 8253: useVideoTileGradientColors ===

// Module 8253 (useVideoTileGradientColors)
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8229 */;
import noop from "module_19" /* 19 */;

require = fn;
function rgbToHex(arg0) {
  [tmp, tmp2, tmp3] = arg0;
  let str = Math.max(0, Math.min(255, tmp));
  str = str.toString(16);
  let str2 = Math.max(0, Math.min(255, tmp2));
  const padStartResult = str.padStart(2, "0");
  const str1 = str2.toString(16);
  const padStartResult1 = str2.toString(16).padStart(2, "0");
  str2 = Math.max(0, Math.min(255, tmp3)).toString(16);
  return "#" + padStartResult + padStartResult1 + str2.padStart(2, "0");
}
function computeVideoTileGradientStops(modalV2BackgroundColor, modalV2BackgroundColor) {
  if (null != modalV2BackgroundColor) {
    if (null != modalV2BackgroundColor) {
      let DARK = UserProfileGradientUtils.getProfileTheme(modalV2BackgroundColor);
      if (DARK == null) {
        DARK = ThemeTypes.DARK;
      }
      const tmp9Result = UserProfileGradientUtils;
      const int2rgbArrayResult = tmp9Result.int2rgbArray(tmp9Result.calculateModalV2BackgroundColor(modalV2BackgroundColor, modalV2BackgroundColor, DARK));
      const tmp9Result1 = utils_ColorUtils;
      const int2rgbArrayResult1 = utils_ColorUtils.int2rgbArray(modalV2BackgroundColor);
      const tmp9Result2 = utils_ColorUtils;
      const int2rgbArrayResult2 = utils_ColorUtils.int2rgbArray(modalV2BackgroundColor);
      const items = [, , ];
      [arr[0], arr[1], arr[2]] = int2rgbArrayResult;
      const items1 = [, , ];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult1;
      UserProfileGradientUtils.getValueInColorGradientByPercentage(items, items1, 20);
      const tmp9Result3 = UserProfileGradientUtils;
      const items2 = [, , ];
      [arr3[0], arr3[1], arr3[2]] = int2rgbArrayResult;
      const items3 = [, , ];
      [arr4[0], arr4[1], arr4[2]] = int2rgbArrayResult2;
      const valueInColorGradientByPercentage = UserProfileGradientUtils.getValueInColorGradientByPercentage(items2, items3, 60);
      const items4 = [rgbToHex(valueInColorGradientByPercentage), rgbToHex(valueInColorGradientByPercentage)];
      return items4;
    }
  }
  return null;
}
const ThemeTypes = fn(1074).ThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/useVideoTileGradientColors.tsx");

export { computeVideoTileGradientStops };
export const useVideoTileGradientColors = function useVideoTileGradientColors(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => computeVideoTileGradientStops(closure_0, closure_1), items);
};