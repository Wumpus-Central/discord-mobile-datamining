// discord_app/modules/user_profile/native/UserProfileFixedBackground.tsx
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
const memoResult = require("noop").memo((style) => {
  let bannerHeight;
  let gradientHeight;
  let primaryColor;
  let secondaryColor;
  let theme;
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  let obj = require(3905) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  const gradientFallbackBackground = require(8085) /* useUserProfileColors */.useUserProfileColors({ theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  const obj2 = require(8085) /* useUserProfileColors */;
  const obj3 = require(8384) /* useUserProfileGradientColors */;
  const first = callback(require(8384) /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2)[0];
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
      return jsx(importDefault(4615), { colors: null, locations: null, style: null, pointerEvents: "none" });
    }
  }
  style = [closure_4.absoluteFill, { backgroundColor: gradientFallbackBackground }, ];
  style[2] = style;
  return <closure_5 style={style} pointerEvents="none" />;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default memoResult;