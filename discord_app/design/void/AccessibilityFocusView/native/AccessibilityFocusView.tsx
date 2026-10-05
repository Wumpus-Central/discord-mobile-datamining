// === Module 13931: AccessibilityFocusView ===

// Module 13931 (AccessibilityFocusView)
import c from "c" /* 576 */;
import AccessibilityFocusNativeComponentDefault from "AccessibilityFocusNativeComponent" /* 13932 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onAccessibilityFocus", "onAccessibilityBlur"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  if (cResult[0] !== arg0) {
    ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = onAccessibilityBlur;
    cResult[2] = onAccessibilityFocus;
    cResult[3] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = onAccessibilityFocus;
    let tmp3 = onAccessibilityBlur;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  if (cResult[4] === tmp3) {
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp5) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
  }
  const obj2 = {};
  const merged = Object.assign(tmp5);
  obj2.onAccessibilityFocus = tmp4;
  obj2.onAccessibilityBlur = tmp3;
  const tmp12 = jsx(AccessibilityFocusNativeComponentDefault, {});
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = tmp5;
  cResult[7] = tmp12;
  tmp9 = tmp12;
}) : ((arg0) => {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onAccessibilityFocus: 0, onAccessibilityBlur: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return jsx(AccessibilityFocusNativeComponentDefault, {});
});