// discord_app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../activities/Constants.tsx";
import ActivityPanelConstants from "../../../activities/panel/ActivityPanelConstants.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import getActivityContainerPIPStylesSpecDefault from "../../../activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx";
import react from "../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let unpackModuleId;
const ActivityLayoutMode = Constants.ActivityLayoutMode;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ asLaunched: c9, FrameLayoutModes: c10, getPipOrientationLockStateForFrame: unpackModuleId } = FramesConstants);
const jsx = Fragment.jsx;
let closure_13 = createStyles.createStyles({
  activityContainer: { flex: 1 },
  wrapper: { position: "absolute", left: "50%", top: "50%" },
});
const __initData = {
  code: "function VoicePanelSecondaryPIPContentTsx1(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}",
};
const __initData2 = {
  code: 'function VoicePanelSecondaryPIPContentTsx2(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale_0=pipState.scale.get();const{width:width_0,height:height_0,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale_0,pipHeight:pipState.height*scale_0,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width_0,height:height_0,left:shouldHorizontallyCenter?"50%":"0%",top:shouldVerticallyCenter?"50%":"0%",marginLeft:marginLeft,marginTop:marginTop};}',
};
const __initData3 = {
  code: "function VoicePanelSecondaryPIPContentTsx3(){const{pipState,roundToNearestPixel}=this.__closure;const scale=pipState.scale.get();const width=pipState.width*scale;const height=pipState.height*scale;return{width:width,height:height,marginLeft:roundToNearestPixel(width/2)*-1,marginTop:roundToNearestPixel(height/2)*-1};}",
};
const __initData4 = {
  code: "function VoicePanelSecondaryPIPContentTsx4(){const{pipState,getActivityContainerPipStylesSpec,activePipOrientationLockState,windowDimensions}=this.__closure;const scale_0=pipState.scale.get();const{width:width_0,height:height_0,shouldVerticallyCenter:shouldVerticallyCenter,shouldHorizontallyCenter:shouldHorizontallyCenter,marginLeft:marginLeft,marginTop:marginTop}=getActivityContainerPipStylesSpec({pipWidth:pipState.width*scale_0,pipHeight:pipState.height*scale_0,pipOrientationLockState:activePipOrientationLockState,isLandscape:windowDimensions.get().landscape});return{width:width_0,height:height_0,left:shouldHorizontallyCenter?'50%':'0%',top:shouldVerticallyCenter?'50%':'0%',marginLeft:marginLeft,marginTop:marginTop};}",
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let connectedEmbeddedActivity;
      let connectedEmbeddedActivityChannelId;
      let framePanelMode;
      let framePipOrientationLockState;
      let mainFrame;
      let pIPState;
      let panelMode;
      let pipOrientationLockState;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp7;
      let tmp8;
      let windowDimensions;
      let tmp = windowDimensions;
      let tmp2 = connectedEmbeddedActivityChannelId;
      let obj = windowDimensions(connectedEmbeddedActivityChannelId[10]);
      const cResult = obj.c(23);
      windowDimensions = pipOrientationLockState.useContext(
        pIPState(connectedEmbeddedActivityChannelId[11]),
      ).windowDimensions;
      let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
      pIPState = obj2.usePIPState();
      const tmp6 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore];
        const fn = function w() {
          let obj3;
          let pipOrientationLockStateForApp;
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          const selfEmbeddedActivityForLocation =
            EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          let applicationId;
          if (selfEmbeddedActivityForLocation != null) {
            applicationId = selfEmbeddedActivityForLocation.applicationId;
          }
          const obj2 = {
            connectedEmbeddedActivityChannelId: obj3.getEmbeddedActivityLocationChannelId(connectedActivityLocation),
            connectedEmbeddedActivity: selfEmbeddedActivityForLocation,
            pipOrientationLockState: pipOrientationLockStateForApp,
            panelMode: EmbeddedActivitiesStore.getActivityPanelMode(),
          };
          pipOrientationLockStateForApp = undefined;
          obj3 = windowDimensions(connectedEmbeddedActivityChannelId[13]);
          if (null != applicationId) {
            pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(applicationId);
          }
          return obj2;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = tmp(tmp2[14]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
      connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
      pipOrientationLockState = stateFromStoresObject.pipOrientationLockState;
      ({ connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FramesStore];
        class T {
          constructor() {
            let activityPanelMode;
            const tmp = closure_1_9(mainFrame.getMainFrame());
            let id;
            if (tmp != null) {
              id = tmp.id;
            }
            const obj = {
              mainFrameId: id,
              framePanelMode: activityPanelMode,
              framePipOrientationLockState: closure_1_11(tmp),
            };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              activityPanelMode = constants.DISCONNECTED;
            }
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = T;
        tmp12 = T;
        tmp11 = items1;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult5 = tmp(tmp2[14]);
      const stateFromStoresObject1 = tmpResult5.useStateFromStoresObject(tmp11, tmp12);
      const mainFrameId = stateFromStoresObject1.mainFrameId;
      ({ framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ChannelStore];
        class T {
          constructor() {
            let activityPanelMode;
            const tmp = closure_1_9(mainFrame.getMainFrame());
            let id;
            if (tmp != null) {
              id = tmp.id;
            }
            const obj = {
              mainFrameId: id,
              framePanelMode: activityPanelMode,
              framePipOrientationLockState: closure_1_11(tmp),
            };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              activityPanelMode = constants.DISCONNECTED;
            }
            return obj;
          }
        }
        cResult[4] = items2;
        tmp15 = items2;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== connectedEmbeddedActivityChannelId) {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
        cResult[5] = connectedEmbeddedActivityChannelId;
        class T {
          constructor() {
            let activityPanelMode;
            const tmp = closure_1_9(mainFrame.getMainFrame());
            let id;
            if (tmp != null) {
              id = tmp.id;
            }
            const obj = {
              mainFrameId: id,
              framePanelMode: activityPanelMode,
              framePipOrientationLockState: closure_1_11(tmp),
            };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              activityPanelMode = constants.DISCONNECTED;
            }
            return obj;
          }
        }
        cResult[6] = E;
      } else {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
      }
      const tmpResult6 = tmp(tmp2[14]);
      const stateFromStores = tmpResult6.useStateFromStores(tmp15, E);
      const fn2 = function z() {
        const scale = pIPState.scale;
        const value = scale.get();
        const result = pIPState.width * value;
        const result1 = pIPState.height * value;
        size = {
          width: result,
          height: result1,
          marginLeft: -1 * roundToNearestPixelDefault(result / 2),
          marginTop: -1 * roundToNearestPixelDefault(result1 / 2),
        };
        return size;
      };
      const tmpResult7 = tmp(tmp2[15]);
      let obj3 = { pipState: pIPState, roundToNearestPixel: tmp4(tmp2[16]) };
      fn2.__closure = obj3;
      fn2.__workletHash = 12892763508939;
      fn2.__initData = __initData;
      const animatedStyle = tmpResult7.useAnimatedStyle(fn2);
      let tmp20 = null != connectedEmbeddedActivity && !tmp4(tmp2[17])(connectedEmbeddedActivityChannelId);
      if (tmp20) {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
        tmp20 = panelMode === ActivityPanelModes.PIP;
      }
      let tmp21 = null != mainFrameId;
      if (tmp21) {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
        tmp21 = framePanelMode === ActivityPanelModes.PIP;
      }
      if (tmp21) {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
      }
      const fn3 = function j() {
        let str;
        let str2;
        const scale = pIPState.scale;
        const value = scale.get();
        const obj = {
          pipWidth: pIPState.width * value,
          pipHeight: pIPState.height * value,
          pipOrientationLockState,
          isLandscape: windowDimensions.get().landscape,
        };
        const tmp2 = getActivityContainerPIPStylesSpecDefault;
        size = tmp2(obj);
        const size1 = {
          width: size.width,
          height: size.height,
          left: str2,
          top: str,
          marginLeft: null,
          marginTop: null,
        };
        str = "0%";
        str2 = "0%";
        const shouldVerticallyCenter = size.shouldVerticallyCenter;
        if (size.shouldHorizontallyCenter) {
          str2 = "50%";
        }
        if (shouldVerticallyCenter) {
          str = "50%";
        }
        ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
        return size1;
      };
      const tmpResult8 = tmp(tmp2[15]);
      fn3.__closure = {
        pipState: pIPState,
        getActivityContainerPipStylesSpec: pIPState(tmp2[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      };
      fn3.__workletHash = 10060457878293;
      fn3.__initData = __initData2;
      ({
        pipState: pIPState,
        getActivityContainerPipStylesSpec: pIPState(tmp2[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      });
      const animatedStyle1 = tmpResult8.useAnimatedStyle(fn3);
      if (tmp20) {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
        const items3 = [tmp6.wrapper];
        class T {
          constructor() {
            let activityPanelMode;
            const tmp = closure_1_9(mainFrame.getMainFrame());
            let id;
            if (tmp != null) {
              id = tmp.id;
            }
            const obj = {
              mainFrameId: id,
              framePanelMode: activityPanelMode,
              framePipOrientationLockState: closure_1_11(tmp),
            };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              activityPanelMode = constants.DISCONNECTED;
            }
            return obj;
          }
        }
        cResult[7] = tmp6.wrapper;
        cResult[8] = animatedStyle;
        cResult[9] = items3;
      } else {
        class E {
          constructor() {
            return ChannelStore.getChannel(connectedEmbeddedActivityChannelId);
          }
        }
      }
      return tmp23;
    }
  : () => {
      let connectedEmbeddedActivity;
      let connectedEmbeddedActivityChannelId;
      let framePanelMode;
      let framePipOrientationLockState;
      let items3;
      let items4;
      let mainFrame;
      let mainFrameId;
      let pIPState;
      let panelMode;
      let pipOrientationLockState;
      let tmp17Result2;
      let tmp = pIPState;
      let tmp2 = connectedEmbeddedActivityChannelId;
      const windowDimensions = pipOrientationLockState.useContext(
        pIPState(connectedEmbeddedActivityChannelId[11]),
      ).windowDimensions;
      let obj = windowDimensions(connectedEmbeddedActivityChannelId[12]);
      pIPState = obj.usePIPState();
      const tmp5 = closure_13();
      let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
      const items = [EmbeddedActivitiesStore];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        let obj3;
        let pipOrientationLockStateForApp;
        const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        const selfEmbeddedActivityForLocation =
          EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let applicationId;
        if (selfEmbeddedActivityForLocation != null) {
          applicationId = selfEmbeddedActivityForLocation.applicationId;
        }
        const obj2 = {
          connectedEmbeddedActivityChannelId: obj3.getEmbeddedActivityLocationChannelId(connectedActivityLocation),
          connectedEmbeddedActivity: selfEmbeddedActivityForLocation,
          pipOrientationLockState: pipOrientationLockStateForApp,
          panelMode: EmbeddedActivitiesStore.getActivityPanelMode(),
        };
        pipOrientationLockStateForApp = undefined;
        obj3 = windowDimensions(connectedEmbeddedActivityChannelId[13]);
        if (null != applicationId) {
          pipOrientationLockStateForApp = EmbeddedActivitiesStore.getPipOrientationLockStateForApp(applicationId);
        }
        return obj2;
      });
      connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
      ({ pipOrientationLockState, connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
      let obj3 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
      const items1 = [FramesStore];
      const stateFromStoresObject1 = obj3.useStateFromStoresObject(items1, () => {
        let activityPanelMode;
        const tmp = closure_1_9(mainFrame.getMainFrame());
        let id;
        if (tmp != null) {
          id = tmp.id;
        }
        const obj = {
          mainFrameId: id,
          framePanelMode: activityPanelMode,
          framePipOrientationLockState: closure_1_11(tmp),
        };
        activityPanelMode = undefined;
        if (tmp != null) {
          activityPanelMode = tmp.data.activityPanelMode;
        }
        if (activityPanelMode == null) {
          activityPanelMode = constants.DISCONNECTED;
        }
        return obj;
      });
      ({ mainFrameId, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
      const items2 = [ChannelStore];
      const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
      const stateFromStores = obj4.useStateFromStores(items2, () =>
        ChannelStore.getChannel(connectedEmbeddedActivityChannelId),
      );
      const fn = function s() {
        const scale = pIPState.scale;
        const value = scale.get();
        const result = pIPState.width * value;
        const result1 = pIPState.height * value;
        size = {
          width: result,
          height: result1,
          marginLeft: -1 * roundToNearestPixelDefault(result / 2),
          marginTop: -1 * roundToNearestPixelDefault(result1 / 2),
        };
        return size;
      };
      const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
      fn.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
      fn.__workletHash = 14750544060809;
      fn.__initData = __initData3;
      let tmp10 = null != connectedEmbeddedActivity;
      ({ pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) });
      const animatedStyle = obj5.useAnimatedStyle(fn);
      if (tmp10) {
        tmp10 = !tmp(tmp2[17])(connectedEmbeddedActivityChannelId);
      }
      if (tmp10) {
        tmp10 = panelMode === ActivityPanelModes.PIP;
      }
      if (null != mainFrameId && framePanelMode === ActivityPanelModes.PIP) {
        pipOrientationLockState = framePipOrientationLockState;
      }
      windowDimensions(tmp2[15]);
      const fn2 = function v() {
        let str;
        let str2;
        const scale = pIPState.scale;
        const value = scale.get();
        const obj = {
          pipWidth: pIPState.width * value,
          pipHeight: pIPState.height * value,
          pipOrientationLockState,
          isLandscape: windowDimensions.get().landscape,
        };
        const tmp2 = getActivityContainerPIPStylesSpecDefault;
        size = tmp2(obj);
        const size1 = {
          width: size.width,
          height: size.height,
          left: str2,
          top: str,
          marginLeft: null,
          marginTop: null,
        };
        str = "0%";
        str2 = "0%";
        const shouldVerticallyCenter = size.shouldVerticallyCenter;
        if (size.shouldHorizontallyCenter) {
          str2 = "50%";
        }
        if (shouldVerticallyCenter) {
          str = "50%";
        }
        ({ marginLeft: obj2.marginLeft, marginTop: obj2.marginTop } = size);
        return size1;
      };
      fn2.__closure = {
        pipState: pIPState,
        getActivityContainerPipStylesSpec: tmp(tmp2[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      };
      fn2.__workletHash = 3704190236691;
      fn2.__initData = __initData4;
      ({
        pipState: pIPState,
        getActivityContainerPipStylesSpec: tmp(tmp2[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      });
      if (tmp10) {
        const obj8 = { style: items3, pointerEvents: "none", children: null };
        items3 = [tmp5.wrapper, animatedStyle];
        const obj9 = { style: items4, children: null };
        items4 = [tmp5.activityContainer, tmp15];
        tmp(tmp2[22]);
        if (null != mainFrameId && framePanelMode === ActivityPanelModes.PIP) {
          let tmp17Result;
          if (null != mainFrameId) {
            tmp(tmp2[19]);
            const obj11 = { layoutMode: constants.PIP };
            tmp17Result = (
              <tmpResult2
                frameId={mainFrameId}
                level={windowDimensions(tmp2[20]).FrameStackLevel.AboveAppContent}
                presentation={obj11}
              />
            );
          }
          obj9.children = tmp17Result;
          obj8.children = <tmp19 {...obj9} />;
          tmp17Result2 = <tmpResult {...obj8} />;
        }
        tmp17Result = jsx(tmp(tmp2[21]), { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP });
      } else {
        tmp17Result2 = null;
      }
      return tmp17Result2;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default tmp3;
