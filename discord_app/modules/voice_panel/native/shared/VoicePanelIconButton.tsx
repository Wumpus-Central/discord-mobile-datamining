// discord_app/modules/voice_panel/native/shared/VoicePanelIconButton.tsx
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default noop.memo(
  noop.forwardRef((overrideVariant, ref) => {
    let str = overrideVariant.overrideVariant;
    ({ style, layout } = overrideVariant);
    const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0 }));
    let obj = { ref, style, layout, children: null };
    obj = {};
    const merged1 = Object.assign(merged);
    obj.size = "sm";
    if (str == null) {
      str = "secondary-overlay";
    }
    obj.variant = str;
    obj.maxFontSizeMultiplier = 2;
    obj.children = jsx(IconButton.IconButton, {});
    return jsx(ReanimatedNativeViewDefault, {});
  }),
);
