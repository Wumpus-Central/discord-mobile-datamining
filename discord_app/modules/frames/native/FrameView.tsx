// === Module 15956: FrameView ===

// Module 15956 (FrameView)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import map from "map";
import { FrameLayoutModes } from "FrameLayoutModes";
import { ActivityPlatform } from "items3";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
const memoResult = importAllResult.memo(function FrameViewInner(layoutMode) {
  let tmp8;
  let tmp9;
  layoutMode = layoutMode.layoutMode;
  let landscapeSafeAreasConfig = layoutMode.portraitSafeAreasConfig;
  let stateFromStores;
  let applicationId1;
  let setIsResetting;
  let obj = layoutMode(applicationId1[6]);
  const items = [map];
  stateFromStores = obj.useStateFromStores(items, () => connectedFrame.getConnectedFrame());
  let obj1 = layoutMode(applicationId1[7]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const data = obj1.useApplication(applicationId).data;
  let tmpResult = tmp(tmp2[6]);
  const items1 = [map];
  const items2 = [stateFromStores];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let orientationLockStateForApp;
    if (null != stateFromStores) {
      orientationLockStateForApp = outer1_5.getOrientationLockStateForApp(tmp.applicationId);
    }
    return orientationLockStateForApp;
  }, items2);
  const items3 = [layoutMode];
  [tmp8, tmp9] = setIsResetting(importAllResult.useState(true), 2);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (null != stateFromStores) {
      let obj = stateFromStores(applicationId1[8]);
      obj = { type: "FRAME_UPDATE_LAYOUT_MODE", layoutMode: null, applicationId: null };
      obj[1] = layoutMode;
      obj[2] = tmp.applicationId;
      obj.dispatch(obj);
    }
  }, items3);
  applicationId1 = undefined;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const items4 = [applicationId1];
  let tmp13 = null == stateFromStores;
  const callback = importAllResult.useCallback(() => {
    if (null != applicationId1) {
      let obj = stateFromStores(applicationId1[9]);
      obj = { applicationId: null };
      obj[0] = tmp;
      obj.leaveFrame(obj);
    }
  }, items4);
  if (!tmp13) {
    tmp13 = tmp8;
  }
  if (!tmp13) {
    tmp13 = null == applicationId1;
  }
  if (!tmp13) {
    tmp13 = null == data;
  }
  tmpResult = tmp(tmp2[10]);
  obj = { orientationLockState: stateFromStores1, showLoadingIndicator: tmp13, setShowLoadingStateForLockingOrientation: tmp9, application: data, setOrientationLockState: tmp(tmp2[11]).setOrientationLockState };
  const baseActivityView = tmpResult.useBaseActivityView(obj);
  setIsResetting = baseActivityView.setIsResetting;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { instance_id: "example-cl-instance", platform: null };
    obj[1] = ActivityPlatform.MOBILE;
    if (null != stateFromStores.proxyTicket) {
      obj.discord_proxy_ticket = stateFromStores.proxyTicket;
    }
    obj1 = { wakeLockKey: "FrameActivities", showLoadingIndicator: null, isResetting: null, children: null };
    obj1[1] = tmp13;
    obj1[2] = tmp15;
    const obj2 = { onActivityCrash: null, applicationId: null, activityUrl: null, queryParams: null, onLoadError: null, allowPopups: null, referrerPolicy: "origin", isPipOrGridMode: null, webViewKey: null, safeAreasConfig: null };
    obj2[0] = function onActivityCrash() {
      setIsResetting(true);
      const timerId = setTimeout(() => callback(false), 0);
    };
    obj2[1] = applicationId1;
    obj2[2] = stateFromStores.url;
    obj2[3] = obj;
    obj2[4] = callback;
    const tmp19 = stateFromStores(tmp2[12]);
    obj2[5] = tmp(tmp2[13]).allowPopups(data);
    obj2[7] = layoutMode === FrameLayoutModes.PIP;
    obj2[8] = tmp(tmp2[9]).FRAME_WEB_VIEW_KEY;
    if (tmp16) {
      landscapeSafeAreasConfig = layoutMode.landscapeSafeAreasConfig;
    }
    obj2[9] = landscapeSafeAreasConfig;
    obj1[3] = <tmp19 onActivityCrash={null} applicationId={null} activityUrl={null} queryParams={null} onLoadError={null} allowPopups={null} referrerPolicy="origin" isPipOrGridMode={null} webViewKey={null} safeAreasConfig={null} />;
    return jsx(tmp(tmp2[10]).BaseActivityView, { wakeLockKey: "FrameActivities", showLoadingIndicator: null, isResetting: null, children: null });
  }
  const obj4 = importAllResult;
  const tmp3 = map;
  const tmp7 = setIsResetting(importAllResult.useState(true), 2);
});
const result = require("map").fileFinishedImporting("modules/frames/native/FrameView.tsx");

export default memoResult;
export const FrameView = memoResult;