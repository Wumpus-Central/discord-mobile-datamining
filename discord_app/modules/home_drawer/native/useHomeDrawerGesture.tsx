// discord_app/modules/home_drawer/native/useHomeDrawerGesture.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_5 from "HomeDrawerStore.tsx";
import { computeMaxX } from "HomeDrawerStore.tsx";
import closure_7 from "HomeDrawerSubtitleStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { LaunchPadTypes } from "../../launchpad/native/LaunchPadConstants.tsx";
import { Gesture } from "../../../../_runtime/05652_LegacyBaseButton.js";
import createFakeSharedValue from "../../reanimated/ReanimatedHelperTypes.tsx";

const require = arg1;
let c4 = importAllResult;
let c10 = 144;
let closure_11 = { mass: 0.3, damping: 30, stiffness: 400 };
let obj = { mass: 0.4, damping: 100, stiffness: 250 };
let c13 = 48;
let closure_14 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_15 = { code: "function useHomeDrawerGestureTsx1(){const{dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let closure_16 = { code: "function useHomeDrawerGestureTsx2(isOpen,wasOpen){const{gestureState,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasOpen===null){return;}if(isOpen===wasOpen){return;}if(isOpen){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}" };
let closure_17 = { code: "function useHomeDrawerGestureTsx3(){const{panelX,peekX}=this.__closure;return panelX.get()+peekX.get();}" };
let closure_18 = { code: "function useHomeDrawerGestureTsx4(){const{isDrawerInitialized,initialPanelX,withSpring,panelX,gestureState,HOME_GESTURE_DRAG_PHYSICS,HOME_DRAWER_FLING_PHYSICS}=this.__closure;if(!isDrawerInitialized.get()){return initialPanelX;}return withSpring(panelX.get(),gestureState.get().active?HOME_GESTURE_DRAG_PHYSICS:HOME_DRAWER_FLING_PHYSICS,'animate-always');}" };
let closure_19 = { code: "function useHomeDrawerGestureTsx5(){const{panelGestureSpringX,peekX}=this.__closure;return panelGestureSpringX.get()+peekX.get();}" };
let closure_20 = { code: "function useHomeDrawerGestureTsx6(){const{safeAreaInsets,panelSpringTranslateX}=this.__closure;return{flex:1,marginTop:safeAreaInsets.top,transform:[{translateX:panelSpringTranslateX.get()}]};}" };
let closure_21 = { code: "function useHomeDrawerGestureTsx7(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,GUILD_DESCRIPTION_ANIMATION_DISTANCE,MIN_HOME_DRAWER_TEXT_OPACITY,MIN_HOME_DRAWER_OPEN_WIDTH,GUILD_LABEL_UNSNAPPED_SCALE,withSpring,HOME_DRAWER_FLING_PHYSICS,clamp}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(GUILD_DESCRIPTION_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*GUILD_DESCRIPTION_ANIMATION_DISTANCE);}const opacity=MIN_HOME_DRAWER_TEXT_OPACITY+drawerRevealX.get()/MIN_HOME_DRAWER_OPEN_WIDTH*(1-MIN_HOME_DRAWER_TEXT_OPACITY);const scale=drawerRevealX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH?1:GUILD_LABEL_UNSNAPPED_SCALE;return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)},{scale:withSpring(scale,HOME_DRAWER_FLING_PHYSICS)}],opacity:withSpring(clamp(opacity,0,1),HOME_DRAWER_FLING_PHYSICS)};}" };
let closure_22 = { code: "function useHomeDrawerGestureTsx8(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,MAX_HOME_DRAWER_ICON_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let x=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){x=Math.min(MAX_HOME_DRAWER_ICON_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*MAX_HOME_DRAWER_ICON_DISTANCE);}return{transform:[{translateX:withSpring(x,HOME_DRAWER_FLING_PHYSICS)}]};}" };
let closure_23 = { code: "function useHomeDrawerGestureTsx9(){const{drawerRevealX,MAX_HOME_DRAWER_ANIMATING_WIDTH,UNREAD_INDICATOR_ANIMATION_DISTANCE,withSpring,HOME_DRAWER_FLING_PHYSICS}=this.__closure;let left=0;if(drawerRevealX.get()<MAX_HOME_DRAWER_ANIMATING_WIDTH){left=-Math.min(UNREAD_INDICATOR_ANIMATION_DISTANCE,drawerRevealX.get()/MAX_HOME_DRAWER_ANIMATING_WIDTH*UNREAD_INDICATOR_ANIMATION_DISTANCE);}return{transform:[{translateX:withSpring(left,HOME_DRAWER_FLING_PHYSICS)}]};}" };
let closure_24 = { code: "function settleDrawer_useHomeDrawerGestureTsx10(shouldOpen){const{panelX,maxX,runOnJS,setHomeDrawerState}=this.__closure;panelX.set(shouldOpen?maxX:0);runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_25 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx11(){const{panelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;if(panelX.get()===0)return false;if(panelX.get()>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(panelX.get()>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_26 = { code: "function useHomeDrawerGestureTsx12(){const{panelX,maxX,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,gestureState,dragOffsetX}=this.__closure;if(panelX.get()>0&&panelX.get()<maxX){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}" };
let closure_27 = { code: "function useHomeDrawerGestureTsx13(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_28 = { code: "function useHomeDrawerGestureTsx14(event){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH,panelX,DRAWER_RESISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const basePosition=newXOffset+gestureState.get().panelX;if(gestureState.get().panelX===0&&newXOffset>=0&&newXOffset<INITIAL_OPEN_WIDTH){panelX.set(Math.max(basePosition/DRAWER_RESISTANCE,0));}else{panelX.set(Math.max(basePosition,0));}}" };
let closure_29 = { code: "function useHomeDrawerGestureTsx15(event,manager){const{gestureState,panelX,ACTIVATION_MIN_DISTANCE}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);if(absoluteYDiff>absoluteXDiff||panelX.get()===0&&touchX<gestureState.get().initialX||panelX.get()>0&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}if(panelX.get()===0&&touchX>gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}else if(touchX<gestureState.get().initialX){gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:panelX.get()});manager.activate();}}" };
let closure_30 = { code: "function useHomeDrawerGestureTsx16(event){const{isPanelTouchActive,gestureState,panelX}=this.__closure;isPanelTouchActive.set(true);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()});}" };
obj = { gesture: null, panelStyles: null, gestureState: null, panelX: null, panelSpringTranslateX: null, guildsBarLabelDrawerStyle: null, guildsBarIconDrawerStyle: null, guildsBarUnreadDrawerStyle: null };
obj[0] = Gesture.Pan();
obj[1] = {};
obj[2] = createFakeSharedValue.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
obj[3] = require("../../../index.native.tsx");
obj[4] = require("../../../index.native.tsx");
obj[5] = {};
obj[6] = {};
obj[7] = {};
const context = importAllResult.createContext({ homeDrawerState: obj, enableHome: false });
let result = require("set").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const HOME_DRAWER_FLING_PHYSICS = obj;
export const useHomeGesture = function useHomeGesture() {
  const MobileHomeDrawerExperiment = panelX(updateMaxX[6]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  let enableHome = config.enableHome;
  ({ enablePeekHint, landOnHome } = config);
  const tmp4 = isPanelTouchActive();
  panelX = tmp4.panelX;
  const gestureState = tmp4.gestureState;
  updateMaxX = tmp4.updateMaxX;
  const maxX = tmp4.maxX;
  const setPanelX = tmp4.setPanelX;
  isPanelTouchActive = tmp4.isPanelTouchActive;
  const noteInteraction = tmp4.noteInteraction;
  obj = panelX(updateMaxX[7]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = panelX(updateMaxX[7]);
  const sharedValue1 = obj1.useSharedValue(false);
  let obj2 = panelX(updateMaxX[8]);
  const navigation = obj2.useNavigation();
  let obj4 = setPanelX;
  const callback = setPanelX.useCallback((action) => {
    obj = gestureState(updateMaxX[9]);
    obj = { action };
    obj.track(sharedValue1.SERVER_DRAWER_INTERACT, obj);
  }, []);
  let obj5 = panelX(updateMaxX[7]);
  class G {
    constructor() {
      return closure_7.get() >= closure_10;
    }
  }
  obj = { dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: callback };
  G.__closure = obj;
  G.__workletHash = 2525772891435;
  G.__initData = sharedValue2;
  class F {
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
        tmp2 = panelX;
        tmp3 = updateMaxX;
        obj = panelX(updateMaxX[7]);
        tmp4 = panelX;
        tmp5 = updateMaxX;
        runOnJSResult = obj.runOnJS(panelX(updateMaxX[10]).triggerHapticFeedback);
        tmp7 = panelX;
        tmp8 = updateMaxX;
        HapticFeedbackTypes = panelX(updateMaxX[10]).HapticFeedbackTypes;
        if (arg0) {
          tmp6Result = runOnJSResult(HapticFeedbackTypes.IMPACT_MEDIUM);
        } else {
          tmp6Result1 = runOnJSResult(HapticFeedbackTypes.SOFT);
        }
      }
      return;
    }
  }
  obj = { gestureState, runOnJS: panelX(updateMaxX[7]).runOnJS, triggerHapticFeedback: panelX(updateMaxX[10]).triggerHapticFeedback, HapticFeedbackTypes: panelX(updateMaxX[10]).HapticFeedbackTypes };
  F.__closure = obj;
  F.__workletHash = 11947599708940;
  F.__initData = derivedValue;
  const animatedReaction = obj5.useAnimatedReaction(G, F);
  let tmp9 = gestureState(updateMaxX[11])();
  closure_11 = tmp9;
  const tmp10 = gestureState(updateMaxX[12])();
  closure_12 = tmp10;
  const tmp11 = gestureState(updateMaxX[14])();
  if (enableHome) {
    enableHome = !tmp12;
  }
  if (enableHome) {
    enableHome = !gestureState(updateMaxX[13])().isChatBesideChannelList;
  }
  let tmpResult = tmp(tmp2[8]);
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = tmp(tmp2[7]);
  sharedValue2 = tmpResult.useSharedValue(0);
  let tmp15 = enableHome;
  if (enableHome) {
    tmp15 = enablePeekHint;
  }
  const homeDrawerPeekHint = panelX(updateMaxX[15]).useHomeDrawerPeekHint(tmp15, sharedValue2);
  tmp12 = tmp11 === navigation.GESTURE_FULL || tmp11 === navigation.GESTURE_EDGE;
  const tmpResult1 = panelX(updateMaxX[15]);
  function ue() {
    const value = panelX.get();
    return value + sharedValue2.get();
  }
  ue.__closure = { panelX, peekX: sharedValue2 };
  ue.__workletHash = 4654854314200;
  ue.__initData = drawerOpen;
  derivedValue = panelX(updateMaxX[7]).useDerivedValue(ue);
  let state = navigation.getState();
  const tmpResult2 = panelX(updateMaxX[7]);
  let tmp19;
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
      tmp19 = routes[num];
    }
  }
  let coerceGuildsRouteResult = panelX(updateMaxX[16]).coerceGuildsRoute(tmp19);
  let tmp21 = enableHome;
  if (enableHome) {
    drawerOpen = undefined;
    if (coerceGuildsRouteResult != null) {
      let params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (drawerOpen == null) {
      drawerOpen = landOnHome;
    }
    tmp21 = drawerOpen;
  }
  drawerOpen = tmp21;
  let num2 = 0;
  if (tmp21) {
    num2 = noteInteraction(tmp9, tmp10);
  }
  let items = [tmp9, tmp10, updateMaxX, enableHome];
  const effect = obj4.useEffect(() => {
    if (enableHome) {
      tmp(closure_11, closure_12);
    } else {
      tmp({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX];
  const effect1 = obj4.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      panelX(updateMaxX[16]).setHomeDrawerState(false);
      obj = panelX(updateMaxX[16]);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
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
      const coerceGuildsRouteResult = handleStateChange(closure_1_2[16]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        if (closure_13) {
          const params = coerceGuildsRouteResult.params;
          drawerOpen = undefined;
          if (params != null) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          if (true === drawerOpen) {
            str = "open";
          }
          closure_4(str);
          state = closure_1_7.getState();
          if (true === drawerOpen) {
            state.startTimer();
          } else {
            state.stopTimer();
          }
          const tmp6 = closure_4;
        }
      }
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      closure_1_9.removeListener("state", handleStateChange);
      const state = sharedValue.getState();
      state.stopTimer();
    };
  }, items2);
  closure_19 = obj4.useRef(false);
  const items3 = [enableHome, tmp21, num2, panelX];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      if (drawerOpen) {
        const state = sharedValue.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const items4 = [enableHome, sharedValue1];
  const effect3 = obj4.useEffect(() => {
    if (ref.current) {
      const result = sharedValue1.set(true);
    }
  }, items4);
  const tmpResult3 = panelX(updateMaxX[16]);
  class De {
    constructor() {
      if (closure_8.get()) {
        tmp = panelX;
        tmp2 = updateMaxX;
        obj = panelX(updateMaxX[17]);
        tmp3 = panelX;
        tmp5 = gestureState;
        value = panelX.get();
        str = "animate-always";
        withSpringResult = obj.withSpring(value, gestureState.get().active ? closure_11 : closure_12, "animate-always");
      } else {
        return closure_18;
      }
      return;
    }
  }
  obj1 = { isDrawerInitialized: sharedValue1, initialPanelX: num2, withSpring: tmp(tmp2[17]).withSpring, panelX, gestureState, HOME_GESTURE_DRAG_PHYSICS: closure_11, HOME_DRAWER_FLING_PHYSICS: closure_12 };
  De.__closure = obj1;
  De.__workletHash = 11078734703352;
  De.__initData = num2;
  const derivedValue1 = panelX(updateMaxX[7]).useDerivedValue(De);
  const tmpResult4 = panelX(updateMaxX[7]);
  class Ae {
    constructor() {
      value = closure_20.get();
      return value + closure_15.get();
    }
  }
  Ae.__closure = { panelGestureSpringX: derivedValue1, peekX: sharedValue2 };
  Ae.__workletHash = 2927026959998;
  Ae.__initData = closure_19;
  const derivedValue2 = panelX(updateMaxX[7]).useDerivedValue(Ae);
  const tmpResult5 = panelX(updateMaxX[7]);
  class Ee {
    constructor() {
      obj = { flex: 1, marginTop: closure_12.top, transform: null };
      obj = { translateX: closure_21.get() };
      items = [];
      items[0] = obj;
      obj[2] = items;
      return obj;
    }
  }
  Ee.__closure = { safeAreaInsets: tmp10, panelSpringTranslateX: derivedValue2 };
  Ee.__workletHash = 13544610996653;
  Ee.__initData = derivedValue1;
  const animatedStyle = panelX(updateMaxX[7]).useAnimatedStyle(Ee);
  const tmpResult6 = panelX(updateMaxX[7]);
  function pe() {
    obj = derivedValue;
    let num = 0;
    if (derivedValue.get() < enableHome) {
      const _Math = Math;
      num = Math.min(12, obj.get() / tmp * 12);
    }
    const result = obj.get() / 150;
    let num3 = 0.98;
    if (obj.get() >= enableHome) {
      num3 = 1;
    }
    obj = { transform: null, opacity: null };
    obj = { translateX: panelX(updateMaxX[17]).withSpring(num, closure_12) };
    const items = [obj, ];
    obj1 = { scale: null };
    const obj4 = panelX(updateMaxX[17]);
    obj1[0] = panelX(updateMaxX[17]).withSpring(num3, closure_12);
    items[1] = obj1;
    obj[0] = items;
    const obj6 = panelX(updateMaxX[17]);
    const obj7 = panelX(updateMaxX[17]);
    obj[1] = obj7.withSpring(panelX(updateMaxX[7]).clamp(result, 0, 1), closure_12);
    return obj;
  }
  obj2 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: enableHome, GUILD_DESCRIPTION_ANIMATION_DISTANCE: 12, MIN_HOME_DRAWER_TEXT_OPACITY: 0, MIN_HOME_DRAWER_OPEN_WIDTH: 150, GUILD_LABEL_UNSNAPPED_SCALE: 0.98, withSpring: tmp(tmp2[17]).withSpring, HOME_DRAWER_FLING_PHYSICS: closure_12, clamp: tmp(tmp2[7]).clamp };
  pe.__closure = obj2;
  pe.__workletHash = 11639414708115;
  pe.__initData = derivedValue2;
  closure_23 = panelX(updateMaxX[7]).useAnimatedStyle(pe);
  const tmpResult7 = panelX(updateMaxX[7]);
  class Oe {
    constructor() {
      obj = closure_16;
      num = 0;
      if (closure_16.get() < closure_13) {
        tmp2 = globalThis;
        _Math = Math;
        num2 = 8;
        num = Math.min(8, obj.get() / tmp * 8);
      }
      obj = { transform: null };
      obj1 = { translateX: null };
      obj4 = panelX(updateMaxX[17]);
      obj1[0] = obj4.withSpring(num, closure_12);
      items = [];
      items[0] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  const tmpResult8 = panelX(updateMaxX[7]);
  Oe.__closure = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: enableHome, MAX_HOME_DRAWER_ICON_DISTANCE: 8, withSpring: panelX(updateMaxX[17]).withSpring, HOME_DRAWER_FLING_PHYSICS: closure_12 };
  Oe.__workletHash = 16360618332998;
  Oe.__initData = animatedStyle;
  closure_24 = tmpResult8.useAnimatedStyle(Oe);
  let obj3 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: enableHome, MAX_HOME_DRAWER_ICON_DISTANCE: 8, withSpring: panelX(updateMaxX[17]).withSpring, HOME_DRAWER_FLING_PHYSICS: closure_12 };
  class Te {
    constructor() {
      obj = closure_16;
      num = 0;
      if (closure_16.get() < closure_13) {
        tmp2 = globalThis;
        _Math = Math;
        num2 = 4;
        num = -Math.min(4, obj.get() / tmp * 4);
      }
      obj = { transform: null };
      obj1 = { translateX: null };
      obj4 = panelX(updateMaxX[17]);
      obj1[0] = obj4.withSpring(num, closure_12);
      items = [];
      items[0] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  obj4 = { drawerRevealX: derivedValue, MAX_HOME_DRAWER_ANIMATING_WIDTH: enableHome, UNREAD_INDICATOR_ANIMATION_DISTANCE: 4, withSpring: tmp(tmp2[17]).withSpring, HOME_DRAWER_FLING_PHYSICS: closure_12 };
  Te.__closure = obj4;
  Te.__workletHash = 8561772429103;
  Te.__initData = closure_23;
  closure_25 = panelX(updateMaxX[7]).useAnimatedStyle(Te);
  const items5 = [gestureState, panelX, sharedValue, isFocused, maxX, isPanelTouchActive, noteInteraction, callback];
  const memo = obj4.useMemo(() => {
    function settleDrawer(arg0) {
      let num = 0;
      if (arg0) {
        num = closure_3;
      }
      const result = settleDrawer.set(num);
      settleDrawer(closure_1_2[7]).runOnJS(settleDrawer(closure_1_2[16]).setHomeDrawerState)(arg0);
    }
    obj = { panelX: settleDrawer, maxX, runOnJS: panelX(updateMaxX[7]).runOnJS, setHomeDrawerState: panelX(updateMaxX[16]).setHomeDrawerState };
    settleDrawer.__closure = obj;
    settleDrawer.__workletHash = 8226756372642;
    settleDrawer.__initData = closure_24;
    function shouldOpenFromPosition() {
      let tmp = 0 !== settleDrawer.get();
      if (tmp) {
        let tmp3 = obj.get() > 0.5 * closure_3;
        if (!tmp3) {
          let tmp5 = obj.get() >= closure_1_10;
          if (tmp5) {
            tmp5 = store.get() > 0;
          }
          tmp3 = tmp5;
        }
        tmp = tmp3;
      }
      return tmp;
    }
    obj = { panelX: settleDrawer, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, INITIAL_OPEN_WIDTH: callback, dragOffsetX: sharedValue };
    shouldOpenFromPosition.__closure = obj;
    shouldOpenFromPosition.__workletHash = 11654084007114;
    shouldOpenFromPosition.__initData = closure_25;
    const Gesture = panelX(updateMaxX[18]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isFocused);
    let result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function _(absoluteX) {
      const result = closure_5.set(true);
      const result1 = shouldOpenFromPosition.set({ active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: settleDrawer.get() });
    };
    obj = { isPanelTouchActive, gestureState: shouldOpenFromPosition, panelX: settleDrawer };
    fn.__closure = obj;
    fn.__workletHash = 8825829705900;
    fn.__initData = closure_1_30;
    const maxPointersResult = result.maxPointers(1);
    const fn2 = function s(arg0, activate) {
      obj = shouldOpenFromPosition;
      if (!shouldOpenFromPosition.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - obj.get().initialX);
        const _Math2 = Math;
        if (Math.abs(arg0.changedTouches[0].absoluteY - obj.get().initialY) <= absolute) {
          if (0 !== settleDrawer.get()) {
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
    fn2.__closure = { gestureState: shouldOpenFromPosition, panelX: settleDrawer, ACTIVATION_MIN_DISTANCE: 10 };
    fn2.__workletHash = 7484113391171;
    fn2.__initData = closure_1_29;
    const onBeginResult = result.maxPointers(1).onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (shouldOpenFromPosition.get().active) {
        const diff = absoluteX.absoluteX - obj.get().initialX;
        const result = store.set(diff);
        const sum = diff + obj.get().panelX;
        if (0 === obj.get().panelX) {
          if (diff >= 0) {
            if (diff < closure_1_10) {
              const _Math2 = Math;
              const result1 = settleDrawer.set(Math.max(sum / 3, 0));
            }
          }
        }
        const _Math = Math;
        const result2 = settleDrawer.set(Math.max(sum, 0));
      }
    };
    fn3.__closure = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: callback, panelX: settleDrawer, DRAWER_RESISTANCE: 3 };
    fn3.__workletHash = 15118338555898;
    fn3.__initData = closure_1_28;
    const onTouchesMoveResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      if (velocityX.velocityX > 50) {
        if (closure_1_7.get() > 40) {
          let flag = true;
          if (closure_1_7.get() < callback) {
            const obj2 = panelX(updateMaxX[7]);
            panelX(updateMaxX[7]).runOnJS(panelX(updateMaxX[10]).triggerHapticFeedback)(panelX(updateMaxX[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
            flag = true;
            const runOnJSResult = panelX(updateMaxX[7]).runOnJS(panelX(updateMaxX[10]).triggerHapticFeedback);
          }
        }
        if (typeof settleDrawer !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let num5 = 0;
        if (flag) {
          num5 = closure_1_3;
        }
        const result = settleDrawer.set(num5);
        panelX(updateMaxX[7]).runOnJS(panelX(updateMaxX[16]).setHomeDrawerState)(flag);
        const tmp37 = shouldOpenFromPosition.get().panelX > 0;
        if (flag) {
          if (!tmp37) {
            panelX(updateMaxX[7]).runOnJS(closure_1_10)(isFocused.OPEN);
            const obj4 = panelX(updateMaxX[7]);
          }
        }
        if (!tmp37) {
          panelX(updateMaxX[7]).runOnJS(closure_1_10)(isFocused.PEEK);
          const obj5 = panelX(updateMaxX[7]);
        }
        const obj3 = panelX(updateMaxX[7]);
      }
      if (velocityX.velocityX < -50) {
        if (closure_1_7.get() < -40) {
          obj = panelX(updateMaxX[7]);
          panelX(updateMaxX[7]).runOnJS(panelX(updateMaxX[10]).triggerHapticFeedback)(panelX(updateMaxX[10]).HapticFeedbackTypes.SOFT);
          flag = false;
          const runOnJSResult1 = panelX(updateMaxX[7]).runOnJS(panelX(updateMaxX[10]).triggerHapticFeedback);
        }
      }
      if (typeof shouldOpenFromPosition !== "function") {
        HermesBuiltin.throwTypeError();
      }
      flag = 0 !== settleDrawer.get();
      if (flag) {
        let tmp5 = settleDrawer.get() > 0.5 * closure_1_3;
        if (!tmp5) {
          let tmp8 = settleDrawer.get() >= callback;
          if (tmp8) {
            tmp8 = closure_1_7.get() > 0;
          }
          tmp5 = tmp8;
        }
        flag = tmp5;
      }
    };
    const onChangeResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: callback, runOnJS: panelX(updateMaxX[7]).runOnJS, triggerHapticFeedback: panelX(updateMaxX[10]).triggerHapticFeedback, HapticFeedbackTypes: panelX(updateMaxX[10]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, gestureState: shouldOpenFromPosition, trackServerDrawerInteract: callback, ServerDrawerInteractAction: isFocused };
    fn4.__workletHash = 10902226233549;
    fn4.__initData = first;
    obj1 = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: callback, runOnJS: panelX(updateMaxX[7]).runOnJS, triggerHapticFeedback: panelX(updateMaxX[10]).triggerHapticFeedback, HapticFeedbackTypes: panelX(updateMaxX[10]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, gestureState: shouldOpenFromPosition, trackServerDrawerInteract: callback, ServerDrawerInteractAction: isFocused };
    const fn5 = function e() {
      let tmp = settleDrawer.get() > 0;
      if (tmp) {
        tmp = obj.get() < closure_1_3;
      }
      if (tmp) {
        if (typeof shouldOpenFromPosition !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp5 = 0 !== obj.get();
        if (tmp5) {
          let tmp7 = obj.get() > 0.5 * closure_1_3;
          if (!tmp7) {
            let tmp9 = obj.get() >= callback;
            if (tmp9) {
              tmp9 = closure_1_7.get() > 0;
            }
            tmp7 = tmp9;
          }
          tmp5 = tmp7;
        }
        if (typeof tmp3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        num2 = 0;
        if (tmp5) {
          num2 = closure_1_3;
        }
        const result = obj.set(num2);
        panelX(updateMaxX[7]).runOnJS(panelX(updateMaxX[16]).setHomeDrawerState)(tmp5);
        const obj2 = panelX(updateMaxX[7]);
        tmp3 = settleDrawer;
      }
      const result1 = closure_1_5.set(false);
      panelX(updateMaxX[7]).runOnJS(closure_1_6)();
      const result2 = shouldOpenFromPosition.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result3 = closure_1_7.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = { panelX: settleDrawer, maxX, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: panelX(updateMaxX[7]).runOnJS, noteInteraction, gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue };
    fn5.__workletHash = 15210416953749;
    fn5.__initData = memo;
    return onEndResult.onFinalize(fn5);
  }, items5);
  const first = maxX(obj4.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelSpringTranslateX: derivedValue2, guildsBarLabelDrawerStyle: closure_23, guildsBarIconDrawerStyle: closure_24, guildsBarUnreadDrawerStyle: closure_25 })), 1)[0];
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