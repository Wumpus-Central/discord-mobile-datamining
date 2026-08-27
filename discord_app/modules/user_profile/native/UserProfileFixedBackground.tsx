// === Module 8838: ? ===

// Module 8838
import ManaContext from "ManaContext" /* 4172 */;
import LinearGradientDefault from "LinearGradient" /* 4892 */;
import useUserProfileColors from "useUserProfileColors" /* 8464 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8839 */;
import closure_3 from "_slicedToArray" /* 32 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
const memoResult = importAllResult.memo((style) => {
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  const gradientFallbackBackground = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  const obj2 = useUserProfileColors;
  const obj3 = useUserProfileGradientColors;
  const first = callback(useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2)[0];
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
      obj = { colors: null, locations: null, style: null, pointerEvents: "none" };
      const items = [first, first, tmp5];
      obj[0] = items;
      const items1 = [0, bound, 1];
      obj[1] = items1;
      const items2 = [closure_4.absoluteFill, style];
      obj[2] = items2;
      return jsx(LinearGradientDefault, { colors: null, locations: null, style: null, pointerEvents: "none" });
    }
  }
  style = [closure_4.absoluteFill, { backgroundColor: gradientFallbackBackground }, ];
  style[2] = style;
  return <closure_5 style={style} pointerEvents="none" />;
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default memoResult;