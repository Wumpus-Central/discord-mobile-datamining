// === Module 16266: ? ===

// Module 16266
import importAllResult from "noop" /* 19 */;
import map from "map" /* 8708 */;
import FrameLayoutModes from "FrameLayoutModes" /* 8709 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
({ asLaunched: c5, FrameLayoutModes: closure_6 } = FrameLayoutModes);
const memoResult = importAllResult.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
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
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  const memo = portraitSafeAreasConfig.useMemo(() => callback(transitionCleanUp(stateFromStores[8]), {}), []);
  const items1 = [stateFromStores];
  const callback = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      transitionCleanUp(stateFromStores[9]).updateFramePanelMode(tmp, ActivityPanelModes.PIP);
      const obj = transitionCleanUp(stateFromStores[9]);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, callback];
  return portraitSafeAreasConfig.useMemo(() => {
    { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity: null != stateFromStores, context: transitionCleanUp(stateFromStores[7]), header: memo, children: null };
    const obj = { layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj[6] = jsx(transitionCleanUp(stateFromStores[10]), { layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig });
    return jsx(transitionState(stateFromStores[6]).BaseActivityPanelFocusedView, { layoutMode: callback.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig });
  }, items2);
});
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;