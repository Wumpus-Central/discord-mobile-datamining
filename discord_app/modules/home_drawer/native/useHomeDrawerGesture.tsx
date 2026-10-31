// === Module 18067: useHomeDrawerGesture ===

// Module 18067 (useHomeDrawerGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import timing from "timing" /* 5254 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5256 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18061 */;
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore" /* 18068 */;

require = fn;
const computeMaxX = fn(18061).computeMaxX;
const AnalyticEvents = fn(1072).AnalyticEvents;
const GestureConstants = fn(11242);
({ FLING_MIN_DISTANCE: closure_9, FLING_MIN_VELOCITY: c10, PULL_GESTURE_ACTIVATION_DISTANCE: closure_11, PULL_GESTURE_RESISTANCE } = GestureConstants);
({ PULL_GESTURE_SNAP_TIMING: map1, PULL_GESTURE_UNSNAP_TIMING: closure_14 } = GestureConstants);
const LaunchPadTypes = fn(11535).LaunchPadTypes;
let c16 = 144;
let result = 144 * (1 - 1 / PULL_GESTURE_RESISTANCE);
let c18 = 48;
let closure_19 = 48 + result;
let closure_20 = { PEEK: "PEEK", OPEN: "OPEN" };
let __initData = { code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let __initData2 = { code: "function useHomeDrawerGestureTsx2(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}" };
let closure_23 = { code: "function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,PULL_GESTURE_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,PULL_GESTURE_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,PULL_GESTURE_SNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}" };
let closure_24 = { code: "function useHomeDrawerGestureTsx4(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}" };
let closure_25 = { code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}" };
let closure_26 = { code: "function useHomeDrawerGestureTsx6(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}" };
let closure_27 = { code: "function useHomeDrawerGestureTsx7(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}" };
let __initData3 = { code: "function useHomeDrawerGestureTsx8(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}" };
let closure_29 = { code: "function useHomeDrawerGestureTsx9(){const{accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}" };
let closure_30 = { code: "function useHomeDrawerGestureTsx10(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}" };
let closure_31 = { code: "function visualPanelX_useHomeDrawerGestureTsx11(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}" };
let closure_32 = { code: "function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_33 = { code: "function fireThrow_useHomeDrawerGestureTsx13(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}" };
let closure_34 = { code: "function beginDrag_useHomeDrawerGestureTsx14(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}" };
let closure_35 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_36 = { code: "function useHomeDrawerGestureTsx16(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}" };
let closure_37 = { code: "function useHomeDrawerGestureTsx17(event){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen;if(isOpeningFling){shouldOpen=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_38 = { code: "function useHomeDrawerGestureTsx18(event){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,PULL_GESTURE_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/PULL_GESTURE_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}}" };
let closure_39 = { code: "function useHomeDrawerGestureTsx19(event,manager){const{gestureState,isOpenTarget,PULL_GESTURE_ACTIVATION_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<PULL_GESTURE_ACTIVATION_DISTANCE){return;}beginDrag(touchX);manager.activate();}" };
let closure_40 = { code: "function useHomeDrawerGestureTsx20(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}" };
let obj = { gesture: null, panelStyles: null, gestureState: null, panelX: null, panelTranslateX: null, guildsBarDrawerStyle: null, guildsBarPullX: null };
let Gesture = fn(5303).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
let ReanimatedHelperTypes = fn(7242);
obj.gestureState = ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
ReanimatedHelperTypes = fn(7242);
obj.panelX = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7242);
obj.panelTranslateX = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.guildsBarDrawerStyle = {};
ReanimatedHelperTypes = fn(7242);
obj.guildsBarPullX = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export function useHomeGesture() {
  const MobileHomeDrawerExperiment = landOnHome(snapX[7]).MobileHomeDrawerExperiment;
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
  const sharedValue = landOnHome(snapX[8]).useSharedValue(0);
  let obj = landOnHome(snapX[8]);
  const sharedValue1 = landOnHome(snapX[8]).useSharedValue(0);
  let obj2 = landOnHome(snapX[8]);
  const sharedValue2 = landOnHome(snapX[8]).useSharedValue(false);
  let obj3 = landOnHome(snapX[8]);
  const sharedValue3 = landOnHome(snapX[8]).useSharedValue(false);
  let obj4 = landOnHome(snapX[8]);
  const sharedValue4 = landOnHome(snapX[8]).useSharedValue(false);
  let obj5 = landOnHome(snapX[8]);
  const sharedValue5 = landOnHome(snapX[8]).useSharedValue(0);
  let obj6 = landOnHome(snapX[8]);
  const sharedValue6 = landOnHome(snapX[8]).useSharedValue(false);
  let obj7 = landOnHome(snapX[8]);
  const sharedValue7 = landOnHome(snapX[8]).useSharedValue(false);
  let obj8 = landOnHome(snapX[8]);
  const navigation = landOnHome(snapX[9]).useNavigation();
  const HOME_DRAWER_PULL_SETTLE_WIDTH = gestureState.useCallback((action) => {
    panelX(snapX[10]).track(isPanelTouchActive.SERVER_DRAWER_INTERACT, { action });
  }, []);
  let obj9 = landOnHome(snapX[9]);
  let fn = function o() {
    let tmp = 0 === gestureState.get().panelX;
    if (tmp) {
      tmp = sharedValue.get() >= c16;
    }
    return tmp;
  };
  fn.__closure = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue6 };
  fn.__workletHash = 17562466882099;
  fn.__initData = __initData;
  const derivedValue = landOnHome(snapX[8]).useDerivedValue(fn);
  const obj10 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue6 };
  const obj12 = landOnHome(snapX[8]);
  class Y {
    constructor() {
      return closure_20.get();
    }
  }
  Y.__closure = { isSnappedOpen: derivedValue };
  Y.__workletHash = 5063476059943;
  Y.__initData = __initData2;
  class B {
    constructor(arg0, arg1) {
      if (gestureState.get().active) {
        tmp = arg1;
        tmp2 = null;
        if (null !== arg1) {
          tmp3 = arg0;
          if (arg0 !== arg1) {
            obj = closure_13;
            if (arg0) {
              flag2 = true;
              result = obj.set(true);
              tmp27 = snapX;
              tmp28 = closure_0;
              tmp29 = closure_2;
              obj5 = closure_0(closure_2[11]);
              tmp30 = closure_17;
              tmp31 = PULL_GESTURE_SNAP_TIMING;
              str2 = "animate-always";
              result1 = snapX.set(obj5.withTiming(closure_17, PULL_GESTURE_SNAP_TIMING, "animate-always"));
              tmp33 = closure_0;
              tmp34 = closure_2;
              obj6 = closure_0(closure_2[8]);
              tmp35 = closure_0;
              tmp36 = closure_2;
              tmp38 = closure_0;
              tmp39 = closure_2;
              runOnJSResult = obj6.runOnJS(closure_0(closure_2[12]).triggerHapticFeedback);
              tmp37Result = runOnJSResult(closure_0(closure_2[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
            } else if (obj.get()) {
              tmp4 = closure_15;
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj2 = closure_0(closure_2[11]);
              tmp7 = closure_14;
              num = 0;
              result2 = closure_15.set(obj2.withTiming(0, closure_14));
              tmp9 = closure_17;
              flag = false;
              result3 = closure_17.set(false);
              tmp11 = closure_16;
              result4 = closure_16.set(false);
              tmp13 = snapX;
              tmp14 = closure_0;
              tmp15 = closure_2;
              obj3 = closure_0(closure_2[11]);
              str = "animate-always";
              result5 = snapX.set(obj3.withTiming(0, closure_14, "animate-always"));
              tmp17 = closure_0;
              tmp18 = closure_2;
              obj4 = closure_0(closure_2[8]);
              tmp19 = closure_0;
              tmp20 = closure_2;
              tmp22 = closure_0;
              tmp23 = closure_2;
              runOnJSResult1 = obj4.runOnJS(closure_0(closure_2[12]).triggerHapticFeedback);
              tmp21Result = runOnJSResult1(closure_0(closure_2[12]).HapticFeedbackTypes.SOFT);
            }
            return tmp25;
          }
        }
      }
      return;
    }
  }
  const obj14 = landOnHome(snapX[8]);
  B.__closure = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: landOnHome(snapX[11]).withTiming, SNAP_OPEN_DISTANCE: sharedValue7, PULL_GESTURE_SNAP_TIMING: sharedValue3, runOnJS: landOnHome(snapX[8]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, flingThrow: sharedValue5, PULL_GESTURE_UNSNAP_TIMING: sharedValue4, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  B.__workletHash = 470138610681;
  B.__initData = enableHome;
  const animatedReaction = obj14.useAnimatedReaction(Y, B);
  const tmp17 = panelX(snapX[13])();
  __initData = tmp17;
  let tmp18 = panelX(snapX[14])();
  __initData2 = tmp18;
  const tmp19 = panelX(snapX[16])();
  if (enableHome) {
    enableHome = !tmp20;
  }
  if (enableHome) {
    enableHome = !panelX(snapX[15])().isChatBesideChannelList;
  }
  const obj13 = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: landOnHome(snapX[11]).withTiming, SNAP_OPEN_DISTANCE: sharedValue7, PULL_GESTURE_SNAP_TIMING: sharedValue3, runOnJS: landOnHome(snapX[8]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, flingThrow: sharedValue5, PULL_GESTURE_UNSNAP_TIMING: sharedValue4, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  let tmp15 = sharedValue7;
  tmp20 = tmp19 === sharedValue5.GESTURE_FULL || tmp19 === sharedValue5.GESTURE_EDGE;
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = landOnHome(snapX[9]);
  const sharedValue8 = landOnHome(snapX[8]).useSharedValue(0);
  const tmpResult10 = landOnHome(snapX[8]);
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = landOnHome(snapX[17]).useHomeDrawerPeekHint(enablePeekHint, sharedValue8);
  let state = navigation.getState();
  const tmpResult11 = landOnHome(snapX[17]);
  let tmp25;
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
      tmp25 = routes[num];
    }
  }
  let coerceGuildsRouteResult = landOnHome(snapX[18]).coerceGuildsRoute(tmp25);
  let tmp27 = enableHome;
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
    tmp27 = drawerOpen;
  }
  drawerOpen = tmp27;
  let num2 = 0;
  if (tmp27) {
    num2 = maxX(tmp17, tmp18);
  }
  let items = [tmp17, tmp18, updateMaxX, enableHome];
  const effect = obj11.useEffect(() => {
    if (enableHome) {
      updateMaxX(closure_21, closure_22);
    } else {
      updateMaxX({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX, snapX, isOpenTarget];
  const effect1 = obj11.useEffect(() => {
    if (!enableHome) {
      result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      NavigationRouteUtils.setHomeDrawerState(false);
    }
  }, items1);
  const items2 = [navigation, setPanelX, enableHome];
  const effect2 = obj11.useEffect(() => {
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
          const state1 = setPanelX.getState();
          if (true === drawerOpen) {
            state1.startTimer();
          } else {
            state1.stopTimer();
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
  __initData3 = obj11.useRef(false);
  const items3 = [enableHome, tmp27, num2, panelX, isOpenTarget];
  const layoutEffect = obj11.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        const state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const tmpResult12 = landOnHome(snapX[18]);
  function ve() {
    value = panelX.get();
    const sum = value + snapX.get();
    return sum + sharedValue8.get();
  }
  ve.__closure = { panelX, snapX, peekX: sharedValue8 };
  ve.__workletHash = 2679501612865;
  ve.__initData = isFocused;
  const derivedValue1 = landOnHome(snapX[8]).useDerivedValue(ve);
  const tmpResult13 = landOnHome(snapX[8]);
  class Ge {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: closure_29.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  Ge.__closure = { panelTranslateX: derivedValue1 };
  Ge.__workletHash = 15504517955444;
  Ge.__initData = sharedValue8;
  const animatedStyle = landOnHome(snapX[8]).useAnimatedStyle(Ge);
  const tmpResult14 = landOnHome(snapX[8]);
  class We {
    constructor() {
      value = isOpenTarget.get();
      if (!value) {
        tmp2 = isPanelTouchActive;
        value1 = isPanelTouchActive.get();
        tmp4 = !value1;
        if (!value1) {
          tmp5 = closure_29;
          num = 0;
          tmp4 = closure_29.get() <= 0;
        }
        value = tmp4;
      }
      return value;
    }
  }
  We.__closure = { isOpenTarget, isPanelTouchActive, panelTranslateX: derivedValue1 };
  We.__workletHash = 635704459123;
  We.__initData = drawerOpen;
  class Fe {
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
  Fe.__closure = { isPullActive: sharedValue4 };
  Fe.__workletHash = 2260649385283;
  Fe.__initData = num2;
  const animatedReaction1 = landOnHome(snapX[8]).useAnimatedReaction(We, Fe);
  const tmpResult15 = landOnHome(snapX[8]);
  class Ue {
    constructor() {
      value = closure_29.get();
      num = 0;
      if (closure_14.get()) {
        num = 0;
        if (value > 0) {
          tmp2 = closure_19;
          num = 0;
          if (value < closure_19) {
            tmp3 = c18;
            if (value < c18) {
              result = value / tmp3;
            } else {
              tmp4 = closure_17;
              num2 = 1;
              result = 1 - (value - tmp3) / closure_17;
            }
            tmp6 = result;
          }
        }
      }
      return num;
    }
  }
  Ue.__closure = { panelTranslateX: derivedValue1, isPullActive: sharedValue4, HOME_DRAWER_PULL_SETTLE_WIDTH, MAX_HOME_DRAWER_ANIMATING_WIDTH: navigation, SNAP_OPEN_DISTANCE: tmp15 };
  Ue.__workletHash = 11347595493924;
  Ue.__initData = __initData3;
  const derivedValue2 = landOnHome(snapX[8]).useDerivedValue(Ue);
  const obj15 = { panelTranslateX: derivedValue1, isPullActive: sharedValue4, HOME_DRAWER_PULL_SETTLE_WIDTH, MAX_HOME_DRAWER_ANIMATING_WIDTH: navigation, SNAP_OPEN_DISTANCE: tmp15 };
  const tmpResult16 = landOnHome(snapX[8]);
  function ke() {
    const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    let num = 0;
    if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
      const _Math = Math;
      result = 12 * derivedValue2.get();
      num = Math.max(result, 16 * sharedValue5.get());
    }
    return num;
  }
  const tmpResult17 = landOnHome(snapX[8]);
  ke.__closure = { accessibilityPreferencesSharedValue: landOnHome(snapX[19]).accessibilityPreferencesSharedValue, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, flingThrow: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: 16 };
  ke.__workletHash = 9960352904018;
  ke.__initData = derivedValue1;
  const derivedValue3 = tmpResult17.useDerivedValue(ke);
  const obj16 = { accessibilityPreferencesSharedValue: landOnHome(snapX[19]).accessibilityPreferencesSharedValue, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, flingThrow: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: 16 };
  function ye() {
    const obj = { transform: null };
    const items = [{ translateX: derivedValue3.get() }];
    obj.transform = items;
    return obj;
  }
  ye.__closure = { guildsBarPullX: derivedValue3 };
  ye.__workletHash = 12108954192160;
  ye.__initData = animatedStyle;
  closure_33 = landOnHome(snapX[8]).useAnimatedStyle(ye);
  const items4 = [gestureState, panelX, snapX, isOpenTarget, sharedValue2, sharedValue3, derivedValue, sharedValue4, derivedValue2, sharedValue5, sharedValue6, sharedValue7, sharedValue, sharedValue1, isFocused, maxX, isPanelTouchActive, noteInteraction, HOME_DRAWER_PULL_SETTLE_WIDTH];
  const memo = obj11.useMemo(() => {
    function visualPanelX() {
      value = settleDrawer.get();
      let num = 0;
      if (derivedValue.get()) {
        num = sharedValue7;
      }
      return value + num;
    }
    visualPanelX.__closure = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue7 };
    visualPanelX.__workletHash = 4571251061814;
    visualPanelX.__initData = derivedValue2;
    settleDrawer = function settleDrawer(flag) {
      result = beginDrag.set(flag);
      let num = 0;
      if (flag) {
        num = maxX;
      }
      const result1 = settleDrawer.set(landOnHome(snapX[11]).withTiming(num, landOnHome(snapX[20]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const obj = landOnHome(snapX[11]);
      const result2 = fireThrow.set(landOnHome(snapX[11]).withTiming(0, landOnHome(snapX[20]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const tmp3Result = landOnHome(snapX[11]);
      landOnHome(snapX[8]).runOnJS(landOnHome(snapX[18]).setHomeDrawerState)(flag);
      const tmp3Result2 = landOnHome(snapX[8]);
    };
    settleDrawer.__closure = { isOpenTarget: beginDrag, panelX: settleDrawer, withTiming: landOnHome(snapX[11]).withTiming, maxX, HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[20]).HOME_DRAWER_SETTLE_TIMING, snapX: fireThrow, runOnJS: landOnHome(snapX[8]).runOnJS, setHomeDrawerState: landOnHome(snapX[18]).setHomeDrawerState };
    settleDrawer.__workletHash = 13128455922839;
    settleDrawer.__initData = derivedValue3;
    fireThrow = function fireThrow() {
      value = sharedValue7.get();
      value2 = !value;
      if (!value) {
        value2 = sharedValue4.get();
      }
      if (value2) {
        result = sharedValue7.set(true);
        const result1 = sharedValue5.set(landOnHome(snapX[8]).clamp(12 * derivedValue2.get() / 16, 0, 1));
        const obj2 = landOnHome(snapX[8]);
        const obj3 = landOnHome(snapX[8]);
        const obj4 = landOnHome(snapX[11]);
        const withTimingResult = landOnHome(snapX[11]).withTiming(1, landOnHome(snapX[20]).HOME_DRAWER_FLING_THROW_TIMING);
        const result2 = sharedValue5.set(obj3.withSequence(withTimingResult, landOnHome(snapX[11]).withTiming(0, landOnHome(snapX[20]).HOME_DRAWER_FLING_RETURN_TIMING)));
        const obj5 = landOnHome(snapX[11]);
      }
    };
    let obj = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue7 };
    let obj2 = { isOpenTarget: beginDrag, panelX: settleDrawer, withTiming: landOnHome(snapX[11]).withTiming, maxX, HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[20]).HOME_DRAWER_SETTLE_TIMING, snapX: fireThrow, runOnJS: landOnHome(snapX[8]).runOnJS, setHomeDrawerState: landOnHome(snapX[18]).setHomeDrawerState };
    fireThrow.__closure = { hasThrown: sharedValue7, isPullActive: sharedValue4, flingThrow: sharedValue5, clamp: landOnHome(snapX[8]).clamp, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, HOME_DRAWER_FLING_THROW_DISTANCE: 16, withSequence: landOnHome(snapX[8]).withSequence, withTiming: landOnHome(snapX[11]).withTiming, HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[20]).HOME_DRAWER_FLING_THROW_TIMING, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[20]).HOME_DRAWER_FLING_RETURN_TIMING };
    fireThrow.__workletHash = 7181188083978;
    fireThrow.__initData = __initData;
    beginDrag = function beginDrag(initialX) {
      value = settleDrawer.get();
      const sum = value + fireThrow.get();
      result = sharedValue1.set(initialX - shouldOpenFromPosition.get().initialX);
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
    beginDrag.__closure = { panelX: settleDrawer, snapX: fireThrow, activationOffsetX: sharedValue1, gestureState: shouldOpenFromPosition, isPullActive: sharedValue4, PULL_ACTIVE_MAX_START: 16 };
    beginDrag.__workletHash = 8821841484672;
    beginDrag.__initData = memo;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      if (typeof visualPanelX === "function") {
        value = panelX.get();
        num2 = 0;
        if (derivedValue.get()) {
          num2 = result;
        }
        const sum = value + num2;
        let tmp5 = 0 !== sum;
        if (tmp5) {
          let tmp7 = sum > 0.5 * maxX;
          if (!tmp7) {
            let tmp9 = sum >= c16;
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
    shouldOpenFromPosition.__closure = { visualPanelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, INITIAL_OPEN_WIDTH: sharedValue6, dragOffsetX: sharedValue };
    shouldOpenFromPosition.__workletHash = 13719937872789;
    shouldOpenFromPosition.__initData = __initData;
    const Gesture = landOnHome(snapX[21]).Gesture;
    let obj3 = { hasThrown: sharedValue7, isPullActive: sharedValue4, flingThrow: sharedValue5, clamp: landOnHome(snapX[8]).clamp, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: 12, HOME_DRAWER_FLING_THROW_DISTANCE: 16, withSequence: landOnHome(snapX[8]).withSequence, withTiming: landOnHome(snapX[11]).withTiming, HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[20]).HOME_DRAWER_FLING_THROW_TIMING, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[20]).HOME_DRAWER_FLING_RETURN_TIMING };
    let obj4 = { panelX: settleDrawer, snapX: fireThrow, activationOffsetX: sharedValue1, gestureState: shouldOpenFromPosition, isPullActive: sharedValue4, PULL_ACTIVE_MAX_START: 16 };
    let obj5 = { visualPanelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, INITIAL_OPEN_WIDTH: sharedValue6, dragOffsetX: sharedValue };
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isFocused);
    result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function _(absoluteX) {
      result = isPanelTouchActive.set(true);
      const result1 = sharedValue.set(0);
      const result2 = sharedValue1.set(0);
      const result3 = sharedValue2.set(false);
      const result4 = sharedValue3.set(false);
      const result5 = sharedValue6.set(false);
      const result6 = sharedValue7.set(false);
      const result7 = sharedValue5.set(landOnHome(snapX[11]).withTiming(0, landOnHome(snapX[20]).HOME_DRAWER_FLING_RETURN_TIMING));
      const obj2 = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      value = settleDrawer.get();
      obj2.panelX = value + fireThrow.get();
      const result8 = shouldOpenFromPosition.set(obj2);
    };
    const maxPointersResult = result.maxPointers(1);
    fn.__closure = { isPanelTouchActive, dragOffsetX: sharedValue, activationOffsetX: sharedValue1, didSettle: sharedValue2, didSnapThisGesture: sharedValue3, snappedByDrag: sharedValue6, hasThrown: sharedValue7, flingThrow: sharedValue5, withTiming: landOnHome(snapX[11]).withTiming, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[20]).HOME_DRAWER_FLING_RETURN_TIMING, gestureState: shouldOpenFromPosition, panelX: settleDrawer, snapX: fireThrow };
    fn.__workletHash = 13127799697200;
    fn.__initData = __initData4;
    const obj6 = { isPanelTouchActive, dragOffsetX: sharedValue, activationOffsetX: sharedValue1, didSettle: sharedValue2, didSnapThisGesture: sharedValue3, snappedByDrag: sharedValue6, hasThrown: sharedValue7, flingThrow: sharedValue5, withTiming: landOnHome(snapX[11]).withTiming, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[20]).HOME_DRAWER_FLING_RETURN_TIMING, gestureState: shouldOpenFromPosition, panelX: settleDrawer, snapX: fireThrow };
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
            if (absolute >= closure_3_11) {
              if (typeof beginDrag === "function") {
                value2 = panelX.get();
                const sum = value2 + snapX.get();
                result = sharedValue1.set(absoluteX - gestureState.get().initialX);
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
    fn2.__closure = { gestureState: shouldOpenFromPosition, isOpenTarget: beginDrag, PULL_GESTURE_ACTIVATION_DISTANCE: sharedValue1, beginDrag };
    fn2.__workletHash = 16018758713861;
    fn2.__initData = __initData3;
    const obj7 = { gestureState: shouldOpenFromPosition, isOpenTarget: beginDrag, PULL_GESTURE_ACTIVATION_DISTANCE: sharedValue1, beginDrag };
    const onBeginResult = maxPointersResult.onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (gestureState.get().active) {
        const diff = absoluteX.absoluteX - gestureState.get().initialX;
        result = sharedValue.set(diff);
        value = panelX.get();
        const sum = value + snapX.get();
        if (0 === gestureState.get().panelX) {
          if (diff >= 0) {
            if (diff < c16) {
              let result1 = diff / PULL_GESTURE_RESISTANCE;
            } else {
              result1 = diff - result;
            }
            const result2 = panelX.set(result1);
          }
        }
        const _Math = Math;
        const result3 = panelX.set(Math.max(diff + gestureState.get().panelX, 0));
        let tmp15 = sum < c18;
        if (tmp15) {
          value2 = panelX.get();
          tmp15 = value2 + snapX.get() >= tmp14;
        }
        if (tmp15) {
          if (absoluteX.velocityX <= 400) {
            const result4 = sharedValue6.set(true);
          } else if (!sharedValue6.get()) {
            fireThrow();
          }
        }
      }
    };
    fn3.__closure = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, panelX: settleDrawer, snapX: fireThrow, INITIAL_OPEN_WIDTH: sharedValue6, PULL_GESTURE_RESISTANCE: sharedValue2, SNAP_OPEN_DISTANCE: sharedValue7, MAX_HOME_DRAWER_ANIMATING_WIDTH: navigation, FLING_THROW_MIN_VELOCITY: 400, snappedByDrag: sharedValue6, fireThrow };
    fn3.__workletHash = 4138253680789;
    fn3.__initData = __initData2;
    const obj8 = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, panelX: settleDrawer, snapX: fireThrow, INITIAL_OPEN_WIDTH: sharedValue6, PULL_GESTURE_RESISTANCE: sharedValue2, SNAP_OPEN_DISTANCE: sharedValue7, MAX_HOME_DRAWER_ANIMATING_WIDTH: navigation, FLING_THROW_MIN_VELOCITY: 400, snappedByDrag: sharedValue6, fireThrow };
    const onTouchesMoveResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      value = sharedValue1.get();
      const sum = value + sharedValue.get();
      let tmp4 = velocityX.velocityX > closure_3_10;
      const value3 = sharedValue6.get();
      if (tmp4) {
        tmp4 = sum > React7;
      }
      let tmp7 = tmp4;
      if (tmp4) {
        tmp7 = !value3;
      }
      if (tmp7) {
        fireThrow();
      }
      if (tmp4) {
        let flag = true;
        if (sum < c16) {
          ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          flag = true;
          const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
        }
      } else {
        if (velocityX.velocityX < -closure_3_10) {
          if (sum < -React7) {
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.SOFT);
            flag = false;
            const runOnJSResult1 = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          }
        }
        if (typeof shouldOpenFromPosition === "function") {
          if (typeof visualPanelX === "function") {
            const value4 = panelX.get();
            num2 = 0;
            if (derivedValue.get()) {
              num2 = result;
            }
            const sum1 = value4 + num2;
            flag = 0 !== sum1;
            if (flag) {
              let tmp18 = sum1 > 0.5 * maxX;
              if (!tmp18) {
                tmp18 = sum1 >= c16 && sharedValue.get() > 0;
                const tmp20 = sum1 >= c16 && sharedValue.get() > 0;
              }
              flag = tmp18;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      settleDrawer(flag);
      result = sharedValue2.set(true);
      const tmp32 = gestureState.get().panelX > 0;
      if (flag) {
        if (!tmp32) {
          ReanimatedRexport.runOnJS(callback)(constants.OPEN);
        }
      }
      if (!tmp32) {
        ReanimatedRexport.runOnJS(callback)(constants.PEEK);
      }
    };
    const onChangeResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = { activationOffsetX: sharedValue1, dragOffsetX: sharedValue, FLING_MIN_VELOCITY: sharedValue, FLING_MIN_DISTANCE: noteInteraction, snappedByDrag: sharedValue6, fireThrow, INITIAL_OPEN_WIDTH: sharedValue6, runOnJS: landOnHome(snapX[8]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue2, gestureState: shouldOpenFromPosition, trackServerDrawerInteract, ServerDrawerInteractAction: derivedValue };
    fn4.__workletHash = 15243480929717;
    fn4.__initData = __initData;
    const obj9 = { activationOffsetX: sharedValue1, dragOffsetX: sharedValue, FLING_MIN_VELOCITY: sharedValue, FLING_MIN_DISTANCE: noteInteraction, snappedByDrag: sharedValue6, fireThrow, INITIAL_OPEN_WIDTH: sharedValue6, runOnJS: landOnHome(snapX[8]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue2, gestureState: shouldOpenFromPosition, trackServerDrawerInteract, ServerDrawerInteractAction: derivedValue };
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
              num2 = result;
            }
            const sum = value + num2;
            let tmp9 = 0 !== sum;
            if (tmp9) {
              let tmp11 = sum > 0.5 * maxX;
              if (!tmp11) {
                let tmp13 = sum >= c16;
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
      result = isPanelTouchActive.set(false);
      ReanimatedRexport.runOnJS(noteInteraction)();
      const result1 = gestureState.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = sharedValue.set(0);
      const result3 = sharedValue1.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = { gestureState: shouldOpenFromPosition, didSettle: sharedValue2, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: landOnHome(snapX[8]).runOnJS, noteInteraction, dragOffsetX: sharedValue, activationOffsetX: sharedValue1 };
    fn5.__workletHash = 1272825722136;
    fn5.__initData = memo1;
    return onEndResult.onFinalize(fn5);
  }, items4);
  __initData = isOpenTarget(obj11.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelTranslateX: derivedValue1, guildsBarDrawerStyle, guildsBarPullX: derivedValue3 })), 1)[0];
  const items5 = [__initData, memo];
  const memo1 = obj11.useMemo(() => {
    const obj = {};
    const merged = Object.assign(first);
    obj.gesture = memo;
    return obj;
  }, items5);
  const items6 = [memo1, enableHome, landOnHome];
  const tmpResult18 = landOnHome(snapX[8]);
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
    }, items6)
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