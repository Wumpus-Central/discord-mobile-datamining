// === Module 8860: ? ===

// Module 8860
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useThemeDefault from "useTheme" /* 4381 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4883 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = AccessibilityAnnouncer;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault;
  tmp3 = useThemeDefault();
  const merged = Object.assign(arg0);
  return jsx(isBlurDisabledDefault, { ref, blurTheme: str });
});
const result = require("set").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;