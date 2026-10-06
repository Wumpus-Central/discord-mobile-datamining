// === Module 17311: VoicePanelAnimatedActivityCard ===

// Module 17311 (VoicePanelAnimatedActivityCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11914 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9101 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import Constants from "Constants" /* 2011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let applicationId, dependencyMap;

let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let obj2;
({ IS_IOS: metroImportAll, VoicePanelModes: c9 } = VoicePanelConstants);
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ThemeTypes = Constants2.ThemeTypes;
({ ACTIVITY_LOCKED_ASPECT_RATIO: closure_12, ActivityLayoutMode: map1, OrientationLockState: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { activityContainerBackground: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let backgroundColor;
  let channelId;
  let closure_18;
  let closure_20;
  let de;
  let embeddedActivityParticipantId;
  let first;
  let focused;
  let tmp12;
  let tmp20;
  let tmp25;
  let tmp27;
  let tmp31;
  let tmp61;
  let tmp = applicationId;
  let obj = applicationId(576);
  const cResult = obj.c(78);
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  let obj2 = focused;
  let tmp4 = closure_17();
  [r10021, dependencyMap] = channelId(focused.useState(0), 2);
  channelId(focused.useState(0), 2);
  const context = focused.useContext(sharedVisible(11915));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  let closure_10 = sharedVisible(16621)();
  sharedVisible(16621)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [windowDimensions];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function v() {
      return ChannelStore.getChannel(channelId);
    };
    let num = 1;
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp12);
  if (cResult[3] !== stateFromStores) {
    let num2 = 3;
    const obj3 = { channel: stateFromStores, type: "channel" };
    cResult[3] = stateFromStores;
    let num3 = 4;
    cResult[4] = obj3;
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let guild_id1;
  const useActivityShelfItemData = tmp(17312).useActivityShelfItemData;
  tmp(17312);
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = useActivityShelfItemData(guild_id1, applicationId);
  if (cResult[5] !== guild_id) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    const items1 = [guild_id];
    cResult[5] = guild_id;
    cResult[6] = Q;
    let num6 = 7;
    cResult[7] = items1;
    tmp20 = items1;
  } else {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    tmp20 = cResult[7];
  }
  const effect = obj2.useEffect(Q, tmp20);
  if (cResult[8] !== applicationId) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    tmp23[0] = applicationId;
    cResult[8] = applicationId;
    cResult[9] = tmp23;
  } else {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
  }
  const first1 = tmp5(tmp7(6670)(tmp23), 1)[0];
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    const items2 = [layoutManager];
    cResult[10] = items2;
    tmp25 = items2;
  } else {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
  }
  if (cResult[11] !== applicationId) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    const items3 = [applicationId];
    cResult[11] = applicationId;
    cResult[12] = tmp28;
    cResult[13] = items3;
    tmp27 = items3;
  } else {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    tmp27 = cResult[13];
  }
  const tmpResult8 = tmp(504);
  const stateFromStoresObject = tmpResult8.useStateFromStoresObject(tmp25, tmp28, tmp27);
  const gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  const focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp30 = sharedVisible(9166)();
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    const items4 = [layoutManager];
    cResult[14] = items4;
    tmp31 = items4;
  } else {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
  }
  const tmp32 = cResult[15];
  if (first1 != null) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
  }
  if (tmp32 === undefined) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
    const tmpResult9 = tmp(504);
    const stateFromStores1 = tmpResult9.useStateFromStores(tmp31, de);
    const tmp7Result = sharedVisible(6664);
    const analyticsLocations = tmp7Result(tmp7(6688).ACTIVITY_TILE).analyticsLocations;
    const tmpResult10 = tmp(9137);
    const analyticsContext = tmpResult10.useAnalyticsContext();
    const tmp36 = cResult[18];
    if (stateFromStores1 != null) {
      class Q {
        constructor() {
          const obj = EmbeddedActivitiesActionCreators;
          const obj2 = { guildId: guild_id };
          const shelf = obj.fetchShelf(obj2);
        }
      }
    }
    if (tmp36 === undefined) {
      class Q {
        constructor() {
          const obj = EmbeddedActivitiesActionCreators;
          const obj2 = { guildId: guild_id };
          const shelf = obj.fetchShelf(obj2);
        }
      }
      const tmp38 = cResult[19];
      if (first1 != null) {
        class Q {
          constructor() {
            const obj = EmbeddedActivitiesActionCreators;
            const obj2 = { guildId: guild_id };
            const shelf = obj.fetchShelf(obj2);
          }
        }
      }
      if (tmp38 === tmp39) {
        class Q {
          constructor() {
            const obj = EmbeddedActivitiesActionCreators;
            const obj2 = { guildId: guild_id };
            const shelf = obj.fetchShelf(obj2);
          }
        }
        let closure_15 = tmp40;
        function incrementActivityKey() {
          if (closure_15) {
            dependencyMap((arg0) => arg0 + 1);
          }
        }
        function pe() {
          const obj = { visible: sharedVisible.get(), mode: mode.get() };
          return obj;
        }
        const obj4 = { sharedVisible, mode };
        pe.__closure = obj4;
        pe.__workletHash = 2072430391020;
        pe.__initData = __initData;
        const tmpResult11 = tmp(4618);
        class Se {
          constructor(visible, visible2) {
            let tmp = 1 === visible.visible;
            mode = visible.mode;
            if (tmp) {
              tmp = null != visible2;
            }
            if (tmp) {
              tmp = 0 === visible2.visible;
            }
            if (!tmp) {
              let tmp4 = mode !== controlsSpecs.PIP;
              if (tmp4) {
                let mode1;
                if (visible2 != null) {
                  mode1 = visible2.mode;
                }
                tmp4 = mode1 === tmp3.PIP;
              }
              tmp = tmp4;
            }
            if (tmp) {
              const obj = ReanimatedRexport;
              obj.runOnJS(incrementActivityKey)();
            }
          }
        }
        const useAnimatedReaction = tmpResult11.useAnimatedReaction;
        Se.__closure = { VoicePanelModes: controlsSpecs, runOnJS: tmp(4618).runOnJS, incrementActivityKey };
        Se.__workletHash = 11483202623318;
        Se.__initData = embeddedActivityParticipantId;
        const obj5 = { VoicePanelModes: controlsSpecs, runOnJS: tmp(4618).runOnJS, incrementActivityKey };
        const animatedReaction = useAnimatedReaction(pe, Se);
        const tmp5Result = channelId(obj2.useState(false), 2);
        closure_17 = tmp5Result[0];
        __initData = tmp53;
        embeddedActivityParticipantId = null;
        const tmp49 = controlsSpecs;
        if (null != stateFromStores1) {
          class Q {
            constructor() {
              const obj = EmbeddedActivitiesActionCreators;
              const obj2 = { guildId: guild_id };
              const shelf = obj.fetchShelf(obj2);
            }
          }
          const obj6 = { applicationId: null, instanceId: null };
          ({ applicationId: obj11.applicationId, compositeInstanceId: obj11.instanceId } = stateFromStores1);
          embeddedActivityParticipantId = obj10.getEmbeddedActivityParticipantId(obj6);
        }
        function fe() {
          let tmp2 = null != embeddedActivityParticipantId;
          if (tmp2) {
            const value = focused.get();
            let id;
            if (value != null) {
              id = value.id;
            }
            tmp2 = id === tmp;
          }
          if (tmp2) {
            tmp2 = mode.get() === controlsSpecs.PANEL;
          }
          return tmp2;
        }
        const obj7 = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: tmp49 };
        fe.__closure = obj7;
        fe.__workletHash = 2833167890519;
        fe.__initData = __initData2;
        const tmpResult12 = tmp(4618);
        class Oe {
          constructor(arg0, arg1) {
            if (arg0 !== arg1) {
              const obj = ReanimatedRexport;
              obj.runOnJS(closure_18)(arg0);
            }
          }
        }
        const useAnimatedReaction2 = tmpResult12.useAnimatedReaction;
        Oe.__closure = { runOnJS: tmp(4618).runOnJS, setIsActivityFocused: tmp5Result[1] };
        Oe.__workletHash = 5565798622964;
        Oe.__initData = __initData3;
        const obj8 = { runOnJS: tmp(4618).runOnJS, setIsActivityFocused: tmp5Result[1] };
        const animatedReaction2 = useAnimatedReaction2(fe, Oe);
        const _Symbol = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              const obj = EmbeddedActivitiesActionCreators;
              const obj2 = { guildId: guild_id };
              const shelf = obj.fetchShelf(obj2);
            }
          }
          cResult[22] = obj14.Tap();
          const TapResult = obj14.Tap();
        } else {
          class Q {
            constructor() {
              const obj = EmbeddedActivitiesActionCreators;
              const obj2 = { guildId: guild_id };
              const shelf = obj.fetchShelf(obj2);
            }
          }
        }
        if (cResult[23] === applicationId) {
          class Q {
            constructor() {
              const obj = EmbeddedActivitiesActionCreators;
              const obj2 = { guildId: guild_id };
              const shelf = obj.fetchShelf(obj2);
            }
          }
          __initData2 = tmp61;
          if (cResult[26] === gridOrientationLockState) {
            class Q {
              constructor() {
                const obj = EmbeddedActivitiesActionCreators;
                const obj2 = { guildId: guild_id };
                const shelf = obj.fetchShelf(obj2);
              }
            }
          }
          function ke() {
            const obj = useWindowDimensions;
            size = obj.getWindowDimensions();
            tmp61(size.width > size.height, gridOrientationLockState, closure_15);
          }
          cResult[26] = gridOrientationLockState;
          cResult[27] = tmp61;
          cResult[28] = tmp40;
          cResult[29] = ke;
        }
        function we(arg0, arg1, arg2) {
          const tmp = arg2;
          if (tmp) {
            if (focusedOrientationLockState.LANDSCAPE === arg1) {
              layoutManager.setTargetAspectRatio(applicationId, "landscape");
            } else if (focusedOrientationLockState.PORTRAIT === arg1) {
              layoutManager.setTargetAspectRatio(applicationId, "portrait");
            } else if (focusedOrientationLockState.UNLOCKED === arg1) {
              let str2 = "portrait";
              const setTargetAspectRatio = layoutManager.setTargetAspectRatio;
              if (arg0) {
                str2 = "landscape";
              }
              setTargetAspectRatio(applicationId, str2);
            }
          } else {
            layoutManager.setTargetAspectRatio(applicationId, "square");
          }
        }
        cResult[23] = applicationId;
        cResult[24] = layoutManager;
        cResult[25] = we;
        tmp61 = we;
      }
    }
    let tmp41 = null != tmp30;
    if (tmp41) {
      class Q {
        constructor() {
          const obj = EmbeddedActivitiesActionCreators;
          const obj2 = { guildId: guild_id };
          const shelf = obj.fetchShelf(obj2);
        }
      }
      let id = tmp30.id;
      if (first1 != null) {
        class Q {
          constructor() {
            const obj = EmbeddedActivitiesActionCreators;
            const obj2 = { guildId: guild_id };
            const shelf = obj.fetchShelf(obj2);
          }
        }
      }
      tmp41 = id === tmp42;
    }
    if (!tmp41) {
      class Q {
        constructor() {
          const obj = EmbeddedActivitiesActionCreators;
          const obj2 = { guildId: guild_id };
          const shelf = obj.fetchShelf(obj2);
        }
      }
      if (stateFromStores1 != null) {
        class Q {
          constructor() {
            const obj = EmbeddedActivitiesActionCreators;
            const obj2 = { guildId: guild_id };
            const shelf = obj.fetchShelf(obj2);
          }
        }
        if (tmp44 != null) {
          class Q {
            constructor() {
              const obj = EmbeddedActivitiesActionCreators;
              const obj2 = { guildId: guild_id };
              const shelf = obj.fetchShelf(obj2);
            }
          }
        }
      }
      tmp41 = null != tmp43;
    }
    if (stateFromStores1 != null) {
      class Q {
        constructor() {
          const obj = EmbeddedActivitiesActionCreators;
          const obj2 = { guildId: guild_id };
          const shelf = obj.fetchShelf(obj2);
        }
      }
    }
    cResult[18] = tmp45;
    if (first1 != null) {
      class Q {
        constructor() {
          const obj = EmbeddedActivitiesActionCreators;
          const obj2 = { guildId: guild_id };
          const shelf = obj.fetchShelf(obj2);
        }
      }
    }
    cResult[19] = undefined;
    cResult[20] = tmp30;
    cResult[21] = tmp41;
  }
  if (first1 != null) {
    class Q {
      constructor() {
        const obj = EmbeddedActivitiesActionCreators;
        const obj2 = { guildId: guild_id };
        const shelf = obj.fetchShelf(obj2);
      }
    }
  }
  de = function de() {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      id = undefined;
      applicationId = applicationId.applicationId;
      if (id != null) {
        id = id.id;
      }
      return applicationId === id;
    });
  };
  cResult[15] = undefined;
  cResult[16] = channelId;
  cResult[17] = de;
}) : ((applicationId) => {
  let closure_10;
  let closure_2;
  let items13;
  let name;
  let obj10;
  let obj12;
  let obj15;
  let str;
  let tmp51;
  let tmp5Result3;
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  let channelId;
  let focused;
  let first1;
  let gridOrientationLockState;
  let focusedOrientationLockState;
  let closure_16;
  let incrementActivityKey;
  let first2;
  closure_19 = undefined;
  let embeddedActivityParticipantId;
  let callback1;
  closure_22 = undefined;
  let callback2;
  closure_24 = undefined;
  let backgroundColor;
  const layout = applicationId.layout;
  let obj = focused;
  let tmp = incrementActivityKey();
  let tmp2 = channelId;
  let tmp3 = channelId(focused.useState(0), 2);
  dependencyMap = tmp3[1];
  const first = tmp3[0];
  const context = focused.useContext(sharedVisible(11915));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp8 = sharedVisible(16621)();
  VoicePanelControlsModes = tmp8;
  let obj2 = applicationId(504);
  const items = [windowDimensions];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores];
  let guild_id;
  const memo = focused.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let guild_id1;
  const useActivityShelfItemData = applicationId(17312).useActivityShelfItemData;
  applicationId(17312);
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = useActivityShelfItemData(guild_id1, applicationId);
  const items2 = [guild_id];
  const effect = obj.useEffect(() => {
    const obj = EmbeddedActivitiesActionCreators;
    const obj2 = { guildId: guild_id };
    const shelf = obj.fetchShelf(obj2);
  }, items2);
  const items3 = [applicationId];
  first1 = tmp2(tmp5(6670)(items3), 1)[0];
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const tmp9Result10 = applicationId(504);
  const stateFromStoresObject = tmp9Result10.useStateFromStoresObject(items4, () => {
    const obj = { gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId) };
    return obj;
  }, items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp19 = sharedVisible(9166)();
  const items6 = [layoutManager];
  const tmp9Result11 = applicationId(504);
  const stateFromStores1 = tmp9Result11.useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      id = undefined;
      applicationId = applicationId.applicationId;
      if (id != null) {
        id = id.id;
      }
      return applicationId === id;
    });
  });
  const tmp5Result = sharedVisible(6664);
  const analyticsLocations = tmp5Result(tmp5(6688).ACTIVITY_TILE).analyticsLocations;
  let tmp23 = null != tmp19;
  const tmp9Result12 = applicationId(9137);
  const analyticsContext = tmp9Result12.useAnalyticsContext();
  if (tmp23) {
    let id1;
    let id = tmp19.id;
    if (first1 != null) {
      id1 = first1.id;
    }
    tmp23 = id === id1;
  }
  if (!tmp23) {
    let found;
    if (stateFromStores1 != null) {
      const participants = stateFromStores1.participants;
      if (participants != null) {
        found = participants.find((item) => {
          const obj = applicationId(closure_2[24]);
          return obj.isActivityParticipantCurrentUserCurrentSession(item);
        });
      }
    }
    tmp23 = null != found;
  }
  closure_16 = tmp23;
  const items7 = [tmp23];
  incrementActivityKey = obj.useCallback(() => {
    if (closure_16) {
      closure_2((arg0) => arg0 + 1);
    }
  }, items7);
  let fn = function q() {
    const obj = { visible: sharedVisible.get(), mode: mode.get() };
    return obj;
  };
  fn.__closure = { sharedVisible, mode };
  fn.__workletHash = 7783274449636;
  fn.__initData = __initData4;
  const fn2 = function j(visible, visible2) {
    let tmp = 1 === visible.visible;
    mode = visible.mode;
    if (tmp) {
      tmp = null != visible2;
    }
    if (tmp) {
      tmp = 0 === visible2.visible;
    }
    if (!tmp) {
      let tmp4 = mode !== controlsSpecs.PIP;
      if (tmp4) {
        let mode1;
        if (visible2 != null) {
          mode1 = visible2.mode;
        }
        tmp4 = mode1 === tmp3.PIP;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback)();
    }
  };
  const tmp9Result13 = applicationId(4618);
  fn2.__closure = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(4618).runOnJS, incrementActivityKey };
  fn2.__workletHash = 16160706746790;
  fn2.__initData = __initData5;
  ({ VoicePanelModes: controlsSpecs, runOnJS: applicationId(4618).runOnJS, incrementActivityKey });
  const animatedReaction = tmp9Result13.useAnimatedReaction(fn, fn2);
  const tmp2Result = tmp2(obj.useState(false), 2);
  first2 = tmp2Result[0];
  closure_19 = tmp31;
  embeddedActivityParticipantId = null;
  const tmp27 = controlsSpecs;
  if (null != stateFromStores1) {
    const obj4 = { applicationId: null, instanceId: null };
    ({ applicationId: obj9.applicationId, compositeInstanceId: obj9.instanceId } = stateFromStores1);
    const tmp9Result14 = applicationId(9049);
    embeddedActivityParticipantId = tmp9Result14.getEmbeddedActivityParticipantId(obj4);
  }
  function de() {
    let tmp2 = null != embeddedActivityParticipantId;
    if (tmp2) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp2 = id === tmp;
    }
    if (tmp2) {
      tmp2 = mode.get() === controlsSpecs.PANEL;
    }
    return tmp2;
  }
  de.__closure = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: tmp27 };
  de.__workletHash = 6022892002020;
  de.__initData = __initData6;
  function re(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_19)(arg0);
    }
  }
  const tmp9Result15 = applicationId(4618);
  re.__closure = { runOnJS: applicationId(4618).runOnJS, setIsActivityFocused: tmp2Result[1] };
  re.__workletHash = 1820052119779;
  re.__initData = __initData7;
  ({ runOnJS: applicationId(4618).runOnJS, setIsActivityFocused: tmp2Result[1] });
  const animatedReaction1 = tmp9Result15.useAnimatedReaction(de, re);
  const items8 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(closure_2[27]).Gesture;
    return Gesture.Tap();
  }, []);
  callback1 = obj.useCallback((arg0, arg1, arg2) => {
    const tmp = arg2;
    if (tmp) {
      if (gridOrientationLockState.LANDSCAPE === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "landscape");
      } else if (gridOrientationLockState.PORTRAIT === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "portrait");
      } else if (gridOrientationLockState.UNLOCKED === arg1) {
        let str2 = "portrait";
        const setTargetAspectRatio = layoutManager.setTargetAspectRatio;
        if (arg0) {
          str2 = "landscape";
        }
        setTargetAspectRatio(applicationId, str2);
      }
    } else {
      layoutManager.setTargetAspectRatio(applicationId, "square");
    }
  }, items8);
  const items9 = [callback1, windowDimensions, gridOrientationLockState, tmp23];
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, closure_16);
  }, items9);
  const tmp2Result2 = tmp2(obj.useState(layoutManager.getDefaultTargetDimensions()), 2);
  closure_22 = tmp39;
  const items10 = [layoutManager, tmp2Result2[1]];
  const first3 = tmp2Result2[0];
  callback2 = obj.useCallback(() => {
    closure_22(layoutManager.getDefaultTargetDimensions());
  }, items10);
  const tmp9Result16 = applicationId(4618);
  class Se {
    constructor() {
      return windowDimensions.get();
    }
  }
  Se.__closure = { windowDimensions };
  Se.__workletHash = 9333029890765;
  Se.__initData = __initData8;
  class Ae {
    constructor(landscape, landscape2) {
      let landscape1;
      landscape = landscape.landscape;
      if (landscape2 != null) {
        landscape1 = landscape2.landscape;
      }
      if (landscape !== landscape1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback1)(landscape.landscape, gridOrientationLockState, closure_16);
      }
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(callback2)();
    }
  }
  Ae.__closure = { runOnJS: applicationId(4618).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp23, updateNotJoinedActivityDimensions: callback2 };
  Ae.__workletHash = 10474681321888;
  Ae.__initData = __initData9;
  ({ runOnJS: applicationId(4618).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp23, updateNotJoinedActivityDimensions: callback2 });
  const animatedReaction2 = tmp9Result16.useAnimatedReaction(Se, Ae);
  const tmp42 = !sharedVisible(9091)();
  closure_24 = tmp42;
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const tmp9Result17 = applicationId(4618);
  class Ie {
    constructor() {
      let num2;
      let num3;
      let str;
      let str2;
      let num = 0;
      if (metroImportAll) {
        num = closure_10.get();
      }
      const landscape = windowDimensions.get().landscape;
      const width = windowDimensions.get().width;
      const height = windowDimensions.get().height;
      let tmp2 = closure_24;
      const tmp3 = closure_24 && focusedOrientationLockState === gridOrientationLockState.LANDSCAPE && !landscape;
      if (tmp2) {
        tmp2 = focusedOrientationLockState === gridOrientationLockState.PORTRAIT;
      }
      if (tmp2) {
        tmp2 = landscape;
      }
      if (tmp3) {
        num3 = (height - width * closure_12) / 2;
        num2 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp2) {
          num2 = (width - height * closure_12) / 2;
          num3 = 0;
        }
      }
      let num6 = 1;
      if (first2) {
        num6 = 0;
      }
      size = { flex: num6, backgroundColor, paddingVertical: num3, paddingHorizontal: num2, width: str2, height: str, maxHeight: "100%", maxWidth: "100%" };
      str = "auto";
      str2 = "auto";
      if (first2) {
        str2 = width;
      }
      if (first2) {
        str = height - num;
      }
      return size;
    }
  }
  const obj7 = { IS_IOS: hideControls, animatedKeyboardHeight: tmp8, windowDimensions, shouldLetterboxOrientationLock: tmp42, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_LOCKED_ASPECT_RATIO: guild_id, isActivityFocused: first2, backgroundColor };
  Ie.__closure = obj7;
  Ie.__workletHash = 13621564101200;
  Ie.__initData = __initData10;
  const animatedStyle = tmp9Result17.useAnimatedStyle(Ie);
  const items11 = [mode];
  const items12 = [controlsSpecs, first2, hideControls];
  const tmp9Result18 = applicationId(504);
  const stateFromStores2 = tmp9Result18.useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp50Result2;
    let tmp47;
    if (tmp23) {
      const obj8 = { gesture: tmp45, children: tmp51(tmp5Result3, obj10) };
      const GestureDetector2 = tmp9(6147).GestureDetector;
      obj10 = { layout, pointerEvents: str, style: animatedStyle, children: items13 };
      str = "none";
      tmp51 = closure_16;
      tmp5Result3 = sharedVisible(6577);
      if (first2) {
        str = "auto";
      }
      const obj11 = { channelId, activityName: name, isActivityFocused: first2, children: focusedOrientationLockState(sharedVisible(9169), obj12, first) };
      name = undefined;
      const tmp5Result4 = sharedVisible(17313);
      if (first1 != null) {
        name = first1.name;
      }
      obj12 = { channel: stateFromStores, layoutMode: tmp46 };
      items13 = [focusedOrientationLockState(tmp5Result4, obj11), ];
      let tmp50Result = null;
      if (stateFromStores2) {
        tmp50Result = tmp50(tmp5(17314), {});
      }
      items13[1] = tmp50Result;
      tmp50Result2 = tmp50(GestureDetector2, obj8);
      tmp47 = tmp50;
    } else if (null == activityShelfItemData) {
      const obj13 = { activity: stateFromStores1, application: first1 };
      tmp50Result2 = focusedOrientationLockState(tmp5(17315), obj13);
      tmp47 = focusedOrientationLockState;
    } else {
      tmp47 = focusedOrientationLockState;
      const obj14 = { gesture: memo1, children: focusedOrientationLockState(sharedVisible(17319), obj15) };
      const GestureDetector = tmp9(6147).GestureDetector;
      obj15 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: first3, disableBadges: true };
      tmp50Result2 = focusedOrientationLockState(GestureDetector, obj14);
    }
    const obj16 = { value: analyticsLocations, children: tmp50Result2 };
    return tmp47(applicationId(6664).AnalyticsLocationProvider, obj16);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = { theme: ThemeTypes.DARK, children: closure_15(closure_34, obj3) };
    obj3 = {};
    const ThemeContextProvider = native.ThemeContextProvider;
    const merged = Object.assign(arg0);
    const tmp11 = closure_15(ThemeContextProvider, obj2);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  let obj2;
  const obj = { theme: ThemeTypes.DARK, children: closure_15(closure_34, obj2) };
  obj2 = {};
  const ThemeContextProvider = native.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return closure_15(ThemeContextProvider, obj);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default memoResult;