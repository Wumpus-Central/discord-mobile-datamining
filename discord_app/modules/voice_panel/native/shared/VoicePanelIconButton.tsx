// === Module 17650: VoicePanelIconButton ===

// Module 17650 (VoicePanelIconButton)
import c from "c" /* 576 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6760 */;
import IconButton from "IconButton" /* 8114 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["style", "overrideVariant", "layout", "ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelIconButton(arg0) {
  const cResult = c.c(14);
  if (cResult[0] !== arg0) {
    ({ style, overrideVariant, layout, ref } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = layout;
    cResult[2] = overrideVariant;
    cResult[3] = tmp10;
    cResult[4] = ref;
    cResult[5] = style;
    let tmp7 = style;
    let tmp6 = ref;
    let tmp5 = tmp10;
    let str = overrideVariant;
    let tmp4 = layout;
  } else {
    tmp4 = cResult[1];
    str = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
  }
  if (str == null) {
    str = "secondary-overlay";
  }
  if (cResult[6] === tmp5) {
    if (cResult[7] === str) {
      let tmp11 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp11) {
            let tmp14 = cResult[13];
          }
          return tmp14;
        }
      }
    }
    const obj2 = { ref: tmp6, style: tmp7, layout: tmp4, children: tmp11 };
    const tmp17 = jsx(ReanimatedNativeViewDefault, { ref: tmp6, style: tmp7, layout: tmp4, children: tmp11 });
    cResult[9] = tmp4;
    cResult[10] = tmp6;
    cResult[11] = tmp7;
    cResult[12] = tmp11;
    cResult[13] = tmp17;
    tmp14 = tmp17;
  }
  const obj3 = {};
  const merged = Object.assign(tmp5);
  obj3.size = "sm";
  obj3.variant = str;
  obj3.maxFontSizeMultiplier = 2;
  const tmp13 = jsx(IconButton.IconButton, {});
  cResult[6] = tmp5;
  cResult[7] = str;
  cResult[8] = tmp13;
  tmp11 = tmp13;
}) : (function VoicePanelIconButton(overrideVariant) {
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
}));