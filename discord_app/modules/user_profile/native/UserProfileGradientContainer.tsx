// discord_app/modules/user_profile/native/UserProfileGradientContainer.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import LinearGradientDefault from "../../../../_runtime/05612_LinearGradient.js";
import useUserProfileGradientColors from "../hooks/native/useUserProfileGradientColors.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let children;
        let containerStyle;
        let fallbackBackground;
        let primaryColor;
        let secondaryColor;
        const obj = react2;
        const cResult = obj.c(4);
        ({ containerStyle, children, primaryColor, secondaryColor, fallbackBackground } = arg0);
        const obj2 = useUserProfileGradientColors;
        const userProfileGradientColors = obj2.useUserProfileGradientColors(
          primaryColor,
          secondaryColor,
          fallbackBackground,
        );
        if (cResult[0] === children) {
          if (cResult[1] === userProfileGradientColors) {
            let tmp4;
            if (cResult[2] === containerStyle) {
              tmp4 = cResult[3];
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
        let children;
        let containerStyle;
        let fallbackBackground;
        let primaryColor;
        let secondaryColor;
        ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
        const obj = useUserProfileGradientColors;
        const colors = obj.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
        return jsx(LinearGradientDefault, { colors, style, children });
      },
);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
