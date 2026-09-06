// discord_app/modules/activities/panel/native/ActivityPanelUI.tsx
import ActivityPanelStateContextDefault from "ActivityPanelStateContext.tsx";
import useIsConnectedToVoiceChannelDefault from "../../../voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx";
import ActivityPanelSystemUIManagerDefault from "ActivityPanelSystemUIManager.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
function renderActivityOrPIP(arg0, arg1, transitionState, transitionCleanUp) {
  if ("pip" === arg1) {
    let tmp4 = 17017;
  } else {
    tmp4 = 17023;
  }
  return React5(importDefault(tmp4), { transitionState, transitionCleanUp }, arg0);
}
function getKey(arg0) {
  return arg0;
}
function wrapChildren(children) {
  return React5(React4, { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children });
}
class BaseActivityPanelUI {
  constructor(arg0) {
    mode = undefined;
    closure_1 = undefined;
    ({ renderActivityOrPIP, renderActivityPanelSystemUIManager } = global);
    mode = closure_3.useContext(global.context).mode;
    tmp = closure_1(closure_2[6])();
    closure_1 = tmp;
    items = [,];
    items[0] = mode;
    items[1] = tmp;
    memo = closure_3.useMemo(() => {
      if (mode !== ActivityPanelModes.DISCONNECTED) {
        if (tmp === tmp2.PIP) {
          return tmp4;
        }
        tmp4 = tmp === tmp2.PIP ? closure_13 : closure_14;
      }
      tmp4 = closure_12;
    }, items);
    obj = { children: null };
    items1 = [,];
    items1[0] = renderActivityPanelSystemUIManager();
    obj = { items: memo, renderItem: renderActivityOrPIP, getItemKey: getKey, wrapChildren };
    items1[1] = jsx(mode(closure_2[8]).TransitionGroup, obj);
    obj.children = items1;
    return jsxs(mode(closure_2[7]).LayerScope, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_12 = [];
let closure_13 = ["pip"];
let closure_14 = ["activity"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelUI.tsx");

export default function ActivityPanelUI() {
  const renderActivityPanelSystemUIManager = noop.useCallback(
    () => closure_1_7(ActivityPanelSystemUIManagerDefault, {}),
    [],
  );
  const items = [renderActivityPanelSystemUIManager];
  return noop.useMemo(
    () =>
      React5(BaseActivityPanelUI, {
        renderActivityOrPIP,
        context: ActivityPanelStateContextDefault,
        renderActivityPanelSystemUIManager,
      }),
    items,
  );
}
export { BaseActivityPanelUI };
