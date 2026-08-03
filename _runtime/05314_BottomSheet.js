import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import get_ActivityIndicator from "BottomSheetFooter";
import jsxProd from "jsxProd";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let forwardRef;
let memo;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ useMemo: c4, useCallback: c5, useImperativeHandle: closure_6, useEffect: error, forwardRef, memo } = noop);
({ Platform: metroImportAll, StyleSheet: c9 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const result = require("cancelAnimation").addWhitelistedUIProps({ decelerationRate: true });
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
let closure_25 = { code: "function evaluatePosition_Pnpm_BottomSheetTsx14(source,animationConfigs){const{isForcedClosing,ANIMATION_SOURCE,isLayoutCalculated,getEvaluatedPosition,isAnimatedOnMount,animateOnMount,animateToPosition,setToPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPositionIndex,isInTemporaryPosition,animatedClosedPosition,animatedCurrentIndex,animatedSnapPoints,animatedIndex,reduceMotion,animatedPosition,animatedContainerHeightDidChange}=this.__closure;if(isForcedClosing.value&&source!==ANIMATION_SOURCE.USER){return;}if(!isLayoutCalculated.value){return;}const proposedPosition=getEvaluatedPosition(source);if(!isAnimatedOnMount.value){if(animateOnMount){animateToPosition(proposedPosition,ANIMATION_SOURCE.MOUNT,undefined,animationConfigs);}else{setToPosition(proposedPosition);isAnimatedOnMount.value=true;}return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){if(animatedNextPositionIndex.value===-1&&!isInTemporaryPosition.value){setToPosition(animatedClosedPosition.value);return;}if(animatedNextPositionIndex.value!==animatedCurrentIndex.value){animateToPosition(animatedSnapPoints.value[animatedNextPositionIndex.value],source,undefined,animationConfigs);return;}}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING&&animatedIndex.value===-1){if(reduceMotion&&animatedSnapPoints.value[animatedIndex.value]!==animatedPosition.value){return;}setToPosition(animatedClosedPosition.value);return;}if(animatedContainerHeightDidChange.value){setToPosition(proposedPosition);return;}animateToPosition(proposedPosition,source,undefined,animationConfigs);}" };
let closure_26 = { code: "function handleSnapToPosition_Pnpm_BottomSheetTsx15(position,animationConfigs){const handleSnapToPosition_Pnpm_BottomSheetTsx15=this._recur;const{__DEV__,print,BottomSheet,normalizeSnapPoint,animatedContainerHeight,isLayoutCalculated,animatedNextPosition,isForcedClosing,isInTemporaryPosition,runOnUI,animateToPosition,ANIMATION_SOURCE}=this.__closure;if(__DEV__){print({component:BottomSheet.name,method:handleSnapToPosition_Pnpm_BottomSheetTsx15.name,params:{position:position}});}const nextPosition=normalizeSnapPoint(position,animatedContainerHeight.value);if(!isLayoutCalculated||nextPosition===animatedNextPosition.value||isForcedClosing.value){return;}isInTemporaryPosition.value=true;runOnUI(animateToPosition)(nextPosition,ANIMATION_SOURCE.USER,0,animationConfigs);}" };
let closure_27 = { code: "function pnpm_BottomSheetTsx16(){const{animatedContainerHeight}=this.__closure;return animatedContainerHeight.value;}" };
let closure_28 = { code: "function pnpm_BottomSheetTsx17(result,previous){const{INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition}=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}}" };
let closure_29 = { code: "function pnpm_BottomSheetTsx18(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.value;}" };
let closure_30 = { code: "function pnpm_BottomSheetTsx19(result,previous){const{isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE}=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);}" };
let closure_31 = { code: "function pnpm_BottomSheetTsx20(){const{animatedKeyboardState,animatedKeyboardHeight}=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};}" };
let closure_32 = { code: "function pnpm_BottomSheetTsx21(result,_previousResult){const{KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition}=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);}" };
let closure_33 = { code: "function pnpm_BottomSheetTsx22(){const{animatedPosition}=this.__closure;return animatedPosition.value;}" };
let closure_34 = { code: "function pnpm_BottomSheetTsx23(_animatedPosition){const{_providedAnimatedPosition,topInset}=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}}" };
let closure_35 = { code: "function pnpm_BottomSheetTsx24(){const{animatedIndex}=this.__closure;return animatedIndex.value;}" };
let closure_36 = { code: "function pnpm_BottomSheetTsx25(_animatedIndex){const{_providedAnimatedIndex}=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}}" };
let closure_37 = { code: "function pnpm_BottomSheetTsx26(){const{animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState}=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};}" };
let closure_38 = { code: "function pnpm_BottomSheetTsx27({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){const{ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose}=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}}" };
class BottomSheet {
  constructor(arg0, arg1) {
    animationConfigs = global.animationConfigs;
    index = global.index;
    num = 0;
    if (undefined !== index) {
      num = index;
    }
    c1 = num;
    ({ snapPoints, initialPosition } = global);
    if (undefined === initialPosition) {
      tmp = animationConfigs;
      tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
      initialPosition = require("DEFAULT_HANDLE_HEIGHT").INITIAL_POSITION;
    }
    DEFAULT_ANIMATE_ON_MOUNT = global.animateOnMount;
    if (undefined === DEFAULT_ANIMATE_ON_MOUNT) {
      tmp3 = animationConfigs;
      tmp4 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ANIMATE_ON_MOUNT = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ANIMATE_ON_MOUNT;
    }
    DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = global.enableContentPanningGesture;
    if (undefined === DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
      tmp5 = animationConfigs;
      tmp6 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    }
    _slicedToArray = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    ({ enableOverDrag, enableHandlePanningGesture } = global);
    if (undefined === enableOverDrag) {
      tmp7 = animationConfigs;
      tmp8 = DEFAULT_ANIMATE_ON_MOUNT;
      enableOverDrag = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_OVER_DRAG;
    }
    DEFAULT_ENABLE_OVER_DRAG = enableOverDrag;
    DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = global.enablePanDownToClose;
    if (undefined === DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE) {
      tmp9 = animationConfigs;
      tmp10 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    }
    enablePanDownToClose = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    DEFAULT_DYNAMIC_SIZING = global.enableDynamicSizing;
    if (undefined === DEFAULT_DYNAMIC_SIZING) {
      tmp11 = animationConfigs;
      tmp12 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_DYNAMIC_SIZING = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_DYNAMIC_SIZING;
    }
    DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = global.overDragResistanceFactor;
    if (undefined === DEFAULT_OVER_DRAG_RESISTANCE_FACTOR) {
      tmp13 = animationConfigs;
      tmp14 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    }
    overDragResistanceFactor = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    overrideReduceMotion = global.overrideReduceMotion;
    ({ keyboardBehavior, style, containerStyle, backgroundStyle, handleStyle, handleIndicatorStyle, gestureEventsHandlersHook } = global);
    if (undefined === keyboardBehavior) {
      tmp15 = animationConfigs;
      tmp16 = DEFAULT_ANIMATE_ON_MOUNT;
      keyboardBehavior = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_BEHAVIOR;
    }
    DEFAULT_KEYBOARD_BEHAVIOR = keyboardBehavior;
    DEFAULT_KEYBOARD_BLUR_BEHAVIOR = global.keyboardBlurBehavior;
    if (undefined === DEFAULT_KEYBOARD_BLUR_BEHAVIOR) {
      tmp17 = animationConfigs;
      tmp18 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_KEYBOARD_BLUR_BEHAVIOR = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    }
    keyboardBlurBehavior = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    DEFAULT_KEYBOARD_INPUT_MODE = global.android_keyboardInputMode;
    if (undefined === DEFAULT_KEYBOARD_INPUT_MODE) {
      tmp19 = animationConfigs;
      tmp20 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_KEYBOARD_INPUT_MODE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_INPUT_MODE;
    }
    android_keyboardInputMode = DEFAULT_KEYBOARD_INPUT_MODE;
    DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = global.enableBlurKeyboardOnGesture;
    if (undefined === DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE) {
      tmp21 = animationConfigs;
      tmp22 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    }
    closure_12 = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = global.keyboardIncludeBottomOffset;
    if (undefined === DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET) {
      tmp23 = animationConfigs;
      tmp24 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    }
    containerHeight = global.containerHeight;
    ({ containerOffset, topInset } = global);
    num2 = 0;
    if (undefined !== topInset) {
      num2 = topInset;
    }
    c14 = num2;
    bottomInset = global.bottomInset;
    num3 = 0;
    if (undefined !== bottomInset) {
      num3 = bottomInset;
    }
    c15 = num3;
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
    closure_27 = tmp25;
    detached = global.detached;
    tmp26 = undefined !== detached && detached;
    closure_28 = tmp26;
    handleComponent = global.handleComponent;
    ({ backdropComponent, backgroundComponent, renderFooter, accessible, children, BodyComponent } = global);
    if (undefined === accessible) {
      tmp27 = animationConfigs;
      tmp28 = DEFAULT_ANIMATE_ON_MOUNT;
      accessible = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ACCESSIBLE;
    }
    DEFAULT_ACCESSIBILITY_LABEL = global.accessibilityLabel;
    if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
      tmp29 = animationConfigs;
      tmp30 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ACCESSIBILITY_LABEL = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ACCESSIBILITY_LABEL;
    }
    DEFAULT_ACCESSIBILITY_ROLE = global.accessibilityRole;
    if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
      tmp31 = animationConfigs;
      tmp32 = DEFAULT_ANIMATE_ON_MOUNT;
      DEFAULT_ACCESSIBILITY_ROLE = require("DEFAULT_HANDLE_HEIGHT").DEFAULT_ACCESSIBILITY_ROLE;
    }
    tmp33 = animationConfigs;
    tmp34 = DEFAULT_ANIMATE_ON_MOUNT;
    obj = require("useBottomSheet");
    INITIAL_CONTAINER_HEIGHT = containerHeight;
    if (containerHeight == null) {
      INITIAL_CONTAINER_HEIGHT = require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT;
    }
    reactiveSharedValue = obj.useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT);
    closure_30 = reactiveSharedValue;
    tmp33Result = require("cancelAnimation");
    fn = function _() {
      const value = reactiveSharedValue.value;
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
    tmp33Result1 = require("useBottomSheet");
    if (containerOffset == null) {
      containerOffset = require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_OFFSET;
    }
    reactiveSharedValue1 = tmp33Result1.useReactiveSharedValue(containerOffset);
    useDerivedValue = reactiveSharedValue1;
    tmp33Result2 = require("useBottomSheet");
    if (handleHeight == null) {
      handleHeight = require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT;
    }
    reactiveSharedValue2 = tmp33Result2.useReactiveSharedValue(handleHeight);
    INITIAL_HANDLE_HEIGHT = reactiveSharedValue2;
    tmp33Result3 = require("cancelAnimation");
    sharedValue = require("_slicedToArray");
    closure_34 = sharedValue;
    tmp33Result4 = require("cancelAnimation");
    if (contentHeight == null) {
      contentHeight = require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT;
    }
    sharedValue1 = tmp33Result4.useSharedValue(contentHeight);
    closure_35 = sharedValue1;
    tmp33Result5 = require("useBottomSheet");
    tmp41 = _slicedToArray(tmp33Result5.useAnimatedSnapPoints(snapPoints, derivedValue, sharedValue1, reactiveSharedValue2, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize), 2);
    first = tmp41[0];
    closure_36 = first;
    tmp43 = tmp41[1];
    _ = tmp43;
    tmp33Result6 = require("cancelAnimation");
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
    tmp33Result7 = require("cancelAnimation");
    class T {
      constructor() {
        sum = closure_31.value;
        tmp = closure_27;
        iter = closure_31;
        if (!closure_27) {
          tmp = closure_28;
        }
        if (tmp) {
          tmp2 = c15;
          sum = iter.value + c15;
        }
        return sum;
      }
    }
    T.__closure = { animatedContainerHeight: derivedValue, $modal: tmp25, detached: tmp26, bottomInset: num3 };
    T.__workletHash = 1052527833249;
    T.__initData = c14;
    items2 = [, , , ];
    items2[0] = derivedValue;
    items2[1] = tmp25;
    items2[2] = tmp26;
    items2[3] = num3;
    derivedValue2 = tmp33Result7.useDerivedValue(T, items2);
    BottomSheet = derivedValue2;
    tmp33Result8 = require("cancelAnimation");
    fn2 = function j() {
      return derivedValue.value - derivedValue1.value;
    };
    fn2.__closure = { animatedContainerHeight: derivedValue, animatedHighestSnapPoint: derivedValue1 };
    fn2.__workletHash = 12626261619737;
    fn2.__initData = c15;
    items3 = [, ];
    items3[0] = derivedValue;
    items3[1] = derivedValue1;
    derivedValue3 = tmp33Result8.useDerivedValue(fn2, items3);
    closure_40 = derivedValue3;
    tmp33Result9 = require("useBottomSheet");
    num4 = -1;
    if (!DEFAULT_ANIMATE_ON_MOUNT) {
      num4 = num;
    }
    reactiveSharedValue3 = tmp33Result9.useReactiveSharedValue(num4);
    closure_41 = reactiveSharedValue3;
    tmp33Result10 = require("cancelAnimation");
    sharedValue2 = tmp33Result10.useSharedValue(initialPosition);
    INITIAL_CONTAINER_HEIGHT = sharedValue2;
    tmp33Result11 = require("cancelAnimation");
    sharedValue3 = tmp33Result11.useSharedValue(require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE);
    closure_43 = sharedValue3;
    tmp33Result12 = require("cancelAnimation");
    sharedValue4 = tmp33Result12.useSharedValue(require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE);
    closure_44 = sharedValue4;
    tmp33Result13 = require("cancelAnimation");
    tmp51 = !DEFAULT_ANIMATE_ON_MOUNT;
    if (DEFAULT_ANIMATE_ON_MOUNT) {
      tmp51 = -1 === num;
    }
    sharedValue5 = tmp33Result13.useSharedValue(tmp51);
    useDerivedValue = sharedValue5;
    tmp33Result14 = require("cancelAnimation");
    sharedValue6 = tmp33Result14.useSharedValue(false);
    closure_46 = sharedValue6;
    tmp33Result15 = require("cancelAnimation");
    class X {
      constructor() {
        tmp2 = null === containerHeight;
        if (tmp2) {
          tmp2 = undefined === tmp;
        }
        flag = false;
        if (!tmp2) {
          flag = true;
        }
        tmp3 = animationConfigs;
        tmp4 = DEFAULT_ANIMATE_ON_MOUNT;
        if (closure_31.value !== require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT) {
          flag = true;
        }
        flag2 = false;
        if (null === handleComponent) {
          tmp5 = INITIAL_HANDLE_HEIGHT;
          num = 0;
          INITIAL_HANDLE_HEIGHT.value = 0;
          flag2 = true;
        }
        if (INITIAL_HANDLE_HEIGHT.value !== require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT) {
          flag2 = true;
        }
        flag3 = false;
        if (closure_36.value[0] !== require("DEFAULT_HANDLE_HEIGHT").INITIAL_SNAP_POINT) {
          flag3 = true;
        }
        if (flag) {
          flag = flag2;
        }
        if (flag) {
          flag = flag3;
        }
        return flag;
      }
    }
    obj = { _providedContainerHeight: containerHeight, animatedContainerHeight: derivedValue, INITIAL_CONTAINER_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT, handleComponent, animatedHandleHeight: reactiveSharedValue2, INITIAL_HANDLE_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT, animatedSnapPoints: first, INITIAL_SNAP_POINT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_SNAP_POINT };
    X.__closure = obj;
    X.__workletHash = 16854996685215;
    X.__initData = animatedPosition;
    items4 = [, , , , ];
    items4[0] = containerHeight;
    items4[1] = derivedValue;
    items4[2] = reactiveSharedValue2;
    items4[3] = first;
    items4[4] = handleComponent;
    derivedValue4 = tmp33Result15.useDerivedValue(X, items4);
    closure_47 = derivedValue4;
    tmp33Result16 = require("cancelAnimation");
    sharedValue7 = tmp33Result16.useSharedValue(false);
    closure_48 = sharedValue7;
    tmp33Result17 = require("cancelAnimation");
    sharedValue8 = tmp33Result17.useSharedValue(false);
    useDerivedValue = sharedValue8;
    tmp33Result18 = require("cancelAnimation");
    sharedValue9 = tmp33Result18.useSharedValue(false);
    closure_50 = sharedValue9;
    tmp33Result19 = require("cancelAnimation");
    sharedValue10 = tmp33Result19.useSharedValue(require("Directions").State.UNDETERMINED);
    closure_51 = sharedValue10;
    tmp33Result20 = require("cancelAnimation");
    sharedValue11 = tmp33Result20.useSharedValue(require("Directions").State.UNDETERMINED);
    UNDETERMINED = sharedValue11;
    tmp33Result21 = require("useBottomSheet");
    scrollable = tmp33Result21.useScrollable();
    animatedScrollableType = scrollable.animatedScrollableType;
    animatedScrollableContentOffsetY = scrollable.animatedScrollableContentOffsetY;
    closure_54 = animatedScrollableContentOffsetY;
    animatedScrollableOverrideState = scrollable.animatedScrollableOverrideState;
    closure_55 = animatedScrollableOverrideState;
    isScrollableRefreshable = scrollable.isScrollableRefreshable;
    setScrollableRef = scrollable.setScrollableRef;
    removeScrollableRef = scrollable.removeScrollableRef;
    tmp33Result22 = require("useBottomSheet");
    keyboard = tmp33Result22.useKeyboard({ includeBottomOffset: DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET });
    state = keyboard.state;
    height = keyboard.height;
    animationDuration = keyboard.animationDuration;
    animationEasing = keyboard.animationEasing;
    shouldHandleKeyboardEvents = keyboard.shouldHandleKeyboardEvents;
    closure_63 = shouldHandleKeyboardEvents;
    tmp33Result23 = require("cancelAnimation");
    sharedValue12 = require("_slicedToArray");
    closure_64 = sharedValue12;
    tmp33Result24 = require("cancelAnimation");
    reducedMotion = tmp33Result24.useReducedMotion();
    useReducedMotion = reducedMotion;
    items5 = [, ];
    items5[0] = reducedMotion;
    items5[1] = overrideReduceMotion;
    tmp64 = DEFAULT_ENABLE_OVER_DRAG(() => {
      if (overrideReduceMotion) {
        if (tmp !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).ReduceMotion.System) {
          let tmp4 = tmp === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).ReduceMotion.Always;
        }
        return tmp4;
      }
      tmp4 = reducedMotion;
    }, items5);
    closure_66 = tmp64;
    tmp33Result25 = require("cancelAnimation");
    sharedValue13 = tmp33Result25.useSharedValue(require("GESTURE_SOURCE").ANIMATION_STATE.UNDETERMINED);
    closure_67 = sharedValue13;
    tmp33Result26 = require("cancelAnimation");
    sharedValue14 = tmp33Result26.useSharedValue(require("GESTURE_SOURCE").ANIMATION_SOURCE.MOUNT);
    closure_68 = sharedValue14;
    tmp33Result27 = require("cancelAnimation");
    fn3 = function $() {
      if (sharedValue2.value >= derivedValue2.value) {
        return animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SHEET_STATE.CLOSED;
      } else {
        const diff = derivedValue.value - derivedValue3.value;
        if (iter.value === diff) {
          return animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SHEET_STATE.EXTENDED;
        } else {
          const _Math = Math;
          const bound = Math.max(0, iter2.value - (iter3.value + sharedValue12.value));
          if (keyboardBehavior === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.interactive) {
            if (sharedValue7.value) {
              if (iter.value === bound) {
                let OPENED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SHEET_STATE.EXTENDED;
              }
              return OPENED;
            }
          }
          if (0 === iter.value) {
            OPENED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SHEET_STATE.FILL_PARENT;
          } else if (iter.value < diff) {
            OPENED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SHEET_STATE.OVER_EXTENDED;
          } else {
            OPENED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SHEET_STATE.OPENED;
          }
        }
      }
    };
    obj1 = { animatedPosition: sharedValue2, animatedClosedPosition: derivedValue2, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE, animatedContainerHeight: derivedValue, animatedSheetHeight: derivedValue3, animatedKeyboardHeightInContainer: sharedValue12, keyboardBehavior, KEYBOARD_BEHAVIOR: require("GESTURE_SOURCE").KEYBOARD_BEHAVIOR, isInTemporaryPosition: sharedValue7 };
    fn3.__closure = obj1;
    fn3.__workletHash = 5310633624984;
    fn3.__initData = animatedIndex;
    items6 = [, , , , , , ];
    items6[0] = derivedValue2;
    items6[1] = derivedValue;
    items6[2] = sharedValue12;
    items6[3] = sharedValue2;
    items6[4] = derivedValue3;
    items6[5] = sharedValue7;
    items6[6] = keyboardBehavior;
    derivedValue5 = tmp33Result27.useDerivedValue(fn3, items6);
    closure_69 = derivedValue5;
    tmp33Result28 = require("cancelAnimation");
    class Z {
      constructor() {
        if (_slicedToArray) {
          tmp3 = animationConfigs;
          tmp4 = DEFAULT_ANIMATE_ON_MOUNT;
          iter = closure_55;
          if (closure_55.value !== require("GESTURE_SOURCE").SCROLLABLE_STATE.UNDETERMINED) {
            UNLOCKED = iter.value;
          } else {
            tmp16 = animationConfigs;
            tmp17 = DEFAULT_ANIMATE_ON_MOUNT;
            iter2 = closure_69;
            if (closure_69.value !== require("GESTURE_SOURCE").SHEET_STATE.FILL_PARENT) {
              tmp18 = animationConfigs;
              tmp19 = DEFAULT_ANIMATE_ON_MOUNT;
              if (iter2.value !== require("GESTURE_SOURCE").SHEET_STATE.EXTENDED) {
                tmp5 = state;
                tmp6 = animationConfigs;
                tmp7 = DEFAULT_ANIMATE_ON_MOUNT;
                if (state.value === require("GESTURE_SOURCE").KEYBOARD_STATE.SHOWN) {
                  tmp8 = closure_67;
                  tmp9 = animationConfigs;
                  tmp10 = DEFAULT_ANIMATE_ON_MOUNT;
                }
                tmp11 = animationConfigs;
                tmp12 = DEFAULT_ANIMATE_ON_MOUNT;
                UNLOCKED = require("GESTURE_SOURCE").SCROLLABLE_STATE.LOCKED;
              }
            }
            tmp13 = animationConfigs;
            tmp14 = DEFAULT_ANIMATE_ON_MOUNT;
            UNLOCKED = require("GESTURE_SOURCE").SCROLLABLE_STATE.UNLOCKED;
          }
          tmp15 = UNLOCKED;
        } else {
          tmp = animationConfigs;
          tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
          return require("GESTURE_SOURCE").SCROLLABLE_STATE.UNLOCKED;
        }
        return;
      }
    }
    obj2 = { enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, animatedScrollableOverrideState, animatedSheetState: derivedValue5, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE, animatedKeyboardState: state, KEYBOARD_STATE: require("GESTURE_SOURCE").KEYBOARD_STATE, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE };
    Z.__closure = obj2;
    Z.__workletHash = 1522258685135;
    Z.__initData = simultaneousHandlers;
    items7 = [, , , , ];
    items7[0] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items7[1] = sharedValue13;
    items7[2] = state;
    items7[3] = animatedScrollableOverrideState;
    items7[4] = derivedValue5;
    derivedValue6 = tmp33Result28.useDerivedValue(Z, items7);
    closure_70 = derivedValue6;
    tmp33Result29 = require("cancelAnimation");
    fn4 = function q() {
      let value = first.value;
      const substr = value.slice();
      const reversed = substr.reverse();
      value = first.value;
      const substr1 = value.slice();
      const mapped = substr1.map((arg0, arg1) => arg1);
      const reversed1 = mapped.reverse();
      reversed.push(derivedValue.value);
      reversed1.push(-1);
      let num = -1;
      if (derivedValue4.value) {
        const obj3 = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        value = sharedValue2.value;
        num = obj3.interpolate(value, reversed, reversed1, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).Extrapolation.CLAMP);
      }
      if (DEFAULT_KEYBOARD_INPUT_MODE === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_INPUT_MODE.adjustResize) {
        if (sharedValue14.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.KEYBOARD) {
          if (sharedValue13.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
            if (sharedValue7.value) {
              const _Math = Math;
              let bound = Math.max(reactiveSharedValue3.value, num);
            }
            return bound;
          }
        }
      }
      bound = num;
      if (sharedValue14.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.SNAP_POINT_CHANGE) {
        bound = num;
        if (sharedValue13.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
          bound = sharedValue4.value;
        }
      }
    };
    obj3 = { animatedSnapPoints: first, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, interpolate: require("cancelAnimation").interpolate, animatedPosition: sharedValue2, Extrapolation: require("cancelAnimation").Extrapolation, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: require("GESTURE_SOURCE").KEYBOARD_INPUT_MODE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, isInTemporaryPosition: sharedValue7, animatedCurrentIndex: reactiveSharedValue3, animatedNextPositionIndex: sharedValue4 };
    fn4.__closure = obj3;
    fn4.__workletHash = 1383862303157;
    fn4.__initData = waitFor;
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
    derivedValue7 = tmp33Result29.useDerivedValue(fn4, items8);
    q = derivedValue7;
    items9 = [, , ];
    items9[0] = onChange;
    items9[1] = reactiveSharedValue3;
    items9[2] = tmp43;
    tmp70 = enablePanDownToClose(function handleOnChange(arg0, arg1) {
      if (onChange) {
        if (arg0 === tmp43.value) {
          let PROVIDED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SNAP_POINT_TYPE.DYNAMIC;
        } else {
          PROVIDED = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).SNAP_POINT_TYPE.PROVIDED;
        }
        tmp(arg0, arg1, PROVIDED);
      }
    }, items9);
    useDerivedValue = tmp70;
    items10 = [, , ];
    items10[0] = onAnimate;
    items10[1] = reactiveSharedValue3;
    items10[2] = sharedValue2;
    tmp71 = enablePanDownToClose(function handleOnAnimate(arg0, arg1, arg2) {
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
    ANIMATION_STATE = tmp71;
    tmp33Result30 = require("cancelAnimation");
    class Q {
      constructor() {
        obj = require("cancelAnimation");
        cancelAnimationResult = obj.cancelAnimation(INITIAL_CONTAINER_HEIGHT);
        closure_68.value = require("GESTURE_SOURCE").ANIMATION_SOURCE.NONE;
        closure_67.value = require("GESTURE_SOURCE").ANIMATION_STATE.STOPPED;
        return;
      }
    }
    obj4 = { cancelAnimation: require("cancelAnimation").cancelAnimation, animatedPosition: sharedValue2, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE };
    Q.__closure = obj4;
    Q.__workletHash = 17031011772977;
    Q.__initData = activeOffsetX;
    items11 = [, , ];
    items11[0] = sharedValue2;
    items11[1] = sharedValue13;
    items11[2] = sharedValue14;
    workletCallback = tmp33Result30.useWorkletCallback(Q, items11);
    Q = workletCallback;
    tmp33Result31 = require("cancelAnimation");
    animateToPositionCompleted = function animateToPositionCompleted(arg0) {
      if (arg0) {
        if (sharedValue14.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.MOUNT) {
          sharedValue5.value = true;
        }
        sharedValue8.value = false;
        sharedValue14.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.NONE;
        sharedValue13.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.STOPPED;
        sharedValue3.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_VALUE;
        sharedValue4.value = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[5]).INITIAL_VALUE;
        sharedValue9.value = false;
        const tmp = sharedValue14;
      }
    };
    obj5 = { __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, animatedCurrentIndex: reactiveSharedValue3, animatedNextPosition: sharedValue3, animatedNextPositionIndex: sharedValue4, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, isAnimatedOnMount: sharedValue5, isForcedClosing: sharedValue8, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, INITIAL_VALUE: require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE, animatedContainerHeightDidChange: sharedValue9 };
    animateToPositionCompleted.__closure = obj5;
    animateToPositionCompleted.__workletHash = 16634512058026;
    animateToPositionCompleted.__initData = activeOffsetY;
    workletCallback1 = tmp33Result31.useWorkletCallback(animateToPositionCompleted);
    INITIAL_VALUE = workletCallback1;
    tmp33Result32 = require("cancelAnimation");
    animateToPosition = function animateToPosition(initialPosition, GESTURE, arg2) {
      let num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      if (initialPosition !== sharedValue2.value) {
        if (undefined !== initialPosition) {
          if (sharedValue13.value !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
            if (iter2.value === tmp18(tmp19[8]).ANIMATION_STATE.RUNNING) {
              workletCallback();
            }
            iter2.value = tmp18(tmp19[8]).ANIMATION_STATE.RUNNING;
            sharedValue14.value = GESTURE;
            sharedValue3.value = initialPosition;
            let tmp8 = state.value === tmp18(tmp19[8]).KEYBOARD_STATE.SHOWN;
            if (tmp8) {
              tmp8 = keyboardBehavior !== tmp18(tmp19[8]).KEYBOARD_BEHAVIOR.extend;
            }
            if (tmp8) {
              tmp8 = initialPosition < iter.value;
            }
            let num2 = 0;
            if (tmp8) {
              num2 = sharedValue12.value;
            }
            let tmp11 = arg3;
            const value = first.value;
            sharedValue4.value = value.indexOf(initialPosition + num2);
            let tmp18Result = tmp18(tmp19[4]);
            tmp18Result.runOnJS(closure_73)(sharedValue4.value, initialPosition, GESTURE);
            tmp18Result = tmp18(tmp19[9]);
            const obj = { point: null, configs: null, velocity: null, overrideReduceMotion: null, onComplete: null };
            obj[0] = initialPosition;
            if (!arg3) {
              tmp11 = animationConfigs;
            }
            obj[1] = tmp11;
            obj[2] = num;
            obj[3] = overrideReduceMotion;
            obj[4] = workletCallback1;
            iter.value = tmp18Result.animate(obj);
          }
        }
      }
    };
    obj6 = { __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedNextPosition: sharedValue3, stopAnimation: workletCallback, animatedAnimationSource: sharedValue14, animatedKeyboardState: state, KEYBOARD_STATE: require("GESTURE_SOURCE").KEYBOARD_STATE, keyboardBehavior, KEYBOARD_BEHAVIOR: require("GESTURE_SOURCE").KEYBOARD_BEHAVIOR, animatedKeyboardHeightInContainer: sharedValue12, animatedNextPositionIndex: sharedValue4, animatedSnapPoints: first, handleOnAnimate: tmp71, animate: require("normalizeSnapPoint").animate, _providedAnimationConfigs: animationConfigs, _providedOverrideReduceMotion: overrideReduceMotion, animateToPositionCompleted: workletCallback1 };
    animateToPosition.__closure = obj6;
    animateToPosition.__workletHash = 11829586443894;
    animateToPosition.__initData = failOffsetX;
    items12 = [, , , ];
    items12[0] = tmp71;
    items12[1] = keyboardBehavior;
    items12[2] = animationConfigs;
    items12[3] = overrideReduceMotion;
    workletCallback2 = tmp33Result32.useWorkletCallback(animateToPosition, items12);
    animate = workletCallback2;
    tmp33Result33 = require("cancelAnimation");
    setToPosition = function setToPosition(value) {
      let tmp2 = value === sharedValue2.value;
      if (!tmp2) {
        tmp2 = undefined === value;
      }
      if (!tmp2) {
        let tmp6 = sharedValue13.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING;
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
    obj7 = { animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedNextPosition: sharedValue3, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, BottomSheet, animatedNextPositionIndex: sharedValue4, animatedSnapPoints: first, stopAnimation: workletCallback, animatedContainerHeightDidChange: sharedValue9 };
    setToPosition.__closure = obj7;
    setToPosition.__workletHash = 1470510512522;
    setToPosition.__initData = failOffsetY;
    workletCallback3 = tmp33Result33.useWorkletCallback(setToPosition, []);
    ANIMATION_STATE = workletCallback3;
    tmp33Result34 = require("cancelAnimation");
    getEvaluatedPosition = function getEvaluatedPosition(arg0) {
      let value = reactiveSharedValue3.value;
      value = first.value;
      value = state.value;
      const value1 = derivedValue1.value;
      if (arg0 === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.KEYBOARD) {
        if (DEFAULT_KEYBOARD_BLUR_BEHAVIOR === tmp(tmp2[8]).KEYBOARD_BLUR_BEHAVIOR.restore) {
          if (value === tmp(tmp2[8]).KEYBOARD_STATE.HIDDEN) {
            if (sharedValue10.value !== tmp(tmp2[7]).State.ACTIVE) {
              if (sharedValue11.value !== tmp(tmp2[7]).State.ACTIVE) {
                sharedValue7.value = false;
                return value[value];
              }
            }
          }
        }
      }
      if (keyboardBehavior === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.extend) {
        if (value === tmp(tmp2[8]).KEYBOARD_STATE.SHOWN) {
          return value1;
        }
      }
      if (keyboardBehavior === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.fillParent) {
        if (value === tmp(tmp2[8]).KEYBOARD_STATE.SHOWN) {
          sharedValue7.value = true;
          return 0;
        }
      }
      if (keyboardBehavior === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).KEYBOARD_BEHAVIOR.interactive) {
        if (value === tmp(tmp2[8]).KEYBOARD_STATE.SHOWN) {
          if ("adjustResize" !== DEFAULT_KEYBOARD_INPUT_MODE) {
            sharedValue7.value = true;
            const _Math = Math;
            return Math.max(0, value1 - sharedValue12.value);
          }
        }
      }
      if (sharedValue7.value) {
        let value2 = sharedValue2.value;
      } else if (sharedValue5.value) {
        value2 = value[value];
      } else if (-1 === -1) {
        value2 = derivedValue2.value;
      } else {
        value2 = value[tmp8];
      }
      return value2;
    };
    obj8 = { animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, animatedKeyboardState: state, animatedHighestSnapPoint: derivedValue1, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: require("GESTURE_SOURCE").KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_STATE: require("GESTURE_SOURCE").KEYBOARD_STATE, animatedContentGestureState: sharedValue10, State: require("Directions").State, animatedHandleGestureState: sharedValue11, isInTemporaryPosition: sharedValue7, keyboardBehavior, KEYBOARD_BEHAVIOR: require("GESTURE_SOURCE").KEYBOARD_BEHAVIOR, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, animatedKeyboardHeightInContainer: sharedValue12, animatedPosition: sharedValue2, isAnimatedOnMount: sharedValue5, _providedIndex: num, animatedClosedPosition: derivedValue2 };
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
    KEYBOARD_BEHAVIOR = workletCallback4;
    tmp33Result35 = require("cancelAnimation");
    evaluatePosition = function evaluatePosition(arg0, arg1) {
      if (!sharedValue8.value) {
        if (derivedValue4.value) {
          const tmp6 = workletCallback4(arg0);
          if (sharedValue5.value) {
            if (sharedValue13.value === animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
              if (-1 === sharedValue4.value) {
                if (!sharedValue7.value) {
                  workletCallback3(derivedValue2.value);
                }
              }
              if (sharedValue4.value !== reactiveSharedValue3.value) {
                workletCallback2(first.value[iter2.value], arg0, undefined, arg1);
              }
            }
            if (iter.value !== animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_STATE.RUNNING) {
              if (-1 === derivedValue7.value) {
                workletCallback3(derivedValue2.value);
              }
            }
            if (sharedValue9.value) {
              workletCallback3(tmp6);
            } else {
              workletCallback2(tmp6, arg0, undefined, arg1);
            }
            iter = sharedValue13;
          } else if (DEFAULT_ANIMATE_ON_MOUNT) {
            workletCallback2(tmp6, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.MOUNT, undefined, arg1);
          } else {
            workletCallback3(tmp6);
            tmp7.value = true;
          }
        }
      }
    };
    obj9 = { isForcedClosing: sharedValue8, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, isLayoutCalculated: derivedValue4, getEvaluatedPosition: workletCallback4, isAnimatedOnMount: sharedValue5, animateOnMount: DEFAULT_ANIMATE_ON_MOUNT, animateToPosition: workletCallback2, setToPosition: workletCallback3, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedNextPositionIndex: sharedValue4, isInTemporaryPosition: sharedValue7, animatedClosedPosition: derivedValue2, animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, animatedIndex: derivedValue7, reduceMotion: tmp64, animatedPosition: sharedValue2, animatedContainerHeightDidChange: sharedValue9 };
    evaluatePosition.__closure = obj9;
    evaluatePosition.__workletHash = 15100134260939;
    evaluatePosition.__initData = onClose;
    items14 = [, , , ];
    items14[0] = workletCallback4;
    items14[1] = workletCallback2;
    items14[2] = workletCallback3;
    items14[3] = tmp64;
    workletCallback5 = tmp33Result35.useWorkletCallback(evaluatePosition, items14);
    ANIMATION_STATE = workletCallback5;
    tmp33Result36 = require("useBottomSheet");
    stableCallback = tmp33Result36.useStableCallback(function handleSnapToIndex(arg0, arg1) {
      let value = first.get();
      if (derivedValue4.get()) {
        let tmp5 = arg0 >= -1;
        if (tmp5) {
          tmp5 = arg0 <= value.length - 1;
        }
        -1(DEFAULT_ANIMATE_ON_MOUNT[10])(tmp5, `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`);
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
          const obj = animationConfigs(tmp3[4]);
          animationConfigs(tmp3[4]).runOnUI(workletCallback2)(tmp7, animationConfigs(tmp3[8]).ANIMATION_SOURCE.USER, 0, arg1);
          const runOnUIResult = animationConfigs(tmp3[4]).runOnUI(workletCallback2);
        }
        const tmp4 = -1(DEFAULT_ANIMATE_ON_MOUNT[10]);
      }
    });
    useStableCallback = stableCallback;
    tmp33Result37 = require("cancelAnimation");
    handleSnapToPosition = function handleSnapToPosition(arg0, arg1) {
      const normalizeSnapPointResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[9]).normalizeSnapPoint(arg0, derivedValue.value);
      let tmp4 = derivedValue4;
      if (derivedValue4) {
        tmp4 = normalizeSnapPointResult !== sharedValue3.value;
      }
      if (tmp4) {
        tmp4 = !sharedValue8.value;
      }
      if (tmp4) {
        sharedValue7.value = true;
        const tmpResult = tmp(tmp2[4]);
        tmp(tmp2[4]).runOnUI(workletCallback2)(normalizeSnapPointResult, tmp(tmp2[8]).ANIMATION_SOURCE.USER, 0, arg1);
        const runOnUIResult = tmp(tmp2[4]).runOnUI(workletCallback2);
      }
    };
    obj10 = { __DEV__: false, print: require("normalizeSnapPoint").print, BottomSheet, normalizeSnapPoint: require("normalizeSnapPoint").normalizeSnapPoint, animatedContainerHeight: derivedValue, isLayoutCalculated: derivedValue4, animatedNextPosition: sharedValue3, isForcedClosing: sharedValue8, isInTemporaryPosition: sharedValue7, runOnUI: require("cancelAnimation").runOnUI, animateToPosition: workletCallback2, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE };
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
    ANIMATION_SOURCE = workletCallback6;
    items16 = [, , , , , ];
    items16[0] = workletCallback2;
    items16[1] = sharedValue8;
    items16[2] = derivedValue4;
    items16[3] = sharedValue7;
    items16[4] = sharedValue3;
    items16[5] = derivedValue2;
    tmp80 = enablePanDownToClose(function handleClose(arg0) {
      let value = derivedValue2.value;
      value = derivedValue4.value;
      if (value) {
        value = value !== sharedValue3.value;
      }
      if (value) {
        value = !sharedValue8.value;
      }
      if (value) {
        sharedValue7.value = false;
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2)(value, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2);
      }
    }, items16);
    handleSnapToPosition = tmp80;
    items17 = [, , , , ];
    items17[0] = workletCallback2;
    items17[1] = sharedValue8;
    items17[2] = sharedValue7;
    items17[3] = sharedValue3;
    items17[4] = derivedValue2;
    tmp81 = enablePanDownToClose(function handleForceClose(arg0) {
      let value = derivedValue2.value;
      value = value === sharedValue3.value;
      if (!value) {
        value = sharedValue8.value;
      }
      if (!value) {
        sharedValue7.value = false;
        sharedValue8.value = true;
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2)(value, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2);
      }
    }, items17);
    handleForceClose = tmp81;
    items18 = [, , , , , , ];
    items18[0] = workletCallback2;
    items18[1] = sharedValue7;
    items18[2] = derivedValue4;
    items18[3] = sharedValue8;
    items18[4] = first;
    items18[5] = sharedValue3;
    items18[6] = sharedValue4;
    tmp82 = enablePanDownToClose(function handleExpand(arg0) {
      let value = first.value;
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
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2)(tmp, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2);
      }
    }, items18);
    ANIMATION_STATE = tmp82;
    items19 = [, , , , , , ];
    items19[0] = workletCallback2;
    items19[1] = sharedValue8;
    items19[2] = derivedValue4;
    items19[3] = sharedValue7;
    items19[4] = first;
    items19[5] = sharedValue3;
    items19[6] = sharedValue4;
    tmp83 = enablePanDownToClose(function handleCollapse(arg0) {
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
        const obj = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]);
        animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2)(first, animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[4]).runOnUI(workletCallback2);
      }
    }, items19);
    handleExpand = tmp83;
    tmp84 = DEFAULT_DYNAMIC_SIZING(arg1, () => ({ snapToIndex: stableCallback, snapToPosition: workletCallback6, expand: closure_84, collapse: closure_85, close: closure_82, forceClose: closure_83 }));
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
    items21 = [, , , , , , , ];
    items21[0] = derivedValue7;
    items21[1] = sharedValue2;
    items21[2] = stableCallback;
    items21[3] = workletCallback6;
    items21[4] = tmp82;
    items21[5] = tmp83;
    items21[6] = tmp80;
    items21[7] = tmp81;
    tmp85 = DEFAULT_ENABLE_OVER_DRAG(() => ({ enableContentPanningGesture: DEFAULT_ENABLE_CONTENT_PANNING_GESTURE, enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, overDragResistanceFactor: DEFAULT_OVER_DRAG_RESISTANCE_FACTOR, enableOverDrag, enablePanDownToClose: DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE, animatedAnimationState: sharedValue13, animatedSheetState: derivedValue5, animatedScrollableState: derivedValue6, animatedScrollableOverrideState, animatedContentGestureState: sharedValue10, animatedHandleGestureState: sharedValue11, animatedKeyboardState: state, animatedScrollableType, animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedSheetHeight: derivedValue3, animatedContentHeight: sharedValue1, animatedClosedPosition: derivedValue2, animatedHandleHeight: reactiveSharedValue2, animatedFooterHeight: sharedValue, animatedKeyboardHeight: height, animatedKeyboardHeightInContainer: sharedValue12, animatedContainerHeight: derivedValue, animatedSnapPoints: first, animatedHighestSnapPoint: derivedValue1, animatedScrollableContentOffsetY, isInTemporaryPosition: sharedValue7, isContentHeightFixed: sharedValue6, isScrollableRefreshable, shouldHandleKeyboardEvents, simultaneousHandlers, waitFor, activeOffsetX, activeOffsetY, failOffsetX, failOffsetY, enableBlurKeyboardOnGesture: DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE, animateToPosition: workletCallback2, stopAnimation: workletCallback, setScrollableRef, removeScrollableRef }), items20);
    tmp86 = DEFAULT_ENABLE_OVER_DRAG(() => ({ animatedIndex: derivedValue7, animatedPosition: sharedValue2, snapToIndex: stableCallback, snapToPosition: workletCallback6, expand: closure_84, collapse: closure_85, close: closure_82, forceClose: closure_83 }), items21);
    tmp33Result38 = require("cancelAnimation");
    class Ra {
      constructor() {
        return closure_31.value;
      }
    }
    Ra.__closure = { animatedContainerHeight: derivedValue };
    Ra.__workletHash = 12308480249646;
    Ra.__initData = closure_27;
    class Pa {
      constructor(arg0, arg1) {
        tmp = animationConfigs;
        tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
        if (global !== require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT) {
          tmp9 = arg1;
          tmp10 = closure_50;
          closure_50.value = global !== arg1;
          tmp11 = closure_67;
          tmp4 = closure_67.value === require("GESTURE_SOURCE").ANIMATION_STATE.RUNNING;
          if (tmp4) {
            tmp3 = closure_68;
            tmp4 = closure_68.value === require("GESTURE_SOURCE").ANIMATION_SOURCE.GESTURE;
          }
          if (tmp4) {
            tmp5 = closure_44;
            num = -1;
            tmp4 = -1 === closure_44.value;
          }
          if (tmp4) {
            tmp6 = animate;
            tmp7 = closure_39;
            tmp8 = animate(closure_39.value, require("GESTURE_SOURCE").ANIMATION_SOURCE.GESTURE);
          }
        }
        return;
      }
    }
    obj11 = { INITIAL_CONTAINER_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT, animatedContainerHeightDidChange: sharedValue9, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, animatedNextPositionIndex: sharedValue4, animateToPosition: workletCallback2, animatedClosedPosition: derivedValue2 };
    Pa.__closure = obj11;
    Pa.__workletHash = 14620022635386;
    Pa.__initData = closure_28;
    animatedReaction = tmp33Result38.useAnimatedReaction(Ra, Pa);
    tmp33Result39 = require("cancelAnimation");
    class Ha {
      constructor() {
        return closure_36.value;
      }
    }
    Ha.__closure = { animatedSnapPoints: first };
    Ha.__workletHash = 16103751497216;
    Ha.__initData = handleComponent;
    pa = function pa(arg0, arg1) {
      const json = JSON.stringify(arg0);
      let value = json === JSON.stringify(arg1);
      if (value) {
        value = sharedValue5.value;
      }
      if (!value) {
        if (derivedValue4.value) {
          workletCallback5(animationConfigs(DEFAULT_ANIMATE_ON_MOUNT[8]).ANIMATION_SOURCE.SNAP_POINT_CHANGE);
        }
      }
    };
    obj12 = { isAnimatedOnMount: sharedValue5, isLayoutCalculated: derivedValue4, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, evaluatePosition: workletCallback5, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE };
    pa.__closure = obj12;
    pa.__workletHash = 1047659532107;
    pa.__initData = closure_30;
    items22 = [, ];
    items22[0] = derivedValue4;
    items22[1] = first;
    animatedReaction1 = tmp33Result39.useAnimatedReaction(Ha, pa, items22);
    tmp33Result40 = require("cancelAnimation");
    fa = function fa() {
      return { _keyboardState: state.value, _keyboardHeight: height.value };
    };
    fa.__closure = { animatedKeyboardState: state, animatedKeyboardHeight: height };
    fa.__workletHash = 14903064847424;
    fa.__initData = closure_31;
    class Da {
      constructor(arg0, arg1) {
        ({ _keyboardState, _keyboardHeight } = global);
        _keyboardState = undefined;
        if (arg1 != null) {
          _keyboardState = arg1._keyboardState;
        }
        if (arg1 != null) {
          _keyboardHeight2 = arg1._keyboardHeight;
        }
        if (_keyboardState !== _keyboardState) {
          tmp2 = animationConfigs;
          tmp3 = DEFAULT_ANIMATE_ON_MOUNT;
          if (_keyboardState !== require("GESTURE_SOURCE").KEYBOARD_STATE.UNDETERMINED) {
            if (_keyboardState === require("GESTURE_SOURCE").KEYBOARD_STATE.HIDDEN) {
              tmp4 = closure_67;
              if (closure_67.value === require("GESTURE_SOURCE").ANIMATION_STATE.RUNNING) {
                tmp5 = closure_68;
              }
            }
            tmp6 = closure_64;
            num = 0;
            num2 = 0;
            if (0 === _keyboardHeight) {
              tmp6.value = 0;
              tmp14 = android_keyboardInputMode;
              if (android_keyboardInputMode !== require("GESTURE_SOURCE").KEYBOARD_INPUT_MODE.adjustResize) {
                iter = closure_51;
                if (closure_51.value !== require("Directions").State.ACTIVE) {
                  if (iter.value !== require("Directions").State.BEGAN) {
                    iter2 = UNDETERMINED;
                    if (UNDETERMINED.value !== require("Directions").State.ACTIVE) {
                      if (iter2.value !== require("Directions").State.BEGAN) {
                        if (_keyboardState !== require("GESTURE_SOURCE").KEYBOARD_STATE.HIDDEN) {
                          tmp2Result = require("normalizeSnapPoint");
                          tmp17 = animationEasing;
                          tmp18 = animationDuration;
                          tmp20 = ANIMATION_STATE;
                          keyboardAnimationConfigs = tmp2Result.getKeyboardAnimationConfigs(animationEasing.value, animationDuration.value);
                          tmp21 = ANIMATION_STATE(require("GESTURE_SOURCE").ANIMATION_SOURCE.KEYBOARD, keyboardAnimationConfigs);
                        } else {
                          tmp16 = keyboardBlurBehavior;
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
              tmp7 = closure_27;
              diff = globalThis;
              _Math = Math;
              abs = Math.abs;
              if (closure_27) {
                _Math2 = diff.Math;
                tmp11 = c15;
                tmp12 = useDerivedValue;
                diff = _keyboardHeight - _Math2.abs(c15 - useDerivedValue.value.bottom);
                absResult = abs(diff);
              } else {
                tmp9 = useDerivedValue;
                absResult = abs(_keyboardHeight - useDerivedValue.value.bottom);
              }
              tmp13 = absResult;
            }
          }
        }
        return;
      }
    }
    obj13 = { KEYBOARD_STATE: require("GESTURE_SOURCE").KEYBOARD_STATE, animatedAnimationState: sharedValue13, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedAnimationSource: sharedValue14, ANIMATION_SOURCE: require("GESTURE_SOURCE").ANIMATION_SOURCE, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, BottomSheet, animatedKeyboardHeightInContainer: sharedValue12, $modal: tmp25, bottomInset: num3, animatedContainerOffset: reactiveSharedValue1, Platform: overrideReduceMotion, android_keyboardInputMode: DEFAULT_KEYBOARD_INPUT_MODE, KEYBOARD_INPUT_MODE: require("GESTURE_SOURCE").KEYBOARD_INPUT_MODE, keyboardBehavior, KEYBOARD_BEHAVIOR: require("GESTURE_SOURCE").KEYBOARD_BEHAVIOR, animatedContentGestureState: sharedValue10, State: require("Directions").State, animatedHandleGestureState: sharedValue11, keyboardBlurBehavior: DEFAULT_KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR: require("GESTURE_SOURCE").KEYBOARD_BLUR_BEHAVIOR, getKeyboardAnimationConfigs: require("normalizeSnapPoint").getKeyboardAnimationConfigs, keyboardAnimationEasing: animationEasing, keyboardAnimationDuration: animationDuration, evaluatePosition: workletCallback5 };
    Da.__closure = obj13;
    Da.__workletHash = 3826286975425;
    Da.__initData = useDerivedValue;
    items23 = [, , , , , , ];
    items23[0] = tmp25;
    items23[1] = num3;
    items23[2] = keyboardBehavior;
    items23[3] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items23[4] = DEFAULT_KEYBOARD_INPUT_MODE;
    items23[5] = reactiveSharedValue1;
    items23[6] = workletCallback4;
    animatedReaction2 = tmp33Result40.useAnimatedReaction(fa, Da, items23);
    tmp33Result41 = require("cancelAnimation");
    xa = function xa() {
      return sharedValue2.value;
    };
    xa.__closure = { animatedPosition: sharedValue2 };
    xa.__workletHash = 14107338560521;
    xa.__initData = INITIAL_HANDLE_HEIGHT;
    class Ba {
      constructor(arg0) {
        if (animatedPosition) {
          tmp2 = global;
          tmp3 = c14;
          tmp.value = global + c14;
        }
        return;
      }
    }
    Ba.__closure = { _providedAnimatedPosition: animatedPosition, topInset: num2 };
    Ba.__workletHash = 11716938993854;
    Ba.__initData = closure_34;
    animatedReaction3 = tmp33Result41.useAnimatedReaction(xa, Ba, []);
    tmp33Result42 = require("cancelAnimation");
    ba = function ba() {
      return derivedValue7.value;
    };
    ba.__closure = { animatedIndex: derivedValue7 };
    ba.__workletHash = 4322474325743;
    ba.__initData = closure_35;
    ga = function ga(value) {
      if (animatedIndex) {
        tmp.value = value;
      }
    };
    ga.__closure = { _providedAnimatedIndex: animatedIndex };
    ga.__workletHash = 14207021927928;
    ga.__initData = closure_36;
    animatedReaction4 = tmp33Result42.useAnimatedReaction(ba, ga, []);
    tmp33Result43 = require("cancelAnimation");
    ya = function ya() {
      return { _animatedIndex: derivedValue7.value, _animatedPosition: sharedValue2.value, _animationState: sharedValue13.value, _contentGestureState: sharedValue10.value, _handleGestureState: sharedValue11.value };
    };
    ya.__closure = { animatedIndex: derivedValue7, animatedPosition: sharedValue2, animatedAnimationState: sharedValue13, animatedContentGestureState: sharedValue10, animatedHandleGestureState: sharedValue11 };
    ya.__workletHash = 4984898715723;
    ya.__initData = _;
    class Ma {
      constructor(arg0) {
        ({ _animatedIndex, _animatedPosition, _contentGestureState, _handleGestureState } = global);
        tmp = animationConfigs;
        tmp2 = DEFAULT_ANIMATE_ON_MOUNT;
        tmp3 = global._animationState === require("GESTURE_SOURCE").ANIMATION_STATE.STOPPED;
        if (tmp3) {
          iter = closure_43;
          tmp4 = closure_43.value === require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE;
          if (!tmp4) {
            tmp5 = closure_44;
            tmp4 = closure_44.value === require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE;
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
          tmp8 = _contentGestureState !== require("Directions").State.END && _contentGestureState !== require("Directions").State.UNDETERMINED && _contentGestureState !== require("Directions").State.CANCELLED;
          if (!tmp8) {
            tmp9 = _handleGestureState !== require("Directions").State.END && _handleGestureState !== require("Directions").State.UNDETERMINED && _handleGestureState !== require("Directions").State.CANCELLED;
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
              tmpResult = require("cancelAnimation");
              tmp13 = useDerivedValue;
              tmp14 = tmpResult.runOnJS(useDerivedValue)(_animatedIndex, _animatedPosition);
            }
            num3 = -1;
            tmp15 = -1 === _animatedIndex && onClose;
            if (tmp15) {
              tmpResult1 = require("cancelAnimation");
              tmp16 = onClose;
              tmp17 = tmpResult1.runOnJS(onClose)();
            }
          }
        }
        return;
      }
    }
    obj14 = { ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, animatedNextPosition: sharedValue3, INITIAL_VALUE: require("DEFAULT_HANDLE_HEIGHT").INITIAL_VALUE, animatedNextPositionIndex: sharedValue4, State: require("Directions").State, reduceMotion: tmp64, animatedCurrentIndex: reactiveSharedValue3, animatedSnapPoints: first, __DEV__: false, runOnJS: require("cancelAnimation").runOnJS, print: require("normalizeSnapPoint").print, BottomSheet, handleOnChange: tmp70, _providedOnClose: onClose };
    Ma.__closure = obj14;
    Ma.__workletHash = 11608666988638;
    Ma.__initData = closure_38;
    items24 = [, , ];
    items24[0] = tmp64;
    items24[1] = tmp70;
    items24[2] = onClose;
    animatedReaction5 = tmp33Result43.useAnimatedReaction(ya, Ma, items24);
    items25 = [, , , ];
    items25[0] = DEFAULT_ANIMATE_ON_MOUNT;
    items25[1] = num;
    items25[2] = sharedValue5;
    items25[3] = stableCallback;
    tmp93 = overDragResistanceFactor(() => {
      let tmp = DEFAULT_ANIMATE_ON_MOUNT;
      if (DEFAULT_ANIMATE_ON_MOUNT) {
        tmp = !sharedValue5.value;
      }
      if (!tmp) {
        stableCallback(num);
      }
    }, items25);
    tmp94 = keyboardBlurBehavior;
    obj15 = { value: tmp86, children: null };
    obj16 = { value: tmp85, children: null };
    tmp95 = android_keyboardInputMode;
    obj17 = { gestureEventsHandlersHook, children: null };
    tmp94Result = null;
    tmp96 = require("sharedValue");
    if (backdropComponent) {
      obj18 = { animatedIndex: null, animatedPosition: null, style: null };
      obj18[0] = derivedValue7;
      obj18[1] = sharedValue2;
      tmp98 = DEFAULT_KEYBOARD_BEHAVIOR;
      obj18[2] = DEFAULT_KEYBOARD_BEHAVIOR.absoluteFillObject;
      tmp94Result = tmp94(backdropComponent, obj18);
    }
    items26 = [, ];
    items26[0] = tmp94Result;
    obj19 = { shouldCalculateHeight: !tmp25, containerHeight: reactiveSharedValue, containerOffset: reactiveSharedValue1, topInset: num2, bottomInset: num3, detached: tmp26, style: containerStyle, children: null };
    obj20 = { style, BodyComponent, children: null };
    tmp94Result1 = null;
    if (null !== backgroundComponent) {
      obj21 = { animatedIndex: null, animatedPosition: null, backgroundComponent: null, backgroundStyle: null };
      obj21[0] = derivedValue7;
      obj21[1] = sharedValue2;
      obj21[2] = backgroundComponent;
      obj21[3] = backgroundStyle;
      str = "BottomSheetBackgroundContainer";
      tmp94Result1 = tmp94(require("BottomSheetBackgroundContainer").BottomSheetBackgroundContainer, obj21, "BottomSheetBackgroundContainer");
    }
    items27 = [, , ];
    items27[0] = tmp94Result1;
    obj22 = { pointerEvents: "box-none", accessible, accessibilityRole: null, accessibilityLabel: null, keyboardBehavior: null, detached: null, children: null };
    obj22[2] = DEFAULT_ACCESSIBILITY_ROLE;
    obj22[3] = DEFAULT_ACCESSIBILITY_LABEL;
    obj22[4] = keyboardBehavior;
    obj22[5] = tmp26;
    items28 = [, ];
    items28[0] = children;
    tmp = null;
    if (renderFooter) {
      obj23 = { renderFooter: null };
      obj23[0] = renderFooter;
      tmp = tmp94(require("BottomSheetFooter").BottomSheetFooterContainer, obj23);
    }
    items28[1] = tmp;
    obj22[6] = items28;
    items27[1] = tmp95(require("memo").BottomSheetContent, obj22);
    tmp = null;
    if (null !== handleComponent) {
      obj24 = { animatedIndex: null, animatedPosition: null, handleHeight: null, enableHandlePanningGesture: null, enableOverDrag: null, enablePanDownToClose: null, overDragResistanceFactor: null, keyboardBehavior: null, handleComponent: null, handleStyle: null, handleIndicatorStyle: null };
      obj24[0] = derivedValue7;
      obj24[1] = sharedValue2;
      obj24[2] = reactiveSharedValue2;
      obj24[3] = enableHandlePanningGesture;
      obj24[4] = enableOverDrag;
      obj24[5] = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
      obj24[6] = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
      obj24[7] = keyboardBehavior;
      obj24[8] = handleComponent;
      obj24[9] = handleStyle;
      obj24[10] = handleIndicatorStyle;
      str2 = "BottomSheetHandleContainer";
      tmp = tmp94(require("BottomSheetHandle").BottomSheetHandleContainer, obj24, "BottomSheetHandleContainer");
    }
    items27[2] = tmp;
    obj20[2] = items27;
    obj19[7] = tmp95(require("memo").BottomSheetBody, obj20);
    items26[1] = tmp94(require("BottomSheetHostingContainer").BottomSheetHostingContainer, obj19, "BottomSheetContainer");
    obj17[1] = items26;
    obj16[1] = tmp95(tmp96, obj17);
    obj15[1] = tmp94(require("BottomSheetContext").BottomSheetInternalProvider, obj16);
    return tmp94(require("BottomSheetContext").BottomSheetProvider, obj15);
  }
}
const memoResult = memo(forwardRef(BottomSheet));
memoResult.displayName = "BottomSheet";

export default memoResult;