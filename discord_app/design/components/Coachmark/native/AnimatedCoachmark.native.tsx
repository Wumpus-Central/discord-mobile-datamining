// discord_app/design/components/Coachmark/native/AnimatedCoachmark.native.tsx
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import AnimatedEnterExitItemDefault from "../../AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import TooltipConstants from "../../Tooltip/native/TooltipConstants.native.tsx";
import Coachmark from "Coachmark.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  let obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  obj.style = items;
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.enterExitAnimatedStyles = enterExitAnimatedStyles;
    tmpResult = tmp(Coachmark.CoachmarkContainer, obj);
  }
  obj.children = tmpResult;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "box-none", children: null });
}
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  c1 = undefined;
  [tmp3, c1] = _slicedToArray(noop.useState(visible), 2);
  let obj = TooltipConstants;
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = noop.useEffect(() => {
    _undefined(visible);
  }, items);
  obj = {
    useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
      .enabled,
    item: null,
    entering: null,
    exiting: null,
    renderItem: null,
  };
  let tmp8;
  const tmp2 = _slicedToArray(noop.useState(visible), 2);
  const tmp6 = jsx;
  if (tmp3) {
    tmp8 = merged;
  }
  obj.item = tmp8;
  obj.entering = result;
  obj.exiting = result;
  obj.renderItem = renderTooltipItem;
  return tmp6(AnimatedEnterExitItemDefault, obj);
};
