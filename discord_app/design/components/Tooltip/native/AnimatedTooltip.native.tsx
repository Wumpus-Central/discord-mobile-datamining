// === Module 9271: renderTooltipItem ===

// Module 9271 (renderTooltipItem)
import _modDef4115 from "module_4115" /* 4115 */;
import Tooltip from "Tooltip" /* 9272 */;
import AnimatedRenderItemDefault from "AnimatedRenderItem" /* 9275 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function renderTooltipItem(arg0, arg1) {
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items = [arg1, StyleSheet.absoluteFill];
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    tmpResult = jsx(Tooltip.Tooltip, {});
  }
  obj[2] = tmpResult;
  return jsx(_modDef4115.View, { style: items, pointerEvents: "box-none", children: null });
}
let result = require("obj132").fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.create(null));
  let obj = visible(9274);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const tmp3 = callback(React.useState(false), 2);
  importDefault = tmp3[1];
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(1356).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp7;
  if (tmp3[0]) {
    tmp7 = merged;
  }
  obj[1] = tmp7;
  obj[2] = result;
  obj[3] = result;
  obj[4] = renderTooltipItem;
  return jsx(AnimatedRenderItemDefault, { useReducedMotion: React.useContext(visible(1356).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null });
};