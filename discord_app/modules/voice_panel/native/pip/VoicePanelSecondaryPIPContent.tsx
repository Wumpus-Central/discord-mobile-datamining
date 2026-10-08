// discord_app/modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import getActivityContainerPIPStylesSpecDefault from "../../../activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const ActivityLayoutMode = fn(2023).ActivityLayoutMode;
const ActivityPanelModes = fn(6072).ActivityPanelModes;
const FramesConstants = fn(10613);
({ asLaunched: closure_9, FrameLayoutModes: c10, getPipOrientationLockStateForFrame: closure_11 } = FramesConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
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
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelSecondaryPIPContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoicePanelSecondaryPIPContent() {
      let PIP = windowDimensions;
      const cResult = windowDimensions(connectedEmbeddedActivityChannelId[10]).c(23);
      windowDimensions = pipOrientationLockState.useContext(
        pIPState(connectedEmbeddedActivityChannelId[11]),
      ).windowDimensions;
      let obj = windowDimensions(connectedEmbeddedActivityChannelId[10]);
      pIPState = windowDimensions(connectedEmbeddedActivityChannelId[12]).usePIPState();
      const tmp5 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore];
        const fn = function w() {
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          const selfEmbeddedActivityForLocation =
            EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          let applicationId;
          if (selfEmbeddedActivityForLocation != null) {
            applicationId = selfEmbeddedActivityForLocation.applicationId;
          }
          const obj2 = {
            connectedEmbeddedActivityChannelId: windowDimensions(
              connectedEmbeddedActivityChannelId[13],
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
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
      const stateFromStoresObject = PIP(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(tmp6, tmp7);
      connectedEmbeddedActivityChannelId = stateFromStoresObject.connectedEmbeddedActivityChannelId;
      pipOrientationLockState = stateFromStoresObject.pipOrientationLockState;
      ({ connectedEmbeddedActivity, panelMode } = stateFromStoresObject);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FramesStore];
        class T {
          constructor() {
            tmp = closure_1_9(closure_1_5.getMainFrame());
            id = undefined;
            if (tmp != null) {
              id = tmp.id;
            }
            obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              tmp4 = closure_1_8;
              activityPanelMode = closure_1_8.DISCONNECTED;
            }
            obj.framePanelMode = activityPanelMode;
            obj.framePipOrientationLockState = closure_1_11(tmp);
            return obj;
          }
        }
        cResult[2] = items1;
        cResult[3] = T;
        let tmp11 = T;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const PIPResult = PIP(connectedEmbeddedActivityChannelId[14]);
      const stateFromStoresObject1 = PIP(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(tmp10, tmp11);
      const mainFrameId = stateFromStoresObject1.mainFrameId;
      ({ framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ChannelStore];
        class T {
          constructor() {
            tmp = closure_1_9(closure_1_5.getMainFrame());
            id = undefined;
            if (tmp != null) {
              id = tmp.id;
            }
            obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              tmp4 = closure_1_8;
              activityPanelMode = closure_1_8.DISCONNECTED;
            }
            obj.framePanelMode = activityPanelMode;
            obj.framePipOrientationLockState = closure_1_11(tmp);
            return obj;
          }
        }
        cResult[4] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== connectedEmbeddedActivityChannelId) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
        cResult[5] = connectedEmbeddedActivityChannelId;
        class T {
          constructor() {
            tmp = closure_1_9(closure_1_5.getMainFrame());
            id = undefined;
            if (tmp != null) {
              id = tmp.id;
            }
            obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              tmp4 = closure_1_8;
              activityPanelMode = closure_1_8.DISCONNECTED;
            }
            obj.framePanelMode = activityPanelMode;
            obj.framePipOrientationLockState = closure_1_11(tmp);
            return obj;
          }
        }
        cResult[6] = E;
      } else {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
      }
      const PIPResult1 = PIP(connectedEmbeddedActivityChannelId[14]);
      const stateFromStores = PIP(connectedEmbeddedActivityChannelId[14]).useStateFromStores(tmp14, E);
      const PIPResult2 = PIP(connectedEmbeddedActivityChannelId[14]);
      const fn2 = function z() {
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
      const PIPResult3 = PIP(connectedEmbeddedActivityChannelId[15]);
      fn2.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
      fn2.__workletHash = 12892763508939;
      fn2.__initData = __initData;
      const animatedStyle = PIPResult3.useAnimatedStyle(fn2);
      let tmp19 = null != connectedEmbeddedActivity && !tmp3(tmp[17])(connectedEmbeddedActivityChannelId);
      if (tmp19) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
        tmp19 = panelMode === ActivityPanelModes.PIP;
      }
      let tmp20 = null != mainFrameId;
      if (tmp20) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
        tmp20 = framePanelMode === ActivityPanelModes.PIP;
      }
      if (tmp20) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
      }
      const obj3 = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
      const fn3 = function j() {
        const scale = pIPState.scale;
        value = scale.get();
        const obj = {
          pipWidth: pIPState.width * value,
          pipHeight: pIPState.height * value,
          pipOrientationLockState,
          isLandscape: windowDimensions.get().landscape,
        };
        const size = getActivityContainerPIPStylesSpecDefault(obj);
        const size1 = {
          width: size.width,
          height: size.height,
          left: null,
          top: null,
          marginLeft: null,
          marginTop: null,
        };
        let str = "0%";
        let str2 = "0%";
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
      };
      const PIPResult4 = PIP(connectedEmbeddedActivityChannelId[15]);
      fn3.__closure = {
        pipState: pIPState,
        getActivityContainerPipStylesSpec: pIPState(connectedEmbeddedActivityChannelId[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      };
      fn3.__workletHash = 10060457878293;
      fn3.__initData = __initData2;
      const animatedStyle1 = PIPResult4.useAnimatedStyle(fn3);
      if (!tmp19) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
        if (!tmp20) {
          class E {
            constructor() {
              return closure_6.getChannel(closure_2);
            }
          }
        }
      }
      if (cResult[7] === tmp5.wrapper) {
        class E {
          constructor() {
            return closure_6.getChannel(closure_2);
          }
        }
        if (cResult[10] === animatedStyle1) {
          class E {
            constructor() {
              return closure_6.getChannel(closure_2);
            }
          }
          if (cResult[13] === stateFromStores) {
            class E {
              constructor() {
                return closure_6.getChannel(closure_2);
              }
            }
          }
          if (!tmp20) {
            class E {
              constructor() {
                return closure_6.getChannel(closure_2);
              }
            }
            const obj5 = { channel: stateFromStores, layoutMode: null };
            class T {
              constructor() {
                tmp = closure_1_9(closure_1_5.getMainFrame());
                id = undefined;
                if (tmp != null) {
                  id = tmp.id;
                }
                obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
                activityPanelMode = undefined;
                if (tmp != null) {
                  activityPanelMode = tmp.data.activityPanelMode;
                }
                if (activityPanelMode == null) {
                  tmp4 = closure_1_8;
                  activityPanelMode = closure_1_8.DISCONNECTED;
                }
                obj.framePanelMode = activityPanelMode;
                obj.framePipOrientationLockState = closure_1_11(tmp);
                return obj;
              }
            }
            obj5.layoutMode = ActivityLayoutMode.PIP;
            let tmp23 = jsx(tmp3(tmp[21]), { channel: stateFromStores, layoutMode: null });
            cResult[13] = stateFromStores;
            cResult[14] = tmp20;
            cResult[15] = mainFrameId;
            cResult[16] = tmp23;
          } else {
            class E {
              constructor() {
                return closure_6.getChannel(closure_2);
              }
            }
          }
          class T {
            constructor() {
              tmp = closure_1_9(closure_1_5.getMainFrame());
              id = undefined;
              if (tmp != null) {
                id = tmp.id;
              }
              obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
              activityPanelMode = undefined;
              if (tmp != null) {
                activityPanelMode = tmp.data.activityPanelMode;
              }
              if (activityPanelMode == null) {
                tmp4 = closure_1_8;
                activityPanelMode = closure_1_8.DISCONNECTED;
              }
              obj.framePanelMode = activityPanelMode;
              obj.framePipOrientationLockState = closure_1_11(tmp);
              return obj;
            }
          }
          const obj6 = {
            frameId: mainFrameId,
            level: PIP(tmp[20]).FrameStackLevel.AboveAppContent,
            presentation: null,
          };
          const obj7 = { layoutMode: null };
          PIP = constants.PIP;
          obj7.layoutMode = PIP;
          obj6.presentation = obj7;
          tmp23 = jsx(tmp3(tmp[19]), {
            frameId: mainFrameId,
            level: PIP(tmp[20]).FrameStackLevel.AboveAppContent,
            presentation: null,
          });
          const tmp3Result = tmp3(tmp[19]);
        }
        const items3 = [,];
        class T {
          constructor() {
            tmp = closure_1_9(closure_1_5.getMainFrame());
            id = undefined;
            if (tmp != null) {
              id = tmp.id;
            }
            obj = { mainFrameId: id, framePanelMode: null, framePipOrientationLockState: null };
            activityPanelMode = undefined;
            if (tmp != null) {
              activityPanelMode = tmp.data.activityPanelMode;
            }
            if (activityPanelMode == null) {
              tmp4 = closure_1_8;
              activityPanelMode = closure_1_8.DISCONNECTED;
            }
            obj.framePanelMode = activityPanelMode;
            obj.framePipOrientationLockState = closure_1_11(tmp);
            return obj;
          }
        }
        items3[1] = animatedStyle1;
        cResult[10] = animatedStyle1;
        cResult[11] = tmp5.activityContainer;
        cResult[12] = items3;
      }
      const items4 = [tmp5.wrapper, animatedStyle];
      cResult[7] = tmp5.wrapper;
      cResult[8] = animatedStyle;
      cResult[9] = items4;
      const obj4 = {
        pipState: pIPState,
        getActivityContainerPipStylesSpec: pIPState(connectedEmbeddedActivityChannelId[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      };
    }
  : function VoicePanelSecondaryPIPContent() {
      let tmp = pIPState;
      let obj = connectedEmbeddedActivityChannelId;
      const windowDimensions = pipOrientationLockState.useContext(
        pIPState(connectedEmbeddedActivityChannelId[11]),
      ).windowDimensions;
      pIPState = windowDimensions(connectedEmbeddedActivityChannelId[12]).usePIPState();
      const tmp4 = closure_13();
      let obj2 = windowDimensions(connectedEmbeddedActivityChannelId[12]);
      const items = [EmbeddedActivitiesStore];
      const stateFromStoresObject = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(
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
              connectedEmbeddedActivityChannelId[13],
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
      const obj3 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
      const items1 = [FramesStore];
      const stateFromStoresObject1 = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStoresObject(
        items1,
        () => {
          const tmp = closure_1_9(mainFrame.getMainFrame());
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
          obj.framePipOrientationLockState = closure_1_11(tmp);
          return obj;
        },
      );
      ({ mainFrameId, framePanelMode, framePipOrientationLockState } = stateFromStoresObject1);
      const obj4 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
      const items2 = [ChannelStore];
      const stateFromStores = windowDimensions(connectedEmbeddedActivityChannelId[14]).useStateFromStores(items2, () =>
        ChannelStore.getChannel(connectedEmbeddedActivityChannelId),
      );
      const obj5 = windowDimensions(connectedEmbeddedActivityChannelId[14]);
      const fn = function s() {
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
      const obj6 = windowDimensions(connectedEmbeddedActivityChannelId[15]);
      fn.__closure = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
      fn.__workletHash = 14750544060809;
      fn.__initData = __initData3;
      let tmp9 = null != connectedEmbeddedActivity;
      const animatedStyle = obj6.useAnimatedStyle(fn);
      if (tmp9) {
        tmp9 = !tmp(obj[17])(connectedEmbeddedActivityChannelId);
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
      const obj7 = { pipState: pIPState, roundToNearestPixel: pIPState(connectedEmbeddedActivityChannelId[16]) };
      const fn2 = function v() {
        const scale = pIPState.scale;
        value = scale.get();
        const obj = {
          pipWidth: pIPState.width * value,
          pipHeight: pIPState.height * value,
          pipOrientationLockState,
          isLandscape: windowDimensions.get().landscape,
        };
        const size = getActivityContainerPIPStylesSpecDefault(obj);
        const size1 = {
          width: size.width,
          height: size.height,
          left: null,
          top: null,
          marginLeft: null,
          marginTop: null,
        };
        let str = "0%";
        let str2 = "0%";
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
      };
      const tmp2Result = windowDimensions(obj[15]);
      fn2.__closure = {
        pipState: pIPState,
        getActivityContainerPipStylesSpec: tmp(obj[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      };
      fn2.__workletHash = 3704190236691;
      fn2.__initData = __initData4;
      const animatedStyle1 = tmp2Result.useAnimatedStyle(fn2);
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
        getActivityContainerPipStylesSpec: tmp(obj[18]),
        activePipOrientationLockState: pipOrientationLockState,
        windowDimensions,
      };
      let obj10 = { style: null, children: null };
      const items4 = [tmp4.activityContainer, animatedStyle1];
      obj10.style = items4;
      if (!tmp11) {
        const obj11 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
        let tmp15Result = jsx(tmp(obj[21]), { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP });
        obj10.children = tmp15Result;
        obj10 = <tmp17 {...obj10} />;
        obj9.children = obj10;
        <tmpResult {...obj9} />;
      }
      tmp = tmp(obj[19]);
      const obj12 = {
        frameId: mainFrameId,
        level: windowDimensions(obj[20]).FrameStackLevel.AboveAppContent,
        presentation: null,
      };
      obj = { layoutMode: constants.PIP };
      obj12.presentation = obj;
      tmp15Result = (
        <tmp
          frameId={mainFrameId}
          level={windowDimensions(obj[20]).FrameStackLevel.AboveAppContent}
          presentation={null}
        />
      );
      const tmpResult = tmp(obj[22]);
    };
