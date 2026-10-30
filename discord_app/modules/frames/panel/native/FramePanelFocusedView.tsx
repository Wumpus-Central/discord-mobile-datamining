// === Module 19102: FramePanelFocusedView ===

// Module 19102 (FramePanelFocusedView)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 12068 */;
import FrameStackLevel from "FrameStackLevel" /* 12072 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19082 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19099 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;

require = fn;
const FramesConstants = fn(6841);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire } = FramesConstants);
const ActivityPanelModes = fn(5652).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo(function FramePanelFocusedView(transitionState) {
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
  let obj2 = transitionState(stateFromStores[6]);
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
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: null };
    let tmpResult = null;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: null };
      const obj3 = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      obj2.presentation = obj3;
      tmpResult = jsx(FrameRenderTargetDefault, { frameId: stateFromStores, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: null });
      const tmp6Result = FrameRenderTargetDefault;
    }
    obj.children = tmpResult;
    return jsx(ActivityPanelFocusedView.BaseActivityPanelFocusedView, { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: null });
  }, items2);
});