// discord_app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import getActivityContainerPIPStylesSpecDefault from "../../../activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const ActivityLayoutMode = fn(1920).ActivityLayoutMode;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const FramesConstants = fn(9511);
({ asLaunched: closure_9, FrameLayoutModes: c10, getPipOrientationLockStateForFrame: closure_11 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ activityContainer: { flex: 1 } });
const __initData = {
  code: "function VoicePanelSecondaryPIPContentTsx1(){const{getActivityContainerPipStylesSpec,pipState,activePipOrientationLockState,windowDimensions}=this.__closure;const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width,pipHeight:pipState.height,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}",
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
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
    obj = {
      connectedEmbeddedActivityChannelId: windowDimensions(
        connectedEmbeddedActivityChannelId[12],
      ).getEmbeddedActivityLocationChannelId(connectedActivityLocation),
      connectedEmbeddedActivity: selfEmbeddedActivityForLocation,
      pipOrientationLockState: null,
      panelMode: null,
    };
    let pipOrientationLockStateForApp;
    if (null != applicationId) {
      pipOrientationLockStateForApp = obj.getPipOrientationLockStateForApp(applicationId);
    }
    obj.pipOrientationLockState = pipOrientationLockStateForApp;
    obj.panelMode = obj.getActivityPanelMode();
    return obj;
  });
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  const tmp2 = windowDimensions;
  const tmp3 = closure_13();
  const items1 = [pipOrientationLockState];
  const stateFromStoresObject1 = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStoresObject(
    items1,
    () => {
      const tmp = closure_1_9(pipOrientationLockState.getMainFrame());
      const obj = { hasLaunchedFrame: null != tmp, framePanelMode: null, framePipOrientationLockState: null };
      let activityPanelMode;
      if (tmp != null) {
        activityPanelMode = tmp.data.activityPanelMode;
      }
      if (activityPanelMode == null) {
        activityPanelMode = constants.DISCONNECTED;
      }
      obj.framePanelMode = activityPanelMode;
      obj.framePipOrientationLockState = closure_1_11(tmp);
      return obj;
    },
  );
  ({ hasLaunchedFrame, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items2 = [ChannelStore];
  width = size.width;
  height = size.height;
  const items3 = [width, height];
  const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStores(items2, () =>
    ChannelStore.getChannel(connectedEmbeddedActivityChannelId),
  );
  let tmp8 = null != connectedEmbeddedActivity;
  const memo = width.useMemo(() => {
    size = {
      width,
      height,
      position: "absolute",
      left: "50%",
      marginLeft: -1 * roundToNearestPixelDefault(width / 2),
      top: "50%",
      marginTop: -1 * roundToNearestPixelDefault(height / 2),
    };
    return size;
  }, items3);
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
    const obj = {
      pipWidth: size.width,
      pipHeight: size.height,
      pipOrientationLockState,
      isLandscape: windowDimensions.get().landscape,
    };
    size = getActivityContainerPIPStylesSpecDefault(obj);
    size = { width: size.width, height: size.height, left: null, top: null, marginLeft: null, marginTop: null };
    let str = "0%";
    let str2 = "0%";
    if (size.shouldHorizontallyCenter) {
      str2 = "50%";
    }
    size.left = str2;
    if (size.shouldVerticallyCenter) {
      str = "50%";
    }
    size.top = str;
    ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
    return size;
  };
  obj = {
    getActivityContainerPipStylesSpec: tmp(obj[16]),
    pipState: size,
    activePipOrientationLockState: pipOrientationLockState,
    windowDimensions,
  };
  fn.__closure = obj;
  fn.__workletHash = 12186082276755;
  fn.__initData = __initData;
  const animatedStyle = tmp2(obj[15]).useAnimatedStyle(fn);
  if (!tmp8) {
    if (!hasLaunchedFrame) {
      return null;
    }
  }
  obj = { style: memo, pointerEvents: "none", children: null };
  tmp(obj[17]);
  obj1 = { style: null, children: null };
  const items4 = [tmp3.activityContainer, animatedStyle];
  obj1.style = items4;
  const tmpResult = tmp(obj[18]);
  if (hasLaunchedFrame) {
    tmp = tmp(obj[19]);
    obj = { layoutMode: constants.PIP };
    let tmp13Result = tmp13(tmp, obj);
  } else {
    obj2 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    tmp13Result = tmp13(tmp(obj[20]), obj2);
  }
  obj1.children = tmp13Result;
  obj1 = tmp13(tmpResult, obj1);
  obj.children = obj1;
  tmp13Result = tmp13(tmpResult, obj);
}
