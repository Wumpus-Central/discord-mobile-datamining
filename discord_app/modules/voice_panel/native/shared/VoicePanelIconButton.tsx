// === Module 16254: ? ===

// Module 16254
import IconButton from "IconButton" /* 8035 */;
import obj132Default from "obj132" /* 8125 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
const memoResult = importAllResult.memo(importAllResult.forwardRef((overrideVariant, ref) => {
  let str = overrideVariant.overrideVariant;
  ({ style, layout } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.size = "sm";
  if (str == null) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.maxFontSizeMultiplier = 2;
  obj[3] = jsx(IconButton.IconButton, {});
  return jsx(obj132Default, {});
}));
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;