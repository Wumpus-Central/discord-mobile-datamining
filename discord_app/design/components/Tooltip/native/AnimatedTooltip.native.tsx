// === Module 9897: AnimatedTooltip ===

// Module 9897 (AnimatedTooltip)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4602 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9660 */;
import Tooltip2 from "Tooltip" /* 9898 */;
import TooltipConstants from "TooltipConstants" /* 9900 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let visible;

let closure_3 = ["visible"];
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
function renderTooltipItem(arg0, arg1) {
  const items = [arg1, StyleSheet.absoluteFill];
  let tmpResult = null;
  const View = ReanimatedRexportDefault.View;
  if (null != arg0) {
    const Tooltip = Tooltip2.Tooltip;
    const merged = Object.assign(arg0);
    tmpResult = <Tooltip />;
  }
  return <View style={items} pointerEvents="box-none">{tmpResult}</View>;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let closure_129_1;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  visible = visible.visible;
  const tmp3 = _objectWithoutProperties(visible, closure_3);
  const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  const obj3 = TooltipConstants;
  const result = obj3.tooltipEnterExitAnimation(tmp3.position);
  [tmp6, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== visible) {
    const fn = function c() {
      closure_1_1(visible);
    };
    const items = [visible];
    cResult[0] = visible;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(tmp7, tmp8);
  let tmp10;
  if (tmp6) {
    tmp10 = tmp3;
  }
  if (cResult[3] === result) {
    if (cResult[4] === tmp10) {
      let tmp11;
      if (cResult[5] === enabled) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const tmp12 = jsx(AnimatedEnterExitItemDefault, { useReducedMotion: enabled, item: tmp10, entering: result, exiting: result, renderItem: renderTooltipItem });
  cResult[3] = result;
  cResult[4] = tmp10;
  cResult[5] = enabled;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((visible) => {
  let closure_1;
  let first;
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  closure_1 = undefined;
  const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  const obj = TooltipConstants;
  const result = obj.tooltipEnterExitAnimation(merged.position);
  [first, closure_1] = react.useState(false);
  const items = [visible];
  const effect = react.useEffect(() => {
    closure_1(visible);
  }, items);
  let tmp8;
  AnimatedEnterExitItemDefault;
  if (first) {
    tmp8 = merged;
  }
  return <tmp7 useReducedMotion={enabled} item={tmp8} entering={result} exiting={result} renderItem={renderTooltipItem} />;
});
let result = size.fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = tmp2;