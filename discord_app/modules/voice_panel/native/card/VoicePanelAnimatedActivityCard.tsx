// === Module 17291: VoicePanelAnimatedActivityCard ===

// Module 17291 (VoicePanelAnimatedActivityCard)
import nativeDefault from "native" /* 576 */;
import useWindowDimensions from "useWindowDimensions" /* 1478 */;
import native from "native" /* 4350 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6760 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9636 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9618 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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
  let tmp3 = channelId(focused.useState(0), 2);
  dependencyMap = tmp3[1];
  const context = focused.useContext(sharedVisible(12406));
  channelId = context.channelId;
  focused = context.focused;
  const layoutManager = context.layoutManager;
  let mode = context.mode;
  const windowDimensions = context.windowDimensions;
  const hideControls = context.hideControls;
  const controlsSpecs = context.controlsSpecs;
  const tmp7 = sharedVisible(16841)();
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
  const activityShelfItemData = applicationId(17292).useActivityShelfItemData(guild_id1, applicationId);
  const items2 = [guild_id];
  const effect = obj.useEffect(() => {
    const shelf = EmbeddedActivitiesActionCreators.fetchShelf({ guildId: guild_id });
  }, items2);
  const items3 = [applicationId];
  application = tmp2(tmp4(7275)(items3), 1)[0];
  const tmp8Result = applicationId(17292);
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const stateFromStoresObject = applicationId(504).useStateFromStoresObject(items4, () => ({ gridOrientationLockState: EmbeddedActivitiesStore.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId) }), items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp17 = sharedVisible(9764)();
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
  const tmp4Result = sharedVisible(7269);
  let tmp21 = null != tmp17;
  const analyticsContext = applicationId(9751).useAnalyticsContext();
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
        found = participants.find((item) => applicationId(14078).isActivityParticipantCurrentUserCurrentSession(item));
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
  const tmp8Result12 = applicationId(9751);
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
  const tmp8Result13 = applicationId(4376);
  fn2.__closure = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(4376).runOnJS, incrementActivityKey };
  fn2.__workletHash = 9732208421749;
  fn2.__initData = __initData;
  const animatedReaction = tmp8Result13.useAnimatedReaction(fn, fn2);
  const tmp2Result = channelId(focused.useState(false), 2);
  first1 = tmp2Result[0];
  __initData = tmp29;
  embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    ({ applicationId: obj10.applicationId, compositeInstanceId: obj10.instanceId } = stateFromStores1);
    embeddedActivityParticipantId = tmp8(9608).getEmbeddedActivityParticipantId({ applicationId: null, instanceId: null });
    const obj4 = { applicationId: null, instanceId: null };
    const tmp8Result14 = tmp8(9608);
  }
  const obj3 = { VoicePanelModes: controlsSpecs, runOnJS: applicationId(4376).runOnJS, incrementActivityKey };
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
  de.__workletHash = 2833167890519;
  de.__initData = embeddedActivityParticipantId;
  function re(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(closure_19)(arg0);
    }
  }
  const tmp8Result15 = applicationId(4376);
  re.__closure = { runOnJS: applicationId(4376).runOnJS, setIsActivityFocused: tmp2Result[1] };
  re.__workletHash = 12291590020155;
  re.__initData = callback1;
  const animatedReaction1 = tmp8Result15.useAnimatedReaction(de, re);
  const items8 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(6760).Gesture;
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
  __initData2 = tmp36;
  const items10 = [layoutManager, tmp2Result2[1]];
  callback2 = obj.useCallback(() => {
    closure_22(layoutManager.getDefaultTargetDimensions());
  }, items10);
  const obj5 = { runOnJS: applicationId(4376).runOnJS, setIsActivityFocused: tmp2Result[1] };
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
  const tmp8Result16 = applicationId(4376);
  ve.__closure = { runOnJS: applicationId(4376).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  ve.__workletHash = 13125606009235;
  ve.__initData = callback2;
  const animatedReaction2 = tmp8Result16.useAnimatedReaction(Se, ve);
  const tmp39 = !sharedVisible(9604)();
  __initData3 = tmp39;
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const obj6 = { runOnJS: applicationId(4376).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
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
  const animatedStyle = applicationId(4376).useAnimatedStyle(Te);
  const obj7 = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_PORTRAIT_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  const tmp8Result17 = applicationId(4376);
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
      const tmp4Result3 = tmp4(7180);
      if (application != null) {
        name = application.name;
      }
      obj11.activityName = name;
      obj11.isActivityFocused = first1;
      const obj12 = { channel: stateFromStores, layoutMode: tmp43 };
      obj11.children = focusedOrientationLockState(tmp4(9767), obj12, tmp3[0]);
      const items13 = [focusedOrientationLockState(tmp4(17293), obj11), ];
      let tmp47Result = null;
      if (stateFromStores2) {
        tmp47Result = tmp47(tmp4(17294), {});
      }
      items13[1] = tmp47Result;
      obj9.children = items13;
      obj8.children = tmp48(tmp4Result3, obj9);
      let tmp47Result2 = tmp47(tmp8(6760).GestureDetector, obj8);
      let tmp44 = tmp47;
      const tmp4Result4 = tmp4(17293);
    } else if (null == activityShelfItemData) {
      const obj13 = { activity: stateFromStores1, application };
      tmp47Result2 = focusedOrientationLockState(tmp4(17295), obj13);
      tmp44 = focusedOrientationLockState;
    } else {
      tmp44 = focusedOrientationLockState;
      const obj14 = { gesture: memo1, children: null };
      const obj15 = { context: memo, guildId: stateFromStores.guild_id, activityItem: activityShelfItemData, locationObject: analyticsContext.location, itemDimensions: tmp2Result2[0], disableBadges: true };
      obj14.children = focusedOrientationLockState(tmp4(17299), obj15);
      tmp47Result2 = focusedOrientationLockState(tmp8(6760).GestureDetector, obj14);
    }
    const obj16 = { value: tmp4Result(tmp4(7289).ACTIVITY_TILE).analyticsLocations, children: tmp47Result2 };
    return tmp44(tmp8(7269).AnalyticsLocationProvider, obj16);
  }
  const tmp8Result18 = applicationId(504);
}
const VoicePanelConstants = fn(12407);
({ IS_IOS: closure_8, VoicePanelModes: closure_9 } = VoicePanelConstants);
let VoicePanelControlsModes = fn(12405).VoicePanelControlsModes;
const ThemeTypes = fn(1074).ThemeTypes;
const Constants = fn(1921);
({ ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ActivityLayoutMode: map1, OrientationLockState: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4639);
let obj = { activityContainerBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let __initData = { code: "function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let closure_20 = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
let closure_21 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}" };
let __initData2 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let __initData3 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_25 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default noop.memo(function VoicePanelAnimatedActivityCard(arg0) {
  const obj = { theme: ThemeTypes.DARK, children: null };
  const merged = Object.assign(arg0);
  obj.children = __initData(VoicePanelAnimatedActivityCardInner, {});
  return __initData(native.ThemeContextProvider, obj);
});