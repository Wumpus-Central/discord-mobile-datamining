// === Module 17631: ActivityPanelUI ===

// Module 17631 (ActivityPanelUI)
import c from "c" /* 576 */;
import native from "native" /* 4788 */;
import LayerScope from "LayerScope" /* 6842 */;
import ActivityPanelStateContextDefault from "ActivityPanelStateContext" /* 17630 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17652 */;
import ActivityPanelSystemUIManagerDefault from "ActivityPanelSystemUIManager" /* 17653 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17632;
  } else {
    tmp4 = 17638;
  }
  return React5(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
function getKey(arg0) {
  return arg0;
}
function wrapChildren(items3) {
  return React5(React4, { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: items3 });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const ActivityPanelModes = fn(6074).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseActivityPanelUI(context) {
  const cResult = c.c(8);
  ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = context);
  const mode = noop.useContext(context.context).mode;
  if (mode !== ActivityPanelModes.DISCONNECTED) {
    if (mode === ActivityPanelModes.PIP) {
      if (cResult[0] !== renderActivityPanelSystemUIManager) {
        const result = renderActivityPanelSystemUIManager();
        cResult[0] = renderActivityPanelSystemUIManager;
        cResult[1] = result;
        let tmp7 = result;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp6) {
        if (cResult[3] === renderActivityOrPIP) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === tmp7) {
          if (cResult[6] === tmp9) {
            let tmp14 = cResult[7];
          }
          return tmp14;
        }
        const obj2 = { children: null };
        const items = [tmp7, tmp9];
        obj2.children = items;
        const tmp16 = closure_1_8(LayerScope.LayerScope, obj2);
        cResult[5] = tmp7;
        cResult[6] = tmp9;
        cResult[7] = tmp16;
        tmp14 = tmp16;
      }
      const obj3 = { items: tmp6, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
      const tmp13 = React5(native.TransitionGroup, obj3);
      cResult[2] = tmp6;
      cResult[3] = renderActivityOrPIP;
      cResult[4] = tmp13;
      tmp9 = tmp13;
    }
    tmp6 = mode === ActivityPanelModes.PIP ? closure_13 : closure_14;
  }
  tmp6 = closure_12;
}) : (function BaseActivityPanelUI(context) {
  ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = context);
  const mode = noop.useContext(context.context).mode;
  const tmp = useIsConnectedToVoiceChannelDefault();
  importDefault = tmp;
  const items = [mode, tmp];
  const memo = noop.useMemo(() => {
    if (mode !== ActivityPanelModes.DISCONNECTED) {
      if (mode === ActivityPanelModes.PIP) {
        return tmp4;
      }
      tmp4 = mode === ActivityPanelModes.PIP ? closure_13 : closure_14;
    }
    tmp4 = closure_12;
  }, items);
  const obj = { children: null };
  const items1 = [renderActivityPanelSystemUIManager(), closure_7(mode(4788).TransitionGroup, { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren })];
  obj.children = items1;
  return closure_8(mode(6842).LayerScope, obj);
});
let closure_15 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityPanelUI() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return closure_1_7(ActivityPanelSystemUIManagerDefault, {});
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { renderActivityOrPIP, context: ActivityPanelStateContextDefault, renderActivityPanelSystemUIManager: first };
    const tmp9 = React5(closure_15, obj2);
    cResult[1] = tmp9;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ActivityPanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(() => closure_1_7(ActivityPanelSystemUIManagerDefault, {}), []);
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(() => React5(closure_15, { renderActivityOrPIP, context: ActivityPanelStateContextDefault, renderActivityPanelSystemUIManager }), items);
});
export const BaseActivityPanelUI = tmp4;