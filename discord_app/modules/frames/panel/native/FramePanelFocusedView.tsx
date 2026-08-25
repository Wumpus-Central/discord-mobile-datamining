// === Module 16392: ? ===

// Module 16392
import importAllResult from "noop" /* 19 */;
import closure_4 from "map" /* 10677 */;
import FrameLayoutModes from "FrameLayoutModes" /* 10678 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9915 */;
import { jsx } from "jsxProd" /* 21 */;

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
      transitionCleanUp(stateFromStores[9]).updateFramePanelMode(tmp, closure_1_7.PIP);
      const obj = transitionCleanUp(stateFromStores[9]);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, callback];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity: null != stateFromStores, context: transitionCleanUp(stateFromStores[7]), header: memo, children: null };
    obj = { layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj[6] = closure_1_8(transitionCleanUp(stateFromStores[10]), obj);
    return closure_1_8(transitionState(stateFromStores[6]).BaseActivityPanelFocusedView, obj);
  }, items2);
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;