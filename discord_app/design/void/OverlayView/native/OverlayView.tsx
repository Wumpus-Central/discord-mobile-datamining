// === Module 4539: View ===

// Module 4539 (View)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "set";
import set from "jsxProd";

let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
let FullWindowOverlay = View;
if (set.isIOS()) {
  FullWindowOverlay = require("enableScreens").FullWindowOverlay;
}
if (set.isIOS()) {
  View = require("__INTERNAL_VIEW_CONFIG");
}
const result = set.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = function TransitionGroupOverlayView(children) {
  children = children.children;
  const merged = Object.assign(children, Object.create(null));
  let tmp2 = null;
  if (Array.isArray(children)) {
    tmp2 = null;
    if (children.length > 0) {
      let obj = { style: null, children: null };
      obj[0] = StyleSheet.absoluteFill;
      obj = {};
      const merged1 = Object.assign(merged);
      obj.children = children;
      obj[1] = <View />;
      tmp2 = <FullWindowOverlay />;
    }
  }
  return tmp2;
};
export const NonExpandingOverlayView = View;