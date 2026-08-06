// discord_app/modules/activities/panel/native/ActivityPanelUI.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { ActivityPanelModes } from "ActivityPanelModes";
import jsxProd from "jsxProd";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 15982;
  } else {
    tmp4 = 15988;
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
    c1 = undefined;
    ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = global);
    mode = noop.useContext(global.context).mode;
    tmp = require("useIsConnectedToVoiceChannel")();
    c1 = tmp;
    items = [, ];
    items[0] = mode;
    items[1] = tmp;
    memo = noop.useMemo(() => {
      if (mode !== outer1_6.DISCONNECTED) {
        if (tmp === tmp2.PIP) {
          return tmp4;
        }
        tmp4 = tmp === tmp2.PIP ? outer1_13 : outer1_14;
      }
      tmp4 = outer1_12;
    }, items);
    obj = { children: null };
    items1 = [, ];
    items1[0] = renderActivityPanelSystemUIManager();
    obj = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
    items1[1] = jsx(require("wrapChildrenDefault").TransitionGroup, obj);
    obj[0] = items1;
    return jsxs(require("Layer").LayerScope, obj);
  }
}
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
const result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default function ActivityPanelUI() {
  const callback = React.useCallback(() => callback2(callback(table[9]), {}), []);
  const items = [callback];
  return React.useMemo(() => outer1_7(outer1_15, { renderActivityOrPIP: outer1_9, context: outer1_1(outer1_2[10]), renderActivityPanelSystemUIManager: callback }), items);
};
export { BaseActivityPanelUI };