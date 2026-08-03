// === Module 16076: VoicePanelSecondaryPIPContent ===

// Module 16076 (VoicePanelSecondaryPIPContent)
import FrameView from "FrameView";
import participantFromServer from "participantFromServer";
import map from "map";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ActivityLayoutMode } from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import { FrameLayoutModes } from "FrameLayoutModes";
import { jsx } from "set";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_11 = createCacheKey.createStyles({ activityContainer: { flex: 1 } });
let closure_12 = { code: "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}" };
const result = require("map").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let connectedEmbeddedActivity;
  let connectedFrame;
  let framePanelMode;
  let framePipOrientationLockState;
  let panelMode;
  let pipOrientationLockState;
  let tmp = size;
  let obj = connectedEmbeddedActivityChannelId;
  const windowDimensions = width.useContext(size(connectedEmbeddedActivityChannelId[9])).windowDimensions;
  let obj1 = windowDimensions(connectedEmbeddedActivityChannelId[10]);
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
    obj = { connectedEmbeddedActivityChannelId: null, connectedEmbeddedActivity: null, pipOrientationLockState: null, panelMode: null };
    obj[0] = windowDimensions(connectedEmbeddedActivityChannelId[12]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    obj[1] = selfEmbeddedActivityForLocation;
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
    let obj = pipOrientationLockState;
    const connectedFrame = pipOrientationLockState.getConnectedFrame();
    let applicationId;
    if (connectedFrame != null) {
      applicationId = connectedFrame.applicationId;
    }
    obj = { connectedFrame, framePanelMode: obj.getActivityPanelMode(), framePipOrientationLockState: null };
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    obj[2] = pipOrientationLockStateForApp;
    return obj;
  });
  ({ connectedFrame, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items2 = [ensureGuildLoaded];
  width = size.width;
  height = size.height;
  const items3 = [width, height];
  const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStores(items2, () => outer1_6.getChannel(connectedEmbeddedActivityChannelId));
  let tmp8 = null != connectedEmbeddedActivity;
  const memo = width.useMemo(() => ({ width, height, position: "absolute", left: "50%", marginLeft: -1 * size(connectedEmbeddedActivityChannelId[13])(width / 2), top: "50%", marginTop: -1 * size(connectedEmbeddedActivityChannelId[13])(height / 2) }), items3);
  if (tmp8) {
    tmp8 = !tmp(obj[14])(connectedEmbeddedActivityChannelId);
  }
  if (tmp8) {
    tmp8 = panelMode === ActivityPanelModes.PIP;
  }
  let tmp10 = null != connectedFrame;
  if (tmp10) {
    tmp10 = framePanelMode === ActivityPanelModes.PIP;
  }
  if (tmp10) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  class P {
    constructor() {
      obj = { pipWidth: closure_1.width, pipHeight: closure_1.height, pipOrientationLockState, isLandscape: null };
      tmp = outer1_1(outer1_2[16]);
      obj[3] = windowDimensions.get().landscape;
      size = tmp(obj);
      obj = { width: size.width, height: size.height, left: null, top: null, marginLeft: null, marginTop: null };
      str = "0%";
      str2 = "0%";
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
    }
  }
  obj = { getActivityContainerPipStylesSpec: tmp(obj[16]), pipState: size, activePipOrientationLockState: pipOrientationLockState, windowDimensions };
  P.__closure = obj;
  P.__workletHash = 12186082276755;
  P.__initData = closure_12;
  const animatedStyle = tmp2(obj[15]).useAnimatedStyle(P);
  if (!tmp8) {
    if (!tmp10) {
      return null;
    }
  }
  obj = { style: memo, pointerEvents: "none", children: null };
  let tmpResult = tmp(obj[17]);
  obj1 = { style: items4, children: null };
  items4 = [tmp3.activityContainer, animatedStyle];
  tmpResult = tmp(obj[18]);
  if (tmp10) {
    tmp = tmp(obj[19]);
    obj = { layoutMode: null };
    obj[0] = FrameLayoutModes.PIP;
    let tmp14Result = tmp14(tmp, obj);
  } else {
    obj2 = { channel: null, layoutMode: null };
    obj2[0] = stateFromStores;
    obj2[1] = ActivityLayoutMode.PIP;
    tmp14Result = tmp14(tmp(obj[20]), obj2);
  }
  obj1[1] = tmp14Result;
  obj1 = tmp14(tmpResult, obj1);
  obj[2] = obj1;
  tmp14Result = tmp14(tmpResult, obj);
};