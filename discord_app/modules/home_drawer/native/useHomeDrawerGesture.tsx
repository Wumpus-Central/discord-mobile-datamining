// === Module 15020: context ===

// Module 15020 (context)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import withEqualityFn from "withEqualityFn";
import { computeMaxX } from "withEqualityFn";
import keys from "keys";
import { AnalyticEvents } from "ME";
import { Gesture } from "Directions";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";

const require = arg1;
let c4 = importAllResult;
let c9 = 144;
let closure_10 = { mass: 0.3, damping: 30, stiffness: 400 };
let obj = { mass: 0.4, damping: 100, stiffness: 250 };
let c12 = 48;
let closure_13 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_14 = { code: "function useHomeDrawerGestureTsx1(){const{dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let closure_15 = { code: "function useHomeDrawerGestureTsx2(isOpen,wasOpen){const{gestureState,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasOpen===null){return;}if(isOpen===wasOpen){return;}if(isOpen){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}" };
let closure_16 = { code: "function useHomeDrawerGestureTsx3(){const{panelX,peekX}=this.__closure;return panelX.get()+peekX.get();}" };
let closure_17 = { code: "function useHomeDrawerGestureTsx4(){const{isDrawerInitialized,initialPanelX,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;if(!isDrawerInitialized.get()){return initialPanelX;}return withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always');}" };
let closure_18 = { code: "function useHomeDrawerGestureTsx5(){const{panelGestureSpringX,peekX}=this.__closure;return panelGestureSpringX.get()+peekX.get();}" };
let closure_19 = { code: "function useHomeDrawerGestureTsx6(){const{safeAreaInsets,panelSpringTranslateX}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:panelSpringTranslateX.get()}]};}" };
let closure_20 = { code: "function useHomeDrawerGestureTsx7(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,GUILD_LABEL_UNSNAPPED_SCALE,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+drawerRevealX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);const scale=drawerRevealX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH?1:GUILD_LABEL_UNSNAPPED_SCALE;return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)},{scale:withSpring(scale,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}" };
let closure_21 = { code: "function useHomeDrawerGestureTsx8(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}" };
let closure_22 = { code: "function useHomeDrawerGestureTsx9(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}" };
let closure_23 = { code: "function settleDrawer_useHomeDrawerGestureTsx10(shouldOpen){const{panelX,maxX,runOnJS,setHomeDrawerState}=this.__closure;panelX.set(shouldOpen?maxX:0);runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_24 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx11(){const{panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;if(panelX.get()===0)return false;if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(panelX.get()>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_25 = { code: "function useHomeDrawerGestureTsx12(){const{panelX,maxX,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,gestureState,dragOffsetX}=this.__closure;if(panelX.get()>0&&panelX.get()<maxX){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}" };
let closure_26 = { code: "function useHomeDrawerGestureTsx13(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_27 = { code: "function useHomeDrawerGestureTsx14(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const basePosition=newXOffset+gestureState.get().panelX;if(gestureState.get().panelX===0&&newXOffset>=0&&newXOffset<INITIAL_OPEN_WIDTH){panelX.set(Math.max(basePosition/DRAWER_RESISTANCE,0));}else{panelX.set(Math.max(basePosition,0));}}" };
let closure_28 = { code: "function useHomeDrawerGestureTsx15(event,manager){const{gestureState,panelX,ACTIVATION_MIN_DISTANCE}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}" };
let closure_29 = { code: "function useHomeDrawerGestureTsx16(event){const{isPanelTouchActive,gestureState,panelX}=this.__closure;isPanelTouchActive.set(true);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}" };
obj = { gesture: null, panelStyles: null, gestureState: null, panelX: null, panelSpringTranslateX: null, guildsBarLabelDrawerStyle: null, guildsBarIconDrawerStyle: null, guildsBarUnreadDrawerStyle: null };
obj[0] = Gesture.Pan();
obj[1] = {};
obj[2] = createFakeSharedValue.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
obj[3] = require("_slicedToArray");
obj[4] = require("_slicedToArray");
obj[5] = {};
obj[6] = {};
obj[7] = {};
const context = importAllResult.createContext({ homeDrawerState: obj, enableHome: false });
let result = require("withEqualityFn").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const HOME_DRAWER_FLING_PHYSICS = obj;
export const useHomeGesture = function useHomeGesture() {
  let enablePeekHint;
  let landOnHome;
  const MobileHomeDrawerExperiment = enableHome(gestureState[5]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  enableHome = config.enableHome;
  ({ enablePeekHint, landOnHome } = config);
  const tmp4 = setPanelX();
  const panelX = tmp4.panelX;
  gestureState = tmp4.gestureState;
  const updateMaxX = tmp4.updateMaxX;
  const maxX = tmp4.maxX;
  setPanelX = tmp4.setPanelX;
  const isPanelTouchActive = tmp4.isPanelTouchActive;
  const noteInteraction = tmp4.noteInteraction;
  let obj = enableHome(gestureState[6]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = enableHome(gestureState[6]);
  const sharedValue1 = obj1.useSharedValue(false);
  let obj2 = enableHome(gestureState[7]);
  const navigation = obj2.useNavigation();
  let obj4 = maxX;
  const callback = maxX.useCallback((action) => {
    let obj = panelX(gestureState[8]);
    obj = { action };
    obj.track(sharedValue.SERVER_DRAWER_INTERACT, obj);
  }, []);
  let obj5 = enableHome(gestureState[6]);
  class W {
    constructor() {
      return closure_8.get() >= outer1_9;
    }
  }
  obj = { dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1 };
  W.__closure = obj;
  W.__workletHash = 2525772891435;
  W.__initData = closure_14;
  class C {
    constructor(arg0, arg1) {
      active = gestureState.get().active;
      if (active) {
        tmp = null;
        active = null !== arg1;
      }
      if (active) {
        active = arg0 !== arg1;
      }
      if (active) {
        tmp2 = enableHome;
        tmp3 = gestureState;
        obj = enableHome(gestureState[6]);
        tmp4 = enableHome;
        tmp5 = gestureState;
        runOnJSResult = obj.runOnJS(enableHome(gestureState[9]).triggerHapticFeedback);
        tmp7 = enableHome;
        tmp8 = gestureState;
        HapticFeedbackTypes = enableHome(gestureState[9]).HapticFeedbackTypes;
        if (arg0) {
          tmp6Result = runOnJSResult(HapticFeedbackTypes.IMPACT_MEDIUM);
        } else {
          tmp6Result1 = runOnJSResult(HapticFeedbackTypes.SOFT);
        }
      }
      return;
    }
  }
  obj = { gestureState, runOnJS: enableHome(gestureState[6]).runOnJS, triggerHapticFeedback: enableHome(gestureState[9]).triggerHapticFeedback, HapticFeedbackTypes: enableHome(gestureState[9]).HapticFeedbackTypes };
  C.__closure = obj;
  C.__workletHash = 11947599708940;
  C.__initData = isFocused;
  const animatedReaction = obj5.useAnimatedReaction(W, C);
  let tmp9 = panelX(gestureState[10])();
  let c12 = tmp9;
  const tmp10 = panelX(gestureState[11])();
  let closure_13 = tmp10;
  let tmp11 = enableHome;
  if (enableHome) {
    tmp11 = !panelX(gestureState[12])().isChatBesideChannelList;
  }
  closure_14 = tmp11;
  let tmpResult = tmp(tmp2[7]);
  isFocused = tmp11;
  if (tmp11) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = tmp(tmp2[6]);
  const sharedValue2 = tmpResult.useSharedValue(0);
  let tmp14 = tmp11;
  if (tmp11) {
    tmp14 = enablePeekHint;
  }
  const homeDrawerPeekHint = enableHome(gestureState[13]).useHomeDrawerPeekHint(tmp14, sharedValue2);
  const tmpResult1 = enableHome(gestureState[13]);
  function ne() {
    const value = panelX.get();
    return value + sharedValue2.get();
  }
  ne.__closure = { panelX, peekX: sharedValue2 };
  ne.__workletHash = 4654854314200;
  ne.__initData = sharedValue2;
  const derivedValue = enableHome(gestureState[6]).useDerivedValue(ne);
  let state = navigation.getState();
  const tmpResult2 = enableHome(gestureState[6]);
  let tmp18;
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
      tmp18 = routes[num];
    }
  }
  let coerceGuildsRouteResult = enableHome(gestureState[14]).coerceGuildsRoute(tmp18);
  let tmp20 = tmp11;
  if (tmp11) {
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
    tmp20 = drawerOpen;
  }
  let closure_18 = tmp20;
  let num2 = 0;
  if (tmp20) {
    num2 = isPanelTouchActive(tmp9, tmp10);
  }
  let items = [tmp9, tmp10, updateMaxX, tmp11];
  const effect = obj4.useEffect(() => {
    if (closure_14) {
      tmp(closure_12, closure_13);
    } else {
      tmp({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [tmp11, panelX];
  const effect1 = obj4.useEffect(() => {
    if (!closure_14) {
      const result = panelX.set(0);
      enableHome(gestureState[14]).setHomeDrawerState(false);
      const obj = enableHome(gestureState[14]);
    }
  }, items1);
  const items2 = [navigation, setPanelX, tmp11];
  const effect2 = obj4.useEffect(() => {
    function handleStateChange(data) {
      let state = data.data.state;
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
      const coerceGuildsRouteResult = handleStateChange(outer1_2[14]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        if (closure_14) {
          const params = coerceGuildsRouteResult.params;
          let drawerOpen;
          if (params != null) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          if (true === drawerOpen) {
            str = "open";
          }
          withEqualityFn(str);
          state = outer1_7.getState();
          if (true === drawerOpen) {
            state.startTimer();
          } else {
            state.stopTimer();
          }
          const tmp6 = withEqualityFn;
        }
      }
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      outer1_10.removeListener("state", handleStateChange);
      const state = noteInteraction.getState();
      state.stopTimer();
    };
  }, items2);
  let closure_20 = obj4.useRef(false);
  const items3 = [tmp11, tmp20, num2, panelX];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let tmp = closure_14;
    if (closure_14) {
      tmp = !ref.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      if (closure_18) {
        const state = noteInteraction.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const items4 = [tmp11, sharedValue1];
  const effect3 = obj4.useEffect(() => {
    if (ref.current) {
      const result = sharedValue1.set(true);
    }
  }, items4);
  const tmpResult3 = enableHome(gestureState[14]);
  class Ie {
    constructor() {
      if (closure_9.get()) {
        tmp = enableHome;
        tmp2 = gestureState;
        obj = enableHome(gestureState[15]);
        tmp3 = panelX;
        tmp5 = gestureState;
        value = panelX.get();
        str = "animate-always";
        withSpringResult = obj.withSpring(value, gestureState.get().active ? outer1_10 : useConfig, "animate-always");
      } else {
        return c19;
      }
      return;
    }
  }
  obj1 = { isDrawerInitialized: sharedValue1, initialPanelX: num2, withSpring: tmp(tmp2[15]).withSpring, panelX, gestureState, HOME_GESTURE_DRAG_PHYSICS: navigation, HOME_DRAWER_FLING_PHYSICS: callback };
  Ie.__closure = obj1;
  Ie.__workletHash = 11078734703352;
  Ie.__initData = derivedValue;
  const derivedValue1 = enableHome(gestureState[6]).useDerivedValue(Ie);
  const tmpResult4 = enableHome(gestureState[6]);
  function ge() {
    const value = derivedValue1.get();
    return value + sharedValue2.get();
  }
  ge.__closure = { panelGestureSpringX: derivedValue1, peekX: sharedValue2 };
  ge.__workletHash = 2927026959998;
  ge.__initData = closure_18;
  const derivedValue2 = enableHome(gestureState[6]).useDerivedValue(ge);
  const tmpResult5 = enableHome(gestureState[6]);
  class Se {
    constructor() {
      obj = { flex: 1, marginTop: closure_13.top, transform: null };
      obj = { translateX: closure_22.get() };
      items = [];
      items[0] = obj;
      obj[2] = items;
      return obj;
    }
  }
  Se.__closure = { safeAreaInsets: tmp10, panelSpringTranslateX: derivedValue2 };
  Se.__workletHash = 13544610996653;
  Se.__initData = num2;
  const animatedStyle = enableHome(gestureState[6]).useAnimatedStyle(Se);
  const tmpResult6 = enableHome(gestureState[6]);
  class De {
    constructor() {
      obj = HapticFeedbackTypes;
      tmp = outer1_12;
      num = 0;
      if (HapticFeedbackTypes.get() < outer1_12) {
        tmp2 = globalThis;
        _Math = Math;
        num2 = 12;
        num = Math.min(12, obj.get() / tmp * 12);
      }
      result = obj.get() / 150;
      num3 = 0.98;
      if (obj.get() >= tmp) {
        num3 = 1;
      }
      obj = { transform: null, opacity: null };
      obj1 = { translateX: null };
      obj4 = enableHome(gestureState[15]);
      obj1[0] = obj4.withSpring(num, useConfig);
      items = [, ];
      items[0] = obj1;
      obj2 = { scale: null };
      obj6 = enableHome(gestureState[15]);
      obj2[0] = obj6.withSpring(num3, useConfig);
      items[1] = obj2;
      obj[0] = items;
      obj7 = enableHome(gestureState[15]);
      obj8 = enableHome(gestureState[6]);
      obj[1] = obj7.withSpring(obj8.clamp(result, 0, 1), useConfig);
      return obj;
    }
  }
  obj2 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: c12, GUILD_DESCRIPTION_ANIMATION_DISTANCE: 12, MIN_HOME_DRAWER_TEXT_OPACITY: 0, MIN_HOME_DRAWER_OPEN_WIDTH: 150, GUILD_LABEL_UNSNAPPED_SCALE: 0.98, withSpring: tmp(tmp2[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback, clamp: tmp(tmp2[6]).clamp };
  De.__closure = obj2;
  De.__workletHash = 11639414708115;
  De.__initData = closure_20;
  let closure_24 = enableHome(gestureState[6]).useAnimatedStyle(De);
  const tmpResult7 = enableHome(gestureState[6]);
  class Ae {
    constructor() {
      obj = HapticFeedbackTypes;
      num = 0;
      if (HapticFeedbackTypes.get() < outer1_12) {
        tmp2 = globalThis;
        _Math = Math;
        num2 = 8;
        num = Math.min(8, obj.get() / tmp * 8);
      }
      obj = { transform: null };
      obj1 = { translateX: null };
      obj4 = enableHome(gestureState[15]);
      obj1[0] = obj4.withSpring(num, useConfig);
      items = [];
      items[0] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  const tmpResult8 = enableHome(gestureState[6]);
  Ae.__closure = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: c12, MAX_HOME_DRAWER_ICON_DISTANCE: 8, withSpring: enableHome(gestureState[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback };
  Ae.__workletHash = 16360618332998;
  Ae.__initData = derivedValue1;
  let closure_25 = tmpResult8.useAnimatedStyle(Ae);
  let obj3 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: c12, MAX_HOME_DRAWER_ICON_DISTANCE: 8, withSpring: enableHome(gestureState[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback };
  class Ee {
    constructor() {
      obj = HapticFeedbackTypes;
      num = 0;
      if (HapticFeedbackTypes.get() < outer1_12) {
        tmp2 = globalThis;
        _Math = Math;
        num2 = 4;
        num = -Math.min(4, obj.get() / tmp * 4);
      }
      obj = { transform: null };
      obj1 = { translateX: null };
      obj4 = enableHome(gestureState[15]);
      obj1[0] = obj4.withSpring(num, useConfig);
      items = [];
      items[0] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  obj4 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: c12, UNREAD_INDICATOR_ANIMATION_DISTANCE: 4, withSpring: tmp(tmp2[15]).withSpring, HOME_DRAWER_FLING_PHYSICS: callback };
  Ee.__closure = obj4;
  Ee.__workletHash = 8561772429103;
  Ee.__initData = derivedValue2;
  let closure_26 = enableHome(gestureState[6]).useAnimatedStyle(Ee);
  const items5 = [gestureState, panelX, sharedValue, isFocused, maxX, isPanelTouchActive, noteInteraction, callback];
  const memo = obj4.useMemo(() => {
    function settleDrawer(arg0) {
      let num = 0;
      if (arg0) {
        num = closure_4;
      }
      const result = shouldOpenFromPosition.set(num);
      settleDrawer(outer1_2[6]).runOnJS(settleDrawer(outer1_2[14]).setHomeDrawerState)(arg0);
    }
    let obj = { panelX: shouldOpenFromPosition, maxX, runOnJS: enableHome(gestureState[6]).runOnJS, setHomeDrawerState: enableHome(gestureState[14]).setHomeDrawerState };
    settleDrawer.__closure = obj;
    settleDrawer.__workletHash = 8226756372642;
    settleDrawer.__initData = animatedStyle;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      let tmp = 0 !== shouldOpenFromPosition.get();
      if (tmp) {
        let tmp3 = obj.get() > 0.5 * closure_4;
        if (!tmp3) {
          let tmp5 = obj.get() >= outer1_9;
          if (tmp5) {
            tmp5 = store2.get() > 0;
          }
          tmp3 = tmp5;
        }
        tmp = tmp3;
      }
      return tmp;
    };
    obj = { panelX: shouldOpenFromPosition, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, INITIAL_OPEN_WIDTH: sharedValue1, dragOffsetX: sharedValue };
    shouldOpenFromPosition.__closure = obj;
    shouldOpenFromPosition.__workletHash = 11654084007114;
    shouldOpenFromPosition.__initData = closure_24;
    const Gesture = enableHome(gestureState[16]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isFocused);
    let result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function _(absoluteX) {
      const result = closure_6.set(true);
      const result1 = store.set({ active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: shouldOpenFromPosition.get() });
    };
    obj = { isPanelTouchActive, gestureState, panelX: shouldOpenFromPosition };
    fn.__closure = obj;
    fn.__workletHash = 8825829705900;
    fn.__initData = outer1_29;
    const maxPointersResult = result.maxPointers(1);
    const fn2 = function s(arg0, activate) {
      let obj = store;
      if (!store.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - obj.get().initialX);
        const _Math2 = Math;
        if (Math.abs(arg0.changedTouches[0].absoluteY - obj.get().initialY) <= absolute) {
          if (0 !== shouldOpenFromPosition.get()) {
            if (absolute >= 10) {
              if (tmp5) {
                obj = {};
                const merged = Object.assign(obj.get());
                obj.active = true;
                obj.initialX = absoluteX;
                obj.panelX = obj3.get();
                const result = obj.set(obj);
                activate.activate();
              }
              tmp5 = 0 === obj3.get() && absoluteX > obj.get().initialX || absoluteX < obj.get().initialX;
            }
          }
        }
        activate.fail();
      }
    };
    fn2.__closure = { gestureState, panelX: shouldOpenFromPosition, ACTIVATION_MIN_DISTANCE: 10 };
    fn2.__workletHash = 7484113391171;
    fn2.__initData = first;
    const onBeginResult = result.maxPointers(1).onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (store.get().active) {
        const diff = absoluteX.absoluteX - obj.get().initialX;
        const result = store2.set(diff);
        const sum = diff + obj.get().panelX;
        if (0 === obj.get().panelX) {
          if (diff >= 0) {
            if (diff < outer1_9) {
              const _Math2 = Math;
              const result1 = shouldOpenFromPosition.set(Math.max(sum / 3, 0));
            }
          }
        }
        const _Math = Math;
        const result2 = shouldOpenFromPosition.set(Math.max(sum, 0));
      }
    };
    fn3.__closure = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1, panelX: shouldOpenFromPosition, DRAWER_RESISTANCE: 3 };
    fn3.__workletHash = 15118338555898;
    fn3.__initData = memo;
    const onTouchesMoveResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      if (velocityX.velocityX > 50) {
        if (outer1_8.get() > 40) {
          let flag = true;
          if (outer1_8.get() < sharedValue1) {
            const obj2 = enableHome(gestureState[6]);
            enableHome(gestureState[6]).runOnJS(enableHome(gestureState[9]).triggerHapticFeedback)(enableHome(gestureState[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
            flag = true;
            const runOnJSResult = enableHome(gestureState[6]).runOnJS(enableHome(gestureState[9]).triggerHapticFeedback);
          }
        }
        if (typeof settleDrawer !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let num5 = 0;
        if (flag) {
          num5 = outer1_4;
        }
        const result = shouldOpenFromPosition.set(num5);
        enableHome(gestureState[6]).runOnJS(enableHome(gestureState[14]).setHomeDrawerState)(flag);
        const tmp37 = outer1_2.get().panelX > 0;
        if (flag) {
          if (!tmp37) {
            enableHome(gestureState[6]).runOnJS(outer1_11)(constants.OPEN);
            const obj4 = enableHome(gestureState[6]);
          }
        }
        if (!tmp37) {
          enableHome(gestureState[6]).runOnJS(outer1_11)(constants.PEEK);
          const obj5 = enableHome(gestureState[6]);
        }
        const obj3 = enableHome(gestureState[6]);
      }
      if (velocityX.velocityX < -50) {
        if (outer1_8.get() < -40) {
          const obj = enableHome(gestureState[6]);
          enableHome(gestureState[6]).runOnJS(enableHome(gestureState[9]).triggerHapticFeedback)(enableHome(gestureState[9]).HapticFeedbackTypes.SOFT);
          flag = false;
          const runOnJSResult1 = enableHome(gestureState[6]).runOnJS(enableHome(gestureState[9]).triggerHapticFeedback);
        }
      }
      if (typeof shouldOpenFromPosition !== "error") {
        HermesBuiltin.throwTypeError();
      }
      flag = 0 !== shouldOpenFromPosition.get();
      if (flag) {
        let tmp5 = shouldOpenFromPosition.get() > 0.5 * outer1_4;
        if (!tmp5) {
          let tmp8 = shouldOpenFromPosition.get() >= sharedValue1;
          if (tmp8) {
            tmp8 = outer1_8.get() > 0;
          }
          tmp5 = tmp8;
        }
        flag = tmp5;
      }
    };
    const onChangeResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: sharedValue1, runOnJS: enableHome(gestureState[6]).runOnJS, triggerHapticFeedback: enableHome(gestureState[9]).triggerHapticFeedback, HapticFeedbackTypes: enableHome(gestureState[9]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, gestureState, trackServerDrawerInteract: callback, ServerDrawerInteractAction: closure_13 };
    fn4.__workletHash = 10902226233549;
    fn4.__initData = closure_26;
    const obj1 = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: sharedValue1, runOnJS: enableHome(gestureState[6]).runOnJS, triggerHapticFeedback: enableHome(gestureState[9]).triggerHapticFeedback, HapticFeedbackTypes: enableHome(gestureState[9]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, gestureState, trackServerDrawerInteract: callback, ServerDrawerInteractAction: closure_13 };
    const fn5 = function e() {
      let tmp = shouldOpenFromPosition.get() > 0;
      if (tmp) {
        tmp = obj.get() < outer1_4;
      }
      if (tmp) {
        if (typeof shouldOpenFromPosition !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let tmp5 = 0 !== obj.get();
        if (tmp5) {
          let tmp7 = obj.get() > 0.5 * outer1_4;
          if (!tmp7) {
            let tmp9 = obj.get() >= sharedValue1;
            if (tmp9) {
              tmp9 = outer1_8.get() > 0;
            }
            tmp7 = tmp9;
          }
          tmp5 = tmp7;
        }
        if (typeof tmp3 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        let num2 = 0;
        if (tmp5) {
          num2 = outer1_4;
        }
        const result = obj.set(num2);
        enableHome(gestureState[6]).runOnJS(enableHome(gestureState[14]).setHomeDrawerState)(tmp5);
        const obj2 = enableHome(gestureState[6]);
        tmp3 = settleDrawer;
      }
      const result1 = outer1_6.set(false);
      enableHome(gestureState[6]).runOnJS(outer1_7)();
      const result2 = outer1_2.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result3 = outer1_8.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = { panelX: shouldOpenFromPosition, maxX, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: enableHome(gestureState[6]).runOnJS, noteInteraction, gestureState, dragOffsetX: sharedValue };
    fn5.__workletHash = 15210416953749;
    fn5.__initData = closure_25;
    return onEndResult.onFinalize(fn5);
  }, items5);
  const first = updateMaxX(obj4.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelSpringTranslateX: derivedValue2, guildsBarLabelDrawerStyle: closure_24, guildsBarIconDrawerStyle: closure_25, guildsBarUnreadDrawerStyle: closure_26 })), 1)[0];
  const items6 = [first, enableHome];
  obj5 = { gesture: memo, panelStyles: animatedStyle, homeDrawerContext: obj4.useMemo(() => ({ homeDrawerState: first, enableHome }), items6) };
  return obj5;
};
export const HomeDrawerStateContext = context;
export const useHomeDrawerState = function useHomeDrawerState() {
  return importAllResult.useContext(context).homeDrawerState;
};
export const useIsHomeDrawerEnabled = function useIsHomeDrawerEnabled() {
  return importAllResult.useContext(context).enableHome;
};