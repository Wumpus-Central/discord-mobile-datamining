// === Module 8989: renderTooltipItem ===

// Module 8989 (renderTooltipItem)
import _modDef4217 from "module_4217" /* 4217 */;
import Tooltip from "Tooltip" /* 8990 */;
import AnimatedRenderItemDefault from "AnimatedRenderItem" /* 8993 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function renderTooltipItem(arg0, arg1) {
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items = [arg1, StyleSheet.absoluteFill];
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    tmpResult = tmp(Tooltip.Tooltip, obj);
  }
  obj[2] = tmpResult;
  return jsx(_modDef4217.View, { style: items, pointerEvents: "box-none", children: null });
}
let result = require("set").fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.create(null));
  importDefault = undefined;
  let obj = visible(8992);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const tmp3 = callback(React.useState(false), 2);
  importDefault = tmp3[1];
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(1355).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp7;
  if (tmp3[0]) {
    tmp7 = merged;
  }
  obj[1] = tmp7;
  obj[2] = result;
  obj[3] = result;
  obj[4] = renderTooltipItem;
  return jsx(AnimatedRenderItemDefault, { useReducedMotion: React.useContext(visible(1355).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null });
};