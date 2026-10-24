// === Module 18427: FrameView ===

// Module 18427 (FrameView)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5909 */;
import leaveFrame from "leaveFrame" /* 10765 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 18428 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

require = fn;
const FrameLayoutModes = fn(6776).FrameLayoutModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FrameView(frame) {
  const cResult = frame(576).c(44);
  frame = frame.frame;
  ({ iframeId, onActivityCrash, presentation } = frame);
  const layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj = frame(576);
  const tmp = frame;
  const data = frame(6809).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frame.applicationId) {
    const fn = function u() {
      return ConjureProjectStore.isConjureProjectApplication(frame.applicationId);
    };
    cResult[1] = frame.applicationId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj2 = frame(6809);
  let stateFromStores = tmp(504).useStateFromStores(first, tmp6);
  if (!stateFromStores) {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    stateFromStores = null != conjureProjectId;
  }
  const tmpResult = tmp(504);
  const first1 = _slicedToArray(noop.useState(true), 2)[0];
  if (cResult[3] === frame.applicationId) {
    if (cResult[4] === frame.id) {
      if (cResult[5] === layoutMode) {
        let tmp12 = cResult[6];
        let tmp13 = cResult[7];
      }
      const layoutEffect = noop.useLayoutEffect(tmp12, tmp13);
      if (cResult[8] !== frame.id) {
        class E {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
        cResult[8] = frame.id;
        cResult[9] = E;
      } else {
        class E {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
      }
      if (cResult[10] !== frame.id) {
        class R {
          constructor(arg0, arg1) {
            obj = closure_0(closure_2[11]);
            return obj.setOrientationLockState(frame.id, frame, arg1);
          }
        }
        cResult[10] = frame.id;
        cResult[11] = R;
      } else {
        class R {
          constructor(arg0, arg1) {
            obj = closure_0(closure_2[11]);
            return obj.setOrientationLockState(frame.id, frame, arg1);
          }
        }
      }
      if (!first1) {
        class R {
          constructor(arg0, arg1) {
            obj = closure_0(closure_2[11]);
            return obj.setOrientationLockState(frame.id, frame, arg1);
          }
        }
      }
      if (cResult[12] === data) {
        class R {
          constructor(arg0, arg1) {
            obj = closure_0(closure_2[11]);
            return obj.setOrientationLockState(frame.id, frame, arg1);
          }
        }
      }
      let obj3 = { orientationLockState: orientationLock, showLoadingIndicator: first1, setShowLoadingStateForLockingOrientation: tmp11, application: data, setOrientationLockState: R };
      cResult[12] = data;
      cResult[13] = orientationLock;
      cResult[14] = R;
      cResult[15] = first1;
      cResult[16] = obj3;
    }
  }
  class F {
    constructor() {
      obj = closure_1(closure_2[9]);
      obj1 = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
      dispatchResult = obj.dispatch(obj1);
      return;
    }
  }
  const items1 = [layoutMode, , ];
  ({ applicationId: arr2[1], id: arr2[2] } = frame);
  cResult[3] = frame.applicationId;
  cResult[4] = frame.id;
  cResult[5] = layoutMode;
  cResult[6] = F;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = F;
  const tmp9 = _slicedToArray(noop.useState(true), 2);
}) : (function FrameView(frame) {
  frame = frame.frame;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let landscapeSafeAreasConfig = presentation.portraitSafeAreasConfig;
  ({ iframeId, onActivityCrash } = frame);
  const data = frame(6809).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  let obj = frame(6809);
  const items = [ConjureProjectStore];
  let stateFromStores = frame(504).useStateFromStores(items, () => ConjureProjectStore.isConjureProjectApplication(frame.applicationId));
  if (!stateFromStores) {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    stateFromStores = null != conjureProjectId;
  }
  const tmp5 = _slicedToArray(noop.useState(true), 2);
  let first = tmp5[0];
  const items1 = [layoutMode, , ];
  ({ applicationId: arr2[1], id: arr2[2] } = frame);
  const layoutEffect = noop.useLayoutEffect(() => {
    DispatcherDefault.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id });
  }, items1);
  const items2 = [frame.id];
  const items3 = [frame.id];
  const callback = noop.useCallback(() => {
    leaveFrame.leaveFrame(frame.id);
  }, items2);
  const callback1 = noop.useCallback((application, arg1) => frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, application, arg1), items3);
  if (!first) {
    first = null == data;
  }
  const tmpResult = frame(504);
  const baseActivityView = frame(11456).useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5[1], application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const obj2 = { showLoadingIndicator: first, isResetting, children: null };
  let obj3 = {
    onActivityCrash,
    applicationId: frame.applicationId,
    iframeId,
    onDisallowedNavigation() {
      leaveFrame.leaveFrame(frame.id);
      const obj3 = { body: null, confirmText: null };
      const intl = util.intl;
      obj3.body = intl.string(util.t.tYBBWz);
      const intl2 = util.intl;
      obj3.confirmText = intl2.string(util.t.BddRzS);
      actions_AlertActionCreatorsDefault.show(obj3);
    },
    onInvalidUrl() {
      return leaveFrame.leaveFrame(frame.id);
    },
    activityUrl: frame.data.url,
    contextSource: null,
    queryParams: null,
    onLoadError: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    safeAreasConfig: null,
    ignoreSilentHardwareSwitch: null
  };
  const obj4 = { type: null, frameId: null };
  const tmpResult3 = frame(11456);
  obj4.type = frame(6777).EmbeddedContextSourceType.FRAME;
  obj4.frameId = frame.id;
  obj3.contextSource = obj4;
  const tmp12 = layoutMode(18432);
  obj3.queryParams = layoutMode(18429)(frame, frame(11471).ActivityPlatform.MOBILE);
  obj3.onLoadError = callback;
  const tmp13 = layoutMode(18429);
  obj3.allowPopups = frame(11502).allowPopups(data);
  obj3.isPipOrGridMode = layoutMode === FrameLayoutModes.PIP;
  if (isLandscape) {
    landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  }
  obj3.safeAreasConfig = landscapeSafeAreasConfig;
  obj3.ignoreSilentHardwareSwitch = !stateFromStores;
  obj2.children = <tmp12 onActivityCrash={onActivityCrash} applicationId={frame.applicationId} iframeId={iframeId} onDisallowedNavigation={function onDisallowedNavigation() {
    leaveFrame.leaveFrame(frame.id);
    const obj3 = { body: null, confirmText: null };
    const intl = util.intl;
    obj3.body = intl.string(util.t.tYBBWz);
    const intl2 = util.intl;
    obj3.confirmText = intl2.string(util.t.BddRzS);
    actions_AlertActionCreatorsDefault.show(obj3);
  }} onInvalidUrl={function onInvalidUrl() {
    return leaveFrame.leaveFrame(frame.id);
  }} activityUrl={frame.data.url} contextSource={null} queryParams={null} onLoadError={null} allowPopups={null} referrerPolicy="origin" isPipOrGridMode={null} safeAreasConfig={null} ignoreSilentHardwareSwitch={null} />;
  return jsx(frame(11456).BaseActivityView, { showLoadingIndicator: first, isResetting, children: null });
});