// discord_app/modules/user_profile/native/UserProfileGradientContainer.tsx
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import useUserProfileGradientColors from "../hooks/native/useUserProfileGradientColors.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo((arg0) => {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(
    primaryColor,
    secondaryColor,
    fallbackBackground,
  );
  return jsx(LinearGradientDefault, { colors, style, children });
});
