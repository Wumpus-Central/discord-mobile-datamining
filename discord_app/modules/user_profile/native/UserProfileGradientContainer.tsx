// discord_app/modules/user_profile/native/UserProfileGradientContainer.tsx
import c from "../../../../_runtime/00576_c.js";
import LinearGradientDefault from "../../../../_runtime/05612_LinearGradient.js";
import useUserProfileGradientColors from "../hooks/native/useUserProfileGradientColors.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(4);
        ({ containerStyle, children, primaryColor, secondaryColor, fallbackBackground } = arg0);
        const userProfileGradientColors = useUserProfileGradientColors.useUserProfileGradientColors(
          primaryColor,
          secondaryColor,
          fallbackBackground,
        );
        if (cResult[0] === children) {
          if (cResult[1] === userProfileGradientColors) {
            if (cResult[2] === containerStyle) {
              let tmp4 = cResult[3];
            }
            return tmp4;
          }
        }
        const tmp5 = jsx(LinearGradientDefault, { colors: userProfileGradientColors, style: containerStyle, children });
        cResult[0] = children;
        cResult[1] = userProfileGradientColors;
        cResult[2] = containerStyle;
        cResult[3] = tmp5;
        tmp4 = tmp5;
      }
    : (arg0) => {
        ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
        const colors = useUserProfileGradientColors.useUserProfileGradientColors(
          primaryColor,
          secondaryColor,
          fallbackBackground,
        );
        return jsx(LinearGradientDefault, { colors, style, children });
      },
);
