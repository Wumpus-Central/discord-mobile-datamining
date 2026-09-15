// === Module 17192: FramePanelPIPView ===

// Module 17192 (FramePanelPIPView)
import FrameViewDefault from "FrameView" /* 16758 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 17166 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17190 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9642 */;

require = fn;
const FramesConstants = fn(9643);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: closure_7 } = FramesConstants);
let closure_8 = fn(17167).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelPIPView.tsx");

export default noop.memo((transitionState) => {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  const items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => closure_1_5(landscapeSafeAreasConfig.getMainFrame()));
  const tmp2 = closure_7(stateFromStores);
  noop = tmp2;
  let obj = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return noop.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: jsx(FrameViewDefault, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig }) };
    return jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: jsx(FrameViewDefault, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig }) });
  }, items1);
});