// discord_app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

const _modDef1652 = tmp(1652);
const isVoiceEmbeddedActivityDefault = tmp(5814);
const EmbeddedActivityViewDefault = tmp(12000);
const FrameRenderTargetDefault = tmp(12459);
const getActivityContainerPIPStylesSpecDefault = tmp(19442);
const require = fn;
const ActivityPanelModes = fn(5793).ActivityPanelModes;
const FramesConstants = fn(6985);
({
  asLaunched: closure_8,
  FrameLayoutModes: closure_9,
  getPipOrientationLockStateForFrame: closure_10,
} = FramesConstants);
const ActivityLayoutMode = fn(11898).ActivityLayoutMode;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let closure_13 = createStyles.createStyles({
  activityContainer: { flex: 1 },
  wrapper: { position: "absolute", left: "50%", top: "50%" },
});
let closure_14 = {
  code: "(function VoicePanelSecondaryPIPContentTsx1(){let[pipState,roundToNearestPixel]=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};})",
};
let closure_15 = {
  code: "(function VoicePanelSecondaryPIPContentTsx2(){let[pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions]=this.__closure;const scale=pipState.scale.get();const{width:width,height:height,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale,pipHeight:pipState.height*scale,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width,height:height,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default function VoicePanelSecondaryPIPContent() {
  let obj = dependencyMap;
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const tmp4 = closure_13();
  let obj2 = require("VoicePanelPIPStateContext");
  items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation =
      EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    const obj2 = {
      connectedEmbeddedActivityChannelId: _undefined(pipOrientationLockState[12]).getEmbeddedActivityLocationChannelId(
        connectedActivityLocation,
      ),
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
  });
  const connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
  _require = connectedEmbeddedActivityChannelId;
  ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
  const obj3 = require("initialize");
  const items1 = [FramesStore];
  const stateFromStoresObject1 = require("initialize").useStateFromStoresObject(items1, () => {
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
  });
  ({ mainFrameId, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
  const obj4 = require("initialize");
  const items2 = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => ChannelStore.getChannel(c0));
  const obj5 = require("initialize");
  const items3 = [closure_14, pIPState, roundToNearestPixelDefault];
  _require = undefined;
  importDefault = undefined;
  [tmp8, tmp9, tmp10] = items3;
  class VoicePanelSecondaryPIPContentTsx1 {
    constructor() {
      scale = closure_0.scale;
      value = scale.get();
      result = closure_0.width * value;
      result1 = closure_0.height * value;
      size = {
        width: result,
        height: result1,
        marginLeft: -1 * closure_1(result / 2),
        marginTop: -1 * closure_1(result1 / 2),
      };
      return size;
    }
  }
  const items4 = [tmp9, tmp10];
  VoicePanelSecondaryPIPContentTsx1.__closure = items4;
  VoicePanelSecondaryPIPContentTsx1.__workletHash = 16590500926098;
  VoicePanelSecondaryPIPContentTsx1.__initData = tmp8;
  let tmp12 = null != connectedEmbeddedActivity;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelSecondaryPIPContentTsx1,
  );
  if (tmp12) {
    tmp12 = !isVoiceEmbeddedActivityDefault(connectedEmbeddedActivityChannelId);
  }
  if (tmp12) {
    tmp12 = panelMode === ActivityPanelModes.PIP;
  }
  let tmp14 = null != mainFrameId;
  if (tmp14) {
    tmp14 = framePanelMode === ActivityPanelModes.PIP;
  }
  if (tmp14) {
    pipOrientationLockState = framePipOrientationLockState;
  }
  const obj6 = require("../../../../../_runtime/metro/01652__.js");
  const items5 = [
    closure_15,
    pIPState,
    getActivityContainerPIPStylesSpecDefault,
    pipOrientationLockState,
    noop.useContext(VoicePanelStateContextDefault).windowDimensions,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20] = items5;
  class VoicePanelSecondaryPIPContentTsx2 {
    constructor() {
      scale = closure_0.scale;
      value = scale.get();
      obj = {
        pipWidth: closure_0.width * value,
        pipHeight: closure_0.height * value,
        pipOrientationLockState: closure_2,
        isLandscape: closure_3.get().landscape,
      };
      size = closure_1(obj);
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
  const items6 = [tmp17, tmp18, tmp19, tmp20];
  VoicePanelSecondaryPIPContentTsx2.__closure = items6;
  VoicePanelSecondaryPIPContentTsx2.__workletHash = 3337225503971;
  VoicePanelSecondaryPIPContentTsx2.__initData = tmp16;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelSecondaryPIPContentTsx2,
  );
  if (!tmp12) {
    if (!tmp14) {
      return null;
    }
  }
  const obj7 = { style: null, pointerEvents: "none", children: null };
  const items7 = [tmp4.wrapper, animatedStyle];
  obj7.style = items7;
  let obj8 = { style: null, children: null };
  const items8 = [tmp4.activityContainer, animatedStyle1];
  obj8.style = items8;
  if (!tmp14) {
    const obj9 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
    let tmp23Result = jsx(EmbeddedActivityViewDefault, {
      channel: stateFromStores,
      layoutMode: ActivityLayoutMode.PIP,
    });
    obj8.children = tmp23Result;
    obj8 = <tmp24 {...obj8} />;
    obj7.children = obj8;
    jsx(_modDef1652.View, obj7);
  }
  const obj10 = {
    frameId: mainFrameId,
    level: require("FrameStackLevel").FrameStackLevel.AboveAppContent,
    presentation: null,
  };
  obj = { layoutMode: constants.PIP };
  obj10.presentation = obj;
  tmp23Result = (
    <tmp frameId={mainFrameId} level={require("FrameStackLevel").FrameStackLevel.AboveAppContent} presentation={null} />
  );
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
}
