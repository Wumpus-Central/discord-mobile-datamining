// === Module 6630: ? ===

// Module 6630
import _modDef38 from "module_38" /* 38 */;
import cancelAnimation2 from "cancelAnimation" /* 1636 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6628 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 6631 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6644 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const cancelAnimation = cancelAnimation2;

require = fn;
let noop = fn(19);
({ useMemo: closure_4, useCallback: hasOwnProperty, useImperativeHandle: metroRequire, useEffect: closure_7, forwardRef, memo } = noop);
get_ActivityIndicator = fn(17);
({ Platform: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const result = cancelAnimation.addWhitelistedUIProps({ decelerationRate: true });
let closure_12 = { code: "function pnpm_BottomSheetTsx1(){const{topInset,bottomInset,$modal,_animatedContainerHeight}=this.__closure;const verticalInset=topInset+bottomInset;return $modal?_animatedContainerHeight.value-verticalInset:_animatedContainerHeight.value;}" };
let closure_13 = { code: "function pnpm_BottomSheetTsx2(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value[animatedSnapPoints.value.length-1];}" };
let closure_14 = { code: "function pnpm_BottomSheetTsx3(){const{animatedContainerHeight,$modal,detached,bottomInset}=this.__closure;let closedPosition=animatedContainerHeight.value;if($modal||detached){closedPosition=animatedContainerHeight.value+bottomInset;}return closedPosition;}" };
let closure_15 = { code: "function pnpm_BottomSheetTsx4(){const{animatedContainerHeight,animatedHighestSnapPoint}=this.__closure;return animatedContainerHeight.value-animatedHighestSnapPoint.value;}" };
let closure_16 = { code: "function pnpm_BottomSheetTsx5(){const{_providedContainerHeight,animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,handleComponent,animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedSnapPoints,INITIAL_SNAP_POINT}=this.__closure;let isContainerHeightCalculated=false;if(_providedContainerHeight!==null||_providedContainerHeight!==undefined){isContainerHeightCalculated=true;}if(animatedContainerHeight.value!==INITIAL_CONTAINER_HEIGHT){isContainerHeightCalculated=true;}let isHandleHeightCalculated=false;if(handleComponent===null){animatedHandleHeight.value=0;isHandleHeightCalculated=true;}if(animatedHandleHeight.value!==INITIAL_HANDLE_HEIGHT){isHandleHeightCalculated=true;}let isSnapPointsNormalized=false;if(animatedSnapPoints.value[0]!==INITIAL_SNAP_POINT){isSnapPointsNormalized=true;}return isContainerHeightCalculated&&isHandleHeightCalculated&&isSnapPointsNormalized;}" };
let closure_17 = { code: "function pnpm_BottomSheetTsx6(){const{animatedPosition,animatedClosedPosition,SHEET_STATE,animatedContainerHeight,animatedSheetHeight,animatedKeyboardHeightInContainer,keyboardBehavior,KEYBOARD_BEHAVIOR,isInTemporaryPosition}=this.__closure;if(animatedPosition.value>=animatedClosedPosition.value){return SHEET_STATE.CLOSED;}const extendedPosition=animatedContainerHeight.value-animatedSheetHeight.value;if(animatedPosition.value===extendedPosition){return SHEET_STATE.EXTENDED;}const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;const extendedPositionWithKeyboard=Math.max(0,animatedContainerHeight.value-(animatedSheetHeight.value+keyboardHeightInContainer));if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&isInTemporaryPosition.value&&animatedPosition.value===extendedPositionWithKeyboard){return SHEET_STATE.EXTENDED;}if(animatedPosition.value===0){return SHEET_STATE.FILL_PARENT;}if(animatedPosition.value<extendedPosition){return SHEET_STATE.OVER_EXTENDED;}return SHEET_STATE.OPENED;}" };
let closure_18 = { code: "function pnpm_BottomSheetTsx7(){const{enableContentPanningGesture,SCROLLABLE_STATE,animatedScrollableOverrideState,animatedSheetState,SHEET_STATE,animatedKeyboardState,KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE}=this.__closure;if(!enableContentPanningGesture){return SCROLLABLE_STATE.UNLOCKED;}if(animatedScrollableOverrideState.value!==SCROLLABLE_STATE.UNDETERMINED){return animatedScrollableOverrideState.value;}if(animatedSheetState.value===SHEET_STATE.FILL_PARENT){return SCROLLABLE_STATE.UNLOCKED;}if(animatedSheetState.value===SHEET_STATE.EXTENDED){return SCROLLABLE_STATE.UNLOCKED;}if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return SCROLLABLE_STATE.UNLOCKED;}return SCROLLABLE_STATE.LOCKED;}" };
let closure_19 = { code: "function pnpm_BottomSheetTsx8(){const{animatedSnapPoints,animatedContainerHeight,isLayoutCalculated,interpolate,animatedPosition,Extrapolation,android_keyboardInputMode,KEYBOARD_INPUT_MODE,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE,isInTemporaryPosition,animatedCurrentIndex,animatedNextPositionIndex}=this.__closure;const adjustedSnapPoints=animatedSnapPoints.value.slice().reverse();const adjustedSnapPointsIndexes=animatedSnapPoints.value.slice().map(function(_,index){return index;}).reverse();adjustedSnapPoints.push(animatedContainerHeight.value);adjustedSnapPointsIndexes.push(-1);const currentIndex=isLayoutCalculated.value?interpolate(animatedPosition.value,adjustedSnapPoints,adjustedSnapPointsIndexes,Extrapolation.CLAMP):-1;if(android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize&&animatedAnimationSource.value===ANIMATION_SOURCE.KEYBOARD&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&isInTemporaryPosition.value){return Math.max(animatedCurrentIndex.value,currentIndex);}if(animatedAnimationSource.value===ANIMATION_SOURCE.SNAP_POINT_CHANGE&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return animatedNextPositionIndex.value;}return currentIndex;}" };
let closure_20 = { code: "function pnpm_BottomSheetTsx9(){const{cancelAnimation,animatedPosition,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE}=this.__closure;cancelAnimation(animatedPosition);animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;}" };
let closure_21 = { code: "function animateToPositionCompleted_Pnpm_BottomSheetTsx10(isFinished){const{__DEV__,runOnJS,print,animatedCurrentIndex,animatedNextPosition,animatedNextPositionIndex,animatedAnimationSource,ANIMATION_SOURCE,isAnimatedOnMount,isForcedClosing,animatedAnimationState,ANIMATION_STATE,INITIAL_VALUE,animatedContainerHeightDidChange}=this.__closure;if(!isFinished){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPositionCompleted',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedNextPosition:animatedNextPosition.value,animatedNextPositionIndex:animatedNextPositionIndex.value}});}if(animatedAnimationSource.value===ANIMATION_SOURCE.MOUNT){isAnimatedOnMount.value=true;}isForcedClosing.value=false;animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;animatedNextPosition.value=INITIAL_VALUE;animatedNextPositionIndex.value=INITIAL_VALUE;animatedContainerHeightDidChange.value=false;}" };
let closure_22 = { code: "function animateToPosition_Pnpm_BottomSheetTsx11(position,source,velocity=0,configs){const{__DEV__,runOnJS,print,animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,stopAnimation,animatedAnimationSource,animatedKeyboardState,KEYBOARD_STATE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedKeyboardHeightInContainer,animatedNextPositionIndex,animatedSnapPoints,handleOnAnimate,animate,_providedAnimationConfigs,_providedOverrideReduceMotion,animateToPositionCompleted}=this.__closure;if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPosition',params:{currentPosition:animatedPosition.value,nextPosition:position,source:source}});}if(position===animatedPosition.value||position===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&position===animatedNextPosition.value){return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){stopAnimation();}animatedAnimationState.value=ANIMATION_STATE.RUNNING;animatedAnimationSource.value=source;animatedNextPosition.value=position;let offset=0;if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&keyboardBehavior!==KEYBOARD_BEHAVIOR.extend&&position<animatedPosition.value){offset=animatedKeyboardHeightInContainer.value;}animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(position+offset);runOnJS(handleOnAnimate)(animatedNextPositionIndex.value,position,source);animatedPosition.value=animate({point:position,configs:configs||_providedAnimationConfigs,velocity:velocity,overrideReduceMotion:_providedOverrideReduceMotion,onComplete:animateToPositionCompleted});}" };
let closure_23 = { code: "function setToPosition_Pnpm_BottomSheetTsx12(targetPosition){const setToPosition_Pnpm_BottomSheetTsx12=this._recur;const{animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,__DEV__,runOnJS,print,BottomSheet,animatedNextPositionIndex,animatedSnapPoints,stopAnimation,animatedContainerHeightDidChange}=this.__closure;if(targetPosition===animatedPosition.value||targetPosition===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&targetPosition===animatedNextPosition.value){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:setToPosition_Pnpm_BottomSheetTsx12.name,params:{currentPosition:animatedPosition.value,targetPosition:targetPosition}});}animatedNextPosition.value=targetPosition;animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(targetPosition);stopAnimation();animatedPosition.value=targetPosition;animatedContainerHeightDidChange.value=false;}" };
let closure_24 = { code: "function getEvaluatedPosition_Pnpm_BottomSheetTsx13(source){const{animatedCurrentIndex,animatedSnapPoints,animatedKeyboardState,animatedHighestSnapPoint,ANIMATION_SOURCE,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,KEYBOARD_STATE,animatedContentGestureState,State,animatedHandleGestureState,isInTemporaryPosition,keyboardBehavior,KEYBOARD_BEHAVIOR,Platform,android_keyboardInputMode,animatedKeyboardHeightInContainer,animatedPosition,isAnimatedOnMount,_providedIndex,animatedClosedPosition}=this.__closure;const currentIndex=animatedCurrentIndex.value;const snapPoints=animatedSnapPoints.value;const keyboardState=animatedKeyboardState.value;const highestSnapPoint=animatedHighestSnapPoint.value;if(source===ANIMATION_SOURCE.KEYBOARD&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.restore&&keyboardState===KEYBOARD_STATE.HIDDEN&&animatedContentGestureState.value!==State.ACTIVE&&animatedHandleGestureState.value!==State.ACTIVE){isInTemporaryPosition.value=false;const nextPosition=snapPoints[currentIndex];return nextPosition;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.extend&&keyboardState===KEYBOARD_STATE.SHOWN){return highestSnapPoint;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.fillParent&&keyboardState===KEYBOARD_STATE.SHOWN){isInTemporaryPosition.value=true;return 0;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&keyboardState===KEYBOARD_STATE.SHOWN&&!(Platform.OS==='android'&&android_keyboardInputMode==='adjustResize')){isInTemporaryPosition.value=true;const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;return Math.max(0,highestSnapPoint-keyboardHeightInContainer);}if(isInTemporaryPosition.value){return animatedPosition.value;}if(!isAnimatedOnMount.value){return _providedIndex===-1?animatedClosedPosition.value:snapPoints[_providedIndex];}return snapPoints[currentIndex];}" };
let closure_25 = { code: "function evaluatePosition_Pnpm_BottomSheetTsx14(source,animationConfigs){const{isForcedClosing,ANIMATION_SOURCE,isLayoutCalculated,getEvaluatedPosition,isAnimatedOnMount,animateOnMount,animateToPosition,setToPosition,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedNextPositionIndex,isInTemporaryPosition,animatedClosedPosition,animatedCurrentIndex,animatedSnapPoints,animatedIndex,reduceMotion,animatedPosition}=this.__closure;if(isForcedClosing.value&&source!==ANIMATION_SOURCE.USER){return;}if(!isLayoutCalculated.value){return;}const proposedPosition=getEvaluatedPosition(source);if(!isAnimatedOnMount.value){if(animateOnMount){animateToPosition(proposedPosition,ANIMATION_SOURCE.MOUNT,undefined,animationConfigs);}else{setToPosition(proposedPosition);isAnimatedOnMount.value=true;}return;}if(animatedContainerHeightDidChange.value){setToPosition(proposedPosition);return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){if(animatedNextPositionIndex.value===-1&&!isInTemporaryPosition.value){setToPosition(animatedClosedPosition.value);return;}if(animatedNextPositionIndex.value!==animatedCurrentIndex.value){animateToPosition(animatedSnapPoints.value[animatedNextPositionIndex.value],source,undefined,animationConfigs);return;}}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING&&animatedIndex.value===-1){if(reduceMotion&&animatedSnapPoints.value[animatedIndex.value]!==animatedPosition.value){return;}setToPosition(animatedClosedPosition.value);return;}animateToPosition(proposedPosition,source,undefined,animationConfigs);}" };
let closure_26 = { code: "function handleSnapToPosition_Pnpm_BottomSheetTsx15(position,animationConfigs){const handleSnapToPosition_Pnpm_BottomSheetTsx15=this._recur;const{__DEV__,print,BottomSheet,normalizeSnapPoint,animatedContainerHeight,isLayoutCalculated,animatedNextPosition,isForcedClosing,isInTemporaryPosition,runOnUI,animateToPosition,ANIMATION_SOURCE}=this.__closure;if(__DEV__){print({component:BottomSheet.name,method:handleSnapToPosition_Pnpm_BottomSheetTsx15.name,params:{position:position}});}const nextPosition=normalizeSnapPoint(position,animatedContainerHeight.value);if(!isLayoutCalculated||nextPosition===animatedNextPosition.value||isForcedClosing.value){return;}isInTemporaryPosition.value=true;runOnUI(animateToPosition)(nextPosition,ANIMATION_SOURCE.USER,0,animationConfigs);}" };
let closure_27 = { code: "function pnpm_BottomSheetTsx16(){const{nextPosition,animatedPosition,index,animatedNextPositionIndex,animatedAnimationState,ANIMATION_STATE,animatedCurrentIndex,animatedNextPosition,stopAnimation,animatedContainerHeightDidChange}=this.__closure;if(nextPosition===animatedPosition.value&&index===animatedNextPositionIndex.value&&animatedAnimationState.value!==ANIMATION_STATE.RUNNING){animatedCurrentIndex.value=index;return;}animatedNextPosition.value=nextPosition;animatedNextPositionIndex.value=index;animatedCurrentIndex.value=index;stopAnimation();animatedPosition.value=nextPosition;animatedContainerHeightDidChange.value=false;}" };
let __initData = { code: "function pnpm_BottomSheetTsx17(){const{animatedContainerHeight}=this.__closure;return animatedContainerHeight.value;}" };
let closure_29 = { code: "function pnpm_BottomSheetTsx18(result,previous){const{INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition}=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}}" };
const __initData8 = { code: "function pnpm_BottomSheetTsx19(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value;}" };
const __initData9 = { code: "function pnpm_BottomSheetTsx20(result,previous){const{isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE}=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);}" };
const __initData10 = { code: "function pnpm_BottomSheetTsx21(){const{animatedKeyboardState,animatedKeyboardHeight}=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};}" };
const __initData11 = { code: "function pnpm_BottomSheetTsx22(result,_previousResult){const{KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition}=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);}" };
const __initData12 = { code: "function pnpm_BottomSheetTsx23(){const{animatedPosition}=this.__closure;return animatedPosition.value;}" };
const __initData13 = { code: "function pnpm_BottomSheetTsx24(_animatedPosition){const{_providedAnimatedPosition,topInset}=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}}" };
const __initData14 = { code: "function pnpm_BottomSheetTsx25(){const{animatedIndex}=this.__closure;return animatedIndex.value;}" };
const __initData15 = { code: "function pnpm_BottomSheetTsx26(_animatedIndex){const{_providedAnimatedIndex}=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}}" };
const __initData16 = { code: "function pnpm_BottomSheetTsx27(){const{animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState}=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};}" };
const __initData17 = { code: "function pnpm_BottomSheetTsx28({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){const{ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose}=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}}" };
class BottomSheet {
  constructor(arg0, arg1) {
    animationConfigs = global.animationConfigs;
    index = global.index;
    num = 0;
    if (undefined !== index) {
      num = index;
    }
    index = num;
    ({ snapPoints, initialPosition } = global);
    if (undefined === initialPosition) {
      tmp = animationConfigs;
      tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
      initialPosition = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_POSITION;
    }
    DEFAULT_ANIMATE_ON_MOUNT = global.animateOnMount;
    if (undefined === DEFAULT_ANIMATE_ON_MOUNT) {
      tmp3 = animationConfigs;
      tmp4 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ANIMATE_ON_MOUNT = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ANIMATE_ON_MOUNT;
    }
    DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = global.enableContentPanningGesture;
    if (undefined === DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
      tmp5 = animationConfigs;
      tmp6 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    }
    closure_3 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    ({ enableOverDrag, enableHandlePanningGesture } = global);
    if (undefined === enableOverDrag) {
      tmp7 = animationConfigs;
      tmp8 = DEFAULT_ANIMATE_ON_MOUNT;
      enableOverDrag = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_OVER_DRAG;
    }
    DEFAULT_ENABLE_OVER_DRAG = enableOverDrag;
    DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = global.enablePanDownToClose;
    if (undefined === DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE) {
      tmp9 = animationConfigs;
      tmp10 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    }
    closure_5 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    DEFAULT_DYNAMIC_SIZING = global.enableDynamicSizing;
    if (undefined === DEFAULT_DYNAMIC_SIZING) {
      tmp11 = animationConfigs;
      tmp12 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_DYNAMIC_SIZING = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_DYNAMIC_SIZING;
    }
    DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = global.overDragResistanceFactor;
    if (undefined === DEFAULT_OVER_DRAG_RESISTANCE_FACTOR) {
      tmp13 = animationConfigs;
      tmp14 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    }
    closure_7 = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    overrideReduceMotion = global.overrideReduceMotion;
    ({ keyboardBehavior, style, containerStyle, backgroundStyle, handleStyle, handleIndicatorStyle, gestureEventsHandlersHook } = global);
    if (undefined === keyboardBehavior) {
      tmp15 = animationConfigs;
      tmp16 = DEFAULT_ANIMATE_ON_MOUNT;
      keyboardBehavior = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_BEHAVIOR;
    }
    DEFAULT_KEYBOARD_BEHAVIOR = keyboardBehavior;
    DEFAULT_KEYBOARD_BLUR_BEHAVIOR = global.keyboardBlurBehavior;
    if (undefined === DEFAULT_KEYBOARD_BLUR_BEHAVIOR) {
      tmp17 = animationConfigs;
      tmp18 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_KEYBOARD_BLUR_BEHAVIOR = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    }
    closure_10 = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    DEFAULT_KEYBOARD_INPUT_MODE = global.android_keyboardInputMode;
    if (undefined === DEFAULT_KEYBOARD_INPUT_MODE) {
      tmp19 = animationConfigs;
      tmp20 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_KEYBOARD_INPUT_MODE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_INPUT_MODE;
    }
    closure_11 = DEFAULT_KEYBOARD_INPUT_MODE;
    DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = global.enableBlurKeyboardOnGesture;
    if (undefined === DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE) {
      tmp21 = animationConfigs;
      tmp22 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    }
    closure_12 = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = global.keyboardIncludeBottomOffset;
    if (undefined === DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET) {
      tmp23 = animationConfigs;
      tmp24 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    }
    containerHeight = global.containerHeight;
    ({ containerOffset, topInset } = global);
    num2 = 0;
    if (undefined !== topInset) {
      num2 = topInset;
    }
    topInset = num2;
    bottomInset = global.bottomInset;
    num3 = 0;
    if (undefined !== bottomInset) {
      num3 = bottomInset;
    }
    bottomInset = num3;
    ({ maxDynamicContentSize, contentHeight, handleHeight, animatedPosition } = global);
    animatedIndex = global.animatedIndex;
    simultaneousHandlers = global.simultaneousHandlers;
    waitFor = global.waitFor;
    activeOffsetX = global.activeOffsetX;
    activeOffsetY = global.activeOffsetY;
    failOffsetX = global.failOffsetX;
    failOffsetY = global.failOffsetY;
    onChange = global.onChange;
    onClose = global.onClose;
    onAnimate = global.onAnimate;
    $modal = global.$modal;
    tmp25 = undefined !== $modal && $modal;
    $modal = tmp25;
    detached = global.detached;
    tmp26 = undefined !== detached && detached;
    detached = tmp26;
    handleComponent = global.handleComponent;
    ({ backdropComponent, backgroundComponent, renderFooter, accessible, children, BodyComponent } = global);
    if (undefined === accessible) {
      tmp27 = animationConfigs;
      tmp28 = DEFAULT_ANIMATE_ON_MOUNT;
      accessible = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ACCESSIBLE;
    }
    DEFAULT_ACCESSIBILITY_LABEL = global.accessibilityLabel;
    if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
      tmp29 = animationConfigs;
      tmp30 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ACCESSIBILITY_LABEL = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ACCESSIBILITY_LABEL;
    }
    DEFAULT_ACCESSIBILITY_ROLE = global.accessibilityRole;
    if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
      tmp31 = animationConfigs;
      tmp32 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ACCESSIBILITY_ROLE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ACCESSIBILITY_ROLE;
    }
    tmp33 = animationConfigs;
    tmp34 = DEFAULT_ANIMATE_ON_MOUNT;
    obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[6]);
    INITIAL_CONTAINER_HEIGHT = containerHeight;
    if (containerHeight == null) {
      INITIAL_CONTAINER_HEIGHT = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    reactiveSharedValue = obj.useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT);
    closure_30 = reactiveSharedValue;
    tmp33Result = tmp33(tmp34[4]);
    fn = function _() {
      value = reactiveSharedValue.value;
      return closure_27 ? value - (num2 + num3) : value;
    };
    fn.__closure = { topInset: num2, bottomInset: num3, $modal: tmp25, _animatedContainerHeight: reactiveSharedValue };
    fn.__workletHash = 4416945277961;
    fn.__initData = closure_12;
    items = [, , , ];
    items[0] = num2;
    items[1] = num3;
    items[2] = tmp25;
    items[3] = reactiveSharedValue;
    derivedValue = tmp33Result.useDerivedValue(fn, items);
    closure_31 = derivedValue;
    tmp33Result1 = tmp33(tmp34[6]);
    if (containerOffset == null) {
      containerOffset = tmp33(tmp34[5]).INITIAL_CONTAINER_OFFSET;
    }
    reactiveSharedValue1 = tmp33Result1.useReactiveSharedValue(containerOffset);
    closure_32 = reactiveSharedValue1;
    tmp33Result2 = tmp33(tmp34[6]);
    if (handleHeight == null) {
      handleHeight = tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT;
    }
    reactiveSharedValue2 = tmp33Result2.useReactiveSharedValue(handleHeight);
    closure_33 = reactiveSharedValue2;
    tmp33Result3 = tmp33(tmp34[4]);
    sharedValue = tmp33Result3.useSharedValue(0);
    closure_34 = sharedValue;
    tmp33Result4 = tmp33(tmp34[4]);
    if (contentHeight == null) {
      contentHeight = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    sharedValue1 = tmp33Result4.useSharedValue(contentHeight);
    closure_35 = sharedValue1;
    tmp33Result5 = tmp33(tmp34[6]);
    tmp41 = closure_3(tmp33Result5.useAnimatedSnapPoints(snapPoints, derivedValue, sharedValue1, reactiveSharedValue2, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize), 2);
    first = tmp41[0];
    closure_36 = first;
    tmp43 = tmp41[1];
    closure_37 = tmp43;
    tmp33Result6 = tmp33(tmp34[4]);
    class I {
      constructor() {
        return closure_36.value[closure_36.value.length - 1];
      }
    }
    I.__closure = { animatedSnapPoints: first };
    I.__workletHash = 2910694947130;
    I.__initData = containerHeight;
    items1 = [];
    items1[0] = first;
    derivedValue1 = tmp33Result6.useDerivedValue(I, items1);
    closure_38 = derivedValue1;
    tmp33Result7 = tmp33(tmp34[4]);
    class E {
      constructor() {
        sum = closure_31.value;
        tmp = $modal;
        iter = closure_31;
        if (!$modal) {
          tmp = detached;
        }
        if (tmp) {
          tmp2 = bottomInset;
          sum = iter.value + bottomInset;
        }
        return sum;
      }
    }
    E.__closure = { animatedContainerHeight: derivedValue, $modal: tmp25, detached: tmp26, bottomInset: num3 };
    E.__workletHash = 1052527833249;
    E.__initData = topInset;
    items2 = [, , , ];
    items2[0] = derivedValue;
    items2[1] = tmp25;
    items2[2] = tmp26;
    items2[3] = num3;
    derivedValue2 = tmp33Result7.useDerivedValue(E, items2);
    closure_39 = derivedValue2;
    tmp33Result8 = tmp33(tmp34[4]);
    class X {
      constructor() {
        return closure_31.value - closure_38.value;
      }
    }
    X.__closure = { animatedContainerHeight: derivedValue, animatedHighestSnapPoint: derivedValue1 };
    X.__workletHash = 12626261619737;
    X.__initData = bottomInset;
    items3 = [, ];
    items3[0] = derivedValue;
    items3[1] = derivedValue1;
    derivedValue3 = tmp33Result8.useDerivedValue(X, items3);
    closure_40 = derivedValue3;
    tmp33Result9 = tmp33(tmp34[6]);
    num4 = -1;
    if (!DEFAULT_ANIMATE_ON_MOUNT) {
      num4 = num;
    }
    reactiveSharedValue3 = tmp33Result9.useReactiveSharedValue(num4);
    closure_41 = reactiveSharedValue3;
    tmp33Result10 = tmp33(tmp34[4]);
    sharedValue2 = tmp33Result10.useSharedValue(initialPosition);
    closure_42 = sharedValue2;
    tmp33Result11 = tmp33(tmp34[4]);
    sharedValue3 = tmp33Result11.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    closure_43 = sharedValue3;
    tmp33Result12 = tmp33(tmp34[4]);
    sharedValue4 = tmp33Result12.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    closure_44 = sharedValue4;
    tmp33Result13 = tmp33(tmp34[4]);
    tmp51 = !DEFAULT_ANIMATE_ON_MOUNT;
    if (DEFAULT_ANIMATE_ON_MOUNT) {
      tmp51 = -1 === num;
    }
    sharedValue5 = tmp33Result13.useSharedValue(tmp51);
    closure_45 = sharedValue5;
    tmp33Result14 = tmp33(tmp34[4]);
    sharedValue6 = tmp33Result14.useSharedValue(false);
    closure_46 = sharedValue6;
    tmp33Result15 = tmp33(tmp34[4]);
    fn2 = function $() {
      let tmp2 = null === containerHeight;
      if (tmp2) {
        tmp2 = undefined === tmp;
      }
      let flag = false;
      if (!tmp2) {
        flag = true;
      }
      if (derivedValue.value !== DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
        flag = true;
      }
      let flag2 = false;
      if (null === handleComponent) {
        reactiveSharedValue2.value = 0;
        flag2 = true;
      }
      if (reactiveSharedValue2.value !== DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT) {
        flag2 = true;
      }
      let flag3 = false;
      if (first.value[0] !== DEFAULT_HANDLE_HEIGHT.INITIAL_SNAP_POINT) {
        flag3 = true;
      }
      if (flag) {
        flag = flag2;
      }
      if (flag) {
        flag = flag3;
      }
      return flag;
    };
    obj = { _providedContainerHeight: containerHeight, animatedContainerHeight: derivedValue, INITIAL_CONTAINER_HEIGHT: tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT, handleComponent, animatedHandleHeight: reactiveSharedValue2, INITIAL_HANDLE_HEIGHT: tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT, animatedSnapPoints: first, INITIAL_SNAP_POINT: tmp33(tmp34[5]).INITIAL_SNAP_POINT };
    fn2.__closure = obj;
    fn2.__workletHash = 16854996685215;
    fn2.__initData = animatedPosition;
    items4 = [, , , , ];
    items4[0] = containerHeight;
    items4[1] = derivedValue;
    items4[2] = reactiveSharedValue2;
    items4[3] = first;
    items4[4] = handleComponent;
    derivedValue4 = tmp33Result15.useDerivedValue(fn2, items4);
    closure_47 = derivedValue4;
    tmp33Result16 = tmp33(tmp34[4]);
    sharedValue7 = tmp33Result16.useSharedValue(false);
    closure_48 = sharedValue7;
    tmp33Result17 = tmp33(tmp34[4]);
    sharedValue8 = tmp33Result17.useSharedValue(false);
    closure_49 = sharedValue8;
    tmp33Result18 = tmp33(tmp34[4]);
    sharedValue9 = tmp33Result18.useSharedValue(false);
    closure_50 = sharedValue9;
    tmp33Result19 = tmp33(tmp34[4]);
    sharedValue10 = tmp33Result19.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    closure_51 = sharedValue10;
    tmp33Result20 = tmp33(tmp34[4]);
    sharedValue11 = tmp33Result20.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    closure_52 = sharedValue11;
    tmp33Result21 = tmp33(tmp34[6]);
    scrollable = tmp33Result21.useScrollable();
    animatedScrollableType = scrollable.animatedScrollableType;
    animatedScrollableContentOffsetY = scrollable.animatedScrollableContentOffsetY;
    closure_54 = animatedScrollableContentOffsetY;
    animatedScrollableOverrideState = scrollable.animatedScrollableOverrideState;
    closure_55 = animatedScrollableOverrideState;
    isScrollableRefreshable = scrollable.isScrollableRefreshable;
    setScrollableRef = scrollable.setScrollableRef;
    removeScrollableRef = scrollable.removeScrollableRef;
    tmp33Result22 = tmp33(tmp34[6]);
    keyboard = tmp33Result22.useKeyboard({ includeBottomOffset: DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET });
    state = keyboard.state;
    height = keyboard.height;
    animationDuration = keyboard.animationDuration;
    animationEasing = keyboard.animationEasing;
    shouldHandleKeyboardEvents = keyboard.shouldHandleKeyboardEvents;
    closure_63 = shouldHandleKeyboardEvents;
    tmp33Result23 = tmp33(tmp34[4]);
    sharedValue12 = tmp33Result23.useSharedValue(0);
    closure_64 = sharedValue12;
    tmp33Result24 = tmp33(tmp34[4]);
    reducedMotion = tmp33Result24.useReducedMotion();
    closure_65 = reducedMotion;
    items5 = [, ];
    items5[0] = reducedMotion;
    items5[1] = overrideReduceMotion;
    tmp64 = DEFAULT_ENABLE_OVER_DRAG(() => {
      if (overrideReduceMotion) {
        if (tmp !== cancelAnimation2.ReduceMotion.System) {
          let tmp4 = tmp === cancelAnimation2.ReduceMotion.Always;
        }
        return tmp4;
      }
      tmp4 = reducedMotion;
    }, items5);
    closure_66 = tmp64;
    tmp33Result25 = tmp33(tmp34[4]);
    sharedValue13 = tmp33Result25.useSharedValue(tmp33(tmp34[8]).ANIMATION_STATE.UNDETERMINED);
    closure_67 = sharedValue13;
    tmp33Result26 = tmp33(tmp34[4]);
    sharedValue14 = tmp33Result26.useSharedValue(tmp33(tmp34[8]).ANIMATION_SOURCE.MOUNT);
    closure_68 = sharedValue14;
    tmp33Result27 = tmp33(tmp34[4]);
    class Z {
      constructor() {
        iter = closure_42;
        if (closure_42.value >= closure_39.value) {
          tmp12 = closure_0;
          tmp13 = closure_2;
          return closure_0(closure_2[8]).SHEET_STATE.CLOSED;
        } else {
          diff = closure_31.value - closure_40.value;
          if (iter.value === diff) {
            tmp10 = closure_0;
            tmp11 = closure_2;
            return closure_0(closure_2[8]).SHEET_STATE.EXTENDED;
          } else {
            tmp15 = closure_64;
            tmp16 = globalThis;
            _Math = Math;
            num = 0;
            tmp18 = DEFAULT_KEYBOARD_BEHAVIOR;
            tmp19 = closure_0;
            tmp20 = closure_2;
            bound = Math.max(0, iter2.value - (iter3.value + closure_64.value));
            if (DEFAULT_KEYBOARD_BEHAVIOR === closure_0(closure_2[8]).KEYBOARD_BEHAVIOR.interactive) {
              tmp = closure_48;
              if (closure_48.value) {
                if (iter.value === bound) {
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  OPENED = closure_0(closure_2[8]).SHEET_STATE.EXTENDED;
                }
                return OPENED;
              }
            }
            if (0 === iter.value) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              OPENED = closure_0(closure_2[8]).SHEET_STATE.FILL_PARENT;
            } else if (iter.value < diff) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              OPENED = closure_0(closure_2[8]).SHEET_STATE.OVER_EXTENDED;
            } else {
              tmp2 = closure_0;
              tmp3 = closure_2;
              OPENED = closure_0(closure_2[8]).SHEET_STATE.OPENED;
            }
          }
        }
        return;
      }
    }
    obj1 = { animatedPosition: sharedValue2, animatedClosedPosition: derivedValue2, SHEET_STATE: tmp33(tmp34[8]).SHEET_STATE, animatedContainerHeight: derivedValue, animatedSheetHeight: derivedValue3, animatedKeyboardHeightInContainer: sharedValue12, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, isInTemporaryPosition: sharedValue7 };
    Z.__closure = obj1;
    Z.__workletHash = 5310633624984;
    Z.__initData = animatedIndex;
    items6 = [, , , , , , ];
    items6[0] = derivedValue2;
    items6[1] = derivedValue;
    items6[2] = sharedValue12;
    items6[3] = sharedValue2;
    items6[4] = derivedValue3;
    items6[5] = sharedValue7;
    items6[6] = keyboardBehavior;
    derivedValue5 = tmp33Result27.useDerivedValue(Z, items6);
    closure_69 = derivedValue5;
    tmp33Result28 = tmp33(tmp34[4]);
    fn3 = function q() {
      if (DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
        if (animatedScrollableOverrideState.value !== GESTURE_SOURCE.SCROLLABLE_STATE.UNDETERMINED) {
          let UNLOCKED = iter.value;
        } else {
          if (derivedValue5.value !== GESTURE_SOURCE.SHEET_STATE.FILL_PARENT) {
            if (iter2.value !== GESTURE_SOURCE.SHEET_STATE.EXTENDED) {
              UNLOCKED = GESTURE_SOURCE.SCROLLABLE_STATE.LOCKED;
            }
          }
          UNLOCKED = GESTURE_SOURCE.SCROLLABLE_STATE.UNLOCKED;
          iter2 = derivedValue5;
        }
        iter = animatedScrollableOverrideState;
      } else {
        return GESTURE_SOURCE.SCROLLABLE_STATE.UNLOCKED;
      }
    };
    obj2 = { enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, SCROLLABLE_STATE: tmp33(tmp34[8]).SCROLLABLE_STATE, animatedScrollableOverrideState, animatedSheetState: derivedValue5, SHEET_STATE: tmp33(tmp34[8]).SHEET_STATE, animatedKeyboardState: state, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE };
    fn3.__closure = obj2;
    fn3.__workletHash = 1522258685135;
    fn3.__initData = simultaneousHandlers;
    items7 = [, , , , ];
    items7[0] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items7[1] = sharedValue13;
    items7[2] = state;
    items7[3] = animatedScrollableOverrideState;
    items7[4] = derivedValue5;
    derivedValue6 = tmp33Result28.useDerivedValue(fn3, items7);
    closure_70 = derivedValue6;
    tmp33Result29 = tmp33(tmp34[4]);
    class Q {
      constructor() {
        value = closure_36.value;
        substr = value.slice();
        reversed = substr.reverse();
        value1 = closure_36.value;
        substr1 = value1.slice();
        mapped = substr1.map((item, index) => index);
        reversed1 = mapped.reverse();
        arr = reversed.push(closure_31.value);
        arr1 = reversed1.push(-1);
        num = -1;
        if (closure_47.value) {
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj3 = closure_0(closure_2[4]);
          tmp5 = closure_42;
          value = closure_42.value;
          tmp6 = closure_0;
          tmp7 = closure_2;
          tmp8 = obj3;
          tmp9 = value;
          tmp10 = reversed;
          tmp11 = reversed1;
          num = obj3.interpolate(value, reversed, reversed1, closure_0(closure_2[4]).Extrapolation.CLAMP);
        }
        if (closure_11 === closure_0(closure_2[8]).KEYBOARD_INPUT_MODE.adjustResize) {
          tmp12 = closure_68;
          tmp13 = closure_0;
          tmp14 = closure_2;
          if (closure_68.value === closure_0(closure_2[8]).ANIMATION_SOURCE.KEYBOARD) {
            tmp15 = closure_67;
            tmp16 = closure_0;
            tmp17 = closure_2;
            if (closure_67.value === closure_0(closure_2[8]).ANIMATION_STATE.RUNNING) {
              tmp18 = closure_48;
              if (closure_48.value) {
                tmp23 = globalThis;
                _Math = Math;
                tmp24 = closure_41;
                bound = Math.max(closure_41.value, num);
              }
              return bound;
            }
          }
        }
        bound = num;
        if (closure_68.value === closure_0(closure_2[8]).ANIMATION_SOURCE.SNAP_POINT_CHANGE) {
          tmp19 = closure_67;
          tmp20 = closure_0;
          tmp21 = closure_2;
          bound = num;
          if (closure_67.value === closure_0(closure_2[8]).ANIMATION_STATE.RUNNING) {
            tmp22 = closure_44;
            bound = closure_44.value;
          }
        }
        return;
      }
    }
    obj3 = { animatedSnapPoints: first, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, interpolate: tmp33(tmp34[4]).interpolate, animatedPosition: sharedValue2, Extrapolation: tmp33(tmp34[4]).Extrapolation, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: tmp33(tmp34[8]).KEYBOARD_INPUT_MODE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, isInTemporaryPosition: sharedValue7, animatedCurrentIndex: reactiveSharedValue3, animatedNextPositionIndex: sharedValue4 };
    Q.__closure = obj3;
    Q.__workletHash = 1383862303157;
    Q.__initData = waitFor;
    items8 = [, , , , , , , , , ];
    items8[0] = DEFAULT_KEYBOARD_INPUT_MODE;
    items8[1] = sharedValue14;
    items8[2] = sharedValue13;
    items8[3] = derivedValue;
    items8[4] = reactiveSharedValue3;
    items8[5] = sharedValue4;
    items8[6] = sharedValue2;
    items8[7] = first;
    items8[8] = sharedValue7;
    items8[9] = derivedValue4;
    derivedValue7 = tmp33Result29.useDerivedValue(Q, items8);
    closure_71 = derivedValue7;
    items9 = [, , ];
    items9[0] = onChange;
    items9[1] = reactiveSharedValue3;
    items9[2] = tmp43;
    tmp70 = closure_5(function handleOnChange(arg0, arg1) {
      if (onChange) {
        if (arg0 === value.value) {
          let PROVIDED = GESTURE_SOURCE.SNAP_POINT_TYPE.DYNAMIC;
        } else {
          PROVIDED = GESTURE_SOURCE.SNAP_POINT_TYPE.PROVIDED;
        }
        tmp(arg0, arg1, PROVIDED);
      }
    }, items9);
    closure_72 = tmp70;
    items10 = [, , ];
    items10[0] = onAnimate;
    items10[1] = reactiveSharedValue3;
    items10[2] = sharedValue2;
    tmp71 = closure_5(function handleOnAnimate(arg0, arg1, arg2) {
      if (onAnimate) {
        let tmp3 = arg0 === reactiveSharedValue3.value;
        if (tmp3) {
          tmp3 = -1 !== arg0;
        }
        if (!tmp3) {
          tmp(iter.value, arg0, sharedValue2.value, arg1, arg2);
        }
        iter = reactiveSharedValue3;
      }
    }, items10);
    closure_73 = tmp71;
    tmp33Result30 = tmp33(tmp34[4]);
    ee = function ee() {
      cancelAnimation2.cancelAnimation(sharedValue2);
      sharedValue14.value = GESTURE_SOURCE.ANIMATION_SOURCE.NONE;
      sharedValue13.value = GESTURE_SOURCE.ANIMATION_STATE.STOPPED;
    };
    obj4 = { cancelAnimation: tmp33(tmp34[4]).cancelAnimation, animatedPosition: sharedValue2, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE };
    ee.__closure = obj4;
    ee.__workletHash = 17031011772977;
    ee.__initData = activeOffsetX;
    items11 = [, , ];
    items11[0] = sharedValue2;
    items11[1] = sharedValue13;
    items11[2] = sharedValue14;
    workletCallback = tmp33Result30.useWorkletCallback(ee, items11);
    closure_74 = workletCallback;
    tmp33Result31 = tmp33(tmp34[4]);
    animateToPositionCompleted = function animateToPositionCompleted(arg0) {
      if (arg0) {
        if (sharedValue14.value === GESTURE_SOURCE.ANIMATION_SOURCE.MOUNT) {
          sharedValue5.value = true;
        }
        sharedValue8.value = false;
        sharedValue14.value = GESTURE_SOURCE.ANIMATION_SOURCE.NONE;
        sharedValue13.value = GESTURE_SOURCE.ANIMATION_STATE.STOPPED;
        sharedValue3.value = DEFAULT_HANDLE_HEIGHT.INITIAL_VALUE;
        sharedValue4.value = DEFAULT_HANDLE_HEIGHT.INITIAL_VALUE;
        sharedValue9.value = false;
      }
    };
    obj5 = { __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, animatedCurrentIndex: reactiveSharedValue3, animatedNextPosition: sharedValue3, animatedNextPositionIndex: sharedValue4, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, isAnimatedOnMount: sharedValue5, isForcedClosing: sharedValue8, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, INITIAL_VALUE: tmp33(tmp34[5]).INITIAL_VALUE, animatedContainerHeightDidChange: sharedValue9 };
    animateToPositionCompleted.__closure = obj5;
    animateToPositionCompleted.__workletHash = 16634512058026;
    animateToPositionCompleted.__initData = activeOffsetY;
    workletCallback1 = tmp33Result31.useWorkletCallback(animateToPositionCompleted);
    closure_75 = workletCallback1;
    tmp33Result32 = tmp33(tmp34[4]);
    animateToPosition = function animateToPosition(initialPosition, GESTURE, arg2) {
      num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      if (initialPosition !== sharedValue2.value) {
        if (undefined !== initialPosition) {
          if (sharedValue13.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
            if (iter2.value === tmp18(6628).ANIMATION_STATE.RUNNING) {
              workletCallback();
            }
            iter2.value = tmp18(6628).ANIMATION_STATE.RUNNING;
            sharedValue14.value = GESTURE;
            sharedValue3.value = initialPosition;
            let tmp8 = state.value === tmp18(6628).KEYBOARD_STATE.SHOWN;
            if (tmp8) {
              tmp8 = keyboardBehavior !== tmp18(6628).KEYBOARD_BEHAVIOR.extend;
            }
            if (tmp8) {
              tmp8 = initialPosition < iter.value;
            }
            num2 = 0;
            if (tmp8) {
              num2 = sharedValue12.value;
            }
            let tmp11 = arg3;
            value = first.value;
            sharedValue4.value = value.indexOf(initialPosition + num2);
            let tmp18Result = tmp18(1636);
            tmp18Result.runOnJS(closure_73)(sharedValue4.value, initialPosition, GESTURE);
            tmp18Result = tmp18(6644);
            const obj = { point: initialPosition, configs: null, velocity: null, overrideReduceMotion: null, onComplete: null };
            if (!arg3) {
              tmp11 = animationConfigs;
            }
            obj.configs = tmp11;
            obj.velocity = num;
            obj.overrideReduceMotion = overrideReduceMotion;
            obj.onComplete = workletCallback1;
            iter.value = tmp18Result.animate(obj);
          }
        }
      }
    };
    obj6 = { __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedAnimationSource: sharedValue14, animatedKeyboardState: state, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, animatedKeyboardHeightInContainer: sharedValue12, animatedNextPositionIndex: sharedValue4, animatedSnapPoints: first, handleOnAnimate: tmp71, animate: tmp33(tmp34[9]).animate, _providedAnimationConfigs: animationConfigs, _providedOverrideReduceMotion: overrideReduceMotion, animateToPositionCompleted: workletCallback1 };
    animateToPosition.__closure = obj6;
    animateToPosition.__workletHash = 11829586443894;
    animateToPosition.__initData = failOffsetX;
    items12 = [, , , ];
    items12[0] = tmp71;
    items12[1] = keyboardBehavior;
    items12[2] = animationConfigs;
    items12[3] = overrideReduceMotion;
    workletCallback2 = tmp33Result32.useWorkletCallback(animateToPosition, items12);
    closure_76 = workletCallback2;
    tmp33Result33 = tmp33(tmp34[4]);
    setToPosition = function setToPosition(value) {
      let tmp2 = value === sharedValue2.value;
      if (!tmp2) {
        tmp2 = undefined === value;
      }
      if (!tmp2) {
        let tmp6 = sharedValue13.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING;
        if (tmp6) {
          tmp6 = value === sharedValue3.value;
        }
        tmp2 = tmp6;
      }
      if (!tmp2) {
        sharedValue3.value = value;
        value = first.value;
        sharedValue4.value = value.indexOf(value);
        workletCallback();
        sharedValue2.value = value;
        sharedValue9.value = false;
      }
    };
    obj7 = { animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: closure_40, animatedNextPositionIndex: sharedValue4, animatedSnapPoints: first, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue9 };
    setToPosition.__closure = obj7;
    setToPosition.__workletHash = 1470510512522;
    setToPosition.__initData = failOffsetY;
    workletCallback3 = tmp33Result33.useWorkletCallback(setToPosition, []);
    closure_77 = workletCallback3;
    tmp33Result34 = tmp33(tmp34[4]);
    getEvaluatedPosition = function getEvaluatedPosition(arg0) {
      value = state.value;
      const value1 = derivedValue1.value;
      if (arg0 === GESTURE_SOURCE.ANIMATION_SOURCE.KEYBOARD) {
        if (DEFAULT_KEYBOARD_BLUR_BEHAVIOR === tmp(6628).KEYBOARD_BLUR_BEHAVIOR.restore) {
          if (value === tmp(6628).KEYBOARD_STATE.HIDDEN) {
            if (sharedValue10.value !== tmp(6655).State.ACTIVE) {
              if (sharedValue11.value !== tmp(6655).State.ACTIVE) {
                sharedValue7.value = false;
                return value[value];
              }
            }
          }
        }
      }
      if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.extend) {
        if (value === tmp(6628).KEYBOARD_STATE.SHOWN) {
          return value1;
        }
      }
      if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.fillParent) {
        if (value === tmp(6628).KEYBOARD_STATE.SHOWN) {
          sharedValue7.value = true;
          return 0;
        }
      }
      if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.interactive) {
        if (value === tmp(6628).KEYBOARD_STATE.SHOWN) {
          if ("adjustResize" !== DEFAULT_KEYBOARD_INPUT_MODE) {
            sharedValue7.value = true;
            const _Math = Math;
            return Math.max(0, value1 - sharedValue12.value);
          }
        }
      }
      if (sharedValue7.value) {
        value2 = sharedValue2.value;
      } else if (sharedValue5.value) {
        value2 = value[value];
      } else if (-1 === -1) {
        value2 = derivedValue2.value;
      } else {
        value2 = value[tmp8];
      }
      return value2;
    };
    obj8 = { animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, animatedKeyboardState: state, animatedHighestSnapPoint: derivedValue1, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedContentGestureState: sharedValue10, State: tmp33(tmp34[7]).State, animatedHandleGestureState: sharedValue11, isInTemporaryPosition: sharedValue7, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, animatedKeyboardHeightInContainer: sharedValue12, animatedPosition: sharedValue2, isAnimatedOnMount: sharedValue5, _providedIndex: num, animatedClosedPosition: derivedValue2 };
    getEvaluatedPosition.__closure = obj8;
    getEvaluatedPosition.__workletHash = 10275779842691;
    getEvaluatedPosition.__initData = onChange;
    items13 = [, , , , , , , , , , , , ];
    items13[0] = sharedValue10;
    items13[1] = reactiveSharedValue3;
    items13[2] = sharedValue11;
    items13[3] = derivedValue1;
    items13[4] = sharedValue12;
    items13[5] = state;
    items13[6] = sharedValue2;
    items13[7] = first;
    items13[8] = sharedValue7;
    items13[9] = sharedValue5;
    items13[10] = keyboardBehavior;
    items13[11] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items13[12] = num;
    workletCallback4 = tmp33Result34.useWorkletCallback(getEvaluatedPosition, items13);
    closure_78 = workletCallback4;
    tmp33Result35 = tmp33(tmp34[4]);
    evaluatePosition = function evaluatePosition(arg0, arg1) {
      if (!sharedValue8.value) {
        if (derivedValue4.value) {
          const tmp6 = workletCallback4(arg0);
          if (sharedValue5.value) {
            if (sharedValue9.value) {
              workletCallback3(tmp6);
            } else {
              if (sharedValue13.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
                if (-1 === sharedValue4.value) {
                  if (!sharedValue7.value) {
                    workletCallback3(derivedValue2.value);
                  }
                }
                if (sharedValue4.value !== reactiveSharedValue3.value) {
                  workletCallback2(first.value[iter2.value], arg0, undefined, arg1);
                }
              }
              if (iter.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
                if (-1 === derivedValue7.value) {
                  workletCallback3(derivedValue2.value);
                }
              }
              workletCallback2(tmp6, arg0, undefined, arg1);
              iter = sharedValue13;
            }
          } else if (DEFAULT_ANIMATE_ON_MOUNT) {
            workletCallback2(tmp6, GESTURE_SOURCE.ANIMATION_SOURCE.MOUNT, undefined, arg1);
          } else {
            workletCallback3(tmp6);
            tmp7.value = true;
          }
        }
      }
    };
    obj9 = { isForcedClosing: sharedValue8, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, isLayoutCalculated: derivedValue4, getEvaluatedPosition: workletCallback4, isAnimatedOnMount: sharedValue5, animateOnMount: DEFAULT_ANIMATE_ON_MOUNT, animateToPosition: workletCallback2, setToPosition: workletCallback3, animatedContainerHeightDidChange: sharedValue9, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPositionIndex: sharedValue4, isInTemporaryPosition: sharedValue7, animatedClosedPosition: derivedValue2, animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, animatedIndex: derivedValue7, reduceMotion: tmp64, animatedPosition: sharedValue2 };
    evaluatePosition.__closure = obj9;
    evaluatePosition.__workletHash = 1750740918731;
    evaluatePosition.__initData = onClose;
    items14 = [, , , ];
    items14[0] = workletCallback4;
    items14[1] = workletCallback2;
    items14[2] = workletCallback3;
    items14[3] = tmp64;
    workletCallback5 = tmp33Result35.useWorkletCallback(evaluatePosition, items14);
    closure_79 = workletCallback5;
    tmp33Result36 = tmp33(tmp34[6]);
    stableCallback = tmp33Result36.useStableCallback(function handleSnapToIndex(arg0, arg1) {
      value = first.get();
      if (derivedValue4.get()) {
        let tmp5 = arg0 >= -1;
        if (tmp5) {
          tmp5 = arg0 <= value.length - 1;
        }
        _modDef38(tmp5, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        value = derivedValue4.value;
        if (value) {
          value = arg0 !== sharedValue4.value;
        }
        if (value) {
          value = tmp7 !== sharedValue3.value;
        }
        if (value) {
          value = !sharedValue8.value;
        }
        if (value) {
          sharedValue7.value = false;
          cancelAnimation2.runOnUI(workletCallback2)(tmp7, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg1);
          const runOnUIResult = cancelAnimation2.runOnUI(workletCallback2);
        }
      }
    });
    closure_80 = stableCallback;
    tmp33Result37 = tmp33(tmp34[4]);
    handleSnapToPosition = function handleSnapToPosition(arg0, arg1) {
      const normalizeSnapPointResult = normalizeSnapPoint.normalizeSnapPoint(arg0, derivedValue.value);
      let tmp4 = derivedValue4;
      if (derivedValue4) {
        tmp4 = normalizeSnapPointResult !== sharedValue3.value;
      }
      if (tmp4) {
        tmp4 = !sharedValue8.value;
      }
      if (tmp4) {
        sharedValue7.value = true;
        const tmpResult = tmp(1636);
        tmp(1636).runOnUI(workletCallback2)(normalizeSnapPointResult, tmp(6628).ANIMATION_SOURCE.USER, 0, arg1);
        const runOnUIResult = tmp(1636).runOnUI(workletCallback2);
      }
    };
    obj10 = { __DEV__: false, print: tmp33(tmp34[9]).print, BottomSheet: closure_40, normalizeSnapPoint: tmp33(tmp34[9]).normalizeSnapPoint, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, animatedNextPosition: sharedValue3, isForcedClosing: sharedValue8, isInTemporaryPosition: sharedValue7, runOnUI: tmp33(tmp34[4]).runOnUI, animateToPosition: workletCallback2, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE };
    handleSnapToPosition.__closure = obj10;
    handleSnapToPosition.__workletHash = 15646490046918;
    handleSnapToPosition.__initData = onAnimate;
    items15 = [, , , , , , ];
    items15[0] = workletCallback2;
    items15[1] = num3;
    items15[2] = num2;
    items15[3] = derivedValue4;
    items15[4] = sharedValue8;
    items15[5] = derivedValue;
    items15[6] = sharedValue2;
    workletCallback6 = tmp33Result37.useWorkletCallback(handleSnapToPosition, items15);
    closure_81 = workletCallback6;
    tmp33Result38 = tmp33(tmp34[6]);
    stableCallback1 = tmp33Result38.useStableCallback(function handleSetToIndex(index, arg1) {
      value = first.get();
      if (derivedValue4.get()) {
        let tmp4 = index >= -1;
        if (tmp4) {
          tmp4 = index <= value.length - 1;
        }
        -1(DEFAULT_ANIMATE_ON_MOUNT[10])(tmp4, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        if (!sharedValue8.value) {
          if (undefined !== arg1) {
            const _Number = Number;
            if (Number.isFinite(arg1)) {
              const _Math = Math;
              let bound = Math.max(0, arg1);
            }
            if (undefined !== bound) {
              sharedValue7.value = false;
              animationConfigs(tmp2[4]);
              const fn = function u() {
                if (bound === sharedValue2.value) {
                  if (value === sharedValue4.value) {
                    if (sharedValue13.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
                      reactiveSharedValue3.value = tmp3;
                    }
                  }
                }
                sharedValue3.value = bound;
                sharedValue4.value = value;
                reactiveSharedValue3.value = value;
                workletCallback();
                sharedValue2.value = bound;
                sharedValue9.value = false;
              };
              const obj = { nextPosition: bound, animatedPosition: sharedValue2, index, animatedNextPositionIndex: sharedValue4, animatedAnimationState: sharedValue13, ANIMATION_STATE: animationConfigs(tmp2[8]).ANIMATION_STATE, animatedCurrentIndex: reactiveSharedValue3, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue9 };
              fn.__closure = obj;
              fn.__workletHash = 13567407937738;
              fn.__initData = __initData;
              obj.runOnUI(fn)();
            }
          }
          bound = value[index];
        }
        const tmp3 = -1(DEFAULT_ANIMATE_ON_MOUNT[10]);
      }
    });
    closure_82 = stableCallback1;
    tmp33Result39 = tmp33(tmp34[6]);
    stableCallback2 = tmp33Result39.useStableCallback(function handleSetToPosition(arg0) {
      if (derivedValue4.get()) {
        if (!sharedValue8.value) {
          sharedValue7.value = true;
          const normalizeSnapPointResult = normalizeSnapPoint.normalizeSnapPoint(arg0, derivedValue.get());
          cancelAnimation2.runOnUI(workletCallback3)(normalizeSnapPointResult);
        }
      }
    });
    closure_83 = stableCallback2;
    items16 = [, , , , , ];
    items16[0] = workletCallback2;
    items16[1] = sharedValue8;
    items16[2] = derivedValue4;
    items16[3] = sharedValue7;
    items16[4] = sharedValue3;
    items16[5] = derivedValue2;
    tmp82 = closure_5(function handleClose(arg0) {
      value = derivedValue4.value;
      if (value) {
        value = value !== sharedValue3.value;
      }
      if (value) {
        value = !sharedValue8.value;
      }
      if (value) {
        sharedValue7.value = false;
        cancelAnimation2.runOnUI(workletCallback2)(value, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = cancelAnimation2.runOnUI(workletCallback2);
      }
    }, items16);
    closure_84 = tmp82;
    items17 = [, , , , ];
    items17[0] = workletCallback2;
    items17[1] = sharedValue8;
    items17[2] = sharedValue7;
    items17[3] = sharedValue3;
    items17[4] = derivedValue2;
    tmp83 = closure_5(function handleForceClose(arg0) {
      value = derivedValue2.value;
      value = value === sharedValue3.value;
      if (!value) {
        value = sharedValue8.value;
      }
      if (!value) {
        sharedValue7.value = false;
        sharedValue8.value = true;
        cancelAnimation2.runOnUI(workletCallback2)(value, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = cancelAnimation2.runOnUI(workletCallback2);
      }
    }, items17);
    closure_85 = tmp83;
    items18 = [, , , , , , ];
    items18[0] = workletCallback2;
    items18[1] = sharedValue7;
    items18[2] = derivedValue4;
    items18[3] = sharedValue8;
    items18[4] = first;
    items18[5] = sharedValue3;
    items18[6] = sharedValue4;
    tmp84 = closure_5(function handleExpand(arg0) {
      value = derivedValue4.value;
      if (value) {
        value = value.length - 1 !== sharedValue4.value;
      }
      if (value) {
        value = tmp !== sharedValue3.value;
      }
      if (value) {
        value = !sharedValue8.value;
      }
      if (value) {
        sharedValue7.value = false;
        cancelAnimation2.runOnUI(workletCallback2)(tmp, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = cancelAnimation2.runOnUI(workletCallback2);
      }
    }, items18);
    closure_86 = tmp84;
    items19 = [, , , , , , ];
    items19[0] = workletCallback2;
    items19[1] = sharedValue8;
    items19[2] = derivedValue4;
    items19[3] = sharedValue7;
    items19[4] = first;
    items19[5] = sharedValue3;
    items19[6] = sharedValue4;
    tmp85 = closure_5(function handleCollapse(arg0) {
      first = first.value[0];
      let tmp2 = derivedValue4;
      if (derivedValue4) {
        tmp2 = 0 !== sharedValue4.value;
      }
      if (tmp2) {
        tmp2 = first !== sharedValue3.value;
      }
      if (tmp2) {
        tmp2 = !sharedValue8.value;
      }
      if (tmp2) {
        sharedValue7.value = false;
        cancelAnimation2.runOnUI(workletCallback2)(first, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = cancelAnimation2.runOnUI(workletCallback2);
      }
    }, items19);
    closure_87 = tmp85;
    tmp86 = DEFAULT_DYNAMIC_SIZING(fn, () => ({ snapToIndex: stableCallback, snapToPosition: workletCallback6, setToIndex: stableCallback1, setToPosition: stableCallback2, expand, collapse, close, forceClose }));
    items20 = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items20[0] = derivedValue7;
    items20[1] = sharedValue2;
    items20[2] = sharedValue1;
    items20[3] = derivedValue3;
    items20[4] = animatedScrollableType;
    items20[5] = sharedValue10;
    items20[6] = sharedValue11;
    items20[7] = derivedValue2;
    items20[8] = sharedValue;
    items20[9] = derivedValue;
    items20[10] = reactiveSharedValue2;
    items20[11] = sharedValue13;
    items20[12] = state;
    items20[13] = height;
    items20[14] = sharedValue12;
    items20[15] = derivedValue5;
    items20[16] = derivedValue1;
    items20[17] = derivedValue6;
    items20[18] = animatedScrollableOverrideState;
    items20[19] = first;
    items20[20] = shouldHandleKeyboardEvents;
    items20[21] = animatedScrollableContentOffsetY;
    items20[22] = isScrollableRefreshable;
    items20[23] = sharedValue6;
    items20[24] = sharedValue7;
    items20[25] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items20[26] = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    items20[27] = enableOverDrag;
    items20[28] = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    items20[29] = DEFAULT_DYNAMIC_SIZING;
    items20[30] = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    items20[31] = simultaneousHandlers;
    items20[32] = waitFor;
    items20[33] = activeOffsetX;
    items20[34] = activeOffsetY;
    items20[35] = failOffsetX;
    items20[36] = failOffsetY;
    items20[37] = setScrollableRef;
    items20[38] = removeScrollableRef;
    items20[39] = workletCallback2;
    items20[40] = workletCallback;
    items21 = [, , , , , , , , , ];
    items21[0] = derivedValue7;
    items21[1] = sharedValue2;
    items21[2] = stableCallback;
    items21[3] = workletCallback6;
    items21[4] = stableCallback1;
    items21[5] = stableCallback2;
    items21[6] = tmp84;
    items21[7] = tmp85;
    items21[8] = tmp82;
    items21[9] = tmp83;
    tmp87 = DEFAULT_ENABLE_OVER_DRAG(() => ({ enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, animatedAnimationState: sharedValue13, animatedSheetState: derivedValue5, animatedScrollableState: derivedValue6, animatedScrollableOverrideState, animatedContentGestureState: sharedValue10, animatedHandleGestureState: sharedValue11, animatedKeyboardState: state, animatedScrollableType, animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedSheetHeight: derivedValue3, animatedContentHeight: sharedValue1, animatedClosedPosition: derivedValue2, animatedHandleHeight: reactiveSharedValue2, animatedFooterHeight: sharedValue, animatedKeyboardHeight: height, animatedKeyboardHeightInContainer: sharedValue12, animatedContainerHeight: derivedValue, animatedSnapPoints, animatedHighestSnapPoint: derivedValue1, animatedScrollableContentOffsetY, isInTemporaryPosition: sharedValue7, isContentHeightFixed: sharedValue6, isScrollableRefreshable, shouldHandleKeyboardEvents, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, enableBlurKeyboardOnGesture: DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, animateToPosition: workletCallback2, stopAnimation: workletCallback, setScrollableRef, removeScrollableRef }), items20);
    tmp88 = DEFAULT_ENABLE_OVER_DRAG(() => ({ animatedIndex: derivedValue7, animatedPosition: sharedValue2, snapToIndex: stableCallback, snapToPosition: workletCallback6, setToIndex: stableCallback1, setToPosition: stableCallback2, expand, collapse, close, forceClose }), items21);
    tmp33Result40 = tmp33(tmp34[4]);
    class Da {
      constructor() {
        return closure_31.value;
      }
    }
    Da.__closure = { animatedContainerHeight: derivedValue };
    Da.__workletHash = 10677623879887;
    Da.__initData = detached;
    class Ha {
      constructor(arg0, arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        if (global !== closure_0(closure_2[5]).INITIAL_CONTAINER_HEIGHT) {
          tmp9 = fn;
          tmp10 = closure_50;
          closure_50.value = global !== fn;
          tmp11 = closure_67;
          tmp4 = closure_67.value === tmp(tmp2[8]).ANIMATION_STATE.RUNNING;
          if (tmp4) {
            tmp3 = closure_68;
            tmp4 = closure_68.value === tmp(tmp2[8]).ANIMATION_SOURCE.GESTURE;
          }
          if (tmp4) {
            tmp5 = closure_44;
            num = -1;
            tmp4 = -1 === closure_44.value;
          }
          if (tmp4) {
            tmp6 = closure_76;
            tmp7 = closure_39;
            tmp8 = closure_76(closure_39.value, tmp(tmp2[8]).ANIMATION_SOURCE.GESTURE);
          }
        }
        return;
      }
    }
    obj11 = { INITIAL_CONTAINER_HEIGHT: tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT, animatedContainerHeightDidChange: sharedValue9, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedNextPositionIndex: sharedValue4, animateToPosition: workletCallback2, animatedClosedPosition: derivedValue2 };
    Ha.__closure = obj11;
    Ha.__workletHash = 6251604634325;
    Ha.__initData = handleComponent;
    animatedReaction = tmp33Result40.useAnimatedReaction(Da, Ha);
    tmp33Result41 = tmp33(tmp34[4]);
    xa = function xa() {
      return first.value;
    };
    xa.__closure = { animatedSnapPoints: first };
    xa.__workletHash = 6214244679329;
    xa.__initData = closure_30;
    fa = function fa(arg0, arg1) {
      const json = JSON.stringify(arg0);
      value = json === JSON.stringify(arg1);
      if (value) {
        value = sharedValue5.value;
      }
      if (!value) {
        if (derivedValue4.value) {
          workletCallback5(GESTURE_SOURCE.ANIMATION_SOURCE.SNAP_POINT_CHANGE);
        }
      }
    };
    obj12 = { isAnimatedOnMount: sharedValue5, isLayoutCalculated: derivedValue4, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, evaluatePosition: workletCallback5, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE };
    fa.__closure = obj12;
    fa.__workletHash = 4349647290337;
    fa.__initData = closure_31;
    items22 = [, ];
    items22[0] = derivedValue4;
    items22[1] = first;
    animatedReaction1 = tmp33Result41.useAnimatedReaction(xa, fa, items22);
    tmp33Result42 = tmp33(tmp34[4]);
    ga = function ga() {
      return { _keyboardState: state.value, _keyboardHeight: height.value };
    };
    ga.__closure = { animatedKeyboardState: state, animatedKeyboardHeight: height };
    ga.__workletHash = 8321687383329;
    ga.__initData = closure_32;
    class Ba {
      constructor(arg0, arg1) {
        ({ _keyboardState, _keyboardHeight } = global);
        _keyboardState = undefined;
        if (fn != null) {
          _keyboardState = fn._keyboardState;
        }
        if (fn != null) {
          _keyboardHeight2 = fn._keyboardHeight;
        }
        if (_keyboardState !== _keyboardState) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          if (_keyboardState !== closure_0(closure_2[8]).KEYBOARD_STATE.UNDETERMINED) {
            if (_keyboardState === tmp2(tmp3[8]).KEYBOARD_STATE.HIDDEN) {
              tmp4 = closure_67;
              if (closure_67.value === tmp2(tmp3[8]).ANIMATION_STATE.RUNNING) {
                tmp5 = closure_68;
              }
            }
            tmp6 = closure_64;
            num = 0;
            num2 = 0;
            if (0 === _keyboardHeight) {
              tmp6.value = 0;
              tmp14 = closure_11;
              if (closure_11 !== tmp2(tmp3[8]).KEYBOARD_INPUT_MODE.adjustResize) {
                iter = closure_51;
                if (closure_51.value !== tmp2(tmp3[7]).State.ACTIVE) {
                  if (iter.value !== tmp2(tmp3[7]).State.BEGAN) {
                    iter2 = closure_52;
                    if (closure_52.value !== tmp2(tmp3[7]).State.ACTIVE) {
                      if (iter2.value !== tmp2(tmp3[7]).State.BEGAN) {
                        if (_keyboardState !== tmp2(tmp3[8]).KEYBOARD_STATE.HIDDEN) {
                          tmp2Result = tmp2(tmp3[9]);
                          tmp17 = animationEasing;
                          tmp18 = animationDuration;
                          tmp20 = closure_79;
                          keyboardAnimationConfigs = tmp2Result.getKeyboardAnimationConfigs(animationEasing.value, animationDuration.value);
                          tmp21 = closure_79(tmp2(tmp3[8]).ANIMATION_SOURCE.KEYBOARD, keyboardAnimationConfigs);
                        } else {
                          tmp16 = closure_10;
                        }
                      }
                    }
                  }
                }
              } else {
                tmp6.value = 0;
                tmp15 = DEFAULT_KEYBOARD_BEHAVIOR;
              }
            } else {
              tmp7 = $modal;
              diff = globalThis;
              _Math = Math;
              abs = Math.abs;
              if ($modal) {
                _Math2 = diff.Math;
                tmp11 = bottomInset;
                tmp12 = closure_32;
                diff = _keyboardHeight - _Math2.abs(bottomInset - closure_32.value.bottom);
                absResult = abs(diff);
              } else {
                tmp9 = closure_32;
                absResult = abs(_keyboardHeight - closure_32.value.bottom);
              }
              tmp13 = absResult;
            }
          }
        }
        return;
      }
    }
    obj13 = { KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedAnimationState: sharedValue13, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: closure_40, animatedKeyboardHeightInContainer: sharedValue12, $modal: tmp25, bottomInset: num3, animatedContainerOffset: reactiveSharedValue1, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: tmp33(tmp34[8]).KEYBOARD_INPUT_MODE, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, animatedContentGestureState: sharedValue10, State: tmp33(tmp34[7]).State, animatedHandleGestureState: sharedValue11, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, getKeyboardAnimationConfigs: tmp33(tmp34[9]).getKeyboardAnimationConfigs, keyboardAnimationEasing: animationEasing, keyboardAnimationDuration: animationDuration, evaluatePosition: workletCallback5 };
    Ba.__closure = obj13;
    Ba.__workletHash = 12581090930210;
    Ba.__initData = closure_33;
    items23 = [, , , , , , ];
    items23[0] = tmp25;
    items23[1] = num3;
    items23[2] = keyboardBehavior;
    items23[3] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items23[4] = DEFAULT_KEYBOARD_INPUT_MODE;
    items23[5] = reactiveSharedValue1;
    items23[6] = workletCallback4;
    animatedReaction2 = tmp33Result42.useAnimatedReaction(ga, Ba, items23);
    tmp33Result43 = tmp33(tmp34[4]);
    class Ma {
      constructor() {
        return closure_42.value;
      }
    }
    Ma.__closure = { animatedPosition: sharedValue2 };
    Ma.__workletHash = 13579803011112;
    Ma.__initData = closure_34;
    ba = function ba(arg0) {
      if (animatedPosition) {
        tmp.value = arg0 + num2;
      }
    };
    ba.__closure = { _providedAnimatedPosition: animatedPosition, topInset: num2 };
    ba.__workletHash = 10543527459289;
    ba.__initData = closure_35;
    animatedReaction3 = tmp33Result43.useAnimatedReaction(Ma, ba, []);
    tmp33Result44 = tmp33(tmp34[4]);
    class Ua {
      constructor() {
        return closure_71.value;
      }
    }
    Ua.__closure = { animatedIndex: derivedValue7 };
    Ua.__workletHash = 12135317826830;
    Ua.__initData = closure_36;
    ya = function ya(value) {
      if (animatedIndex) {
        tmp.value = value;
      }
    };
    ya.__closure = { _providedAnimatedIndex: animatedIndex };
    ya.__workletHash = 9361176196635;
    ya.__initData = closure_37;
    animatedReaction4 = tmp33Result44.useAnimatedReaction(Ua, ya, []);
    tmp33Result45 = tmp33(tmp34[4]);
    class Ka {
      constructor() {
        obj = { _animatedIndex: closure_71.value, _animatedPosition: closure_42.value, _animationState: closure_67.value, _contentGestureState: closure_51.value, _handleGestureState: closure_52.value };
        return obj;
      }
    }
    Ka.__closure = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, animatedContentGestureState: sharedValue10, animatedHandleGestureState: sharedValue11 };
    Ka.__workletHash = 1521585362538;
    Ka.__initData = closure_38;
    class La {
      constructor(arg0) {
        ({ _animatedIndex, _animatedPosition, _contentGestureState, _handleGestureState } = global);
        tmp = closure_0;
        tmp2 = closure_2;
        tmp3 = global._animationState === closure_0(closure_2[8]).ANIMATION_STATE.STOPPED;
        if (tmp3) {
          iter = closure_43;
          tmp4 = closure_43.value === tmp(tmp2[5]).INITIAL_VALUE;
          if (!tmp4) {
            tmp5 = closure_44;
            tmp4 = closure_44.value === tmp(tmp2[5]).INITIAL_VALUE;
          }
          if (!tmp4) {
            tmp6 = _animatedPosition === iter.value;
            if (tmp6) {
              tmp7 = closure_44;
              tmp6 = _animatedIndex === closure_44.value;
            }
            tmp4 = tmp6;
          }
          tmp3 = tmp4;
        }
        if (tmp3) {
          num = 1;
          num2 = 0;
          tmp3 = _animatedIndex % 1 === 0;
        }
        if (tmp3) {
          tmp8 = _contentGestureState !== tmp(tmp2[7]).State.END && _contentGestureState !== tmp(tmp2[7]).State.UNDETERMINED && _contentGestureState !== tmp(tmp2[7]).State.CANCELLED;
          if (!tmp8) {
            tmp9 = _handleGestureState !== tmp(tmp2[7]).State.END && _handleGestureState !== tmp(tmp2[7]).State.UNDETERMINED && _handleGestureState !== tmp(tmp2[7]).State.CANCELLED;
            tmp8 = tmp9;
          }
          tmp3 = !tmp8;
        }
        if (tmp3) {
          tmp10 = closure_66;
          if (closure_66) {
            tmp11 = closure_41;
            tmp10 = _animatedIndex === closure_41.value;
          }
          if (tmp10) {
            tmp12 = closure_36;
            tmp10 = closure_36.value[_animatedIndex] !== _animatedPosition;
          }
          if (!tmp10) {
            if (_animatedIndex !== closure_41.value) {
              closure_41.value = _animatedIndex;
              tmpResult = tmp(tmp2[4]);
              tmp13 = closure_72;
              tmp14 = tmpResult.runOnJS(closure_72)(_animatedIndex, _animatedPosition);
            }
            num3 = -1;
            tmp15 = -1 === _animatedIndex && onClose;
            if (tmp15) {
              tmpResult1 = tmp(tmp2[4]);
              tmp16 = onClose;
              tmp17 = tmpResult1.runOnJS(onClose)();
            }
          }
        }
        return;
      }
    }
    obj14 = { ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, INITIAL_VALUE: tmp33(tmp34[5]).INITIAL_VALUE, animatedNextPositionIndex: sharedValue4, State: tmp33(tmp34[7]).State, reduceMotion: tmp64, animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: closure_40, handleOnChange: tmp70, _providedOnClose: onClose };
    La.__closure = obj14;
    La.__workletHash = 7374492181361;
    La.__initData = closure_39;
    items24 = [, , ];
    items24[0] = tmp64;
    items24[1] = tmp70;
    items24[2] = onClose;
    animatedReaction5 = tmp33Result45.useAnimatedReaction(Ka, La, items24);
    items25 = [, , , ];
    items25[0] = DEFAULT_ANIMATE_ON_MOUNT;
    items25[1] = num;
    items25[2] = sharedValue5;
    items25[3] = stableCallback;
    tmp95 = closure_7(() => {
      let tmp = DEFAULT_ANIMATE_ON_MOUNT;
      if (DEFAULT_ANIMATE_ON_MOUNT) {
        tmp = !sharedValue5.value;
      }
      if (!tmp) {
        stableCallback(num);
      }
    }, items25);
    tmp96 = closure_10;
    obj15 = { value: tmp88, children: null };
    obj16 = { value: tmp87, children: null };
    tmp97 = closure_11;
    obj17 = { gestureEventsHandlersHook, children: null };
    tmp96Result = null;
    tmp98 = index(tmp34[12]);
    if (backdropComponent) {
      obj18 = { animatedIndex: null, animatedPosition: null, style: null };
      obj18.animatedIndex = derivedValue7;
      obj18.animatedPosition = sharedValue2;
      tmp100 = DEFAULT_KEYBOARD_BEHAVIOR;
      obj18.style = DEFAULT_KEYBOARD_BEHAVIOR.absoluteFillObject;
      tmp96Result = tmp96(backdropComponent, obj18);
    }
    items26 = [, ];
    items26[0] = tmp96Result;
    obj19 = { shouldCalculateHeight: !tmp25, containerHeight: reactiveSharedValue, containerOffset: reactiveSharedValue1, topInset: num2, bottomInset: num3, detached: tmp26, style: containerStyle, children: null };
    obj20 = { style, BodyComponent, children: null };
    tmp96Result1 = null;
    if (null !== backgroundComponent) {
      obj21 = { animatedIndex: null, animatedPosition: null, backgroundComponent: null, backgroundStyle: null };
      obj21.animatedIndex = derivedValue7;
      obj21.animatedPosition = sharedValue2;
      obj21.backgroundComponent = backgroundComponent;
      obj21.backgroundStyle = backgroundStyle;
      str = "BottomSheetBackgroundContainer";
      tmp96Result1 = tmp96(tmp33(tmp34[15]).BottomSheetBackgroundContainer, obj21, "BottomSheetBackgroundContainer");
    }
    items27 = [, , ];
    items27[0] = tmp96Result1;
    obj22 = { pointerEvents: "box-none", accessible, accessibilityRole: null, accessibilityLabel: null, keyboardBehavior: null, detached: null, children: null };
    obj22.accessibilityRole = DEFAULT_ACCESSIBILITY_ROLE;
    obj22.accessibilityLabel = DEFAULT_ACCESSIBILITY_LABEL;
    obj22.keyboardBehavior = keyboardBehavior;
    obj22.detached = tmp26;
    items28 = [, ];
    items28[0] = children;
    tmp96Result2 = null;
    if (renderFooter) {
      obj23 = { renderFooter: null };
      obj23.renderFooter = renderFooter;
      tmp96Result2 = tmp96(tmp33(tmp34[17]).BottomSheetFooterContainer, obj23);
    }
    items28[1] = tmp96Result2;
    obj22.children = items28;
    items27[1] = tmp97(tmp33(tmp34[16]).BottomSheetContent, obj22);
    tmp96Result3 = null;
    if (null !== handleComponent) {
      obj24 = { animatedIndex: null, animatedPosition: null, handleHeight: null, enableHandlePanningGesture: null, enableOverDrag: null, enablePanDownToClose: null, overDragResistanceFactor: null, keyboardBehavior: null, handleComponent: null, handleStyle: null, handleIndicatorStyle: null };
      obj24.animatedIndex = derivedValue7;
      obj24.animatedPosition = sharedValue2;
      obj24.handleHeight = reactiveSharedValue2;
      obj24.enableHandlePanningGesture = enableHandlePanningGesture;
      obj24.enableOverDrag = enableOverDrag;
      obj24.enablePanDownToClose = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
      obj24.overDragResistanceFactor = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
      obj24.keyboardBehavior = keyboardBehavior;
      obj24.handleComponent = handleComponent;
      obj24.handleStyle = handleStyle;
      obj24.handleIndicatorStyle = handleIndicatorStyle;
      str2 = "BottomSheetHandleContainer";
      tmp96Result3 = tmp96(tmp33(tmp34[18]).BottomSheetHandleContainer, obj24, "BottomSheetHandleContainer");
    }
    items27[2] = tmp96Result3;
    obj20.children = items27;
    obj19.children = tmp97(tmp33(tmp34[14]).BottomSheetBody, obj20);
    items26[1] = tmp96(tmp33(tmp34[13]).BottomSheetHostingContainer, obj19, "BottomSheetContainer");
    obj17.children = items26;
    obj16.children = tmp97(tmp98, obj17);
    obj15.children = tmp96(tmp33(tmp34[11]).BottomSheetInternalProvider, obj16);
    return tmp96(tmp33(tmp34[11]).BottomSheetProvider, obj15);
  }
}
const memoResult = memo(forwardRef(BottomSheet));
memoResult.displayName = "BottomSheet";

export default memoResult;