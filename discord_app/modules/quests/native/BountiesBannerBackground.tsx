// discord_app/modules/quests/native/BountiesBannerBackground.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import LinearGradientDefault from "../../../../_runtime/04940_LinearGradient.js";
import VideoComponent from "../../../components_native/common/Video.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

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