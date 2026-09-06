// === Module 17016: renderActivityOrPIP ===

// Module 17016 (renderActivityOrPIP)
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17037 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9505 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17017;
  } else {
    tmp4 = 17023;
  }
  return closure_7(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
function getKey(arg0) {
  return arg0;
}
function wrapChildren(children) {
  return callback(closure_4, { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children });
}
class BaseActivityPanelUI {
  constructor(arg0) {
    mode = undefined;
    closure_1 = undefined;
    ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = global);
    mode = closure_3.useContext(global.context).mode;
    tmp = require("useIsConnectedToVoiceChannel")();
    closure_1 = tmp;
    items = [, ];
    items[0] = mode;
    items[1] = tmp;
    memo = closure_3.useMemo(() => {
      if (mode !== closure_1_6.DISCONNECTED) {
        if (tmp === tmp2.PIP) {
          return tmp4;
        }
        tmp4 = tmp === tmp2.PIP ? closure_1_13 : closure_1_14;
      }
      tmp4 = closure_1_12;
    }, items);
    obj = { children: null };
    items1 = [, ];
    items1[0] = renderActivityPanelSystemUIManager();
    obj = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
    items1[1] = jsx(require("ManaContext").TransitionGroup, obj);
    obj[0] = items1;
    return jsxs(require("Layer").LayerScope, obj);
  }
}
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default function ActivityPanelUI() {
  const callback = React.useCallback(() => callback2(callback(table[9]), {}), []);
  const items = [callback];
  return React.useMemo(() => closure_1_7(closure_1_15, { renderActivityOrPIP: closure_1_9, context: closure_1_1(closure_1_2[10]), renderActivityPanelSystemUIManager: callback }), items);
};
export { BaseActivityPanelUI };