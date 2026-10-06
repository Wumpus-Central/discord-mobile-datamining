// === Module 7936: useVideoTileGradientColors ===

// Module 7936 (useVideoTileGradientColors)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7912 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function rgbToHex(arg0) {
  let tmp;
  let tmp2;
  let tmp3;
  [tmp, tmp2, tmp3] = arg0;
  const str = Math.max(0, Math.min(255, tmp));
  const str1 = str.toString(16);
  const padStartResult = str1.padStart(2, "0");
  const str2 = Math.max(0, Math.min(255, tmp2));
  const str4 = str2.toString(16);
  const padStartResult1 = str4.padStart(2, "0");
  const str3 = Math.max(0, Math.min(255, tmp3));
  const str5 = str3.toString(16);
  return "#" + padStartResult + padStartResult1 + str5.padStart(2, "0");
}
function computeVideoTileGradientStops(modalV2BackgroundColor, modalV2BackgroundColor2) {
  if (null != modalV2BackgroundColor) {
    if (null != modalV2BackgroundColor) {
      const obj6 = UserProfileGradientUtils;
      let DARK = obj6.getProfileTheme(modalV2BackgroundColor);
      if (DARK == null) {
        DARK = ThemeTypes.DARK;
      }
      const int2rgbArray = utils_ColorUtils.int2rgbArray;
      utils_ColorUtils;
      const tmp10Result6 = UserProfileGradientUtils;
      const int2rgbArrayResult = int2rgbArray(tmp10Result6.calculateModalV2BackgroundColor(modalV2BackgroundColor, modalV2BackgroundColor, DARK));
      const tmp10Result7 = utils_ColorUtils;
      const int2rgbArrayResult1 = tmp10Result7.int2rgbArray(modalV2BackgroundColor);
      const tmp10Result8 = utils_ColorUtils;
      const items = [, , ];
      [arr[0], arr[1], arr[2]] = int2rgbArrayResult;
      const items1 = [, , ];
      [arr2[0], arr2[1], arr2[2]] = int2rgbArrayResult1;
      const int2rgbArrayResult2 = tmp10Result8.int2rgbArray(modalV2BackgroundColor);
      const tmp10Result9 = UserProfileGradientUtils;
      const valueInColorGradientByPercentage = tmp10Result9.getValueInColorGradientByPercentage(items, items1, 20);
      const items2 = [, , ];
      [arr3[0], arr3[1], arr3[2]] = int2rgbArrayResult;
      const items3 = [, , ];
      [arr4[0], arr4[1], arr4[2]] = int2rgbArrayResult2;
      const tmp10Result10 = UserProfileGradientUtils;
      const valueInColorGradientByPercentage2 = tmp10Result10.getValueInColorGradientByPercentage(items2, items3, 60);
      const items4 = [rgbToHex(valueInColorGradientByPercentage), rgbToHex(valueInColorGradientByPercentage2)];
      return items4;
    }
  }
  return null;
}
const ThemeTypes = Constants.ThemeTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((modalV2BackgroundColor, modalV2BackgroundColor2) => {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === modalV2BackgroundColor) {
    let tmp2;
    if (cResult[1] === modalV2BackgroundColor) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = computeVideoTileGradientStops(modalV2BackgroundColor, modalV2BackgroundColor);
  cResult[0] = modalV2BackgroundColor;
  cResult[1] = modalV2BackgroundColor;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => computeVideoTileGradientStops(closure_0, closure_1), items);
});
const result = size.fileFinishedImporting("modules/calls/native/useVideoTileGradientColors.tsx");

export { computeVideoTileGradientStops };
export const useVideoTileGradientColors = tmp2;