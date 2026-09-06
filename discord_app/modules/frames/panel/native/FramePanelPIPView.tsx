// === Module 17043: FramePanelPIPView ===

// Module 17043 (FramePanelPIPView)
import FrameViewDefault from "FrameView" /* 16615 */;
import ActivityPanelPIPView from "ActivityPanelPIPView" /* 17017 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17041 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9510 */;

require = fn;
const FramesConstants = fn(9511);
({ asLaunched: hasOwnProperty, FrameLayoutModes: metroRequire, getPipOrientationLockStateForFrame: closure_7 } = FramesConstants);
let closure_8 = fn(17018).DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
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
    let obj = { transitionState, transitionCleanUp, pipOrientationLockState, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, children: null };
    obj = { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj.children = jsx(FrameViewDefault, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig });
    return jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig });
  }, items1);
});