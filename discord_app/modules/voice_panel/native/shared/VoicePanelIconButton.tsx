// === Module 17217: VoicePanelIconButton ===

// Module 17217 (VoicePanelIconButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6577 */;
import IconButton2 from "IconButton" /* 7586 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["style", "overrideVariant", "layout"];
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const memoResult = react.memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let layout;
  let overrideVariant;
  let str;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ style, overrideVariant, layout } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = layout;
    cResult[2] = overrideVariant;
    cResult[3] = tmp9;
    cResult[4] = style;
    tmp6 = style;
    tmp5 = tmp9;
    str = overrideVariant;
    tmp4 = layout;
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
    let tmp10;
    if (cResult[6] === str) {
      tmp10 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === ref) {
        if (cResult[10] === tmp6) {
          let tmp14;
          if (cResult[11] === tmp10) {
            tmp14 = cResult[12];
          }
          return tmp14;
        }
      }
    }
    const tmp17 = jsx(ReanimatedNativeViewDefault, { ref, style: tmp6, layout: tmp4, children: tmp10 });
    cResult[8] = tmp4;
    cResult[9] = ref;
    cResult[10] = tmp6;
    cResult[11] = tmp10;
    cResult[12] = tmp17;
    tmp14 = tmp17;
  }
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(tmp5);
  const tmp12 = <IconButton size="sm" variant={str} maxFontSizeMultiplier={2} />;
  cResult[5] = tmp5;
  cResult[6] = str;
  cResult[7] = tmp12;
  tmp10 = tmp12;
}) : ((overrideVariant, ref) => {
  let layout;
  let style;
  let str = overrideVariant.overrideVariant;
  ({ style, layout } = overrideVariant);
  const merged = Object.assign(overrideVariant, Object.assign({ style: 0, overrideVariant: 0, layout: 0 }));
  ReanimatedNativeViewDefault;
  const IconButton = IconButton2.IconButton;
  const merged1 = Object.assign(merged);
  if (str == null) {
    str = "secondary-overlay";
  }
  return <tmp3 ref={ref} style={style} layout={layout}>{null}</tmp3>;
})));
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelIconButton.tsx");

export default memoResult;