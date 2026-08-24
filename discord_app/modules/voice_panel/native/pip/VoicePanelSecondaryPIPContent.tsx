// === Module 16477: VoicePanelSecondaryPIPContent ===

// Module 16477 (VoicePanelSecondaryPIPContent)
import closure_3 from "noop" /* 19 */;
import closure_4 from "participantFromServer" /* 1390 */;
import closure_5 from "map" /* 8745 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import { ActivityLayoutMode } from "items3" /* 4485 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8740 */;
import FrameLayoutModes from "FrameLayoutModes" /* 8746 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ asLaunched: c9, FrameLayoutModes: c10, getPipOrientationLockStateForFrame: unpackModuleId } = FrameLayoutModes);
let closure_13 = createCacheKey.createStyles({ activityContainer: { flex: 1 } });
let closure_14 = { code: "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let tmp = size;
  let obj = connectedEmbeddedActivityChannelId;
  const windowDimensions = width.useContext(size(connectedEmbeddedActivityChannelId[9])).windowDimensions;
  obj1 = windowDimensions(connectedEmbeddedActivityChannelId[10]);
  size = obj1.usePIPState();
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items = [height];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let obj = height;
    const connectedActivityLocation = height.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = height.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    obj = { connectedEmbeddedActivityChannelId: windowDimensions(connectedEmbeddedActivityChannelId[12]).getEmbeddedActivityLocationChannelId(connectedActivityLocation), connectedEmbeddedActivity: selfEmbeddedActivityForLocation, pipOrientationLockState: null, panelMode: null };
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    obj[2] = pipOrientationLockStateForApp;
    obj[3] = obj.getActivityPanelMode();
    return obj;
  });
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  const tmp2 = windowDimensions;
  const tmp3 = callback();
  const items1 = [pipOrientationLockState];
  const stateFromStoresObject1 = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStoresObject(items1, () => {
    const tmp = callback(pipOrientationLockState.getMainFrame());
    const obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
    let activityPanelMode;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    if (activityPanelMode == null) {
      activityPanelMode = constants.DISCONNECTED;
    }
    obj[1] = activityPanelMode;
    obj[2] = callback2(tmp);
    return obj;
  });
  ({ hasLaunchedFrame, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items2 = [closure_6];
  width = size.width;
  height = size.height;
  const items3 = [width, height];
  const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStores(items2, () => closure_1_6.getChannel(connectedEmbeddedActivityChannelId));
  let tmp8 = null != connectedEmbeddedActivity;
  const memo = width.useMemo(() => ({ width, height, position: "absolute", left: "50%", marginLeft: -1 * size(connectedEmbeddedActivityChannelId[13])(width / 2), top: "50%", marginTop: -1 * size(connectedEmbeddedActivityChannelId[13])(height / 2) }), items3);
  if (tmp8) {
    tmp8 = !tmp(obj[14])(connectedEmbeddedActivityChannelId);
  }
  if (tmp8) {
    tmp8 = panelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    hasLaunchedFrame = framePanelMode === ActivityPanelModes.PIP;
  }
  if (hasLaunchedFrame) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const fn = function s() {
    let obj = { pipWidth: size.width, pipHeight: size.height, pipOrientationLockState, isLandscape: windowDimensions.get().landscape };
    size = size(connectedEmbeddedActivityChannelId[16])(obj);
    obj = { width: size.width, height: size.height, left: null, top: null, marginLeft: null, marginTop: null };
    let str = "0%";
    let str2 = "0%";
    if (size.shouldHorizontallyCenter) {
      str2 = "50%";
    }
    obj[2] = str2;
    if (size.shouldVerticallyCenter) {
      str = "50%";
    }
    obj[3] = str;
    ({ marginLeft: obj2[4], marginTop: obj2[5] } = size);
    return obj;
  };
  obj = { getActivityContainerPipStylesSpec: tmp(obj[16]), pipState: size, activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  fn.__closure = obj;
  fn.__workletHash = 12186082276755;
  fn.__initData = closure_14;
  const animatedStyle = tmp2(obj[15]).useAnimatedStyle(fn);
  if (!tmp8) {
    if (!hasLaunchedFrame) {
      return null;
    }
  }
  obj = { style: memo, pointerEvents: "none", children: null };
  let tmpResult = tmp(obj[17]);
  obj1 = { style: items4, children: null };
  items4 = [tmp3.activityContainer, animatedStyle];
  tmpResult = tmp(obj[18]);
  if (hasLaunchedFrame) {
    tmp = tmp(obj[19]);
    obj = { layoutMode: null };
    obj[0] = constants.PIP;
    let tmp13Result = tmp13(tmp, obj);
  } else {
    obj2 = { channel: null, layoutMode: null };
    obj2[0] = stateFromStores;
    obj2[1] = ActivityLayoutMode.PIP;
    tmp13Result = tmp13(tmp(obj[20]), obj2);
  }
  obj1[1] = tmp13Result;
  obj1 = tmp13(tmpResult, obj1);
  obj[2] = obj1;
  tmp13Result = tmp13(tmpResult, obj);
};