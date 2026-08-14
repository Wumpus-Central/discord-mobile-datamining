// discord_app/modules/quests/native/BountiesBannerBackground.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import importAllResult from "noop";
import { LinearGradient } from "../../../../_runtime/04788_LinearGradient.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { VideoComponent } from "../../../components_native/common/Video.tsx";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = [0, 0.6];
let closure_9 = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
const memoResult = require("noop").memo(function BountiesBannerBackground(arg0) {
  let children;
  let style;
  let uri;
  ({ children, style, uri } = arg0);
  let obj = initialize;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  obj = { style, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { source: { uri }, style: closure_3.absoluteFillObject, resizeMode: "cover", muted: true, disableFocus: true, paused: stateFromStores, importantForAccessibility: "no-hide-descendants" };
  const items1 = [callback(VideoComponent.VideoComponent, obj), callback(LinearGradient, { colors: closure_9, locations: closure_8, style: closure_3.absoluteFillObject }), children];
  obj[1] = items1;
  return callback2(closure_4, obj);
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/quests/native/BountiesBannerBackground.tsx");

export default memoResult;