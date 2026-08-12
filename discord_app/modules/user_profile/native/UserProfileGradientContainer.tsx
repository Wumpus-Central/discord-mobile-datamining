// discord_app/modules/user_profile/native/UserProfileGradientContainer.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { LinearGradient } from "../../../../_runtime/04765_LinearGradient.js";
import { useUserProfileGradientColors } from "../hooks/native/useUserProfileGradientColors.tsx";

const require = arg1;
const memoResult = require("noop").memo((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradient, { colors, style, children });
});
const result = require("useUserProfileGradientColors").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;