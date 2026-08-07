// discord_app/modules/frames/panel/native/FramePanelFocusedView.tsx
import importAllResult from "noop";
import map from "map";
import FrameLayoutModes from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";

let c5;
let closure_6;
const require = arg1;
let c3 = importAllResult;
({ asLaunched: c5, FrameLayoutModes: closure_6 } = FrameLayoutModes);
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let portraitSafeAreasConfig;
  let landscapeSafeAreasConfig;
  let memo;
  let callback;
  let obj = transitionState(stateFromStores[5]);
  const items = [landscapeSafeAreasConfig];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id;
  });
  obj = { context: transitionCleanUp(stateFromStores[7]) };
  const baseActivityPanelFocusedView = transitionState(stateFromStores[6]).useBaseActivityPanelFocusedView(obj);
  portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  memo = portraitSafeAreasConfig.useMemo(() => callback(transitionCleanUp(stateFromStores[8]), {}), []);
  const items1 = [stateFromStores];
  callback = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      transitionCleanUp(stateFromStores[9]).updateFramePanelMode(tmp, outer1_7.PIP);
      const obj = transitionCleanUp(stateFromStores[9]);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, callback];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity: null != stateFromStores, context: null, header: null, children: null };
    obj[4] = transitionCleanUp(stateFromStores[7]);
    obj[5] = memo;
    obj = { layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj[6] = outer1_8(transitionCleanUp(stateFromStores[10]), obj);
    return outer1_8(transitionState(stateFromStores[6]).BaseActivityPanelFocusedView, obj);
  }, items2);
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;