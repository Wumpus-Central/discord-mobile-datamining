// === Module 17418: FramePanelPIPView ===

// Module 17418 (FramePanelPIPView)
import FrameViewDefault from "FrameView" /* 16893 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 17392 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17416 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9748 */;

require = fn;
const FramesConstants = fn(9749);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: closure_7 } = FramesConstants);
let closure_8 = fn(17393).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
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