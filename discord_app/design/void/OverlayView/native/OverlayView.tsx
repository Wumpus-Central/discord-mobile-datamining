// === Module 5210: OverlayView ===

// Module 5210 (OverlayView)
import _modDef5260 from "module_5260" /* 5260 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1364);
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = fn(5211).FullWindowOverlay;
}
PlatformUtils = fn(1364);
if (PlatformUtils.isIOS()) {
  View = _modDef5260;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = function TransitionGroupOverlayView(children) {
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
};
export const NonExpandingOverlayView = View;