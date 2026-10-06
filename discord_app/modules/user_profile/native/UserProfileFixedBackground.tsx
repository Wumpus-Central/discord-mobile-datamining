// === Module 7920: UserProfileFixedBackground ===

// Module 7920 (UserProfileFixedBackground)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 4595 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import useUserProfileColors from "useUserProfileColors" /* 7921 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 7922 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bannerHeight;
  let gradientHeight;
  let primaryColor;
  let secondaryColor;
  let style;
  let theme;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(20);
  ({ style, gradientHeight, bannerHeight } = arg0);
  const obj2 = native;
  const themeContext = obj2.useThemeContext();
  ({ theme, primaryColor, secondaryColor } = themeContext);
  if (cResult[0] === primaryColor) {
    if (cResult[1] === secondaryColor) {
      let tmp5;
      let tmp11;
      if (cResult[2] === theme) {
        tmp5 = cResult[3];
      }
      const tmpResult = useUserProfileColors;
      const gradientFallbackBackground = tmpResult.useUserProfileColors(tmp5).gradientFallbackBackground;
      const tmpResult2 = useUserProfileGradientColors;
      [tmp8, tmp9] = tmpResult2.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground);
      _slicedToArray(tmpResult2.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2);
      if (null != primaryColor) {
        if (null != secondaryColor) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
          if (cResult[4] === tmp8) {
            let tmp19;
            let tmp20;
            let tmp21;
            if (cResult[5] === tmp9) {
              tmp19 = cResult[6];
            }
            if (cResult[7] !== bound) {
              const items = [0, bound, 1];
              cResult[7] = bound;
              cResult[8] = items;
              tmp20 = items;
            } else {
              tmp20 = cResult[8];
            }
            if (cResult[9] !== style) {
              const items1 = [React3.absoluteFill, style];
              cResult[9] = style;
              cResult[10] = items1;
              tmp21 = items1;
            } else {
              tmp21 = cResult[10];
            }
            if (cResult[11] === tmp19) {
              if (cResult[12] === tmp20) {
                let tmp23;
                if (cResult[13] === tmp21) {
                  tmp23 = cResult[14];
                }
                return tmp23;
              }
            }
            const tmp26 = jsx(LinearGradientDefault, { colors: tmp19, locations: tmp20, style: tmp21, pointerEvents: "none" });
            cResult[11] = tmp19;
            cResult[12] = tmp20;
            cResult[13] = tmp21;
            cResult[14] = tmp26;
            tmp23 = tmp26;
          }
          const items2 = [tmp8, tmp8, tmp9];
          cResult[4] = tmp8;
          cResult[5] = tmp9;
          cResult[6] = items2;
          tmp19 = items2;
        }
      }
      if (cResult[15] !== gradientFallbackBackground) {
        const obj4 = { backgroundColor: gradientFallbackBackground };
        cResult[15] = gradientFallbackBackground;
        cResult[16] = obj4;
        tmp11 = obj4;
      } else {
        tmp11 = cResult[16];
      }
      if (cResult[17] === style) {
        let tmp12;
        if (cResult[18] === tmp11) {
          tmp12 = cResult[19];
        }
        return tmp12;
      }
      const items3 = [React3.absoluteFill, tmp11, style];
      const tmp16 = <hasOwnProperty style={items3} pointerEvents="none" />;
      cResult[17] = style;
      cResult[18] = tmp11;
      cResult[19] = tmp16;
      tmp12 = tmp16;
    }
  }
  const obj6 = { theme, primaryColor, secondaryColor };
  cResult[0] = primaryColor;
  cResult[1] = secondaryColor;
  cResult[2] = theme;
  cResult[3] = obj6;
  tmp5 = obj6;
}) : ((style) => {
  let bannerHeight;
  let gradientHeight;
  let primaryColor;
  let secondaryColor;
  let theme;
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  const obj = native;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  const obj2 = useUserProfileColors;
  const gradientFallbackBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  const obj3 = useUserProfileGradientColors;
  const first = _slicedToArray(obj3.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2)[0];
  _slicedToArray(obj3.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
      const items = [first, first, tmp5];
      const items1 = [0, bound, 1];
      const items2 = [React3.absoluteFill, style];
      return jsx(LinearGradientDefault, { colors: items, locations: items1, style: items2, pointerEvents: "none" });
    }
  }
  const items3 = [React3.absoluteFill, { backgroundColor: gradientFallbackBackground }, style];
  return <hasOwnProperty style={items3} pointerEvents="none" />;
}));
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default memoResult;