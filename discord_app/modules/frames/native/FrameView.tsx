// === Module 19092: FrameView ===

// Module 19092 (FrameView)
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1113 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import leaveFrame from "leaveFrame" /* 10927 */;
import FramePoolManagerDefault from "FramePoolManager" /* 12108 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 19093 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

require = fn;
const FrameLayoutModes = fn(6847).FrameLayoutModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default function FrameView(frame) {
  frame = frame.frame;
  const iframeId = frame.iframeId;
  const presentation = frame.presentation;
  const layoutMode = presentation.layoutMode;
  let landscapeSafeAreasConfig = presentation.portraitSafeAreasConfig;
  const data = frame(layoutMode[5]).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  let obj = frame(layoutMode[5]);
  const items = [ConjureProjectStore];
  let stateFromStores = frame(layoutMode[6]).useStateFromStores(items, () => ConjureProjectStore.isConjureProjectApplication(frame.applicationId));
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
  const tmpResult = frame(layoutMode[6]);
  const baseActivityView = frame(layoutMode[10]).useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp5[1], application: data, setOrientationLockState: callback1 });
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
  const tmpResult3 = frame(layoutMode[10]);
  obj4.type = frame(layoutMode[14]).EmbeddedContextSourceType.FRAME;
  obj4.frameId = frame.id;
  obj3.contextSource = obj4;
  const tmp12 = iframeId(layoutMode[11]);
  obj3.queryParams = iframeId(layoutMode[15])(frame, frame(layoutMode[16]).ActivityPlatform.MOBILE);
  obj3.onLoadError = callback;
  obj3.onLoadEnd = function onLoadEnd() {
    return FramePoolManagerDefault.setWebViewLoaded(frame.id, iframeId);
  };
  const tmp13 = iframeId(layoutMode[15]);
  obj3.allowPopups = frame(layoutMode[18]).allowPopups(data);
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
  return jsx(frame(layoutMode[10]).BaseActivityView, { showLoadingIndicator: first, isResetting, children: null });
};