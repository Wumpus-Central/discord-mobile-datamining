// === Module 5714: OverlayView ===

// Module 5714 (OverlayView)
import c from "c" /* 576 */;
import _modDef5764 from "module_5764" /* 5764 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["children"];
get_ActivityIndicator = fn(17);
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1369);
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = fn(5715).FullWindowOverlay;
}
const ReactCompilerGating = fn(558);
PlatformUtils = fn(1369);
if (PlatformUtils.isIOS()) {
  View = _modDef5764;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(6);
  if (cResult[0] !== children) {
    children = children.children;
    const tmp5 = _objectWithoutProperties(children, closure_2);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = tmp5;
    let tmp2 = tmp5;
    let arr = children;
  } else {
    arr = cResult[1];
    tmp2 = cResult[2];
  }
  if (cResult[3] === arr) {
    if (cResult[4] === tmp2) {
      let tmp6 = cResult[5];
    }
    return tmp6;
  }
  let tmp7 = null;
  if (Array.isArray(arr)) {
    tmp7 = null;
    if (arr.length > 0) {
      const obj2 = { style: StyleSheet.absoluteFill, children: null };
      const obj3 = {};
      const merged = Object.assign(tmp2);
      obj3.children = arr;
      obj2.children = <View />;
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
      const obj = { style: StyleSheet.absoluteFill, children: null };
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.children = children;
      obj.children = <View />;
      tmp2 = <FullWindowOverlay style={StyleSheet.absoluteFill}>{null}</FullWindowOverlay>;
    }
  }
  return tmp2;
});
export const NonExpandingOverlayView = View;