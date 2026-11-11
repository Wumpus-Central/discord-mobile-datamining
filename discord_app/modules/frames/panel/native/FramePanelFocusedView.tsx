// discord_app/modules/frames/panel/native/FramePanelFocusedView.tsx
import FramesActionCreatorsDefault from "../../FramesActionCreators.native.tsx";
import FrameRenderTargetDefault from "../../native/FrameRenderTarget.tsx";
import FrameStackLevel from "../../FrameStackLevel.tsx";
import ConjureFrameUpdateBarDefault from "../../../conjure/app_channel/native/ConjureFrameUpdateBar.tsx";
import ActivityPanelFocusedView from "../../../activities/panel/native/ActivityPanelFocusedView.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../FramesStore.tsx";

require = fn;
const FramesConstants = fn(6957);
({ asLaunched: hasOwnProperty, FrameLayoutModes: closure_6 } = FramesConstants);
const ActivityPanelModes = fn(5896).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo(function FramePanelFocusedView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  items = [landscapeSafeAreasConfig];
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
  const baseActivityPanelFocusedView = obj2.useBaseActivityPanelFocusedView({
    context: transitionCleanUp(stateFromStores[7]),
  });
  const portraitSafeAreasConfig = baseActivityPanelFocusedView.portraitSafeAreasConfig;
  landscapeSafeAreasConfig = baseActivityPanelFocusedView.landscapeSafeAreasConfig;
  const memo = portraitSafeAreasConfig.useMemo(() => jsx(transitionCleanUp(stateFromStores[8]), {}), []);
  const items1 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items1);
  const items2 = [
    stateFromStores,
    memo,
    landscapeSafeAreasConfig,
    portraitSafeAreasConfig,
    transitionCleanUp,
    transitionState,
    updateActivityPanelModeToPIP,
  ];
  return portraitSafeAreasConfig.useMemo(() => {
    const obj = {
      transitionState,
      transitionCleanUp,
      updateActivityPanelModeToPIP,
      hasActivity: null != stateFromStores,
      context: FramePanelStateContextDefault,
      header: memo,
      children: null,
    };
    let tmpResult = null;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores, children: null };
      const obj3 = { frameId: stateFromStores, level: null, presentation: null };
      const tmp6Result = ConjureFrameUpdateBarDefault;
      obj3.level = FrameStackLevel.FrameStackLevel.AboveAppContent;
      const obj4 = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      obj3.presentation = obj4;
      obj2.children = jsx(FrameRenderTargetDefault, { frameId: stateFromStores, level: null, presentation: null });
      tmpResult = <tmp6Result frameId={stateFromStores}>{null}</tmp6Result>;
      const tmp6Result2 = FrameRenderTargetDefault;
    }
    obj.children = tmpResult;
    return jsx(ActivityPanelFocusedView.BaseActivityPanelFocusedView, {
      transitionState,
      transitionCleanUp,
      updateActivityPanelModeToPIP,
      hasActivity: null != stateFromStores,
      context: FramePanelStateContextDefault,
      header: memo,
      children: null,
    });
  }, items2);
});
