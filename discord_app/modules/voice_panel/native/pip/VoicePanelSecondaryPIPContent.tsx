// discord_app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import getActivityContainerPIPStylesSpecDefault from "../../../activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const ActivityPanelModes = fn(5657).ActivityPanelModes;
const FramesConstants = fn(6847);
({ asLaunched: closure_8, FrameLayoutModes: closure_9, getPipOrientationLockStateForFrame: c10 } = FramesConstants);
const ActivityLayoutMode = fn(11693).ActivityLayoutMode;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_13 = createStyles.createStyles({
  activityContainer: { flex: 1 },
  wrapper: { position: "absolute", left: "50%", top: "50%" },
});
const __initData = {
  code: "function VoicePanelSecondaryPIPContentTsx1(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}",
};
const __initData2 = {
  code: "function VoicePanelSecondaryPIPContentTsx2(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale=pipState.scale.get();const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale,pipHeight:pipState.height*scale,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let tmp = pIPState;
  let obj = connectedEmbeddedActivityChannelId;
  const windowDimensions = pipOrientationLockState.useContext(
    pIPState(connectedEmbeddedActivityChannelId[9]),
  ).windowDimensions;
  pIPState = windowDimensions(connectedEmbeddedActivityChannelId[10]).usePIPState();
  const tmp4 = closure_13();
  let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[10]);
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStoresObject(
    items,
    () => {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const selfEmbeddedActivityForLocation =
        EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj2 = {
        connectedEmbeddedActivityChannelId: windowDimensions(
          connectedEmbeddedActivityChannelId[12],
        ).getEmbeddedActivityLocationChannelId(connectedActivityLocation),
        connectedEmbeddedActivity: selfEmbeddedActivityForLocation,
        pipOrientationLockState: null,
        panelMode: null,
      };
      let pipOrientationLockStateForApp;
      if (null != applicationId) {
        pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(applicationId);
      }
      obj2.pipOrientationLockState = pipOrientationLockStateForApp;
      obj2.panelMode = EmbeddedActivitiesStore.getActivityPanelMode();
      return obj2;
    },
  );
  connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  const obj3 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items1 = [FramesStore];
  const stateFromStoresObject1 = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStoresObject(
    items1,
    () => {
      const tmp = closure_1_8(mainFrame.getMainFrame());
      let id;
      if (tmp != null) {
        id = tmp.id;
      }
      const obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
      let activityPanelMode;
      if (tmp != null) {
        activityPanelMode = tmp.data.activityPanelMode;
      }
      if (activityPanelMode == null) {
        activityPanelMode = constants.DISCONNECTED;
      }
      obj.framePanelMode = activityPanelMode;
      obj.framePipOrientationLockState = closure_1_10(tmp);
      return obj;
    },
  );
  ({ mainFrameId, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const items2 = [ChannelStore];
  const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[11]).useStateFromStores(items2, () =>
    ChannelStore.getChannel(connectedEmbeddedActivityChannelId),
  );
  const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[11]);
  const fn = function p() {
    const scale = pIPState.scale;
    value = scale.get();
    const result = pIPState.width * value;
    const result1 = pIPState.height * value;
    const size = {
      width: result,
      height: result1,
      marginLeft: -1 * roundToNearestPixelDefault(result / 2),
      marginTop: -1 * roundToNearestPixelDefault(result1 / 2),
    };
    return size;
  };
  const obj6 = windowDimensions(connectedEmbeddedActivityChannelId[13]);
  fn.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[14]) };
  fn.__workletHash = 12892763508939;
  fn.__initData = __initData;
  let tmp9 = null != connectedEmbeddedActivity;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  if (tmp9) {
    tmp9 = !tmp(obj[15])(connectedEmbeddedActivityChannelId);
  }
  if (tmp9) {
    tmp9 = panelMode === ActivityPanelModes.PIP;
  }
  let tmp11 = null != mainFrameId;
  if (tmp11) {
    tmp11 = framePanelMode === ActivityPanelModes.PIP;
  }
  if (tmp11) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  const obj7 = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[14]) };
  class L {
    constructor() {
      scale = closure_1.scale;
      value = scale.get();
      obj = {
        pipWidth: closure_1.width * value,
        pipHeight: closure_1.height * value,
        pipOrientationLockState: closure_3,
        isLandscape: null,
      };
      tmp2 = closure_1(closure_2[16]);
      obj.isLandscape = windowDimensions.get().landscape;
      size = tmp2(obj);
      size1 = { width: size.width, height: size.height, left: null, top: null, marginLeft: null, marginTop: null };
      str = "0%";
      str2 = "0%";
      if (size.shouldHorizontallyCenter) {
        str2 = "50%";
      }
      size1.left = str2;
      if (size.shouldVerticallyCenter) {
        str = "50%";
      }
      size1.top = str;
      ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
      return size1;
    }
  }
  const tmp2Result = windowDimensions(obj[13]);
  L.__closure = {
    pipState: pIPState,
    getActivityContainerPipStylesSpec: tmp(obj[16]),
    activePipOrientationLockState: pipOrientationLockState,
    windowDimensions,
  };
  L.__workletHash = 10160295590074;
  L.__initData = __initData2;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(L);
  if (!tmp9) {
    if (!tmp11) {
      return null;
    }
  }
  const obj9 = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp4.wrapper, animatedStyle];
  obj9.style = items3;
  const obj8 = {
    pipState: pIPState,
    getActivityContainerPipStylesSpec: tmp(obj[16]),
    activePipOrientationLockState: pipOrientationLockState,
    windowDimensions,
  };
  let obj10 = { style: null, children: null };
  const items4 = [tmp4.activityContainer, animatedStyle1];
  obj10.style = items4;
  if (!tmp11) {
    const obj11 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    let tmp15Result = jsx(tmp(obj[20]), { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP });
    obj10.children = tmp15Result;
    obj10 = <tmp17 {...obj10} />;
    obj9.children = obj10;
    <tmpResult {...obj9} />;
  }
  tmp = tmp(obj[18]);
  const obj12 = {
    frameId: mainFrameId,
    level: windowDimensions(obj[19]).FrameStackLevel.AboveAppContent,
    presentation: null,
  };
  obj = { layoutMode: constants.PIP };
  obj12.presentation = obj;
  tmp15Result = (
    <tmp frameId={mainFrameId} level={windowDimensions(obj[19]).FrameStackLevel.AboveAppContent} presentation={null} />
  );
  const tmpResult = tmp(obj[17]);
}
