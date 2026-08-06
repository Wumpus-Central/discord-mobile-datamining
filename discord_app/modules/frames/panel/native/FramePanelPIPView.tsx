// discord_app/modules/frames/panel/native/FramePanelPIPView.tsx
import importAllResult from "noop";
import map from "map";
import FrameLayoutModes from "FrameLayoutModes";
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_8 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG";
import { jsx } from "jsxProd";

let c5;
let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ asLaunched: c5, FrameLayoutModes: closure_6, getPipOrientationLockStateForFrame: error } = FrameLayoutModes);
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let importAllResult;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => callback(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = callback(stateFromStores);
  importAllResult = tmp2;
  let obj = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return importAllResult.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: c3, hasActivity: null != stateFromStores, context: null, children: null };
    obj[4] = transitionCleanUp(stateFromStores[7]);
    obj = { layoutMode: outer1_6.PIP, portraitSafeAreasConfig: outer1_8, landscapeSafeAreasConfig };
    obj[5] = outer1_9(transitionCleanUp(stateFromStores[8]), obj);
    return outer1_9(transitionState(stateFromStores[6]).BaseActivityPanelPIPView, obj);
  }, items1);
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;