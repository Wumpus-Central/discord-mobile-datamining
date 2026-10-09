// discord_app/modules/user_profile/native/UserProfileFixedBackground.tsx
import c from "../../../../_runtime/00576_c.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import LinearGradientDefault from "../../../../_runtime/05388_LinearGradient.js";
import useUserProfileColors from "../hooks/native/useUserProfileColors.tsx";
import useUserProfileGradientColors from "../hooks/native/useUserProfileGradientColors.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UserProfileFixedBackground(arg0) {
        const cResult = c.c(20);
        ({ style, gradientHeight, bannerHeight } = arg0);
        const themeContext = native.useThemeContext();
        ({ theme, primaryColor, secondaryColor } = themeContext);
        if (cResult[0] === primaryColor) {
          if (cResult[1] === secondaryColor) {
            if (cResult[2] === theme) {
              let tmp5 = cResult[3];
            }
            const gradientFallbackBackground =
              useUserProfileColors.useUserProfileColors(tmp5).gradientFallbackBackground;
            const tmpResult = useUserProfileColors;
            const tmpResult2 = useUserProfileGradientColors;
            [tmp8, tmp9] = useUserProfileGradientColors.useUserProfileGradientColors(
              primaryColor,
              secondaryColor,
              gradientFallbackBackground,
            );
            if (null != primaryColor) {
              if (null != secondaryColor) {
                const _Math = Math;
                const _Math2 = Math;
                const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
                if (cResult[4] === tmp8) {
                  if (cResult[5] === tmp9) {
                    let tmp19 = cResult[6];
                  }
                  if (cResult[7] !== bound) {
                    const items = [0, bound, 1];
                    cResult[7] = bound;
                    cResult[8] = items;
                    let tmp20 = items;
                  } else {
                    tmp20 = cResult[8];
                  }
                  if (cResult[9] !== style) {
                    const items1 = [React4.absoluteFill, style];
                    cResult[9] = style;
                    cResult[10] = items1;
                    let tmp21 = items1;
                  } else {
                    tmp21 = cResult[10];
                  }
                  if (cResult[11] === tmp19) {
                    if (cResult[12] === tmp20) {
                      if (cResult[13] === tmp21) {
                        let tmp23 = cResult[14];
                      }
                      return tmp23;
                    }
                  }
                  const obj3 = { colors: tmp19, locations: tmp20, style: tmp21, pointerEvents: "none" };
                  const tmp26 = jsx(LinearGradientDefault, {
                    colors: tmp19,
                    locations: tmp20,
                    style: tmp21,
                    pointerEvents: "none",
                  });
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
              let tmp11 = obj4;
            } else {
              tmp11 = cResult[16];
            }
            if (cResult[17] === style) {
              if (cResult[18] === tmp11) {
                let tmp12 = cResult[19];
              }
              return tmp12;
            }
            const obj5 = { style: null, pointerEvents: "none" };
            const items3 = [React4.absoluteFill, tmp11, style];
            obj5.style = items3;
            const tmp16 = <hasOwnProperty style={null} pointerEvents="none" />;
            cResult[17] = style;
            cResult[18] = tmp11;
            cResult[19] = tmp16;
            tmp12 = tmp16;
            const tmp7 = _slicedToArray(
              useUserProfileGradientColors.useUserProfileGradientColors(
                primaryColor,
                secondaryColor,
                gradientFallbackBackground,
              ),
              2,
            );
          }
        }
        const obj6 = { theme, primaryColor, secondaryColor };
        cResult[0] = primaryColor;
        cResult[1] = secondaryColor;
        cResult[2] = theme;
        cResult[3] = obj6;
        tmp5 = obj6;
      }
    : function UserProfileFixedBackground(style) {
        style = style.style;
        ({ gradientHeight, bannerHeight } = style);
        const themeContext = native.useThemeContext();
        ({ primaryColor, secondaryColor, theme } = themeContext);
        const gradientFallbackBackground = useUserProfileColors.useUserProfileColors({
          theme,
          primaryColor,
          secondaryColor,
        }).gradientFallbackBackground;
        const first = _slicedToArray(
          useUserProfileGradientColors.useUserProfileGradientColors(
            primaryColor,
            secondaryColor,
            gradientFallbackBackground,
          ),
          2,
        )[0];
        if (null != primaryColor) {
          if (null != secondaryColor) {
            const _Math = Math;
            const _Math2 = Math;
            const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
            const obj4 = { colors: null, locations: null, style: null, pointerEvents: "none" };
            const items = [first, first, tmp5];
            obj4.colors = items;
            const items1 = [0, bound, 1];
            obj4.locations = items1;
            const items2 = [React4.absoluteFill, style];
            obj4.style = items2;
            return jsx(LinearGradientDefault, { colors: null, locations: null, style: null, pointerEvents: "none" });
          }
        }
        const obj5 = { style: null, pointerEvents: "none" };
        const items3 = [React4.absoluteFill, { backgroundColor: gradientFallbackBackground }, style];
        obj5.style = items3;
        return <hasOwnProperty style={null} pointerEvents="none" />;
      },
);
