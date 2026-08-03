// === Module 15955: ? ===

// Module 15955
import importAllResult from "noop";
import map from "map";
import { FrameLayoutModes } from "FrameLayoutModes";
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_6 } from "DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let applicationId;
  let stateFromStores1;
  let landscapeSafeAreasConfig;
  const items = [stateFromStores1];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => stateFromStores1.getConnectedFrame());
  applicationId = undefined;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  let tmpResult = tmp(tmp2[5]);
  const items1 = [stateFromStores1];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = stateFromStores1.getPipOrientationLockStateForApp(tmp);
    }
    return pipOrientationLockStateForApp;
  });
  tmpResult = tmp(tmp2[6]);
  landscapeSafeAreasConfig = tmpResult.useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items2 = [stateFromStores, landscapeSafeAreasConfig, stateFromStores1, transitionCleanUp, transitionState];
  return applicationId.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState: stateFromStores1, hasActivity: null != stateFromStores, context: null, children: null };
    obj[4] = transitionCleanUp(stateFromStores[7]);
    obj = { layoutMode: landscapeSafeAreasConfig.PIP, portraitSafeAreasConfig: outer1_6, landscapeSafeAreasConfig };
    obj[5] = outer1_7(transitionCleanUp(stateFromStores[8]), obj);
    return outer1_7(transitionState(stateFromStores[6]).BaseActivityPanelPIPView, obj);
  }, items2);
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default memoResult;