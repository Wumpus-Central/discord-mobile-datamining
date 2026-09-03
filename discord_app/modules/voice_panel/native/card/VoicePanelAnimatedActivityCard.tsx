// === Module 16978: VoicePanelAnimatedActivityCardInner ===

// Module 16978 (VoicePanelAnimatedActivityCardInner)
import ThemesDefault from "Themes" /* 709 */;
import ManaContext from "ManaContext" /* 4204 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "participantFromServer" /* 1385 */;
import closure_6 from "initialize" /* 9552 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import VoicePanelModes from "VoicePanelModes" /* 12069 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 12067 */;
import { ThemeTypes } from "ME" /* 673 */;
import items3 from "items3" /* 4506 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function VoicePanelAnimatedActivityCardInner(applicationId) {
  applicationId = applicationId.applicationId;
  const sharedVisible = applicationId.sharedVisible;
  dependencyMap = undefined;
  let channelId;
  let focused;
  let layoutManager;
  let mode;
  let windowDimensions;
  let hideControls;
  let controlsSpecs;
  closure_10 = undefined;
  let stateFromStores;
  let guild_id;
  let first;
  let gridOrientationLockState;
  let focusedOrientationLockState;
  closure_16 = undefined;
  let callback;
  let first1;
  closure_19 = undefined;
  let embeddedActivityParticipantId;
  let callback1;
  closure_22 = undefined;
  let callback2;
  closure_24 = undefined;
  let backgroundColor;
  let obj = focused;
  let tmp3 = channelId(focused.useState(0), 2);
  dependencyMap = tmp3[1];
  const context = focused.useContext(sharedVisible(12068));
  channelId = context.channelId;
  focused = context.focused;
  layoutManager = context.layoutManager;
  mode = context.mode;
  windowDimensions = context.windowDimensions;
  hideControls = context.hideControls;
  controlsSpecs = context.controlsSpecs;
  const tmp7 = sharedVisible(16801)();
  closure_10 = tmp7;
  obj1 = applicationId(586);
  const items = [windowDimensions];
  stateFromStores = obj1.useStateFromStores(items, () => windowDimensions.getChannel(channelId));
  const items1 = [stateFromStores];
  guild_id = undefined;
  const memo = focused.useMemo(() => ({ channel: stateFromStores, type: "channel" }), items1);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp8Result = tmp8(16979);
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
    let obj = applicationId(9486);
    obj = { guildId: guild_id };
    const shelf = obj.fetchShelf(obj);
  }, items2);
  const items3 = [applicationId];
  first = tmp2(tmp4(5968)(items3), 1)[0];
  tmp8Result = tmp8(586);
  const items4 = [layoutManager];
  const items5 = [applicationId];
  const stateFromStoresObject = tmp8Result.useStateFromStoresObject(items4, () => ({ gridOrientationLockState: layoutManager.getGridOrientationLockStateForApp(applicationId), focusedOrientationLockState: layoutManager.getOrientationLockStateForApp(applicationId) }), items5);
  gridOrientationLockState = stateFromStoresObject.gridOrientationLockState;
  focusedOrientationLockState = stateFromStoresObject.focusedOrientationLockState;
  const tmp17 = sharedVisible(9618)();
  let tmp = callback();
  const items6 = [layoutManager];
  const stateFromStores1 = applicationId(586).useStateFromStores(items6, () => {
    const embeddedActivitiesForChannel = layoutManager.getEmbeddedActivitiesForChannel(channelId);
    return embeddedActivitiesForChannel.find((applicationId) => {
      let id;
      if (id != null) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  let tmp4Result = tmp4(5962);
  const tmp8Result1 = applicationId(586);
  let tmp21 = null != tmp17;
  const analyticsContext = applicationId(9187).useAnalyticsContext();
  if (tmp21) {
    let id;
    if (first != null) {
      id = first.id;
    }
    tmp21 = tmp17.id === id;
  }
  if (!tmp21) {
    let found;
    if (stateFromStores1 != null) {
      const participants = stateFromStores1.participants;
      if (participants != null) {
        found = participants.find((userId) => applicationId(13963).isActivityParticipantCurrentUserCurrentSession(userId));
      }
    }
    tmp21 = null != found;
  }
  closure_16 = tmp21;
  const items7 = [tmp21];
  callback = obj.useCallback(() => {
    if (closure_16) {
      dependencyMap((arg0) => arg0 + 1);
    }
  }, items7);
  const tmp8Result2 = applicationId(9187);
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
      let tmp4 = visible.mode !== controlsSpecs.PIP;
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
      applicationId(4217).runOnJS(callback)();
      const obj = applicationId(4217);
    }
  };
  obj = { VoicePanelModes: controlsSpecs, runOnJS: tmp8(4217).runOnJS, incrementActivityKey: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 9732208421749;
  fn2.__initData = closure_19;
  const animatedReaction = applicationId(4217).useAnimatedReaction(fn, fn2);
  let tmp2Result = tmp2(obj.useState(false), 2);
  first1 = tmp2Result[0];
  closure_19 = tmp29;
  embeddedActivityParticipantId = null;
  if (null != stateFromStores1) {
    obj = { applicationId: null, instanceId: null };
    ({ applicationId: obj10[0], compositeInstanceId: obj10[1] } = stateFromStores1);
    embeddedActivityParticipantId = tmp8(9507).getEmbeddedActivityParticipantId(obj);
    const tmp8Result4 = tmp8(9507);
  }
  const tmp25 = controlsSpecs;
  const tmp8Result3 = applicationId(4217);
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
  de.__closure = { activityParticipantId: embeddedActivityParticipantId, focused, mode, VoicePanelModes: tmp25 };
  de.__workletHash = 2833167890519;
  de.__initData = embeddedActivityParticipantId;
  function re(arg0, arg1) {
    if (arg0 !== arg1) {
      applicationId(4217).runOnJS(closure_19)(arg0);
      const obj = applicationId(4217);
    }
  }
  obj1 = { runOnJS: tmp8(4217).runOnJS, setIsActivityFocused: tmp29 };
  re.__closure = obj1;
  re.__workletHash = 12291590020155;
  re.__initData = callback1;
  const animatedReaction1 = applicationId(4217).useAnimatedReaction(de, re);
  const items8 = [layoutManager, applicationId];
  const memo1 = obj.useMemo(() => {
    const Gesture = applicationId(5661).Gesture;
    return Gesture.Tap();
  }, []);
  callback1 = obj.useCallback((arg0, arg1, arg2) => {
    if (arg2) {
      if (gridOrientationLockState.LANDSCAPE === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "landscape");
      } else if (tmp5.PORTRAIT === arg1) {
        layoutManager.setTargetAspectRatio(applicationId, "portrait");
      } else if (tmp5.UNLOCKED === arg1) {
        let str2 = "portrait";
        if (arg0) {
          str2 = "landscape";
        }
        layoutManager.setTargetAspectRatio(applicationId, str2);
        const tmp9 = applicationId;
      }
    } else {
      layoutManager.setTargetAspectRatio(applicationId, "square");
    }
  }, items8);
  const items9 = [callback1, windowDimensions, gridOrientationLockState, tmp21];
  const layoutEffect = obj.useLayoutEffect(() => {
    const size = applicationId(1492).getWindowDimensions();
    callback1(size.width > size.height, gridOrientationLockState, closure_16);
  }, items9);
  tmp2Result = tmp2(obj.useState(layoutManager.getDefaultTargetDimensions()), 2);
  closure_22 = tmp36;
  const items10 = [layoutManager, tmp2Result[1]];
  callback2 = obj.useCallback(() => {
    callback(layoutManager.getDefaultTargetDimensions());
  }, items10);
  const tmp8Result5 = applicationId(4217);
  class Se {
    constructor() {
      return windowDimensions.get();
    }
  }
  Se.__closure = { windowDimensions };
  Se.__workletHash = 12220613662042;
  Se.__initData = closure_22;
  function ve(landscape, landscape2) {
    landscape = undefined;
    if (landscape2 != null) {
      landscape = landscape2.landscape;
    }
    if (landscape.landscape !== landscape) {
      applicationId(4217).runOnJS(callback1)(landscape.landscape, gridOrientationLockState, closure_16);
      const obj = applicationId(4217);
    }
    applicationId(4217).runOnJS(callback2)();
  }
  const tmp8Result6 = applicationId(4217);
  ve.__closure = { runOnJS: applicationId(4217).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  ve.__workletHash = 13125606009235;
  ve.__initData = callback2;
  const animatedReaction2 = tmp8Result6.useAnimatedReaction(Se, ve);
  const tmp39 = !sharedVisible(9542)();
  closure_24 = tmp39;
  backgroundColor = tmp.activityContainerBackground.backgroundColor;
  const obj2 = { runOnJS: applicationId(4217).runOnJS, handleTargetAspectRatioParams: callback1, gridOrientationLockState, hasJoined: tmp21, updateNotJoinedActivityDimensions: callback2 };
  class Te {
    constructor() {
      num = 0;
      if (hideControls) {
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
        tmp5 = gridOrientationLockState;
        tmp3 = closure_15 === gridOrientationLockState.LANDSCAPE;
      }
      if (tmp3) {
        tmp3 = !landscape;
      }
      if (tmp2) {
        tmp6 = closure_15;
        tmp7 = gridOrientationLockState;
        tmp2 = closure_15 === gridOrientationLockState.PORTRAIT;
      }
      if (tmp2) {
        tmp2 = landscape;
      }
      if (tmp3) {
        tmp9 = guild_id;
        num5 = 2;
        num3 = (height - width * guild_id) / 2;
        num2 = 0;
      } else {
        num2 = 0;
        num3 = 0;
        if (tmp2) {
          tmp8 = guild_id;
          num4 = 2;
          num2 = (width - height * guild_id) / 2;
          num3 = 0;
        }
      }
      tmp10 = closure_18;
      num6 = 1;
      if (closure_18) {
        num6 = 0;
      }
      obj = { flex: num6, backgroundColor, paddingVertical: num3, paddingHorizontal: num2, width: null, height: null, maxHeight: "100%", maxWidth: "100%" };
      str = "auto";
      str2 = "auto";
      if (tmp10) {
        str2 = width;
      }
      obj[4] = str2;
      if (tmp10) {
        str = height - num;
      }
      obj[5] = str;
      return obj;
    }
  }
  Te.__closure = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_PORTRAIT_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  Te.__workletHash = 12598621298206;
  Te.__initData = closure_24;
  const animatedStyle = applicationId(4217).useAnimatedStyle(Te);
  const obj3 = { IS_IOS: hideControls, animatedKeyboardHeight: tmp7, windowDimensions, shouldLetterboxOrientationLock: tmp39, focusedOrientationLockState, OrientationLockState: gridOrientationLockState, ACTIVITY_PORTRAIT_ASPECT_RATIO: guild_id, isActivityFocused: first1, backgroundColor };
  const tmp8Result7 = applicationId(4217);
  const items11 = [mode];
  const items12 = [controlsSpecs, first1, hideControls];
  const stateFromStores2 = applicationId(586).useStateFromStores(items11, () => mode.getShowActivitiesDebugOverlay());
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmp21) {
      const obj4 = { gesture: null, children: null };
      obj4[0] = tmp42;
      const obj5 = { layout: null, pointerEvents: null, style: null, children: null };
      obj5[0] = applicationId.layout;
      let str = "none";
      tmp4Result = tmp4(7808);
      if (first1) {
        str = "auto";
      }
      obj5[1] = str;
      obj5[2] = animatedStyle;
      const obj6 = { channelId: null, activityName: null, isActivityFocused: null, children: null };
      obj6[0] = channelId;
      let name;
      if (first != null) {
        name = first.name;
      }
      obj6[1] = name;
      obj6[2] = first1;
      const obj7 = { channel: null, layoutMode: null };
      obj7[0] = stateFromStores;
      obj7[1] = tmp43;
      obj6[3] = focusedOrientationLockState(tmp4(9621), obj7, tmp3[0]);
      const items13 = [focusedOrientationLockState(tmp4(16980), obj6), ];
      let tmp47Result = null;
      if (stateFromStores2) {
        tmp47Result = tmp47(tmp4(16981), {});
      }
      items13[1] = tmp47Result;
      obj5[3] = items13;
      obj4[1] = closure_16(tmp4Result, obj5);
      tmp47Result = tmp47(tmp8(5661).GestureDetector, obj4);
      let tmp44 = tmp47;
      const tmp48 = closure_16;
      const tmp4Result1 = tmp4(16980);
    } else if (null == activityShelfItemData) {
      const obj8 = { activity: null, application: null };
      obj8[0] = stateFromStores1;
      obj8[1] = first;
      tmp47Result = focusedOrientationLockState(tmp4(16982), obj8);
      tmp44 = focusedOrientationLockState;
    } else {
      tmp44 = focusedOrientationLockState;
      const obj9 = { gesture: null, children: null };
      obj9[0] = memo1;
      const obj10 = { context: null, guildId: null, activityItem: null, locationObject: null, itemDimensions: null, disableBadges: true };
      obj10[0] = memo;
      obj10[1] = stateFromStores.guild_id;
      obj10[2] = activityShelfItemData;
      obj10[3] = analyticsContext.location;
      obj10[4] = tmp2Result[0];
      obj9[1] = focusedOrientationLockState(tmp4(16986), obj10);
      tmp47Result = focusedOrientationLockState(tmp8(5661).GestureDetector, obj9);
    }
    const obj11 = { value: null, children: null };
    obj11[0] = tmp4Result(tmp4(5982).ACTIVITY_TILE).analyticsLocations;
    obj11[1] = tmp47Result;
    return tmp44(tmp8(5962).AnalyticsLocationProvider, obj11);
  }
  const tmp8Result8 = applicationId(586);
}
let c4 = importAllResult;
({ IS_IOS: closure_8, VoicePanelModes: c9 } = VoicePanelModes);
({ ACTIVITY_PORTRAIT_ASPECT_RATIO: closure_12, ActivityLayoutMode: map1, OrientationLockState: closure_14 } = items3);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { activityContainerBackground: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[0] = obj;
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { code: "function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}" };
let closure_19 = { code: "function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}" };
let closure_20 = { code: "function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}" };
let closure_21 = { code: "function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}" };
let closure_22 = { code: "function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_23 = { code: "function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}" };
let closure_24 = { code: "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,shouldLetterboxOrientationLock,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=shouldLetterboxOrientationLock&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto',maxHeight:'100%',maxWidth:'100%'};}" };
let closure_25 = { code: "function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}" };
const memoResult = importAllResult.memo(function VoicePanelAnimatedActivityCard(arg0) {
  let obj = { theme: ThemeTypes.DARK, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[1] = callback(VoicePanelAnimatedActivityCardInner, obj);
  return callback(ManaContext.ThemeContextProvider, obj);
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx");

export default memoResult;