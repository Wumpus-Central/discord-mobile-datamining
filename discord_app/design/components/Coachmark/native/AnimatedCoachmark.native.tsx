// discord_app/design/components/Coachmark/native/AnimatedCoachmark.native.tsx
import _modDef4185 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import AnimatedRenderItemDefault from "../../AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import Coachmark from "Coachmark.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.enterExitAnimatedStyles = enterExitAnimatedStyles;
    tmpResult = tmp(Coachmark.CoachmarkContainer, obj);
  }
  obj[2] = tmpResult;
  return jsx(_modDef4185.View, { style: items, pointerEvents: "box-none", children: null });
}
let result = require("set").fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.create(null));
  importDefault = undefined;
  [tmp3, c1] = callback(React.useState(visible), 2);
  let obj = visible(8900);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = React.useEffect(() => {
    _undefined(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(1356).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp8;
  const tmp2 = callback(React.useState(visible), 2);
  const tmp6 = jsx;
  if (tmp3) {
    tmp8 = merged;
  }
  obj[1] = tmp8;
  obj[2] = result;
  obj[3] = result;
  obj[4] = renderTooltipItem;
  return tmp6(AnimatedRenderItemDefault, obj);
};