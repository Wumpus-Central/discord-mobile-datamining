// discord_app/design/components/Tooltip/native/AnimatedTooltip.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import ReanimatedRexportDefault from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import AnimatedEnterExitItemDefault from "../../AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import Tooltip from "Tooltip.native.tsx";
import TooltipConstants from "TooltipConstants.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["visible"];
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
function renderTooltipItem(arg0, arg1) {
  const obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [arg1, StyleSheet.absoluteFill];
  obj.style = items;
  let tmpResult = null;
  if (null != arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmpResult = jsx(Tooltip.Tooltip, {});
  }
  obj.children = tmpResult;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "box-none", children: null });
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      const cResult = c.c(7);
      visible = visible.visible;
      const tmp3 = _objectWithoutProperties(visible, closure_3);
      const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
        .enabled;
      const result = TooltipConstants.tooltipEnterExitAnimation(tmp3.position);
      [tmp6, importDefault] = noop.useState(false);
      if (cResult[0] !== visible) {
        const fn = function c() {
          importDefault(visible);
        };
        const items = [visible];
        cResult[0] = visible;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = noop.useEffect(tmp7, tmp8);
      let tmp10;
      if (tmp6) {
        tmp10 = tmp3;
      }
      if (cResult[3] === result) {
        if (cResult[4] === tmp10) {
          if (cResult[5] === enabled) {
            let tmp11 = cResult[6];
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
      const obj4 = {
        useReducedMotion: enabled,
        item: tmp10,
        entering: result,
        exiting: result,
        renderItem: renderTooltipItem,
      };
      const tmp5 = _slicedToArray(noop.useState(false), 2);
    }
  : (visible) => {
      visible = visible.visible;
      const merged = Object.assign(visible, Object.assign({ visible: 0 }));
      const result = TooltipConstants.tooltipEnterExitAnimation(merged.position);
      const tmp3 = _slicedToArray(noop.useState(false), 2);
      closure_1 = tmp3[1];
      const items = [visible];
      const effect = noop.useEffect(() => {
        closure_1(visible);
      }, items);
      const obj2 = {
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
      obj2.item = tmp7;
      obj2.entering = result;
      obj2.exiting = result;
      obj2.renderItem = renderTooltipItem;
      return jsx(AnimatedEnterExitItemDefault, {
        useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion
          .enabled,
        item: null,
        entering: null,
        exiting: null,
        renderItem: null,
      });
    };
