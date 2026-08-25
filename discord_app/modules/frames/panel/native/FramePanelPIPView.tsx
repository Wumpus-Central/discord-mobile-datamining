// === Module 16391: ? ===

// Module 16391
import importAllResult from "noop" /* 19 */;
import closure_4 from "map" /* 10677 */;
import FrameLayoutModes from "FrameLayoutModes" /* 10678 */;
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_8 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG" /* 16366 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ asLaunched: c5, FrameLayoutModes: closure_6, getPipOrientationLockStateForFrame: error } = FrameLayoutModes);
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  importAllResult = undefined;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => callback(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = callback(stateFromStores);
  importAllResult = tmp2;
  let obj = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return importAllResult.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: closure_3, hasActivity: null != stateFromStores, context: transitionCleanUp(stateFromStores[7]), children: null };
    obj = { layoutMode: closure_1_6.PIP, portraitSafeAreasConfig: closure_1_8, landscapeSafeAreasConfig };
    obj[5] = closure_1_9(transitionCleanUp(stateFromStores[8]), obj);
    return closure_1_9(transitionState(stateFromStores[6]).BaseActivityPanelPIPView, obj);
  }, items1);
});
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;