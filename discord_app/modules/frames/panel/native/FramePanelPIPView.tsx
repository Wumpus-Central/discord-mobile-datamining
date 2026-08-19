// discord_app/modules/frames/panel/native/FramePanelPIPView.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import map from "../../FramesStore.tsx";
import FrameLayoutModes from "../../FramesConstants.tsx";
import { DEFAULT_PORTRAIT_LETTERBOX_CONFIG as closure_8 } from "../../../activities/panel/native/ActivityPanelNativeConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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