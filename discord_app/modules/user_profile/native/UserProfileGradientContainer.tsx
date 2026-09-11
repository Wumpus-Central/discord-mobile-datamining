// === Module 11206: UserProfileGradientContainer ===

// Module 11206 (UserProfileGradientContainer)
import LinearGradientDefault from "LinearGradient" /* 5038 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8323 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo((arg0) => {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});