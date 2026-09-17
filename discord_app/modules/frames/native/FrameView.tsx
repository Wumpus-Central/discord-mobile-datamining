// discord_app/modules/frames/native/FrameView.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import FramesNativeManagerDefault from "FramesNativeManager.tsx";
import frames_getDefaultOrientationLockState from "getDefaultOrientationLockState.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import FramesStore from "../FramesStore.tsx";

require = fn;
function FrameViewInner(frame) {
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  let landscapeSafeAreasConfig = frame.portraitSafeAreasConfig;
  let setIsResetting;
  const data = frame(setIsResetting[6]).useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  let first = tmp3[0];
  const items = [layoutMode, ,];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = noop.useLayoutEffect(() => {
    DispatcherDefault.dispatch({
      type: "FRAME_UPDATE_LAYOUT_MODE",
      layoutMode,
      applicationId: frame.applicationId,
      frameId: frame.id,
    });
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  const callback = noop.useCallback(() => {
    FramesNativeManagerDefault.leaveFrame(frame.id);
  }, items1);
  const callback1 = noop.useCallback(
    (application, arg1) => frames_getDefaultOrientationLockState.setOrientationLockState(frame.id, application, arg1),
    items2,
  );
  if (!first) {
    first = null == data;
  }
  const obj = frame(setIsResetting[6]);
  const baseActivityView = frame(setIsResetting[10]).useBaseActivityView({
    orientationLockState: orientationLock,
    showLoadingIndicator: first,
    setShowLoadingStateForLockingOrientation: tmp3[1],
    application: data,
    setOrientationLockState: callback1,
  });
  setIsResetting = baseActivityView.setIsResetting;
  ({ isResetting, isLandscape } = baseActivityView);
  const obj2 = { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null };
  const obj3 = {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => setIsResetting(false), 0);
    },
    applicationId: frame.applicationId,
    frameId: frame.id,
    activityUrl: frame.data.url,
    queryParams: null,
    onLoadError: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: null,
    webViewKey: null,
    safeAreasConfig: null,
  };
  const tmpResult = frame(setIsResetting[10]);
  obj3.queryParams = layoutMode(setIsResetting[12])(frame, ActivityPlatform.MOBILE);
  obj3.onLoadError = callback;
  const tmp10 = layoutMode(setIsResetting[11]);
  obj3.allowPopups = frame(setIsResetting[13]).allowPopups(data);
  obj3.isPipOrGridMode = layoutMode === constants.PIP;
  obj3.webViewKey = frame(setIsResetting[8]).FRAME_WEB_VIEW_KEY;
  if (isLandscape) {
    landscapeSafeAreasConfig = frame.landscapeSafeAreasConfig;
  }
  obj3.safeAreasConfig = landscapeSafeAreasConfig;
  obj2.children = (
    <tmp10
      onActivityCrash={function onActivityCrash() {
        setIsResetting(true);
        const timerId = setTimeout(() => setIsResetting(false), 0);
      }}
      applicationId={frame.applicationId}
      frameId={frame.id}
      activityUrl={frame.data.url}
      queryParams={null}
      onLoadError={null}
      allowPopups={null}
      referrerPolicy="origin"
      isPipOrGridMode={null}
      webViewKey={null}
      safeAreasConfig={null}
    />
  );
  return jsx(frame(setIsResetting[10]).BaseActivityView, {
    wakeLockKey: "FrameActivities",
    showLoadingIndicator: first,
    isResetting,
    children: null,
  });
}
const FramesConstants = fn(9665);
({ asLaunched: metroRequire, FrameLayoutModes: closure_7 } = FramesConstants);
const ActivityPlatform = fn(1921).ActivityPlatform;
const jsx = fn(21).jsx;
const memoResult = noop.memo(function FrameViewGate(arg0) {
  const items = [FramesStore];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_1_6(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
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
  const items = [FramesStore];
  const items1 = [frameId];
  const stateFromStores = frameId(504).useStateFromStores(
    items,
    () => timestampProducer(FramesStore.getFrame(frameId)),
    items1,
  );
  if (null != stateFromStores) {
    const obj2 = { frame: stateFromStores };
    const merged1 = Object.assign(merged);
    tmp = <FrameViewInner frame={stateFromStores} />;
  }
  return tmp;
};
export const FrameView = memoResult;
