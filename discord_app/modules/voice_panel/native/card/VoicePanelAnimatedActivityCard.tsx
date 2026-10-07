// === Module 17311: VoicePanelAnimatedActivityCard ===

// Module 17311 (VoicePanelAnimatedActivityCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9101 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const VoicePanelConstants = fn(11916);
({ IS_IOS: closure_8, VoicePanelModes: closure_9 } = VoicePanelConstants);
let VoicePanelControlsModes = fn(11914).VoicePanelControlsModes;
const ThemeTypes = fn(1085).ThemeTypes;
const Constants = fn(2011);
({ ACTIVITY_LOCKED_ASPECT_RATIO: closure_12, ActivityLayoutMode: map1, OrientationLockState: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4896);
let obj = { activityContainerBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_17 = createStyles.createStyles(obj);
let __initData = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let closure_19 = { code: "function VoicePanelAnimatedActivityCardTsx2(t13,prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;const{visible:visible,mode:mode_0}=t13;if(visible===1&&prev!=null&&prev.visible===0||mode_0!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let __initData2 = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
const __initData3 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused_0,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused_0!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused_0);}}" };
let closure_22 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let closure_24 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,OrientationLockState,ACTIVITY_LOCKED_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}else{if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:\"auto\",height:isActivityFocused?screenHeight-keyboardHeight:\"auto\",maxHeight:\"100%\",maxWidth:\"100%\"};}" };
let closure_25 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
const __initData4 = { code: "function VoicePanelAnimatedActivityCardTsx9(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
const __initData5 = { code: "function VoicePanelAnimatedActivityCardTsx10({visible:visible,mode:mode_0},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode_0!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
const __initData6 = { code: "function VoicePanelAnimatedActivityCardTsx11(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
const __initData7 = { code: "function VoicePanelAnimatedActivityCardTsx12(isActivityFocused_0,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused_0!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused_0);}}" };
const __initData8 = { code: "function VoicePanelAnimatedActivityCardTsx13(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData9 = { code: "function VoicePanelAnimatedActivityCardTsx14(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
const __initData10 = { code: "function VoicePanelAnimatedActivityCardTsx15(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,OrientationLockState,ACTIVITY_LOCKED_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_LOCKED_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_33 = { code: "function VoicePanelAnimatedActivityCardTsx16(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
let ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(576).c(78);
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  closure_17();
  let obj = applicationId(576);
  [r10021, dependencyMap] = channelId(focused.useState(0), 2);
  const context = focused.useContext(sharedVisible(11915));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp6 = channelId(focused.useState(0), 2);
  closure_10 = sharedVisible(16621)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [windowDimensions];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  const tmp9 = sharedVisible(16621)();
  const stateFromStores = applicationId(504).useStateFromStores(first, tmp12);
  if (cResult[3] !== stateFromStores) {
    const obj3 = { channel: stateFromStores, type: "channel" };
    cResult[3] = stateFromStores;
    cResult[4] = obj3;
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmpResult = applicationId(504);
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = applicationId(17312).useActivityShelfItemData(guild_id1, applicationId);
  if (cResult[5] !== guild_id) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    const items1 = [guild_id];
    cResult[5] = guild_id;
    cResult[6] = Q;
    cResult[7] = items1;
    let tmp19 = items1;
  } else {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    tmp19 = cResult[7];
  }
  const effect = obj2.useEffect(Q, tmp19);
  if (cResult[8] !== applicationId) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    tmp22[0] = applicationId;
    cResult[8] = applicationId;
    cResult[9] = tmp22;
  } else {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
  }
  const first1 = tmp5(tmp7(6670)(tmp22), 1)[0];
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    const items2 = [layoutManager];
    cResult[10] = items2;
    const tmp24 = items2;
  } else {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
  }
  if (cResult[11] !== applicationId) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    const items3 = [applicationId];
    cResult[11] = applicationId;
    cResult[12] = tmp27;
    cResult[13] = items3;
    let tmp26 = items3;
  } else {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    tmp26 = cResult[13];
  }
  const tmpResult7 = applicationId(17312);
  const stateFromStoresObject = applicationId(504).useStateFromStoresObject(tmp24, tmp27, tmp26);
  const gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  closure_14 = stateFromStoresObject.focusedOrientationLockState;
  const tmp29 = sharedVisible(9166)();
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    const items4 = [layoutManager];
    cResult[14] = items4;
    const tmp30 = items4;
  } else {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
  }
  if (first1 != null) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
  }
  if (cResult[15] === undefined) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp30, de);
    const tmpResult9 = tmp(504);
    const analyticsLocations = tmp7(6664)(tmp7(6688).ACTIVITY_TILE).analyticsLocations;
    const tmp7Result = tmp7(6664);
    const analyticsContext = tmp(9137).useAnalyticsContext();
    if (stateFromStores1 != null) {
      class Q {
        constructor() {
          obj = closure_0(closure_2[18]);
          obj1 = { guildId: guild_id };
          shelf = obj.fetchShelf(obj1);
          return;
        }
      }
    }
    if (cResult[18] === undefined) {
      class Q {
        constructor() {
          obj = closure_0(closure_2[18]);
          obj1 = { guildId: guild_id };
          shelf = obj.fetchShelf(obj1);
          return;
        }
      }
      if (first1 != null) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[18]);
            obj1 = { guildId: guild_id };
            shelf = obj.fetchShelf(obj1);
            return;
          }
        }
      }
      if (cResult[19] === tmp35) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[18]);
            obj1 = { guildId: guild_id };
            shelf = obj.fetchShelf(obj1);
            return;
          }
        }
        closure_15 = tmp36;
        function incrementActivityKey() {
          if (closure_15) {
            dependencyMap((arg0) => arg0 + 1);
          }
        }
        function pe() {
          return { visible: sharedVisible.get(), mode: mode.get() };
        }
        const obj4 = { sharedVisible, mode };
        pe.__closure = obj4;
        pe.__workletHash = 2072430391020;
        pe.__initData = __initData;
        class Se {
          constructor(arg0, arg1) {
            tmp = 1 === applicationId.visible;
            if (tmp) {
              tmp2 = null;
              tmp = null != arg1;
            }
            if (tmp) {
              num = 0;
              tmp = 0 === arg1.visible;
            }
            if (!tmp) {
              tmp4 = applicationId.mode !== VoicePanelModes.PIP;
              if (tmp4) {
                tmp5 = null;
                mode = undefined;
                if (arg1 != null) {
                  mode = arg1.mode;
                }
                tmp4 = mode === tmp3.PIP;
              }
              tmp = tmp4;
            }
            if (tmp) {
              tmp7 = closure_0;
              tmp8 = closure_2;
              obj = closure_0(closure_2[25]);
              tmp9 = incrementActivityKey;
              tmp10 = obj.runOnJS(incrementActivityKey)();
            }
            return;
          }
        }
        const obj5 = { VoicePanelModes: controlsSpecs, runOnJS: tmp(4618).runOnJS, incrementActivityKey };
        Se.__closure = obj5;
        Se.__workletHash = 11483202623318;
        Se.__initData = embeddedActivityParticipantId;
        const animatedReaction = tmp(4618).useAnimatedReaction(pe, Se);
        const tmp5Result = tmp5(obj2.useState(false), 2);
        closure_17 = tmp5Result[0];
        __initData = tmp48;
        embeddedActivityParticipantId = null;
        if (null != stateFromStores1) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[18]);
              obj1 = { guildId: guild_id };
              shelf = obj.fetchShelf(obj1);
              return;
            }
          }
          ({ applicationId: obj13.applicationId, compositeInstanceId: obj13.instanceId } = stateFromStores1);
          embeddedActivityParticipantId = obj12.getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null });
          const obj6 = { applicationId: null, instanceId: null };
        }
        const tmp44 = controlsSpecs;
        const tmpResult11 = tmp(4618);
        function fe() {
          let tmp2 = null != embeddedActivityParticipantId;
          if (tmp2) {
            value = focused.get();
            let id;
            if (value != null) {
              id = value.id;
            }
            tmp2 = id === tmp;
          }
          if (tmp2) {
            tmp2 = mode.get() === constants.PANEL;
          }
          return tmp2;
        }
        const obj7 = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: tmp44 };
        fe.__closure = obj7;
        fe.__workletHash = 2833167890519;
        fe.__initData = __initData2;
        class Oe {
          constructor(arg0, arg1) {
            if (applicationId !== arg1) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[25]);
              tmp3 = closure_18;
              tmp4 = obj.runOnJS(closure_18)(applicationId);
            }
            return;
          }
        }
        const obj8 = { runOnJS: tmp(4618).runOnJS, setIsActivityFocused: tmp5Result[1] };
        Oe.__closure = obj8;
        Oe.__workletHash = 5565798622964;
        Oe.__initData = __initData3;
        const animatedReaction1 = tmp(4618).useAnimatedReaction(fe, Oe);
        const _Symbol = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[18]);
              obj1 = { guildId: guild_id };
              shelf = obj.fetchShelf(obj1);
              return;
            }
          }
          const TapResult = obj17.Tap();
          cResult[22] = TapResult;
        } else {
          class Q {
            constructor() {
              obj = closure_0(closure_2[18]);
              obj1 = { guildId: guild_id };
              shelf = obj.fetchShelf(obj1);
              return;
            }
          }
        }
        if (cResult[23] === applicationId) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[18]);
              obj1 = { guildId: guild_id };
              shelf = obj.fetchShelf(obj1);
              return;
            }
          }
          __initData2 = tmp55;
          if (cResult[26] === gridOrientationLockState) {
            class Q {
              constructor() {
                obj = closure_0(closure_2[18]);
                obj1 = { guildId: guild_id };
                shelf = obj.fetchShelf(obj1);
                return;
              }
            }
          }
          function ke() {
            const size = useWindowDimensions.getWindowDimensions();
            tmp55(size.width > size.height, gridOrientationLockState, closure_15);
          }
          cResult[26] = gridOrientationLockState;
          cResult[27] = tmp55;
          cResult[28] = tmp36;
          cResult[29] = ke;
        }
        function we(arg0, arg1, arg2) {
          if (arg2) {
            if (constants2.LANDSCAPE === arg1) {
              layoutManager.setTargetAspectRatio(applicationId, "landscape");
            } else if (constants2.PORTRAIT === arg1) {
              layoutManager.setTargetAspectRatio(applicationId, "portrait");
            } else if (constants2.UNLOCKED === arg1) {
              let str2 = "portrait";
              if (arg0) {
                str2 = "landscape";
              }
              layoutManager.setTargetAspectRatio(applicationId, str2);
            }
          } else {
            layoutManager.setTargetAspectRatio(applicationId, "square");
          }
        }
        cResult[23] = applicationId;
        cResult[24] = layoutManager;
        cResult[25] = we;
        const tmpResult12 = tmp(4618);
      }
    }
    let tmp37 = null != tmp29;
    if (tmp37) {
      class Q {
        constructor() {
          obj = closure_0(closure_2[18]);
          obj1 = { guildId: guild_id };
          shelf = obj.fetchShelf(obj1);
          return;
        }
      }
      if (first1 != null) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[18]);
            obj1 = { guildId: guild_id };
            shelf = obj.fetchShelf(obj1);
            return;
          }
        }
      }
      tmp37 = tmp29.id === tmp38;
    }
    if (!tmp37) {
      class Q {
        constructor() {
          obj = closure_0(closure_2[18]);
          obj1 = { guildId: guild_id };
          shelf = obj.fetchShelf(obj1);
          return;
        }
      }
      if (stateFromStores1 != null) {
        class Q {
          constructor() {
            obj = closure_0(closure_2[18]);
            obj1 = { guildId: guild_id };
            shelf = obj.fetchShelf(obj1);
            return;
          }
        }
        if (tmp40 != null) {
          class Q {
            constructor() {
              obj = closure_0(closure_2[18]);
              obj1 = { guildId: guild_id };
              shelf = obj.fetchShelf(obj1);
              return;
            }
          }
        }
      }
      tmp37 = null != tmp39;
    }
    if (stateFromStores1 != null) {
      class Q {
        constructor() {
          obj = closure_0(closure_2[18]);
          obj1 = { guildId: guild_id };
          shelf = obj.fetchShelf(obj1);
          return;
        }
      }
    }
    cResult[18] = tmp41;
    if (first1 != null) {
      class Q {
        constructor() {
          obj = closure_0(closure_2[18]);
          obj1 = { guildId: guild_id };
          shelf = obj.fetchShelf(obj1);
          return;
        }
      }
    }
    cResult[19] = undefined;
    cResult[20] = tmp29;
    cResult[21] = tmp37;
    const tmpResult10 = tmp(9137);
  }
  if (first1 != null) {
    class Q {
      constructor() {
        obj = closure_0(closure_2[18]);
        obj1 = { guildId: guild_id };
        shelf = obj.fetchShelf(obj1);
        return;
      }
    }
  }
  de = function de() {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  };
  cResult[15] = undefined;
  cResult[16] = channelId;
  cResult[17] = de;
  const tmpResult8 = applicationId(504);
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  let channelId;
  let focused;
  let application;
  let gridOrientationLockState;
  let focusedOrientationLockState;
  closure_16 = undefined;
  let incrementActivityKey;
  let first1;
  closure_19 = undefined;
  let embeddedActivityParticipantId;
  let callback1;
  closure_22 = undefined;
  let callback2;
  closure_24 = undefined;
  let backgroundColor;
  let tmp3 = channelId(focused.useState(0), 2);
  dependencyMap = tmp3[1];
  const context = focused.useContext(sharedVisible(11915));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp7 = sharedVisible(16621)();
  VoicePanelControlsModes = tmp7;
  let tmp = incrementActivityKey();
  const items = [windowDimensions];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores];
  let guild_id;
  const memo = focused.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let obj2 = applicationId(504);
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = applicationId(17312).useActivityShelfItemData(guild_id1, applicationId);
  const items2 = [guild_id];
  const effect = obj.useEffect(() => {
    const shelf = EmbeddedActivitiesActionCreators.fetchShelf({ guildId: guild_id });
  }, items2);
  const items3 = [applicationId];
  application = tmp2(tmp4(6670)(items3), 1)[0];
  const tmp8Result = applicationId(17312);
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const stateFromStoresObject = applicationId(504).useStateFromStoresObject(items4, () => ({ gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId) }), items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp17 = sharedVisible(9166)();
  const tmp8Result10 = applicationId(504);
  const items6 = [layoutManager];
  const stateFromStores1 = applicationId(504).useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  const tmp8Result11 = applicationId(504);
  const tmp4Result = sharedVisible(6664);
  let tmp21 = null != tmp17;
  const analyticsContext = applicationId(9137).useAnalyticsContext();
  if (tmp21) {
    let id;
    if (application != null) {
      id = application.id;
    }
    tmp21 = tmp17.id === id;
  }
  if (!tmp21) {
    let found;
    if (stateFromStores1 != null) {
      const participants = stateFromStores1.participants;
      if (participants != null) {
        found = participants.find((item) => applicationId(13820).isActivityParticipantCurrentUserCurrentSession(item));
      }
    }
    tmp21 = null != found;
  }
  closure_16 = tmp21;
  const items7 = [tmp21];
  incrementActivityKey = obj.useCallback(() => {
    if (closure_16) {
      dependencyMap((arg0) => arg0 + 1);
    }
  }, items7);
  const tmp8Result12 = applicationId(9137);
  let fn = function q() {
    return { visible: sharedVisible.get(), mode: mode.get() };
  };
  fn.__closure = { sharedVisible, mode };
  fn.__workletHash = 7783274449636;
  fn.__initData = __initData4;
  const fn2 = function j(visible, visible2) {
    let tmp = 1 === visible.visible;
    if (tmp) {
      tmp = null != visible2;
    }
    if (tmp) {
      tmp = 0 === visible2.visible;
    }
    if (!tmp) {
      let tmp4 = visible.mode !== constants.PIP;
      if (tmp4) {
        mode = undefined;
        if (visible2 != null) {
          mode = visible2.mode;
        }
        tmp4 = mode === tmp3.PIP;
      }
      tmp = tmp4;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(callback)();
    }
  };
  const tmp8Result13 = applicationId(4618);
  fn2.__closure = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(4618).runOnJS, incrementActivityKey };
  fn2.__workletHash = 16160706746790;
  fn2.__initData = __initData5;
  const animatedReaction = tmp8Result13.useAnimatedReaction(fn, fn2);
  const tmp2Result = channelId(focused.useState(false), 2);
  first1 = tmp2Result[0];
  closure_19 = tmp29;
  embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    ({ applicationId: obj10.applicationId, compositeInstanceId: obj10.instanceId } = stateFromStores1);
    embeddedActivityParticipantId = tmp8(9049).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null });
    const obj4 = { applicationId: null, instanceId: null };
    const tmp8Result14 = tmp8(9049);
  }
  const obj3 = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(4618).runOnJS, incrementActivityKey };
  const tmp25 = controlsSpecs;
  function de() {
    let tmp2 = null != embeddedActivityParticipantId;
    if (tmp2) {
      value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp2 = id === tmp;
    }
    if (tmp2) {
      tmp2 = mode.get() === constants.PANEL;
    }
    return tmp2;
  }
  de.__closure = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: tmp25 };
  de.__workletHash = 6022892002020;
  de.__initData = __initData6;
  function re(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_19)(arg0);
    }
  }
  const tmp8Result15 = applicationId(4618);
  re.__closure = { runOnJS: applicationId(4618).runOnJS, setIsActivityFocused: tmp2Result[1] };
  re.__workletHash = 1820052119779;
  re.__initData = __initData7;
  const animatedReaction1 = tmp8Result15.useAnimatedReaction(de, re);
  const items8 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(6147).Gesture;
    return Gesture.Tap();
  }, []);
  callback1 = obj.useCallback((arg0, arg1, arg2) => {
    if (arg2) {
      if (constants2.LANDSCAPE === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "landscape");
      } else if (constants2.PORTRAIT === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "portrait");
      } else if (constants2.UNLOCKED === arg1) {
        let str2 = "portrait";
        if (arg0) {
          str2 = "landscape";
        }
        layoutManager.setTargetAspectRatio(applicationId, str2);
      }
    } else {
      layoutManager.setTargetAspectRatio(applicationId, "square");
    }
  }, items8);
  const items9 = [callback1, windowDimensions, gridOrientationLockState, tmp21];
  const layoutEffect = obj.useLayoutEffect(() => {
    const size = useWindowDimensions.getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, closure_16);
  }, items9);
  const tmp2Result2 = channelId(focused.useState(layoutManager.getDefaultTargetDimensions()), 2);
  closure_22 = tmp36;
  const items10 = [layoutManager, tmp2Result2[1]];
  callback2 = obj.useCallback(() => {
    closure_22(layoutManager.getDefaultTargetDimensions());
  }, items10);
  const obj5 = { runOnJS: applicationId(4618).runOnJS, setIsActivityFocused: tmp2Result[1] };
  class Se {
    constructor() {
      return windowDimensions.get();
    }
  }
  Se.__closure = { windowDimensions };
  Se.__workletHash = 9333029890765;
  Se.__initData = __initData8;
  class Ae {
    constructor(arg0, arg1) {
      landscape = undefined;
      if (arg1 != null) {
        landscape = arg1.landscape;
      }
      if (applicationId.landscape !== landscape) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[25]);
        tmp4 = closure_21;
        tmp5 = gridOrientationLockState;
        tmp6 = closure_16;
        tmp7 = obj.runOnJS(closure_21)(applicationId.landscape, gridOrientationLockState, closure_16);
      }
      obj2 = closure_0(closure_2[25]);
      tmp8 = obj2.runOnJS(closure_23)();
      return;
    }
  }
  const tmp8Result16 = applicationId(4618);
  Ae.__closure = { runOnJS: applicationId(4618).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  Ae.__workletHash = 10474681321888;
  Ae.__initData = __initData9;
  const animatedReaction2 = tmp8Result16.useAnimatedReaction(Se, Ae);
  const tmp39 = !sharedVisible(9091)();
  closure_24 = tmp39;
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const obj6 = { runOnJS: applicationId(4618).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  class Ie {
    constructor() {
      num = 0;
      if (IS_IOS) {
        tmp = closure_10;
        num = closure_10.get();
      }
      landscape = windowDimensions.get().landscape;
      width = windowDimensions.get().width;
      height = windowDimensions.get().height;
      tmp2 = closure_24;
      tmp3 = closure_24;
      if (closure_24) {
        tmp4 = closure_15;
        tmp5 = OrientationLockState;
        tmp3 = closure_15 === OrientationLockState.LANDSCAPE;
      }
      if (tmp3) {
        tmp3 = !landscape;
      }
      if (tmp2) {
        tmp6 = closure_15;
        tmp7 = OrientationLockState;
        tmp2 = closure_15 === OrientationLockState.PORTRAIT;
      }
      if (tmp2) {
        tmp2 = landscape;
      }
      if (tmp3) {
        tmp9 = closure_12;
        num5 = 2;
        num3 = (height - width * closure_12) / 2;
        num2 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp2) {
          tmp8 = closure_12;
          num4 = 2;
          num2 = (width - height * closure_12) / 2;
          num3 = 0;
        }
      }
      tmp10 = closure_18;
      num6 = 1;
      if (closure_18) {
        num6 = 0;
      }
      size = { flex: num6, backgroundColor, paddingVertical: num3, paddingHorizontal: num2, width: null, height: null, maxHeight: "100%", maxWidth: "100%" };
      str = "auto";
      str2 = "auto";
      if (tmp10) {
        str2 = width;
      }
      size.width = str2;
      if (tmp10) {
        str = height - num;
      }
      size.height = str;
      return size;
    }
  }
  Ie.__closure = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_LOCKED_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  Ie.__workletHash = 13621564101200;
  Ie.__initData = __initData10;
  const animatedStyle = applicationId(4618).useAnimatedStyle(Ie);
  const obj7 = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_LOCKED_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  const tmp8Result17 = applicationId(4618);
  const items11 = [mode];
  const items12 = [controlsSpecs, first1, hideControls];
  const stateFromStores2 = applicationId(504).useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmp21) {
      const obj8 = { gesture: tmp42, children: null };
      const obj9 = { layout: applicationId.layout, pointerEvents: null, style: null, children: null };
      let str = "none";
      if (first1) {
        str = "auto";
      }
      obj9.pointerEvents = str;
      obj9.style = animatedStyle;
      const obj11 = { channelId, activityName: null, isActivityFocused: null, children: null };
      let name;
      const tmp48 = closure_16;
      const tmp4Result3 = tmp4(6577);
      if (application != null) {
        name = application.name;
      }
      obj11.activityName = name;
      obj11.isActivityFocused = first1;
      const obj12 = { channel: stateFromStores, layoutMode: tmp43 };
      obj11.children = focusedOrientationLockState(tmp4(9169), obj12, tmp3[0]);
      const items13 = [focusedOrientationLockState(tmp4(17313), obj11), ];
      let tmp47Result = null;
      if (stateFromStores2) {
        tmp47Result = tmp47(tmp4(17314), {});
      }
      items13[1] = tmp47Result;
      obj9.children = items13;
      obj8.children = tmp48(tmp4Result3, obj9);
      let tmp47Result2 = tmp47(tmp8(6147).GestureDetector, obj8);
      let tmp44 = tmp47;
      const tmp4Result4 = tmp4(17313);
    } else if (null == activityShelfItemData) {
      const obj13 = { activity: stateFromStores1, application };
      tmp47Result2 = focusedOrientationLockState(tmp4(17315), obj13);
      tmp44 = focusedOrientationLockState;
    } else {
      tmp44 = focusedOrientationLockState;
      const obj14 = { gesture: memo1, children: null };
      const obj15 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: tmp2Result2[0], disableBadges: true };
      obj14.children = focusedOrientationLockState(tmp4(17319), obj15);
      tmp47Result2 = focusedOrientationLockState(tmp8(6147).GestureDetector, obj14);
    }
    const obj16 = { value: tmp4Result(tmp4(6688).ACTIVITY_TILE).analyticsLocations, children: tmp47Result2 };
    return tmp44(tmp8(6664).AnalyticsLocationProvider, obj16);
  }
  const tmp8Result18 = applicationId(504);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { theme: ThemeTypes.DARK, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = closure_1_15(closure_34, obj3);
    const tmp11 = closure_1_15(native.ThemeContextProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    let tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const merged = Object.assign(arg0);
  obj.children = closure_1_15(closure_34, {});
  return closure_1_15(native.ThemeContextProvider, obj);
}));