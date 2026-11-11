// === Module 9464: UserProfileGradientContainer ===

// Module 9464 (UserProfileGradientContainer)
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8536 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo(function UserProfileGradientContainer(arg0) {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});