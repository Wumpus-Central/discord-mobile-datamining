// discord_app/design/components/Tooltip/native/AnimatedTooltip.native.tsx
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import AnimatedEnterExitItemDefault from "../../AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import Tooltip from "Tooltip.native.tsx";
import TooltipConstants from "TooltipConstants.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
function renderTooltipItem(arg0, arg1) {
  let obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [arg1, StyleSheet.absoluteFill];
  obj.style = items;
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    tmpResult = tmp(Tooltip.Tooltip, obj);
  }
  obj.children = tmpResult;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "box-none", children: null });
}
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let obj = TooltipConstants;
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp3[1];
  const items = [visible];
  const effect = noop.useEffect(() => {
    closure_1(visible);
  }, items);
  obj = {
    useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
      .enabled,
    item: null,
    entering: null,
    exiting: null,
    renderItem: null,
  };
  let tmp7;
  if (tmp3[0]) {
    tmp7 = merged;
  }
  obj.item = tmp7;
  obj.entering = result;
  obj.exiting = result;
  obj.renderItem = renderTooltipItem;
  return jsx(AnimatedEnterExitItemDefault, {
    useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
      .enabled,
    item: null,
    entering: null,
    exiting: null,
    renderItem: null,
  });
};
