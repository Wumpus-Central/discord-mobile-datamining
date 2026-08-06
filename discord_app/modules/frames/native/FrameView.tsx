// discord_app/modules/frames/native/FrameView.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import map from "map";
import FrameLayoutModes from "FrameLayoutModes";
import { ActivityPlatform } from "items3";
import { jsx } from "jsxProd";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

let closure_6;
let error;
const require = arg1;
function FrameViewInner(frame) {
  let isLandscape;
  let isResetting;
  frame = frame.frame;
  const layoutMode = frame.layoutMode;
  let landscapeSafeAreasConfig = frame.portraitSafeAreasConfig;
  let setIsResetting;
  let obj = frame(setIsResetting[6]);
  const data = obj.useApplication(frame.applicationId).data;
  const orientationLock = frame.data.orientationLock;
  const tmp3 = callback(importAllResult.useState(true), 2);
  let first = tmp3[0];
  const items = [layoutMode, , ];
  ({ applicationId: arr[1], id: arr[2] } = frame);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    let obj = layoutMode(setIsResetting[7]);
    obj = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
    obj.dispatch(obj);
  }, items);
  const items1 = [frame.id];
  const items2 = [frame.id];
  callback = importAllResult.useCallback(() => {
    layoutMode(setIsResetting[8]).leaveFrame(frame.id);
  }, items1);
  const callback1 = importAllResult.useCallback((arg0, arg1) => frame(setIsResetting[9]).setOrientationLockState(frame.id, arg0, arg1), items2);
  if (!first) {
    first = null == data;
  }
  let tmpResult = tmp(tmp2[10]);
  const baseActivityView = tmpResult.useBaseActivityView({ orientationLockState: orientationLock, showLoadingIndicator: first, setShowLoadingStateForLockingOrientation: tmp3[1], application: data, setOrientationLockState: callback1 });
  setIsResetting = baseActivityView.setIsResetting;
  obj = { instance_id: "example-cl-instance", platform: ActivityPlatform.MOBILE, discord_proxy_ticket: frame.data.proxyTicket };
  ({ isResetting, isLandscape } = baseActivityView);
  obj = { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null };
  const obj1 = {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => callback(false), 0);
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
  tmpResult = tmp(tmp2[12]);
  obj1[6] = tmpResult.allowPopups(data);
  obj1[8] = layoutMode === constants.PIP;
  obj1[9] = frame(setIsResetting[8]).FRAME_WEB_VIEW_KEY;
  if (isLandscape) {
    landscapeSafeAreasConfig = frame.landscapeSafeAreasConfig;
  }
  obj1[10] = landscapeSafeAreasConfig;
  obj[3] = jsx(layoutMode(setIsResetting[11]), {
    onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => callback(false), 0);
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
let c4 = importAllResult;
({ asLaunched: closure_6, FrameLayoutModes: error } = FrameLayoutModes);
const memoResult = importAllResult.memo(function FrameViewGate(arg0) {
  let obj = initialize;
  const items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => callback(mainFrame.getMainFrame()));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { frame: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    tmp2 = <FrameViewInner frame={null} />;
  }
  return tmp2;
});
const result = require("map").fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const FrameView = memoResult;