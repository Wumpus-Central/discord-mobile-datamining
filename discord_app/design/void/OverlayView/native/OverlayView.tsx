// === Module 4911: OverlayView ===

// Module 4911 (OverlayView)
import _modDef4946 from "module_4946" /* 4946 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1115);
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = fn(4912).FullWindowOverlay;
}
PlatformUtils = fn(1115);
if (PlatformUtils.isIOS()) {
  View = _modDef4946;
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
      let obj = { style: StyleSheet.absoluteFill, children: null };
      obj = {};
      const merged1 = Object.assign(merged);
      obj.children = children;
      obj.children = <View />;
      tmp2 = <FullWindowOverlay />;
    }
  }
  return tmp2;
};
export const NonExpandingOverlayView = View;