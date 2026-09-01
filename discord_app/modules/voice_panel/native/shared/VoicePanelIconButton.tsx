// discord_app/modules/voice_panel/native/shared/VoicePanelIconButton.tsx
import setDefault from "../../../core/native/ReanimatedNativeView.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
const memoResult = importAllResult.memo(
  importAllResult.forwardRef((overrideVariant, ref) => {
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
    return jsx(setDefault, {});
  }),
);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;
