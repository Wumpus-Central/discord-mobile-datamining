// === Module 17142: VoicePanelAnimatedActivityCard ===

// Module 17142 (VoicePanelAnimatedActivityCard)
import nativeDefault from "native" /* 576 */;
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9504 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9486 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function VoicePanelAnimatedActivityCardInner(applicationId) {
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
  __initData = undefined;
  let embeddedActivityParticipantId;
  let callback1;
  __initData2 = undefined;
  let callback2;
  __initData3 = undefined;
  let backgroundColor;
  let obj = focused;
  let tmp3 = channelId(focused.useState(0), 2);
  dependencyMap = tmp3[1];
  const context = focused.useContext(sharedVisible(12272));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp7 = sharedVisible(16689)();
  VoicePanelControlsModes = tmp7;
  let obj1 = applicationId(504);
  const items = [windowDimensions];
  const stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores];
  let guild_id;
  const memo = focused.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp8Result = tmp8(17143);
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (guild_id1 == null) {
    guild_id1 = null;
  }
  const activityShelfItemData = tmp8Result.useActivityShelfItemData(guild_id1, applicationId);
  const items2 = [guild_id];
  const effect = obj.useEffect(() => {
    const obj = { guildId: guild_id };
    const shelf = obj.fetchShelf(obj);
  }, items2);
  const items3 = [applicationId];
  application = tmp2(tmp4(7168)(items3), 1)[0];
  tmp8Result = tmp8(504);
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const stateFromStoresObject = tmp8Result.useStateFromStoresObject(items4, () => ({ gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId) }), items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp17 = sharedVisible(9632)();
  let tmp = incrementActivityKey();
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
  let tmp4Result = tmp4(7162);
  const tmp8Result1 = applicationId(504);
  let tmp21 = null != tmp17;
  const analyticsContext = applicationId(9619).useAnalyticsContext();
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
        found = participants.find((item) => applicationId(13985).isActivityParticipantCurrentUserCurrentSession(item));
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
  const tmp8Result2 = applicationId(9619);
  let fn = function q() {
    return { visible: sharedVisible.get(), mode: mode.get() };
  };
  fn.__closure = { sharedVisible, mode };
  fn.__workletHash = 2072430391020;
  fn.__initData = first1;
  const fn2 = function $(visible, visible2) {
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
  obj = { VoicePanelModes: controlsSpecs, runOnJS: tmp8(4296).runOnJS, incrementActivityKey };
  fn2.__closure = obj;
  fn2.__workletHash = 9732208421749;
  fn2.__initData = __initData;
  const animatedReaction = applicationId(4296).useAnimatedReaction(fn, fn2);
  let tmp2Result = tmp2(obj.useState(false), 2);
  first1 = tmp2Result[0];
  __initData = tmp29;
  embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    obj = { applicationId: null, instanceId: null };
    ({ applicationId: obj10.applicationId, compositeInstanceId: obj10.instanceId } = stateFromStores1);
    embeddedActivityParticipantId = tmp8(9476).getEmbeddedActivityParticipantId(obj);
    const tmp8Result4 = tmp8(9476);
  }
  const tmp25 = controlsSpecs;
  const tmp8Result3 = applicationId(4296);
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
  de.__workletHash = 2833167890519;
  de.__initData = embeddedActivityParticipantId;
  function re(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_19)(arg0);
    }
  }
  obj1 = { runOnJS: tmp8(4296).runOnJS, setIsActivityFocused: tmp29 };
  re.__closure = obj1;
  re.__workletHash = 12291590020155;
  re.__initData = callback1;
  const animatedReaction1 = applicationId(4296).useAnimatedReaction(de, re);
  const items8 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(6655).Gesture;
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
  tmp2Result = tmp2(obj.useState(layoutManager.getDefaultTargetDimensions()), 2);
  __initData2 = tmp36;
  const items10 = [layoutManager, tmp2Result[1]];
  callback2 = obj.useCallback(() => {
    closure_22(layoutManager.getDefaultTargetDimensions());
  }, items10);
  const tmp8Result5 = applicationId(4296);
  class Se {
    constructor() {
      return windowDimensions.get();
    }
  }
  Se.__closure = { windowDimensions };
  Se.__workletHash = 12220613662042;
  Se.__initData = __initData2;
  function ve(landscape, landscape2) {
    landscape = undefined;
    if (landscape2 != null) {
      landscape = landscape2.landscape;
    }
    if (landscape.landscape !== landscape) {
      ReanimatedRexport.runOnJS(callback1)(landscape.landscape, gridOrientationLockState, closure_16);
    }
    ReanimatedRexport.runOnJS(callback2)();
  }
  const tmp8Result6 = applicationId(4296);
  ve.__closure = { runOnJS: applicationId(4296).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  ve.__workletHash = 13125606009235;
  ve.__initData = callback2;
  const animatedReaction2 = tmp8Result6.useAnimatedReaction(Se, ve);
  const tmp39 = !sharedVisible(9472)();
  __initData3 = tmp39;
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  let obj2 = { runOnJS: applicationId(4296).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  class Te {
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
  Te.__closure = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_PORTRAIT_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  Te.__workletHash = 12598621298206;
  Te.__initData = __initData3;
  const animatedStyle = applicationId(4296).useAnimatedStyle(Te);
  const obj3 = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_PORTRAIT_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  const tmp8Result7 = applicationId(4296);
  const items11 = [mode];
  const items12 = [controlsSpecs, first1, hideControls];
  const stateFromStores2 = applicationId(504).useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmp21) {
      const obj4 = { gesture: tmp42, children: null };
      const obj5 = { layout: applicationId.layout, pointerEvents: null, style: null, children: null };
      let str = "none";
      tmp4Result = tmp4(7073);
      if (first1) {
        str = "auto";
      }
      obj5.pointerEvents = str;
      obj5.style = animatedStyle;
      const obj6 = { channelId, activityName: null, isActivityFocused: null, children: null };
      let name;
      if (application != null) {
        name = application.name;
      }
      obj6.activityName = name;
      obj6.isActivityFocused = first1;
      const obj7 = { channel: stateFromStores, layoutMode: tmp43 };
      obj6.children = focusedOrientationLockState(tmp4(9635), obj7, tmp3[0]);
      const items13 = [focusedOrientationLockState(tmp4(17144), obj6), ];
      let tmp47Result = null;
      if (stateFromStores2) {
        tmp47Result = tmp47(tmp4(17145), {});
      }
      items13[1] = tmp47Result;
      obj5.children = items13;
      obj4.children = closure_16(tmp4Result, obj5);
      tmp47Result = tmp47(tmp8(6655).GestureDetector, obj4);
      let tmp44 = tmp47;
      const tmp4Result1 = tmp4(17144);
    } else if (null == activityShelfItemData) {
      const obj8 = { activity: stateFromStores1, application };
      tmp47Result = focusedOrientationLockState(tmp4(17146), obj8);
      tmp44 = focusedOrientationLockState;
    } else {
      tmp44 = focusedOrientationLockState;
      const obj9 = { gesture: memo1, children: null };
      const obj10 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: tmp2Result[0], disableBadges: true };
      obj9.children = focusedOrientationLockState(tmp4(17150), obj10);
      tmp47Result = focusedOrientationLockState(tmp8(6655).GestureDetector, obj9);
    }
    const obj11 = { value: tmp4Result(tmp4(7182).ACTIVITY_TILE).analyticsLocations, children: tmp47Result };
    return tmp44(tmp8(7162).AnalyticsLocationProvider, obj11);
  }
  const tmp8Result8 = applicationId(504);
}
const VoicePanelConstants = fn(12273);
({ IS_IOS: closure_8, VoicePanelModes: closure_9 } = VoicePanelConstants);
let VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const ThemeTypes = fn(1074).ThemeTypes;
const Constants = fn(1920);
({ ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ActivityLayoutMode: map1, OrientationLockState: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4560);
let obj = { activityContainerBackground: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.activityContainerBackground = obj;
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let __initData = { code: "function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let closure_20 = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
let closure_21 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}" };
let __initData2 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let __initData3 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_25 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default noop.memo(function VoicePanelAnimatedActivityCard(arg0) {
  let obj = { theme: ThemeTypes.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = __initData(VoicePanelAnimatedActivityCardInner, obj);
  return __initData(native.ThemeContextProvider, obj);
});