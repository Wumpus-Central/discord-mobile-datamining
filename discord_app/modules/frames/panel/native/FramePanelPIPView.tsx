// === Module 16262: ? ===

// Module 16262
import importAllResult from "noop" /* 19 */;
import map from "map" /* 8708 */;
import FrameLayoutModes from "FrameLayoutModes" /* 8709 */;
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_8 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG" /* 16237 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
({ asLaunched: c5, FrameLayoutModes: closure_6, getPipOrientationLockStateForFrame: error } = FrameLayoutModes);
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => callback(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = callback(stateFromStores);
  importAllResult = tmp2;
  let obj = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return importAllResult.useMemo(() => {
    { transitionState, transitionCleanUp, pipOrientationLockState: closure_3, hasActivity: null != stateFromStores, context: transitionCleanUp(stateFromStores[7]), children: null };
    const obj = { layoutMode: closure_1_6.PIP, portraitSafeAreasConfig: closure_1_8, landscapeSafeAreasConfig };
    obj[5] = jsx(transitionCleanUp(stateFromStores[8]), { layoutMode: closure_1_6.PIP, portraitSafeAreasConfig: closure_1_8, landscapeSafeAreasConfig });
    return jsx(transitionState(stateFromStores[6]).BaseActivityPanelPIPView, { layoutMode: closure_1_6.PIP, portraitSafeAreasConfig: closure_1_8, landscapeSafeAreasConfig });
  }, items1);
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;