// === Module 13931: AccessibilityFocusView ===

// Module 13931 (AccessibilityFocusView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import AccessibilityFocusNativeComponentDefault from "AccessibilityFocusNativeComponent" /* 13932 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["onAccessibilityFocus", "onAccessibilityBlur"];
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onAccessibilityBlur;
  let onAccessibilityFocus;
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== arg0) {
    ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = onAccessibilityBlur;
    cResult[2] = onAccessibilityFocus;
    cResult[3] = tmp8;
    tmp5 = tmp8;
    tmp4 = onAccessibilityFocus;
    tmp3 = onAccessibilityBlur;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  if (cResult[4] === tmp3) {
    if (cResult[5] === tmp4) {
      let tmp9;
      if (cResult[6] === tmp5) {
        tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  AccessibilityFocusNativeComponentDefault;
  const merged = Object.assign(tmp5);
  const tmp12 = <tmp10 onAccessibilityFocus={tmp4} onAccessibilityBlur={tmp3} />;
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = tmp5;
  cResult[7] = tmp12;
  tmp9 = tmp12;
}) : ((arg0) => {
  let onAccessibilityBlur;
  let onAccessibilityFocus;
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onAccessibilityFocus: 0, onAccessibilityBlur: 0 }));
  AccessibilityFocusNativeComponentDefault;
  const merged1 = Object.assign(merged);
  return <tmp2 onAccessibilityFocus={onAccessibilityFocus} onAccessibilityBlur={onAccessibilityBlur} />;
});
const result = size.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default tmp3;