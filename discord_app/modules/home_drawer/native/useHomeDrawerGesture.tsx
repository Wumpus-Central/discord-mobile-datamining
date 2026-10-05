// === Module 15949: useHomeDrawerGesture ===

// Module 15949 (useHomeDrawerGesture)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import timing from "timing" /* 4891 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 4893 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 15945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 15944 */;
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore" /* 15950 */;

require = fn;
const computeMaxX = fn(15944).computeMaxX;
const AnalyticEvents = fn(1085).AnalyticEvents;
const LaunchPadTypes = fn(11125).LaunchPadTypes;
let c10 = 144;
let c11 = 0.5;
let c12 = 400;
let c13 = 96.00000000000001;
let c14 = 48;
let c15 = 12;
let c16 = 16;
let c17 = 144;
let closure_18 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_19 = { code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
let __initData = { code: "function useHomeDrawerGestureTsx2(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}" };
let __initData2 = { code: "function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,\"animate-always\"));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING,\"animate-always\"));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}" };
let closure_22 = { code: "function useHomeDrawerGestureTsx4(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}" };
let closure_23 = { code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}" };
let closure_24 = { code: "function useHomeDrawerGestureTsx6(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}" };
let closure_25 = { code: "function useHomeDrawerGestureTsx7(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}" };
let closure_26 = { code: "function useHomeDrawerGestureTsx8(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}" };
let closure_27 = { code: "function useHomeDrawerGestureTsx9(){const{accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}" };
let closure_28 = { code: "function useHomeDrawerGestureTsx10(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}" };
let closure_29 = { code: "function visualPanelX_useHomeDrawerGestureTsx11(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}" };
let closure_30 = { code: "function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,\"animate-always\"));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,\"animate-always\"));runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_31 = { code: "function fireThrow_useHomeDrawerGestureTsx13(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}" };
let closure_32 = { code: "function beginDrag_useHomeDrawerGestureTsx14(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}" };
let closure_33 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX_0=visualPanelX();if(currentX_0===0){return false;}if(currentX_0>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){return true;}if(currentX_0>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0){return true;}return false;}" };
let closure_34 = { code: "function useHomeDrawerGestureTsx16(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}" };
let closure_35 = { code: "function useHomeDrawerGestureTsx17(event_2){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;var flingDistanceX=activationOffsetX.get()+dragOffsetX.get();var passesOpeningVelocity=event_2.velocityX>FLING_MIN_VELOCITY;var passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;var isBlockedByDragSnap=snappedByDrag.get();var isOpeningFling=passesOpeningVelocity&&passesMinDistance;var shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}var shouldOpen_0;if(isOpeningFling){shouldOpen_0=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else{if(event_2.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen_0=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen_0=shouldOpenFromPosition();}}settleDrawer(shouldOpen_0);didSettle.set(true);var wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen_0&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else{if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}}" };
let closure_36 = { code: "function useHomeDrawerGestureTsx18(event_1){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active){return;}var newXOffset=event_1.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);var previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event_1.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else{if(!snappedByDrag.get()){fireThrow();}}}}" };
let closure_37 = { code: "function useHomeDrawerGestureTsx19(event_0,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active){return;}var touchX_0=event_0.changedTouches[0].absoluteX;var touchY=event_0.changedTouches[0].absoluteY;var absoluteXDiff=Math.abs(touchX_0-gestureState.get().initialX);var absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);var isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX_0<gestureState.get().initialX||isOpen&&touchX_0>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX_0);manager.activate();}" };
let closure_38 = { code: "function useHomeDrawerGestureTsx20(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}" };
const __initData3 = { code: "function useHomeDrawerGestureTsx21(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}" };
const __initData4 = { code: "function useHomeDrawerGestureTsx22(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}" };
const __initData5 = { code: "function useHomeDrawerGestureTsx23(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}" };
const __initData6 = { code: "function useHomeDrawerGestureTsx24(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}" };
const __initData7 = { code: "function useHomeDrawerGestureTsx25(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}" };
const __initData8 = { code: "function useHomeDrawerGestureTsx26(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}" };
const __initData9 = { code: "function useHomeDrawerGestureTsx27(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}" };
const __initData10 = { code: "function useHomeDrawerGestureTsx28(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}" };
const __initData11 = { code: "function useHomeDrawerGestureTsx29(){const{accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}" };
const __initData12 = { code: "function useHomeDrawerGestureTsx30(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}" };
let closure_49 = { code: "function visualPanelX_useHomeDrawerGestureTsx31(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}" };
let closure_50 = { code: "function settleDrawer_useHomeDrawerGestureTsx32(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));runOnJS(setHomeDrawerState)(shouldOpen);}" };
let closure_51 = { code: "function fireThrow_useHomeDrawerGestureTsx33(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}" };
let closure_52 = { code: "function beginDrag_useHomeDrawerGestureTsx34(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}" };
let closure_53 = { code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx35(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX_0=visualPanelX();if(currentX_0===0)return false;if(currentX_0>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX_0>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}" };
let closure_54 = { code: "function useHomeDrawerGestureTsx36(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}" };
let closure_55 = { code: "function useHomeDrawerGestureTsx37(event_2){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event_2.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen_0;if(isOpeningFling){shouldOpen_0=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event_2.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen_0=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen_0=shouldOpenFromPosition();}settleDrawer(shouldOpen_0);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen_0&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}" };
let closure_56 = { code: "function useHomeDrawerGestureTsx38(event_1){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event_1.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event_1.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}}" };
let closure_57 = { code: "function useHomeDrawerGestureTsx39(event_0,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX_0=event_0.changedTouches[0].absoluteX;const touchY=event_0.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX_0-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX_0<gestureState.get().initialX||isOpen&&touchX_0>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX_0);manager.activate();}" };
let closure_58 = { code: "function useHomeDrawerGestureTsx40(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}" };
fn(558);
let obj = { gesture: null, panelStyles: null, gestureState: null, panelX: null, panelTranslateX: null, guildsBarDrawerStyle: null, guildsBarPullX: null };
let Gesture = fn(6140).Gesture;
obj.gesture = Gesture.Pan();
obj.panelStyles = {};
let ReanimatedHelperTypes = fn(6571);
obj.gestureState = ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 });
ReanimatedHelperTypes = fn(6571);
obj.panelX = ReanimatedHelperTypes.createFakeSharedValue(0);
ReanimatedHelperTypes = fn(6571);
obj.panelTranslateX = ReanimatedHelperTypes.createFakeSharedValue(0);
obj.guildsBarDrawerStyle = {};
ReanimatedHelperTypes = fn(6571);
obj.guildsBarPullX = ReanimatedHelperTypes.createFakeSharedValue(0);
const context = noop.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
let result3 = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export const useHomeGesture = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = panelX(isOpenTarget[7]).c(138);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "gesture" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileHomeDrawerExperiment = tmp(tmp2[8]).MobileHomeDrawerExperiment;
  const config = MobileHomeDrawerExperiment.useConfig(first);
  ({ enableHome, landOnHome } = config);
  const tmp6 = maxX();
  panelX = tmp6.panelX;
  const snapX = tmp6.snapX;
  isOpenTarget = tmp6.isOpenTarget;
  const gestureState = tmp6.gestureState;
  const updateMaxX = tmp6.updateMaxX;
  maxX = tmp6.maxX;
  const setPanelX = tmp6.setPanelX;
  const isPanelTouchActive = tmp6.isPanelTouchActive;
  const noteInteraction = tmp6.noteInteraction;
  let obj = panelX(isOpenTarget[7]);
  const sharedValue = panelX(isOpenTarget[9]).useSharedValue(0);
  const tmpResult = panelX(isOpenTarget[9]);
  const sharedValue1 = panelX(isOpenTarget[9]).useSharedValue(0);
  const tmpResult15 = panelX(isOpenTarget[9]);
  const sharedValue2 = panelX(isOpenTarget[9]).useSharedValue(false);
  const tmpResult16 = panelX(isOpenTarget[9]);
  const sharedValue3 = panelX(isOpenTarget[9]).useSharedValue(false);
  const tmpResult17 = panelX(isOpenTarget[9]);
  const sharedValue4 = panelX(isOpenTarget[9]).useSharedValue(false);
  const tmpResult18 = panelX(isOpenTarget[9]);
  const sharedValue5 = panelX(isOpenTarget[9]).useSharedValue(0);
  const tmpResult19 = panelX(isOpenTarget[9]);
  const sharedValue6 = panelX(isOpenTarget[9]).useSharedValue(false);
  const tmpResult20 = panelX(isOpenTarget[9]);
  const sharedValue7 = panelX(isOpenTarget[9]).useSharedValue(false);
  const tmpResult21 = panelX(isOpenTarget[9]);
  const navigation = panelX(isOpenTarget[10]).useNavigation();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        obj = snapX(isOpenTarget[11]);
        obj1 = { action: arg0 };
        trackResult = obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj1);
        return;
      }
    }
    cResult[1] = J;
  } else {
    class J {
      constructor(arg0) {
        obj = snapX(isOpenTarget[11]);
        obj1 = { action: arg0 };
        trackResult = obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj1);
        return;
      }
    }
  }
  constants = J;
  const tmpResult22 = panelX(isOpenTarget[10]);
  class Ee {
    constructor() {
      tmp = 0 === gestureState.get().panelX;
      if (tmp) {
        tmp2 = closure_9;
        tmp3 = c10;
        tmp = closure_9.get() >= c10;
      }
      return tmp;
    }
  }
  Ee.__closure = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1 };
  Ee.__workletHash = 17562466882099;
  Ee.__initData = derivedValue;
  derivedValue = panelX(isOpenTarget[9]).useDerivedValue(Ee);
  let obj3 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1 };
  const tmpResult23 = panelX(isOpenTarget[9]);
  class Oe {
    constructor() {
      return closure_19.get();
    }
  }
  Oe.__closure = { isSnappedOpen: derivedValue };
  Oe.__workletHash = 5063476059943;
  Oe.__initData = __initData;
  function pe(arg0, arg1) {
    if (gestureState.get().active) {
      if (null !== arg1) {
        if (arg0 !== arg1) {
          if (arg0) {
            const result = sharedValue3.set(true);
            const result1 = snapX.set(timing.withTiming(c13, HomeDrawerAnimations.HOME_DRAWER_SNAP_TIMING, "animate-always"));
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          } else if (sharedValue3.get()) {
            const result2 = sharedValue5.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
            const result3 = sharedValue7.set(false);
            const result4 = sharedValue6.set(false);
            const result5 = snapX.set(timing.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING, "animate-always"));
            ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.SOFT);
            const runOnJSResult1 = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
          }
          return tmp28;
        }
      }
    }
  }
  const tmpResult24 = panelX(isOpenTarget[9]);
  pe.__closure = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: panelX(isOpenTarget[12]).withTiming, SNAP_OPEN_DISTANCE: sharedValue4, HOME_DRAWER_SNAP_TIMING: panelX(isOpenTarget[13]).HOME_DRAWER_SNAP_TIMING, runOnJS: panelX(isOpenTarget[9]).runOnJS, triggerHapticFeedback: panelX(isOpenTarget[14]).triggerHapticFeedback, HapticFeedbackTypes: panelX(isOpenTarget[14]).HapticFeedbackTypes, flingThrow: sharedValue5, HOME_DRAWER_UNSNAP_TIMING: panelX(isOpenTarget[13]).HOME_DRAWER_UNSNAP_TIMING, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  pe.__workletHash = 8865230832451;
  pe.__initData = __initData2;
  const animatedReaction = tmpResult24.useAnimatedReaction(Oe, pe);
  const tmp19 = snapX(isOpenTarget[15])();
  __initData = tmp19;
  const tmp20 = snapX(isOpenTarget[16])();
  __initData2 = tmp20;
  const isChatBesideChannelList = snapX(tmp2[17])().isChatBesideChannelList;
  snapX(isOpenTarget[18])();
  if (enableHome) {
    class J {
      constructor(arg0) {
        obj = snapX(isOpenTarget[11]);
        obj1 = { action: arg0 };
        trackResult = obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj1);
        return;
      }
    }
  }
  if (enableHome) {
    class J {
      constructor(arg0) {
        obj = snapX(isOpenTarget[11]);
        obj1 = { action: arg0 };
        trackResult = obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj1);
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        obj = snapX(isOpenTarget[11]);
        obj1 = { action: arg0 };
        trackResult = obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj1);
        return;
      }
    }
    cResult[2] = tmp23;
  } else {
    class J {
      constructor(arg0) {
        obj = snapX(isOpenTarget[11]);
        obj1 = { action: arg0 };
        trackResult = obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj1);
        return;
      }
    }
  }
  const obj16 = updateMaxX;
  let obj4 = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: panelX(isOpenTarget[12]).withTiming, SNAP_OPEN_DISTANCE: sharedValue4, HOME_DRAWER_SNAP_TIMING: panelX(isOpenTarget[13]).HOME_DRAWER_SNAP_TIMING, runOnJS: panelX(isOpenTarget[9]).runOnJS, triggerHapticFeedback: panelX(isOpenTarget[14]).triggerHapticFeedback, HapticFeedbackTypes: panelX(isOpenTarget[14]).HapticFeedbackTypes, flingThrow: sharedValue5, HOME_DRAWER_UNSNAP_TIMING: panelX(isOpenTarget[13]).HOME_DRAWER_UNSNAP_TIMING, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  [r10152, closure_23] = gestureState(updateMaxX.useState(tmp23), 2);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
    let items = [];
    cResult[3] = He;
    cResult[4] = items;
    let tmp26 = items;
  } else {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
    tmp26 = cResult[4];
  }
  const effect = obj16.useEffect(He, tmp26);
  panelX(isOpenTarget[10]);
  if (enableHome) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
  }
  const tmp24 = gestureState(updateMaxX.useState(tmp23), 2);
  const sharedValue8 = panelX(isOpenTarget[9]).useSharedValue(0);
  const tmpResult26 = panelX(isOpenTarget[9]);
  if (enableHome) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
  }
  const homeDrawerPeekHint = panelX(isOpenTarget[20]).useHomeDrawerPeekHint(enableHome, sharedValue8);
  if (cResult[5] !== navigation) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
    let tmp34;
    if (tmp32 != null) {
      class He {
        constructor() {
          obj = panelX(isOpenTarget[19]);
          rootNavigationRef = obj.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          if (null != rootNavigationRef) {
            state = undefined;
            if (rootNavigationRef != null) {
              state = rootNavigationRef.getState();
            }
            tmp2 = null != state;
            if (tmp2) {
              tmp3 = state.routes[state.index];
              name = undefined;
              if (tmp3 != null) {
                name = tmp3.name;
              }
              str = "main";
              tmp2 = "main" === name;
            }
            closure_0 = tmp2;
            tmp5 = closure_23;
            handleRootStateChange = function handleRootStateChange() {
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
              closure_2_23(() => { ... });
            };
            tmp6 = closure_23((isOnMain) => {
              let tmp = isOnMain;
              if (isOnMain.isOnMain !== closure_0) {
                const obj = { isOnMain: tmp2 };
                tmp = obj;
              }
              return tmp;
            });
            str2 = "state";
            return rootNavigationRef.addListener("state", handleRootStateChange);
          } else {
            return;
          }
        }
      }
      if (tmp35 != null) {
        class He {
          constructor() {
            obj = panelX(isOpenTarget[19]);
            rootNavigationRef = obj.getRootNavigationRef();
            closure_0 = rootNavigationRef;
            if (null != rootNavigationRef) {
              state = undefined;
              if (rootNavigationRef != null) {
                state = rootNavigationRef.getState();
              }
              tmp2 = null != state;
              if (tmp2) {
                tmp3 = state.routes[state.index];
                name = undefined;
                if (tmp3 != null) {
                  name = tmp3.name;
                }
                str = "main";
                tmp2 = "main" === name;
              }
              closure_0 = tmp2;
              tmp5 = closure_23;
              handleRootStateChange = function handleRootStateChange() {
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
                closure_2_23(() => { ... });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  const obj = { isOnMain: tmp2 };
                  tmp = obj;
                }
                return tmp;
              });
              str2 = "state";
              return rootNavigationRef.addListener("state", handleRootStateChange);
            } else {
              return;
            }
          }
        }
        if (tmp32 != null) {
          class He {
            constructor() {
              obj = panelX(isOpenTarget[19]);
              rootNavigationRef = obj.getRootNavigationRef();
              closure_0 = rootNavigationRef;
              if (null != rootNavigationRef) {
                state = undefined;
                if (rootNavigationRef != null) {
                  state = rootNavigationRef.getState();
                }
                tmp2 = null != state;
                if (tmp2) {
                  tmp3 = state.routes[state.index];
                  name = undefined;
                  if (tmp3 != null) {
                    name = tmp3.name;
                  }
                  str = "main";
                  tmp2 = "main" === name;
                }
                closure_0 = tmp2;
                tmp5 = closure_23;
                handleRootStateChange = function handleRootStateChange() {
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
                  closure_2_23(() => { ... });
                };
                tmp6 = closure_23((isOnMain) => {
                  let tmp = isOnMain;
                  if (isOnMain.isOnMain !== closure_0) {
                    const obj = { isOnMain: tmp2 };
                    tmp = obj;
                  }
                  return tmp;
                });
                str2 = "state";
                return rootNavigationRef.addListener("state", handleRootStateChange);
              } else {
                return;
              }
            }
          }
        }
        if (tmp36 == null) {
          class He {
            constructor() {
              obj = panelX(isOpenTarget[19]);
              rootNavigationRef = obj.getRootNavigationRef();
              closure_0 = rootNavigationRef;
              if (null != rootNavigationRef) {
                state = undefined;
                if (rootNavigationRef != null) {
                  state = rootNavigationRef.getState();
                }
                tmp2 = null != state;
                if (tmp2) {
                  tmp3 = state.routes[state.index];
                  name = undefined;
                  if (tmp3 != null) {
                    name = tmp3.name;
                  }
                  str = "main";
                  tmp2 = "main" === name;
                }
                closure_0 = tmp2;
                tmp5 = closure_23;
                handleRootStateChange = function handleRootStateChange() {
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
                  closure_2_23(() => { ... });
                };
                tmp6 = closure_23((isOnMain) => {
                  let tmp = isOnMain;
                  if (isOnMain.isOnMain !== closure_0) {
                    const obj = { isOnMain: tmp2 };
                    tmp = obj;
                  }
                  return tmp;
                });
                str2 = "state";
                return rootNavigationRef.addListener("state", handleRootStateChange);
              } else {
                return;
              }
            }
          }
        }
        tmp34 = tmp35[tmp36];
      }
    }
    let coerceGuildsRouteResult = tmp(tmp2[21]).coerceGuildsRoute(tmp34);
    cResult[5] = navigation;
    cResult[6] = coerceGuildsRouteResult;
    const tmp31 = coerceGuildsRouteResult;
    const tmpResult28 = tmp(tmp2[21]);
  } else {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
  }
  let tmp38 = enableHome;
  if (enableHome) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
    if (tmp31 != null) {
      class He {
        constructor() {
          obj = panelX(isOpenTarget[19]);
          rootNavigationRef = obj.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          if (null != rootNavigationRef) {
            state = undefined;
            if (rootNavigationRef != null) {
              state = rootNavigationRef.getState();
            }
            tmp2 = null != state;
            if (tmp2) {
              tmp3 = state.routes[state.index];
              name = undefined;
              if (tmp3 != null) {
                name = tmp3.name;
              }
              str = "main";
              tmp2 = "main" === name;
            }
            closure_0 = tmp2;
            tmp5 = closure_23;
            handleRootStateChange = function handleRootStateChange() {
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
              closure_2_23(() => { ... });
            };
            tmp6 = closure_23((isOnMain) => {
              let tmp = isOnMain;
              if (isOnMain.isOnMain !== closure_0) {
                const obj = { isOnMain: tmp2 };
                tmp = obj;
              }
              return tmp;
            });
            str2 = "state";
            return rootNavigationRef.addListener("state", handleRootStateChange);
          } else {
            return;
          }
        }
      }
      if (tmp40 != null) {
        class He {
          constructor() {
            obj = panelX(isOpenTarget[19]);
            rootNavigationRef = obj.getRootNavigationRef();
            closure_0 = rootNavigationRef;
            if (null != rootNavigationRef) {
              state = undefined;
              if (rootNavigationRef != null) {
                state = rootNavigationRef.getState();
              }
              tmp2 = null != state;
              if (tmp2) {
                tmp3 = state.routes[state.index];
                name = undefined;
                if (tmp3 != null) {
                  name = tmp3.name;
                }
                str = "main";
                tmp2 = "main" === name;
              }
              closure_0 = tmp2;
              tmp5 = closure_23;
              handleRootStateChange = function handleRootStateChange() {
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
                closure_2_23(() => { ... });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  const obj = { isOnMain: tmp2 };
                  tmp = obj;
                }
                return tmp;
              });
              str2 = "state";
              return rootNavigationRef.addListener("state", handleRootStateChange);
            } else {
              return;
            }
          }
        }
      }
    }
    if (undefined == null) {
      class He {
        constructor() {
          obj = panelX(isOpenTarget[19]);
          rootNavigationRef = obj.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          if (null != rootNavigationRef) {
            state = undefined;
            if (rootNavigationRef != null) {
              state = rootNavigationRef.getState();
            }
            tmp2 = null != state;
            if (tmp2) {
              tmp3 = state.routes[state.index];
              name = undefined;
              if (tmp3 != null) {
                name = tmp3.name;
              }
              str = "main";
              tmp2 = "main" === name;
            }
            closure_0 = tmp2;
            tmp5 = closure_23;
            handleRootStateChange = function handleRootStateChange() {
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
              closure_2_23(() => { ... });
            };
            tmp6 = closure_23((isOnMain) => {
              let tmp = isOnMain;
              if (isOnMain.isOnMain !== closure_0) {
                const obj = { isOnMain: tmp2 };
                tmp = obj;
              }
              return tmp;
            });
            str2 = "state";
            return rootNavigationRef.addListener("state", handleRootStateChange);
          } else {
            return;
          }
        }
      }
    }
    tmp38 = tmp39;
  }
  c25 = tmp38;
  if (cResult[7] === tmp38) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
  }
  let num8 = 0;
  if (tmp38) {
    class He {
      constructor() {
        obj = panelX(isOpenTarget[19]);
        rootNavigationRef = obj.getRootNavigationRef();
        closure_0 = rootNavigationRef;
        if (null != rootNavigationRef) {
          state = undefined;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          tmp2 = null != state;
          if (tmp2) {
            tmp3 = state.routes[state.index];
            name = undefined;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            str = "main";
            tmp2 = "main" === name;
          }
          closure_0 = tmp2;
          tmp5 = closure_23;
          handleRootStateChange = function handleRootStateChange() {
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
            closure_2_23(() => { ... });
          };
          tmp6 = closure_23((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              const obj = { isOnMain: tmp2 };
              tmp = obj;
            }
            return tmp;
          });
          str2 = "state";
          return rootNavigationRef.addListener("state", handleRootStateChange);
        } else {
          return;
        }
      }
    }
    num8 = setPanelX(tmp19, tmp20);
  }
  cResult[7] = tmp38;
  cResult[8] = tmp20;
  cResult[9] = tmp19;
  cResult[10] = num8;
  const tmpResult27 = panelX(isOpenTarget[20]);
}) : (() => {
  const MobileHomeDrawerExperiment = landOnHome(snapX[8]).MobileHomeDrawerExperiment;
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
  const sharedValue = landOnHome(snapX[9]).useSharedValue(0);
  let obj = landOnHome(snapX[9]);
  const sharedValue1 = landOnHome(snapX[9]).useSharedValue(0);
  let obj2 = landOnHome(snapX[9]);
  const sharedValue2 = landOnHome(snapX[9]).useSharedValue(false);
  let obj3 = landOnHome(snapX[9]);
  const sharedValue3 = landOnHome(snapX[9]).useSharedValue(false);
  let obj4 = landOnHome(snapX[9]);
  const sharedValue4 = landOnHome(snapX[9]).useSharedValue(false);
  let obj5 = landOnHome(snapX[9]);
  const sharedValue5 = landOnHome(snapX[9]).useSharedValue(0);
  let obj6 = landOnHome(snapX[9]);
  const sharedValue6 = landOnHome(snapX[9]).useSharedValue(false);
  let obj7 = landOnHome(snapX[9]);
  const sharedValue7 = landOnHome(snapX[9]).useSharedValue(false);
  let obj8 = landOnHome(snapX[9]);
  const navigation = landOnHome(snapX[10]).useNavigation();
  const trackServerDrawerInteract = gestureState.useCallback((action) => {
    panelX(snapX[11]).track(isPanelTouchActive.SERVER_DRAWER_INTERACT, { action });
  }, []);
  const obj9 = landOnHome(snapX[10]);
  class D {
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
  D.__closure = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
  D.__workletHash = 11980682848385;
  D.__initData = __initData3;
  const derivedValue = landOnHome(snapX[9]).useDerivedValue(D);
  const obj10 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
  const obj12 = landOnHome(snapX[9]);
  class A {
    constructor() {
      return closure_20.get();
    }
  }
  A.__closure = { isSnappedOpen: derivedValue };
  A.__workletHash = 10001685195797;
  A.__initData = __initData4;
  class N {
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
              tmp30 = snapX;
              tmp31 = closure_0;
              tmp32 = closure_2;
              obj5 = closure_0(closure_2[12]);
              tmp33 = c13;
              tmp34 = closure_0;
              tmp35 = closure_2;
              str2 = "animate-always";
              result1 = snapX.set(obj5.withTiming(c13, closure_0(closure_2[13]).HOME_DRAWER_SNAP_TIMING, "animate-always"));
              tmp37 = closure_0;
              tmp38 = closure_2;
              obj6 = closure_0(closure_2[9]);
              tmp39 = closure_0;
              tmp40 = closure_2;
              tmp42 = closure_0;
              tmp43 = closure_2;
              runOnJSResult = obj6.runOnJS(closure_0(closure_2[14]).triggerHapticFeedback);
              tmp41Result = runOnJSResult(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
            } else if (obj.get()) {
              tmp4 = closure_15;
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj2 = closure_0(closure_2[12]);
              tmp7 = closure_0;
              tmp8 = closure_2;
              num = 0;
              result2 = closure_15.set(obj2.withTiming(0, closure_0(closure_2[13]).HOME_DRAWER_UNSNAP_TIMING));
              tmp10 = closure_17;
              flag = false;
              result3 = closure_17.set(false);
              tmp12 = closure_16;
              result4 = closure_16.set(false);
              tmp14 = snapX;
              tmp15 = closure_0;
              tmp16 = closure_2;
              obj3 = closure_0(closure_2[12]);
              tmp17 = closure_0;
              tmp18 = closure_2;
              str = "animate-always";
              result5 = snapX.set(obj3.withTiming(0, closure_0(closure_2[13]).HOME_DRAWER_UNSNAP_TIMING, "animate-always"));
              tmp20 = closure_0;
              tmp21 = closure_2;
              obj4 = closure_0(closure_2[9]);
              tmp22 = closure_0;
              tmp23 = closure_2;
              tmp25 = closure_0;
              tmp26 = closure_2;
              runOnJSResult1 = obj4.runOnJS(closure_0(closure_2[14]).triggerHapticFeedback);
              tmp24Result = runOnJSResult1(closure_0(closure_2[14]).HapticFeedbackTypes.SOFT);
            }
            return tmp28;
          }
        }
      }
      return;
    }
  }
  const obj14 = landOnHome(snapX[9]);
  N.__closure = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: landOnHome(snapX[12]).withTiming, SNAP_OPEN_DISTANCE: sharedValue3, HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SNAP_TIMING, runOnJS: landOnHome(snapX[9]).runOnJS, triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes, flingThrow: sharedValue5, HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_UNSNAP_TIMING, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  N.__workletHash = 5850052611633;
  N.__initData = __initData5;
  const animatedReaction = obj14.useAnimatedReaction(A, N);
  const tmp17 = panelX(snapX[15])();
  closure_21 = tmp17;
  let tmp18 = panelX(snapX[16])();
  closure_22 = tmp18;
  const tmp19 = panelX(snapX[18])();
  if (enableHome) {
    enableHome = !tmp20;
  }
  if (enableHome) {
    enableHome = !panelX(snapX[17])().isChatBesideChannelList;
  }
  const tmp22 = isOpenTarget(gestureState.useState({ isOnMain: true }), 2);
  const first = tmp22[0];
  closure_25 = tmp22[1];
  const effect = obj11.useEffect(() => {
    const rootNavigationRef = landOnHome(snapX[19]).getRootNavigationRef();
    state = rootNavigationRef;
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
      closure_25((isOnMain) => {
        let tmp = isOnMain;
        if (isOnMain.isOnMain !== closure_0) {
          const obj = { isOnMain: tmp2 };
          tmp = obj;
        }
        return tmp;
      });
      return rootNavigationRef.addListener("state", handleRootStateChange);
    }
    let obj = landOnHome(snapX[19]);
  }, []);
  const obj13 = { gestureState, didSnapThisGesture: sharedValue3, snapX, withTiming: landOnHome(snapX[12]).withTiming, SNAP_OPEN_DISTANCE: sharedValue3, HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SNAP_TIMING, runOnJS: landOnHome(snapX[9]).runOnJS, triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes, flingThrow: sharedValue5, HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_UNSNAP_TIMING, hasThrown: sharedValue7, snappedByDrag: sharedValue6 };
  const tmp15 = sharedValue3;
  tmp20 = tmp19 === noteInteraction.GESTURE_FULL || tmp19 === noteInteraction.GESTURE_EDGE;
  const tmp21 = isOpenTarget;
  let isFocused = enableHome;
  if (enableHome) {
    isFocused = tmpResult.useIsFocused();
  }
  tmpResult = landOnHome(snapX[10]);
  const sharedValue8 = landOnHome(snapX[9]).useSharedValue(0);
  const tmpResult10 = landOnHome(snapX[9]);
  let enablePeekHint = enableHome;
  if (enableHome) {
    enablePeekHint = config.enablePeekHint;
  }
  const homeDrawerPeekHint = landOnHome(snapX[20]).useHomeDrawerPeekHint(enablePeekHint, sharedValue8);
  state = navigation.getState();
  const tmpResult11 = landOnHome(snapX[20]);
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
  let coerceGuildsRouteResult = landOnHome(snapX[21]).coerceGuildsRoute(tmp29);
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
      const coerceGuildsRouteResult = landOnHome(snapX[21]).coerceGuildsRoute(tmp);
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
      const obj = landOnHome(snapX[21]);
    }
    navigation.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
      state = HomeDrawerSubtitleStore.getState();
      state.stopTimer();
    };
  }, items2);
  gestureState.useRef(false);
  const items3 = [enableHome, tmp31, num2, panelX, isOpenTarget];
  const layoutEffect = obj11.useLayoutEffect(() => {
    let tmp = enableHome;
    if (enableHome) {
      tmp = !ref.current;
    }
    if (tmp) {
      const result = panelX.set(num2);
      const result1 = isOpenTarget.set(true === drawerOpen);
      if (drawerOpen) {
        state = HomeDrawerSubtitleStore.getState();
        state.startTimer();
      }
      ref.current = true;
    }
  }, items3);
  const tmpResult12 = landOnHome(snapX[21]);
  class Fe {
    constructor() {
      value = panelX.get();
      sum = value + snapX.get();
      return sum + closure_27.get();
    }
  }
  Fe.__closure = { panelX, snapX, peekX: sharedValue8 };
  Fe.__workletHash = 9690292606643;
  Fe.__initData = __initData6;
  const derivedValue1 = landOnHome(snapX[9]).useDerivedValue(Fe);
  const tmpResult13 = landOnHome(snapX[9]);
  class Le {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: closure_31.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  Le.__closure = { panelTranslateX: derivedValue1 };
  Le.__workletHash = 5267878012006;
  Le.__initData = __initData7;
  const animatedStyle = landOnHome(snapX[9]).useAnimatedStyle(Le);
  const tmpResult14 = landOnHome(snapX[9]);
  class Ce {
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
  Ce.__closure = { isOpenTarget, isPanelTouchActive, panelTranslateX: derivedValue1 };
  Ce.__workletHash = 16461301551041;
  Ce.__initData = __initData8;
  function be(arg0) {
    value = arg0;
    if (arg0) {
      value = sharedValue4.get();
    }
    if (value) {
      const result = sharedValue4.set(false);
    }
  }
  be.__closure = { isPullActive: sharedValue4 };
  be.__workletHash = 8757763202417;
  be.__initData = __initData9;
  const animatedReaction1 = landOnHome(snapX[9]).useAnimatedReaction(Ce, be);
  const tmpResult15 = landOnHome(snapX[9]);
  function xe() {
    value = derivedValue1.get();
    let num = 0;
    if (sharedValue4.get()) {
      num = 0;
      if (value > 0) {
        num = 0;
        if (value < c17) {
          if (value < c14) {
            let result = value / c14;
          } else {
            result = 1 - (value - c14) / c13;
          }
        }
      }
    }
    return num;
  }
  xe.__closure = { panelTranslateX: derivedValue1, isPullActive: sharedValue4, HOME_DRAWER_PULL_SETTLE_WIDTH: sharedValue7, MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue4, SNAP_OPEN_DISTANCE: tmp15 };
  xe.__workletHash = 3876942972214;
  xe.__initData = __initData10;
  const derivedValue2 = landOnHome(snapX[9]).useDerivedValue(xe);
  const obj15 = { panelTranslateX: derivedValue1, isPullActive: sharedValue4, HOME_DRAWER_PULL_SETTLE_WIDTH: sharedValue7, MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue4, SNAP_OPEN_DISTANCE: tmp15 };
  const tmpResult16 = landOnHome(snapX[9]);
  class Ue {
    constructor() {
      accessibilityPreferencesSharedValue = closure_0(closure_2[22]).accessibilityPreferencesSharedValue;
      num = 0;
      if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
        tmp = globalThis;
        _Math = Math;
        tmp2 = closure_33;
        tmp3 = c15;
        tmp5 = closure_15;
        result = closure_33.get() * c15;
        tmp6 = c16;
        num = Math.max(result, closure_15.get() * c16);
      }
      return num;
    }
  }
  const tmpResult17 = landOnHome(snapX[9]);
  Ue.__closure = { accessibilityPreferencesSharedValue: landOnHome(snapX[22]).accessibilityPreferencesSharedValue, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: sharedValue5, flingThrow: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6 };
  Ue.__workletHash = 1305582168128;
  Ue.__initData = __initData11;
  const derivedValue3 = tmpResult17.useDerivedValue(Ue);
  const obj16 = { accessibilityPreferencesSharedValue: landOnHome(snapX[22]).accessibilityPreferencesSharedValue, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: sharedValue5, flingThrow: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6 };
  class Ve {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: closure_34.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  Ve.__closure = { guildsBarPullX: derivedValue3 };
  Ve.__workletHash = 3913124214690;
  Ve.__initData = __initData12;
  const guildsBarDrawerStyle = landOnHome(snapX[9]).useAnimatedStyle(Ve);
  const items4 = [gestureState, panelX, snapX, isOpenTarget, sharedValue2, sharedValue3, derivedValue, sharedValue4, derivedValue2, sharedValue5, sharedValue6, sharedValue7, sharedValue, sharedValue1, isFocused, maxX, isPanelTouchActive, noteInteraction, trackServerDrawerInteract, first];
  const memo = obj11.useMemo(() => {
    function visualPanelX() {
      value = settleDrawer.get();
      let num = 0;
      if (derivedValue.get()) {
        num = sharedValue3;
      }
      return value + num;
    }
    visualPanelX.__closure = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue3 };
    visualPanelX.__workletHash = 1162980284148;
    visualPanelX.__initData = __initData;
    settleDrawer = function settleDrawer(arg0) {
      const result = beginDrag.set(arg0);
      let num = 0;
      if (arg0) {
        num = maxX;
      }
      const result1 = settleDrawer.set(landOnHome(snapX[12]).withTiming(num, landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const obj = landOnHome(snapX[12]);
      const result2 = fireThrow.set(landOnHome(snapX[12]).withTiming(0, landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
      const tmp3Result = landOnHome(snapX[12]);
      landOnHome(snapX[9]).runOnJS(landOnHome(snapX[21]).setHomeDrawerState)(arg0);
      const tmp3Result2 = landOnHome(snapX[9]);
    };
    settleDrawer.__closure = { isOpenTarget: beginDrag, panelX: settleDrawer, withTiming: landOnHome(snapX[12]).withTiming, maxX, HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING, snapX: fireThrow, runOnJS: landOnHome(snapX[9]).runOnJS, setHomeDrawerState: landOnHome(snapX[21]).setHomeDrawerState };
    settleDrawer.__workletHash = 2188020220373;
    settleDrawer.__initData = __initData2;
    fireThrow = function fireThrow() {
      value = sharedValue7.get();
      value2 = !value;
      if (!value) {
        value2 = sharedValue4.get();
      }
      if (value2) {
        const result = sharedValue7.set(true);
        const result1 = closure_1_15.set(landOnHome(snapX[9]).clamp(derivedValue2.get() * sharedValue5 / sharedValue6, 0, 1));
        const obj2 = landOnHome(snapX[9]);
        const obj3 = landOnHome(snapX[9]);
        const obj4 = landOnHome(snapX[12]);
        const withTimingResult = landOnHome(snapX[12]).withTiming(1, landOnHome(snapX[13]).HOME_DRAWER_FLING_THROW_TIMING);
        const result2 = closure_1_15.set(obj3.withSequence(withTimingResult, landOnHome(snapX[12]).withTiming(0, landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING)));
        const obj5 = landOnHome(snapX[12]);
      }
    };
    let obj = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue3 };
    let obj2 = { isOpenTarget: beginDrag, panelX: settleDrawer, withTiming: landOnHome(snapX[12]).withTiming, maxX, HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING, snapX: fireThrow, runOnJS: landOnHome(snapX[9]).runOnJS, setHomeDrawerState: landOnHome(snapX[21]).setHomeDrawerState };
    let tmp3 = beginDrag;
    fireThrow.__closure = { hasThrown: sharedValue7, isPullActive: sharedValue4, flingThrow: sharedValue5, clamp: landOnHome(snapX[9]).clamp, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6, withSequence: landOnHome(snapX[9]).withSequence, withTiming: landOnHome(snapX[12]).withTiming, HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_THROW_TIMING, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING };
    fireThrow.__workletHash = 6364057094792;
    fireThrow.__initData = __initData3;
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
    beginDrag.__closure = { panelX: settleDrawer, snapX: fireThrow, activationOffsetX: sharedValue1, gestureState: shouldOpenFromPosition, isPullActive: sharedValue4, PULL_ACTIVE_MAX_START: 16 };
    beginDrag.__workletHash = 11726804091522;
    beginDrag.__initData = __initData4;
    shouldOpenFromPosition = function shouldOpenFromPosition() {
      if (typeof visualPanelX === "function") {
        value = panelX.get();
        num2 = 0;
        if (derivedValue.get()) {
          num2 = c13;
        }
        const sum = value + num2;
        let tmp5 = 0 !== sum;
        if (tmp5) {
          let tmp8 = sum > c11 * maxX;
          if (!tmp8) {
            let tmp10 = sum >= c10;
            if (tmp10) {
              tmp10 = sharedValue.get() > 0;
            }
            tmp8 = tmp10;
          }
          tmp5 = tmp8;
        }
        return tmp5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    shouldOpenFromPosition.__closure = { visualPanelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: sharedValue1, maxX, INITIAL_OPEN_WIDTH: sharedValue, dragOffsetX: sharedValue };
    shouldOpenFromPosition.__workletHash = 12906331917783;
    shouldOpenFromPosition.__initData = __initData5;
    const Gesture = landOnHome(snapX[23]).Gesture;
    let obj3 = { hasThrown: sharedValue7, isPullActive: sharedValue4, flingThrow: sharedValue5, clamp: landOnHome(snapX[9]).clamp, pullFraction: derivedValue2, HOME_DRAWER_PULL_DISTANCE: sharedValue5, HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6, withSequence: landOnHome(snapX[9]).withSequence, withTiming: landOnHome(snapX[12]).withTiming, HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_THROW_TIMING, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING };
    let obj4 = { panelX: settleDrawer, snapX: fireThrow, activationOffsetX: sharedValue1, gestureState: shouldOpenFromPosition, isPullActive: sharedValue4, PULL_ACTIVE_MAX_START: 16 };
    let obj5 = { visualPanelX, FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: sharedValue1, maxX, INITIAL_OPEN_WIDTH: sharedValue, dragOffsetX: sharedValue };
    let isOnMain = isFocused;
    if (isFocused) {
      isOnMain = first.isOnMain;
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
      const result7 = sharedValue5.set(landOnHome(snapX[12]).withTiming(0, landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING));
      const obj2 = { active: false, initialX: absoluteX.absoluteX, initialY: absoluteX.absoluteY, panelX: null };
      value = settleDrawer.get();
      obj2.panelX = value + fireThrow.get();
      const result8 = shouldOpenFromPosition.set(obj2);
    };
    const maxPointersResult = result.maxPointers(1);
    fn.__closure = { isPanelTouchActive, dragOffsetX: sharedValue, activationOffsetX: sharedValue1, didSettle: sharedValue2, didSnapThisGesture: sharedValue3, snappedByDrag: sharedValue6, hasThrown: sharedValue7, flingThrow: sharedValue5, withTiming: landOnHome(snapX[12]).withTiming, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING, gestureState: shouldOpenFromPosition, panelX: settleDrawer, snapX: fireThrow };
    fn.__workletHash = 1774401216950;
    fn.__initData = __initData10;
    const obj6 = { isPanelTouchActive, dragOffsetX: sharedValue, activationOffsetX: sharedValue1, didSettle: sharedValue2, didSnapThisGesture: sharedValue3, snappedByDrag: sharedValue6, hasThrown: sharedValue7, flingThrow: sharedValue5, withTiming: landOnHome(snapX[12]).withTiming, HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING, gestureState: shouldOpenFromPosition, panelX: settleDrawer, snapX: fireThrow };
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
    fn2.__closure = { gestureState: shouldOpenFromPosition, isOpenTarget: tmp3, ACTIVATION_MIN_DISTANCE: 10, beginDrag };
    fn2.__workletHash = 9648053766823;
    fn2.__initData = __initData9;
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
              result1 = diff - c13;
            }
            set = set(result1);
          }
        }
        const _Math = Math;
        const result2 = panelX.set(Math.max(diff + gestureState.get().panelX, 0));
        let tmp13 = sum < c14;
        if (tmp13) {
          value2 = panelX.get();
          tmp13 = value2 + snapX.get() >= tmp12;
        }
        if (tmp13) {
          if (absoluteX.velocityX <= c12) {
            const result3 = sharedValue6.set(true);
          } else if (!sharedValue6.get()) {
            fireThrow();
          }
        }
      }
    };
    fn3.__closure = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, panelX: settleDrawer, snapX: fireThrow, INITIAL_OPEN_WIDTH: sharedValue, DRAWER_RESISTANCE: 3, SNAP_OPEN_DISTANCE: sharedValue3, MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue4, FLING_THROW_MIN_VELOCITY: sharedValue2, snappedByDrag: sharedValue6, fireThrow };
    fn3.__workletHash = 4851858139801;
    fn3.__initData = __initData8;
    const obj7 = { gestureState: shouldOpenFromPosition, dragOffsetX: sharedValue, panelX: settleDrawer, snapX: fireThrow, INITIAL_OPEN_WIDTH: sharedValue, DRAWER_RESISTANCE: 3, SNAP_OPEN_DISTANCE: sharedValue3, MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue4, FLING_THROW_MIN_VELOCITY: sharedValue2, snappedByDrag: sharedValue6, fireThrow };
    const onTouchesMoveResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2);
    const fn4 = function t(velocityX) {
      value = sharedValue1.get();
      const sum = value + sharedValue.get();
      let tmp3 = velocityX.velocityX > 50;
      value3 = sharedValue6.get();
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
              num5 = c13;
            }
            const sum1 = value4 + num5;
            flag = 0 !== sum1;
            if (flag) {
              let tmp16 = sum1 > c11 * maxX;
              if (!tmp16) {
                tmp16 = sum1 >= c10 && sharedValue.get() > 0;
                const tmp18 = sum1 >= c10 && sharedValue.get() > 0;
              }
              flag = tmp16;
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
      const tmp38 = gestureState.get().panelX > 0;
      if (flag) {
        if (!tmp38) {
          ReanimatedRexport.runOnJS(callback)(constants.OPEN);
        }
      }
      if (!tmp38) {
        ReanimatedRexport.runOnJS(callback)(constants.PEEK);
      }
    };
    const onChangeResult = maxPointersResult.onBegin(fn).onTouchesMove(fn2).onChange(fn3);
    fn4.__closure = { activationOffsetX: sharedValue1, dragOffsetX: sharedValue, FLING_MIN_VELOCITY: 50, FLING_MIN_DISTANCE: 40, snappedByDrag: sharedValue6, fireThrow, INITIAL_OPEN_WIDTH: sharedValue, runOnJS: landOnHome(snapX[9]).runOnJS, triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue2, gestureState: shouldOpenFromPosition, trackServerDrawerInteract, ServerDrawerInteractAction: navigation };
    fn4.__workletHash = 11192435095098;
    fn4.__initData = __initData7;
    const obj8 = { activationOffsetX: sharedValue1, dragOffsetX: sharedValue, FLING_MIN_VELOCITY: 50, FLING_MIN_DISTANCE: 40, snappedByDrag: sharedValue6, fireThrow, INITIAL_OPEN_WIDTH: sharedValue, runOnJS: landOnHome(snapX[9]).runOnJS, triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback, HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes, shouldOpenFromPosition, settleDrawer, didSettle: sharedValue2, gestureState: shouldOpenFromPosition, trackServerDrawerInteract, ServerDrawerInteractAction: navigation };
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
              num2 = c13;
            }
            const sum = value + num2;
            let tmp9 = 0 !== sum;
            if (tmp9) {
              let tmp12 = sum > c11 * maxX;
              if (!tmp12) {
                let tmp14 = sum >= c10;
                if (tmp14) {
                  tmp14 = sharedValue.get() > 0;
                }
                tmp12 = tmp14;
              }
              tmp9 = tmp12;
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
    fn5.__closure = { gestureState: shouldOpenFromPosition, didSettle: sharedValue2, settleDrawer, shouldOpenFromPosition, isPanelTouchActive, runOnJS: landOnHome(snapX[9]).runOnJS, noteInteraction, dragOffsetX: sharedValue, activationOffsetX: sharedValue1 };
    fn5.__workletHash = 8872809464986;
    fn5.__initData = __initData6;
    return onEndResult.onFinalize(fn5);
  }, items4);
  const first1 = tmp21(obj11.useState(() => ({ gesture: memo, panelStyles: animatedStyle, gestureState, panelX, panelTranslateX: derivedValue1, guildsBarDrawerStyle, guildsBarPullX: derivedValue3 })), 1)[0];
  const items5 = [first1, memo];
  const memo1 = obj11.useMemo(() => {
    const obj = {};
    const merged = Object.assign(first1);
    obj.gesture = memo;
    return obj;
  }, items5);
  const items6 = [memo1, enableHome, landOnHome];
  const tmpResult18 = landOnHome(snapX[9]);
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
});
export const HomeDrawerStateContext = context;
export const useHomeDrawerState = () => noop.useContext(context).homeDrawerState;
export const useIsHomeDrawerEnabled = () => noop.useContext(context).enableHome;
export const useDoesLandOnHomeDrawer = () => noop.useContext(context).landOnHome;