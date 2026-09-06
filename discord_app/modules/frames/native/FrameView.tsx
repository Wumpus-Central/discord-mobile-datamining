// === Module 16615: FrameView ===

// Module 16615 (FrameView)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9568 */;
import frames_getDefaultOrientationLockState from "frames/getDefaultOrientationLockState" /* 16616 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9510 */;

require = fn;
function FrameViewInner(frame) {
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  let landscapeSafeAreasConfig = frame.portraitSafeAreasConfig;
  let setIsResetting;
  let obj = frame(setIsResetting[6]);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  let first = tmp3[0];
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj);
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = noop.useCallback(() => {
    FramesNativeManagerDefault.leaveFrame(frame.id);
  }, items1);
  const callback1 = noop.useCallback((application, arg1) => frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, application, arg1), items2);
  if (!first) {
    first = null == data;
  }
  let tmpResult = tmp(tmp2[10]);
  const baseActivityView = tmpResult.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp3[1], application: data, setOrientationLockState: callback1 });
  setIsResetting = baseActivityView.setIsResetting;
  obj = { instance_id: "example-cl-instance", platform: ActivityPlatform.MOBILE, discord_proxy_ticket: frame.data.proxyTicket };
  ({ isResetting, isLandscape } = baseActivityView);
  const merged = Object.assign(layoutMode(tmp2[11])(frame.data));
  obj = { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null };
  const obj1 = {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: obj,
    onLoadError: callback,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    webViewKey: null,
    safeAreasConfig: null
  };
  tmpResult = tmp(tmp2[13]);
  obj1.allowPopups = tmpResult.allowPopups(data);
  obj1.isPipOrGridMode = layoutMode === constants.PIP;
  obj1.webViewKey = frame(setIsResetting[8]).FRAME_WEB_VIEW_KEY;
  if (isLandscape) {
    landscapeSafeAreasConfig = frame.landscapeSafeAreasConfig;
  }
  obj1.safeAreasConfig = landscapeSafeAreasConfig;
  obj.children = jsx(layoutMode(setIsResetting[12]), {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: obj,
    onLoadError: callback,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    webViewKey: null,
    safeAreasConfig: null
  });
  return jsx(frame(setIsResetting[10]).BaseActivityView, { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null });
}
const FramesConstants = fn(9511);
({ asLaunched: metroRequire, FrameLayoutModes: closure_7 } = FramesConstants);
const ActivityPlatform = fn(1920).ActivityPlatform;
const jsx = fn(21).jsx;
const memoResult = noop.memo(function FrameViewGate(arg0) {
  let obj = initialize;
  const items = [FramesStore];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { frame: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const InlineFrameView = function InlineFrameView(frameId) {
  frameId = frameId.frameId;
  let tmp = null;
  const merged = Object.assign(frameId, Object.assign({ frameId: 0 }));
  let obj = frameId(504);
  const items = [FramesStore];
  const items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => timestampProducer(FramesStore.getFrame(frameId)), items1);
  if (null != stateFromStores) {
    obj = { frame: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp;
};
export const FrameView = memoResult;