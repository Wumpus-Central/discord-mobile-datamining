// === Module 15082: BountiesBannerBackground ===

// Module 15082 (BountiesBannerBackground)
import initialize from "initialize" /* 504 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import common_Video from "common/Video" /* 8307 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const locations = [0, 0.6];
const colors = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default noop.memo(function BountiesBannerBackground(arg0) {
  ({ children, style, uri } = arg0);
  const items = [AccessibilityStore];
  let obj = { style, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { source: { uri }, style: React3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  const items1 = [timestampProducer(common_Video.VideoComponent, obj), timestampProducer(LinearGradientDefault, { colors, locations, style: React3.absoluteFillObject }), children];
  obj.children = items1;
  return React5(React4, obj);
});