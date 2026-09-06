// discord_app/modules/home_drawer/native/useHomeDrawerGesture.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_5 from "HomeDrawerStore.tsx";
import { computeMaxX } from "HomeDrawerStore.tsx";
import closure_7 from "HomeDrawerSubtitleStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { LaunchPadTypes } from "../../launchpad/native/LaunchPadConstants.tsx";
import { Gesture } from "../../../../_runtime/06655_LegacyBaseButton.js";
import createFakeSharedValue from "../../reanimated/ReanimatedHelperTypes.tsx";

const require = arg1;
let c4 = importAllResult;
let c10 = 144;
let c11 = 96.00000000000001;
let closure_12 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_13 = {
  code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}",
};
let closure_14 = {
  code: "function useHomeDrawerGestureTsx2(isSnapped,wasSnapped){const{gestureState,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}snapX.set(withTiming(isSnapped?SNAP_OPEN_DISTANCE:0,HOME_DRAWER_SNAP_TIMING));if(isSnapped){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}",
};
let closure_15 = {
  code: "function useHomeDrawerGestureTsx3(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}",
};
let closure_16 = {
  code: "function useHomeDrawerGestureTsx4(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}",
};
let closure_17 = {
  code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX,HOME_DRAWER_PULL_SETTLE_WIDTH,HOME_DRAWER_PULL_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH}=this.__closure;const reveal=panelTranslateX.get();const x=reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH?0:HOME_DRAWER_PULL_DISTANCE*(1-Math.abs(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/MAX_HOME_DRAWER_ANIMATING_WIDTH);return{transform:[{translateX:x}]};}",
};
let closure_18 = {
  code: "function isSnappedOpen_useHomeDrawerGestureTsx6(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}",
};
let closure_19 = {
  code: "function visualPanelX_useHomeDrawerGestureTsx7(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen()?SNAP_OPEN_DISTANCE:0);}",
};
let closure_20 = {
  code: "function settleDrawer_useHomeDrawerGestureTsx8(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING));runOnJS(setHomeDrawerState)(shouldOpen);}",
};
let closure_21 = {
  code: "function beginDrag_useHomeDrawerGestureTsx9(touchX){const{panelX,snapX,gestureState}=this.__closure;const currentX=panelX.get()+snapX.get();panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}",
};
let closure_22 = {
  code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx10(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}",
};
let closure_23 = {
  code: "function useHomeDrawerGestureTsx11(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}",
};
let closure_24 = {
  code: "function useHomeDrawerGestureTsx12(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}",
};
let closure_25 = {
  code: "function useHomeDrawerGestureTsx13(event){const{gestureState,dragOffsetX,panelX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}}",
};
let closure_26 = {
  code: "function useHomeDrawerGestureTsx14(event,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX);manager.activate();}",
};
let closure_27 = {
  code: "function useHomeDrawerGestureTsx15(event){const{isPanelTouchActive,didSettle,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);didSettle.set(false);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}",
};
let obj = {
  gesture: null,
  panelStyles: null,
  gestureState: null,
  panelX: null,
  panelTranslateX: null,
  guildsBarDrawerStyle: null,
};
obj[0] = Gesture.Pan();
obj[1] = {};
obj[2] = createFakeSharedValue.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
obj[3] = require("../../../index.native.tsx");
obj[4] = require("../../../index.native.tsx");
obj[5] = {};
const context = importAllResult.createContext({ homeDrawerState: obj, enableHome: false });
let result = require("set").fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export const useHomeGesture = function useHomeGesture() {
  const MobileHomeDrawerExperiment = panelX(isOpenTarget[6]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  let enableHome = config.enableHome;
  ({ enablePeekHint, landOnHome } = config);
  const tmp4 = maxX();
  panelX = tmp4.panelX;
  const snapX = tmp4.snapX;
  isOpenTarget = tmp4.isOpenTarget;
  const gestureState = tmp4.gestureState;
  const updateMaxX = tmp4.updateMaxX;
  maxX = tmp4.maxX;
  const setPanelX = tmp4.setPanelX;
  const isPanelTouchActive = tmp4.isPanelTouchActive;
  const noteInteraction = tmp4.noteInteraction;
  let obj = panelX(isOpenTarget[7]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = panelX(isOpenTarget[7]);
  const sharedValue1 = obj1.useSharedValue(false);
  const navigation = panelX(isOpenTarget[8]).useNavigation();
  const callback = updateMaxX.useCallback((action) => {
    let obj = snapX(isOpenTarget[9]);
    obj = { action };
    obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj);
  }, []);
  let obj3 = panelX(isOpenTarget[8]);
  class R {
    constructor() {
      tmp = 0 === gestureState.get().panelX;
      if (tmp) {
        tmp2 = closure_9;
        tmp3 = closure_10;
        tmp = closure_9.get() >= closure_10;
      }
      return tmp;
    }
  }
  obj = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1 };
  R.__closure = obj;
  R.__workletHash = 17562466882099;
  R.__initData = closure_13;
  class M {
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
        tmp3 = panelX;
        tmp4 = isOpenTarget;
        tmp2 = snapX;
        obj = panelX(isOpenTarget[10]);
        num = 0;
        if (arg0) {
          num = closure_11;
        }
        result = snapX.set(obj.withTiming(num, tmp3(tmp4[11]).HOME_DRAWER_SNAP_TIMING));
        tmp3Result = tmp3(tmp4[7]);
        runOnJSResult = tmp3Result.runOnJS(tmp3(tmp4[12]).triggerHapticFeedback);
        HapticFeedbackTypes = tmp3(tmp4[12]).HapticFeedbackTypes;
        if (arg0) {
          tmp6Result = runOnJSResult(HapticFeedbackTypes.IMPACT_MEDIUM);
        } else {
          tmp6Result1 = runOnJSResult(HapticFeedbackTypes.SOFT);
        }
      }
      return;
    }
  }
  obj = {
    gestureState,
    snapX,
    withTiming: panelX(isOpenTarget[10]).withTiming,
    SNAP_OPEN_DISTANCE: navigation,
    HOME_DRAWER_SNAP_TIMING: panelX(isOpenTarget[11]).HOME_DRAWER_SNAP_TIMING,
    runOnJS: panelX(isOpenTarget[7]).runOnJS,
    triggerHapticFeedback: panelX(isOpenTarget[12]).triggerHapticFeedback,
    HapticFeedbackTypes: panelX(isOpenTarget[12]).HapticFeedbackTypes,
  };
  M.__closure = obj;
  M.__workletHash = 801722928965;
  M.__initData = closure_14;
  const animatedReaction = panelX(isOpenTarget[7]).useAnimatedReaction(R, M);
  const tmp9 = snapX(isOpenTarget[13])();
  closure_13 = tmp9;
  let tmp10 = snapX(isOpenTarget[14])();
  closure_14 = tmp10;
  const tmp11 = snapX(isOpenTarget[16])();
  if (enableHome) {
    enableHome = !tmp12;
  }
  if (enableHome) {
    enableHome = !snapX(isOpenTarget[15])().isChatBesideChannelList;
  }
  let tmpResult = tmp(tmp2[8]);
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = tmp(tmp2[7]);
  const sharedValue2 = tmpResult.useSharedValue(0);
  const obj6 = panelX(isOpenTarget[7]);
  tmp12 = tmp11 === sharedValue.GESTURE_FULL || tmp11 === sharedValue.GESTURE_EDGE;
  let tmp15 = enableHome;
  if (enableHome) {
    tmp15 = enablePeekHint;
  }
  const homeDrawerPeekHint = panelX(isOpenTarget[17]).useHomeDrawerPeekHint(tmp15, sharedValue2);
  let state = navigation.getState();
  const tmpResult1 = panelX(isOpenTarget[17]);
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
  let coerceGuildsRouteResult = panelX(isOpenTarget[18]).coerceGuildsRoute(tmp18);
  let tmp20 = enableHome;
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
    tmp20 = drawerOpen;
  }
  drawerOpen = tmp20;
  let num2 = 0;
  if (tmp20) {
    num2 = setPanelX(tmp9, tmp10);
  }
  let items = [tmp9, tmp10, updateMaxX, enableHome];
  const effect = obj5.useEffect(() => {
    if (enableHome) {
      tmp(closure_13, closure_14);
    } else {
      tmp({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX, snapX, isOpenTarget];
  const effect1 = obj5.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      panelX(isOpenTarget[18]).setHomeDrawerState(false);
      const obj = panelX(isOpenTarget[18]);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect2 = obj5.useEffect(() => {
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
      const coerceGuildsRouteResult = handleStateChange(closure_1_2[18]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        if (closure_15) {
          const params = coerceGuildsRouteResult.params;
          drawerOpen = undefined;
          if (params != null) {
            drawerOpen = params.drawerOpen;
          }
          let str = "closed";
          if (true === drawerOpen) {
            str = "open";
          }
          closure_6(str);
          state = closure_1_7.getState();
          if (true === drawerOpen) {
            state.startTimer();
          } else {
            state.stopTimer();
          }
          const tmp6 = closure_6;
        }
      }
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      closure_1_11.removeListener("state", handleStateChange);
      const state = isPanelTouchActive.getState();
      state.stopTimer();
    };
  }, items2);
  closure_20 = obj5.useRef(false);
  const items3 = [enableHome, tmp20, num2, panelX, isOpenTarget];
  const layoutEffect = obj5.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        const state = isPanelTouchActive.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const tmpResult2 = panelX(isOpenTarget[18]);
  function ge() {
    const value = panelX.get();
    const sum = value + snapX.get();
    return sum + sharedValue2.get();
  }
  ge.__closure = { panelX, snapX, peekX: sharedValue2 };
  ge.__workletHash = 2522387034438;
  ge.__initData = enableHome;
  const derivedValue = panelX(isOpenTarget[7]).useDerivedValue(ge);
  const tmpResult3 = panelX(isOpenTarget[7]);
  class Te {
    constructor() {
      obj = { transform: null };
      obj = { translateX: closure_21.get() };
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  Te.__closure = { panelTranslateX: derivedValue };
  Te.__workletHash = 5189937813365;
  Te.__initData = isFocused;
  const animatedStyle = panelX(isOpenTarget[7]).useAnimatedStyle(Te);
  const tmpResult4 = panelX(isOpenTarget[7]);
  class Se {
    constructor() {
      value = closure_21.get();
      num = 0;
      if (value > 0) {
        num2 = 96;
        num = 0;
        if (value < 96) {
          tmp2 = globalThis;
          _Math = Math;
          num3 = 48;
          num4 = 8;
          num5 = 1;
          num = 8 * (1 - Math.abs(value - 48) / 48);
        }
      }
      items = [];
      items[0] = { translateX: num };
      return { transform: items };
    }
  }
  Se.__closure = {
    panelTranslateX: derivedValue,
    HOME_DRAWER_PULL_SETTLE_WIDTH: 96,
    HOME_DRAWER_PULL_DISTANCE: 8,
    MAX_HOME_DRAWER_ANIMATING_WIDTH: 48,
  };
  Se.__workletHash = 4479839024017;
  Se.__initData = sharedValue2;
  closure_23 = panelX(isOpenTarget[7]).useAnimatedStyle(Se);
  const items4 = [
    gestureState,
    panelX,
    snapX,
    isOpenTarget,
    sharedValue1,
    sharedValue,
    isFocused,
    maxX,
    isPanelTouchActive,
    noteInteraction,
    callback,
  ];
  const memo = obj5.useMemo(() => {
    function isSnappedOpen(arg0) {
      let tmp = 0 === beginDrag.get().panelX;
      if (tmp) {
        tmp = store.get() >= closure_1_10;
      }
      return tmp;
    }
    let obj = { gestureState: beginDrag, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1 };
    isSnappedOpen.__closure = obj;
    isSnappedOpen.__workletHash = 9287846667640;
    isSnappedOpen.__initData = drawerOpen;
    function visualPanelX() {
      const value = isSnappedOpen.get();
      if (typeof isSnappedOpen !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp2 = 0 === beginDrag.get().panelX;
      if (tmp2) {
        tmp2 = closure_1_9.get() >= sharedValue1;
      }
      let num = 0;
      if (tmp2) {
        num = navigation;
      }
      return value + num;
    }
    obj = { panelX: isSnappedOpen, isSnappedOpen, SNAP_OPEN_DISTANCE: navigation };
    visualPanelX.__closure = obj;
    visualPanelX.__workletHash = 3002810483321;
    visualPanelX.__initData = num2;
    function settleDrawer(flag) {
      const result = settleDrawer.set(flag);
      let num = 0;
      if (flag) {
        num = closure_5;
      }
      const result1 = isSnappedOpen.set(
        isSnappedOpen(settleDrawer[10]).withTiming(num, tmp3(tmp4[11]).HOME_DRAWER_SETTLE_TIMING),
      );
      let tmp3Result = tmp3(tmp4[10]);
      const result2 = visualPanelX.set(tmp3Result.withTiming(0, tmp3(tmp4[11]).HOME_DRAWER_SETTLE_TIMING));
      tmp3Result = tmp3(tmp4[7]);
      tmp3Result.runOnJS(isSnappedOpen(settleDrawer[18]).setHomeDrawerState)(flag);
    }
    obj = {
      isOpenTarget: settleDrawer,
      panelX: isSnappedOpen,
      withTiming: panelX(isOpenTarget[10]).withTiming,
      maxX,
      HOME_DRAWER_SETTLE_TIMING: panelX(isOpenTarget[11]).HOME_DRAWER_SETTLE_TIMING,
      snapX: visualPanelX,
      runOnJS: panelX(isOpenTarget[7]).runOnJS,
      setHomeDrawerState: panelX(isOpenTarget[18]).setHomeDrawerState,
    };
    settleDrawer.__closure = obj;
    settleDrawer.__workletHash = 16022981660716;
    settleDrawer.__initData = closure_20;
    beginDrag = function beginDrag(initialX) {
      const value = isSnappedOpen.get();
      const sum = value + visualPanelX.get();
      const result = isSnappedOpen.set(sum);
      const result1 = visualPanelX.set(0);
      const obj = {};
      const merged = Object.assign(beginDrag.get());
      obj.active = true;
      obj.initialX = initialX;
      obj.panelX = sum;
      const result2 = beginDrag.set(obj);
    };
    beginDrag.__closure = { panelX: isSnappedOpen, snapX: visualPanelX, gestureState: beginDrag };
    beginDrag.__workletHash = 11164593259884;
    beginDrag.__initData = derivedValue;
    function shouldOpenFromPosition() {
      if (typeof visualPanelX !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const value = isSnappedOpen.get();
      if (typeof isSnappedOpen !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp2 = 0 === beginDrag.get().panelX;
      if (tmp2) {
        tmp2 = closure_1_9.get() >= sharedValue1;
      }
      let num = 0;
      if (tmp2) {
        num = navigation;
      }
      const sum = value + num;
      let tmp6 = 0 !== sum;
      if (tmp6) {
        let tmp8 = sum > 0.5 * closure_1_5;
        if (!tmp8) {
          let tmp10 = sum >= sharedValue1;
          if (tmp10) {
            tmp10 = closure_1_9.get() > 0;
          }
          tmp8 = tmp10;
        }
        tmp6 = tmp8;
      }
      return tmp6;
    }
    shouldOpenFromPosition.__closure = {
      visualPanelX,
      FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5,
      maxX,
      INITIAL_OPEN_WIDTH: sharedValue1,
      dragOffsetX: sharedValue,
    };
    shouldOpenFromPosition.__workletHash = 10848510735760;
    shouldOpenFromPosition.__initData = animatedStyle;
    const Gesture = panelX(isOpenTarget[19]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isFocused);
    let result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function u(absoluteX) {
      const result = closure_7.set(true);
      const result1 = closure_10.set(false);
      const obj = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      const value = isSnappedOpen.get();
      obj[3] = value + visualPanelX.get();
      const result2 = beginDrag.set(obj);
    };
    fn.__closure = {
      isPanelTouchActive,
      didSettle: sharedValue1,
      gestureState: beginDrag,
      panelX: isSnappedOpen,
      snapX: visualPanelX,
    };
    fn.__workletHash = 6011354571830;
    fn.__initData = closure_1_27;
    const maxPointersResult = result.maxPointers(1);
    obj1 = {
      isPanelTouchActive,
      didSettle: sharedValue1,
      gestureState: beginDrag,
      panelX: isSnappedOpen,
      snapX: visualPanelX,
    };
    const fn2 = function s(arg0, activate) {
      let obj = beginDrag;
      if (!beginDrag.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - obj.get().initialX);
        const _Math2 = Math;
        const absolute1 = Math.abs(arg0.changedTouches[0].absoluteY - obj.get().initialY);
        let value = settleDrawer.get();
        if (absolute1 <= absolute) {
          if (value) {
            if (absolute >= 10) {
              if (typeof beginDrag !== "function") {
                HermesBuiltin.throwTypeError();
              }
              value = isSnappedOpen.get();
              const sum = value + visualPanelX.get();
              const result = isSnappedOpen.set(sum);
              const result1 = visualPanelX.set(0);
              obj = {};
              const merged = Object.assign(obj.get());
              obj.active = true;
              obj.initialX = absoluteX;
              obj.panelX = sum;
              const result2 = obj.set(obj);
              activate.activate();
            }
          }
        }
        activate.fail();
      }
    };
    fn2.__closure = { gestureState: beginDrag, isOpenTarget: settleDrawer, ACTIVATION_MIN_DISTANCE: 10, beginDrag };
    fn2.__workletHash = 15764290393032;
    fn2.__initData = closure_1_26;
    const onBeginResult = result.maxPointers(1).onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (beginDrag.get().active) {
        const diff = absoluteX.absoluteX - obj.get().initialX;
        const result = store.set(diff);
        if (0 === obj.get().panelX) {
          if (diff >= 0) {
            let set = isSnappedOpen.set;
            if (diff < closure_1_10) {
              let result1 = diff / 3;
            } else {
              result1 = diff - closure_1_11;
            }
            set = set(result1);
          }
        }
        const _Math = Math;
        const result2 = isSnappedOpen.set(Math.max(diff + obj.get().panelX, 0));
      }
    };
    fn3.__closure = {
      gestureState: beginDrag,
      dragOffsetX: sharedValue,
      panelX: isSnappedOpen,
      INITIAL_OPEN_WIDTH: sharedValue1,
      DRAWER_RESISTANCE: 3,
      SNAP_OPEN_DISTANCE: navigation,
    };
    fn3.__workletHash = 12757592166817;
    fn3.__initData = first;
    const onTouchesMoveResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      if (velocityX.velocityX > 50) {
        if (closure_1_9.get() > 40) {
          let flag = true;
          if (closure_1_9.get() < sharedValue1) {
            const obj2 = panelX(isOpenTarget[7]);
            panelX(isOpenTarget[7]).runOnJS(panelX(isOpenTarget[12]).triggerHapticFeedback)(
              panelX(isOpenTarget[12]).HapticFeedbackTypes.IMPACT_MEDIUM,
            );
            flag = true;
            const runOnJSResult = panelX(isOpenTarget[7]).runOnJS(panelX(isOpenTarget[12]).triggerHapticFeedback);
          }
        }
        settleDrawer(flag);
        const result = closure_1_10.set(true);
        const tmp26 = beginDrag.get().panelX > 0;
        if (flag) {
          if (!tmp26) {
            panelX(isOpenTarget[7]).runOnJS(closure_1_12)(callback.OPEN);
            const obj3 = panelX(isOpenTarget[7]);
          }
        }
        if (!tmp26) {
          panelX(isOpenTarget[7]).runOnJS(closure_1_12)(callback.PEEK);
          const obj4 = panelX(isOpenTarget[7]);
        }
      }
      if (velocityX.velocityX < -50) {
        if (closure_1_9.get() < -40) {
          const obj = panelX(isOpenTarget[7]);
          panelX(isOpenTarget[7]).runOnJS(panelX(isOpenTarget[12]).triggerHapticFeedback)(
            panelX(isOpenTarget[12]).HapticFeedbackTypes.SOFT,
          );
          flag = false;
          const runOnJSResult1 = panelX(isOpenTarget[7]).runOnJS(panelX(isOpenTarget[12]).triggerHapticFeedback);
        }
      }
      flag = shouldOpenFromPosition();
    };
    const onChangeResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = {
      FLING_MIN_VELOCITY: 50,
      dragOffsetX: sharedValue,
      FLING_MIN_DISTANCE: 40,
      INITIAL_OPEN_WIDTH: sharedValue1,
      runOnJS: panelX(isOpenTarget[7]).runOnJS,
      triggerHapticFeedback: panelX(isOpenTarget[12]).triggerHapticFeedback,
      HapticFeedbackTypes: panelX(isOpenTarget[12]).HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      didSettle: sharedValue1,
      gestureState: beginDrag,
      trackServerDrawerInteract: callback,
      ServerDrawerInteractAction: callback,
    };
    fn4.__workletHash = 11498858847040;
    fn4.__initData = memo;
    let obj2 = {
      FLING_MIN_VELOCITY: 50,
      dragOffsetX: sharedValue,
      FLING_MIN_DISTANCE: 40,
      INITIAL_OPEN_WIDTH: sharedValue1,
      runOnJS: panelX(isOpenTarget[7]).runOnJS,
      triggerHapticFeedback: panelX(isOpenTarget[12]).triggerHapticFeedback,
      HapticFeedbackTypes: panelX(isOpenTarget[12]).HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      didSettle: sharedValue1,
      gestureState: beginDrag,
      trackServerDrawerInteract: callback,
      ServerDrawerInteractAction: callback,
    };
    const fn5 = function e() {
      let active = beginDrag.get().active;
      if (active) {
        active = !closure_1_10.get();
      }
      if (active) {
        settleDrawer(shouldOpenFromPosition());
      }
      const result = closure_1_7.set(false);
      panelX(isOpenTarget[7]).runOnJS(closure_1_8)();
      const result1 = beginDrag.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = closure_1_9.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = {
      gestureState: beginDrag,
      didSettle: sharedValue1,
      settleDrawer,
      shouldOpenFromPosition,
      isPanelTouchActive,
      runOnJS: panelX(isOpenTarget[7]).runOnJS,
      noteInteraction,
      dragOffsetX: sharedValue,
    };
    fn5.__workletHash = 5649638668309;
    fn5.__initData = closure_23;
    return onEndResult.onFinalize(fn5);
  }, items4);
  const first = gestureState(
    obj5.useState(() => ({
      gesture: memo,
      panelStyles: animatedStyle,
      gestureState,
      panelX,
      panelTranslateX: derivedValue,
      guildsBarDrawerStyle: closure_23,
    })),
    1,
  )[0];
  const items5 = [first, enableHome];
  obj1 = {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: obj5.useMemo(() => ({ homeDrawerState: first, enableHome }), items5),
  };
  return obj1;
};
export const HomeDrawerStateContext = context;
export const useHomeDrawerState = function useHomeDrawerState() {
  return importAllResult.useContext(context).homeDrawerState;
};
export const useIsHomeDrawerEnabled = function useIsHomeDrawerEnabled() {
  return importAllResult.useContext(context).enableHome;
};
