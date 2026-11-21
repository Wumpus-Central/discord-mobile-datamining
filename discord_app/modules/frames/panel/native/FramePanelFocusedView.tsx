// === Module 19207: FramePanelFocusedView ===

// Module 19207 (FramePanelFocusedView)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10622 */;
import FrameStackLevel from "FrameStackLevel" /* 15756 */;
import FrameRenderTargetDefault from "FrameRenderTarget" /* 18402 */;
import ConjureFrameUpdateBarDefault from "ConjureFrameUpdateBar" /* 18700 */;
import ActivityPanelFocusedView from "ActivityPanelFocusedView" /* 19188 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19204 */;
import PlayableActivityFrameHeaderDefault from "PlayableActivityFrameHeader" /* 19209 */;
import FramePanelHeaderDefault from "FramePanelHeader" /* 19211 */;
import PlayableFrameImpressionTrackerDefault from "PlayableFrameImpressionTracker" /* 19213 */;
import PlayableFrameBannerDefault from "PlayableFrameBanner" /* 19214 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6623 */;

require = fn;
const FramesConstants = fn(6624);
({ asLaunched: hasOwnProperty, FrameLayoutModes: closure_6 } = FramesConstants);
const ActivityPanelModes = fn(5539).ActivityPanelModes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelFocusedView.tsx");

export default noop.memo(function FramePanelFocusedView(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let stateFromStores;
  let landscapeSafeAreasConfig;
  items = [landscapeSafeAreasConfig];
  stateFromStores = transitionState(stateFromStores[5]).useStateFromStores(items, () => {
    const tmp = closure_5(landscapeSafeAreasConfig.getMainFrame());
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
  const tmp3 = transitionCleanUp(stateFromStores[8])();
  closure_5 = tmp3;
  const items1 = [tmp3];
  const memo = portraitSafeAreasConfig.useMemo(() => {
    if (null != closure_5) {
      const obj = { frameId: null, playable: null };
      ({ frameId: obj.frameId, playable: obj.playable } = closure_5);
      let tmp5 = React5(PlayableActivityFrameHeaderDefault, obj, closure_5.playable.id);
    } else {
      tmp5 = React5(FramePanelHeaderDefault, {});
    }
    return tmp5;
  }, items1);
  const items2 = [stateFromStores];
  const updateActivityPanelModeToPIP = portraitSafeAreasConfig.useCallback(() => {
    if (null != stateFromStores) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PIP);
    }
  }, items2);
  const items3 = [stateFromStores, memo, landscapeSafeAreasConfig, portraitSafeAreasConfig, transitionCleanUp, transitionState, updateActivityPanelModeToPIP];
  return portraitSafeAreasConfig.useMemo(() => {
    const obj = { transitionState, transitionCleanUp, updateActivityPanelModeToPIP, hasActivity: null != stateFromStores, context: FramePanelStateContextDefault, header: memo, children: null };
    let tmp5 = null;
    if (null != stateFromStores) {
      const obj2 = { frameId: stateFromStores, children: null };
      const obj3 = { frameId: stateFromStores, level: null, presentation: null };
      const tmp6Result = ConjureFrameUpdateBarDefault;
      obj3.level = FrameStackLevel.FrameStackLevel.AboveAppContent;
      const obj4 = { layoutMode: constants.FOCUSED, portraitSafeAreasConfig, landscapeSafeAreasConfig };
      obj3.presentation = obj4;
      items = [React5(FrameRenderTargetDefault, obj3), ];
      const obj5 = { frameId: stateFromStores, children: null };
      const tmp6Result3 = FrameRenderTargetDefault;
      const obj6 = { frameId: stateFromStores };
      obj5.children = React5(PlayableFrameBannerDefault, obj6);
      items[1] = React5(PlayableFrameImpressionTrackerDefault, obj5, stateFromStores);
      obj2.children = items;
      tmp5 = React6(tmp6Result, obj2);
      const tmp6Result4 = PlayableFrameImpressionTrackerDefault;
    }
    obj.children = tmp5;
    return React5(ActivityPanelFocusedView.BaseActivityPanelFocusedView, obj);
  }, items3);
});