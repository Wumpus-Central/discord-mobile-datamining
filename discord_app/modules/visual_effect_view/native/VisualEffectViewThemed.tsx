// discord_app/modules/visual_effect_view/native/VisualEffectViewThemed.tsx
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import isBlurDisabledDefault from "VisualEffectView.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

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
