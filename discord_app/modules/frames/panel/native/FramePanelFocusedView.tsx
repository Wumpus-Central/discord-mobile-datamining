import importAllResult from "noop";
import map from "map";
import { FrameLayoutModes } from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
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
  stateFromStores = obj.useStateFromStores(items, () => null != landscapeSafeAreasConfig.getConnectedFrame());
  obj = { context: transitionCleanUp(stateFromStores[7]) };
  const baseActivityPanelFocusedView = transitionState(stateFromStores[6]).useBaseActivityPanelFocusedView(obj);
  portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  memo = portraitSafeAreasConfig.useMemo(() => callback(transitionCleanUp(stateFromStores[8]), {}), []);
  callback = portraitSafeAreasConfig.useCallback(() => {
    transitionCleanUp(stateFromStores[9]).updateFramePanelMode(callback.PIP);
  }, []);
  const items1 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, callback];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP: callback, hasActivity: stateFromStores, context: null, header: null, children: null };
    obj[4] = transitionCleanUp(stateFromStores[7]);
    obj[5] = memo;
    obj = { layoutMode: memo.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj[6] = outer1_7(transitionCleanUp(stateFromStores[10]), obj);
    return outer1_7(transitionState(stateFromStores[6]).BaseActivityPanelFocusedView, obj);
  }, items1);
});
const result = require("FrameLayoutModes").fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default memoResult;