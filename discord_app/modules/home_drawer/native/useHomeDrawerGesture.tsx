// discord_app/modules/home_drawer/native/useHomeDrawerGesture.tsx
import Constants from "../../../Constants.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import reanimated_AccessibilityPreferencesSharedValue from "../../../design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx";
import LegacyBaseButton from "../../../../_runtime/06147_LegacyBaseButton.js";
import LaunchPadConstants from "../../launchpad/native/LaunchPadConstants.tsx";
import HomeDrawerStore2 from "HomeDrawerStore.tsx";
import HomeDrawerAnimations from "HomeDrawerAnimations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import HomeDrawerSubtitleStore from "HomeDrawerSubtitleStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "../../reanimated/ReanimatedHelperTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let navigation, set, set2, set3, str2;

let Gesture;
let ReanimatedHelperTypes;
const computeMaxX = HomeDrawerStore2.computeMaxX;
const AnalyticEvents = Constants.AnalyticEvents;
const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
let c10 = 144;
let c11 = 0.5;
let c12 = 400;
let c13 = 96.00000000000001;
let c14 = 48;
let c15 = 12;
let c16 = 16;
let c17 = 144;
let closure_18 = { PEEK: "PEEK", OPEN: "OPEN" };
let closure_19 = {
  code: "function useHomeDrawerGestureTsx1(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}",
};
let __initData = {
  code: "function useHomeDrawerGestureTsx2(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}",
};
let __initData2 = {
  code: 'function useHomeDrawerGestureTsx3(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,"animate-always"));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING,"animate-always"));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}',
};
let closure_22 = {
  code: "function useHomeDrawerGestureTsx4(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}",
};
let closure_23 = {
  code: "function useHomeDrawerGestureTsx5(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}",
};
let closure_24 = {
  code: "function useHomeDrawerGestureTsx6(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}",
};
let closure_25 = {
  code: "function useHomeDrawerGestureTsx7(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}",
};
let closure_26 = {
  code: "function useHomeDrawerGestureTsx8(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}",
};
let closure_27 = {
  code: "function useHomeDrawerGestureTsx9(){const{accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}",
};
let closure_28 = {
  code: "function useHomeDrawerGestureTsx10(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}",
};
let closure_29 = {
  code: "function visualPanelX_useHomeDrawerGestureTsx11(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}",
};
let closure_30 = {
  code: 'function settleDrawer_useHomeDrawerGestureTsx12(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,"animate-always"));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,"animate-always"));runOnJS(setHomeDrawerState)(shouldOpen);}',
};
let closure_31 = {
  code: "function fireThrow_useHomeDrawerGestureTsx13(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}",
};
let closure_32 = {
  code: "function beginDrag_useHomeDrawerGestureTsx14(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}",
};
let closure_33 = {
  code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx15(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX_0=visualPanelX();if(currentX_0===0){return false;}if(currentX_0>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX){return true;}if(currentX_0>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0){return true;}return false;}",
};
let closure_34 = {
  code: "function useHomeDrawerGestureTsx16(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}",
};
let closure_35 = {
  code: "function useHomeDrawerGestureTsx17(event_2){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;var flingDistanceX=activationOffsetX.get()+dragOffsetX.get();var passesOpeningVelocity=event_2.velocityX>FLING_MIN_VELOCITY;var passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;var isBlockedByDragSnap=snappedByDrag.get();var isOpeningFling=passesOpeningVelocity&&passesMinDistance;var shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}var shouldOpen_0;if(isOpeningFling){shouldOpen_0=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else{if(event_2.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen_0=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen_0=shouldOpenFromPosition();}}settleDrawer(shouldOpen_0);didSettle.set(true);var wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen_0&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else{if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}}",
};
let closure_36 = {
  code: "function useHomeDrawerGestureTsx18(event_1){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active){return;}var newXOffset=event_1.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);var previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event_1.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else{if(!snappedByDrag.get()){fireThrow();}}}}",
};
let closure_37 = {
  code: "function useHomeDrawerGestureTsx19(event_0,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active){return;}var touchX_0=event_0.changedTouches[0].absoluteX;var touchY=event_0.changedTouches[0].absoluteY;var absoluteXDiff=Math.abs(touchX_0-gestureState.get().initialX);var absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);var isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX_0<gestureState.get().initialX||isOpen&&touchX_0>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX_0);manager.activate();}",
};
let closure_38 = {
  code: "function useHomeDrawerGestureTsx20(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}",
};
const __initData3 = {
  code: "function useHomeDrawerGestureTsx21(){const{gestureState,dragOffsetX,INITIAL_OPEN_WIDTH}=this.__closure;return gestureState.get().panelX===0&&dragOffsetX.get()>=INITIAL_OPEN_WIDTH;}",
};
const __initData4 = {
  code: "function useHomeDrawerGestureTsx22(){const{isSnappedOpen}=this.__closure;return isSnappedOpen.get();}",
};
const __initData5 = {
  code: "function useHomeDrawerGestureTsx23(isSnapped,wasSnapped){const{gestureState,didSnapThisGesture,snapX,withTiming,SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,flingThrow,HOME_DRAWER_UNSNAP_TIMING,hasThrown,snappedByDrag}=this.__closure;if(!gestureState.get().active||wasSnapped===null){return;}if(isSnapped===wasSnapped){return;}if(isSnapped){didSnapThisGesture.set(true);snapX.set(withTiming(SNAP_OPEN_DISTANCE,HOME_DRAWER_SNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);return;}if(!didSnapThisGesture.get()){return;}flingThrow.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING));hasThrown.set(false);snappedByDrag.set(false);snapX.set(withTiming(0,HOME_DRAWER_UNSNAP_TIMING,'animate-always'));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}",
};
const __initData6 = {
  code: "function useHomeDrawerGestureTsx24(){const{panelX,snapX,peekX}=this.__closure;return panelX.get()+snapX.get()+peekX.get();}",
};
const __initData7 = {
  code: "function useHomeDrawerGestureTsx25(){const{panelTranslateX}=this.__closure;return{transform:[{translateX:panelTranslateX.get()}]};}",
};
const __initData8 = {
  code: "function useHomeDrawerGestureTsx26(){const{isOpenTarget,isPanelTouchActive,panelTranslateX}=this.__closure;return isOpenTarget.get()||!isPanelTouchActive.get()&&panelTranslateX.get()<=0;}",
};
const __initData9 = {
  code: "function useHomeDrawerGestureTsx27(isPullDone){const{isPullActive}=this.__closure;if(isPullDone&&isPullActive.get()){isPullActive.set(false);}}",
};
const __initData10 = {
  code: "function useHomeDrawerGestureTsx28(){const{panelTranslateX,isPullActive,HOME_DRAWER_PULL_SETTLE_WIDTH,MAX_HOME_DRAWER_ANIMATING_WIDTH,SNAP_OPEN_DISTANCE}=this.__closure;const reveal=panelTranslateX.get();if(!isPullActive.get()||reveal<=0||reveal>=HOME_DRAWER_PULL_SETTLE_WIDTH){return 0;}return reveal<MAX_HOME_DRAWER_ANIMATING_WIDTH?reveal/MAX_HOME_DRAWER_ANIMATING_WIDTH:1-(reveal-MAX_HOME_DRAWER_ANIMATING_WIDTH)/SNAP_OPEN_DISTANCE;}",
};
const __initData11 = {
  code: "function useHomeDrawerGestureTsx29(){const{accessibilityPreferencesSharedValue,pullFraction,HOME_DRAWER_PULL_DISTANCE,flingThrow,HOME_DRAWER_FLING_THROW_DISTANCE}=this.__closure;if(accessibilityPreferencesSharedValue.get().reduceMotion){return 0;}return Math.max(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE,flingThrow.get()*HOME_DRAWER_FLING_THROW_DISTANCE);}",
};
const __initData12 = {
  code: "function useHomeDrawerGestureTsx30(){const{guildsBarPullX}=this.__closure;return{transform:[{translateX:guildsBarPullX.get()}]};}",
};
let closure_49 = {
  code: "function visualPanelX_useHomeDrawerGestureTsx31(){const{panelX,isSnappedOpen,SNAP_OPEN_DISTANCE}=this.__closure;return panelX.get()+(isSnappedOpen.get()?SNAP_OPEN_DISTANCE:0);}",
};
let closure_50 = {
  code: "function settleDrawer_useHomeDrawerGestureTsx32(shouldOpen){const{isOpenTarget,panelX,withTiming,maxX,HOME_DRAWER_SETTLE_TIMING,snapX,runOnJS,setHomeDrawerState}=this.__closure;isOpenTarget.set(shouldOpen);panelX.set(withTiming(shouldOpen?maxX:0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));snapX.set(withTiming(0,HOME_DRAWER_SETTLE_TIMING,'animate-always'));runOnJS(setHomeDrawerState)(shouldOpen);}",
};
let closure_51 = {
  code: "function fireThrow_useHomeDrawerGestureTsx33(){const{hasThrown,isPullActive,flingThrow,clamp,pullFraction,HOME_DRAWER_PULL_DISTANCE,HOME_DRAWER_FLING_THROW_DISTANCE,withSequence,withTiming,HOME_DRAWER_FLING_THROW_TIMING,HOME_DRAWER_FLING_RETURN_TIMING}=this.__closure;if(hasThrown.get()||!isPullActive.get()){return;}hasThrown.set(true);flingThrow.set(clamp(pullFraction.get()*HOME_DRAWER_PULL_DISTANCE/HOME_DRAWER_FLING_THROW_DISTANCE,0,1));flingThrow.set(withSequence(withTiming(1,HOME_DRAWER_FLING_THROW_TIMING),withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING)));}",
};
let closure_52 = {
  code: "function beginDrag_useHomeDrawerGestureTsx34(touchX){const{panelX,snapX,activationOffsetX,gestureState,isPullActive,PULL_ACTIVE_MAX_START}=this.__closure;const currentX=panelX.get()+snapX.get();activationOffsetX.set(touchX-gestureState.get().initialX);isPullActive.set(currentX<PULL_ACTIVE_MAX_START);panelX.set(currentX);snapX.set(0);gestureState.set({...gestureState.get(),active:true,initialX:touchX,panelX:currentX});}",
};
let closure_53 = {
  code: "function shouldOpenFromPosition_useHomeDrawerGestureTsx35(){const{visualPanelX,FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN,maxX,INITIAL_OPEN_WIDTH,dragOffsetX}=this.__closure;const currentX_0=visualPanelX();if(currentX_0===0)return false;if(currentX_0>FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN*maxX)return true;if(currentX_0>=INITIAL_OPEN_WIDTH&&dragOffsetX.get()>0)return true;return false;}",
};
let closure_54 = {
  code: "function useHomeDrawerGestureTsx36(){const{gestureState,didSettle,settleDrawer,shouldOpenFromPosition,isPanelTouchActive,runOnJS,noteInteraction,dragOffsetX,activationOffsetX}=this.__closure;if(gestureState.get().active&&!didSettle.get()){settleDrawer(shouldOpenFromPosition());}isPanelTouchActive.set(false);runOnJS(noteInteraction)();gestureState.set({active:false,initialX:0,initialY:0,panelX:0});dragOffsetX.set(0);activationOffsetX.set(0);}",
};
let closure_55 = {
  code: "function useHomeDrawerGestureTsx37(event_2){const{activationOffsetX,dragOffsetX,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,snappedByDrag,fireThrow,INITIAL_OPEN_WIDTH,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldOpenFromPosition,settleDrawer,didSettle,gestureState,trackServerDrawerInteract,ServerDrawerInteractAction}=this.__closure;const flingDistanceX=activationOffsetX.get()+dragOffsetX.get();const passesOpeningVelocity=event_2.velocityX>FLING_MIN_VELOCITY;const passesMinDistance=flingDistanceX>FLING_MIN_DISTANCE;const isBlockedByDragSnap=snappedByDrag.get();const isOpeningFling=passesOpeningVelocity&&passesMinDistance;const shouldAttemptThrow=isOpeningFling&&!isBlockedByDragSnap;if(shouldAttemptThrow){fireThrow();}let shouldOpen_0;if(isOpeningFling){shouldOpen_0=true;if(flingDistanceX<INITIAL_OPEN_WIDTH){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}else if(event_2.velocityX<-FLING_MIN_VELOCITY&&flingDistanceX<-FLING_MIN_DISTANCE){shouldOpen_0=false;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}else{shouldOpen_0=shouldOpenFromPosition();}settleDrawer(shouldOpen_0);didSettle.set(true);const wasOpenAtStart=gestureState.get().panelX>0;if(shouldOpen_0&&!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.OPEN);}else if(!wasOpenAtStart){runOnJS(trackServerDrawerInteract)(ServerDrawerInteractAction.PEEK);}}",
};
let closure_56 = {
  code: "function useHomeDrawerGestureTsx38(event_1){const{gestureState,dragOffsetX,panelX,snapX,INITIAL_OPEN_WIDTH,DRAWER_RESISTANCE,SNAP_OPEN_DISTANCE,MAX_HOME_DRAWER_ANIMATING_WIDTH,FLING_THROW_MIN_VELOCITY,snappedByDrag,fireThrow}=this.__closure;if(!gestureState.get().active)return;const newXOffset=event_1.absoluteX-gestureState.get().initialX;dragOffsetX.set(newXOffset);const previousReveal=panelX.get()+snapX.get();if(gestureState.get().panelX===0&&newXOffset>=0){panelX.set(newXOffset<INITIAL_OPEN_WIDTH?newXOffset/DRAWER_RESISTANCE:newXOffset-SNAP_OPEN_DISTANCE);}else{panelX.set(Math.max(newXOffset+gestureState.get().panelX,0));}if(previousReveal<MAX_HOME_DRAWER_ANIMATING_WIDTH&&panelX.get()+snapX.get()>=MAX_HOME_DRAWER_ANIMATING_WIDTH){if(event_1.velocityX<=FLING_THROW_MIN_VELOCITY){snappedByDrag.set(true);}else if(!snappedByDrag.get()){fireThrow();}}}",
};
let closure_57 = {
  code: "function useHomeDrawerGestureTsx39(event_0,manager){const{gestureState,isOpenTarget,ACTIVATION_MIN_DISTANCE,beginDrag}=this.__closure;if(gestureState.get().active)return;const touchX_0=event_0.changedTouches[0].absoluteX;const touchY=event_0.changedTouches[0].absoluteY;const absoluteXDiff=Math.abs(touchX_0-gestureState.get().initialX);const absoluteYDiff=Math.abs(touchY-gestureState.get().initialY);const isOpen=isOpenTarget.get();if(absoluteYDiff>absoluteXDiff||!isOpen&&touchX_0<gestureState.get().initialX||isOpen&&touchX_0>gestureState.get().initialX){manager.fail();return;}if(absoluteXDiff<ACTIVATION_MIN_DISTANCE){return;}beginDrag(touchX_0);manager.activate();}",
};
let closure_58 = {
  code: "function useHomeDrawerGestureTsx40(event){const{isPanelTouchActive,dragOffsetX,activationOffsetX,didSettle,didSnapThisGesture,snappedByDrag,hasThrown,flingThrow,withTiming,HOME_DRAWER_FLING_RETURN_TIMING,gestureState,panelX,snapX}=this.__closure;isPanelTouchActive.set(true);dragOffsetX.set(0);activationOffsetX.set(0);didSettle.set(false);didSnapThisGesture.set(false);snappedByDrag.set(false);hasThrown.set(false);flingThrow.set(withTiming(0,HOME_DRAWER_FLING_RETURN_TIMING));gestureState.set({active:false,initialX:event.absoluteX,initialY:event.absoluteY,panelX:panelX.get()+snapX.get()});}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  gesture: Gesture.Pan(),
  panelStyles: {},
  gestureState: ReanimatedHelperTypes.createFakeSharedValue({ active: false, initialX: 0, initialY: 0, panelX: 0 }),
  panelX: ReanimatedHelperTypes.createFakeSharedValue(0),
  panelTranslateX: ReanimatedHelperTypes.createFakeSharedValue(0),
  guildsBarDrawerStyle: {},
  guildsBarPullX: ReanimatedHelperTypes.createFakeSharedValue(0),
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_20;
      let closure_21;
      let derivedValue;
      let enableHome;
      let first;
      let gesture;
      let guildsBarDrawerStyle;
      let guildsBarPullX;
      let isOpenTarget;
      let landOnHome;
      let maxX;
      let panelStyles;
      let panelTranslateX;
      let panelX;
      let ref;
      let tmp16;
      let tmp26;
      let tmp32;
      let tmp = panelX;
      let tmp2 = isOpenTarget;
      let obj = panelX(isOpenTarget[7]);
      const cResult = obj.c(138);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "gesture" };
        let num = 0;
        cResult[0] = obj2;
        first = obj2;
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
      const tmpResult = tmp(tmp2[9]);
      const sharedValue = tmpResult.useSharedValue(0);
      const tmpResult15 = tmp(tmp2[9]);
      const sharedValue1 = tmpResult15.useSharedValue(0);
      const tmpResult16 = tmp(tmp2[9]);
      const sharedValue2 = tmpResult16.useSharedValue(false);
      const tmpResult17 = tmp(tmp2[9]);
      const sharedValue3 = tmpResult17.useSharedValue(false);
      const tmpResult18 = tmp(tmp2[9]);
      const sharedValue4 = tmpResult18.useSharedValue(false);
      const tmpResult19 = tmp(tmp2[9]);
      const sharedValue5 = tmpResult19.useSharedValue(0);
      const tmpResult20 = tmp(tmp2[9]);
      const sharedValue6 = tmpResult20.useSharedValue(false);
      const tmpResult21 = tmp(tmp2[9]);
      const sharedValue7 = tmpResult21.useSharedValue(false);
      const tmpResult22 = tmp(tmp2[10]);
      navigation = tmpResult22.useNavigation();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor(action) {
            const obj = snapX(isOpenTarget[11]);
            const obj2 = { action };
            obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj2);
          }
        }
        cResult[1] = J;
        tmp16 = J;
      } else {
        class J {
          constructor(action) {
            const obj = snapX(isOpenTarget[11]);
            const obj2 = { action };
            obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj2);
          }
        }
      }
      J = tmp16;
      const tmpResult23 = tmp(tmp2[9]);
      class Ee {
        constructor() {
          const tmp = 0 === gestureState.get().panelX && sharedValue.get() >= c10;
          return tmp;
        }
      }
      let obj3 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue1 };
      Ee.__closure = obj3;
      Ee.__workletHash = 17562466882099;
      Ee.__initData = derivedValue;
      derivedValue = tmpResult23.useDerivedValue(Ee);
      const tmpResult24 = tmp(tmp2[9]);
      class Oe {
        constructor() {
          return derivedValue.get();
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
                set3 = snapX.set;
                const obj5 = timing;
                set3(obj5.withTiming(c13, HomeDrawerAnimations.HOME_DRAWER_SNAP_TIMING, "animate-always"));
                const obj6 = ReanimatedRexport;
                const runOnJSResult = obj6.runOnJS(HapticUtils.triggerHapticFeedback);
                runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              } else if (sharedValue3.get()) {
                set = sharedValue5.set;
                const obj2 = timing;
                const result1 = set(obj2.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
                const result2 = sharedValue7.set(false);
                const result3 = sharedValue6.set(false);
                set2 = snapX.set;
                const obj3 = timing;
                set2(obj3.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING, "animate-always"));
                const obj4 = ReanimatedRexport;
                const runOnJSResult1 = obj4.runOnJS(HapticUtils.triggerHapticFeedback);
                runOnJSResult1(HapticUtils.HapticFeedbackTypes.SOFT);
              }
              return tmp28;
            }
          }
        }
      }
      let obj4 = {
        gestureState,
        didSnapThisGesture: sharedValue3,
        snapX,
        withTiming: tmp(tmp2[12]).withTiming,
        SNAP_OPEN_DISTANCE: sharedValue4,
        HOME_DRAWER_SNAP_TIMING: tmp(tmp2[13]).HOME_DRAWER_SNAP_TIMING,
        runOnJS: tmp(tmp2[9]).runOnJS,
        triggerHapticFeedback: tmp(tmp2[14]).triggerHapticFeedback,
        HapticFeedbackTypes: tmp(tmp2[14]).HapticFeedbackTypes,
        flingThrow: sharedValue5,
        HOME_DRAWER_UNSNAP_TIMING: tmp(tmp2[13]).HOME_DRAWER_UNSNAP_TIMING,
        hasThrown: sharedValue7,
        snappedByDrag: sharedValue6,
      };
      pe.__closure = obj4;
      pe.__workletHash = 8865230832451;
      pe.__initData = __initData2;
      const animatedReaction = tmpResult24.useAnimatedReaction(Oe, pe);
      const tmp19 = snapX(tmp2[15])();
      __initData = tmp19;
      const tmp20 = snapX(tmp2[16])();
      __initData2 = tmp20;
      const isChatBesideChannelList = snapX(tmp2[17])().isChatBesideChannelList;
      snapX(tmp2[18])();
      if (enableHome) {
        class J {
          constructor(action) {
            const obj = snapX(isOpenTarget[11]);
            const obj2 = { action };
            obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj2);
          }
        }
      }
      if (enableHome) {
        class J {
          constructor(action) {
            const obj = snapX(isOpenTarget[11]);
            const obj2 = { action };
            obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj2);
          }
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor(action) {
            const obj = snapX(isOpenTarget[11]);
            const obj2 = { action };
            obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj2);
          }
        }
        cResult[2] = tmp23;
      } else {
        class J {
          constructor(action) {
            const obj = snapX(isOpenTarget[11]);
            const obj2 = { action };
            obj.track(noteInteraction.SERVER_DRAWER_INTERACT, obj2);
          }
        }
      }
      [r10152, closure_23] = gestureState(updateMaxX.useState(tmp23), 2);
      gestureState(updateMaxX.useState(tmp23), 2);
      const obj16 = updateMaxX;
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
        tmp26 = items;
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
      const tmpResult25 = tmp(tmp2[10]);
      let tmp28 = enableHome && tmpResult25.useIsFocused();
      const tmpResult26 = tmp(tmp2[9]);
      const sharedValue8 = tmpResult26.useSharedValue(0);
      const useHomeDrawerPeekHint = tmp(tmp2[20]).useHomeDrawerPeekHint;
      tmp(tmp2[20]);
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
      const homeDrawerPeekHint = useHomeDrawerPeekHint(enableHome, sharedValue8);
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
        let tmp36;
        let coerceGuildsRoute = tmp(tmp2[21]).coerceGuildsRoute;
        tmp(tmp2[21]);
        if (tmp33 != null) {
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
                  let state;
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
                  let closure_0 = tmp2;
                  closure_23(() => {
                    /* body not rendered: F153520 */
                  });
                };
                tmp6 = closure_23((isOnMain) => {
                  let tmp = isOnMain;
                  if (isOnMain.isOnMain !== closure_0) {
                    tmp = { isOnMain: tmp2 };
                    const obj = { isOnMain: tmp2 };
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
          if (tmp37 != null) {
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
                    let state;
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
                    let closure_0 = tmp2;
                    closure_23(() => {
                      /* body not rendered: F153520 */
                    });
                  };
                  tmp6 = closure_23((isOnMain) => {
                    let tmp = isOnMain;
                    if (isOnMain.isOnMain !== closure_0) {
                      tmp = { isOnMain: tmp2 };
                      const obj = { isOnMain: tmp2 };
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
            if (tmp33 != null) {
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
                      let state;
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
                      let closure_0 = tmp2;
                      closure_23(() => {
                        /* body not rendered: F153520 */
                      });
                    };
                    tmp6 = closure_23((isOnMain) => {
                      let tmp = isOnMain;
                      if (isOnMain.isOnMain !== closure_0) {
                        tmp = { isOnMain: tmp2 };
                        const obj = { isOnMain: tmp2 };
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
            if (tmp38 == null) {
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
                      let state;
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
                      let closure_0 = tmp2;
                      closure_23(() => {
                        /* body not rendered: F153520 */
                      });
                    };
                    tmp6 = closure_23((isOnMain) => {
                      let tmp = isOnMain;
                      if (isOnMain.isOnMain !== closure_0) {
                        tmp = { isOnMain: tmp2 };
                        const obj = { isOnMain: tmp2 };
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
            tmp36 = tmp37[tmp38];
          }
        }
        let coerceGuildsRouteResult = coerceGuildsRoute(tmp36);
        cResult[5] = navigation;
        cResult[6] = coerceGuildsRouteResult;
        tmp32 = coerceGuildsRouteResult;
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
      let tmp40 = enableHome;
      if (tmp40) {
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
                  let state;
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
                  let closure_0 = tmp2;
                  closure_23(() => {
                    /* body not rendered: F153520 */
                  });
                };
                tmp6 = closure_23((isOnMain) => {
                  let tmp = isOnMain;
                  if (isOnMain.isOnMain !== closure_0) {
                    tmp = { isOnMain: tmp2 };
                    const obj = { isOnMain: tmp2 };
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
          if (tmp42 != null) {
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
                    let state;
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
                    let closure_0 = tmp2;
                    closure_23(() => {
                      /* body not rendered: F153520 */
                    });
                  };
                  tmp6 = closure_23((isOnMain) => {
                    let tmp = isOnMain;
                    if (isOnMain.isOnMain !== closure_0) {
                      tmp = { isOnMain: tmp2 };
                      const obj = { isOnMain: tmp2 };
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
                  let state;
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
                  let closure_0 = tmp2;
                  closure_23(() => {
                    /* body not rendered: F153520 */
                  });
                };
                tmp6 = closure_23((isOnMain) => {
                  let tmp = isOnMain;
                  if (isOnMain.isOnMain !== closure_0) {
                    tmp = { isOnMain: tmp2 };
                    const obj = { isOnMain: tmp2 };
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
        tmp40 = tmp41;
      }
      let c25 = tmp40;
      if (cResult[7] === tmp40) {
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
      if (tmp40) {
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
                let state;
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
                let closure_0 = tmp2;
                closure_23(() => {
                  /* body not rendered: F153520 */
                });
              };
              tmp6 = closure_23((isOnMain) => {
                let tmp = isOnMain;
                if (isOnMain.isOnMain !== closure_0) {
                  tmp = { isOnMain: tmp2 };
                  const obj = { isOnMain: tmp2 };
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
      cResult[7] = tmp40;
      cResult[8] = tmp20;
      cResult[9] = tmp19;
      cResult[10] = num8;
    }
  : () => {
      let enableHome;
      let landOnHome;
      let snapX;
      let updateMaxX;
      let tmp = landOnHome;
      let tmp2 = snapX;
      const MobileHomeDrawerExperiment = landOnHome(snapX[8]).MobileHomeDrawerExperiment;
      const config = MobileHomeDrawerExperiment.useConfig({ location: "gesture" });
      ({ enableHome, landOnHome } = config);
      const enablePeekHint = config.enablePeekHint;
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
      let obj = landOnHome(snapX[9]);
      const sharedValue = obj.useSharedValue(0);
      let obj2 = landOnHome(snapX[9]);
      const sharedValue1 = obj2.useSharedValue(0);
      let obj3 = landOnHome(snapX[9]);
      const sharedValue2 = obj3.useSharedValue(false);
      let obj4 = landOnHome(snapX[9]);
      const sharedValue3 = obj4.useSharedValue(false);
      let obj5 = landOnHome(snapX[9]);
      const sharedValue4 = obj5.useSharedValue(false);
      let obj6 = landOnHome(snapX[9]);
      const sharedValue5 = obj6.useSharedValue(0);
      let obj7 = landOnHome(snapX[9]);
      const sharedValue6 = obj7.useSharedValue(false);
      const obj8 = landOnHome(snapX[9]);
      const sharedValue7 = obj8.useSharedValue(false);
      const obj9 = landOnHome(snapX[10]);
      navigation = obj9.useNavigation();
      const trackServerDrawerInteract = gestureState.useCallback((action) => {
        const obj = panelX(snapX[11]);
        const obj2 = { action };
        obj.track(isPanelTouchActive.SERVER_DRAWER_INTERACT, obj2);
      }, []);
      const obj12 = landOnHome(snapX[9]);
      class D {
        constructor() {
          const tmp = 0 === gestureState.get().panelX && sharedValue.get() >= c10;
          return tmp;
        }
      }
      const obj10 = { gestureState, dragOffsetX: sharedValue, INITIAL_OPEN_WIDTH: sharedValue };
      D.__closure = obj10;
      D.__workletHash = 11980682848385;
      D.__initData = __initData3;
      const derivedValue = obj12.useDerivedValue(D);
      const obj14 = landOnHome(snapX[9]);
      class A {
        constructor() {
          return derivedValue.get();
        }
      }
      A.__closure = { isSnappedOpen: derivedValue };
      A.__workletHash = 10001685195797;
      A.__initData = __initData4;
      class N {
        constructor(arg0, arg1) {
          if (gestureState.get().active) {
            if (null !== arg1) {
              if (arg0 !== arg1) {
                if (arg0) {
                  const result = sharedValue3.set(true);
                  set3 = snapX.set;
                  const obj5 = timing;
                  set3(obj5.withTiming(c13, HomeDrawerAnimations.HOME_DRAWER_SNAP_TIMING, "animate-always"));
                  const obj6 = ReanimatedRexport;
                  const runOnJSResult = obj6.runOnJS(HapticUtils.triggerHapticFeedback);
                  runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
                } else if (sharedValue3.get()) {
                  set = sharedValue5.set;
                  const obj2 = timing;
                  const result1 = set(obj2.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING));
                  const result2 = sharedValue7.set(false);
                  const result3 = sharedValue6.set(false);
                  set2 = snapX.set;
                  const obj3 = timing;
                  set2(obj3.withTiming(0, HomeDrawerAnimations.HOME_DRAWER_UNSNAP_TIMING, "animate-always"));
                  const obj4 = ReanimatedRexport;
                  const runOnJSResult1 = obj4.runOnJS(HapticUtils.triggerHapticFeedback);
                  runOnJSResult1(HapticUtils.HapticFeedbackTypes.SOFT);
                }
                return tmp28;
              }
            }
          }
        }
      }
      N.__closure = {
        gestureState,
        didSnapThisGesture: sharedValue3,
        snapX,
        withTiming: landOnHome(snapX[12]).withTiming,
        SNAP_OPEN_DISTANCE: sharedValue3,
        HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SNAP_TIMING,
        runOnJS: landOnHome(snapX[9]).runOnJS,
        triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback,
        HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes,
        flingThrow: sharedValue5,
        HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_UNSNAP_TIMING,
        hasThrown: sharedValue7,
        snappedByDrag: sharedValue6,
      };
      N.__workletHash = 5850052611633;
      N.__initData = __initData5;
      ({
        gestureState,
        didSnapThisGesture: sharedValue3,
        snapX,
        withTiming: landOnHome(snapX[12]).withTiming,
        SNAP_OPEN_DISTANCE: sharedValue3,
        HOME_DRAWER_SNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SNAP_TIMING,
        runOnJS: landOnHome(snapX[9]).runOnJS,
        triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback,
        HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes,
        flingThrow: sharedValue5,
        HOME_DRAWER_UNSNAP_TIMING: landOnHome(snapX[13]).HOME_DRAWER_UNSNAP_TIMING,
        hasThrown: sharedValue7,
        snappedByDrag: sharedValue6,
      });
      const animatedReaction = obj14.useAnimatedReaction(A, N);
      const tmp17 = panelX(snapX[15])();
      let closure_21 = tmp17;
      const tmp18 = panelX(snapX[16])();
      closure_22 = tmp18;
      const isChatBesideChannelList = panelX(snapX[17])().isChatBesideChannelList;
      const tmp19 = panelX(snapX[18])();
      const tmp15 = sharedValue3;
      const tmp20 = tmp19 === noteInteraction.GESTURE_FULL || tmp19 === noteInteraction.GESTURE_EDGE;
      if (enableHome) {
        enableHome = !tmp20;
      }
      if (enableHome) {
        enableHome = !isChatBesideChannelList;
      }
      const tmp22 = isOpenTarget(gestureState.useState({ isOnMain: true }), 2);
      const first = tmp22[0];
      closure_25 = tmp22[1];
      const effect = obj11.useEffect(() => {
        let obj = landOnHome(snapX[19]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          let state;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
          }
          let tmp2 = null != state;
          if (tmp2) {
            const tmp3 = state.routes[state.index];
            let name;
            if (tmp3 != null) {
              name = tmp3.name;
            }
            tmp2 = "main" === name;
          }
          let closure_0 = tmp2;
          function handleRootStateChange() {
            let state;
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
            let closure_0 = tmp2;
            closure_25((isOnMain) => {
              let tmp = isOnMain;
              if (isOnMain.isOnMain !== closure_0) {
                tmp = { isOnMain: tmp2 };
                const obj = { isOnMain: tmp2 };
              }
              return tmp;
            });
          }
          closure_25((isOnMain) => {
            let tmp = isOnMain;
            if (isOnMain.isOnMain !== closure_0) {
              tmp = { isOnMain: tmp2 };
              const obj = { isOnMain: tmp2 };
            }
            return tmp;
          });
          return rootNavigationRef.addListener("state", handleRootStateChange);
        }
      }, []);
      const tmpResult = tmp(tmp2[10]);
      const tmp25 = enableHome && tmpResult.useIsFocused();
      closure_26 = tmp25;
      const tmpResult10 = tmp(tmp2[9]);
      const sharedValue8 = tmpResult10.useSharedValue(0);
      let tmp28 = enableHome;
      const useHomeDrawerPeekHint = tmp(tmp2[20]).useHomeDrawerPeekHint;
      tmp(tmp2[20]);
      const tmp21 = isOpenTarget;
      if (enableHome) {
        tmp28 = enablePeekHint;
      }
      const homeDrawerPeekHint = useHomeDrawerPeekHint(tmp28, sharedValue8);
      let state = navigation.getState();
      let tmp32;
      let coerceGuildsRoute = tmp(tmp2[21]).coerceGuildsRoute;
      tmp(tmp2[21]);
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
          tmp32 = routes[num];
        }
      }
      let coerceGuildsRouteResult = coerceGuildsRoute(tmp32);
      let tmp34 = enableHome;
      if (tmp34) {
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
        tmp34 = drawerOpen;
      }
      drawerOpen = tmp34;
      let num2 = 0;
      if (tmp34) {
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
          const obj = NavigationRouteUtils;
          obj.setHomeDrawerState(false);
        }
      }, items1);
      const items2 = [navigation, setPanelX, enableHome];
      const effect3 = obj11.useEffect(() => {
        function handleStateChange(data) {
          const state = data.data.state;
          let tmp2;
          const coerceGuildsRoute = landOnHome(snapX[21]).coerceGuildsRoute;
          landOnHome(snapX[21]);
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
              tmp2 = routes[num];
            }
          }
          const coerceGuildsRouteResult = coerceGuildsRoute(tmp2);
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
        }
        navigation.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
          const state = HomeDrawerSubtitleStore.getState();
          state.stopTimer();
        };
      }, items2);
      const ref = obj11.useRef(false);
      const items3 = [enableHome, tmp34, num2, panelX, isOpenTarget];
      const layoutEffect = obj11.useLayoutEffect(() => {
        const tmp = enableHome && !ref.current;
        if (tmp) {
          const result = panelX.set(num2);
          const result1 = isOpenTarget.set(true === drawerOpen);
          if (drawerOpen) {
            const state = HomeDrawerSubtitleStore.getState();
            state.startTimer();
          }
          ref.current = true;
        }
      }, items3);
      const tmpResult13 = tmp(tmp2[9]);
      class Fe {
        constructor() {
          const value = panelX.get();
          const sum = value + snapX.get();
          return sum + sharedValue8.get();
        }
      }
      Fe.__closure = { panelX, snapX, peekX: sharedValue8 };
      Fe.__workletHash = 9690292606643;
      Fe.__initData = __initData6;
      const derivedValue1 = tmpResult13.useDerivedValue(Fe);
      const tmpResult14 = tmp(tmp2[9]);
      class Le {
        constructor() {
          let items;
          const obj = { transform: items };
          items = [{ translateX: derivedValue1.get() }];
          ({ translateX: derivedValue1.get() });
          return obj;
        }
      }
      Le.__closure = { panelTranslateX: derivedValue1 };
      Le.__workletHash = 5267878012006;
      Le.__initData = __initData7;
      const animatedStyle = tmpResult14.useAnimatedStyle(Le);
      const tmpResult15 = tmp(tmp2[9]);
      class Ce {
        constructor() {
          let value = isOpenTarget.get();
          if (!value) {
            const value2 = isPanelTouchActive.get();
            value = !value2 && derivedValue1.get() <= 0;
            const tmp4 = !value2 && derivedValue1.get() <= 0;
          }
          return value;
        }
      }
      Ce.__closure = { isOpenTarget, isPanelTouchActive, panelTranslateX: derivedValue1 };
      Ce.__workletHash = 16461301551041;
      Ce.__initData = __initData8;
      function be(arg0) {
        const value = arg0 && sharedValue4.get();
        if (value) {
          const result = sharedValue4.set(false);
        }
      }
      be.__closure = { isPullActive: sharedValue4 };
      be.__workletHash = 8757763202417;
      be.__initData = __initData9;
      const animatedReaction1 = tmpResult15.useAnimatedReaction(Ce, be);
      function xe() {
        const value = derivedValue1.get();
        let num = 0;
        if (sharedValue4.get()) {
          num = 0;
          if (value > 0) {
            num = 0;
            if (value < c17) {
              let result;
              if (value < c14) {
                result = value / c14;
              } else {
                result = 1 - (value - c14) / c13;
              }
              num = result;
            }
          }
        }
        return num;
      }
      const obj15 = {
        panelTranslateX: derivedValue1,
        isPullActive: sharedValue4,
        HOME_DRAWER_PULL_SETTLE_WIDTH: sharedValue7,
        MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue4,
        SNAP_OPEN_DISTANCE: tmp15,
      };
      xe.__closure = obj15;
      xe.__workletHash = 3876942972214;
      xe.__initData = __initData10;
      const tmpResult16 = tmp(tmp2[9]);
      const derivedValue2 = tmpResult16.useDerivedValue(xe);
      const tmpResult17 = tmp(tmp2[9]);
      class Ue {
        constructor() {
          const accessibilityPreferencesSharedValue =
            reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
          let num = 0;
          if (!accessibilityPreferencesSharedValue.get().reduceMotion) {
            const _Math = Math;
            const result = derivedValue2.get() * c15;
            num = max(result, sharedValue5.get() * c16);
          }
          return num;
        }
      }
      Ue.__closure = {
        accessibilityPreferencesSharedValue: tmp(tmp2[22]).accessibilityPreferencesSharedValue,
        pullFraction: derivedValue2,
        HOME_DRAWER_PULL_DISTANCE: sharedValue5,
        flingThrow: sharedValue5,
        HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6,
      };
      Ue.__workletHash = 1305582168128;
      Ue.__initData = __initData11;
      ({
        accessibilityPreferencesSharedValue: tmp(tmp2[22]).accessibilityPreferencesSharedValue,
        pullFraction: derivedValue2,
        HOME_DRAWER_PULL_DISTANCE: sharedValue5,
        flingThrow: sharedValue5,
        HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6,
      });
      const derivedValue3 = tmpResult17.useDerivedValue(Ue);
      const tmpResult18 = tmp(tmp2[9]);
      class Ve {
        constructor() {
          let items;
          const obj = { transform: items };
          items = [{ translateX: derivedValue3.get() }];
          ({ translateX: derivedValue3.get() });
          return obj;
        }
      }
      Ve.__closure = { guildsBarPullX: derivedValue3 };
      Ve.__workletHash = 3913124214690;
      Ve.__initData = __initData12;
      const guildsBarDrawerStyle = tmpResult18.useAnimatedStyle(Ve);
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
        tmp25,
        maxX,
        isPanelTouchActive,
        noteInteraction,
        trackServerDrawerInteract,
        first,
      ];
      const memo = obj11.useMemo(() => {
        let beginDrag;
        let fireThrow;
        let settleDrawer;
        let shouldOpenFromPosition;
        function visualPanelX() {
          const value = settleDrawer.get();
          let num = 0;
          if (derivedValue.get()) {
            num = sharedValue3;
          }
          return value + num;
        }
        let obj = { panelX: settleDrawer, isSnappedOpen: derivedValue, SNAP_OPEN_DISTANCE: sharedValue3 };
        visualPanelX.__closure = obj;
        visualPanelX.__workletHash = 1162980284148;
        visualPanelX.__initData = __initData;
        settleDrawer = function settleDrawer(arg0) {
          const result = beginDrag.set(arg0);
          let num = 0;
          set = settleDrawer.set;
          const withTiming = landOnHome(snapX[12]).withTiming;
          landOnHome(snapX[12]);
          if (arg0) {
            num = maxX;
          }
          const result1 = set(withTiming(num, landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
          set2 = fireThrow.set;
          const tmp3Result = landOnHome(snapX[12]);
          set2(tmp3Result.withTiming(0, landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
          const tmp3Result2 = landOnHome(snapX[9]);
          tmp3Result2.runOnJS(landOnHome(snapX[21]).setHomeDrawerState)(arg0);
        };
        let obj2 = {
          isOpenTarget: beginDrag,
          panelX: settleDrawer,
          withTiming: landOnHome(snapX[12]).withTiming,
          maxX,
          HOME_DRAWER_SETTLE_TIMING: landOnHome(snapX[13]).HOME_DRAWER_SETTLE_TIMING,
          snapX: fireThrow,
          runOnJS: landOnHome(snapX[9]).runOnJS,
          setHomeDrawerState: landOnHome(snapX[21]).setHomeDrawerState,
        };
        let tmp3 = beginDrag;
        settleDrawer.__closure = obj2;
        settleDrawer.__workletHash = 2188020220373;
        settleDrawer.__initData = __initData2;
        fireThrow = function fireThrow() {
          const value = sharedValue7.get();
          const value2 = !value && sharedValue4.get();
          if (value2) {
            const result = sharedValue7.set(true);
            set = closure_1_15.set;
            const obj2 = landOnHome(snapX[9]);
            const result1 = set(obj2.clamp((derivedValue2.get() * sharedValue5) / sharedValue6, 0, 1));
            set2 = closure_1_15.set;
            const withSequence = landOnHome(snapX[9]).withSequence;
            landOnHome(snapX[9]);
            const obj3 = landOnHome(snapX[12]);
            const withTimingResult = obj3.withTiming(1, landOnHome(snapX[13]).HOME_DRAWER_FLING_THROW_TIMING);
            const obj4 = landOnHome(snapX[12]);
            set2(
              withSequence(withTimingResult, obj4.withTiming(0, landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING)),
            );
          }
        };
        let obj3 = {
          hasThrown: sharedValue7,
          isPullActive: sharedValue4,
          flingThrow: sharedValue5,
          clamp: landOnHome(snapX[9]).clamp,
          pullFraction: derivedValue2,
          HOME_DRAWER_PULL_DISTANCE: sharedValue5,
          HOME_DRAWER_FLING_THROW_DISTANCE: sharedValue6,
          withSequence: landOnHome(snapX[9]).withSequence,
          withTiming: landOnHome(snapX[12]).withTiming,
          HOME_DRAWER_FLING_THROW_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_THROW_TIMING,
          HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING,
        };
        fireThrow.__closure = obj3;
        fireThrow.__workletHash = 6364057094792;
        fireThrow.__initData = __initData3;
        beginDrag = function beginDrag(initialX) {
          const value = settleDrawer.get();
          const sum = value + fireThrow.get();
          const result = sharedValue1.set(initialX - shouldOpenFromPosition.get().initialX);
          const result1 = sharedValue4.set(sum < 16);
          const result2 = settleDrawer.set(sum);
          const result3 = fireThrow.set(0);
          const obj = { active: true, initialX, panelX: sum };
          set = shouldOpenFromPosition.set;
          const merged = Object.assign(shouldOpenFromPosition.get());
          const result4 = set(obj);
        };
        let obj4 = {
          panelX: settleDrawer,
          snapX: fireThrow,
          activationOffsetX: sharedValue1,
          gestureState: shouldOpenFromPosition,
          isPullActive: sharedValue4,
          PULL_ACTIVE_MAX_START: 16,
        };
        let tmp10 = shouldOpenFromPosition;
        beginDrag.__closure = obj4;
        beginDrag.__workletHash = 11726804091522;
        beginDrag.__initData = __initData4;
        shouldOpenFromPosition = function shouldOpenFromPosition() {
          if (typeof visualPanelX === "function") {
            const value = panelX.get();
            num2 = 0;
            if (derivedValue.get()) {
              num2 = c13;
            }
            const sum = value + num2;
            let tmp5 = 0 !== sum;
            if (tmp5) {
              let tmp8 = sum > c11 * maxX;
              if (!tmp8) {
                tmp8 = sum >= c10 && sharedValue.get() > 0;
                const tmp10 = sum >= c10 && sharedValue.get() > 0;
              }
              tmp5 = tmp8;
            }
            return tmp5;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
        let obj5 = {
          visualPanelX,
          FRACTION_OF_WIDTH_FOR_DRAWER_TO_REMAIN_OPEN: sharedValue1,
          maxX,
          INITIAL_OPEN_WIDTH: sharedValue,
          dragOffsetX: sharedValue,
        };
        shouldOpenFromPosition.__closure = obj5;
        shouldOpenFromPosition.__workletHash = 12906331917783;
        shouldOpenFromPosition.__initData = __initData5;
        const Gesture = landOnHome(snapX[23]).Gesture;
        let isOnMain = closure_26;
        const enabled = Gesture.Pan().enabled;
        Gesture.Pan();
        if (closure_26) {
          isOnMain = first.isOnMain;
        }
        const enabledResult = enabled(isOnMain);
        const manualActivationResult = enabledResult.manualActivation(true);
        let result = manualActivationResult.shouldCancelWhenOutside(false);
        const fn = function _(absoluteX) {
          let value;
          const result = isPanelTouchActive.set(true);
          const result1 = sharedValue.set(0);
          const result2 = sharedValue1.set(0);
          const result3 = sharedValue2.set(false);
          const result4 = sharedValue3.set(false);
          const result5 = sharedValue6.set(false);
          const result6 = sharedValue7.set(false);
          set = sharedValue5.set;
          const obj = landOnHome(snapX[12]);
          const result7 = set(obj.withTiming(0, landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING));
          const obj2 = {
            active: false,
            initialX: absoluteX.absoluteX,
            initialY: absoluteX.absoluteY,
            panelX: value + fireThrow.get(),
          };
          set2 = shouldOpenFromPosition.set;
          value = settleDrawer.get();
          set2(obj2);
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
          withTiming: landOnHome(snapX[12]).withTiming,
          HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING,
          gestureState: tmp10,
          panelX: settleDrawer,
          snapX: fireThrow,
        };
        fn.__workletHash = 1774401216950;
        fn.__initData = __initData10;
        ({
          isPanelTouchActive,
          dragOffsetX: sharedValue,
          activationOffsetX: sharedValue1,
          didSettle: sharedValue2,
          didSnapThisGesture: sharedValue3,
          snappedByDrag: sharedValue6,
          hasThrown: sharedValue7,
          flingThrow: sharedValue5,
          withTiming: landOnHome(snapX[12]).withTiming,
          HOME_DRAWER_FLING_RETURN_TIMING: landOnHome(snapX[13]).HOME_DRAWER_FLING_RETURN_TIMING,
          gestureState: tmp10,
          panelX: settleDrawer,
          snapX: fireThrow,
        });
        const fn2 = function s(arg0, activate) {
          if (!gestureState.get().active) {
            const absoluteX = arg0.changedTouches[0].absoluteX;
            const _Math = Math;
            const absoluteY = arg0.changedTouches[0].absoluteY;
            const absolute = Math.abs(absoluteX - gestureState.get().initialX);
            const _Math2 = Math;
            const absolute1 = Math.abs(absoluteY - gestureState.get().initialY);
            const value = isOpenTarget.get();
            if (absolute1 <= absolute) {
              if (value) {
                if (absolute >= 10) {
                  if (typeof beginDrag === "function") {
                    const value2 = panelX.get();
                    const sum = value2 + snapX.get();
                    const result = sharedValue1.set(absoluteX - gestureState.get().initialX);
                    const result1 = sharedValue4.set(sum < 16);
                    const result2 = panelX.set(sum);
                    const result3 = snapX.set(0);
                    const obj2 = { active: true, initialX: absoluteX, panelX: sum };
                    set = gestureState.set;
                    const merged = Object.assign(gestureState.get());
                    const result4 = set(obj2);
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
        fn2.__closure = { gestureState: tmp10, isOpenTarget: tmp3, ACTIVATION_MIN_DISTANCE: 10, beginDrag };
        fn2.__workletHash = 9648053766823;
        fn2.__initData = __initData9;
        const fn3 = function n(absoluteX) {
          if (gestureState.get().active) {
            const diff = absoluteX.absoluteX - gestureState.get().initialX;
            const result = sharedValue.set(diff);
            const value = panelX.get();
            const sum = value + snapX.get();
            if (0 === gestureState.get().panelX) {
              if (diff >= 0) {
                let result1;
                set = panelX.set;
                if (diff < c10) {
                  result1 = diff / 3;
                } else {
                  result1 = diff - c13;
                }
                const result2 = set(result1);
              }
              let tmp14 = sum < c14;
              if (tmp14) {
                const value2 = panelX.get();
                tmp14 = value2 + snapX.get() >= tmp13;
              }
              if (tmp14) {
                if (absoluteX.velocityX <= c12) {
                  const result3 = sharedValue6.set(true);
                } else if (!sharedValue6.get()) {
                  fireThrow();
                }
              }
            }
            const _Math = Math;
            const result4 = panelX.set(Math.max(diff + gestureState.get().panelX, 0));
          }
        };
        const obj7 = {
          gestureState: tmp10,
          dragOffsetX: sharedValue,
          panelX: settleDrawer,
          snapX: fireThrow,
          INITIAL_OPEN_WIDTH: sharedValue,
          DRAWER_RESISTANCE: 3,
          SNAP_OPEN_DISTANCE: sharedValue3,
          MAX_HOME_DRAWER_ANIMATING_WIDTH: sharedValue4,
          FLING_THROW_MIN_VELOCITY: sharedValue2,
          snappedByDrag: sharedValue6,
          fireThrow,
        };
        fn3.__closure = obj7;
        fn3.__workletHash = 4851858139801;
        fn3.__initData = __initData8;
        const onBeginResult = maxPointersResult.onBegin(fn);
        const fn4 = function t(velocityX) {
          let flag;
          const value = sharedValue1.get();
          const sum = value + sharedValue.get();
          let tmp3 = velocityX.velocityX > 50;
          const value3 = sharedValue6.get();
          if (tmp3) {
            tmp3 = sum > 40;
          }
          const tmp5 = tmp3 && !value3;
          if (tmp5) {
            fireThrow();
          }
          if (tmp3) {
            flag = true;
            if (sum < c10) {
              const obj3 = ReanimatedRexport;
              const runOnJSResult = obj3.runOnJS(HapticUtils.triggerHapticFeedback);
              runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
              flag = true;
            }
          } else {
            if (velocityX.velocityX < -50) {
              if (sum < -40) {
                const obj2 = ReanimatedRexport;
                const runOnJSResult1 = obj2.runOnJS(HapticUtils.triggerHapticFeedback);
                runOnJSResult1(HapticUtils.HapticFeedbackTypes.SOFT);
                flag = false;
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
                    sum1 >= c10 && sharedValue.get() > 0;
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
              const obj4 = ReanimatedRexport;
              obj4.runOnJS(callback)(constants.OPEN);
            }
          }
          if (!tmp38) {
            const obj5 = ReanimatedRexport;
            obj5.runOnJS(callback)(constants.PEEK);
          }
        };
        const onTouchesMoveResult = onBeginResult.onTouchesMove(fn2);
        const onChangeResult = onTouchesMoveResult.onChange(fn3);
        fn4.__closure = {
          activationOffsetX: sharedValue1,
          dragOffsetX: sharedValue,
          FLING_MIN_VELOCITY: 50,
          FLING_MIN_DISTANCE: 40,
          snappedByDrag: sharedValue6,
          fireThrow,
          INITIAL_OPEN_WIDTH: sharedValue,
          runOnJS: landOnHome(snapX[9]).runOnJS,
          triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback,
          HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes,
          shouldOpenFromPosition,
          settleDrawer,
          didSettle: sharedValue2,
          gestureState: tmp10,
          trackServerDrawerInteract,
          ServerDrawerInteractAction: navigation,
        };
        fn4.__workletHash = 11192435095098;
        fn4.__initData = __initData7;
        ({
          activationOffsetX: sharedValue1,
          dragOffsetX: sharedValue,
          FLING_MIN_VELOCITY: 50,
          FLING_MIN_DISTANCE: 40,
          snappedByDrag: sharedValue6,
          fireThrow,
          INITIAL_OPEN_WIDTH: sharedValue,
          runOnJS: landOnHome(snapX[9]).runOnJS,
          triggerHapticFeedback: landOnHome(snapX[14]).triggerHapticFeedback,
          HapticFeedbackTypes: landOnHome(snapX[14]).HapticFeedbackTypes,
          shouldOpenFromPosition,
          settleDrawer,
          didSettle: sharedValue2,
          gestureState: tmp10,
          trackServerDrawerInteract,
          ServerDrawerInteractAction: navigation,
        });
        const fn5 = function e() {
          const active = gestureState.get().active && !sharedValue2.get();
          if (active) {
            if (typeof shouldOpenFromPosition === "function") {
              if (typeof visualPanelX === "function") {
                const value = panelX.get();
                num2 = 0;
                if (derivedValue.get()) {
                  num2 = c13;
                }
                const sum = value + num2;
                let tmp9 = 0 !== sum;
                if (tmp9) {
                  let tmp12 = sum > c11 * maxX;
                  if (!tmp12) {
                    tmp12 = sum >= c10 && sharedValue.get() > 0;
                    const tmp14 = sum >= c10 && sharedValue.get() > 0;
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
          const obj2 = ReanimatedRexport;
          obj2.runOnJS(noteInteraction)();
          const result1 = gestureState.set({ active: false, initialX: 0, initialY: 0, panelX: 0 });
          const result2 = sharedValue.set(0);
          const result3 = sharedValue1.set(0);
        };
        const onEndResult = onChangeResult.onEnd(fn4);
        fn5.__closure = {
          gestureState: tmp10,
          didSettle: sharedValue2,
          settleDrawer,
          shouldOpenFromPosition,
          isPanelTouchActive,
          runOnJS: landOnHome(snapX[9]).runOnJS,
          noteInteraction,
          dragOffsetX: sharedValue,
          activationOffsetX: sharedValue1,
        };
        fn5.__workletHash = 8872809464986;
        fn5.__initData = __initData6;
        ({
          gestureState: tmp10,
          didSettle: sharedValue2,
          settleDrawer,
          shouldOpenFromPosition,
          isPanelTouchActive,
          runOnJS: landOnHome(snapX[9]).runOnJS,
          noteInteraction,
          dragOffsetX: sharedValue,
          activationOffsetX: sharedValue1,
        });
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
        const obj = { gesture: memo };
        const merged = Object.assign(first1);
        return obj;
      }, items5);
      const items6 = [memo1, enableHome, landOnHome];
      const obj17 = {
        gesture: memo,
        panelStyles: animatedStyle,
        homeDrawerContext: gestureState.useMemo(() => {
          const obj = { homeDrawerState: memo1, enableHome, landOnHome: tmp };
          return obj;
        }, items6),
      };
      return obj17;
    };
Gesture = LegacyBaseButton.Gesture;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
const context = react.createContext({ homeDrawerState: obj, enableHome: false, landOnHome: false });
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let result3 = size.fileFinishedImporting("modules/home_drawer/native/useHomeDrawerGesture.tsx");

export const INITIAL_OPEN_WIDTH = 144;
export const HOME_DRAWER_FLING_PHYSICS = { mass: 0.4, damping: 100, stiffness: 250 };
export const useHomeGesture = tmp2;
export const HomeDrawerStateContext = context;
export const useHomeDrawerState = () => react.useContext(context).homeDrawerState;
export const useIsHomeDrawerEnabled = () => react.useContext(context).enableHome;
export const useDoesLandOnHomeDrawer = () => react.useContext(context).landOnHome;
