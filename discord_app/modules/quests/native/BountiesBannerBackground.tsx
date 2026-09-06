// === Module 15082: ? ===

// Module 15082
import initialize from "initialize" /* 504 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import VideoComponent from "VideoComponent" /* 8307 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = [0, 0.6];
let closure_9 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const memoResult = importAllResult.memo(function BountiesBannerBackground(arg0) {
  ({ children, style, uri } = arg0);
  let obj = initialize;
  const items = [closure_5];
  obj = { style, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { source: { uri }, style: closure_3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  const items1 = [callback(VideoComponent.VideoComponent, obj), callback(LinearGradientDefault, { colors: closure_9, locations: closure_8, style: closure_3.absoluteFillObject }), children];
  obj[1] = items1;
  return callback2(closure_4, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default memoResult;