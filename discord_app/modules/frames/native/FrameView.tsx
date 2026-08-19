// discord_app/modules/frames/native/FrameView.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import map from "../FramesStore.tsx";
import FrameLayoutModes from "../FramesConstants.tsx";
import { ActivityPlatform } from "../../activities/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function FrameViewInner(frame) {
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
    layoutMode(setIsResetting[7]);
    const obj = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode, applicationId: frame.applicationId, frameId: frame.id };
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
  ({ isResetting, isLandscape } = baseActivityView);
  obj = { wakeLockKey: "FrameActivities", showLoadingIndicator: first, isResetting, children: null };
  obj1 = {
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
  const items = [closure_5];
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
const result = require("obj132").fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const FrameView = memoResult;