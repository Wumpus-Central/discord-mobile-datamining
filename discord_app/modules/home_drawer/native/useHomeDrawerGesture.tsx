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
const computeMaxX = fn(16419).computeMaxX;
const AnalyticEvents = fn(1074).AnalyticEvents;
const LaunchPadTypes = fn(11801).LaunchPadTypes;
let c10 = 144;
let c11 = 96.00000000000001;
let c12 = 48;
let closure_13 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_14 = {
  code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}",
};
let closure_15 = {
  code: "function useHomeDrawerGestureTsx2(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}",
};
let closure_16 = {
  code: "function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}",
};
let closure_17 = {
  code: "function useHomeDrawerGestureTsx4(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}",
};
let closure_18 = {
  code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}",
};
let closure_19 = {
  code: "function useHomeDrawerGestureTsx6(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}",
};
let closure_20 = {
  code: "function useHomeDrawerGestureTsx7(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}",
};
let __initData = {
  code: "function useHomeDrawerGestureTsx8(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}",
};
let __initData2 = {
  code: "function useHomeDrawerGestureTsx9(){const{pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}",
};
let closure_23 = {
  code: "function useHomeDrawerGestureTsx10(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}",
};
let closure_24 = {
  code: "function visualPanelX_useHomeDrawerGestureTsx11(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}",
};
let closure_25 = {
  code: "function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING));runOnJS(setHomeDrawerState)(shouldOpen);}",
};
let closure_26 = {
  code: "function fireThrow_useHomeDrawerGestureTsx13(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}",
};
let closure_27 = {
  code: "function beginDrag_useHomeDrawerGestureTsx14(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}",
};
let closure_28 = {
  code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}",
};
let closure_29 = {
  code: "function useHomeDrawerGestureTsx16(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}",
};
let closure_30 = {
  code: "function useHomeDrawerGestureTsx17(event){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen;if(isOpeningFling){shouldOpen=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}",
};
let closure_31 = {
  code: "function useHomeDrawerGestureTsx18(event){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}}",
};
let closure_32 = {
  code: "function useHomeDrawerGestureTsx19(event,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX);manager.activate();}",
};
let closure_33 = {
  code: "function useHomeDrawerGestureTsx20(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}",
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
let Gesture = fn(6983).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
let ReanimatedHelperTypes = fn(7405);
obj.gestureState = ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
ReanimatedHelperTypes = fn(7405);
obj.panelX = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7405);
obj.panelTranslateX = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.guildsBarDrawerStyle = {};
ReanimatedHelperTypes = fn(7405);
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
  const sharedValue = landOnHome(snapX[7]).useSharedValue(0);
  let obj = landOnHome(snapX[7]);
  const sharedValue1 = landOnHome(snapX[7]).useSharedValue(0);
  let obj2 = landOnHome(snapX[7]);
  const sharedValue2 = landOnHome(snapX[7]).useSharedValue(false);
  let obj3 = landOnHome(snapX[7]);
  const sharedValue3 = landOnHome(snapX[7]).useSharedValue(false);
  let obj4 = landOnHome(snapX[7]);
  const sharedValue4 = landOnHome(snapX[7]).useSharedValue(false);
  let obj5 = landOnHome(snapX[7]);
  const sharedValue5 = landOnHome(snapX[7]).useSharedValue(0);
  let obj6 = landOnHome(snapX[7]);
  const sharedValue6 = landOnHome(snapX[7]).useSharedValue(false);
  let obj7 = landOnHome(snapX[7]);
  const sharedValue7 = landOnHome(snapX[7]).useSharedValue(false);
  let obj8 = landOnHome(snapX[7]);
  const navigation = landOnHome(snapX[8]).useNavigation();
  __initData = gestureState.useCallback((action) => {
    panelX(snapX[9]).track(isPanelTouchActive.SERVER_DRAWER_INTERACT, { action });
  }, []);
  const obj9 = landOnHome(snapX[8]);
  class C {
    constructor() {
      tmp = 0 === gestureState.get().panelX;
      if (tmp) {
        tmp2 = closure_10;
        tmp3 = c10;
        tmp = closure_10.get() >= c10;
      }
      return tmp;
    }
  }
  C.__closure = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
  C.__workletHash = 17562466882099;
  C.__initData = sharedValue4;
  const derivedValue = landOnHome(snapX[7]).useDerivedValue(C);
  const obj10 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
  const obj12 = landOnHome(snapX[7]);
  let fn = function k() {
    return derivedValue.get();
  };
  fn.__closure = { isSnappedOpen: derivedValue };
  fn.__workletHash = 5063476059943;
  fn.__initData = sharedValue5;
  let fn2 = function b(arg0, arg1) {
    if (gestureState.get().active) {
      if (null !== arg1) {
        if (arg0 !== arg1) {
          if (arg0) {
            const result = sharedValue3.set(true);
            const result1 = snapX.set(timing.withTiming(c11, HomeDrawerAnimations.HOME_DRAWER_SNAP_TIMING));
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          } else if (sharedValue3.get()) {
            const result2 = sharedValue5.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
            const result3 = sharedValue7.set(false);
            const result4 = sharedValue6.set(false);
            const result5 = snapX.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.SOFT);
            const runOnJSResult1 = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          }
          return tmp28;
        }
      }
    }
  };
  const obj14 = landOnHome(snapX[7]);
  fn2.__closure = {
    gestureState,
    didSnapThisGesture: sharedValue3,
    snapX,
    withTiming: landOnHome(snapX[10]).withTiming,
    SNAP_OPEN_DISTANCE: sharedValue1,
    HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SNAP_TIMING,
    runOnJS: landOnHome(snapX[7]).runOnJS,
    triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
    HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
    flingThrow: sharedValue5,
    HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_UNSNAP_TIMING,
    hasThrown: sharedValue7,
    snappedByDrag: sharedValue6,
  };
  fn2.__workletHash = 15139721367747;
  fn2.__initData = sharedValue6;
  const animatedReaction = obj14.useAnimatedReaction(fn, fn2);
  let tmp17 = panelX(snapX[13])();
  __initData = tmp17;
  const tmp18 = panelX(snapX[14])();
  __initData2 = tmp18;
  const tmp19 = panelX(snapX[16])();
  if (enableHome) {
    enableHome = !tmp20;
  }
  if (enableHome) {
    enableHome = !panelX(snapX[15])().isChatBesideChannelList;
  }
  const tmp22 = isOpenTarget(gestureState.useState({ isOnMain: true }), 2);
  __initData = tmp22[1];
  const effect = obj11.useEffect(() => {
    const rootNavigationRef = landOnHome(snapX[17]).getRootNavigationRef();
    let state = rootNavigationRef;
    if (null != rootNavigationRef) {
      state = undefined;
      if (rootNavigationRef != null) {
        state = rootNavigationRef.getState();
      }
      let tmp2 = null != state;
      if (tmp2) {
        let name;
        if (state.routes[state.index] != null) {
          name = tmp3.name;
        }
        tmp2 = "main" === name;
      }
      state = tmp2;
      function handleRootStateChange() {
        state = undefined;
        if (state != null) {
          state = state.getState();
        }
        let tmp2 = null != state;
        if (tmp2) {
          let name;
          if (state.routes[state.index] != null) {
            name = tmp3.name;
          }
          tmp2 = "main" === name;
        }
        state = tmp2;
        closure_25((isOnMain) => {
          let tmp = isOnMain;
          if (isOnMain.isOnMain !== closure_0) {
            const obj = { isOnMain: tmp2 };
            tmp = obj;
          }
          return tmp;
        });
      }
      __initData((isOnMain) => {
        let tmp = isOnMain;
        if (isOnMain.isOnMain !== closure_0) {
          const obj = { isOnMain: tmp2 };
          tmp = obj;
        }
        return tmp;
      });
      return rootNavigationRef.addListener("state", handleRootStateChange);
    }
    let obj = landOnHome(snapX[17]);
  }, []);
  const obj13 = {
    gestureState,
    didSnapThisGesture: sharedValue3,
    snapX,
    withTiming: landOnHome(snapX[10]).withTiming,
    SNAP_OPEN_DISTANCE: sharedValue1,
    HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SNAP_TIMING,
    runOnJS: landOnHome(snapX[7]).runOnJS,
    triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
    HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
    flingThrow: sharedValue5,
    HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_UNSNAP_TIMING,
    hasThrown: sharedValue7,
    snappedByDrag: sharedValue6,
  };
  let tmp15 = sharedValue1;
  tmp20 = tmp19 === noteInteraction.GESTURE_FULL || tmp19 === noteInteraction.GESTURE_EDGE;
  const tmp21 = isOpenTarget;
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = landOnHome(snapX[8]);
  const sharedValue8 = landOnHome(snapX[7]).useSharedValue(0);
  const tmpResult10 = landOnHome(snapX[7]);
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = landOnHome(snapX[18]).useHomeDrawerPeekHint(enablePeekHint, sharedValue8);
  let state = navigation.getState();
  const tmpResult11 = landOnHome(snapX[18]);
  let tmp29;
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
      tmp29 = routes[num];
    }
  }
  let coerceGuildsRouteResult = landOnHome(snapX[19]).coerceGuildsRoute(tmp29);
  let tmp31 = enableHome;
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
    tmp31 = drawerOpen;
  }
  drawerOpen = tmp31;
  let num2 = 0;
  if (tmp31) {
    num2 = maxX(tmp17, tmp18);
  }
  let items = [tmp17, tmp18, updateMaxX, enableHome];
  const effect1 = obj11.useEffect(() => {
    if (enableHome) {
      updateMaxX(closure_21, closure_22);
    } else {
      updateMaxX({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX, snapX, isOpenTarget];
  const effect2 = obj11.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      NavigationRouteUtils.setHomeDrawerState(false);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect3 = obj11.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
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
      const coerceGuildsRouteResult = landOnHome(snapX[19]).coerceGuildsRoute(tmp);
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
          const state1 = setPanelX.getState();
          if (true === drawerOpen) {
            state1.startTimer();
          } else {
            state1.stopTimer();
          }
        }
      }
      const obj = landOnHome(snapX[19]);
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
      const state = HomeDrawerSubtitleStore.getState();
      state.stopTimer();
    };
  }, items2);
  __initData2 = obj11.useRef(false);
  const items3 = [enableHome, tmp31, num2, panelX, isOpenTarget];
  const layoutEffect = obj11.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !__initData2.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        const state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      __initData2.current = true;
    }
  }, items3);
  const tmpResult12 = landOnHome(snapX[19]);
  function me() {
    value = panelX.get();
    const sum = value + snapX.get();
    return sum + sharedValue8.get();
  }
  me.__closure = { panelX, snapX, peekX: sharedValue8 };
  me.__workletHash = 2679501612865;
  me.__initData = sharedValue7;
  const derivedValue1 = landOnHome(snapX[7]).useDerivedValue(me);
  const tmpResult13 = landOnHome(snapX[7]);
  function ve() {
    const obj = { transform: null };
    const items = [{ translateX: derivedValue1.get() }];
    obj.transform = items;
    return obj;
  }
  ve.__closure = { panelTranslateX: derivedValue1 };
  ve.__workletHash = 15504517955444;
  ve.__initData = navigation;
  const animatedStyle = landOnHome(snapX[7]).useAnimatedStyle(ve);
  const tmpResult14 = landOnHome(snapX[7]);
  class Ge {
    constructor() {
      value = isOpenTarget.get();
      if (!value) {
        tmp2 = isPanelTouchActive;
        value1 = isPanelTouchActive.get();
        tmp4 = !value1;
        if (!value1) {
          tmp5 = closure_31;
          num = 0;
          tmp4 = closure_31.get() <= 0;
        }
        value = tmp4;
      }
      return value;
    }
  }
  Ge.__closure = { isOpenTarget, isPanelTouchActive, panelTranslateX: derivedValue1 };
  Ge.__workletHash = 635704459123;
  Ge.__initData = __initData;
  class Pe {
    constructor(arg0) {
      value = arg0;
      if (arg0) {
        tmp2 = closure_14;
        value = closure_14.get();
      }
      if (value) {
        tmp3 = closure_14;
        flag = false;
        result = closure_14.set(false);
      }
      return;
    }
  }
  Pe.__closure = { isPullActive: sharedValue4 };
  Pe.__workletHash = 2260649385283;
  Pe.__initData = derivedValue;
  const animatedReaction1 = landOnHome(snapX[7]).useAnimatedReaction(Ge, Pe);
  const tmpResult15 = landOnHome(snapX[7]);
  class Le {
    constructor() {
      value = closure_31.get();
      num = 0;
      if (closure_14.get()) {
        num = 0;
        if (value > 0) {
          num2 = 144;
          num = 0;
          if (value < 144) {
            tmp2 = c12;
            if (value < c12) {
              result = value / tmp2;
            } else {
              tmp3 = c11;
              num3 = 1;
              result = 1 - (value - tmp2) / c11;
            }
            tmp5 = result;
          }
        }
      }
      return num;
    }
  }
  Le.__closure = {
    panelTranslateX: derivedValue1,
    isPullActive: sharedValue4,
    HOME_DRAWER_PULL_SETTLE_WIDTH: 144,
    MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue2,
    SNAP_OPEN_DISTANCE: tmp15,
  };
  Le.__workletHash = 11347595493924;
  Le.__initData = __initData;
  const derivedValue2 = landOnHome(snapX[7]).useDerivedValue(Le);
  const obj15 = {
    panelTranslateX: derivedValue1,
    isPullActive: sharedValue4,
    HOME_DRAWER_PULL_SETTLE_WIDTH: 144,
    MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue2,
    SNAP_OPEN_DISTANCE: tmp15,
  };
  const tmpResult16 = landOnHome(snapX[7]);
  class Ce {
    constructor() {
      result = 12 * closure_33.get();
      return Math.max(result, 16 * closure_15.get());
    }
  }
  Ce.__closure = {
    pullFraction: derivedValue2,
    HOME_DRAWER_PULL_DISTANCE: 12,
    flingThrow: sharedValue5,
    HOME_DRAWER_FLING_THROW_DISTANCE: 16,
  };
  Ce.__workletHash = 6546517869662;
  Ce.__initData = __initData2;
  const derivedValue3 = landOnHome(snapX[7]).useDerivedValue(Ce);
  const tmpResult17 = landOnHome(snapX[7]);
  function be() {
    const obj = { transform: null };
    const items = [{ translateX: derivedValue3.get() }];
    obj.transform = items;
    return obj;
  }
  be.__closure = { guildsBarPullX: derivedValue3 };
  be.__workletHash = 12108954192160;
  be.__initData = enableHome;
  const guildsBarDrawerStyle = landOnHome(snapX[7]).useAnimatedStyle(be);
  const items4 = [
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
    __initData,
    __initData,
  ];
  const memo = obj11.useMemo(() => {
    function visualPanelX() {
      value = settleDrawer.get();
      let num = 0;
      if (derivedValue.get()) {
        num = sharedValue1;
      }
      return value + num;
    }
    visualPanelX.__closure = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue1 };
    visualPanelX.__workletHash = 4571251061814;
    visualPanelX.__initData = __initData;
    settleDrawer = function settleDrawer(flag) {
      const result = beginDrag.set(flag);
      let num = 0;
      if (flag) {
        num = maxX;
      }
      const result1 = settleDrawer.set(
        landOnHome(snapX[10]).withTiming(num, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING),
      );
      const obj = landOnHome(snapX[10]);
      const result2 = fireThrow.set(
        landOnHome(snapX[10]).withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING),
      );
      const tmp3Result = landOnHome(snapX[10]);
      landOnHome(snapX[7]).runOnJS(landOnHome(snapX[19]).setHomeDrawerState)(flag);
      const tmp3Result2 = landOnHome(snapX[7]);
    };
    settleDrawer.__closure = {
      isOpenTarget: beginDrag,
      panelX: settleDrawer,
      withTiming: landOnHome(snapX[10]).withTiming,
      maxX,
      HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING,
      snapX: fireThrow,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      setHomeDrawerState: landOnHome(snapX[19]).setHomeDrawerState,
    };
    settleDrawer.__workletHash = 11040545373175;
    settleDrawer.__initData = __initData;
    fireThrow = function fireThrow() {
      value = sharedValue7.get();
      value2 = !value;
      if (!value) {
        value2 = sharedValue4.get();
      }
      if (value2) {
        const result = sharedValue7.set(true);
        const result1 = sharedValue5.set(landOnHome(snapX[7]).clamp((12 * derivedValue2.get()) / 16, 0, 1));
        const obj2 = landOnHome(snapX[7]);
        const obj3 = landOnHome(snapX[7]);
        const obj4 = landOnHome(snapX[10]);
        const withTimingResult = landOnHome(snapX[10]).withTiming(
          1,
          landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING,
        );
        const result2 = sharedValue5.set(
          obj3.withSequence(
            withTimingResult,
            landOnHome(snapX[10]).withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING),
          ),
        );
        const obj5 = landOnHome(snapX[10]);
      }
    };
    let obj = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue1 };
    let obj2 = {
      isOpenTarget: beginDrag,
      panelX: settleDrawer,
      withTiming: landOnHome(snapX[10]).withTiming,
      maxX,
      HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING,
      snapX: fireThrow,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      setHomeDrawerState: landOnHome(snapX[19]).setHomeDrawerState,
    };
    let tmp3 = beginDrag;
    fireThrow.__closure = {
      hasThrown: sharedValue7,
      isPullActive: sharedValue4,
      flingThrow: sharedValue5,
      clamp: landOnHome(snapX[7]).clamp,
      pullFraction: derivedValue2,
      HOME_DRAWER_PULL_DISTANCE: 12,
      HOME_DRAWER_FLING_THROW_DISTANCE: 16,
      withSequence: landOnHome(snapX[7]).withSequence,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
    };
    fireThrow.__workletHash = 7181188083978;
    fireThrow.__initData = isFocused;
    beginDrag = function beginDrag(initialX) {
      value = settleDrawer.get();
      const sum = value + fireThrow.get();
      const result = sharedValue1.set(initialX - shouldOpenFromPosition.get().initialX);
      const result1 = sharedValue4.set(sum < 16);
      const result2 = settleDrawer.set(sum);
      const result3 = fireThrow.set(0);
      const obj = {};
      const merged = Object.assign(shouldOpenFromPosition.get());
      obj.active = true;
      obj.initialX = initialX;
      obj.panelX = sum;
      const result4 = shouldOpenFromPosition.set(obj);
    };
    beginDrag.__closure = {
      panelX: settleDrawer,
      snapX: fireThrow,
      activationOffsetX: sharedValue1,
      gestureState: shouldOpenFromPosition,
      isPullActive: sharedValue4,
      PULL_ACTIVE_MAX_START: 16,
    };
    beginDrag.__workletHash = 8821841484672;
    beginDrag.__initData = sharedValue8;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      if (typeof visualPanelX === "function") {
        value = panelX.get();
        num2 = 0;
        if (derivedValue.get()) {
          num2 = c11;
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
    shouldOpenFromPosition.__initData = drawerOpen;
    const Gesture = landOnHome(snapX[20]).Gesture;
    let obj3 = {
      hasThrown: sharedValue7,
      isPullActive: sharedValue4,
      flingThrow: sharedValue5,
      clamp: landOnHome(snapX[7]).clamp,
      pullFraction: derivedValue2,
      HOME_DRAWER_PULL_DISTANCE: 12,
      HOME_DRAWER_FLING_THROW_DISTANCE: 16,
      withSequence: landOnHome(snapX[7]).withSequence,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_THROW_TIMING,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
    };
    let obj4 = {
      panelX: settleDrawer,
      snapX: fireThrow,
      activationOffsetX: sharedValue1,
      gestureState: shouldOpenFromPosition,
      isPullActive: sharedValue4,
      PULL_ACTIVE_MAX_START: 16,
    };
    let obj5 = {
      visualPanelX,
      FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5,
      maxX,
      INITIAL_OPEN_WIDTH: sharedValue,
      dragOffsetX: sharedValue,
    };
    let isOnMain = isFocused;
    if (isFocused) {
      isOnMain = __initData.isOnMain;
    }
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isOnMain);
    let result = Gesture.Pan().enabled(isOnMain).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isOnMain).manualActivation(true);
    const fn = function _(absoluteX) {
      const result = isPanelTouchActive.set(true);
      const result1 = sharedValue.set(0);
      const result2 = sharedValue1.set(0);
      const result3 = sharedValue2.set(false);
      const result4 = sharedValue3.set(false);
      const result5 = sharedValue6.set(false);
      const result6 = sharedValue7.set(false);
      const result7 = sharedValue5.set(
        landOnHome(snapX[10]).withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING),
      );
      const obj2 = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      value = settleDrawer.get();
      obj2.panelX = value + fireThrow.get();
      const result8 = shouldOpenFromPosition.set(obj2);
    };
    const maxPointersResult = result.maxPointers(1);
    fn.__closure = {
      isPanelTouchActive,
      dragOffsetX: sharedValue,
      activationOffsetX: sharedValue1,
      didSettle: sharedValue2,
      didSnapThisGesture: sharedValue3,
      snappedByDrag: sharedValue6,
      hasThrown: sharedValue7,
      flingThrow: sharedValue5,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
      gestureState: shouldOpenFromPosition,
      panelX: settleDrawer,
      snapX: fireThrow,
    };
    fn.__workletHash = 13127799697200;
    fn.__initData = derivedValue2;
    const obj6 = {
      isPanelTouchActive,
      dragOffsetX: sharedValue,
      activationOffsetX: sharedValue1,
      didSettle: sharedValue2,
      didSnapThisGesture: sharedValue3,
      snappedByDrag: sharedValue6,
      hasThrown: sharedValue7,
      flingThrow: sharedValue5,
      withTiming: landOnHome(snapX[10]).withTiming,
      HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[11]).HOME_DRAWER_FLING_RETURN_TIMING,
      gestureState: shouldOpenFromPosition,
      panelX: settleDrawer,
      snapX: fireThrow,
    };
    const fn2 = function s(arg0, activate) {
      if (!gestureState.get().active) {
        const absoluteX = arg0.changedTouches[0].absoluteX;
        const _Math = Math;
        const absolute = Math.abs(absoluteX - gestureState.get().initialX);
        const _Math2 = Math;
        const absolute1 = Math.abs(arg0.changedTouches[0].absoluteY - gestureState.get().initialY);
        value = isOpenTarget.get();
        if (absolute1 <= absolute) {
          if (value) {
            if (absolute >= 10) {
              if (typeof beginDrag === "function") {
                value2 = panelX.get();
                const sum = value2 + snapX.get();
                const result = sharedValue1.set(absoluteX - gestureState.get().initialX);
                const result1 = sharedValue4.set(sum < 16);
                const result2 = panelX.set(sum);
                const result3 = snapX.set(0);
                const obj2 = {};
                const merged = Object.assign(gestureState.get());
                obj2.active = true;
                obj2.initialX = absoluteX;
                obj2.panelX = sum;
                const result4 = gestureState.set(obj2);
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
      isOpenTarget: tmp3,
      ACTIVATION_MIN_DISTANCE: 10,
      beginDrag,
    };
    fn2.__workletHash = 9771907003045;
    fn2.__initData = animatedStyle;
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
              result1 = diff - c11;
            }
            set = set(result1);
          }
        }
        const _Math = Math;
        const result2 = panelX.set(Math.max(diff + gestureState.get().panelX, 0));
        let tmp13 = sum < c12;
        if (tmp13) {
          value2 = panelX.get();
          tmp13 = value2 + snapX.get() >= tmp12;
        }
        if (tmp13) {
          if (absoluteX.velocityX <= 400) {
            const result3 = sharedValue6.set(true);
          } else if (!sharedValue6.get()) {
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
      SNAP_OPEN_DISTANCE: sharedValue1,
      MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue2,
      FLING_THROW_MIN_VELOCITY: 400,
      snappedByDrag: sharedValue6,
      fireThrow,
    };
    fn3.__workletHash = 7401507013781;
    fn3.__initData = derivedValue1;
    const obj7 = {
      gestureState: shouldOpenFromPosition,
      dragOffsetX: sharedValue,
      panelX: settleDrawer,
      snapX: fireThrow,
      INITIAL_OPEN_WIDTH: sharedValue,
      DRAWER_RESISTANCE: 3,
      SNAP_OPEN_DISTANCE: sharedValue1,
      MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue2,
      FLING_THROW_MIN_VELOCITY: 400,
      snappedByDrag: sharedValue6,
      fireThrow,
    };
    const onTouchesMoveResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      value = sharedValue1.get();
      const sum = value + sharedValue.get();
      let tmp3 = velocityX.velocityX > 50;
      const value3 = sharedValue6.get();
      if (tmp3) {
        tmp3 = sum > 40;
      }
      let tmp5 = tmp3;
      if (tmp3) {
        tmp5 = !value3;
      }
      if (tmp5) {
        fireThrow();
      }
      if (tmp3) {
        let flag = true;
        if (sum < c10) {
          ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          flag = true;
          const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
        }
      } else {
        if (velocityX.velocityX < -50) {
          if (sum < -40) {
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.SOFT);
            flag = false;
            const runOnJSResult1 = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          }
        }
        if (typeof shouldOpenFromPosition === "function") {
          if (typeof visualPanelX === "function") {
            const value4 = panelX.get();
            let num5 = 0;
            if (derivedValue.get()) {
              num5 = c11;
            }
            const sum1 = value4 + num5;
            flag = 0 !== sum1;
            if (flag) {
              let tmp15 = sum1 > 0.5 * maxX;
              if (!tmp15) {
                tmp15 = sum1 >= c10 && sharedValue.get() > 0;
                const tmp17 = sum1 >= c10 && sharedValue.get() > 0;
              }
              flag = tmp15;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      settleDrawer(flag);
      const result = sharedValue2.set(true);
      const tmp37 = gestureState.get().panelX > 0;
      if (flag) {
        if (!tmp37) {
          ReanimatedRexport.runOnJS(callback)(constants.OPEN);
        }
      }
      if (!tmp37) {
        ReanimatedRexport.runOnJS(callback)(constants.PEEK);
      }
    };
    const onChangeResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = {
      activationOffsetX: sharedValue1,
      dragOffsetX: sharedValue,
      FLING_MIN_VELOCITY: 50,
      FLING_MIN_DISTANCE: 40,
      snappedByDrag: sharedValue6,
      fireThrow,
      INITIAL_OPEN_WIDTH: sharedValue,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
      HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      didSettle: sharedValue2,
      gestureState: shouldOpenFromPosition,
      trackServerDrawerInteract,
      ServerDrawerInteractAction: sharedValue3,
    };
    fn4.__workletHash = 15243480929717;
    fn4.__initData = __initData2;
    const obj8 = {
      activationOffsetX: sharedValue1,
      dragOffsetX: sharedValue,
      FLING_MIN_VELOCITY: 50,
      FLING_MIN_DISTANCE: 40,
      snappedByDrag: sharedValue6,
      fireThrow,
      INITIAL_OPEN_WIDTH: sharedValue,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback,
      HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes,
      shouldOpenFromPosition,
      settleDrawer,
      didSettle: sharedValue2,
      gestureState: shouldOpenFromPosition,
      trackServerDrawerInteract,
      ServerDrawerInteractAction: sharedValue3,
    };
    const fn5 = function e() {
      let active = gestureState.get().active;
      if (active) {
        active = !sharedValue2.get();
      }
      if (active) {
        if (typeof shouldOpenFromPosition === "function") {
          if (typeof visualPanelX === "function") {
            value = panelX.get();
            num2 = 0;
            if (derivedValue.get()) {
              num2 = c11;
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
      const result3 = sharedValue1.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = {
      gestureState: shouldOpenFromPosition,
      didSettle: sharedValue2,
      settleDrawer,
      shouldOpenFromPosition,
      isPanelTouchActive,
      runOnJS: landOnHome(snapX[7]).runOnJS,
      noteInteraction,
      dragOffsetX: sharedValue,
      activationOffsetX: sharedValue1,
    };
    fn5.__workletHash = 1272825722136;
    fn5.__initData = num2;
    return onEndResult.onFinalize(fn5);
  }, items4);
  const first1 = tmp21(
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
  const items5 = [first1, memo];
  const memo1 = obj11.useMemo(() => {
    const obj = {};
    const merged = Object.assign(first1);
    obj.gesture = memo;
    return obj;
  }, items5);
  const items6 = [memo1, enableHome, landOnHome];
  const tmpResult18 = landOnHome(snapX[7]);
  return {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: gestureState.useMemo(() => {
      const obj = { homeDrawerState: memo1, enableHome, landOnHome: null };
      let tmp = enableHome;
      if (enableHome) {
        tmp = landOnHome;
      }
      obj.landOnHome = tmp;
      return obj;
    }, items6),
  };
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
