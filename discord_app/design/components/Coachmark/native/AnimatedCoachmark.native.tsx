// === Module 9902: AnimatedCoachmark ===

// Module 9902 (AnimatedCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4602 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9660 */;
import TooltipConstants from "TooltipConstants" /* 9900 */;
import Coachmark from "Coachmark" /* 9903 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let visible;

let closure_3 = ["visible"];
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  const items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  let tmpResult = null;
  const View = ReanimatedRexportDefault.View;
  if (null != arg0) {
    const CoachmarkContainer = Coachmark.CoachmarkContainer;
    const merged = Object.assign(arg0);
    tmpResult = <CoachmarkContainer enterExitAnimatedStyles={enterExitAnimatedStyles} />;
  }
  return <View style={items} pointerEvents="box-none">{tmpResult}</View>;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const obj = react2;
  const cResult = obj.c(9);
  visible = visible.visible;
  const tmp3 = _objectWithoutProperties(visible, closure_3);
  const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp4 = _slicedToArray(react.useState(visible), 2);
  let closure_1 = tmp6;
  const first = tmp4[0];
  const obj3 = TooltipConstants;
  const result = obj3.tooltipEnterExitAnimation(tmp3.position);
  if (cResult[0] === tmp4[1]) {
    let tmp8;
    let tmp9;
    if (cResult[1] === visible) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== visible) {
      const items = [visible];
      cResult[3] = visible;
      cResult[4] = items;
      tmp9 = items;
    } else {
      tmp9 = cResult[4];
    }
    const effect = react.useEffect(tmp8, tmp9);
    let tmp11;
    if (first) {
      tmp11 = tmp3;
    }
    if (cResult[5] === result) {
      if (cResult[6] === tmp11) {
        let tmp12;
        if (cResult[7] === enabled) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const tmp16 = jsx(AnimatedEnterExitItemDefault, { useReducedMotion: enabled, item: tmp11, entering: result, exiting: result, renderItem: renderTooltipItem });
    cResult[5] = result;
    cResult[6] = tmp11;
    cResult[7] = enabled;
    cResult[8] = tmp16;
    tmp12 = tmp16;
  }
  const fn = function u() {
    closure_1(visible);
  };
  cResult[0] = tmp4[1];
  cResult[1] = visible;
  cResult[2] = fn;
  tmp8 = fn;
}) : ((visible) => {
  let c1;
  let tmp3;
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  c1 = undefined;
  const enabled = react.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  [tmp3, c1] = react.useState(visible);
  _slicedToArray(react.useState(visible), 2);
  const obj = TooltipConstants;
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = react.useEffect(() => {
    _undefined(visible);
  }, items);
  let tmp8;
  AnimatedEnterExitItemDefault;
  if (tmp3) {
    tmp8 = merged;
  }
  return <tmp7 useReducedMotion={enabled} item={tmp8} entering={result} exiting={result} renderItem={renderTooltipItem} />;
});
let result = size.fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = tmp2;