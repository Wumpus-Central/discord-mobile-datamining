// discord_app/design/void/OverlayView/native/OverlayView.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../../_runtime/metro/04710___INTERNAL_VIEW_CONFIG.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../../utils/PlatformUtils.tsx";

noopAll;
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
let FullWindowOverlay = View;
if (set.isIOS()) {
  FullWindowOverlay = require("enableScreens").FullWindowOverlay;
}
if (set.isIOS()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
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