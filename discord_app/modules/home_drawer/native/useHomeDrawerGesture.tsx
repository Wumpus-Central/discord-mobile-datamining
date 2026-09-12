// discord_app/modules/home_drawer/native/useHomeDrawerGesture.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import HomeDrawerAnimations from "HomeDrawerAnimations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import HomeDrawerStore from "HomeDrawerStore.tsx";
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore.tsx";

require = fn;
const computeMaxX = fn(16116).computeMaxX;
const AnalyticEvents = fn(1074).AnalyticEvents;
const LaunchPadTypes = fn(11597).LaunchPadTypes;
let c10 = 144;
let c11 = 1000;
let c12 = 96.00000000000001;
let c13 = 48;
let closure_14 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_15 = {
  code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}",
};
let closure_16 = {
  code: "function useHomeDrawerGestureTsx2(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}",
};
let closure_17 = {
  code: "function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}",
};
let closure_18 = {
  code: "function useHomeDrawerGestureTsx4(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}",
};
let closure_19 = {
  code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}",
};
let __initData = {
  code: "function useHomeDrawerGestureTsx6(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}",
};
let __initData2 = {
  code: "function useHomeDrawerGestureTsx7(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}",
};
let closure_22 = {
  code: "function useHomeDrawerGestureTsx8(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}",
};
let closure_23 = {
  code: "function useHomeDrawerGestureTsx9(){const{pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}",
};
let closure_24 = {
  code: "function useHomeDrawerGestureTsx10(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}",
};
let closure_25 = {
  code: "function visualPanelX_useHomeDrawerGestureTsx11(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}",
};
let closure_26 = {
  code: "function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING));runOnJS(setHomeDrawerState)(shouldOpen);}",
};
let closure_27 = {
  code: "function fireThrow_useHomeDrawerGestureTsx13(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}",
};
let closure_28 = {
  code: "function beginDrag_useHomeDrawerGestureTsx14(touchX){const{panelX,snapX,isPullActive,PULL_ACTIVE_MAX_START,gestureState}=this.__closure;const currentX=panelX.get()+snapX.get();isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}",
};
let closure_29 = {
  code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}",
};
let closure_30 = {
  code: "function useHomeDrawerGestureTsx16(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}",
};
let closure_31 = {
  code: "function useHomeDrawerGestureTsx17(event){const{FLING_THROW_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,FLING_MIN_VELOCITY,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;if(event.velocityX>FLING_THROW_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE&&!snappedByDrag.get()){fireThrow();}let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}",
};
let closure_32 = {
  code: "function useHomeDrawerGestureTsx18(event){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}}",
};
let closure_33 = {
  code: "function useHomeDrawerGestureTsx19(event,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX);manager.activate();}",
};
let closure_34 = {
  code: "function useHomeDrawerGestureTsx20(event){const{isPanelTouchActive,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}",
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
let Gesture = fn(6756).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
let ReanimatedHelperTypes = fn(7177);
obj.gestureState = ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
ReanimatedHelperTypes = fn(7177);
obj.panelX = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7177);
obj.panelTranslateX = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.guildsBarDrawerStyle = {};
ReanimatedHelperTypes = fn(7177);
obj.guildsBarPullX = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
const size = fn(2);
let result = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export const useHomeGesture = function useHomeGesture() {
  const MobileHomeDrawerExperiment = landOnHome(snapX[6]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
  ({ enableHome, landOnHome } = config);
  let tmp4 = updateMaxX();
  const panelX = tmp4.panelX;
  snapX = tmp4.snapX;
  const isOpenTarget = tmp4.isOpenTarget;
  const gestureState = tmp4.gestureState;
  updateMaxX = tmp4.updateMaxX;
  const maxX = tmp4.maxX;
  const setPanelX = tmp4.setPanelX;
  const isPanelTouchActive = tmp4.isPanelTouchActive;
  const noteInteraction = tmp4.noteInteraction;
  let obj = landOnHome(snapX[7]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = landOnHome(snapX[7]);
  const sharedValue1 = obj1.useSharedValue(false);
  let obj2 = landOnHome(snapX[7]);
  const sharedValue2 = obj2.useSharedValue(false);
  const sharedValue3 = landOnHome(snapX[7]).useSharedValue(false);
  let obj4 = landOnHome(snapX[7]);
  const sharedValue4 = landOnHome(snapX[7]).useSharedValue(0);
  let obj5 = landOnHome(snapX[7]);
  const sharedValue5 = landOnHome(snapX[7]).useSharedValue(false);
  let obj6 = landOnHome(snapX[7]);
  const sharedValue6 = landOnHome(snapX[7]).useSharedValue(false);
  const obj7 = landOnHome(snapX[7]);
  const navigation = landOnHome(snapX[8]).useNavigation();
  gestureState.useCallback((action) => {
    panelX(snapX[9]);
    const obj = { action };
    obj.track(isPanelTouchActive.SERVER_DRAWER_INTERACT, obj);
  }, []);
  const obj8 = landOnHome(snapX[8]);
  let fn = function b() {
    let tmp = 0 === gestureState.get().panelX;
    if (tmp) {
      tmp = sharedValue.get() >= c10;
    }
    return tmp;
  };
  obj = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 17562466882099;
  fn.__initData = sharedValue5;
  const derivedValue = landOnHome(snapX[7]).useDerivedValue(fn);
  const obj11 = landOnHome(snapX[7]);
  let fn2 = function x() {
    return derivedValue.get();
  };
  fn2.__closure = { isSnappedOpen: derivedValue };
  fn2.__workletHash = 5063476059943;
  fn2.__initData = sharedValue6;
  let fn3 = function k(arg0, arg1) {
    if (gestureState.get().active) {
      if (null !== arg1) {
        if (arg0 !== arg1) {
          if (arg0) {
            const result = sharedValue2.set(true);
            const result1 = snapX.set(timing.withTiming(c12, HomeDrawerAnimations.HOME_DRAWER_SNAP_TIMING));
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          } else if (sharedValue2.get()) {
            const result2 = sharedValue4.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
            const result3 = sharedValue6.set(false);
            const result4 = sharedValue5.set(false);
            const result5 = snapX.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.SOFT);
            const runOnJSResult1 = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          }
          return tmp28;
        }
      }
    }
  };
  obj = {
    gestureState,
    didSnapThisGesture: sharedValue2,
    snapX,
    withTiming: landOnHome(snapX[10]).withTiming,
    SNAP_OPEN_DISTANCE: sharedValue2,
    HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SNAP_TIMING,
    runOnJS: landOnHome(snapX[7]).runOnJS,
    triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
    HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
    flingThrow: sharedValue4,
    HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_UNSNAP_TIMING,
    hasThrown: sharedValue6,
    snappedByDrag: sharedValue5,
  };
  fn3.__closure = obj;
  fn3.__workletHash = 15139721367747;
  fn3.__initData = navigation;
  const animatedReaction = landOnHome(snapX[7]).useAnimatedReaction(fn2, fn3);
  let tmp16 = panelX(snapX[13])();
  __initData = tmp16;
  const tmp17 = panelX(snapX[14])();
  __initData2 = tmp17;
  const tmp18 = panelX(snapX[16])();
  if (enableHome) {
    enableHome = !tmp19;
  }
  if (enableHome) {
    enableHome = !panelX(snapX[15])().isChatBesideChannelList;
  }
  let tmpResult = tmp(tmp2[8]);
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = tmp(tmp2[7]);
  const sharedValue7 = tmpResult.useSharedValue(0);
  const obj13 = landOnHome(snapX[7]);
  let tmp14 = sharedValue2;
  tmp19 = tmp18 === noteInteraction.GESTURE_FULL || tmp18 === noteInteraction.GESTURE_EDGE;
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = landOnHome(snapX[17]).useHomeDrawerPeekHint(enablePeekHint, sharedValue7);
  let state = navigation.getState();
  const tmpResult1 = landOnHome(snapX[17]);
  let tmp24;
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
      tmp24 = routes[num];
    }
  }
  let coerceGuildsRouteResult = landOnHome(snapX[18]).coerceGuildsRoute(tmp24);
  let tmp26 = enableHome;
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
    tmp26 = drawerOpen;
  }
  drawerOpen = tmp26;
  let num2 = 0;
  if (tmp26) {
    num2 = maxX(tmp16, tmp17);
  }
  let items = [tmp16, tmp17, updateMaxX, enableHome];
  const effect = obj10.useEffect(() => {
    if (enableHome) {
      updateMaxX(closure_20, closure_21);
    } else {
      updateMaxX({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX, snapX, isOpenTarget];
  const effect1 = obj10.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      NavigationRouteUtils.setHomeDrawerState(false);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect2 = obj10.useEffect(() => {
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
      const coerceGuildsRouteResult = landOnHome(snapX[18]).coerceGuildsRoute(tmp);
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
          closure_1_7(str);
          state = setPanelX.getState();
          if (true === drawerOpen) {
            state.startTimer();
          } else {
            state.stopTimer();
          }
        }
      }
      const obj = landOnHome(snapX[18]);
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
      const state = HomeDrawerSubtitleStore.getState();
      state.stopTimer();
    };
  }, items2);
  __initData = obj10.useRef(false);
  const items3 = [enableHome, tmp26, num2, panelX, isOpenTarget];
  const layoutEffect = obj10.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !__initData.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        const state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      __initData.current = true;
    }
  }, items3);
  const tmpResult2 = landOnHome(snapX[18]);
  class Re {
    constructor() {
      value = panelX.get();
      sum = value + snapX.get();
      return sum + closure_24.get();
    }
  }
  Re.__closure = { panelX, snapX, peekX: sharedValue7 };
  Re.__workletHash = 2679501612865;
  Re.__initData = __initData;
  const derivedValue1 = landOnHome(snapX[7]).useDerivedValue(Re);
  const tmpResult3 = landOnHome(snapX[7]);
  class Xe {
    constructor() {
      obj = { transform: null };
      obj = { translateX: closure_28.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  Xe.__closure = { panelTranslateX: derivedValue1 };
  Xe.__workletHash = 15504517955444;
  Xe.__initData = derivedValue;
  const animatedStyle = landOnHome(snapX[7]).useAnimatedStyle(Xe);
  const tmpResult4 = landOnHome(snapX[7]);
  function we() {
    value = isOpenTarget.get();
    if (!value) {
      value = isPanelTouchActive.get();
      let tmp4 = !value;
      if (!value) {
        tmp4 = derivedValue1.get() <= 0;
      }
      value = tmp4;
    }
    return value;
  }
  we.__closure = { isOpenTarget, isPanelTouchActive, panelTranslateX: derivedValue1 };
  we.__workletHash = 635704459123;
  we.__initData = __initData;
  class Me {
    constructor(arg0) {
      value = arg0;
      if (arg0) {
        tmp2 = closure_13;
        value = closure_13.get();
      }
      if (value) {
        tmp3 = closure_13;
        flag = false;
        result = closure_13.set(false);
      }
      return;
    }
  }
  Me.__closure = { isPullActive: sharedValue3 };
  Me.__workletHash = 2260649385283;
  Me.__initData = __initData2;
  const animatedReaction1 = landOnHome(snapX[7]).useAnimatedReaction(we, Me);
  const tmpResult5 = landOnHome(snapX[7]);
  function ve() {
    value = derivedValue1.get();
    let num = 0;
    if (sharedValue3.get()) {
      num = 0;
      if (value > 0) {
        num = 0;
        if (value < 144) {
          if (value < c13) {
            let result = value / c13;
          } else {
            result = 1 - (value - c13) / c12;
          }
        }
      }
    }
    return num;
  }
  obj1 = {
    panelTranslateX: derivedValue1,
    isPullActive: sharedValue3,
    HOME_DRAWER_PULL_SETTLE_WIDTH: 144,
    MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue3,
    SNAP_OPEN_DISTANCE: tmp14,
  };
  ve.__closure = obj1;
  ve.__workletHash = 11347595493924;
  ve.__initData = enableHome;
  const derivedValue2 = landOnHome(snapX[7]).useDerivedValue(ve);
  const tmpResult6 = landOnHome(snapX[7]);
  class Ge {
    constructor() {
      result = 12 * closure_30.get();
      return Math.max(result, 16 * closure_14.get());
    }
  }
  Ge.__closure = {
    pullFraction: derivedValue2,
    HOME_DRAWER_PULL_DISTANCE: 12,
    flingThrow: sharedValue4,
    HOME_DRAWER_FLING_THROW_DISTANCE: 16,
  };
  Ge.__workletHash = 6546517869662;
  Ge.__initData = isFocused;
  const derivedValue3 = landOnHome(snapX[7]).useDerivedValue(Ge);
  const tmpResult7 = landOnHome(snapX[7]);
  class We {
    constructor() {
      obj = { transform: null };
      obj = { translateX: closure_31.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  We.__closure = { guildsBarPullX: derivedValue3 };
  We.__workletHash = 12108954192160;
  We.__initData = sharedValue7;
  closure_32 = landOnHome(snapX[7]).useAnimatedStyle(We);
  const items4 = [
    gestureState,
    panelX,
    snapX,
    isOpenTarget,
    sharedValue1,
    sharedValue2,
    derivedValue,
    sharedValue3,
    derivedValue2,
    sharedValue4,
    sharedValue5,
    sharedValue6,
    sharedValue,
    isFocused,
    maxX,
    isPanelTouchActive,
    noteInteraction,
    __initData,
  ];
  const memo = obj10.useMemo(() => {
    function visualPanelX() {
      value = settleDrawer.get();
      let num = 0;
      if (derivedValue.get()) {
        num = sharedValue2;
      }
      return value + num;
    }
    let obj = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue2 };
    visualPanelX.__closure = obj;
    visualPanelX.__workletHash = 4571251061814;
    visualPanelX.__initData = drawerOpen;
    settleDrawer = function settleDrawer(flag) {
      const result = beginDrag.set(flag);
      let num = 0;
      if (flag) {
        num = maxX;
      }
      const result1 = settleDrawer.set(
        landOnHome(snapX[10]).withTiming(num, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING),
      );
      let tmp3Result = landOnHome(snapX[10]);
      const result2 = fireThrow.set(tmp3Result.withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING));
      tmp3Result = landOnHome(snapX[7]);
      tmp3Result.runOnJS(landOnHome(snapX[18]).setHomeDrawerState)(flag);
      const obj = landOnHome(snapX[10]);
    };
    obj = {
      isOpenTarget: beginDrag,
      panelX: settleDrawer,
      withTiming: landOnHome(snapX[10]).withTiming,
      maxX,
      HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING,
      snapX: fireThrow,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      setHomeDrawerState: landOnHome(snapX[18]).setHomeDrawerState,
    };
    settleDrawer.__closure = obj;
    settleDrawer.__workletHash = 11040545373175;
    settleDrawer.__initData = num2;
    fireThrow = function fireThrow() {
      value = sharedValue6.get();
      value = !value;
      if (!value) {
        value = sharedValue3.get();
      }
      if (value) {
        const result = sharedValue6.set(true);
        const result1 = sharedValue4.set(landOnHome(snapX[7]).clamp((12 * derivedValue2.get()) / 16, 0, 1));
        const obj2 = landOnHome(snapX[7]);
        const obj3 = landOnHome(snapX[7]);
        const obj4 = landOnHome(snapX[10]);
        const withTimingResult = landOnHome(snapX[10]).withTiming(
          1,
          landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING,
        );
        const result2 = sharedValue4.set(
          obj3.withSequence(
            withTimingResult,
            landOnHome(snapX[10]).withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING),
          ),
        );
        const obj5 = landOnHome(snapX[10]);
      }
    };
    obj = {
      hasThrown: sharedValue6,
      isPullActive: sharedValue3,
      flingThrow: sharedValue4,
      clamp: landOnHome(snapX[7]).clamp,
      pullFraction: derivedValue2,
      HOME_DRAWER_PULL_DISTANCE: 12,
      HOME_DRAWER_FLING_THROW_DISTANCE: 16,
      withSequence: landOnHome(snapX[7]).withSequence,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
    };
    fireThrow.__closure = obj;
    fireThrow.__workletHash = 7181188083978;
    fireThrow.__initData = __initData;
    beginDrag = function beginDrag(initialX) {
      value = settleDrawer.get();
      const sum = value + fireThrow.get();
      const result = sharedValue3.set(sum < 16);
      const result1 = settleDrawer.set(sum);
      const result2 = fireThrow.set(0);
      const obj = {};
      const merged = Object.assign(shouldOpenFromPosition.get());
      obj.active = true;
      obj.initialX = initialX;
      obj.panelX = sum;
      const result3 = shouldOpenFromPosition.set(obj);
    };
    beginDrag.__closure = {
      panelX: settleDrawer,
      snapX: fireThrow,
      isPullActive: sharedValue3,
      PULL_ACTIVE_MAX_START: 16,
      gestureState: shouldOpenFromPosition,
    };
    beginDrag.__workletHash = 5288588911243;
    beginDrag.__initData = derivedValue1;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      if (typeof visualPanelX === "function") {
        value = panelX.get();
        num2 = 0;
        if (derivedValue.get()) {
          num2 = c12;
        }
        const sum = value + num2;
        let tmp5 = 0 !== sum;
        if (tmp5) {
          let tmp7 = sum > 0.5 * maxX;
          if (!tmp7) {
            let tmp9 = sum >= c10;
            if (tmp9) {
              tmp9 = sharedValue.get() > 0;
            }
            tmp7 = tmp9;
          }
          tmp5 = tmp7;
        }
        return tmp5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    shouldOpenFromPosition.__closure = {
      visualPanelX,
      FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5,
      maxX,
      INITIAL_OPEN_WIDTH: sharedValue,
      dragOffsetX: sharedValue,
    };
    shouldOpenFromPosition.__workletHash = 13719937872789;
    shouldOpenFromPosition.__initData = animatedStyle;
    const Gesture = landOnHome(snapX[19]).Gesture;
    const PanResult = Gesture.Pan();
    const obj1 = {
      panelX: settleDrawer,
      snapX: fireThrow,
      isPullActive: sharedValue3,
      PULL_ACTIVE_MAX_START: 16,
      gestureState: shouldOpenFromPosition,
    };
    let obj2 = {
      visualPanelX,
      FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5,
      maxX,
      INITIAL_OPEN_WIDTH: sharedValue,
      dragOffsetX: sharedValue,
    };
    const enabledResult = Gesture.Pan().enabled(isFocused);
    let result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function _(absoluteX) {
      const result = isPanelTouchActive.set(true);
      const result1 = sharedValue1.set(false);
      const result2 = sharedValue2.set(false);
      const result3 = sharedValue5.set(false);
      const result4 = sharedValue6.set(false);
      let obj = landOnHome(snapX[10]);
      const result5 = sharedValue4.set(obj.withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING));
      obj = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      value = settleDrawer.get();
      obj.panelX = value + fireThrow.get();
      const result6 = shouldOpenFromPosition.set(obj);
    };
    const maxPointersResult = result.maxPointers(1);
    fn.__closure = {
      isPanelTouchActive,
      didSettle: sharedValue1,
      didSnapThisGesture: sharedValue2,
      snappedByDrag: sharedValue5,
      hasThrown: sharedValue6,
      flingThrow: sharedValue4,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
      gestureState: shouldOpenFromPosition,
      panelX: settleDrawer,
      snapX: fireThrow,
    };
    fn.__workletHash = 9754363908240;
    fn.__initData = __initData;
    let obj3 = {
      isPanelTouchActive,
      didSettle: sharedValue1,
      didSnapThisGesture: sharedValue2,
      snappedByDrag: sharedValue5,
      hasThrown: sharedValue6,
      flingThrow: sharedValue4,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
      gestureState: shouldOpenFromPosition,
      panelX: settleDrawer,
      snapX: fireThrow,
    };
    const fn2 = function s(arg0, activate) {
      let obj = gestureState;
      if (!gestureState.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - obj.get().initialX);
        const _Math2 = Math;
        const absolute1 = Math.abs(arg0.changedTouches[0].absoluteY - obj.get().initialY);
        value = isOpenTarget.get();
        if (absolute1 <= absolute) {
          if (value) {
            if (absolute >= 10) {
              if (typeof beginDrag === "function") {
                value = panelX.get();
                const sum = value + snapX.get();
                const result = sharedValue3.set(sum < 16);
                const result1 = panelX.set(sum);
                const result2 = snapX.set(0);
                obj = {};
                const merged = Object.assign(obj.get());
                obj.active = true;
                obj.initialX = absoluteX;
                obj.panelX = sum;
                const result3 = obj.set(obj);
                activate.activate();
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        activate.fail();
      }
    };
    fn2.__closure = {
      gestureState: shouldOpenFromPosition,
      isOpenTarget: beginDrag,
      ACTIVATION_MIN_DISTANCE: 10,
      beginDrag,
    };
    fn2.__workletHash = 9771907003045;
    fn2.__initData = memo;
    const onBeginResult = maxPointersResult.onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (gestureState.get().active) {
        const diff = absoluteX.absoluteX - gestureState.get().initialX;
        const result = sharedValue.set(diff);
        value = panelX.get();
        const sum = value + snapX.get();
        if (0 === gestureState.get().panelX) {
          if (diff >= 0) {
            let set = panelX.set;
            if (diff < c10) {
              let result1 = diff / 3;
            } else {
              result1 = diff - c12;
            }
            set = set(result1);
          }
        }
        const _Math = Math;
        const result2 = panelX.set(Math.max(diff + gestureState.get().panelX, 0));
        let tmp13 = sum < c13;
        if (tmp13) {
          value = panelX.get();
          tmp13 = value + snapX.get() >= tmp12;
        }
        if (tmp13) {
          if (absoluteX.velocityX <= c11) {
            const result3 = sharedValue5.set(true);
          } else if (!sharedValue5.get()) {
            fireThrow();
          }
        }
      }
    };
    fn3.__closure = {
      gestureState: shouldOpenFromPosition,
      dragOffsetX: sharedValue,
      panelX: settleDrawer,
      snapX: fireThrow,
      INITIAL_OPEN_WIDTH: sharedValue,
      DRAWER_RESISTANCE: 3,
      SNAP_OPEN_DISTANCE: sharedValue2,
      MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue3,
      FLING_THROW_MIN_VELOCITY: sharedValue1,
      snappedByDrag: sharedValue5,
      fireThrow,
    };
    fn3.__workletHash = 7401507013781;
    fn3.__initData = __initData;
    let obj4 = {
      gestureState: shouldOpenFromPosition,
      dragOffsetX: sharedValue,
      panelX: settleDrawer,
      snapX: fireThrow,
      INITIAL_OPEN_WIDTH: sharedValue,
      DRAWER_RESISTANCE: 3,
      SNAP_OPEN_DISTANCE: sharedValue2,
      MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue3,
      FLING_THROW_MIN_VELOCITY: sharedValue1,
      snappedByDrag: sharedValue5,
      fireThrow,
    };
    const onTouchesMoveResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      let tmp = velocityX.velocityX > c11;
      if (tmp) {
        tmp = sharedValue.get() > 40;
      }
      if (tmp) {
        tmp = !sharedValue5.get();
      }
      if (tmp) {
        fireThrow();
      }
      if (velocityX.velocityX > 50) {
        if (sharedValue.get() > 40) {
          let flag = true;
          if (sharedValue.get() < c10) {
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            flag = true;
            const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          }
        }
        settleDrawer(flag);
        const result = sharedValue1.set(true);
        const tmp33 = gestureState.get().panelX > 0;
        if (flag) {
          if (!tmp33) {
            ReanimatedRexport.runOnJS(callback)(constants.OPEN);
          }
        }
        if (!tmp33) {
          ReanimatedRexport.runOnJS(callback)(constants.PEEK);
        }
      }
      if (velocityX.velocityX < -50) {
        if (sharedValue.get() < -40) {
          ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.SOFT);
          flag = false;
          const runOnJSResult1 = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
        }
      }
      if (typeof shouldOpenFromPosition === "function") {
        if (typeof visualPanelX === "function") {
          value = panelX.get();
          let num5 = 0;
          if (derivedValue.get()) {
            num5 = c12;
          }
          const sum = value + num5;
          flag = 0 !== sum;
          if (flag) {
            let tmp14 = sum > 0.5 * maxX;
            if (!tmp14) {
              let tmp16 = sum >= c10;
              if (tmp16) {
                tmp16 = sharedValue.get() > 0;
              }
              tmp14 = tmp16;
            }
            flag = tmp14;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    const onChangeResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = {
      FLING_THROW_MIN_VELOCITY: sharedValue1,
      dragOffsetX: sharedValue,
      FLING_MIN_DISTANCE: 40,
      snappedByDrag: sharedValue5,
      fireThrow,
      FLING_MIN_VELOCITY: 50,
      INITIAL_OPEN_WIDTH: sharedValue,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
      HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      didSettle: sharedValue1,
      gestureState: shouldOpenFromPosition,
      trackServerDrawerInteract,
      ServerDrawerInteractAction: sharedValue4,
    };
    fn4.__workletHash = 2728092324785;
    fn4.__initData = derivedValue3;
    let obj5 = {
      FLING_THROW_MIN_VELOCITY: sharedValue1,
      dragOffsetX: sharedValue,
      FLING_MIN_DISTANCE: 40,
      snappedByDrag: sharedValue5,
      fireThrow,
      FLING_MIN_VELOCITY: 50,
      INITIAL_OPEN_WIDTH: sharedValue,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
      HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      didSettle: sharedValue1,
      gestureState: shouldOpenFromPosition,
      trackServerDrawerInteract,
      ServerDrawerInteractAction: sharedValue4,
    };
    const fn5 = function e() {
      let active = gestureState.get().active;
      if (active) {
        active = !sharedValue1.get();
      }
      if (active) {
        if (typeof shouldOpenFromPosition === "function") {
          if (typeof visualPanelX === "function") {
            value = panelX.get();
            num2 = 0;
            if (derivedValue.get()) {
              num2 = c12;
            }
            const sum = value + num2;
            let tmp9 = 0 !== sum;
            if (tmp9) {
              let tmp11 = sum > 0.5 * maxX;
              if (!tmp11) {
                let tmp13 = sum >= c10;
                if (tmp13) {
                  tmp13 = sharedValue.get() > 0;
                }
                tmp11 = tmp13;
              }
              tmp9 = tmp11;
            }
            tmp2(tmp9);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = isPanelTouchActive.set(false);
      ReanimatedRexport.runOnJS(noteInteraction)();
      const result1 = gestureState.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = sharedValue.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = {
      gestureState: shouldOpenFromPosition,
      didSettle: sharedValue1,
      settleDrawer,
      shouldOpenFromPosition,
      isPanelTouchActive,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      noteInteraction,
      dragOffsetX: sharedValue,
    };
    fn5.__workletHash = 8653702968050;
    fn5.__initData = derivedValue2;
    return onEndResult.onFinalize(fn5);
  }, items4);
  const first = isOpenTarget(
    obj10.useState(() => ({
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
  const items5 = [first, enableHome, landOnHome];
  obj2 = {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: obj10.useMemo(() => {
      const obj = { homeDrawerState, enableHome, landOnHome: null };
      let tmp = enableHome;
      if (enableHome) {
        tmp = landOnHome;
      }
      obj.landOnHome = tmp;
      return obj;
    }, items5),
  };
  return obj2;
};
export const HomeDrawerStateContext = context;
export const useHomeDrawerState = function useHomeDrawerState() {
  return noop.useContext(context).homeDrawerState;
};
export const useIsHomeDrawerEnabled = function useIsHomeDrawerEnabled() {
  return noop.useContext(context).enableHome;
};
export const useDoesLandOnHomeDrawer = function useDoesLandOnHomeDrawer() {
  return noop.useContext(context).landOnHome;
};
