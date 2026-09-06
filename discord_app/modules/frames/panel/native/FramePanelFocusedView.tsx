// === Module 17044: FramePanelFocusedView ===

// Module 17044 (FramePanelFocusedView)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9507 */;
import FrameViewDefault from "FrameView" /* 16615 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 17023 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17041 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9510 */;

require = fn;
const FramesConstants = fn(9511);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo((transitionState) => {
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
  const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[8]), {}), []);
  const items1 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items1);
  const items2 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    let obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: null };
    obj = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj.children = jsx(FrameViewDefault, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig });
    return jsx(ActivityPanelFocusedView.BaseActivityPanelFocusedView, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig });
  }, items2);
});