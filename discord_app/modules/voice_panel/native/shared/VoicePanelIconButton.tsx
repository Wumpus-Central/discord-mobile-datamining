// discord_app/modules/voice_panel/native/shared/VoicePanelIconButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "overrideVariant", "layout"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default noop.memo(
  noop.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (arg0, ref) => {
          const cResult = c.c(13);
          if (cResult[0] !== arg0) {
            ({ style, overrideVariant, layout } = arg0);
            const tmp9 = _objectWithoutProperties(arg0, closure_3);
            cResult[0] = arg0;
            cResult[1] = layout;
            cResult[2] = overrideVariant;
            cResult[3] = tmp9;
            cResult[4] = style;
            let tmp6 = style;
            let tmp5 = tmp9;
            let str = overrideVariant;
            let tmp4 = layout;
          } else {
            tmp4 = cResult[1];
            str = cResult[2];
            tmp5 = cResult[3];
            tmp6 = cResult[4];
          }
          if (str == null) {
            str = "secondary-overlay";
          }
          if (cResult[5] === tmp5) {
            if (cResult[6] === str) {
              let tmp10 = cResult[7];
            }
            if (cResult[8] === tmp4) {
              if (cResult[9] === ref) {
                if (cResult[10] === tmp6) {
                  if (cResult[11] === tmp10) {
                    let tmp14 = cResult[12];
                  }
                  return tmp14;
                }
              }
            }
            const obj2 = { ref, style: tmp6, layout: tmp4, children: tmp10 };
            const tmp17 = jsx(ReanimatedNativeViewDefault, { ref, style: tmp6, layout: tmp4, children: tmp10 });
            cResult[8] = tmp4;
            cResult[9] = ref;
            cResult[10] = tmp6;
            cResult[11] = tmp10;
            cResult[12] = tmp17;
            tmp14 = tmp17;
          }
          const obj3 = {};
          const merged = Object.assign(tmp5);
          obj3.size = "sm";
          obj3.variant = str;
          obj3.maxFontSizeMultiplier = 2;
          const tmp12 = jsx(IconButton.IconButton, {});
          cResult[5] = tmp5;
          cResult[6] = str;
          cResult[7] = tmp12;
          tmp10 = tmp12;
        }
      : (overrideVariant, ref) => {
          let str = overrideVariant.overrideVariant;
          ({ style, layout } = overrideVariant);
          const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0 }));
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
        },
  ),
);
