// === Module 18950: FrameView ===

// Module 18950 (FrameView)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1125 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5947 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import FramePoolManagerDefault from "FramePoolManager" /* 11874 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 18951 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;

require = fn;
const FrameLayoutModes = fn(6834).FrameLayoutModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FrameView(frame) {
  const cResult = frame(layoutMode[6]).c(48);
  frame = frame.frame;
  const iframeId = frame.iframeId;
  ({ onActivityCrash, presentation } = frame);
  layoutMode = presentation.layoutMode;
  ({ portraitSafeAreasConfig, landscapeSafeAreasConfig } = presentation);
  let obj = frame(layoutMode[6]);
  const tmp = frame;
  const tmp2 = layoutMode;
  const data = frame(layoutMode[7]).useApplication(frame.applicationId).data;
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
  const obj2 = frame(layoutMode[7]);
  let stateFromStores = tmp(tmp2[8]).useStateFromStores(first, tmp6);
  if (!stateFromStores) {
    let conjureProjectId;
    if (data != null) {
      conjureProjectId = data.conjureProjectId;
    }
    stateFromStores = null != conjureProjectId;
  }
  const tmpResult = tmp(tmp2[8]);
  const first1 = _slicedToArray(noop.useState(true), 2)[0];
  if (cResult[3] === frame.applicationId) {
    if (cResult[4] === frame.id) {
      if (cResult[5] === layoutMode) {
        let tmp12 = cResult[6];
        let tmp13 = cResult[7];
      }
      const layoutEffect = noop.useLayoutEffect(tmp12, tmp13);
      if (cResult[8] !== frame.id) {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
        cResult[8] = frame.id;
        cResult[9] = C;
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
      }
      if (cResult[10] !== frame.id) {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
        cResult[10] = frame.id;
        cResult[11] = tmp17;
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
      }
      if (!first1) {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
      }
      if (cResult[12] === data) {
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            leaveFrameResult = obj.leaveFrame(frame.id);
            return;
          }
        }
      }
      let obj3 = { orientationLockState: orientationLock, showLoadingIndicator: first1, setShowLoadingStateForLockingOrientation: tmp11, application: data, setOrientationLockState: tmp17 };
      cResult[12] = data;
      cResult[13] = orientationLock;
      cResult[14] = tmp17;
      cResult[15] = first1;
      cResult[16] = obj3;
    }
  }
  class E {
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
  cResult[6] = E;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = E;
  const tmp9 = _slicedToArray(noop.useState(true), 2);
}) : (function FrameView(frame) {
  frame = frame.frame;
  const iframeId = frame.iframeId;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let landscapeSafeAreasConfig = presentation.portraitSafeAreasConfig;
  const data = frame(layoutMode[7]).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  let obj = frame(layoutMode[7]);
  const items = [ConjureProjectStore];
  let stateFromStores = frame(layoutMode[8]).useStateFromStores(items, () => ConjureProjectStore.isConjureProjectApplication(frame.applicationId));
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
  const tmpResult = frame(layoutMode[8]);
  const baseActivityView = frame(layoutMode[12]).useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5[1], application: data, setOrientationLockState: callback1 });
  ({ isResetting, isLandscape } = baseActivityView);
  const obj2 = { showLoadingIndicator: first, isResetting, children: null };
  let obj3 = {
    onActivityCrash: frame.onActivityCrash,
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
    onLoadEnd: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    safeAreasConfig: null,
    ignoreSilentHardwareSwitch: null
  };
  const obj4 = { type: null, frameId: null };
  const tmpResult3 = frame(layoutMode[12]);
  obj4.type = frame(layoutMode[15]).EmbeddedContextSourceType.FRAME;
  obj4.frameId = frame.id;
  obj3.contextSource = obj4;
  const tmp12 = iframeId(layoutMode[20]);
  obj3.queryParams = iframeId(layoutMode[16])(frame, frame(layoutMode[17]).ActivityPlatform.MOBILE);
  obj3.onLoadError = callback;
  obj3.onLoadEnd = function onLoadEnd() {
    return FramePoolManagerDefault.setWebViewLoaded(frame.id, iframeId);
  };
  const tmp13 = iframeId(layoutMode[16]);
  obj3.allowPopups = frame(layoutMode[19]).allowPopups(data);
  obj3.isPipOrGridMode = layoutMode === FrameLayoutModes.PIP;
  if (isLandscape) {
    landscapeSafeAreasConfig = presentation.landscapeSafeAreasConfig;
  }
  obj3.safeAreasConfig = landscapeSafeAreasConfig;
  obj3.ignoreSilentHardwareSwitch = !stateFromStores;
  obj2.children = <tmp12 onActivityCrash={frame.onActivityCrash} applicationId={frame.applicationId} iframeId={iframeId} onDisallowedNavigation={function onDisallowedNavigation() {
    leaveFrame.leaveFrame(frame.id);
    const obj3 = { body: null, confirmText: null };
    const intl = util.intl;
    obj3.body = intl.string(util.t.tYBBWz);
    const intl2 = util.intl;
    obj3.confirmText = intl2.string(util.t.BddRzS);
    actions_AlertActionCreatorsDefault.show(obj3);
  }} onInvalidUrl={function onInvalidUrl() {
    return leaveFrame.leaveFrame(frame.id);
  }} activityUrl={frame.data.url} contextSource={null} queryParams={null} onLoadError={null} onLoadEnd={null} allowPopups={null} referrerPolicy="origin" isPipOrGridMode={null} safeAreasConfig={null} ignoreSilentHardwareSwitch={null} />;
  return jsx(frame(layoutMode[12]).BaseActivityView, { showLoadingIndicator: first, isResetting, children: null });
});