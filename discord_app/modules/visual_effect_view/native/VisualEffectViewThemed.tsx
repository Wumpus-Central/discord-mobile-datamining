// discord_app/modules/visual_effect_view/native/VisualEffectViewThemed.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { AccessibilityAnnouncer } from "../../../design/shared.tsx";
import { useTheme } from "../../../hooks/useTheme.tsx";
import { isBlurDisabled } from "VisualEffectView.tsx";

const require = arg1;
const forwardRefResult = require("noop").forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  const tmp = importDefault;
  tmp3 = useTheme();
  const merged = Object.assign(arg0);
  return jsx(isBlurDisabled, { ref, blurTheme: str });
});
const result = require("useTheme").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default forwardRefResult;