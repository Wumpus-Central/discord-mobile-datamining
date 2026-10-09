// === Module 10496: UserProfileGradientContainer ===

// Module 10496 (UserProfileGradientContainer)
import c from "c" /* 576 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8349 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileGradientContainer(arg0) {
  const cResult = c.c(4);
  ({ containerStyle, children, primaryColor, secondaryColor, fallbackBackground } = arg0);
  const userProfileGradientColors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
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
}) : (function UserProfileGradientContainer(arg0) {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
}));