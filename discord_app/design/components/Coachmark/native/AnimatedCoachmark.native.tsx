// === Module 9088: AnimatedCoachmark ===

// Module 9088 (AnimatedCoachmark)
import _modDef1653 from "module_1653" /* 1653 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4927 */;
import TooltipConstants from "TooltipConstants" /* 8946 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 8947 */;
import Coachmark from "Coachmark" /* 9089 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  const obj = { style: null, pointerEvents: "box-none", children: null };
  items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  obj.style = items;
  let tmpResult = null;
  if (null != arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.enterExitAnimatedStyles = enterExitAnimatedStyles;
    tmpResult = jsx(Coachmark.CoachmarkContainer, {});
  }
  obj.children = tmpResult;
  return jsx(_modDef1653.View, { style: null, pointerEvents: "box-none", children: null });
}
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export function AnimatedCoachmark(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  c1 = undefined;
  [tmp3, c1] = noop.useState(visible);
  const tmp2 = _slicedToArray(noop.useState(visible), 2);
  const result = TooltipConstants.tooltipEnterExitAnimation(merged.position);
  items = [visible];
  const effect = noop.useEffect(() => {
    _undefined(visible);
  }, items);
  const obj2 = { useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp8;
  if (tmp3) {
    tmp8 = merged;
  }
  obj2.item = tmp8;
  obj2.entering = result;
  obj2.exiting = result;
  obj2.renderItem = renderTooltipItem;
  return jsx(AnimatedEnterExitItemDefault, { useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null });
}