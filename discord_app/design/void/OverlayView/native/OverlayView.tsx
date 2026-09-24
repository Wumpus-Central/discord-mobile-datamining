// discord_app/design/void/OverlayView/native/OverlayView.tsx
import _modDef5252 from "../../../../../_runtime/metro/05252__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1364);
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = fn(5203).FullWindowOverlay;
}
PlatformUtils = fn(1364);
if (PlatformUtils.isIOS()) {
  View = _modDef5252;
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
