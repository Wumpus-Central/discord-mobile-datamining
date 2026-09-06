// discord_app/modules/user_profile/native/UserProfileFixedBackground.tsx
import native from "../../../../discord_common/js/packages/design/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import useUserProfileColors from "../hooks/native/useUserProfileColors.tsx";
import useUserProfileGradientColors from "../hooks/native/useUserProfileGradientColors.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default noop.memo((style) => {
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  let obj = native;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  const gradientFallbackBackground = useUserProfileColors.useUserProfileColors({
    theme,
    primaryColor,
    secondaryColor,
  }).gradientFallbackBackground;
  const first = _slicedToArray(
    useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground),
    2,
  )[0];
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
      obj = { colors: null, locations: null, style: null, pointerEvents: "none" };
      const items = [first, first, tmp5];
      obj.colors = items;
      const items1 = [0, bound, 1];
      obj.locations = items1;
      const items2 = [React4.absoluteFill, style];
      obj.style = items2;
      return jsx(LinearGradientDefault, { colors: null, locations: null, style: null, pointerEvents: "none" });
    }
  }
  obj = { style: null, pointerEvents: "none" };
  const items3 = [React4.absoluteFill, { backgroundColor: gradientFallbackBackground }, style];
  obj.style = items3;
  return <hasOwnProperty style={null} pointerEvents="none" />;
});
