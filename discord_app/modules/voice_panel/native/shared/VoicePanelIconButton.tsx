// discord_app/modules/voice_panel/native/shared/VoicePanelIconButton.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { IconButton } from "../../../../design/components/Button/native/IconButton.native.tsx";
import { ReanimatedNativeView } from "../../../core/native/ReanimatedNativeView.tsx";

const require = arg1;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let layout;
  let style;
  let str = overrideVariant.overrideVariant;
  ({ style, layout } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.create(null));
  let obj = { ref, style, layout, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = "sm";
  if (str == null) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.maxFontSizeMultiplier = 2;
  obj[3] = jsx(IconButton.IconButton, {});
  return jsx(ReanimatedNativeView, {});
}));
const result = require("module_8009").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;