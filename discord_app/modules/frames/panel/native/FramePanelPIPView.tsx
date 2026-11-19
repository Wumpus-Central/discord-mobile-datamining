// === Module 19260: FramePanelPIPView ===

// Module 19260 (FramePanelPIPView)
import FrameStackLevel from "FrameStackLevel" /* 15669 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 18450 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 19237 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19258 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6502 */;

require = fn;
const FramesConstants = fn(6503);
({ asLaunched: hasOwnProperty, FrameLayoutModes: closure_6, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
let closure_8 = fn(19088).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default noop.memo(function FramePanelPIPView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = closure_7(stateFromStores);
  noop = tmp2;
  let obj = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return noop.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: null };
    let tmpResult = null;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores.id, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: null };
      const obj3 = { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      obj2.presentation = obj3;
      tmpResult = jsx(FrameRenderTargetDefault, { frameId: stateFromStores.id, level: FrameStackLevel.FrameStackLevel.AboveAppContent, presentation: null });
      const tmp6Result = FrameRenderTargetDefault;
    }
    obj.children = tmpResult;
    return jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: null });
  }, items1);
});