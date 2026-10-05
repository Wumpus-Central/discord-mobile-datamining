// === Module 5714: OverlayView ===

// Module 5714 (OverlayView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import enableScreens from "enableScreens" /* 5715 */;
import react_nativeDefault from "react-native" /* 5764 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let closure_2 = ["children"];
let View = react_native.View;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let PlatformUtils = PlatformUtils_mod;
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = enableScreens.FullWindowOverlay;
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let arr;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== children) {
    children = children.children;
    const tmp5 = _objectWithoutProperties(children, closure_2);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = tmp5;
    tmp2 = tmp5;
    arr = children;
  } else {
    arr = cResult[1];
    tmp2 = cResult[2];
  }
  if (cResult[3] === arr) {
    let tmp6;
    if (cResult[4] === tmp2) {
      tmp6 = cResult[5];
    }
    return tmp6;
  }
  let tmp7 = null;
  if (Array.isArray(arr)) {
    tmp7 = null;
    if (arr.length > 0) {
      const merged = Object.assign(tmp2);
      tmp7 = <FullWindowOverlay style={StyleSheet.absoluteFill}>{null}</FullWindowOverlay>;
    }
  }
  cResult[3] = arr;
  cResult[4] = tmp2;
  cResult[5] = tmp7;
  tmp6 = tmp7;
}) : ((children) => {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let tmp2 = null;
  if (Array.isArray(children)) {
    tmp2 = null;
    if (children.length > 0) {
      const merged1 = Object.assign(merged);
      tmp2 = <FullWindowOverlay style={StyleSheet.absoluteFill}>{null}</FullWindowOverlay>;
    }
  }
  return tmp2;
});
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  View = react_nativeDefault;
}
const result = size.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = tmp4;
export const NonExpandingOverlayView = View;