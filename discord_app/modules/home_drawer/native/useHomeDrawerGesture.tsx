// === Module 16102: useHomeDrawerGesture ===

// Module 16102 (useHomeDrawerGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4341 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4462 */;
import HapticUtils from "HapticUtils" /* 4573 */;
import timing from "timing" /* 4606 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 16104 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16103 */;
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore" /* 16105 */;

require = fn;
const computeMaxX = fn(16103).computeMaxX;
const AnalyticEvents = fn(1074).AnalyticEvents;
const LaunchPadTypes = fn(11536).LaunchPadTypes;
let c10 = 144;
let c11 = 96.00000000000001;
let closure_12 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_13 = { code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let __initData = { code: "function useHomeDrawerGestureTsx2(isSnapped,wasSnapped){const{gestureState,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}snapX.set(withTiming(isSnapped?SNAP_OPEN_DISTANCE:0,HOME_DRAWER_SNAP_TIMING));if(isSnapped){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}" };
let __initData2 = { code: "function useHomeDrawerGestureTsx3(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}" };
let closure_16 = { code: "function useHomeDrawerGestureTsx4(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}" };
let closure_17 = { code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX,HOME_DRAWER_PULL_SETTLE_WIDTH,HOME_DRAWER_PULL_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH}=this.__closure;const reveal=panelTranslateX.get();return reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH?0:HOME_DRAWER_PULL_DISTANCE*(1-Math.abs(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/MAX_HOME_DRAWER_ANIMATING_WIDTH);}" };
let closure_18 = { code: "function useHomeDrawerGestureTsx6(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}" };
let closure_19 = { code: "function isSnappedOpen_useHomeDrawerGestureTsx7(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let closure_20 = { code: "function visualPanelX_useHomeDrawerGestureTsx8(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen()?SNAP_OPEN_DISTANCE:0);}" };
let closure_21 = { code: "function settleDrawer_useHomeDrawerGestureTsx9(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING));runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_22 = { code: "function beginDrag_useHomeDrawerGestureTsx10(touchX){const{panelX,snapX,gestureState}=this.__closure;const currentX=panelX.get()+snapX.get();panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}" };
let closure_23 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx11(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX=visualPanelX();if(currentX===0)return false;if(currentX>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_24 = { code: "function useHomeDrawerGestureTsx12(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);}" };
let closure_25 = { code: "function useHomeDrawerGestureTsx13(event){const{FLING_MIN_VELOCITY,dragOffsetX,FLING_MIN_DISTANCE,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;let shouldOpen;if(event.velocityX>FLING_MIN_VELOCITY&&dragOffsetX.get()>FLING_MIN_DISTANCE){shouldOpen=true;if(dragOffsetX.get()<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event.velocityX<-FLING_MIN_VELOCITY&&dragOffsetX.get()<-FLING_MIN_DISTANCE){shouldOpen=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen=shouldOpenFromPosition();}settleDrawer(shouldOpen);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_26 = { code: "function useHomeDrawerGestureTsx14(event){const{gestureState,dragOffsetX,panelX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}}" };
let closure_27 = { code: "function useHomeDrawerGestureTsx15(event,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX=event.changedTouches[0].absoluteX;const touchY=event.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX<gestureState.get().initialX||isOpen&&touchX>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX);manager.activate();}" };
let closure_28 = { code: "function useHomeDrawerGestureTsx16(event){const{isPanelTouchActive,didSettle,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);didSettle.set(false);gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}" };
let obj = { gesture: null, panelStyles: null, gestureState: null, panelX: null, panelTranslateX: null, guildsBarDrawerStyle: null, guildsBarPullX: null };
let Gesture = fn(6705).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
let ReanimatedHelperTypes = fn(7126);
obj.gestureState = ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
ReanimatedHelperTypes = fn(7126);
obj.panelX = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(7126);
obj.panelTranslateX = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.guildsBarDrawerStyle = {};
ReanimatedHelperTypes = fn(7126);
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
  const tmp4 = updateMaxX();
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
  const navigation = landOnHome(snapX[8]).useNavigation();
  __initData = gestureState.useCallback((action) => {
    panelX(snapX[9]);
    const obj = { action };
    obj.track(isPanelTouchActive.SERVER_DRAWER_INTERACT, obj);
  }, []);
  let obj3 = landOnHome(snapX[8]);
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
  fn.__initData = __initData;
  class R {
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
        tmp3 = closure_0;
        tmp4 = closure_2;
        tmp2 = snapX;
        obj = closure_0(closure_2[10]);
        num = 0;
        if (arg0) {
          num = c11;
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
  obj = { gestureState, snapX, withTiming: landOnHome(snapX[10]).withTiming, SNAP_OPEN_DISTANCE: sharedValue1, HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SNAP_TIMING, runOnJS: landOnHome(snapX[7]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes };
  R.__closure = obj;
  R.__workletHash = 801722928965;
  R.__initData = __initData;
  const animatedReaction = landOnHome(snapX[7]).useAnimatedReaction(fn, R);
  let tmp9 = panelX(snapX[13])();
  __initData = tmp9;
  const tmp10 = panelX(snapX[14])();
  __initData2 = tmp10;
  let tmp11 = panelX(snapX[16])();
  if (enableHome) {
    enableHome = !tmp12;
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
  const sharedValue2 = tmpResult.useSharedValue(0);
  const obj6 = landOnHome(snapX[7]);
  tmp12 = tmp11 === noteInteraction.GESTURE_FULL || tmp11 === noteInteraction.GESTURE_EDGE;
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = landOnHome(snapX[17]).useHomeDrawerPeekHint(enablePeekHint, sharedValue2);
  let state = navigation.getState();
  const tmpResult1 = landOnHome(snapX[17]);
  let tmp17;
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
      tmp17 = routes[num];
    }
  }
  let coerceGuildsRouteResult = landOnHome(snapX[18]).coerceGuildsRoute(tmp17);
  let tmp19 = enableHome;
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
    tmp19 = drawerOpen;
  }
  drawerOpen = tmp19;
  let num2 = 0;
  if (tmp19) {
    num2 = maxX(tmp9, tmp10);
  }
  let items = [tmp9, tmp10, updateMaxX, enableHome];
  const effect = obj5.useEffect(() => {
    if (enableHome) {
      updateMaxX(closure_14, closure_15);
    } else {
      updateMaxX({ width: 0, height: 0 }, { top: 0, bottom: 0, left: 0, right: 0 });
    }
  }, items);
  const items1 = [enableHome, panelX, snapX, isOpenTarget];
  const effect1 = obj5.useEffect(() => {
    if (!enableHome) {
      const result = panelX.set(0);
      const result1 = snapX.set(0);
      const result2 = isOpenTarget.set(false);
      NavigationRouteUtils.setHomeDrawerState(false);
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
  __initData = obj5.useRef(false);
  const items3 = [enableHome, tmp19, num2, panelX, isOpenTarget];
  const layoutEffect = obj5.useLayoutEffect(() => {
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
  class Te {
    constructor() {
      value = panelX.get();
      sum = value + snapX.get();
      return sum + closure_18.get();
    }
  }
  Te.__closure = { panelX, snapX, peekX: sharedValue2 };
  Te.__workletHash = 2522387034438;
  Te.__initData = __initData2;
  const derivedValue = landOnHome(snapX[7]).useDerivedValue(Te);
  const tmpResult3 = landOnHome(snapX[7]);
  class Se {
    constructor() {
      obj = { transform: null };
      obj = { translateX: closure_22.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  Se.__closure = { panelTranslateX: derivedValue };
  Se.__workletHash = 5189937813365;
  Se.__initData = enableHome;
  const animatedStyle = landOnHome(snapX[7]).useAnimatedStyle(Se);
  const tmpResult4 = landOnHome(snapX[7]);
  class Ie {
    constructor() {
      value = closure_22.get();
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
      return num;
    }
  }
  Ie.__closure = { panelTranslateX: derivedValue, HOME_DRAWER_PULL_SETTLE_WIDTH: 96, HOME_DRAWER_PULL_DISTANCE: 8, MAX_HOME_DRAWER_ANIMATING_WIDTH: 48 };
  Ie.__workletHash = 16583952280838;
  Ie.__initData = isFocused;
  const derivedValue1 = landOnHome(snapX[7]).useDerivedValue(Ie);
  const tmpResult5 = landOnHome(snapX[7]);
  function pe() {
    let obj = { transform: null };
    obj = { translateX: derivedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  }
  pe.__closure = { guildsBarPullX: derivedValue1 };
  pe.__workletHash = 6503274417367;
  pe.__initData = sharedValue2;
  closure_25 = landOnHome(snapX[7]).useAnimatedStyle(pe);
  const items4 = [gestureState, panelX, snapX, isOpenTarget, sharedValue1, sharedValue, isFocused, maxX, isPanelTouchActive, noteInteraction, __initData];
  const memo = obj5.useMemo(() => {
    function isSnappedOpen() {
      let tmp = 0 === shouldOpenFromPosition.get().panelX;
      if (tmp) {
        tmp = closure_1_10.get() >= sharedValue;
      }
      return tmp;
    }
    let obj = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
    isSnappedOpen.__closure = obj;
    isSnappedOpen.__workletHash = 17375523293945;
    isSnappedOpen.__initData = drawerOpen;
    function visualPanelX() {
      if (typeof isSnappedOpen === "function") {
        let tmp3 = 0 === gestureState.get().panelX;
        if (tmp3) {
          tmp3 = sharedValue.get() >= c10;
        }
        num2 = 0;
        if (tmp3) {
          num2 = c11;
        }
        return tmp + num2;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj = { panelX: visualPanelX, isSnappedOpen, SNAP_OPEN_DISTANCE: sharedValue1 };
    visualPanelX.__closure = obj;
    visualPanelX.__workletHash = 8715038754966;
    visualPanelX.__initData = num2;
    function settleDrawer(flag) {
      const result = beginDrag.set(flag);
      let num = 0;
      if (flag) {
        num = maxX;
      }
      const result1 = visualPanelX.set(landOnHome(snapX[10]).withTiming(num, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING));
      let tmp3Result = landOnHome(snapX[10]);
      const result2 = settleDrawer.set(tmp3Result.withTiming(0, landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING));
      tmp3Result = landOnHome(snapX[7]);
      tmp3Result.runOnJS(landOnHome(snapX[18]).setHomeDrawerState)(flag);
      const obj = landOnHome(snapX[10]);
    }
    obj = { isOpenTarget: beginDrag, panelX: visualPanelX, withTiming: landOnHome(snapX[10]).withTiming, maxX, HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[11]).HOME_DRAWER_SETTLE_TIMING, snapX: settleDrawer, runOnJS: landOnHome(snapX[7]).runOnJS, setHomeDrawerState: landOnHome(snapX[18]).setHomeDrawerState };
    settleDrawer.__closure = obj;
    settleDrawer.__workletHash = 7923828971853;
    settleDrawer.__initData = __initData;
    beginDrag = function beginDrag(initialX) {
      value = visualPanelX.get();
      const sum = value + settleDrawer.get();
      const result = visualPanelX.set(sum);
      const result1 = settleDrawer.set(0);
      const obj = {};
      const merged = Object.assign(shouldOpenFromPosition.get());
      obj.active = true;
      obj.initialX = initialX;
      obj.panelX = sum;
      const result2 = shouldOpenFromPosition.set(obj);
    };
    beginDrag.__closure = { panelX: visualPanelX, snapX: settleDrawer, gestureState: shouldOpenFromPosition };
    beginDrag.__workletHash = 7622398197524;
    beginDrag.__initData = derivedValue;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      if (typeof visualPanelX === "function") {
        if (typeof isSnappedOpen === "function") {
          let tmp5 = 0 === gestureState.get().panelX;
          if (tmp5) {
            tmp5 = sharedValue.get() >= c10;
          }
          num2 = 0;
          if (tmp5) {
            num2 = c11;
          }
          const sum = tmp2 + num2;
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
          return tmp9;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    shouldOpenFromPosition.__closure = { visualPanelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: 0.5, maxX, INITIAL_OPEN_WIDTH: sharedValue, dragOffsetX: sharedValue };
    shouldOpenFromPosition.__workletHash = 15583237199505;
    shouldOpenFromPosition.__initData = animatedStyle;
    const Gesture = landOnHome(snapX[19]).Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = Gesture.Pan().enabled(isFocused);
    let result = Gesture.Pan().enabled(isFocused).manualActivation(true).shouldCancelWhenOutside(false);
    const manualActivationResult = Gesture.Pan().enabled(isFocused).manualActivation(true);
    const fn = function u(absoluteX) {
      const result = isPanelTouchActive.set(true);
      const result1 = sharedValue1.set(false);
      const obj = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      value = visualPanelX.get();
      obj.panelX = value + settleDrawer.get();
      const result2 = shouldOpenFromPosition.set(obj);
    };
    fn.__closure = { isPanelTouchActive, didSettle: sharedValue1, gestureState: shouldOpenFromPosition, panelX: visualPanelX, snapX: settleDrawer };
    fn.__workletHash = 13052185028309;
    fn.__initData = __initData2;
    const maxPointersResult = result.maxPointers(1);
    const obj1 = { isPanelTouchActive, didSettle: sharedValue1, gestureState: shouldOpenFromPosition, panelX: visualPanelX, snapX: settleDrawer };
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
                const result = panelX.set(sum);
                const result1 = snapX.set(0);
                obj = {};
                const merged = Object.assign(obj.get());
                obj.active = true;
                obj.initialX = absoluteX;
                obj.panelX = sum;
                const result2 = obj.set(obj);
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
    fn2.__closure = { gestureState: shouldOpenFromPosition, isOpenTarget: beginDrag, ACTIVATION_MIN_DISTANCE: 10, beginDrag };
    fn2.__workletHash = 15974197601065;
    fn2.__initData = __initData;
    const onBeginResult = result.maxPointers(1).onBegin(fn);
    const fn3 = function n(absoluteX) {
      if (shouldOpenFromPosition.get().active) {
        const diff = absoluteX.absoluteX - shouldOpenFromPosition.get().initialX;
        const result = closure_1_10.set(diff);
        if (0 === shouldOpenFromPosition.get().panelX) {
          if (diff >= 0) {
            let set = visualPanelX.set;
            if (diff < sharedValue) {
              let result1 = diff / 3;
            } else {
              result1 = diff - sharedValue1;
            }
            set = set(result1);
          }
        }
        const _Math = Math;
        const result2 = visualPanelX.set(Math.max(diff + shouldOpenFromPosition.get().panelX, 0));
      }
    };
    fn3.__closure = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, panelX: visualPanelX, INITIAL_OPEN_WIDTH: sharedValue, DRAWER_RESISTANCE: 3, SNAP_OPEN_DISTANCE: sharedValue1 };
    fn3.__workletHash = 6643141244166;
    fn3.__initData = memo;
    const onTouchesMoveResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
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
        const tmp26 = gestureState.get().panelX > 0;
        if (flag) {
          if (!tmp26) {
            ReanimatedRexport.runOnJS(callback)(constants.OPEN);
          }
        }
        if (!tmp26) {
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
      flag = shouldOpenFromPosition();
    };
    const onChangeResult = result.maxPointers(1).onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: sharedValue, runOnJS: landOnHome(snapX[7]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue1, gestureState: shouldOpenFromPosition, trackServerDrawerInteract, ServerDrawerInteractAction: navigation };
    fn4.__workletHash = 11708766055073;
    fn4.__initData = __initData;
    let obj2 = { FLING_MIN_VELOCITY: 50, dragOffsetX: sharedValue, FLING_MIN_DISTANCE: 40, INITIAL_OPEN_WIDTH: sharedValue, runOnJS: landOnHome(snapX[7]).runOnJS, triggerHapticFeedback: landOnHome(snapX[12]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[12]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue1, gestureState: shouldOpenFromPosition, trackServerDrawerInteract, ServerDrawerInteractAction: navigation };
    const fn5 = function e() {
      let active = gestureState.get().active;
      if (active) {
        active = !sharedValue1.get();
      }
      if (active) {
        settleDrawer(shouldOpenFromPosition());
      }
      const result = isPanelTouchActive.set(false);
      ReanimatedRexport.runOnJS(noteInteraction)();
      const result1 = gestureState.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
      const result2 = sharedValue.set(0);
    };
    const onEndResult = onChangeResult.onEnd(fn4);
    fn5.__closure = { gestureState: shouldOpenFromPosition, didSettle: sharedValue1, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: landOnHome(snapX[7]).runOnJS, noteInteraction, dragOffsetX: sharedValue };
    fn5.__workletHash = 16202345641846;
    fn5.__initData = derivedValue1;
    return onEndResult.onFinalize(fn5);
  }, items4);
  const first = isOpenTarget(obj5.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelTranslateX: derivedValue, guildsBarDrawerStyle, guildsBarPullX: derivedValue1 })), 1)[0];
  const items5 = [first, enableHome, landOnHome];
  obj1 = {
    gesture: memo,
    panelStyles: animatedStyle,
    homeDrawerContext: obj5.useMemo(() => {
      const obj = { homeDrawerState, enableHome, landOnHome: null };
      let tmp = enableHome;
      if (enableHome) {
        tmp = landOnHome;
      }
      obj.landOnHome = tmp;
      return obj;
    }, items5)
  };
  return obj1;
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