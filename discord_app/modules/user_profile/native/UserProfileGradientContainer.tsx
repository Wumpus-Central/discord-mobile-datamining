// discord_app/modules/user_profile/native/UserProfileGradientContainer.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = require("../hooks/native/useUserProfileGradientColors.tsx") /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(require("../../../../_runtime/04706_LinearGradient.js"), { colors, style, children });
});
const result = require("useUserProfileGradientColors").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;