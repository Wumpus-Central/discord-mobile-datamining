// === Module 19143: VoicePanelIconButton ===

// Module 19143 (VoicePanelIconButton)
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7241 */;
import IconButton from "IconButton" /* 8028 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default noop.memo(function VoicePanelIconButton(overrideVariant) {
  let str = overrideVariant.overrideVariant;
  ({ style, layout, ref } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0, ref: 0 }));
  const obj = { ref, style, layout, children: null };
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.size = "sm";
  if (str == null) {
    str = "secondary-overlay";
  }
  obj2.variant = str;
  obj2.maxFontSizeMultiplier = 2;
  obj.children = jsx(IconButton.IconButton, {});
  return jsx(ReanimatedNativeViewDefault, { ref, style, layout, children: null });
});