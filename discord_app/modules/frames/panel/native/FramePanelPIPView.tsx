// discord_app/modules/frames/panel/native/FramePanelPIPView.tsx
import FrameViewDefault from "../../native/FrameView.tsx";
import ActivityPanelPIPView from "../../../activities/panel/native/ActivityPanelPIPView.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

require = fn;
const FramesConstants = fn(9511);
({
  asLaunched: hasOwnProperty,
  FrameLayoutModes: metroRequire,
  getPipOrientationLockStateForFrame: closure_7,
} = FramesConstants);
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
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () =>
    closure_1_5(landscapeSafeAreasConfig.getMainFrame()),
  );
  const tmp2 = closure_7(stateFromStores);
  noop = tmp2;
  let obj = transitionState(stateFromStores[5]);
  landscapeSafeAreasConfig = transitionState(stateFromStores[6]).useBaseActivityPanelPIPView().landscapeSafeAreasConfig;
  const items1 = [stateFromStores, landscapeSafeAreasConfig, tmp2, transitionCleanUp, transitionState];
  return noop.useMemo(() => {
    let obj = {
      transitionState,
      transitionCleanUp,
      pipOrientationLockState,
      hasActivity: null != stateFromStores,
      context: FramePanelStateContextDefault,
      children: null,
    };
    obj = { layoutMode: constants.PIP, portraitSafeAreasConfig, landscapeSafeAreasConfig };
    obj.children = jsx(FrameViewDefault, {
      layoutMode: constants.PIP,
      portraitSafeAreasConfig,
      landscapeSafeAreasConfig,
    });
    return jsx(ActivityPanelPIPView.BaseActivityPanelPIPView, {
      layoutMode: constants.PIP,
      portraitSafeAreasConfig,
      landscapeSafeAreasConfig,
    });
  }, items1);
});
