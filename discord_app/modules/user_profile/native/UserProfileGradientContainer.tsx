// === Module 10855: UserProfileGradientContainer ===

// Module 10855 (UserProfileGradientContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 7922 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  const obj = react2;
  const cResult = obj.c(4);
  ({ containerStyle, children, primaryColor, secondaryColor, fallbackBackground } = arg0);
  const obj2 = useUserProfileGradientColors;
  const userProfileGradientColors = obj2.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
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
}) : ((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const obj = useUserProfileGradientColors;
  const colors = obj.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
}));
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;