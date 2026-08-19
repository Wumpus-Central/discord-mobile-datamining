// === Module 4669: View ===

// Module 4669 (View)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4704 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;

noopAll;
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
let FullWindowOverlay = View;
if (obj132.isIOS()) {
  FullWindowOverlay = require("enableScreens").FullWindowOverlay;
}
if (obj132.isIOS()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = obj132.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

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