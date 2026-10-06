// === Module 6122: ? ===

// Module 6122
import _modDef38 from "module_38" /* 38 */;
import _mod1643 from "module_1643" /* 1643 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6120 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 6123 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6136 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const cancelAnimation = _mod1643;
let first, value2, value3, value4;

let c10;
let c9;
let closure_4;
let forwardRef;
let hasOwnProperty;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ useMemo: closure_4, useCallback: hasOwnProperty, useImperativeHandle: metroRequire, useEffect: metroImportDefault, forwardRef, memo } = react);
react = react_mod;
({ Platform: metroImportAll, StyleSheet: c9 } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
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
__initData = { code: "function pnpm_BottomSheetTsx19(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value;}" };
let closure_31 = { code: "function pnpm_BottomSheetTsx20(result,previous){const{isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE}=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);}" };
let __initData2 = { code: "function pnpm_BottomSheetTsx21(){const{animatedKeyboardState,animatedKeyboardHeight}=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};}" };
let closure_33 = { code: "function pnpm_BottomSheetTsx22(result,_previousResult){const{KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition}=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);}" };
const __initData3 = { code: "function pnpm_BottomSheetTsx23(){const{animatedPosition}=this.__closure;return animatedPosition.value;}" };
const __initData4 = { code: "function pnpm_BottomSheetTsx24(_animatedPosition){const{_providedAnimatedPosition,topInset}=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}}" };
let closure_36 = { code: "function pnpm_BottomSheetTsx25(){const{animatedIndex}=this.__closure;return animatedIndex.value;}" };
__initData2 = { code: "function pnpm_BottomSheetTsx26(_animatedIndex){const{_providedAnimatedIndex}=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}}" };
const __initData5 = { code: "function pnpm_BottomSheetTsx27(){const{animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState}=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};}" };
let closure_39 = { code: "function pnpm_BottomSheetTsx28({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){const{ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose}=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}}" };
class BottomSheet {
  constructor(animationConfigs, arg1) {
    let BodyComponent;
    let BottomSheetBody;
    let BottomSheetInternalProvider;
    let DEFAULT_ANIMATE_ON_MOUNT;
    let accessible;
    let animatedPosition;
    let backdropComponent;
    let backgroundComponent;
    let backgroundStyle;
    let children;
    let closure_28;
    let containerOffset;
    let containerStyle;
    let contentHeight;
    let enableHandlePanningGesture;
    let enableOverDrag;
    let gestureEventsHandlersHook;
    let handleHeight;
    let handleIndicatorStyle;
    let handleStyle;
    let initialPosition;
    let items26;
    let items27;
    let items28;
    let keyboardBehavior;
    let maxDynamicContentSize;
    let obj17;
    let obj18;
    let obj21;
    let renderFooter;
    let snapPoints;
    let style;
    let tmp104;
    let topInset;
    animationConfigs = animationConfigs.animationConfigs;
    const index = animationConfigs.index;
    let num = 0;
    if (undefined !== index) {
      num = index;
    }
    ({ snapPoints, initialPosition } = animationConfigs);
    if (undefined === initialPosition) {
      let tmp = animationConfigs;
      let tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
      initialPosition = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_POSITION;
    }
    DEFAULT_ANIMATE_ON_MOUNT = animationConfigs.animateOnMount;
    if (undefined === DEFAULT_ANIMATE_ON_MOUNT) {
      let tmp3 = animationConfigs;
      let tmp4 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ANIMATE_ON_MOUNT = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ANIMATE_ON_MOUNT;
    }
    let DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = animationConfigs.enableContentPanningGesture;
    if (undefined === DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
      let tmp5 = animationConfigs;
      let tmp6 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    }
    ({ enableOverDrag, enableHandlePanningGesture } = animationConfigs);
    if (undefined === enableOverDrag) {
      const tmp7 = animationConfigs;
      let tmp8 = DEFAULT_ANIMATE_ON_MOUNT;
      enableOverDrag = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_OVER_DRAG;
    }
    let DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = animationConfigs.enablePanDownToClose;
    if (undefined === DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE) {
      let tmp10 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    }
    let DEFAULT_DYNAMIC_SIZING = animationConfigs.enableDynamicSizing;
    if (undefined === DEFAULT_DYNAMIC_SIZING) {
      let tmp11 = animationConfigs;
      DEFAULT_DYNAMIC_SIZING = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_DYNAMIC_SIZING;
    }
    let DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = animationConfigs.overDragResistanceFactor;
    if (undefined === DEFAULT_OVER_DRAG_RESISTANCE_FACTOR) {
      DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    }
    const overrideReduceMotion = animationConfigs.overrideReduceMotion;
    ({ keyboardBehavior, style, containerStyle, backgroundStyle, handleStyle, handleIndicatorStyle, gestureEventsHandlersHook } = animationConfigs);
    if (undefined === keyboardBehavior) {
      let tmp15 = animationConfigs;
      keyboardBehavior = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_BEHAVIOR;
    }
    let DEFAULT_KEYBOARD_BLUR_BEHAVIOR = animationConfigs.keyboardBlurBehavior;
    if (undefined === DEFAULT_KEYBOARD_BLUR_BEHAVIOR) {
      DEFAULT_KEYBOARD_BLUR_BEHAVIOR = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    }
    let DEFAULT_KEYBOARD_INPUT_MODE = animationConfigs.android_keyboardInputMode;
    if (undefined === DEFAULT_KEYBOARD_INPUT_MODE) {
      DEFAULT_KEYBOARD_INPUT_MODE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_INPUT_MODE;
    }
    let DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = animationConfigs.enableBlurKeyboardOnGesture;
    if (undefined === DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE) {
      DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    }
    let DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = animationConfigs.keyboardIncludeBottomOffset;
    if (undefined === DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET) {
      DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    }
    const containerHeight = animationConfigs.containerHeight;
    ({ containerOffset, topInset } = animationConfigs);
    let num2 = 0;
    if (undefined !== topInset) {
      num2 = topInset;
    }
    const bottomInset = animationConfigs.bottomInset;
    let num3 = 0;
    if (undefined !== bottomInset) {
      num3 = bottomInset;
    }
    ({ maxDynamicContentSize, contentHeight, handleHeight, animatedPosition } = animationConfigs);
    const animatedIndex = animationConfigs.animatedIndex;
    const simultaneousHandlers = animationConfigs.simultaneousHandlers;
    const waitFor = animationConfigs.waitFor;
    const activeOffsetX = animationConfigs.activeOffsetX;
    const activeOffsetY = animationConfigs.activeOffsetY;
    const failOffsetX = animationConfigs.failOffsetX;
    const failOffsetY = animationConfigs.failOffsetY;
    const onChange = animationConfigs.onChange;
    const onClose = animationConfigs.onClose;
    const onAnimate = animationConfigs.onAnimate;
    const $modal = animationConfigs.$modal;
    const detached = animationConfigs.detached;
    __initData = tmp26;
    const handleComponent = animationConfigs.handleComponent;
    ({ backdropComponent, backgroundComponent, renderFooter, accessible, children, BodyComponent } = animationConfigs);
    if (undefined === accessible) {
      accessible = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ACCESSIBLE;
    }
    let DEFAULT_ACCESSIBILITY_LABEL = animationConfigs.accessibilityLabel;
    if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
      DEFAULT_ACCESSIBILITY_LABEL = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ACCESSIBILITY_LABEL;
    }
    let DEFAULT_ACCESSIBILITY_ROLE = animationConfigs.accessibilityRole;
    if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
      DEFAULT_ACCESSIBILITY_ROLE = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).DEFAULT_ACCESSIBILITY_ROLE;
    }
    const tmp33 = animationConfigs;
    const tmp34 = DEFAULT_ANIMATE_ON_MOUNT;
    let INITIAL_CONTAINER_HEIGHT = containerHeight;
    const useReactiveSharedValue = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[6]).useReactiveSharedValue;
    const tmp35 = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[6]);
    if (containerHeight == null) {
      INITIAL_CONTAINER_HEIGHT = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    const reactiveSharedValue = useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT);
    let fn = function _() {
      value = reactiveSharedValue.value;
      return __initData ? value - (num2 + num3) : value;
    };
    fn.__closure = { topInset: num2, bottomInset: num3, $modal: undefined !== $modal && $modal, _animatedContainerHeight: reactiveSharedValue };
    fn.__workletHash = 4416945277961;
    fn.__initData = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    const items = [num2, num3, undefined !== $modal && $modal, reactiveSharedValue];
    const tmp33Result = tmp33(tmp34[4]);
    const derivedValue = tmp33Result.useDerivedValue(fn, items);
    const useReactiveSharedValue2 = tmp33(tmp34[6]).useReactiveSharedValue;
    tmp33(tmp34[6]);
    if (containerOffset == null) {
      containerOffset = tmp33(tmp34[5]).INITIAL_CONTAINER_OFFSET;
    }
    const reactiveSharedValue2 = useReactiveSharedValue2(containerOffset);
    const useReactiveSharedValue3 = tmp33(tmp34[6]).useReactiveSharedValue;
    tmp33(tmp34[6]);
    if (handleHeight == null) {
      handleHeight = tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT;
    }
    const reactiveSharedValue3 = useReactiveSharedValue3(handleHeight);
    const tmp33Result48 = tmp33(tmp34[4]);
    const sharedValue = tmp33Result48.useSharedValue(0);
    const useSharedValue = tmp33(tmp34[4]).useSharedValue;
    tmp33(tmp34[4]);
    if (contentHeight == null) {
      contentHeight = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    const sharedValue1 = useSharedValue(contentHeight);
    const tmp33Result50 = tmp33(tmp34[6]);
    const tmp45 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE(tmp33Result50.useAnimatedSnapPoints(snapPoints, derivedValue, sharedValue1, reactiveSharedValue3, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize), 2);
    const animatedSnapPoints = tmp45[0];
    __initData2 = tmp47;
    const tmp33Result51 = tmp33(tmp34[4]);
    class I {
      constructor() {
        return first.value[first.value.length - 1];
      }
    }
    I.__closure = { animatedSnapPoints };
    I.__workletHash = 2910694947130;
    I.__initData = containerHeight;
    const items1 = [animatedSnapPoints];
    const derivedValue1 = tmp33Result51.useDerivedValue(I, items1);
    const tmp33Result52 = tmp33(tmp34[4]);
    class E {
      constructor() {
        let sum = derivedValue.value;
        const tmp = __initData || closure_28;
        if (tmp) {
          sum = derivedValue.value + num3;
        }
        return sum;
      }
    }
    E.__closure = { animatedContainerHeight: derivedValue, $modal: undefined !== $modal && $modal, detached: undefined !== detached && detached, bottomInset: num3 };
    E.__workletHash = 1052527833249;
    E.__initData = num2;
    const items2 = [derivedValue, undefined !== $modal && $modal, undefined !== detached && detached, num3];
    const derivedValue2 = tmp33Result52.useDerivedValue(E, items2);
    const tmp33Result53 = tmp33(tmp34[4]);
    class X {
      constructor() {
        return derivedValue.value - derivedValue1.value;
      }
    }
    X.__closure = { animatedContainerHeight: derivedValue, animatedHighestSnapPoint: derivedValue1 };
    X.__workletHash = 12626261619737;
    X.__initData = num3;
    const items3 = [derivedValue, derivedValue1];
    const derivedValue3 = tmp33Result53.useDerivedValue(X, items3);
    let num4 = -1;
    const useReactiveSharedValue4 = tmp33(tmp34[6]).useReactiveSharedValue;
    tmp33(tmp34[6]);
    if (!DEFAULT_ANIMATE_ON_MOUNT) {
      num4 = num;
    }
    const reactiveSharedValue4 = useReactiveSharedValue4(num4);
    const tmp33Result55 = tmp33(tmp34[4]);
    const sharedValue2 = tmp33Result55.useSharedValue(initialPosition);
    const tmp33Result56 = tmp33(tmp34[4]);
    const sharedValue3 = tmp33Result56.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    const tmp33Result57 = tmp33(tmp34[4]);
    const sharedValue4 = tmp33Result57.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    let tmp57 = !DEFAULT_ANIMATE_ON_MOUNT;
    const useSharedValue2 = tmp33(tmp34[4]).useSharedValue;
    tmp33(tmp34[4]);
    if (DEFAULT_ANIMATE_ON_MOUNT) {
      tmp57 = -1 === num;
    }
    const sharedValue21 = useSharedValue2(tmp57);
    const tmp33Result59 = tmp33(tmp34[4]);
    const sharedValue5 = tmp33Result59.useSharedValue(false);
    const fn2 = function $() {
      let flag = false;
      const tmp2 = null === containerHeight && undefined === tmp;
      if (!tmp2) {
        flag = true;
      }
      if (derivedValue.value !== DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
        flag = true;
      }
      let flag2 = false;
      if (null === handleComponent) {
        reactiveSharedValue3.value = 0;
        flag2 = true;
      }
      if (reactiveSharedValue3.value !== DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT) {
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
    const tmp33Result60 = tmp33(tmp34[4]);
    let obj = { _providedContainerHeight: containerHeight, animatedContainerHeight: derivedValue, INITIAL_CONTAINER_HEIGHT: tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT, handleComponent, animatedHandleHeight: reactiveSharedValue3, INITIAL_HANDLE_HEIGHT: tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT, animatedSnapPoints, INITIAL_SNAP_POINT: tmp33(tmp34[5]).INITIAL_SNAP_POINT };
    fn2.__closure = obj;
    fn2.__workletHash = 16854996685215;
    fn2.__initData = animatedPosition;
    const items4 = [containerHeight, derivedValue, reactiveSharedValue3, animatedSnapPoints, handleComponent];
    const derivedValue4 = tmp33Result60.useDerivedValue(fn2, items4);
    const tmp33Result61 = tmp33(tmp34[4]);
    const sharedValue6 = tmp33Result61.useSharedValue(false);
    const tmp33Result62 = tmp33(tmp34[4]);
    const sharedValue7 = tmp33Result62.useSharedValue(false);
    const tmp33Result63 = tmp33(tmp34[4]);
    const sharedValue8 = tmp33Result63.useSharedValue(false);
    const tmp33Result64 = tmp33(tmp34[4]);
    const sharedValue9 = tmp33Result64.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    const tmp33Result65 = tmp33(tmp34[4]);
    const sharedValue10 = tmp33Result65.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    const tmp33Result66 = tmp33(tmp34[6]);
    const scrollable = tmp33Result66.useScrollable();
    const animatedScrollableType = scrollable.animatedScrollableType;
    const animatedScrollableContentOffsetY = scrollable.animatedScrollableContentOffsetY;
    const animatedScrollableOverrideState = scrollable.animatedScrollableOverrideState;
    const isScrollableRefreshable = scrollable.isScrollableRefreshable;
    const setScrollableRef = scrollable.setScrollableRef;
    const removeScrollableRef = scrollable.removeScrollableRef;
    const tmp33Result67 = tmp33(tmp34[6]);
    const keyboard = tmp33Result67.useKeyboard({ includeBottomOffset: DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET });
    const state = keyboard.state;
    const height = keyboard.height;
    const animationDuration = keyboard.animationDuration;
    const animationEasing = keyboard.animationEasing;
    const shouldHandleKeyboardEvents = keyboard.shouldHandleKeyboardEvents;
    const tmp33Result68 = tmp33(tmp34[4]);
    const sharedValue11 = tmp33Result68.useSharedValue(0);
    const tmp33Result69 = tmp33(tmp34[4]);
    const reducedMotion = tmp33Result69.useReducedMotion();
    const items5 = [reducedMotion, overrideReduceMotion];
    const tmp70 = enableOverDrag(() => {
      if (overrideReduceMotion) {
        let tmp4;
        if (overrideReduceMotion !== _mod1643.ReduceMotion.System) {
          tmp4 = overrideReduceMotion === _mod1643.ReduceMotion.Always;
        }
        return tmp4;
      }
      tmp4 = reducedMotion;
    }, items5);
    let closure_66 = tmp70;
    const tmp33Result70 = tmp33(tmp34[4]);
    const sharedValue12 = tmp33Result70.useSharedValue(tmp33(tmp34[8]).ANIMATION_STATE.UNDETERMINED);
    const tmp33Result71 = tmp33(tmp34[4]);
    const sharedValue13 = tmp33Result71.useSharedValue(tmp33(tmp34[8]).ANIMATION_SOURCE.MOUNT);
    const tmp33Result72 = tmp33(tmp34[4]);
    class Z {
      constructor() {
        if (sharedValue2.value >= derivedValue2.value) {
          return GESTURE_SOURCE.SHEET_STATE.CLOSED;
        } else {
          const diff = derivedValue.value - derivedValue3.value;
          if (sharedValue2.value === diff) {
            return GESTURE_SOURCE.SHEET_STATE.EXTENDED;
          } else {
            let OPENED;
            const _Math = Math;
            const bound = Math.max(0, iter2.value - (iter3.value + sharedValue11.value));
            if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.interactive) {
              if (sharedValue6.value) {
                if (sharedValue2.value === bound) {
                  OPENED = GESTURE_SOURCE.SHEET_STATE.EXTENDED;
                }
                return OPENED;
              }
            }
            if (0 === sharedValue2.value) {
              OPENED = GESTURE_SOURCE.SHEET_STATE.FILL_PARENT;
            } else if (sharedValue2.value < diff) {
              OPENED = GESTURE_SOURCE.SHEET_STATE.OVER_EXTENDED;
            } else {
              OPENED = GESTURE_SOURCE.SHEET_STATE.OPENED;
            }
          }
        }
      }
    }
    let obj2 = { animatedPosition: sharedValue2, animatedClosedPosition: derivedValue2, SHEET_STATE: tmp33(tmp34[8]).SHEET_STATE, animatedContainerHeight: derivedValue, animatedSheetHeight: derivedValue3, animatedKeyboardHeightInContainer: sharedValue11, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, isInTemporaryPosition: sharedValue6 };
    Z.__closure = obj2;
    Z.__workletHash = 5310633624984;
    Z.__initData = animatedIndex;
    const items6 = [derivedValue2, derivedValue, sharedValue11, sharedValue2, derivedValue3, sharedValue6, keyboardBehavior];
    const derivedValue5 = tmp33Result72.useDerivedValue(Z, items6);
    const fn3 = function q() {
      let UNLOCKED;
      if (DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
        let UNLOCKED2;
        if (animatedScrollableOverrideState.value !== GESTURE_SOURCE.SCROLLABLE_STATE.UNDETERMINED) {
          UNLOCKED2 = animatedScrollableOverrideState.value;
        } else {
          if (derivedValue5.value !== GESTURE_SOURCE.SHEET_STATE.FILL_PARENT) {
            if (derivedValue5.value !== GESTURE_SOURCE.SHEET_STATE.EXTENDED) {
              UNLOCKED2 = GESTURE_SOURCE.SCROLLABLE_STATE.LOCKED;
            }
          }
          UNLOCKED2 = GESTURE_SOURCE.SCROLLABLE_STATE.UNLOCKED;
        }
        UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = GESTURE_SOURCE.SCROLLABLE_STATE.UNLOCKED;
      }
      return UNLOCKED;
    };
    const tmp33Result73 = tmp33(tmp34[4]);
    let obj3 = { enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, SCROLLABLE_STATE: tmp33(tmp34[8]).SCROLLABLE_STATE, animatedScrollableOverrideState, animatedSheetState: derivedValue5, SHEET_STATE: tmp33(tmp34[8]).SHEET_STATE, animatedKeyboardState: state, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE };
    fn3.__closure = obj3;
    fn3.__workletHash = 1522258685135;
    fn3.__initData = simultaneousHandlers;
    const items7 = [DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, sharedValue12, state, animatedScrollableOverrideState, derivedValue5];
    const derivedValue6 = tmp33Result73.useDerivedValue(fn3, items7);
    const tmp33Result74 = tmp33(tmp34[4]);
    class Q {
      constructor() {
        let bound;
        value2 = first.value;
        const substr = value2.slice();
        const reversed = substr.reverse();
        value4 = first.value;
        const substr1 = value4.slice();
        const mapped = substr1.map((item, index) => index);
        const reversed1 = mapped.reverse();
        reversed.push(derivedValue.value);
        reversed1.push(-1);
        num = -1;
        if (derivedValue4.value) {
          value = sharedValue2.value;
          const obj3 = _mod1643;
          num = obj3.interpolate(value, reversed, reversed1, _mod1643.Extrapolation.CLAMP);
        }
        if (DEFAULT_KEYBOARD_INPUT_MODE === GESTURE_SOURCE.KEYBOARD_INPUT_MODE.adjustResize) {
          if (sharedValue13.value === GESTURE_SOURCE.ANIMATION_SOURCE.KEYBOARD) {
            if (sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
              if (sharedValue6.value) {
                const _Math = Math;
                bound = Math.max(reactiveSharedValue4.value, num);
              }
              return bound;
            }
          }
        }
        bound = num;
        if (sharedValue13.value === GESTURE_SOURCE.ANIMATION_SOURCE.SNAP_POINT_CHANGE) {
          bound = num;
          if (sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
            bound = sharedValue4.value;
          }
        }
      }
    }
    Q.__closure = { animatedSnapPoints, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, interpolate: tmp33(tmp34[4]).interpolate, animatedPosition: sharedValue2, Extrapolation: tmp33(tmp34[4]).Extrapolation, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: tmp33(tmp34[8]).KEYBOARD_INPUT_MODE, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, isInTemporaryPosition: sharedValue6, animatedCurrentIndex: reactiveSharedValue4, animatedNextPositionIndex: sharedValue4 };
    Q.__workletHash = 1383862303157;
    Q.__initData = waitFor;
    const items8 = [DEFAULT_KEYBOARD_INPUT_MODE, sharedValue13, sharedValue12, derivedValue, reactiveSharedValue4, sharedValue4, sharedValue2, animatedSnapPoints, sharedValue6, derivedValue4];
    ({ animatedSnapPoints, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, interpolate: tmp33(tmp34[4]).interpolate, animatedPosition: sharedValue2, Extrapolation: tmp33(tmp34[4]).Extrapolation, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: tmp33(tmp34[8]).KEYBOARD_INPUT_MODE, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, isInTemporaryPosition: sharedValue6, animatedCurrentIndex: reactiveSharedValue4, animatedNextPositionIndex: sharedValue4 });
    const derivedValue7 = tmp33Result74.useDerivedValue(Q, items8);
    const items9 = [onChange, reactiveSharedValue4, tmp45[1]];
    const tmp76 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(function handleOnChange(arg0, arg1) {
      if (onChange) {
        let PROVIDED;
        if (arg0 === value.value) {
          PROVIDED = GESTURE_SOURCE.SNAP_POINT_TYPE.DYNAMIC;
        } else {
          PROVIDED = GESTURE_SOURCE.SNAP_POINT_TYPE.PROVIDED;
        }
        tmp(arg0, arg1, PROVIDED);
      }
    }, items9);
    let closure_72 = tmp76;
    const items10 = [onAnimate, reactiveSharedValue4, sharedValue2];
    const tmp77 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(function handleOnAnimate(arg0, arg1, arg2) {
      if (onAnimate) {
        const tmp3 = arg0 === reactiveSharedValue4.value && -1 !== arg0;
        if (!tmp3) {
          tmp(reactiveSharedValue4.value, arg0, sharedValue2.value, arg1, arg2);
        }
      }
    }, items10);
    let closure_73 = tmp77;
    function ee() {
      const obj = _mod1643;
      obj.cancelAnimation(sharedValue2);
      sharedValue13.value = GESTURE_SOURCE.ANIMATION_SOURCE.NONE;
      sharedValue12.value = GESTURE_SOURCE.ANIMATION_STATE.STOPPED;
    }
    const tmp33Result75 = tmp33(tmp34[4]);
    ee.__closure = { cancelAnimation: tmp33(tmp34[4]).cancelAnimation, animatedPosition: sharedValue2, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE };
    ee.__workletHash = 17031011772977;
    ee.__initData = activeOffsetX;
    const items11 = [sharedValue2, sharedValue12, sharedValue13];
    ({ cancelAnimation: tmp33(tmp34[4]).cancelAnimation, animatedPosition: sharedValue2, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE });
    const workletCallback = tmp33Result75.useWorkletCallback(ee, items11);
    function animateToPositionCompleted(arg0) {
      const tmp = arg0;
      if (tmp) {
        if (sharedValue13.value === GESTURE_SOURCE.ANIMATION_SOURCE.MOUNT) {
          sharedValue21.value = true;
        }
        sharedValue7.value = false;
        sharedValue13.value = GESTURE_SOURCE.ANIMATION_SOURCE.NONE;
        sharedValue12.value = GESTURE_SOURCE.ANIMATION_STATE.STOPPED;
        sharedValue3.value = DEFAULT_HANDLE_HEIGHT.INITIAL_VALUE;
        sharedValue4.value = DEFAULT_HANDLE_HEIGHT.INITIAL_VALUE;
        sharedValue8.value = false;
      }
    }
    const tmp33Result76 = tmp33(tmp34[4]);
    animateToPositionCompleted.__closure = { __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, animatedCurrentIndex: reactiveSharedValue4, animatedNextPosition: sharedValue3, animatedNextPositionIndex: sharedValue4, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, isAnimatedOnMount: sharedValue21, isForcedClosing: sharedValue7, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, INITIAL_VALUE: tmp33(tmp34[5]).INITIAL_VALUE, animatedContainerHeightDidChange: sharedValue8 };
    animateToPositionCompleted.__workletHash = 16634512058026;
    animateToPositionCompleted.__initData = activeOffsetY;
    ({ __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, animatedCurrentIndex: reactiveSharedValue4, animatedNextPosition: sharedValue3, animatedNextPositionIndex: sharedValue4, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, isAnimatedOnMount: sharedValue21, isForcedClosing: sharedValue7, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, INITIAL_VALUE: tmp33(tmp34[5]).INITIAL_VALUE, animatedContainerHeightDidChange: sharedValue8 });
    const workletCallback1 = tmp33Result76.useWorkletCallback(animateToPositionCompleted);
    function animateToPosition(initialPosition, GESTURE, arg2) {
      num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      if (initialPosition !== sharedValue2.value) {
        if (undefined !== initialPosition) {
          if (sharedValue12.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
            if (sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
              workletCallback();
            }
            sharedValue12.value = GESTURE_SOURCE.ANIMATION_STATE.RUNNING;
            sharedValue13.value = GESTURE;
            sharedValue3.value = initialPosition;
            num2 = 0;
            const tmp8 = state.value === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN && keyboardBehavior !== GESTURE_SOURCE.KEYBOARD_BEHAVIOR.extend && initialPosition < sharedValue2.value;
            if (tmp8) {
              num2 = sharedValue11.value;
            }
            let tmp11 = arg3;
            value = first.value;
            sharedValue4.value = value.indexOf(initialPosition + num2);
            const tmp19Result = _mod1643;
            tmp19Result.runOnJS(closure_73)(sharedValue4.value, initialPosition, GESTURE);
            const obj = { point: initialPosition, configs: tmp11, velocity: num, overrideReduceMotion, onComplete: workletCallback1 };
            const animate = normalizeSnapPoint.animate;
            normalizeSnapPoint;
            if (!arg3) {
              tmp11 = animationConfigs;
            }
            sharedValue2.value = animate(obj);
          }
        }
      }
    }
    const tmp33Result77 = tmp33(tmp34[4]);
    animateToPosition.__closure = { __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, animatedPosition: sharedValue2, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedAnimationSource: sharedValue13, animatedKeyboardState: state, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, animatedKeyboardHeightInContainer: sharedValue11, animatedNextPositionIndex: sharedValue4, animatedSnapPoints, handleOnAnimate: tmp77, animate: tmp33(tmp34[9]).animate, _providedAnimationConfigs: animationConfigs, _providedOverrideReduceMotion: overrideReduceMotion, animateToPositionCompleted: workletCallback1 };
    animateToPosition.__workletHash = 11829586443894;
    animateToPosition.__initData = failOffsetX;
    const items12 = [tmp77, keyboardBehavior, animationConfigs, overrideReduceMotion];
    ({ __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, animatedPosition: sharedValue2, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedAnimationSource: sharedValue13, animatedKeyboardState: state, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, animatedKeyboardHeightInContainer: sharedValue11, animatedNextPositionIndex: sharedValue4, animatedSnapPoints, handleOnAnimate: tmp77, animate: tmp33(tmp34[9]).animate, _providedAnimationConfigs: animationConfigs, _providedOverrideReduceMotion: overrideReduceMotion, animateToPositionCompleted: workletCallback1 });
    const workletCallback2 = tmp33Result77.useWorkletCallback(animateToPosition, items12);
    function setToPosition(value) {
      let tmp2 = value === sharedValue2.value || undefined === value;
      if (!tmp2) {
        tmp2 = sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING && value === sharedValue3.value;
        const tmp6 = sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING && value === sharedValue3.value;
      }
      if (!tmp2) {
        sharedValue3.value = value;
        value = first.value;
        sharedValue4.value = value.indexOf(value);
        workletCallback();
        sharedValue2.value = value;
        sharedValue8.value = false;
      }
    }
    const tmp33Result78 = tmp33(tmp34[4]);
    setToPosition.__closure = { animatedPosition: sharedValue2, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, animatedNextPositionIndex: sharedValue4, animatedSnapPoints, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue8 };
    setToPosition.__workletHash = 1470510512522;
    setToPosition.__initData = failOffsetY;
    ({ animatedPosition: sharedValue2, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, animatedNextPositionIndex: sharedValue4, animatedSnapPoints, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue8 });
    const workletCallback3 = tmp33Result78.useWorkletCallback(setToPosition, []);
    function getEvaluatedPosition(arg0) {
      let value5;
      value = reactiveSharedValue4.value;
      value2 = first.value;
      value3 = state.value;
      value4 = derivedValue1.value;
      if (arg0 === GESTURE_SOURCE.ANIMATION_SOURCE.KEYBOARD) {
        if (DEFAULT_KEYBOARD_BLUR_BEHAVIOR === GESTURE_SOURCE.KEYBOARD_BLUR_BEHAVIOR.restore) {
          if (value3 === GESTURE_SOURCE.KEYBOARD_STATE.HIDDEN) {
            if (sharedValue9.value !== LegacyBaseButton.State.ACTIVE) {
              if (sharedValue10.value !== LegacyBaseButton.State.ACTIVE) {
                sharedValue6.value = false;
                return value2[value];
              }
            }
          }
        }
      }
      if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.extend) {
        if (value3 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
          return value4;
        }
      }
      if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.fillParent) {
        if (value3 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
          sharedValue6.value = true;
          return 0;
        }
      }
      if (keyboardBehavior === GESTURE_SOURCE.KEYBOARD_BEHAVIOR.interactive) {
        if (value3 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
          if ("adjustResize" !== DEFAULT_KEYBOARD_INPUT_MODE) {
            sharedValue6.value = true;
            const _Math = Math;
            return Math.max(0, value4 - sharedValue11.value);
          }
        }
      }
      if (sharedValue6.value) {
        value5 = sharedValue2.value;
      } else if (sharedValue21.value) {
        value5 = value2[value];
      } else if (-1 === -1) {
        value5 = derivedValue2.value;
      } else {
        value5 = value2[tmp8];
      }
      return value5;
    }
    const tmp33Result79 = tmp33(tmp34[4]);
    getEvaluatedPosition.__closure = { animatedCurrentIndex: reactiveSharedValue4, animatedSnapPoints, animatedKeyboardState: state, animatedHighestSnapPoint: derivedValue1, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedContentGestureState: sharedValue9, State: tmp33(tmp34[7]).State, animatedHandleGestureState: sharedValue10, isInTemporaryPosition: sharedValue6, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, animatedKeyboardHeightInContainer: sharedValue11, animatedPosition: sharedValue2, isAnimatedOnMount: sharedValue21, _providedIndex: num, animatedClosedPosition: derivedValue2 };
    getEvaluatedPosition.__workletHash = 10275779842691;
    getEvaluatedPosition.__initData = onChange;
    const items13 = [sharedValue9, reactiveSharedValue4, sharedValue10, derivedValue1, sharedValue11, state, sharedValue2, animatedSnapPoints, sharedValue6, sharedValue21, keyboardBehavior, DEFAULT_KEYBOARD_BLUR_BEHAVIOR, num];
    ({ animatedCurrentIndex: reactiveSharedValue4, animatedSnapPoints, animatedKeyboardState: state, animatedHighestSnapPoint: derivedValue1, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedContentGestureState: sharedValue9, State: tmp33(tmp34[7]).State, animatedHandleGestureState: sharedValue10, isInTemporaryPosition: sharedValue6, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, animatedKeyboardHeightInContainer: sharedValue11, animatedPosition: sharedValue2, isAnimatedOnMount: sharedValue21, _providedIndex: num, animatedClosedPosition: derivedValue2 });
    const workletCallback4 = tmp33Result79.useWorkletCallback(getEvaluatedPosition, items13);
    function evaluatePosition(arg0, arg1) {
      if (!sharedValue7.value) {
        if (derivedValue4.value) {
          const tmp6 = workletCallback4(arg0);
          if (sharedValue21.value) {
            if (sharedValue8.value) {
              workletCallback3(tmp6);
            } else {
              if (sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
                if (-1 === sharedValue4.value) {
                  if (!sharedValue6.value) {
                    workletCallback3(derivedValue2.value);
                  }
                }
                if (sharedValue4.value !== reactiveSharedValue4.value) {
                  workletCallback2(first.value[sharedValue4.value], arg0, undefined, arg1);
                }
              }
              if (sharedValue12.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
                if (-1 === derivedValue7.value) {
                  workletCallback3(derivedValue2.value);
                }
              }
              workletCallback2(tmp6, arg0, undefined, arg1);
            }
          } else if (DEFAULT_ANIMATE_ON_MOUNT) {
            workletCallback2(tmp6, GESTURE_SOURCE.ANIMATION_SOURCE.MOUNT, undefined, arg1);
          } else {
            workletCallback3(tmp6);
            tmp7.value = true;
          }
        }
      }
    }
    const tmp33Result80 = tmp33(tmp34[4]);
    evaluatePosition.__closure = { isForcedClosing: sharedValue7, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, isLayoutCalculated: derivedValue4, getEvaluatedPosition: workletCallback4, isAnimatedOnMount: sharedValue21, animateOnMount: DEFAULT_ANIMATE_ON_MOUNT, animateToPosition: workletCallback2, setToPosition: workletCallback3, animatedContainerHeightDidChange: sharedValue8, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPositionIndex: sharedValue4, isInTemporaryPosition: sharedValue6, animatedClosedPosition: derivedValue2, animatedCurrentIndex: reactiveSharedValue4, animatedSnapPoints, animatedIndex: derivedValue7, reduceMotion: tmp70, animatedPosition: sharedValue2 };
    evaluatePosition.__workletHash = 1750740918731;
    evaluatePosition.__initData = onClose;
    const items14 = [workletCallback4, workletCallback2, workletCallback3, tmp70];
    ({ isForcedClosing: sharedValue7, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, isLayoutCalculated: derivedValue4, getEvaluatedPosition: workletCallback4, isAnimatedOnMount: sharedValue21, animateOnMount: DEFAULT_ANIMATE_ON_MOUNT, animateToPosition: workletCallback2, setToPosition: workletCallback3, animatedContainerHeightDidChange: sharedValue8, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPositionIndex: sharedValue4, isInTemporaryPosition: sharedValue6, animatedClosedPosition: derivedValue2, animatedCurrentIndex: reactiveSharedValue4, animatedSnapPoints, animatedIndex: derivedValue7, reduceMotion: tmp70, animatedPosition: sharedValue2 });
    const workletCallback5 = tmp33Result80.useWorkletCallback(evaluatePosition, items14);
    const tmp33Result81 = tmp33(tmp34[6]);
    const stableCallback = tmp33Result81.useStableCallback(function handleSnapToIndex(arg0, arg1) {
      value2 = first.get();
      if (derivedValue4.get()) {
        let tmp5 = arg0 >= -1;
        const tmp4 = _modDef38;
        if (tmp5) {
          tmp5 = arg0 <= value2.length - 1;
        }
        tmp4(tmp5, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        value = derivedValue4.value && arg0 !== sharedValue4.value && tmp7 !== sharedValue3.value && !sharedValue7.value;
        if (value) {
          sharedValue6.value = false;
          const obj = _mod1643;
          const runOnUIResult = obj.runOnUI(workletCallback2);
          runOnUIResult(value2[arg0], GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg1);
        }
      }
    });
    function handleSnapToPosition(item, arg1) {
      const obj = normalizeSnapPoint;
      const normalizeSnapPointResult = obj.normalizeSnapPoint(item, derivedValue.value);
      const tmp4 = derivedValue4 && normalizeSnapPointResult !== sharedValue3.value && !sharedValue7.value;
      if (tmp4) {
        sharedValue6.value = true;
        const tmpResult = _mod1643;
        const runOnUIResult = tmpResult.runOnUI(workletCallback2);
        runOnUIResult(normalizeSnapPointResult, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg1);
      }
    }
    const tmp33Result82 = tmp33(tmp34[4]);
    handleSnapToPosition.__closure = { __DEV__: false, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, normalizeSnapPoint: tmp33(tmp34[9]).normalizeSnapPoint, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, animatedNextPosition: sharedValue3, isForcedClosing: sharedValue7, isInTemporaryPosition: sharedValue6, runOnUI: tmp33(tmp34[4]).runOnUI, animateToPosition: workletCallback2, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE };
    handleSnapToPosition.__workletHash = 15646490046918;
    handleSnapToPosition.__initData = onAnimate;
    const items15 = [workletCallback2, num3, num2, derivedValue4, sharedValue7, derivedValue, sharedValue2];
    ({ __DEV__: false, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, normalizeSnapPoint: tmp33(tmp34[9]).normalizeSnapPoint, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, animatedNextPosition: sharedValue3, isForcedClosing: sharedValue7, isInTemporaryPosition: sharedValue6, runOnUI: tmp33(tmp34[4]).runOnUI, animateToPosition: workletCallback2, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE });
    const workletCallback6 = tmp33Result82.useWorkletCallback(handleSnapToPosition, items15);
    const tmp33Result83 = tmp33(tmp34[6]);
    const stableCallback1 = tmp33Result83.useStableCallback(function handleSetToIndex(index, arg1) {
      value = first.get();
      if (derivedValue4.get()) {
        let tmp4 = index >= -1;
        const tmp3 = num(DEFAULT_ANIMATE_ON_MOUNT[10]);
        if (tmp4) {
          tmp4 = index <= value.length - 1;
        }
        tmp3(tmp4, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
        if (!sharedValue7.value) {
          if (undefined !== arg1) {
            let bound;
            const _Number = Number;
            if (Number.isFinite(arg1)) {
              const _Math = Math;
              bound = Math.max(0, arg1);
            }
            if (undefined !== bound) {
              sharedValue6.value = false;
              const fn = function u() {
                if (bound === sharedValue2.value) {
                  if (value === sharedValue4.value) {
                    if (sharedValue12.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
                      reactiveSharedValue4.value = tmp3;
                    }
                  }
                }
                sharedValue3.value = bound;
                sharedValue4.value = value;
                reactiveSharedValue4.value = value;
                workletCallback();
                sharedValue2.value = bound;
                sharedValue8.value = false;
              };
              const obj = { nextPosition: bound, animatedPosition: sharedValue2, index, animatedNextPositionIndex: sharedValue4, animatedAnimationState: sharedValue12, ANIMATION_STATE: animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE, animatedCurrentIndex: reactiveSharedValue4, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue8 };
              const runOnUI = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI;
              animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
              fn.__closure = obj;
              fn.__workletHash = 13567407937738;
              fn.__initData = __initData;
              runOnUI(fn)();
            }
          }
          bound = value[index];
        }
      }
    });
    const tmp33Result84 = tmp33(tmp34[6]);
    const stableCallback2 = tmp33Result84.useStableCallback(function handleSetToPosition(item) {
      if (derivedValue4.get()) {
        if (!sharedValue7.value) {
          sharedValue6.value = true;
          const obj = normalizeSnapPoint;
          const normalizeSnapPointResult = obj.normalizeSnapPoint(item, derivedValue.get());
          const obj2 = _mod1643;
          obj2.runOnUI(workletCallback3)(normalizeSnapPointResult);
        }
      }
    });
    const items16 = [workletCallback2, sharedValue7, derivedValue4, sharedValue6, sharedValue3, derivedValue2];
    const tmp88 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(function handleClose(arg0) {
      value = derivedValue2.value;
      value2 = derivedValue4.value && value !== sharedValue3.value && !sharedValue7.value;
      if (value2) {
        sharedValue6.value = false;
        const obj = _mod1643;
        const runOnUIResult = obj.runOnUI(workletCallback2);
        runOnUIResult(value, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items16);
    const close = tmp88;
    const items17 = [workletCallback2, sharedValue7, sharedValue6, sharedValue3, derivedValue2];
    const tmp89 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(function handleForceClose(arg0) {
      value = derivedValue2.value;
      value2 = value === sharedValue3.value || sharedValue7.value;
      if (!value2) {
        sharedValue6.value = false;
        sharedValue7.value = true;
        const obj = _mod1643;
        const runOnUIResult = obj.runOnUI(workletCallback2);
        runOnUIResult(value, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items17);
    const forceClose = tmp89;
    const items18 = [workletCallback2, sharedValue6, derivedValue4, sharedValue7, animatedSnapPoints, sharedValue3, sharedValue4];
    const tmp90 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(function handleExpand(arg0) {
      value2 = first.value;
      value = derivedValue4.value && value2.length - 1 !== sharedValue4.value && tmp !== sharedValue3.value && !sharedValue7.value;
      if (value) {
        sharedValue6.value = false;
        const obj = _mod1643;
        const runOnUIResult = obj.runOnUI(workletCallback2);
        runOnUIResult(value2[value2.length - 1], GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items18);
    const expand = tmp90;
    const items19 = [workletCallback2, sharedValue7, derivedValue4, sharedValue6, animatedSnapPoints, sharedValue3, sharedValue4];
    const tmp91 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE(function handleCollapse(arg0) {
      first = first.value[0];
      const tmp2 = derivedValue4 && 0 !== sharedValue4.value && first !== sharedValue3.value && !sharedValue7.value;
      if (tmp2) {
        sharedValue6.value = false;
        const obj = _mod1643;
        const runOnUIResult = obj.runOnUI(workletCallback2);
        runOnUIResult(first, GESTURE_SOURCE.ANIMATION_SOURCE.USER, 0, arg0);
      }
    }, items19);
    const collapse = tmp91;
    DEFAULT_DYNAMIC_SIZING(arg1, () => ({ snapToIndex: stableCallback, snapToPosition: workletCallback6, setToIndex: stableCallback1, setToPosition: stableCallback2, expand, collapse, close, forceClose }));
    const items20 = [derivedValue7, sharedValue2, sharedValue1, derivedValue3, animatedScrollableType, sharedValue9, sharedValue10, derivedValue2, sharedValue, derivedValue, reactiveSharedValue3, sharedValue12, state, height, sharedValue11, derivedValue5, derivedValue1, derivedValue6, animatedScrollableOverrideState, animatedSnapPoints, shouldHandleKeyboardEvents, animatedScrollableContentOffsetY, isScrollableRefreshable, sharedValue5, sharedValue6, DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, DEFAULT_DYNAMIC_SIZING, DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, setScrollableRef, removeScrollableRef, workletCallback2, workletCallback];
    const items21 = [derivedValue7, sharedValue2, stableCallback, workletCallback6, stableCallback1, stableCallback2, tmp90, tmp91, tmp88, tmp89];
    const tmp93 = enableOverDrag(() => ({ enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, animatedAnimationState: sharedValue12, animatedSheetState: derivedValue5, animatedScrollableState: derivedValue6, animatedScrollableOverrideState, animatedContentGestureState: sharedValue9, animatedHandleGestureState: sharedValue10, animatedKeyboardState: state, animatedScrollableType, animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedSheetHeight: derivedValue3, animatedContentHeight: sharedValue1, animatedClosedPosition: derivedValue2, animatedHandleHeight: reactiveSharedValue3, animatedFooterHeight: sharedValue, animatedKeyboardHeight: height, animatedKeyboardHeightInContainer: sharedValue11, animatedContainerHeight: derivedValue, animatedSnapPoints, animatedHighestSnapPoint: derivedValue1, animatedScrollableContentOffsetY, isInTemporaryPosition: sharedValue6, isContentHeightFixed: sharedValue5, isScrollableRefreshable, shouldHandleKeyboardEvents, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, enableBlurKeyboardOnGesture: DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, animateToPosition: workletCallback2, stopAnimation: workletCallback, setScrollableRef, removeScrollableRef }), items20);
    const tmp94 = enableOverDrag(() => ({ animatedIndex: derivedValue7, animatedPosition: sharedValue2, snapToIndex: stableCallback, snapToPosition: workletCallback6, setToIndex: stableCallback1, setToPosition: stableCallback2, expand, collapse, close, forceClose }), items21);
    const tmp33Result85 = tmp33(tmp34[4]);
    class Da {
      constructor() {
        return derivedValue.value;
      }
    }
    Da.__closure = { animatedContainerHeight: derivedValue };
    Da.__workletHash = 10677623879887;
    Da.__initData = __initData;
    class Ha {
      constructor(arg0, arg1) {
        if (arg0 !== DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
          sharedValue8.value = arg0 !== arg1;
          const tmp4 = sharedValue12.value === GESTURE_SOURCE.ANIMATION_STATE.RUNNING && sharedValue13.value === GESTURE_SOURCE.ANIMATION_SOURCE.GESTURE && -1 === sharedValue4.value;
          if (tmp4) {
            workletCallback2(derivedValue2.value, GESTURE_SOURCE.ANIMATION_SOURCE.GESTURE);
          }
        }
      }
    }
    Ha.__closure = { INITIAL_CONTAINER_HEIGHT: tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT, animatedContainerHeightDidChange: sharedValue8, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedNextPositionIndex: sharedValue4, animateToPosition: workletCallback2, animatedClosedPosition: derivedValue2 };
    Ha.__workletHash = 6251604634325;
    Ha.__initData = handleComponent;
    ({ INITIAL_CONTAINER_HEIGHT: tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT, animatedContainerHeightDidChange: sharedValue8, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, animatedNextPositionIndex: sharedValue4, animateToPosition: workletCallback2, animatedClosedPosition: derivedValue2 });
    const animatedReaction = tmp33Result85.useAnimatedReaction(Da, Ha);
    function xa() {
      return first.value;
    }
    xa.__closure = { animatedSnapPoints };
    xa.__workletHash = 6214244679329;
    xa.__initData = reactiveSharedValue;
    function fa(arg0, arg1) {
      const json = JSON.stringify(arg0);
      value = json === JSON.stringify(arg1) && sharedValue21.value;
      if (!value) {
        if (derivedValue4.value) {
          workletCallback5(GESTURE_SOURCE.ANIMATION_SOURCE.SNAP_POINT_CHANGE);
        }
      }
    }
    const tmp33Result86 = tmp33(tmp34[4]);
    fa.__closure = { isAnimatedOnMount: sharedValue21, isLayoutCalculated: derivedValue4, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, evaluatePosition: workletCallback5, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE };
    fa.__workletHash = 4349647290337;
    fa.__initData = derivedValue;
    const items22 = [derivedValue4, animatedSnapPoints];
    ({ isAnimatedOnMount: sharedValue21, isLayoutCalculated: derivedValue4, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, evaluatePosition: workletCallback5, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE });
    const animatedReaction1 = tmp33Result86.useAnimatedReaction(xa, fa, items22);
    function ga() {
      return { _keyboardState: state.value, _keyboardHeight: height.value };
    }
    ga.__closure = { animatedKeyboardState: state, animatedKeyboardHeight: height };
    ga.__workletHash = 8321687383329;
    ga.__initData = reactiveSharedValue2;
    const tmp33Result87 = tmp33(tmp34[4]);
    class Ba {
      constructor(arg0, _keyboardState) {
        let _keyboardHeight;
        ({ _keyboardState, _keyboardHeight } = arg0);
        let _keyboardState1;
        if (_keyboardState != null) {
          _keyboardState1 = _keyboardState._keyboardState;
        }
        if (_keyboardState != null) {
          const _keyboardHeight2 = _keyboardState._keyboardHeight;
        }
        if (_keyboardState !== _keyboardState1) {
          if (_keyboardState !== GESTURE_SOURCE.KEYBOARD_STATE.UNDETERMINED) {
            num2 = 0;
            if (0 !== _keyboardHeight) {
              let absResult;
              const _Math = Math;
              if (__initData) {
                const _Math2 = Math;
                absResult = abs(_keyboardHeight - Math.abs(num3 - reactiveSharedValue2.value.bottom));
              } else {
                absResult = abs(_keyboardHeight - reactiveSharedValue2.value.bottom);
              }
              num2 = absResult;
            }
            sharedValue11.value = num2;
            if (DEFAULT_KEYBOARD_INPUT_MODE !== GESTURE_SOURCE.KEYBOARD_INPUT_MODE.adjustResize) {
              if (sharedValue9.value !== LegacyBaseButton.State.ACTIVE) {
                if (sharedValue9.value !== LegacyBaseButton.State.BEGAN) {
                  if (sharedValue10.value !== LegacyBaseButton.State.ACTIVE) {
                    if (sharedValue10.value !== LegacyBaseButton.State.BEGAN) {
                      if (_keyboardState !== GESTURE_SOURCE.KEYBOARD_STATE.HIDDEN) {
                        const tmp2Result = normalizeSnapPoint;
                        const keyboardAnimationConfigs = tmp2Result.getKeyboardAnimationConfigs(animationEasing.value, animationDuration.value);
                        workletCallback5(GESTURE_SOURCE.ANIMATION_SOURCE.KEYBOARD, keyboardAnimationConfigs);
                      }
                    }
                  }
                }
              }
            } else {
              sharedValue11.value = 0;
            }
          }
        }
      }
    }
    Ba.__closure = { KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, animatedKeyboardHeightInContainer: sharedValue11, $modal: undefined !== $modal && $modal, bottomInset: num3, animatedContainerOffset: reactiveSharedValue2, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: tmp33(tmp34[8]).KEYBOARD_INPUT_MODE, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, animatedContentGestureState: sharedValue9, State: tmp33(tmp34[7]).State, animatedHandleGestureState: sharedValue10, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, getKeyboardAnimationConfigs: tmp33(tmp34[9]).getKeyboardAnimationConfigs, keyboardAnimationEasing: animationEasing, keyboardAnimationDuration: animationDuration, evaluatePosition: workletCallback5 };
    Ba.__workletHash = 12581090930210;
    Ba.__initData = reactiveSharedValue3;
    const items23 = [undefined !== $modal && $modal, num3, keyboardBehavior, DEFAULT_KEYBOARD_BLUR_BEHAVIOR, DEFAULT_KEYBOARD_INPUT_MODE, reactiveSharedValue2, workletCallback4];
    ({ KEYBOARD_STATE: tmp33(tmp34[8]).KEYBOARD_STATE, animatedAnimationState: sharedValue12, ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedAnimationSource: sharedValue13, ANIMATION_SOURCE: tmp33(tmp34[8]).ANIMATION_SOURCE, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, animatedKeyboardHeightInContainer: sharedValue11, $modal: undefined !== $modal && $modal, bottomInset: num3, animatedContainerOffset: reactiveSharedValue2, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: tmp33(tmp34[8]).KEYBOARD_INPUT_MODE, keyboardBehavior, KEYBOARD_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BEHAVIOR, animatedContentGestureState: sharedValue9, State: tmp33(tmp34[7]).State, animatedHandleGestureState: sharedValue10, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR, getKeyboardAnimationConfigs: tmp33(tmp34[9]).getKeyboardAnimationConfigs, keyboardAnimationEasing: animationEasing, keyboardAnimationDuration: animationDuration, evaluatePosition: workletCallback5 });
    const animatedReaction2 = tmp33Result87.useAnimatedReaction(ga, Ba, items23);
    const tmp33Result88 = tmp33(tmp34[4]);
    class Ma {
      constructor() {
        return sharedValue2.value;
      }
    }
    Ma.__closure = { animatedPosition: sharedValue2 };
    Ma.__workletHash = 13579803011112;
    Ma.__initData = sharedValue;
    function ba(arg0) {
      if (animatedPosition) {
        tmp.value = arg0 + num2;
      }
    }
    ba.__closure = { _providedAnimatedPosition: animatedPosition, topInset: num2 };
    ba.__workletHash = 10543527459289;
    ba.__initData = sharedValue1;
    const animatedReaction3 = tmp33Result88.useAnimatedReaction(Ma, ba, []);
    const tmp33Result89 = tmp33(tmp34[4]);
    class Ua {
      constructor() {
        return derivedValue7.value;
      }
    }
    Ua.__closure = { animatedIndex: derivedValue7 };
    Ua.__workletHash = 12135317826830;
    Ua.__initData = animatedSnapPoints;
    function ya(value) {
      if (animatedIndex) {
        tmp.value = value;
      }
    }
    ya.__closure = { _providedAnimatedIndex: animatedIndex };
    ya.__workletHash = 9361176196635;
    ya.__initData = __initData2;
    const animatedReaction4 = tmp33Result89.useAnimatedReaction(Ua, ya, []);
    const tmp33Result90 = tmp33(tmp34[4]);
    class Ka {
      constructor() {
        return { _animatedIndex: derivedValue7.value, _animatedPosition: sharedValue2.value, _animationState: sharedValue12.value, _contentGestureState: sharedValue9.value, _handleGestureState: sharedValue10.value };
      }
    }
    Ka.__closure = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedAnimationState: sharedValue12, animatedContentGestureState: sharedValue9, animatedHandleGestureState: sharedValue10 };
    Ka.__workletHash = 1521585362538;
    Ka.__initData = derivedValue1;
    class La {
      constructor(_animationState) {
        let _animatedIndex;
        let _animatedPosition;
        let _contentGestureState;
        let _handleGestureState;
        ({ _animatedIndex, _animatedPosition, _contentGestureState, _handleGestureState } = _animationState);
        let tmp3 = _animationState._animationState === GESTURE_SOURCE.ANIMATION_STATE.STOPPED;
        if (tmp3) {
          let tmp4 = sharedValue3.value === DEFAULT_HANDLE_HEIGHT.INITIAL_VALUE || sharedValue4.value === DEFAULT_HANDLE_HEIGHT.INITIAL_VALUE;
          if (!tmp4) {
            tmp4 = _animatedPosition === sharedValue3.value && _animatedIndex === sharedValue4.value;
            const tmp6 = _animatedPosition === sharedValue3.value && _animatedIndex === sharedValue4.value;
          }
          tmp3 = tmp4;
        }
        if (tmp3) {
          tmp3 = _animatedIndex % 1 === 0;
        }
        if (tmp3) {
          let tmp8 = _contentGestureState !== LegacyBaseButton.State.END && _contentGestureState !== LegacyBaseButton.State.UNDETERMINED && _contentGestureState !== LegacyBaseButton.State.CANCELLED;
          if (!tmp8) {
            tmp8 = _handleGestureState !== LegacyBaseButton.State.END && _handleGestureState !== LegacyBaseButton.State.UNDETERMINED && _handleGestureState !== LegacyBaseButton.State.CANCELLED;
            _handleGestureState !== LegacyBaseButton.State.END && _handleGestureState !== LegacyBaseButton.State.UNDETERMINED && _handleGestureState !== LegacyBaseButton.State.CANCELLED;
          }
          tmp3 = !tmp8;
        }
        if (tmp3) {
          const tmp10 = closure_66 && _animatedIndex === reactiveSharedValue4.value && first.value[_animatedIndex] !== _animatedPosition;
          if (!tmp10) {
            if (_animatedIndex !== reactiveSharedValue4.value) {
              reactiveSharedValue4.value = _animatedIndex;
              const tmpResult = _mod1643;
              tmpResult.runOnJS(closure_72)(_animatedIndex, _animatedPosition);
            }
            const tmp15 = -1 === _animatedIndex && onClose;
            if (tmp15) {
              const tmpResult2 = _mod1643;
              tmpResult2.runOnJS(onClose)();
            }
          }
        }
      }
    }
    La.__closure = { ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, INITIAL_VALUE: tmp33(tmp34[5]).INITIAL_VALUE, animatedNextPositionIndex: sharedValue4, State: tmp33(tmp34[7]).State, reduceMotion: tmp70, animatedCurrentIndex: reactiveSharedValue4, animatedSnapPoints, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, handleOnChange: tmp76, _providedOnClose: onClose };
    La.__workletHash = 7374492181361;
    La.__initData = derivedValue2;
    const items24 = [tmp70, tmp76, onClose];
    ({ ANIMATION_STATE: tmp33(tmp34[8]).ANIMATION_STATE, animatedNextPosition: sharedValue3, INITIAL_VALUE: tmp33(tmp34[5]).INITIAL_VALUE, animatedNextPositionIndex: sharedValue4, State: tmp33(tmp34[7]).State, reduceMotion: tmp70, animatedCurrentIndex: reactiveSharedValue4, animatedSnapPoints, __DEV__: false, runOnJS: tmp33(tmp34[4]).runOnJS, print: tmp33(tmp34[9]).print, BottomSheet: derivedValue3, handleOnChange: tmp76, _providedOnClose: onClose });
    const animatedReaction5 = tmp33Result90.useAnimatedReaction(Ka, La, items24);
    const items25 = [DEFAULT_ANIMATE_ON_MOUNT, num, sharedValue21, stableCallback];
    DEFAULT_OVER_DRAG_RESISTANCE_FACTOR(() => {
      const tmp = DEFAULT_ANIMATE_ON_MOUNT && !sharedValue21.value;
      if (!tmp) {
        stableCallback(num);
      }
    }, items25);
    const obj16 = { value: tmp94, children: DEFAULT_KEYBOARD_BLUR_BEHAVIOR(BottomSheetInternalProvider, obj17) };
    const BottomSheetProvider = tmp33(tmp34[11]).BottomSheetProvider;
    obj17 = { value: tmp93, children: DEFAULT_KEYBOARD_INPUT_MODE(tmp104, obj18) };
    BottomSheetInternalProvider = tmp33(tmp34[11]).BottomSheetInternalProvider;
    let tmp102Result = null;
    obj18 = { gestureEventsHandlersHook, children: items26 };
    tmp104 = num(tmp34[12]);
    if (backdropComponent) {
      const obj19 = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, style: keyboardBehavior.absoluteFillObject };
      tmp102Result = tmp102(backdropComponent, obj19);
    }
    items26 = [tmp102Result, ];
    const obj20 = { shouldCalculateHeight: !(undefined !== $modal && $modal), containerHeight: reactiveSharedValue, containerOffset: reactiveSharedValue2, topInset: num2, bottomInset: num3, detached: undefined !== detached && detached, style: containerStyle, children: DEFAULT_KEYBOARD_INPUT_MODE(BottomSheetBody, obj21) };
    const BottomSheetHostingContainer = tmp33(tmp34[13]).BottomSheetHostingContainer;
    let tmp102Result4 = null;
    obj21 = { style, BodyComponent, children: items27 };
    BottomSheetBody = tmp33(tmp34[14]).BottomSheetBody;
    if (null !== backgroundComponent) {
      const obj22 = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, backgroundComponent, backgroundStyle };
      tmp102Result4 = tmp102(tmp33(tmp34[15]).BottomSheetBackgroundContainer, obj22, "BottomSheetBackgroundContainer");
    }
    items27 = [tmp102Result4, , ];
    const BottomSheetContent = tmp33(tmp34[16]).BottomSheetContent;
    const obj23 = { pointerEvents: "box-none", accessible, accessibilityRole: DEFAULT_ACCESSIBILITY_ROLE, accessibilityLabel: DEFAULT_ACCESSIBILITY_LABEL, keyboardBehavior, detached: undefined !== detached && detached, children: items28 };
    items28 = [children, ];
    let tmp102Result5 = null;
    if (renderFooter) {
      const obj24 = { renderFooter };
      tmp102Result5 = tmp102(tmp33(tmp34[17]).BottomSheetFooterContainer, obj24);
    }
    items28[1] = tmp102Result5;
    items27[1] = DEFAULT_KEYBOARD_INPUT_MODE(BottomSheetContent, obj23);
    let tmp102Result6 = null;
    if (null !== handleComponent) {
      const obj25 = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, handleHeight: reactiveSharedValue3, enableHandlePanningGesture, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, keyboardBehavior, handleComponent, handleStyle, handleIndicatorStyle };
      tmp102Result6 = tmp102(tmp33(tmp34[18]).BottomSheetHandleContainer, obj25, "BottomSheetHandleContainer");
    }
    items27[2] = tmp102Result6;
    items26[1] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR(BottomSheetHostingContainer, obj20, "BottomSheetContainer");
    return DEFAULT_KEYBOARD_BLUR_BEHAVIOR(BottomSheetProvider, obj16);
  }
}
const memoResult = memo(forwardRef(BottomSheet));
memoResult.displayName = "BottomSheet";

export default memoResult;