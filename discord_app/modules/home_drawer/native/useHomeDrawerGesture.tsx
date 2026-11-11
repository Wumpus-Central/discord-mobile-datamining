// discord_app/modules/home_drawer/native/useHomeDrawerGesture.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../_runtime/05535_LegacyBaseButton.js";
import useLaunchPadTypeDefault from "../../launchpad/native/useLaunchPadType.tsx";
import HomeDrawerAnimations from "HomeDrawerAnimations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import HomeDrawerStore from "HomeDrawerStore.tsx";
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore.tsx";

const require = globalThis.__r;

require = fn;
let computeMaxX = fn(18612).computeMaxX;
const AnalyticEvents = fn(1072).AnalyticEvents;
const GestureConstants = fn(11949);
({
  FLING_MIN_DISTANCE: closure_9,
  FLING_MIN_VELOCITY: closure_10,
  PULL_GESTURE_ACTIVATION_DISTANCE: closure_11,
  PULL_GESTURE_RESISTANCE,
} = GestureConstants);
({ PULL_GESTURE_SNAP_TIMING: map1, PULL_GESTURE_UNSNAP_TIMING: closure_14 } = GestureConstants);
const LaunchPadTypes = fn(12313).LaunchPadTypes;
let c16 = 144;
let result = 144 * (1 - 1 / PULL_GESTURE_RESISTANCE);
let closure_18 = 48 + result;
let closure_19 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_20 = {
  code: "(function useHomeDrawerGestureTsx1(){let[gestureState,dragOffsetX,INITIAL_OPEN_WIDTH]=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;})",
};
let closure_21 = {
  code: "(function useHomeDrawerGestureTsx2(){let[isSnappedOpen]=this.__closure;return isSnappedOpen.get();})",
};
let closure_22 = {
  code: "(function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){let[gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,PULL_GESTURE_SNAP_TIMING,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,PULL_GESTURE_UNSNAP_TIMING,hasThrown,snappedByDrag]=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,PULL_GESTURE_SNAP_TIMING,'animate-always'));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING,'animate-always'));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);})",
};
let closure_23 = {
  code: "(function useHomeDrawerGestureTsx4(){let[panelX,snapX,peekX]=this.__closure;return panelX.get()+snapX.get()+peekX.get();})",
};
let closure_24 = {
  code: "(function useHomeDrawerGestureTsx5(){let[panelTranslateX]=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};})",
};
let closure_25 = {
  code: "(function useHomeDrawerGestureTsx6(){let[isOpenTarget,isPanelTouchActive,panelTranslateX]=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;})",
};
let closure_26 = {
  code: "(function useHomeDrawerGestureTsx7(isPullDone){let[isPullActive]=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}})",
};
let closure_27 = {
  code: "(function useHomeDrawerGestureTsx8(){let[panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE]=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;})",
};
let closure_28 = {
  code: "(function useHomeDrawerGestureTsx9(){let[accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE]=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);})",
};
let closure_29 = {
  code: "(function useHomeDrawerGestureTsx10(){let[guildsBarPullX]=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};})",
};
let closure_30 = {
  code: "(function visualPanelX_useHomeDrawerGestureTsx11(){let[panelX,isSnappedOpen,SNAP_OPEN_DISTANCE]=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);})",
};
let closure_31 = {
  code: "(function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){let[isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,scheduleOnRN,setHomeDrawerState]=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));scheduleOnRN(setHomeDrawerState,shouldOpen);})",
};
let closure_32 = {
  code: "(function fireThrow_useHomeDrawerGestureTsx13(){let[hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING]=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));})",
};
let closure_33 = {
  code: "(function beginDrag_useHomeDrawerGestureTsx14(touchX){let[panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START]=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});})",
};
let closure_34 = {
  code: "(function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){let[visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX]=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;})",
};
let closure_35 = {
  code: "(function useHomeDrawerGestureTsx16(event){let[isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX]=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});})",
};
let closure_36 = {
  code: "(function useHomeDrawerGestureTsx17(event,manager){let[gestureState,isOpenTarget,PULL_GESTURE_ACTIVATION_DISTANCE,beginDrag]=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<PULL_GESTURE_ACTIVATION_DISTANCE){return;}beginDrag(touchX);manager.activate();})",
};
let closure_37 = {
  code: "(function useHomeDrawerGestureTsx18(event){let[gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,PULL_GESTURE_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow]=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/PULL_GESTURE_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}})",
};
let closure_38 = {
  code: "(function useHomeDrawerGestureTsx19(event){let[activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction]=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen;if(isOpeningFling){shouldOpen=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen=false;scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){scheduleOnRN(trackServerDrawerInteract,ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){scheduleOnRN(trackServerDrawerInteract,ServerDrawerInteractAction.PEEK);}})",
};
let closure_39 = {
  code: "(function useHomeDrawerGestureTsx20(){let[gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,scheduleOnRN,noteInteraction,dragOffsetX,activationOffsetX]=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);scheduleOnRN(noteInteraction);gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);})",
};
let obj = {
  gesture: null,
  panelStyles: null,
  gestureState: null,
  panelX: null,
  panelTranslateX: null,
  guildsBarDrawerStyle: null,
  guildsBarPullX: null,
};
let Gesture = fn(5535).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
let ReanimatedHelperTypes = fn(7782);
obj.gestureState = ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
ReanimatedHelperTypes = fn(7782);
obj.panelX = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7782);
obj.panelTranslateX = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.guildsBarDrawerStyle = {};
ReanimatedHelperTypes = fn(7782);
obj.guildsBarPullX = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export function useHomeGesture() {
  const MobileHomeDrawerExperiment = require("HomeDrawerExperiment").MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  ({ enableHome, landOnHome } = config);
  _require = landOnHome;
  let tmp4 = HomeDrawerStore();
  const panelX = tmp4.panelX;
  const snapX = tmp4.snapX;
  const isOpenTarget = tmp4.isOpenTarget;
  const gestureState = tmp4.gestureState;
  noop = gestureState;
  const updateMaxX = tmp4.updateMaxX;
  const maxX = tmp4.maxX;
  const setPanelX = tmp4.setPanelX;
  const isPanelTouchActive = tmp4.isPanelTouchActive;
  const noteInteraction = tmp4.noteInteraction;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const obj2 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj3 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj4 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue4 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj5 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue5 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const obj6 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue6 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj7 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue7 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj8 = require("../../../../_runtime/metro/01652__.js");
  const navigation = require("Link").useNavigation();
  const callback = noop.useCallback((action) => {
    panelX(_undefined2[10]).track(_undefined5.SERVER_DRAWER_INTERACT, { action });
  }, []);
  const obj9 = require("Link");
  items = [derivedValue, gestureState, sharedValue, sharedValue6];
  _require = undefined;
  [tmp14, tmp15, tmp16, tmp17] = items;
  function useHomeDrawerGestureTsx1() {
    let tmp = 0 === _undefined.get().panelX;
    if (tmp) {
      tmp = panelX.get() >= c2;
    }
    return tmp;
  }
  let items1 = [tmp15, tmp16, tmp17];
  useHomeDrawerGestureTsx1.__closure = items1;
  useHomeDrawerGestureTsx1.__workletHash = 3177392550602;
  useHomeDrawerGestureTsx1.__initData = tmp14;
  derivedValue = require("../../../../_runtime/metro/01652__.js").useDerivedValue(useHomeDrawerGestureTsx1);
  const obj12 = require("../../../../_runtime/metro/01652__.js");
  let items2 = [closure_21, derivedValue];
  _require = undefined;
  [tmp19, tmp20] = items2;
  function useHomeDrawerGestureTsx2() {
    return _undefined.get();
  }
  let items3 = [tmp20];
  useHomeDrawerGestureTsx2.__closure = items3;
  useHomeDrawerGestureTsx2.__workletHash = 2182322128830;
  useHomeDrawerGestureTsx2.__initData = tmp19;
  let items4 = [
    closure_22,
    gestureState,
    sharedValue3,
    snapX,
    require("timing/timing").withTiming,
    sharedValue7,
    sharedValue3,
    require("../../../../_runtime/metro/01705__.js").scheduleOnRN,
    require("HapticUtils").triggerHapticFeedback,
    require("HapticUtils").HapticFeedbackTypes,
    sharedValue5,
    sharedValue4,
    sharedValue7,
    sharedValue6,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  HomeDrawerStore = undefined;
  computeMaxX = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items4;
  function useHomeDrawerGestureTsx3(arg0, arg1) {
    if (_undefined.get().active) {
      if (null !== arg1) {
        if (arg0 !== arg1) {
          if (arg0) {
            result = panelX.set(true);
            const result1 = _undefined2.set(_undefined3(c4, c5, "animate-always"));
            _undefined4(c7, _undefined5.IMPACT_MEDIUM);
          } else if (panelX.get()) {
            const result2 = _undefined6.set(_undefined3(0, c10));
            const result3 = _undefined7.set(false);
            const result4 = _undefined8.set(false);
            const result5 = _undefined2.set(_undefined3(0, c10, "animate-always"));
            _undefined4(c7, _undefined5.SOFT);
          }
          return tmp18;
        }
      }
    }
  }
  let items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  useHomeDrawerGestureTsx3.__closure = items5;
  useHomeDrawerGestureTsx3.__workletHash = 16083884898345;
  useHomeDrawerGestureTsx3.__initData = tmp22;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    useHomeDrawerGestureTsx2,
    useHomeDrawerGestureTsx3,
  );
  const tmp37 = useWindowDimensionsDefault();
  closure_21 = tmp37;
  const tmp38 = useSafeAreaInsetsDefault();
  closure_22 = tmp38;
  const tmp39 = useLaunchPadTypeDefault();
  if (enableHome) {
    enableHome = !tmp40;
  }
  if (enableHome) {
    enableHome = !useChatLayoutDefault().isChatBesideChannelList;
  }
  const tmp21 = sharedValue7;
  tmp40 = tmp39 === sharedValue5.GESTURE_FULL || tmp39 === sharedValue5.GESTURE_EDGE;
  const tmpResult = require("../../../../_runtime/metro/01652__.js");
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult11.useIsFocused();
  }
  tmpResult11 = require("Link");
  const sharedValue8 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmpResult12 = require("../../../../_runtime/metro/01652__.js");
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = require("useHomeDrawerPeekHint").useHomeDrawerPeekHint(enablePeekHint, sharedValue8);
  state = navigation.getState();
  const tmpResult13 = require("useHomeDrawerPeekHint");
  let tmp45;
  if (state != null) {
    let routes = state.routes;
    if (routes != null) {
      let num;
      if (state != null) {
        num = state.index;
      }
      if (num == null) {
        num = 0;
      }
      tmp45 = routes[num];
    }
  }
  let coerceGuildsRouteResult = require("NavigationRouteUtils").coerceGuildsRoute(tmp45);
  let tmp47 = enableHome;
  if (enableHome) {
    let drawerOpen;
    if (coerceGuildsRouteResult != null) {
      let params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (drawerOpen == null) {
      drawerOpen = landOnHome;
    }
    tmp47 = drawerOpen;
  }
  drawerOpen = tmp47;
  let num2 = 0;
  if (tmp47) {
    num2 = computeMaxX(tmp37, tmp38);
  }
  let items6 = [tmp37, tmp38, updateMaxX, enableHome];
  const effect = obj11.useEffect(() => {
    if (enableHome) {
      _undefined(closure_21, closure_22);
    } else {
      _undefined({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items6);
  let items7 = [enableHome, panelX, snapX, isOpenTarget];
  const effect1 = obj11.useEffect(() => {
    if (!enableHome) {
      result = panelX.set(0);
      const result1 = _undefined2.set(0);
      const result2 = _undefined3.set(false);
      NavigationRouteUtils.setHomeDrawerState(false);
    }
  }, items7);
  let items8 = [navigation, setPanelX, enableHome];
  const effect2 = obj11.useEffect(() => {
    function handleStateChange(data) {
      state = data.data.state;
      let tmp;
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          let num;
          if (state != null) {
            num = state.index;
          }
          if (num == null) {
            num = 0;
          }
          tmp = routes[num];
        }
      }
      const coerceGuildsRouteResult = handleStateChange(dependencyMap[19]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        if (enableHome) {
          const params = coerceGuildsRouteResult.params;
          drawerOpen = undefined;
          if (params != null) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          if (true === drawerOpen) {
            str = "open";
          }
          state(str);
          const state1 = state.getState();
          if (true === drawerOpen) {
            state1.startTimer();
          } else {
            state1.stopTimer();
          }
        }
      }
      const obj = handleStateChange(dependencyMap[19]);
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
      state = HomeDrawerSubtitleStore.getState();
      state.stopTimer();
    };
  }, items8);
  const tmpResult14 = require("NavigationRouteUtils");
  let items9 = [enableHome, tmp47, num2, panelX, isOpenTarget];
  const layoutEffect = obj11.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      result = panelX.set(num2);
      const result1 = _undefined3.set(true === drawerOpen);
      if (drawerOpen) {
        state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items9);
  const ref = noop.useRef(false);
  let items10 = [enableHome, panelX, snapX, sharedValue8];
  _require = undefined;
  [tmp54, tmp55, tmp56, tmp57] = items10;
  function useHomeDrawerGestureTsx4() {
    value = _undefined.get();
    const sum = value + panelX.get();
    return sum + _undefined2.get();
  }
  let items11 = [tmp55, tmp56, tmp57];
  useHomeDrawerGestureTsx4.__closure = items11;
  useHomeDrawerGestureTsx4.__workletHash = 13135043941592;
  useHomeDrawerGestureTsx4.__initData = tmp54;
  const derivedValue1 = require("../../../../_runtime/metro/01652__.js").useDerivedValue(useHomeDrawerGestureTsx4);
  const tmpResult15 = require("../../../../_runtime/metro/01652__.js");
  let items12 = [isFocused, derivedValue1];
  _require = undefined;
  [tmp59, tmp60] = items12;
  function useHomeDrawerGestureTsx5() {
    const obj = { transform: null };
    items = [{ translateX: _undefined.get() }];
    obj.transform = items;
    return obj;
  }
  let items13 = [tmp60];
  useHomeDrawerGestureTsx5.__closure = items13;
  useHomeDrawerGestureTsx5.__workletHash = 3831081045453;
  useHomeDrawerGestureTsx5.__initData = tmp59;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(useHomeDrawerGestureTsx5);
  const tmpResult16 = require("../../../../_runtime/metro/01652__.js");
  let items14 = [drawerOpen, isOpenTarget, isPanelTouchActive, derivedValue1];
  [tmp62, tmp63, tmp64, tmp65] = items14;
  function useHomeDrawerGestureTsx6() {
    value = _undefined.get();
    if (!value) {
      const value2 = panelX.get();
      let tmp4 = !value2;
      if (!value2) {
        tmp4 = _undefined2.get() <= 0;
      }
      value = tmp4;
    }
    return value;
  }
  let items15 = [tmp63, tmp64, tmp65];
  useHomeDrawerGestureTsx6.__closure = items15;
  useHomeDrawerGestureTsx6.__workletHash = 10136721116202;
  useHomeDrawerGestureTsx6.__initData = tmp62;
  let items16 = [num2, sharedValue4];
  _require = undefined;
  [tmp66, tmp67] = items16;
  function useHomeDrawerGestureTsx7(arg0) {
    value = arg0;
    if (arg0) {
      value = _undefined.get();
    }
    if (value) {
      result = _undefined.set(false);
    }
  }
  let items17 = [tmp67];
  useHomeDrawerGestureTsx7.__closure = items17;
  useHomeDrawerGestureTsx7.__workletHash = 818068477594;
  useHomeDrawerGestureTsx7.__initData = tmp66;
  const animatedReaction1 = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    useHomeDrawerGestureTsx6,
    useHomeDrawerGestureTsx7,
  );
  const tmpResult17 = require("../../../../_runtime/metro/01652__.js");
  let items18 = [ref, derivedValue1, sharedValue4, navigation, 48, tmp21];
  _require = undefined;
  [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74] = items18;
  function useHomeDrawerGestureTsx8() {
    value = _undefined.get();
    let num = 0;
    if (panelX.get()) {
      num = 0;
      if (value > 0) {
        num = 0;
        if (value < c2) {
          if (value < c3) {
            result = value / c3;
          } else {
            result = 1 - (value - c3) / c4;
          }
        }
      }
    }
    return num;
  }
  let items19 = [tmp70, tmp71, tmp72, tmp73, tmp74];
  useHomeDrawerGestureTsx8.__closure = items19;
  useHomeDrawerGestureTsx8.__workletHash = 4744333108989;
  useHomeDrawerGestureTsx8.__initData = tmp69;
  const derivedValue2 = require("../../../../_runtime/metro/01652__.js").useDerivedValue(useHomeDrawerGestureTsx8);
  const tmpResult18 = require("../../../../_runtime/metro/01652__.js");
  const items20 = [
    derivedValue1,
    require("reanimated/AccessibilityPreferencesSharedValue").accessibilityPreferencesSharedValue,
    derivedValue2,
    12,
    sharedValue5,
    16,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81] = items20;
  function useHomeDrawerGestureTsx9() {
    let num = 0;
    if (!_undefined.get().reduceMotion) {
      const _Math = Math;
      result = panelX.get() * c2;
      num = Math.max(result, _undefined3.get() * c4);
    }
    return num;
  }
  const items21 = [tmp77, tmp78, tmp79, tmp80, tmp81];
  useHomeDrawerGestureTsx9.__closure = items21;
  useHomeDrawerGestureTsx9.__workletHash = 7013202740043;
  useHomeDrawerGestureTsx9.__initData = tmp76;
  const derivedValue3 = require("../../../../_runtime/metro/01652__.js").useDerivedValue(useHomeDrawerGestureTsx9);
  const tmpResult19 = require("../../../../_runtime/metro/01652__.js");
  const items22 = [animatedStyle, derivedValue3];
  _require = undefined;
  [tmp83, tmp84] = items22;
  function useHomeDrawerGestureTsx10() {
    const obj = { transform: null };
    items = [{ translateX: _undefined.get() }];
    obj.transform = items;
    return obj;
  }
  const items23 = [tmp84];
  useHomeDrawerGestureTsx10.__closure = items23;
  useHomeDrawerGestureTsx10.__workletHash = 3575476532345;
  useHomeDrawerGestureTsx10.__initData = tmp83;
  const guildsBarDrawerStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    useHomeDrawerGestureTsx10,
  );
  const items24 = [
    gestureState,
    panelX,
    snapX,
    isOpenTarget,
    sharedValue2,
    sharedValue3,
    derivedValue,
    sharedValue4,
    derivedValue2,
    sharedValue5,
    sharedValue6,
    sharedValue7,
    sharedValue,
    sharedValue1,
    isFocused,
    maxX,
    isPanelTouchActive,
    noteInteraction,
    callback,
  ];
  const memo = obj11.useMemo(() => {
    items = [closure_30, c1, derivedValue, result];
    [tmp3, tmp4, tmp5, tmp6] = items;
    function visualPanelX() {
      value = _undefined.get();
      let num = 0;
      if (_undefined2.get()) {
        num = c2;
      }
      return value + num;
    }
    const items1 = [tmp4, tmp5, tmp6];
    visualPanelX.__closure = items1;
    visualPanelX.__workletHash = 2869044857423;
    visualPanelX.__initData = tmp3;
    const items2 = [
      closure_31,
      c3,
      c1,
      timing_timing.withTiming,
      c6,
      HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING,
      c2,
      _mod1705.scheduleOnRN,
      NavigationRouteUtils.setHomeDrawerState,
    ];
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
    function settleDrawer(arg0) {
      result = _undefined.set(arg0);
      let num = 0;
      if (arg0) {
        num = c3;
      }
      const result1 = _undefined2.set(_undefined3(num, c4, "animate-always"));
      const result2 = _undefined6.set(_undefined3(0, c4, "animate-always"));
      _undefined7(c7, arg0);
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    settleDrawer.__closure = items3;
    settleDrawer.__workletHash = 14466862505699;
    settleDrawer.__initData = tmp12;
    const items4 = [
      closure_32,
      sharedValue7,
      sharedValue4,
      sharedValue5,
      _mod1652.clamp,
      derivedValue2,
      12,
      16,
      _mod1652.withSequence,
      timing_timing.withTiming,
      HomeDrawerAnimations.HOME_DRAWER_FLING_THROW_TIMING,
      HomeDrawerAnimations.HOME_DRAWER_FLING_RETURN_TIMING,
    ];
    c1 = undefined;
    c2 = undefined;
    c4 = undefined;
    c6 = undefined;
    c8 = undefined;
    c10 = undefined;
    [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items4;
    function fireThrow() {
      value = _undefined.get();
      let value2 = !value;
      if (!value) {
        value2 = _undefined2.get();
      }
      if (value2) {
        result = _undefined.set(true);
        const result1 = _undefined3.set(_undefined4((_undefined5.get() * c5) / c6, 0, 1));
        const result2 = _undefined3.set(_undefined8(_undefined9(1, c9), _undefined9(0, c10)));
        const tmp14 = _undefined9(1, c9);
      }
    }
    const items5 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
    fireThrow.__closure = items5;
    fireThrow.__workletHash = 10972527810867;
    fireThrow.__initData = tmp24;
    const items6 = [closure_33, c1, c2, c11, c4, sharedValue4, 16];
    [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items6;
    function beginDrag(initialX) {
      value = _undefined.get();
      const sum = value + _undefined2.get();
      result = _undefined3.set(initialX - _undefined4.get().initialX);
      const result1 = _undefined5.set(sum < c5);
      const result2 = _undefined.set(sum);
      const result3 = _undefined2.set(0);
      const obj = {};
      const merged = Object.assign(_undefined4.get());
      obj.active = true;
      obj.initialX = initialX;
      obj.panelX = sum;
      const result4 = _undefined4.set(obj);
    }
    const items7 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
    beginDrag.__closure = items7;
    beginDrag.__workletHash = 29697990201;
    beginDrag.__initData = tmp38;
    const items8 = [closure_34, visualPanelX, 0.5, c6, c16, c10];
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52] = items8;
    function shouldOpenFromPosition() {
      const tmp = _undefined();
      let tmp2 = 0 !== tmp;
      if (tmp2) {
        let tmp5 = tmp > c1 * c2;
        if (!tmp5) {
          let tmp7 = tmp >= c3;
          if (tmp7) {
            tmp7 = _undefined5.get() > 0;
          }
          tmp5 = tmp7;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    }
    const items9 = [tmp48, tmp49, tmp50, tmp51, tmp52];
    shouldOpenFromPosition.__closure = items9;
    shouldOpenFromPosition.__workletHash = 345325928396;
    shouldOpenFromPosition.__initData = tmp47;
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let tmp2 = result;
    let tmp7 = c3;
    const enabledResult = Gesture.Pan().enabled(isFocused);
    result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const items10 = [
      closure_35,
      c8,
      c10,
      c11,
      c12,
      sharedValue3,
      sharedValue6,
      sharedValue7,
      sharedValue5,
      timing_timing.withTiming,
      HomeDrawerAnimations.HOME_DRAWER_FLING_RETURN_TIMING,
      c4,
      c1,
      c2,
    ];
    c4 = undefined;
    c8 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69] = items10;
    function useHomeDrawerGestureTsx16(absoluteX) {
      result = _undefined.set(true);
      const result1 = _undefined2.set(0);
      const result2 = _undefined3.set(0);
      const result3 = _undefined4.set(false);
      const result4 = _undefined5.set(false);
      const result5 = _undefined6.set(false);
      const result6 = _undefined7.set(false);
      const result7 = _undefined8.set(_undefined9(0, c9));
      const obj = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      value = _undefined12.get();
      obj.panelX = value + _undefined13.get();
      const result8 = _undefined11.set(obj);
    }
    const items11 = [tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69];
    useHomeDrawerGestureTsx16.__closure = items11;
    useHomeDrawerGestureTsx16.__workletHash = 10665906887596;
    useHomeDrawerGestureTsx16.__initData = tmp56;
    const maxPointersResult = result.maxPointers(1);
    const tmp53 = c8;
    const items12 = [closure_36, c4, tmp7, closure_2_11, beginDrag];
    c1 = undefined;
    c2 = undefined;
    [tmp70, tmp71, tmp72, tmp73, tmp74] = items12;
    function useHomeDrawerGestureTsx17(arg0, activate) {
      if (!_undefined.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - _undefined.get().initialX);
        const _Math2 = Math;
        const absolute1 = Math.abs(arg0.changedTouches[0].absoluteY - _undefined.get().initialY);
        value = _undefined2.get();
        if (absolute1 <= absolute) {
          if (value) {
            if (absolute >= c2) {
              _undefined4(absoluteX);
              activate.activate();
            }
          }
        }
        activate.fail();
      }
    }
    const items13 = [tmp71, tmp72, tmp73, tmp74];
    useHomeDrawerGestureTsx17.__closure = items13;
    useHomeDrawerGestureTsx17.__workletHash = 9129637106834;
    useHomeDrawerGestureTsx17.__initData = tmp70;
    const onBeginResult = result.maxPointers(1).onBegin(useHomeDrawerGestureTsx16);
    const items14 = [closure_37, c4, c10, c1, c2, c16, PULL_GESTURE_RESISTANCE, tmp2, 48, 400, sharedValue6, fireThrow];
    c4 = undefined;
    c10 = undefined;
    [tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86] = items14;
    function useHomeDrawerGestureTsx18(absoluteX) {
      if (_undefined.get().active) {
        const diff = absoluteX.absoluteX - _undefined.get().initialX;
        result = _undefined2.set(diff);
        value = _undefined3.get();
        const sum = value + _undefined4.get();
        if (0 === _undefined.get().panelX) {
          if (diff >= 0) {
            if (diff < c4) {
              let result1 = diff / c5;
            } else {
              result1 = diff - c6;
            }
            const result2 = _undefined3.set(result1);
          }
        }
        const _Math = Math;
        const result3 = _undefined3.set(Math.max(diff + _undefined.get().panelX, 0));
        let tmp15 = sum < c7;
        if (tmp15) {
          const value2 = _undefined3.get();
          tmp15 = value2 + _undefined4.get() >= tmp14;
        }
        if (tmp15) {
          if (absoluteX.velocityX <= c8) {
            const result4 = _undefined10.set(true);
          } else if (!_undefined10.get()) {
            _undefined11();
          }
        }
      }
    }
    const items15 = [tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86];
    useHomeDrawerGestureTsx18.__closure = items15;
    useHomeDrawerGestureTsx18.__workletHash = 17074708416812;
    useHomeDrawerGestureTsx18.__initData = tmp75;
    const onTouchesMoveResult = result
      .maxPointers(1)
      .onBegin(useHomeDrawerGestureTsx16)
      .onTouchesMove(useHomeDrawerGestureTsx17);
    const items16 = [
      closure_38,
      c11,
      c10,
      closure_2_10,
      React6,
      sharedValue6,
      fireThrow,
      c16,
      _mod1705.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      c12,
      c4,
      callback,
      closure_19,
    ];
    c4 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    c14 = undefined;
    c15 = undefined;
    [
      tmp87,
      tmp88,
      tmp89,
      tmp90,
      tmp91,
      tmp92,
      tmp93,
      tmp94,
      tmp95,
      tmp96,
      tmp97,
      tmp98,
      tmp99,
      tmp100,
      tmp101,
      tmp102,
      tmp103,
    ] = items16;
    function useHomeDrawerGestureTsx19(velocityX) {
      value = _undefined.get();
      const sum = value + _undefined2.get();
      let tmp4 = velocityX.velocityX > c2;
      const value2 = _undefined5.get();
      if (tmp4) {
        tmp4 = sum > c3;
      }
      let tmp7 = tmp4;
      if (tmp4) {
        tmp7 = !value2;
      }
      if (tmp7) {
        _undefined6();
      }
      if (tmp4) {
        let flag = true;
        if (sum < c6) {
          _undefined8(c8, _undefined10.IMPACT_MEDIUM);
          flag = true;
        }
      } else {
        if (velocityX.velocityX < -c2) {
          if (sum < -c3) {
            _undefined8(c8, _undefined10.SOFT);
            flag = false;
          }
        }
        flag = _undefined11();
      }
      _undefined12(flag);
      result = _undefined13.set(true);
      const tmp23 = _undefined14.get().panelX > 0;
      if (flag) {
        if (!tmp23) {
          _undefined8(c14, _undefined15.OPEN);
        }
      }
      if (!tmp23) {
        _undefined8(c14, _undefined15.PEEK);
      }
    }
    const items17 = [
      tmp88,
      tmp89,
      tmp90,
      tmp91,
      tmp92,
      tmp93,
      tmp94,
      tmp95,
      tmp96,
      tmp97,
      tmp98,
      tmp99,
      tmp100,
      tmp101,
      tmp102,
      tmp103,
    ];
    useHomeDrawerGestureTsx19.__closure = items17;
    useHomeDrawerGestureTsx19.__workletHash = 14013089644907;
    useHomeDrawerGestureTsx19.__initData = tmp87;
    const onChangeResult = result
      .maxPointers(1)
      .onBegin(useHomeDrawerGestureTsx16)
      .onTouchesMove(useHomeDrawerGestureTsx17)
      .onChange(useHomeDrawerGestureTsx18);
    const items18 = [
      closure_39,
      c4,
      c12,
      settleDrawer,
      shouldOpenFromPosition,
      tmp53,
      _mod1705.scheduleOnRN,
      c9,
      c10,
      c11,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113] = items18;
    function useHomeDrawerGestureTsx20() {
      let active = _undefined.get().active;
      if (active) {
        active = !_undefined2.get();
      }
      if (active) {
        _undefined3(_undefined4());
      }
      result = _undefined5.set(false);
      _undefined6(c6);
      const result1 = _undefined.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = _undefined8.set(0);
      const result3 = _undefined9.set(0);
    }
    const items19 = [tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113];
    useHomeDrawerGestureTsx20.__closure = items19;
    useHomeDrawerGestureTsx20.__workletHash = 4642709264773;
    useHomeDrawerGestureTsx20.__initData = tmp104;
    return result
      .maxPointers(1)
      .onBegin(useHomeDrawerGestureTsx16)
      .onTouchesMove(useHomeDrawerGestureTsx17)
      .onChange(useHomeDrawerGestureTsx18)
      .onEnd(useHomeDrawerGestureTsx19)
      .onFinalize(useHomeDrawerGestureTsx20);
  }, items24);
  const first = _slicedToArray(
    obj11.useState(() => ({
      gesture: memo,
      panelStyles: animatedStyle,
      gestureState,
      panelX,
      panelTranslateX: derivedValue1,
      guildsBarDrawerStyle,
      guildsBarPullX: derivedValue3,
    })),
    1,
  )[0];
  const items25 = [first, memo];
  const memo1 = obj11.useMemo(() => {
    const obj = {};
    const merged = Object.assign(first);
    obj.gesture = memo;
    return obj;
  }, items25);
  const items26 = [memo1, enableHome, landOnHome];
  const tmpResult20 = require("../../../../_runtime/metro/01652__.js");
  return {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: noop.useMemo(() => {
      const obj = { homeDrawerState: memo1, enableHome, landOnHome: null };
      let tmp = enableHome;
      if (enableHome) {
        tmp = c0;
      }
      obj.landOnHome = tmp;
      return obj;
    }, items26),
  };
}
export const HomeDrawerStateContext = context;
export function useHomeDrawerState() {
  return noop.useContext(context).homeDrawerState;
}
export function useIsHomeDrawerEnabled() {
  return noop.useContext(context).enableHome;
}
export function useDoesLandOnHomeDrawer() {
  return noop.useContext(context).landOnHome;
}
