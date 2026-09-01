// discord_app/modules/activities/panel/native/ActivityPanelUI.tsx
import useIsConnectedToVoiceChannelDefault from "../../../voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ActivityPanelModes } from "../ActivityPanelConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 16598;
  } else {
    tmp4 = 16604;
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