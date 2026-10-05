// discord_app/design/components/Tooltip/native/AnimatedTooltip.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react3 from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import AnimatedEnterExitItemDefault from "../../AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import Tooltip2 from "Tooltip.native.tsx";
import TooltipConstants from "TooltipConstants.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  return (
    <View style={items} pointerEvents="box-none">
      {tmpResult}
    </View>
  );
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
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
      const tmp12 = jsx(AnimatedEnterExitItemDefault, {
        useReducedMotion: enabled,
        item: tmp10,
        entering: result,
        exiting: result,
        renderItem: renderTooltipItem,
      });
      cResult[3] = result;
      cResult[4] = tmp10;
      cResult[5] = enabled;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (visible) => {
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
      return (
        <tmp7
          useReducedMotion={enabled}
          item={tmp8}
          entering={result}
          exiting={result}
          renderItem={renderTooltipItem}
        />
      );
    };
let result = size.fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = tmp2;
