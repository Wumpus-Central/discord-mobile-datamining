// === Module 17289: FramePanelFocusedView ===

// Module 17289 (FramePanelFocusedView)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9661 */;
import FrameViewDefault from "FrameView" /* 16854 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 17268 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17286 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9664 */;

require = fn;
const FramesConstants = fn(9665);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = fn(9659).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => {
    const tmp = memo(landscapeSafeAreasConfig.getMainFrame());
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id;
  });
  let obj = transitionState(stateFromStores[5]);
  const obj2 = transitionState(stateFromStores[6]);
  const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView({ context: transitionCleanUp(stateFromStores[7]) });
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
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: jsx(FrameViewDefault, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig }) };
    return jsx(ActivityPanelFocusedView.BaseActivityPanelFocusedView, { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: jsx(FrameViewDefault, { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig }) });
  }, items2);
});