// _runtime/05403_BottomSheet.js
import _modDef38 from "metro/00038__.js";
import _mod1652 from "metro/01652__.js";
import value22 from "05401_value2.js";
import _mod5417 from "metro/05417__.js";
import sharedValueDefault from "05592_sharedValue.js";
import _slicedToArray from "metro/00032__.js";
import noop_mod from "metro/00019__.js";

const module_1652 = _mod1652;

require = fn;
let noop = fn(19);
({
  useMemo: closure_4,
  useCallback: hasOwnProperty,
  useImperativeHandle: closure_6,
  useEffect: metroImportDefault,
  forwardRef,
  memo,
} = noop);
let noop = noop_mod;
get_ActivityIndicator = fn(17);
({ Platform: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const result = module_1652.addWhitelistedUIProps({ decelerationRate: true });
let closure_12 = {
  code: "(function pnpm_BottomSheetTsx1(){let[topInset,bottomInset,$modal,_animatedContainerHeight]=this.__closure;const verticalInset=topInset+bottomInset;return $modal?_animatedContainerHeight.value-verticalInset:_animatedContainerHeight.value;})",
};
let closure_13 = {
  code: "(function pnpm_BottomSheetTsx2(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.value[animatedSnapPoints.value.length-1];})",
};
let closure_14 = {
  code: "(function pnpm_BottomSheetTsx3(){let[animatedContainerHeight,$modal,detached,bottomInset]=this.__closure;let closedPosition=animatedContainerHeight.value;if($modal||detached){closedPosition=animatedContainerHeight.value+bottomInset;}return closedPosition;})",
};
let closure_15 = {
  code: "(function pnpm_BottomSheetTsx4(){let[animatedContainerHeight,animatedHighestSnapPoint]=this.__closure;return animatedContainerHeight.value-animatedHighestSnapPoint.value;})",
};
let closure_16 = {
  code: "(function pnpm_BottomSheetTsx5(){let[_providedContainerHeight,animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,handleComponent,animatedHandleHeight,INITIAL_HANDLE_HEIGHT,animatedSnapPoints,INITIAL_SNAP_POINT]=this.__closure;let isContainerHeightCalculated=false;if(_providedContainerHeight!==null||_providedContainerHeight!==undefined){isContainerHeightCalculated=true;}if(animatedContainerHeight.value!==INITIAL_CONTAINER_HEIGHT){isContainerHeightCalculated=true;}let isHandleHeightCalculated=false;if(handleComponent===null){animatedHandleHeight.value=0;isHandleHeightCalculated=true;}if(animatedHandleHeight.value!==INITIAL_HANDLE_HEIGHT){isHandleHeightCalculated=true;}let isSnapPointsNormalized=false;if(animatedSnapPoints.value[0]!==INITIAL_SNAP_POINT){isSnapPointsNormalized=true;}return isContainerHeightCalculated&&isHandleHeightCalculated&&isSnapPointsNormalized;})",
};
let closure_17 = {
  code: "(function pnpm_BottomSheetTsx6(){let[animatedPosition,animatedClosedPosition,SHEET_STATE,animatedContainerHeight,animatedSheetHeight,animatedKeyboardHeightInContainer,keyboardBehavior,KEYBOARD_BEHAVIOR,isInTemporaryPosition]=this.__closure;if(animatedPosition.value>=animatedClosedPosition.value){return SHEET_STATE.CLOSED;}const extendedPosition=animatedContainerHeight.value-animatedSheetHeight.value;if(animatedPosition.value===extendedPosition){return SHEET_STATE.EXTENDED;}const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;const extendedPositionWithKeyboard=Math.max(0,animatedContainerHeight.value-(animatedSheetHeight.value+keyboardHeightInContainer));if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&isInTemporaryPosition.value&&animatedPosition.value===extendedPositionWithKeyboard){return SHEET_STATE.EXTENDED;}if(animatedPosition.value===0){return SHEET_STATE.FILL_PARENT;}if(animatedPosition.value<extendedPosition){return SHEET_STATE.OVER_EXTENDED;}return SHEET_STATE.OPENED;})",
};
let closure_18 = {
  code: "(function pnpm_BottomSheetTsx7(){let[enableContentPanningGesture,SCROLLABLE_STATE,animatedScrollableOverrideState,animatedSheetState,SHEET_STATE,animatedKeyboardState,KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE]=this.__closure;if(!enableContentPanningGesture){return SCROLLABLE_STATE.UNLOCKED;}if(animatedScrollableOverrideState.value!==SCROLLABLE_STATE.UNDETERMINED){return animatedScrollableOverrideState.value;}if(animatedSheetState.value===SHEET_STATE.FILL_PARENT){return SCROLLABLE_STATE.UNLOCKED;}if(animatedSheetState.value===SHEET_STATE.EXTENDED){return SCROLLABLE_STATE.UNLOCKED;}if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return SCROLLABLE_STATE.UNLOCKED;}return SCROLLABLE_STATE.LOCKED;})",
};
let closure_19 = {
  code: "(function pnpm_BottomSheetTsx8(){let[animatedSnapPoints,animatedContainerHeight,isLayoutCalculated,interpolate,animatedPosition,Extrapolation,android_keyboardInputMode,KEYBOARD_INPUT_MODE,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE,isInTemporaryPosition,animatedCurrentIndex,animatedNextPositionIndex]=this.__closure;const adjustedSnapPoints=animatedSnapPoints.value.slice().reverse();const adjustedSnapPointsIndexes=animatedSnapPoints.value.slice().map(function(_,index){return index;}).reverse();adjustedSnapPoints.push(animatedContainerHeight.value);adjustedSnapPointsIndexes.push(-1);const currentIndex=isLayoutCalculated.value?interpolate(animatedPosition.value,adjustedSnapPoints,adjustedSnapPointsIndexes,Extrapolation.CLAMP):-1;if(android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize&&animatedAnimationSource.value===ANIMATION_SOURCE.KEYBOARD&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&isInTemporaryPosition.value){return Math.max(animatedCurrentIndex.value,currentIndex);}if(animatedAnimationSource.value===ANIMATION_SOURCE.SNAP_POINT_CHANGE&&animatedAnimationState.value===ANIMATION_STATE.RUNNING){return animatedNextPositionIndex.value;}return currentIndex;})",
};
let closure_20 = {
  code: "(function pnpm_BottomSheetTsx9(){let[cancelAnimation,animatedPosition,animatedAnimationSource,ANIMATION_SOURCE,animatedAnimationState,ANIMATION_STATE]=this.__closure;cancelAnimation(animatedPosition);animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;})",
};
let closure_21 = {
  code: "(function animateToPositionCompleted_Pnpm_BottomSheetTsx10(isFinished){let[__DEV__,runOnJS,print,animatedCurrentIndex,animatedNextPosition,animatedNextPositionIndex,animatedAnimationSource,ANIMATION_SOURCE,isAnimatedOnMount,isForcedClosing,animatedAnimationState,ANIMATION_STATE,INITIAL_VALUE,animatedContainerHeightDidChange]=this.__closure;if(!isFinished){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPositionCompleted',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedNextPosition:animatedNextPosition.value,animatedNextPositionIndex:animatedNextPositionIndex.value}});}if(animatedAnimationSource.value===ANIMATION_SOURCE.MOUNT){isAnimatedOnMount.value=true;}isForcedClosing.value=false;animatedAnimationSource.value=ANIMATION_SOURCE.NONE;animatedAnimationState.value=ANIMATION_STATE.STOPPED;animatedNextPosition.value=INITIAL_VALUE;animatedNextPositionIndex.value=INITIAL_VALUE;animatedContainerHeightDidChange.value=false;})",
};
let closure_22 = {
  code: "(function animateToPosition_Pnpm_BottomSheetTsx11(position,source,velocity=0,configs){let[__DEV__,runOnJS,print,animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,stopAnimation,animatedAnimationSource,animatedKeyboardState,KEYBOARD_STATE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedKeyboardHeightInContainer,animatedNextPositionIndex,animatedSnapPoints,handleOnAnimate,animate,_providedAnimationConfigs,_providedOverrideReduceMotion,animateToPositionCompleted]=this.__closure;if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'animateToPosition',params:{currentPosition:animatedPosition.value,nextPosition:position,source:source}});}if(position===animatedPosition.value||position===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&position===animatedNextPosition.value){return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){stopAnimation();}animatedAnimationState.value=ANIMATION_STATE.RUNNING;animatedAnimationSource.value=source;animatedNextPosition.value=position;let offset=0;if(animatedKeyboardState.value===KEYBOARD_STATE.SHOWN&&keyboardBehavior!==KEYBOARD_BEHAVIOR.extend&&position<animatedPosition.value){offset=animatedKeyboardHeightInContainer.value;}animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(position+offset);runOnJS(handleOnAnimate)(animatedNextPositionIndex.value,position,source);animatedPosition.value=animate({point:position,configs:configs||_providedAnimationConfigs,velocity:velocity,overrideReduceMotion:_providedOverrideReduceMotion,onComplete:animateToPositionCompleted});})",
};
let closure_23 = {
  code: "(function setToPosition_Pnpm_BottomSheetTsx12(targetPosition){const setToPosition_Pnpm_BottomSheetTsx12=this._recur;let[animatedPosition,animatedAnimationState,ANIMATION_STATE,animatedNextPosition,__DEV__,runOnJS,print,BottomSheet,animatedNextPositionIndex,animatedSnapPoints,stopAnimation,animatedContainerHeightDidChange]=this.__closure;if(targetPosition===animatedPosition.value||targetPosition===undefined||animatedAnimationState.value===ANIMATION_STATE.RUNNING&&targetPosition===animatedNextPosition.value){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:setToPosition_Pnpm_BottomSheetTsx12.name,params:{currentPosition:animatedPosition.value,targetPosition:targetPosition}});}animatedNextPosition.value=targetPosition;animatedNextPositionIndex.value=animatedSnapPoints.value.indexOf(targetPosition);stopAnimation();animatedPosition.value=targetPosition;animatedContainerHeightDidChange.value=false;})",
};
let closure_24 = {
  code: "(function getEvaluatedPosition_Pnpm_BottomSheetTsx13(source){let[animatedCurrentIndex,animatedSnapPoints,animatedKeyboardState,animatedHighestSnapPoint,ANIMATION_SOURCE,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,KEYBOARD_STATE,animatedContentGestureState,State,animatedHandleGestureState,isInTemporaryPosition,keyboardBehavior,KEYBOARD_BEHAVIOR,Platform,android_keyboardInputMode,animatedKeyboardHeightInContainer,animatedPosition,isAnimatedOnMount,_providedIndex,animatedClosedPosition]=this.__closure;const currentIndex=animatedCurrentIndex.value;const snapPoints=animatedSnapPoints.value;const keyboardState=animatedKeyboardState.value;const highestSnapPoint=animatedHighestSnapPoint.value;if(source===ANIMATION_SOURCE.KEYBOARD&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.restore&&keyboardState===KEYBOARD_STATE.HIDDEN&&animatedContentGestureState.value!==State.ACTIVE&&animatedHandleGestureState.value!==State.ACTIVE){isInTemporaryPosition.value=false;const nextPosition=snapPoints[currentIndex];return nextPosition;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.extend&&keyboardState===KEYBOARD_STATE.SHOWN){return highestSnapPoint;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.fillParent&&keyboardState===KEYBOARD_STATE.SHOWN){isInTemporaryPosition.value=true;return 0;}if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive&&keyboardState===KEYBOARD_STATE.SHOWN&&!(Platform.OS==='android'&&android_keyboardInputMode==='adjustResize')){isInTemporaryPosition.value=true;const keyboardHeightInContainer=animatedKeyboardHeightInContainer.value;return Math.max(0,highestSnapPoint-keyboardHeightInContainer);}if(isInTemporaryPosition.value){return animatedPosition.value;}if(!isAnimatedOnMount.value){return _providedIndex===-1?animatedClosedPosition.value:snapPoints[_providedIndex];}return snapPoints[currentIndex];})",
};
let closure_25 = {
  code: "(function evaluatePosition_Pnpm_BottomSheetTsx14(source,animationConfigs){let[isForcedClosing,ANIMATION_SOURCE,isLayoutCalculated,getEvaluatedPosition,isAnimatedOnMount,animateOnMount,animateToPosition,setToPosition,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedNextPositionIndex,isInTemporaryPosition,animatedClosedPosition,animatedCurrentIndex,animatedSnapPoints,animatedIndex,reduceMotion,animatedPosition]=this.__closure;if(isForcedClosing.value&&source!==ANIMATION_SOURCE.USER){return;}if(!isLayoutCalculated.value){return;}const proposedPosition=getEvaluatedPosition(source);if(!isAnimatedOnMount.value){if(animateOnMount){animateToPosition(proposedPosition,ANIMATION_SOURCE.MOUNT,undefined,animationConfigs);}else{setToPosition(proposedPosition);isAnimatedOnMount.value=true;}return;}if(animatedContainerHeightDidChange.value){setToPosition(proposedPosition);return;}if(animatedAnimationState.value===ANIMATION_STATE.RUNNING){if(animatedNextPositionIndex.value===-1&&!isInTemporaryPosition.value){setToPosition(animatedClosedPosition.value);return;}if(animatedNextPositionIndex.value!==animatedCurrentIndex.value){animateToPosition(animatedSnapPoints.value[animatedNextPositionIndex.value],source,undefined,animationConfigs);return;}}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING&&animatedIndex.value===-1){if(reduceMotion&&animatedSnapPoints.value[animatedIndex.value]!==animatedPosition.value){return;}setToPosition(animatedClosedPosition.value);return;}animateToPosition(proposedPosition,source,undefined,animationConfigs);})",
};
let closure_26 = {
  code: "(function handleSnapToPosition_Pnpm_BottomSheetTsx15(position,animationConfigs){const handleSnapToPosition_Pnpm_BottomSheetTsx15=this._recur;let[__DEV__,print,BottomSheet,normalizeSnapPoint,animatedContainerHeight,isLayoutCalculated,animatedNextPosition,isForcedClosing,isInTemporaryPosition,runOnUI,animateToPosition,ANIMATION_SOURCE]=this.__closure;if(__DEV__){print({component:BottomSheet.name,method:handleSnapToPosition_Pnpm_BottomSheetTsx15.name,params:{position:position}});}const nextPosition=normalizeSnapPoint(position,animatedContainerHeight.value);if(!isLayoutCalculated||nextPosition===animatedNextPosition.value||isForcedClosing.value){return;}isInTemporaryPosition.value=true;runOnUI(animateToPosition)(nextPosition,ANIMATION_SOURCE.USER,0,animationConfigs);})",
};
let closure_27 = {
  code: "(function pnpm_BottomSheetTsx16(){let[nextPosition,animatedPosition,index,animatedNextPositionIndex,animatedAnimationState,ANIMATION_STATE,animatedCurrentIndex,animatedNextPosition,stopAnimation,animatedContainerHeightDidChange]=this.__closure;if(nextPosition===animatedPosition.value&&index===animatedNextPositionIndex.value&&animatedAnimationState.value!==ANIMATION_STATE.RUNNING){animatedCurrentIndex.value=index;return;}animatedNextPosition.value=nextPosition;animatedNextPositionIndex.value=index;animatedCurrentIndex.value=index;stopAnimation();animatedPosition.value=nextPosition;animatedContainerHeightDidChange.value=false;})",
};
let closure_28 = {
  code: "(function pnpm_BottomSheetTsx17(){let[animatedContainerHeight]=this.__closure;return animatedContainerHeight.value;})",
};
let closure_29 = {
  code: "(function pnpm_BottomSheetTsx18(result,previous){let[INITIAL_CONTAINER_HEIGHT,animatedContainerHeightDidChange,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,animatedNextPositionIndex,animateToPosition,animatedClosedPosition]=this.__closure;if(result===INITIAL_CONTAINER_HEIGHT){return;}animatedContainerHeightDidChange.value=result!==previous;if(animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE&&animatedNextPositionIndex.value===-1){animateToPosition(animatedClosedPosition.value,ANIMATION_SOURCE.GESTURE);}})",
};
let closure_30 = {
  code: "(function pnpm_BottomSheetTsx19(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.value;})",
};
let closure_31 = {
  code: "(function pnpm_BottomSheetTsx20(result,previous){let[isAnimatedOnMount,isLayoutCalculated,__DEV__,runOnJS,print,evaluatePosition,ANIMATION_SOURCE]=this.__closure;if(JSON.stringify(result)===JSON.stringify(previous)&&isAnimatedOnMount.value){return;}if(!isLayoutCalculated.value){return;}if(__DEV__){runOnJS(print)({component:'BottomSheet',method:'useAnimatedReaction::OnSnapPointChange',category:'effect',params:{result:result}});}evaluatePosition(ANIMATION_SOURCE.SNAP_POINT_CHANGE);})",
};
let closure_32 = {
  code: "(function pnpm_BottomSheetTsx21(){let[animatedKeyboardState,animatedKeyboardHeight]=this.__closure;return{_keyboardState:animatedKeyboardState.value,_keyboardHeight:animatedKeyboardHeight.value};})",
};
let closure_33 = {
  code: "(function pnpm_BottomSheetTsx22(result,_previousResult){let[KEYBOARD_STATE,animatedAnimationState,ANIMATION_STATE,animatedAnimationSource,ANIMATION_SOURCE,__DEV__,runOnJS,print,BottomSheet,animatedKeyboardHeightInContainer,$modal,bottomInset,animatedContainerOffset,Platform,android_keyboardInputMode,KEYBOARD_INPUT_MODE,keyboardBehavior,KEYBOARD_BEHAVIOR,animatedContentGestureState,State,animatedHandleGestureState,keyboardBlurBehavior,KEYBOARD_BLUR_BEHAVIOR,getKeyboardAnimationConfigs,keyboardAnimationEasing,keyboardAnimationDuration,evaluatePosition]=this.__closure;const{_keyboardState:_keyboardState,_keyboardHeight:_keyboardHeight}=result;const _previousKeyboardState=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardState;const _previousKeyboardHeight=_previousResult===null||_previousResult===void 0?void 0:_previousResult._keyboardHeight;if(_keyboardState===_previousKeyboardState&&_keyboardHeight===_previousKeyboardHeight){return;}if(_keyboardState===KEYBOARD_STATE.UNDETERMINED){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&animatedAnimationState.value===ANIMATION_STATE.RUNNING&&animatedAnimationSource.value===ANIMATION_SOURCE.GESTURE){return;}if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnKeyboardStateChange',category:'effect',params:{keyboardState:_keyboardState,keyboardHeight:_keyboardHeight}});}animatedKeyboardHeightInContainer.value=_keyboardHeight===0?0:$modal?Math.abs(_keyboardHeight-Math.abs(bottomInset-animatedContainerOffset.value.bottom)):Math.abs(_keyboardHeight-animatedContainerOffset.value.bottom);if(Platform.OS==='android'&&android_keyboardInputMode===KEYBOARD_INPUT_MODE.adjustResize){animatedKeyboardHeightInContainer.value=0;if(keyboardBehavior===KEYBOARD_BEHAVIOR.interactive){return;}}const hasActiveGesture=animatedContentGestureState.value===State.ACTIVE||animatedContentGestureState.value===State.BEGAN||animatedHandleGestureState.value===State.ACTIVE||animatedHandleGestureState.value===State.BEGAN;if(hasActiveGesture){return;}if(_keyboardState===KEYBOARD_STATE.HIDDEN&&keyboardBlurBehavior===KEYBOARD_BLUR_BEHAVIOR.none){return;}const animationConfigs=getKeyboardAnimationConfigs(keyboardAnimationEasing.value,keyboardAnimationDuration.value);evaluatePosition(ANIMATION_SOURCE.KEYBOARD,animationConfigs);})",
};
let closure_34 = {
  code: "(function pnpm_BottomSheetTsx23(){let[animatedPosition]=this.__closure;return animatedPosition.value;})",
};
let closure_35 = {
  code: "(function pnpm_BottomSheetTsx24(_animatedPosition){let[_providedAnimatedPosition,topInset]=this.__closure;if(_providedAnimatedPosition){_providedAnimatedPosition.value=_animatedPosition+topInset;}})",
};
let closure_36 = {
  code: "(function pnpm_BottomSheetTsx25(){let[animatedIndex]=this.__closure;return animatedIndex.value;})",
};
let closure_37 = {
  code: "(function pnpm_BottomSheetTsx26(_animatedIndex){let[_providedAnimatedIndex]=this.__closure;if(_providedAnimatedIndex){_providedAnimatedIndex.value=_animatedIndex;}})",
};
let closure_38 = {
  code: "(function pnpm_BottomSheetTsx27(){let[animatedIndex,animatedPosition,animatedAnimationState,animatedContentGestureState,animatedHandleGestureState]=this.__closure;return{_animatedIndex:animatedIndex.value,_animatedPosition:animatedPosition.value,_animationState:animatedAnimationState.value,_contentGestureState:animatedContentGestureState.value,_handleGestureState:animatedHandleGestureState.value};})",
};
let closure_39 = {
  code: "(function pnpm_BottomSheetTsx28({_animatedIndex:_animatedIndex,_animatedPosition:_animatedPosition,_animationState:_animationState,_contentGestureState:_contentGestureState,_handleGestureState:_handleGestureState}){let[ANIMATION_STATE,animatedNextPosition,INITIAL_VALUE,animatedNextPositionIndex,State,reduceMotion,animatedCurrentIndex,animatedSnapPoints,__DEV__,runOnJS,print,BottomSheet,handleOnChange,_providedOnClose]=this.__closure;if(_animationState!==ANIMATION_STATE.STOPPED){return;}if(animatedNextPosition.value!==INITIAL_VALUE&&animatedNextPositionIndex.value!==INITIAL_VALUE&&(_animatedPosition!==animatedNextPosition.value||_animatedIndex!==animatedNextPositionIndex.value)){return;}if(_animatedIndex%1!==0){return;}const hasNoActiveGesture=(_contentGestureState===State.END||_contentGestureState===State.UNDETERMINED||_contentGestureState===State.CANCELLED)&&(_handleGestureState===State.END||_handleGestureState===State.UNDETERMINED||_handleGestureState===State.CANCELLED);if(!hasNoActiveGesture){return;}if(reduceMotion&&_animatedIndex===animatedCurrentIndex.value&&animatedSnapPoints.value[_animatedIndex]!==_animatedPosition){return;}if(_animatedIndex!==animatedCurrentIndex.value){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::OnChange',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}animatedCurrentIndex.value=_animatedIndex;runOnJS(handleOnChange)(_animatedIndex,_animatedPosition);}if(_animatedIndex===-1&&_providedOnClose){if(__DEV__){runOnJS(print)({component:BottomSheet.name,method:'useAnimatedReaction::onClose',category:'effect',params:{animatedCurrentIndex:animatedCurrentIndex.value,animatedIndex:_animatedIndex}});}runOnJS(_providedOnClose)();}})",
};
class BottomSheet {
  constructor(arg0, arg1) {
    ({ animationConfigs, index } = global);
    num = 0;
    if (undefined !== index) {
      num = index;
    }
    closure_0 = num;
    ({ snapPoints, initialPosition } = global);
    if (undefined === initialPosition) {
      tmp = closure_0;
      tmp2 = closure_2;
      initialPosition = closure_0(closure_2[5]).INITIAL_POSITION;
    }
    DEFAULT_ANIMATE_ON_MOUNT = global.animateOnMount;
    if (undefined === DEFAULT_ANIMATE_ON_MOUNT) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      DEFAULT_ANIMATE_ON_MOUNT = closure_0(closure_2[5]).DEFAULT_ANIMATE_ON_MOUNT;
    }
    closure_1 = DEFAULT_ANIMATE_ON_MOUNT;
    DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = global.enableContentPanningGesture;
    if (undefined === DEFAULT_ENABLE_CONTENT_PANNING_GESTURE) {
      tmp5 = closure_0;
      tmp6 = closure_2;
      DEFAULT_ENABLE_CONTENT_PANNING_GESTURE = closure_0(closure_2[5]).DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    }
    closure_2 = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    ({ enableOverDrag, enableHandlePanningGesture } = global);
    if (undefined === enableOverDrag) {
      tmp7 = closure_0;
      tmp8 = closure_2;
      enableOverDrag = closure_0(closure_2[5]).DEFAULT_ENABLE_OVER_DRAG;
    }
    closure_3 = enableOverDrag;
    DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = global.enablePanDownToClose;
    if (undefined === DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE) {
      tmp9 = closure_0;
      tmp10 = closure_2;
      DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE = closure_0(closure_2[5]).DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    }
    closure_4 = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    DEFAULT_DYNAMIC_SIZING = global.enableDynamicSizing;
    if (undefined === DEFAULT_DYNAMIC_SIZING) {
      tmp11 = closure_0;
      tmp12 = closure_2;
      DEFAULT_DYNAMIC_SIZING = closure_0(closure_2[5]).DEFAULT_DYNAMIC_SIZING;
    }
    closure_5 = DEFAULT_DYNAMIC_SIZING;
    DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = global.overDragResistanceFactor;
    if (undefined === DEFAULT_OVER_DRAG_RESISTANCE_FACTOR) {
      tmp13 = closure_0;
      tmp14 = closure_2;
      DEFAULT_OVER_DRAG_RESISTANCE_FACTOR = closure_0(closure_2[5]).DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    }
    closure_6 = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    overrideReduceMotion = global.overrideReduceMotion;
    closure_7 = overrideReduceMotion;
    ({
      keyboardBehavior,
      style,
      containerStyle,
      backgroundStyle,
      handleStyle,
      handleIndicatorStyle,
      gestureEventsHandlersHook,
    } = global);
    if (undefined === keyboardBehavior) {
      tmp15 = closure_0;
      tmp16 = closure_2;
      keyboardBehavior = closure_0(closure_2[5]).DEFAULT_KEYBOARD_BEHAVIOR;
    }
    DEFAULT_KEYBOARD_BLUR_BEHAVIOR = global.keyboardBlurBehavior;
    if (undefined === DEFAULT_KEYBOARD_BLUR_BEHAVIOR) {
      tmp17 = closure_0;
      tmp18 = closure_2;
      DEFAULT_KEYBOARD_BLUR_BEHAVIOR = closure_0(closure_2[5]).DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    }
    DEFAULT_KEYBOARD_INPUT_MODE = global.android_keyboardInputMode;
    if (undefined === DEFAULT_KEYBOARD_INPUT_MODE) {
      tmp19 = closure_0;
      tmp20 = closure_2;
      DEFAULT_KEYBOARD_INPUT_MODE = closure_0(closure_2[5]).DEFAULT_KEYBOARD_INPUT_MODE;
    }
    DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = global.enableBlurKeyboardOnGesture;
    if (undefined === DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE) {
      tmp21 = closure_0;
      tmp22 = closure_2;
      DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE = closure_0(closure_2[5]).DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    }
    closure_8 = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = global.keyboardIncludeBottomOffset;
    if (undefined === DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET) {
      tmp23 = closure_0;
      tmp24 = closure_2;
      DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET = closure_0(closure_2[5]).DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET;
    }
    ({ containerHeight, containerOffset, topInset } = global);
    num2 = 0;
    if (undefined !== topInset) {
      num2 = topInset;
    }
    bottomInset = global.bottomInset;
    num3 = 0;
    if (undefined !== bottomInset) {
      num3 = bottomInset;
    }
    ({ maxDynamicContentSize, contentHeight, handleHeight, simultaneousHandlers } = global);
    closure_9 = simultaneousHandlers;
    waitFor = global.waitFor;
    closure_10 = waitFor;
    activeOffsetX = global.activeOffsetX;
    closure_11 = activeOffsetX;
    activeOffsetY = global.activeOffsetY;
    closure_12 = activeOffsetY;
    failOffsetX = global.failOffsetX;
    closure_13 = failOffsetX;
    failOffsetY = global.failOffsetY;
    closure_14 = failOffsetY;
    onChange = global.onChange;
    closure_15 = onChange;
    ({ onClose, onAnimate } = global);
    closure_16 = onAnimate;
    $modal = global.$modal;
    tmp25 = undefined !== $modal;
    ({ animatedPosition, animatedIndex } = global);
    if (tmp25) {
      tmp25 = $modal;
    }
    detached = global.detached;
    tmp26 = undefined !== detached && detached;
    ({ handleComponent, backdropComponent, backgroundComponent, renderFooter, accessible, children, BodyComponent } =
      global);
    if (undefined === accessible) {
      tmp27 = closure_0;
      tmp28 = closure_2;
      accessible = closure_0(closure_2[5]).DEFAULT_ACCESSIBLE;
    }
    DEFAULT_ACCESSIBILITY_LABEL = global.accessibilityLabel;
    if (undefined === DEFAULT_ACCESSIBILITY_LABEL) {
      tmp29 = closure_0;
      tmp30 = closure_2;
      DEFAULT_ACCESSIBILITY_LABEL = closure_0(closure_2[5]).DEFAULT_ACCESSIBILITY_LABEL;
    }
    DEFAULT_ACCESSIBILITY_ROLE = global.accessibilityRole;
    if (undefined === DEFAULT_ACCESSIBILITY_ROLE) {
      tmp31 = closure_0;
      tmp32 = closure_2;
      DEFAULT_ACCESSIBILITY_ROLE = closure_0(closure_2[5]).DEFAULT_ACCESSIBILITY_ROLE;
    }
    tmp33 = closure_0;
    tmp34 = closure_2;
    obj = closure_0(closure_2[6]);
    INITIAL_CONTAINER_HEIGHT = containerHeight;
    if (containerHeight == null) {
      INITIAL_CONTAINER_HEIGHT = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    reactiveSharedValue = obj.useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT);
    tmp33Result = tmp33(tmp34[4]);
    items = [, , , ,];
    items[0] = closure_12;
    items[1] = num2;
    items[2] = num3;
    items[3] = tmp25;
    items[4] = reactiveSharedValue;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    [tmp36, tmp37, tmp38, tmp39, tmp40] = items;
    pnpm_BottomSheetTsx1 = function pnpm_BottomSheetTsx1() {
      value = enableOverDrag.value;
      return c2 ? value - (c0 + c1) : value;
    };
    items1 = [, , ,];
    items1[0] = tmp37;
    items1[1] = tmp38;
    items1[2] = tmp39;
    items1[3] = tmp40;
    pnpm_BottomSheetTsx1.__closure = items1;
    pnpm_BottomSheetTsx1.__workletHash = 8782232185200;
    pnpm_BottomSheetTsx1.__initData = tmp36;
    items2 = [, , ,];
    items2[0] = num2;
    items2[1] = num3;
    items2[2] = tmp25;
    items2[3] = reactiveSharedValue;
    derivedValue = tmp33Result.useDerivedValue(pnpm_BottomSheetTsx1, items2);
    closure_17 = derivedValue;
    tmp33Result1 = tmp33(tmp34[6]);
    if (containerOffset == null) {
      containerOffset = tmp33(tmp34[5]).INITIAL_CONTAINER_OFFSET;
    }
    reactiveSharedValue1 = tmp33Result1.useReactiveSharedValue(containerOffset);
    tmp33Result2 = tmp33(tmp34[6]);
    if (handleHeight == null) {
      handleHeight = tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT;
    }
    reactiveSharedValue2 = tmp33Result2.useReactiveSharedValue(handleHeight);
    closure_18 = reactiveSharedValue2;
    tmp33Result3 = tmp33(tmp34[4]);
    sharedValue = tmp33Result3.useSharedValue(0);
    closure_19 = sharedValue;
    tmp33Result4 = tmp33(tmp34[4]);
    if (contentHeight == null) {
      contentHeight = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    }
    sharedValue1 = tmp33Result4.useSharedValue(contentHeight);
    closure_20 = sharedValue1;
    tmp33Result5 = tmp33(tmp34[6]);
    tmp46 = closure_3(
      tmp33Result5.useAnimatedSnapPoints(
        snapPoints,
        derivedValue,
        sharedValue1,
        reactiveSharedValue2,
        sharedValue,
        DEFAULT_DYNAMIC_SIZING,
        maxDynamicContentSize,
      ),
      2,
    );
    first = tmp46[0];
    closure_21 = first;
    tmp48 = tmp46[1];
    closure_22 = tmp48;
    tmp33Result6 = tmp33(tmp34[4]);
    items3 = [,];
    items3[0] = closure_13;
    items3[1] = first;
    closure_0 = undefined;
    [tmp49, tmp50] = items3;
    pnpm_BottomSheetTsx2 = function pnpm_BottomSheetTsx2() {
      return _undefined.value[_undefined.value.length - 1];
    };
    items4 = [];
    items4[0] = tmp50;
    pnpm_BottomSheetTsx2.__closure = items4;
    pnpm_BottomSheetTsx2.__workletHash = 17099201560291;
    pnpm_BottomSheetTsx2.__initData = tmp49;
    items5 = [];
    items5[0] = first;
    derivedValue1 = tmp33Result6.useDerivedValue(pnpm_BottomSheetTsx2, items5);
    closure_23 = derivedValue1;
    tmp33Result7 = tmp33(tmp34[4]);
    items6 = [, , , ,];
    items6[0] = closure_14;
    items6[1] = derivedValue;
    items6[2] = tmp25;
    items6[3] = tmp26;
    items6[4] = num3;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    [tmp52, tmp53, tmp54, tmp55, tmp56] = items6;
    pnpm_BottomSheetTsx3 = function pnpm_BottomSheetTsx3() {
      let sum = _undefined.value;
      let tmp = c1;
      if (!c1) {
        tmp = c2;
      }
      if (tmp) {
        sum = _undefined.value + c3;
      }
      return sum;
    };
    items7 = [, , ,];
    items7[0] = tmp53;
    items7[1] = tmp54;
    items7[2] = tmp55;
    items7[3] = tmp56;
    pnpm_BottomSheetTsx3.__closure = items7;
    pnpm_BottomSheetTsx3.__workletHash = 2359912878104;
    pnpm_BottomSheetTsx3.__initData = tmp52;
    items8 = [, , ,];
    items8[0] = derivedValue;
    items8[1] = tmp25;
    items8[2] = tmp26;
    items8[3] = num3;
    derivedValue2 = tmp33Result7.useDerivedValue(pnpm_BottomSheetTsx3, items8);
    closure_24 = derivedValue2;
    tmp33Result8 = tmp33(tmp34[4]);
    items9 = [, ,];
    items9[0] = closure_15;
    items9[1] = derivedValue;
    items9[2] = derivedValue1;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp58, tmp59, tmp60] = items9;
    pnpm_BottomSheetTsx4 = function pnpm_BottomSheetTsx4() {
      return _undefined.value - _undefined2.value;
    };
    items10 = [,];
    items10[0] = tmp59;
    items10[1] = tmp60;
    pnpm_BottomSheetTsx4.__closure = items10;
    pnpm_BottomSheetTsx4.__workletHash = 7564155046848;
    pnpm_BottomSheetTsx4.__initData = tmp58;
    items11 = [,];
    items11[0] = derivedValue;
    items11[1] = derivedValue1;
    derivedValue3 = tmp33Result8.useDerivedValue(pnpm_BottomSheetTsx4, items11);
    closure_25 = derivedValue3;
    tmp33Result9 = tmp33(tmp34[6]);
    num4 = -1;
    if (!DEFAULT_ANIMATE_ON_MOUNT) {
      num4 = num;
    }
    reactiveSharedValue3 = tmp33Result9.useReactiveSharedValue(num4);
    closure_26 = reactiveSharedValue3;
    tmp33Result10 = tmp33(tmp34[4]);
    sharedValue2 = tmp33Result10.useSharedValue(initialPosition);
    closure_27 = sharedValue2;
    tmp33Result11 = tmp33(tmp34[4]);
    sharedValue3 = tmp33Result11.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    closure_28 = sharedValue3;
    tmp33Result12 = tmp33(tmp34[4]);
    sharedValue4 = tmp33Result12.useSharedValue(tmp33(tmp34[5]).INITIAL_VALUE);
    closure_29 = sharedValue4;
    tmp33Result13 = tmp33(tmp34[4]);
    tmp66 = !DEFAULT_ANIMATE_ON_MOUNT;
    if (DEFAULT_ANIMATE_ON_MOUNT) {
      tmp66 = -1 === num;
    }
    sharedValue5 = tmp33Result13.useSharedValue(tmp66);
    closure_30 = sharedValue5;
    tmp33Result14 = tmp33(tmp34[4]);
    sharedValue6 = tmp33Result14.useSharedValue(false);
    closure_31 = sharedValue6;
    tmp33Result15 = tmp33(tmp34[4]);
    items12 = [, , , , , , , ,];
    items12[0] = closure_16;
    items12[1] = containerHeight;
    items12[2] = derivedValue;
    items12[3] = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    items12[4] = handleComponent;
    items12[5] = reactiveSharedValue2;
    items12[6] = tmp33(tmp34[5]).INITIAL_HANDLE_HEIGHT;
    items12[7] = first;
    items12[8] = tmp33(tmp34[5]).INITIAL_SNAP_POINT;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    [tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77] = items12;
    pnpm_BottomSheetTsx5 = function pnpm_BottomSheetTsx5() {
      let tmp2 = null === c0;
      if (tmp2) {
        tmp2 = undefined === tmp;
      }
      let flag = false;
      if (!tmp2) {
        flag = true;
      }
      if (_undefined2.value !== c2) {
        flag = true;
      }
      let flag2 = false;
      if (null === c3) {
        enablePanDownToClose.value = 0;
        flag2 = true;
      }
      if (enablePanDownToClose.value !== c5) {
        flag2 = true;
      }
      let flag3 = false;
      if (overDragResistanceFactor.value[0] !== c7) {
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
    items13 = [, , , , , , ,];
    items13[0] = tmp70;
    items13[1] = tmp71;
    items13[2] = tmp72;
    items13[3] = tmp73;
    items13[4] = tmp74;
    items13[5] = tmp75;
    items13[6] = tmp76;
    items13[7] = tmp77;
    pnpm_BottomSheetTsx5.__closure = items13;
    pnpm_BottomSheetTsx5.__workletHash = 8220101753126;
    pnpm_BottomSheetTsx5.__initData = tmp69;
    items14 = [, , , ,];
    items14[0] = containerHeight;
    items14[1] = derivedValue;
    items14[2] = reactiveSharedValue2;
    items14[3] = first;
    items14[4] = handleComponent;
    derivedValue4 = tmp33Result15.useDerivedValue(pnpm_BottomSheetTsx5, items14);
    closure_32 = derivedValue4;
    tmp33Result16 = tmp33(tmp34[4]);
    sharedValue7 = tmp33Result16.useSharedValue(false);
    closure_33 = sharedValue7;
    tmp33Result17 = tmp33(tmp34[4]);
    sharedValue8 = tmp33Result17.useSharedValue(false);
    closure_34 = sharedValue8;
    tmp33Result18 = tmp33(tmp34[4]);
    sharedValue9 = tmp33Result18.useSharedValue(false);
    closure_35 = sharedValue9;
    tmp33Result19 = tmp33(tmp34[4]);
    sharedValue10 = tmp33Result19.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    closure_36 = sharedValue10;
    tmp33Result20 = tmp33(tmp34[4]);
    sharedValue11 = tmp33Result20.useSharedValue(tmp33(tmp34[7]).State.UNDETERMINED);
    closure_37 = sharedValue11;
    tmp33Result21 = tmp33(tmp34[6]);
    scrollable = tmp33Result21.useScrollable();
    animatedScrollableType = scrollable.animatedScrollableType;
    animatedScrollableContentOffsetY = scrollable.animatedScrollableContentOffsetY;
    closure_39 = animatedScrollableContentOffsetY;
    animatedScrollableOverrideState = scrollable.animatedScrollableOverrideState;
    closure_40 = animatedScrollableOverrideState;
    isScrollableRefreshable = scrollable.isScrollableRefreshable;
    setScrollableRef = scrollable.setScrollableRef;
    removeScrollableRef = scrollable.removeScrollableRef;
    tmp33Result22 = tmp33(tmp34[6]);
    keyboard = tmp33Result22.useKeyboard({ includeBottomOffset: DEFAULT_KEYBOARD_INCLUDE_BOTTOM_OFFSET });
    state = keyboard.state;
    height = keyboard.height;
    shouldHandleKeyboardEvents = keyboard.shouldHandleKeyboardEvents;
    closure_46 = shouldHandleKeyboardEvents;
    ({ animationDuration, animationEasing } = keyboard);
    tmp33Result23 = tmp33(tmp34[4]);
    sharedValue12 = tmp33Result23.useSharedValue(0);
    closure_47 = sharedValue12;
    tmp33Result24 = tmp33(tmp34[4]);
    reducedMotion = tmp33Result24.useReducedMotion();
    closure_48 = reducedMotion;
    tmp88 = closure_4;
    items15 = [,];
    items15[0] = reducedMotion;
    items15[1] = overrideReduceMotion;
    tmp89 = closure_4(() => {
      if (c7) {
        if (c7 !== _mod1652.ReduceMotion.System) {
          let tmp4 = c7 === _mod1652.ReduceMotion.Always;
        }
        return tmp4;
      }
      tmp4 = reducedMotion;
    }, items15);
    tmp33Result25 = tmp33(tmp34[4]);
    sharedValue13 = tmp33Result25.useSharedValue(tmp33(tmp34[8]).ANIMATION_STATE.UNDETERMINED);
    closure_49 = sharedValue13;
    tmp33Result26 = tmp33(tmp34[4]);
    sharedValue14 = tmp33Result26.useSharedValue(tmp33(tmp34[8]).ANIMATION_SOURCE.MOUNT);
    tmp33Result27 = tmp33(tmp34[4]);
    items16 = [, , , , , , , , ,];
    items16[0] = closure_17;
    items16[1] = sharedValue2;
    items16[2] = derivedValue2;
    items16[3] = tmp33(tmp34[8]).SHEET_STATE;
    items16[4] = derivedValue;
    items16[5] = derivedValue3;
    items16[6] = sharedValue12;
    items16[7] = keyboardBehavior;
    items16[8] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items16[9] = sharedValue7;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    [tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101] = items16;
    pnpm_BottomSheetTsx6 = function pnpm_BottomSheetTsx6() {
      if (_undefined.value >= _undefined2.value) {
        return enableContentPanningGesture.CLOSED;
      } else {
        const diff = enableOverDrag.value - enablePanDownToClose.value;
        if (_undefined.value === diff) {
          return enableContentPanningGesture.EXTENDED;
        } else {
          const _Math = Math;
          if (c6 === _undefined3.interactive) {
            if (enableBlurKeyboardOnGesture.value) {
              if (_undefined.value === tmp11) {
                let OPENED = enableContentPanningGesture.EXTENDED;
              }
              return OPENED;
            }
          }
          if (0 === _undefined.value) {
            OPENED = enableContentPanningGesture.FILL_PARENT;
          } else if (_undefined.value < diff) {
            OPENED = enableContentPanningGesture.OVER_EXTENDED;
          } else {
            OPENED = enableContentPanningGesture.OPENED;
          }
        }
      }
    };
    items17 = [, , , , , , , ,];
    items17[0] = tmp93;
    items17[1] = tmp94;
    items17[2] = tmp95;
    items17[3] = tmp96;
    items17[4] = tmp97;
    items17[5] = tmp98;
    items17[6] = tmp99;
    items17[7] = tmp100;
    items17[8] = tmp101;
    pnpm_BottomSheetTsx6.__closure = items17;
    pnpm_BottomSheetTsx6.__workletHash = 6967658947681;
    pnpm_BottomSheetTsx6.__initData = tmp92;
    items18 = [, , , , , ,];
    items18[0] = derivedValue2;
    items18[1] = derivedValue;
    items18[2] = sharedValue12;
    items18[3] = sharedValue2;
    items18[4] = derivedValue3;
    items18[5] = sharedValue7;
    items18[6] = keyboardBehavior;
    derivedValue5 = tmp33Result27.useDerivedValue(pnpm_BottomSheetTsx6, items18);
    closure_50 = derivedValue5;
    tmp33Result28 = tmp33(tmp34[4]);
    items19 = [, , , , , , , , ,];
    items19[0] = closure_18;
    items19[1] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items19[2] = tmp33(tmp34[8]).SCROLLABLE_STATE;
    items19[3] = animatedScrollableOverrideState;
    items19[4] = derivedValue5;
    items19[5] = tmp33(tmp34[8]).SHEET_STATE;
    items19[6] = state;
    items19[7] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items19[8] = sharedValue13;
    items19[9] = tmp33(tmp34[8]).ANIMATION_STATE;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    [tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112] = items19;
    pnpm_BottomSheetTsx7 = function pnpm_BottomSheetTsx7() {
      if (c0) {
        if (enableContentPanningGesture.value !== _undefined2.UNDETERMINED) {
          let UNLOCKED = enableContentPanningGesture.value;
        } else {
          if (enableOverDrag.value !== enablePanDownToClose.FILL_PARENT) {
            if (enableOverDrag.value !== tmp3.EXTENDED) {
              UNLOCKED = _undefined2.LOCKED;
            }
          }
          UNLOCKED = _undefined2.UNLOCKED;
        }
      } else {
        return _undefined2.UNLOCKED;
      }
    };
    items20 = [, , , , , , , ,];
    items20[0] = tmp104;
    items20[1] = tmp105;
    items20[2] = tmp106;
    items20[3] = tmp107;
    items20[4] = tmp108;
    items20[5] = tmp109;
    items20[6] = tmp110;
    items20[7] = tmp111;
    items20[8] = tmp112;
    pnpm_BottomSheetTsx7.__closure = items20;
    pnpm_BottomSheetTsx7.__workletHash = 12001328135222;
    pnpm_BottomSheetTsx7.__initData = tmp103;
    items21 = [, , , ,];
    items21[0] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items21[1] = sharedValue13;
    items21[2] = state;
    items21[3] = animatedScrollableOverrideState;
    items21[4] = derivedValue5;
    derivedValue6 = tmp33Result28.useDerivedValue(pnpm_BottomSheetTsx7, items21);
    closure_51 = derivedValue6;
    tmp33Result29 = tmp33(tmp34[4]);
    items22 = [, , , , , , , , , , , , , , ,];
    items22[0] = closure_19;
    items22[1] = first;
    items22[2] = derivedValue;
    items22[3] = derivedValue4;
    items22[4] = tmp33(tmp34[4]).interpolate;
    items22[5] = sharedValue2;
    items22[6] = tmp33(tmp34[4]).Extrapolation;
    items22[7] = DEFAULT_KEYBOARD_INPUT_MODE;
    items22[8] = tmp33(tmp34[8]).KEYBOARD_INPUT_MODE;
    items22[9] = sharedValue14;
    items22[10] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items22[11] = sharedValue13;
    items22[12] = tmp33(tmp34[8]).ANIMATION_STATE;
    items22[13] = sharedValue7;
    items22[14] = reactiveSharedValue3;
    items22[15] = sharedValue4;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    [
      tmp114,
      tmp115,
      tmp116,
      tmp117,
      tmp118,
      tmp119,
      tmp120,
      tmp121,
      tmp122,
      tmp123,
      tmp124,
      tmp125,
      tmp126,
      tmp127,
      tmp128,
      tmp129,
    ] = items22;
    pnpm_BottomSheetTsx8 = function pnpm_BottomSheetTsx8() {
      value = _undefined.value;
      const substr = value.slice();
      const reversed = substr.reverse();
      const value3 = _undefined.value;
      const substr1 = value3.slice();
      const mapped = substr1.map((item, index) => index);
      const reversed1 = mapped.reverse();
      reversed.push(_undefined2.value);
      reversed1.push(-1);
      let num = -1;
      if (enableContentPanningGesture.value) {
        num = enableOverDrag(enablePanDownToClose.value, reversed, reversed1, enableDynamicSizing.CLAMP);
      }
      if (c6 === _undefined3.adjustResize) {
        if (enableBlurKeyboardOnGesture.value === simultaneousHandlers.KEYBOARD) {
          if (waitFor.value === activeOffsetX.RUNNING) {
            if (_undefined4.value) {
              const _Math = Math;
              let bound = Math.max(failOffsetX.value, num);
            }
            return bound;
          }
        }
      }
      bound = num;
      if (enableBlurKeyboardOnGesture.value === simultaneousHandlers.SNAP_POINT_CHANGE) {
        bound = num;
        if (waitFor.value === activeOffsetX.RUNNING) {
          bound = failOffsetY.value;
        }
      }
    };
    items23 = [, , , , , , , , , , , , , ,];
    items23[0] = tmp115;
    items23[1] = tmp116;
    items23[2] = tmp117;
    items23[3] = tmp118;
    items23[4] = tmp119;
    items23[5] = tmp120;
    items23[6] = tmp121;
    items23[7] = tmp122;
    items23[8] = tmp123;
    items23[9] = tmp124;
    items23[10] = tmp125;
    items23[11] = tmp126;
    items23[12] = tmp127;
    items23[13] = tmp128;
    items23[14] = tmp129;
    pnpm_BottomSheetTsx8.__closure = items23;
    pnpm_BottomSheetTsx8.__workletHash = 2929503613996;
    pnpm_BottomSheetTsx8.__initData = tmp114;
    items24 = [, , , , , , , , ,];
    items24[0] = DEFAULT_KEYBOARD_INPUT_MODE;
    items24[1] = sharedValue14;
    items24[2] = sharedValue13;
    items24[3] = derivedValue;
    items24[4] = reactiveSharedValue3;
    items24[5] = sharedValue4;
    items24[6] = sharedValue2;
    items24[7] = first;
    items24[8] = sharedValue7;
    items24[9] = derivedValue4;
    derivedValue7 = tmp33Result29.useDerivedValue(pnpm_BottomSheetTsx8, items24);
    closure_52 = derivedValue7;
    tmp131 = closure_5;
    items25 = [, ,];
    items25[0] = onChange;
    items25[1] = reactiveSharedValue3;
    items25[2] = tmp48;
    tmp132 = closure_5(function handleOnChange(arg0, arg1) {
      if (c15) {
        if (arg0 === _undefined9.value) {
          let PROVIDED = value22.SNAP_POINT_TYPE.DYNAMIC;
        } else {
          PROVIDED = value22.SNAP_POINT_TYPE.PROVIDED;
        }
        tmp(arg0, arg1, PROVIDED);
      }
    }, items25);
    items26 = [, ,];
    items26[0] = onAnimate;
    items26[1] = reactiveSharedValue3;
    items26[2] = sharedValue2;
    tmp133 = closure_5(function handleOnAnimate(arg0, arg1, arg2) {
      if (c16) {
        let tmp3 = arg0 === _undefined10.value;
        if (tmp3) {
          tmp3 = -1 !== arg0;
        }
        if (!tmp3) {
          tmp(_undefined10.value, arg0, sharedValue2.value, arg1, arg2);
        }
      }
    }, items26);
    items27 = [, , , , , ,];
    items27[0] = closure_20;
    items27[1] = tmp33(tmp34[4]).cancelAnimation;
    items27[2] = sharedValue2;
    items27[3] = sharedValue14;
    items27[4] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items27[5] = sharedValue13;
    items27[6] = tmp33(tmp34[8]).ANIMATION_STATE;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    [tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140] = items27;
    pnpm_BottomSheetTsx9 = function pnpm_BottomSheetTsx9() {
      _undefined(c1);
      c2.value = enableOverDrag.NONE;
      c4.value = enableDynamicSizing.STOPPED;
    };
    items28 = [, , , , ,];
    items28[0] = tmp135;
    items28[1] = tmp136;
    items28[2] = tmp137;
    items28[3] = tmp138;
    items28[4] = tmp139;
    items28[5] = tmp140;
    pnpm_BottomSheetTsx9.__closure = items28;
    pnpm_BottomSheetTsx9.__workletHash = 1065000003208;
    pnpm_BottomSheetTsx9.__initData = tmp134;
    items29 = [, ,];
    items29[0] = sharedValue2;
    items29[1] = sharedValue13;
    items29[2] = sharedValue14;
    tmp131Result = tmp131(pnpm_BottomSheetTsx9, items29);
    closure_53 = tmp131Result;
    items30 = [, , , , , , , , , , , , , ,];
    items30[0] = closure_21;
    items30[1] = false;
    items30[2] = tmp33(tmp34[4]).runOnJS;
    items30[3] = tmp33(tmp34[9]).print;
    items30[4] = reactiveSharedValue3;
    items30[5] = sharedValue3;
    items30[6] = sharedValue4;
    items30[7] = sharedValue14;
    items30[8] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items30[9] = sharedValue5;
    items30[10] = sharedValue8;
    items30[11] = sharedValue13;
    items30[12] = tmp33(tmp34[8]).ANIMATION_STATE;
    items30[13] = tmp33(tmp34[5]).INITIAL_VALUE;
    items30[14] = sharedValue9;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    [
      tmp142,
      tmp143,
      tmp144,
      tmp145,
      tmp146,
      tmp147,
      tmp148,
      tmp149,
      tmp150,
      tmp151,
      tmp152,
      tmp153,
      tmp154,
      tmp155,
      tmp156,
    ] = items30;
    animateToPositionCompleted = function animateToPositionCompleted(arg0) {
      if (arg0) {
        if (c0) {
          const obj = { component: "BottomSheet", method: "animateToPositionCompleted", params: null };
          const obj2 = {
            animatedCurrentIndex: enableOverDrag.value,
            animatedNextPosition: enablePanDownToClose.value,
            animatedNextPositionIndex: enableDynamicSizing.value,
          };
          obj.params = obj2;
          _undefined2(c2)(obj);
        }
        if (overDragResistanceFactor.value === _undefined3.MOUNT) {
          c8.value = true;
        }
        c9.value = false;
        overDragResistanceFactor.value = _undefined3.NONE;
        c10.value = activeOffsetX.STOPPED;
        enablePanDownToClose.value = _undefined4;
        enableDynamicSizing.value = _undefined4;
        c13.value = false;
      }
    };
    items31 = [, , , , , , , , , , , , ,];
    items31[0] = tmp143;
    items31[1] = tmp144;
    items31[2] = tmp145;
    items31[3] = tmp146;
    items31[4] = tmp147;
    items31[5] = tmp148;
    items31[6] = tmp149;
    items31[7] = tmp150;
    items31[8] = tmp151;
    items31[9] = tmp152;
    items31[10] = tmp153;
    items31[11] = tmp154;
    items31[12] = tmp155;
    items31[13] = tmp156;
    animateToPositionCompleted.__closure = items31;
    animateToPositionCompleted.__workletHash = 2748937730067;
    animateToPositionCompleted.__initData = tmp142;
    items32 = [, , , , , , , , , , , , , , , , , , , , ,];
    items32[0] = closure_22;
    items32[1] = false;
    tmp131Result1 = tmp131(animateToPositionCompleted, []);
    items32[2] = tmp33(tmp34[4]).runOnJS;
    items32[3] = tmp33(tmp34[9]).print;
    items32[4] = sharedValue2;
    items32[5] = sharedValue13;
    items32[6] = tmp33(tmp34[8]).ANIMATION_STATE;
    items32[7] = sharedValue3;
    items32[8] = tmp131Result;
    items32[9] = sharedValue14;
    items32[10] = state;
    items32[11] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items32[12] = keyboardBehavior;
    items32[13] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items32[14] = sharedValue12;
    items32[15] = sharedValue4;
    items32[16] = first;
    items32[17] = tmp133;
    items32[18] = tmp33(tmp34[9]).animate;
    items32[19] = animationConfigs;
    items32[20] = overrideReduceMotion;
    items32[21] = tmp131Result1;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    [
      tmp158,
      tmp159,
      tmp160,
      tmp161,
      tmp162,
      tmp163,
      tmp164,
      tmp165,
      tmp166,
      tmp167,
      tmp168,
      tmp169,
      tmp170,
      tmp171,
      tmp172,
      tmp173,
      tmp174,
      tmp175,
      tmp176,
      tmp177,
      tmp178,
      tmp179,
    ] = items32;
    animateToPosition = function animateToPosition(nextPosition, source) {
      let num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      if (c0) {
        const obj = { component: "BottomSheet", method: "animateToPosition", params: null };
        const obj2 = { currentPosition: enableOverDrag.value, nextPosition, source };
        obj.params = obj2;
        _undefined2(c2)(obj);
      }
      if (nextPosition !== enableOverDrag.value) {
        if (undefined !== nextPosition) {
          if (enablePanDownToClose.value !== enableDynamicSizing.RUNNING) {
            if (enablePanDownToClose.value === enableDynamicSizing.RUNNING) {
              _undefined3();
            }
            enablePanDownToClose.value = enableDynamicSizing.RUNNING;
            c8.value = source;
            overDragResistanceFactor.value = nextPosition;
            let tmp12 = simultaneousHandlers.value === waitFor.SHOWN;
            if (tmp12) {
              tmp12 = c11 !== _undefined4.extend;
            }
            if (tmp12) {
              tmp12 = nextPosition < enableOverDrag.value;
            }
            let num2 = 0;
            if (tmp12) {
              num2 = failOffsetX.value;
            }
            let tmp16 = arg3;
            value = _undefined5.value;
            failOffsetY.value = value.indexOf(nextPosition + num2);
            _undefined2(c16)(failOffsetY.value, nextPosition, source);
            const obj3 = {
              point: nextPosition,
              configs: null,
              velocity: null,
              overrideReduceMotion: null,
              onComplete: null,
            };
            if (!arg3) {
              tmp16 = c18;
            }
            obj3.configs = tmp16;
            obj3.velocity = num;
            obj3.overrideReduceMotion = _undefined7;
            obj3.onComplete = _undefined8;
            enableOverDrag.value = animatedContainerHeight(obj3);
          }
        }
      }
    };
    items33 = [, , , , , , , , , , , , , , , , , , , ,];
    items33[0] = tmp159;
    items33[1] = tmp160;
    items33[2] = tmp161;
    items33[3] = tmp162;
    items33[4] = tmp163;
    items33[5] = tmp164;
    items33[6] = tmp165;
    items33[7] = tmp166;
    items33[8] = tmp167;
    items33[9] = tmp168;
    items33[10] = tmp169;
    items33[11] = tmp170;
    items33[12] = tmp171;
    items33[13] = tmp172;
    items33[14] = tmp173;
    items33[15] = tmp174;
    items33[16] = tmp175;
    items33[17] = tmp176;
    items33[18] = tmp177;
    items33[19] = tmp178;
    items33[20] = tmp179;
    animateToPosition.__closure = items33;
    animateToPosition.__workletHash = 627029746159;
    animateToPosition.__initData = tmp158;
    items34 = [, , ,];
    items34[0] = tmp133;
    items34[1] = keyboardBehavior;
    items34[2] = animationConfigs;
    items34[3] = overrideReduceMotion;
    tmp131Result2 = tmp131(animateToPosition, items34);
    closure_54 = tmp131Result2;
    items35 = [, , , , , , , , , , , ,];
    items35[0] = closure_23;
    items35[1] = sharedValue2;
    items35[2] = sharedValue13;
    items35[3] = tmp33(tmp34[8]).ANIMATION_STATE;
    items35[4] = sharedValue3;
    items35[5] = false;
    items35[6] = tmp33(tmp34[4]).runOnJS;
    items35[7] = tmp33(tmp34[9]).print;
    tmp181 = closure_40;
    items35[8] = closure_40;
    items35[9] = sharedValue4;
    items35[10] = first;
    items35[11] = tmp131Result;
    items35[12] = sharedValue9;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    [tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194] = items35;
    setToPosition = function setToPosition(targetPosition) {
      let tmp = targetPosition === _undefined.value;
      if (!tmp) {
        tmp = undefined === targetPosition;
      }
      if (!tmp) {
        let tmp4 = _undefined2.value === enableContentPanningGesture.RUNNING;
        if (tmp4) {
          tmp4 = targetPosition === enableOverDrag.value;
        }
        tmp = tmp4;
      }
      if (!tmp) {
        if (c4) {
          const obj = { component: _undefined3.name, method: _undefined4.name, params: null };
          const obj2 = { currentPosition: _undefined.value, targetPosition };
          obj.params = obj2;
          enableDynamicSizing(c6)(obj);
        }
        enableOverDrag.value = targetPosition;
        value = simultaneousHandlers.value;
        c8.value = value.indexOf(targetPosition);
        waitFor();
        _undefined.value = targetPosition;
        c11.value = false;
      }
    };
    closure_12 = setToPosition;
    items36 = [, , , , , , , , , , ,];
    items36[0] = tmp183;
    items36[1] = tmp184;
    items36[2] = tmp185;
    items36[3] = tmp186;
    items36[4] = tmp187;
    items36[5] = tmp188;
    items36[6] = tmp189;
    items36[7] = tmp190;
    items36[8] = tmp191;
    items36[9] = tmp192;
    items36[10] = tmp193;
    items36[11] = tmp194;
    setToPosition.__closure = items36;
    setToPosition.__workletHash = 11153813934131;
    setToPosition.__initData = tmp182;
    tmp131Result3 = tmp131(setToPosition, []);
    closure_55 = tmp131Result3;
    items37 = [, , , , , , , , , , , , , , , , , , , , ,];
    items37[0] = closure_24;
    items37[1] = reactiveSharedValue3;
    items37[2] = first;
    items37[3] = state;
    items37[4] = derivedValue1;
    items37[5] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items37[6] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items37[7] = tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR;
    items37[8] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items37[9] = sharedValue10;
    items37[10] = tmp33(tmp34[7]).State;
    items37[11] = sharedValue11;
    items37[12] = sharedValue7;
    items37[13] = keyboardBehavior;
    items37[14] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items37[15] = closure_8;
    items37[16] = DEFAULT_KEYBOARD_INPUT_MODE;
    items37[17] = sharedValue12;
    items37[18] = sharedValue2;
    items37[19] = sharedValue5;
    items37[20] = num;
    items37[21] = derivedValue2;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    [
      tmp197,
      tmp198,
      tmp199,
      tmp200,
      tmp201,
      tmp202,
      tmp203,
      tmp204,
      tmp205,
      tmp206,
      tmp207,
      tmp208,
      tmp209,
      tmp210,
      tmp211,
      tmp212,
      tmp213,
      tmp214,
      tmp215,
      tmp216,
      tmp217,
      tmp218,
    ] = items37;
    getEvaluatedPosition = function getEvaluatedPosition(arg0) {
      value = _undefined.value;
      value2 = _undefined2.value;
      const value3 = enableContentPanningGesture.value;
      const value4 = enableOverDrag.value;
      if (arg0 === enablePanDownToClose.KEYBOARD) {
        if (c5 === overDragResistanceFactor.restore) {
          if (value3 === _undefined3.HIDDEN) {
            if (enableBlurKeyboardOnGesture.value !== simultaneousHandlers.ACTIVE) {
              if (waitFor.value !== tmp5.ACTIVE) {
                activeOffsetX.value = false;
                return value2[value];
              }
            }
          }
        }
      }
      if (c12 === failOffsetX.extend) {
        if (value3 === _undefined3.SHOWN) {
          return value4;
        }
      }
      if (c12 === failOffsetX.fillParent) {
        if (value3 === _undefined3.SHOWN) {
          activeOffsetX.value = true;
          return 0;
        }
      }
      if (c12 === failOffsetX.interactive) {
        if (value3 === _undefined3.SHOWN) {
          activeOffsetX.value = true;
          const _Math = Math;
          return Math.max(0, value4 - _undefined6.value);
        }
      }
      if (activeOffsetX.value) {
        let value5 = animatedContainerHeight.value;
      } else if (animatedHandleHeight.value) {
        value5 = value2[value];
      } else if (-1 === c19) {
        value5 = _undefined8.value;
      } else {
        value5 = value2[tmp15];
      }
      return value5;
    };
    items38 = [, , , , , , , , , , , , , , , , , , , ,];
    items38[0] = tmp198;
    items38[1] = tmp199;
    items38[2] = tmp200;
    items38[3] = tmp201;
    items38[4] = tmp202;
    items38[5] = tmp203;
    items38[6] = tmp204;
    items38[7] = tmp205;
    items38[8] = tmp206;
    items38[9] = tmp207;
    items38[10] = tmp208;
    items38[11] = tmp209;
    items38[12] = tmp210;
    items38[13] = tmp211;
    items38[14] = tmp212;
    items38[15] = tmp213;
    items38[16] = tmp214;
    items38[17] = tmp215;
    items38[18] = tmp216;
    items38[19] = tmp217;
    items38[20] = tmp218;
    getEvaluatedPosition.__closure = items38;
    getEvaluatedPosition.__workletHash = 9036570591450;
    getEvaluatedPosition.__initData = tmp197;
    items39 = [, , , , , , , , , , , ,];
    items39[0] = sharedValue10;
    items39[1] = reactiveSharedValue3;
    items39[2] = sharedValue11;
    items39[3] = derivedValue1;
    items39[4] = sharedValue12;
    items39[5] = state;
    items39[6] = sharedValue2;
    items39[7] = first;
    items39[8] = sharedValue7;
    items39[9] = sharedValue5;
    items39[10] = keyboardBehavior;
    items39[11] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items39[12] = num;
    tmp196 = closure_8;
    tmp131Result4 = tmp131(getEvaluatedPosition, items39);
    items40 = [, , , , , , , , , , , , , , , , , , ,];
    items40[0] = closure_25;
    items40[1] = sharedValue8;
    items40[2] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items40[3] = derivedValue4;
    items40[4] = tmp131Result4;
    items40[5] = sharedValue5;
    items40[6] = DEFAULT_ANIMATE_ON_MOUNT;
    items40[7] = tmp131Result2;
    items40[8] = tmp131Result3;
    items40[9] = sharedValue9;
    items40[10] = sharedValue13;
    items40[11] = tmp33(tmp34[8]).ANIMATION_STATE;
    items40[12] = sharedValue4;
    items40[13] = sharedValue7;
    items40[14] = derivedValue2;
    items40[15] = reactiveSharedValue3;
    items40[16] = first;
    items40[17] = derivedValue7;
    items40[18] = tmp89;
    items40[19] = sharedValue2;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    [
      tmp220,
      tmp221,
      tmp222,
      tmp223,
      tmp224,
      tmp225,
      tmp226,
      tmp227,
      tmp228,
      tmp229,
      tmp230,
      tmp231,
      tmp232,
      tmp233,
      tmp234,
      tmp235,
      tmp236,
      tmp237,
      tmp238,
      tmp239,
    ] = items40;
    evaluatePosition = function evaluatePosition(arg0, arg1) {
      if (!_undefined.value) {
        if (enableContentPanningGesture.value) {
          const tmp5 = enableOverDrag(arg0);
          if (enablePanDownToClose.value) {
            if (enableBlurKeyboardOnGesture.value) {
              _undefined3(tmp5);
            } else {
              if (simultaneousHandlers.value === waitFor.RUNNING) {
                if (-1 === activeOffsetX.value) {
                  if (!_undefined4.value) {
                    _undefined3(failOffsetX.value);
                  }
                }
                if (activeOffsetX.value !== failOffsetY.value) {
                  overDragResistanceFactor(_undefined5.value[activeOffsetX.value], arg0, undefined, arg1);
                }
              }
              if (simultaneousHandlers.value !== waitFor.RUNNING) {
                if (-1 === _undefined6.value) {
                  _undefined3(failOffsetX.value);
                }
              }
              overDragResistanceFactor(tmp5, arg0, undefined, arg1);
            }
          } else if (c5) {
            overDragResistanceFactor(tmp5, _undefined2.MOUNT, undefined, arg1);
          } else {
            _undefined3(tmp5);
            tmp6.value = true;
          }
        }
      }
    };
    items41 = [, , , , , , , , , , , , , , , , , ,];
    items41[0] = tmp221;
    items41[1] = tmp222;
    items41[2] = tmp223;
    items41[3] = tmp224;
    items41[4] = tmp225;
    items41[5] = tmp226;
    items41[6] = tmp227;
    items41[7] = tmp228;
    items41[8] = tmp229;
    items41[9] = tmp230;
    items41[10] = tmp231;
    items41[11] = tmp232;
    items41[12] = tmp233;
    items41[13] = tmp234;
    items41[14] = tmp235;
    items41[15] = tmp236;
    items41[16] = tmp237;
    items41[17] = tmp238;
    items41[18] = tmp239;
    evaluatePosition.__closure = items41;
    evaluatePosition.__workletHash = 11378032892914;
    evaluatePosition.__initData = tmp220;
    items42 = [, , ,];
    items42[0] = tmp131Result4;
    items42[1] = tmp131Result2;
    items42[2] = tmp131Result3;
    items42[3] = tmp89;
    tmp131Result5 = tmp131(evaluatePosition, items42);
    tmp33Result30 = tmp33(tmp34[6]);
    stableCallback = tmp33Result30.useStableCallback(function handleSnapToIndex(arg0, arg1) {
      value2 = animatedSnapPoints.get();
      if (derivedValue4.get()) {
        let tmp5 = arg0 >= -1;
        if (tmp5) {
          tmp5 = arg0 <= value2.length - 1;
        }
        _modDef38(
          tmp5,
          `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`,
        );
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
          _mod1652.runOnUI(closure_54)(tmp7, value22.ANIMATION_SOURCE.USER, 0, arg1);
          const runOnUIResult = _mod1652.runOnUI(closure_54);
        }
      }
    });
    closure_56 = stableCallback;
    items43 = [, , , , , , , , , , , ,];
    items43[0] = closure_26;
    items43[1] = false;
    items43[2] = tmp33(tmp34[9]).print;
    items43[3] = tmp181;
    items43[4] = tmp33(tmp34[9]).normalizeSnapPoint;
    items43[5] = derivedValue;
    items43[6] = derivedValue4;
    items43[7] = sharedValue3;
    items43[8] = sharedValue8;
    items43[9] = sharedValue7;
    items43[10] = tmp33(tmp34[4]).runOnUI;
    items43[11] = tmp131Result2;
    items43[12] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    [tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254] = items43;
    handleSnapToPosition = function handleSnapToPosition(position, arg1) {
      if (c0) {
        const obj = { component: enableContentPanningGesture.name, method: _undefined4.name, params: null };
        const obj2 = { position };
        obj.params = obj2;
        _undefined2(obj);
      }
      const tmp5 = enableOverDrag(position, enablePanDownToClose.value);
      let tmp6 = c5;
      if (c5) {
        tmp6 = tmp5 !== overDragResistanceFactor.value;
      }
      if (tmp6) {
        tmp6 = !_undefined3.value;
      }
      if (tmp6) {
        c8.value = true;
        simultaneousHandlers(c10)(tmp5, activeOffsetX.USER, 0, arg1);
      }
    };
    closure_12 = handleSnapToPosition;
    items44 = [, , , , , , , , , , ,];
    items44[0] = tmp243;
    items44[1] = tmp244;
    items44[2] = tmp245;
    items44[3] = tmp246;
    items44[4] = tmp247;
    items44[5] = tmp248;
    items44[6] = tmp249;
    items44[7] = tmp250;
    items44[8] = tmp251;
    items44[9] = tmp252;
    items44[10] = tmp253;
    items44[11] = tmp254;
    handleSnapToPosition.__closure = items44;
    handleSnapToPosition.__workletHash = 6045432180447;
    handleSnapToPosition.__initData = tmp242;
    items45 = [, , , , , ,];
    items45[0] = tmp131Result2;
    items45[1] = num3;
    items45[2] = num2;
    items45[3] = derivedValue4;
    items45[4] = sharedValue8;
    items45[5] = derivedValue;
    items45[6] = sharedValue2;
    tmp131Result6 = tmp131(handleSnapToPosition, items45);
    closure_57 = tmp131Result6;
    tmp33Result31 = tmp33(tmp34[6]);
    stableCallback1 = tmp33Result31.useStableCallback(function handleSetToIndex(arg0, arg1) {
      value = animatedSnapPoints.get();
      if (derivedValue4.get()) {
        let tmp5 = arg0 >= -1;
        if (tmp5) {
          tmp5 = arg0 <= value.length - 1;
        }
        _modDef38(
          tmp5,
          `'index' was provided but out of the provided snap points range! expected value to be between -1, ${arr.length - 1}`,
        );
        if (!sharedValue8.value) {
          if (undefined !== arg1) {
            const _Number = Number;
            if (Number.isFinite(arg1)) {
              const _Math = Math;
              let bound = Math.max(0, arg1);
            }
            if (undefined !== bound) {
              sharedValue7.value = false;
              items = [
                closure_27,
                bound,
                sharedValue2,
                arg0,
                sharedValue4,
                sharedValue13,
                value22.ANIMATION_STATE,
                c26,
                sharedValue3,
                closure_53,
                sharedValue9,
              ];
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items;
              function pnpm_BottomSheetTsx16() {
                if (value === _undefined.value) {
                  if (value === _undefined2.value) {
                    if (_undefined3.value !== _undefined4.RUNNING) {
                      c6.value = tmp3;
                    }
                  }
                }
                c7.value = value;
                _undefined2.value = value;
                c6.value = value;
                _undefined5();
                _undefined.value = value;
                c9.value = false;
              }
              const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
              pnpm_BottomSheetTsx16.__closure = items1;
              pnpm_BottomSheetTsx16.__workletHash = 14213566474163;
              pnpm_BottomSheetTsx16.__initData = tmp11;
              _mod1652.runOnUI(pnpm_BottomSheetTsx16)();
            }
          }
          bound = value[arg0];
        }
      }
    });
    closure_58 = stableCallback1;
    tmp33Result32 = tmp33(tmp34[6]);
    stableCallback2 = tmp33Result32.useStableCallback(function handleSetToPosition(arg0) {
      if (derivedValue4.get()) {
        if (!sharedValue8.value) {
          sharedValue7.value = true;
          const normalizeSnapPointResult = _mod5417.normalizeSnapPoint(arg0, animatedContainerHeight.get());
          _mod1652.runOnUI(closure_55)(normalizeSnapPointResult);
        }
      }
    });
    closure_59 = stableCallback2;
    items46 = [, , , , ,];
    items46[0] = tmp131Result2;
    items46[1] = sharedValue8;
    items46[2] = derivedValue4;
    items46[3] = sharedValue7;
    items46[4] = sharedValue3;
    items46[5] = derivedValue2;
    tmp131Result7 = tmp131(function handleClose(arg0) {
      value = animatedClosedPosition.value;
      value2 = derivedValue4.value;
      if (value2) {
        value2 = value !== sharedValue3.value;
      }
      if (value2) {
        value2 = !sharedValue8.value;
      }
      if (value2) {
        sharedValue7.value = false;
        _mod1652.runOnUI(closure_54)(value, value22.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = _mod1652.runOnUI(closure_54);
      }
    }, items46);
    closure_60 = tmp131Result7;
    items47 = [, , , ,];
    items47[0] = tmp131Result2;
    items47[1] = sharedValue8;
    items47[2] = sharedValue7;
    items47[3] = sharedValue3;
    items47[4] = derivedValue2;
    tmp131Result8 = tmp131(function handleForceClose(arg0) {
      value = animatedClosedPosition.value;
      value2 = value === sharedValue3.value;
      if (!value2) {
        value2 = sharedValue8.value;
      }
      if (!value2) {
        sharedValue7.value = false;
        sharedValue8.value = true;
        _mod1652.runOnUI(closure_54)(value, value22.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = _mod1652.runOnUI(closure_54);
      }
    }, items47);
    closure_61 = tmp131Result8;
    items48 = [, , , , , ,];
    items48[0] = tmp131Result2;
    items48[1] = sharedValue7;
    items48[2] = derivedValue4;
    items48[3] = sharedValue8;
    items48[4] = first;
    items48[5] = sharedValue3;
    items48[6] = sharedValue4;
    tmp131Result9 = tmp131(function handleExpand(arg0) {
      value2 = animatedSnapPoints.value;
      value = derivedValue4.value;
      if (value) {
        value = value2.length - 1 !== sharedValue4.value;
      }
      if (value) {
        value = tmp !== sharedValue3.value;
      }
      if (value) {
        value = !sharedValue8.value;
      }
      if (value) {
        sharedValue7.value = false;
        _mod1652.runOnUI(closure_54)(tmp, value22.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = _mod1652.runOnUI(closure_54);
      }
    }, items48);
    closure_62 = tmp131Result9;
    items49 = [, , , , , ,];
    items49[0] = tmp131Result2;
    items49[1] = sharedValue8;
    items49[2] = derivedValue4;
    items49[3] = sharedValue7;
    items49[4] = first;
    items49[5] = sharedValue3;
    items49[6] = sharedValue4;
    tmp131Result10 = tmp131(function handleCollapse(arg0) {
      const first = animatedSnapPoints.value[0];
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
        _mod1652.runOnUI(closure_54)(first, value22.ANIMATION_SOURCE.USER, 0, arg0);
        const runOnUIResult = _mod1652.runOnUI(closure_54);
      }
    }, items49);
    closure_63 = tmp131Result10;
    tmp262 = closure_6(fn, () => ({
      snapToIndex: stableCallback,
      snapToPosition,
      setToIndex: stableCallback1,
      setToPosition: stableCallback2,
      expand,
      collapse,
      close,
      forceClose,
    }));
    items50 = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
    items50[0] = derivedValue7;
    items50[1] = sharedValue2;
    items50[2] = sharedValue1;
    items50[3] = derivedValue3;
    items50[4] = animatedScrollableType;
    items50[5] = sharedValue10;
    items50[6] = sharedValue11;
    items50[7] = derivedValue2;
    items50[8] = sharedValue;
    items50[9] = derivedValue;
    items50[10] = reactiveSharedValue2;
    items50[11] = sharedValue13;
    items50[12] = state;
    items50[13] = height;
    items50[14] = sharedValue12;
    items50[15] = derivedValue5;
    items50[16] = derivedValue1;
    items50[17] = derivedValue6;
    items50[18] = animatedScrollableOverrideState;
    items50[19] = first;
    items50[20] = shouldHandleKeyboardEvents;
    items50[21] = animatedScrollableContentOffsetY;
    items50[22] = isScrollableRefreshable;
    items50[23] = sharedValue6;
    items50[24] = sharedValue7;
    items50[25] = DEFAULT_ENABLE_CONTENT_PANNING_GESTURE;
    items50[26] = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
    items50[27] = enableOverDrag;
    items50[28] = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
    items50[29] = DEFAULT_DYNAMIC_SIZING;
    items50[30] = DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE;
    items50[31] = simultaneousHandlers;
    items50[32] = waitFor;
    items50[33] = activeOffsetX;
    items50[34] = activeOffsetY;
    items50[35] = failOffsetX;
    items50[36] = failOffsetY;
    items50[37] = setScrollableRef;
    items50[38] = removeScrollableRef;
    items50[39] = tmp131Result2;
    items50[40] = tmp131Result;
    items51 = [, , , , , , , , ,];
    items51[0] = derivedValue7;
    items51[1] = sharedValue2;
    items51[2] = stableCallback;
    items51[3] = tmp131Result6;
    items51[4] = stableCallback1;
    items51[5] = stableCallback2;
    items51[6] = tmp131Result9;
    items51[7] = tmp131Result10;
    items51[8] = tmp131Result7;
    items51[9] = tmp131Result8;
    tmp88Result = tmp88(
      () => ({
        enableContentPanningGesture,
        enableDynamicSizing,
        overDragResistanceFactor,
        enableOverDrag,
        enablePanDownToClose,
        animatedAnimationState: sharedValue13,
        animatedSheetState: derivedValue5,
        animatedScrollableState: derivedValue6,
        animatedScrollableOverrideState,
        animatedContentGestureState: sharedValue10,
        animatedHandleGestureState: sharedValue11,
        animatedKeyboardState: state,
        animatedScrollableType,
        animatedIndex: derivedValue7,
        animatedPosition: sharedValue2,
        animatedSheetHeight,
        animatedContentHeight: _undefined8,
        animatedClosedPosition,
        animatedHandleHeight,
        animatedFooterHeight: _undefined7,
        animatedKeyboardHeight: height,
        animatedKeyboardHeightInContainer: sharedValue12,
        animatedContainerHeight,
        animatedSnapPoints,
        animatedHighestSnapPoint,
        animatedScrollableContentOffsetY,
        isInTemporaryPosition: sharedValue7,
        isContentHeightFixed: sharedValue6,
        isScrollableRefreshable,
        shouldHandleKeyboardEvents,
        simultaneousHandlers,
        waitFor,
        activeOffsetX,
        activeOffsetY: _undefined4,
        failOffsetX,
        failOffsetY,
        enableBlurKeyboardOnGesture,
        animateToPosition,
        stopAnimation,
        setScrollableRef,
        removeScrollableRef,
      }),
      items50,
    );
    tmp88Result1 = tmp88(
      () => ({
        animatedIndex: derivedValue7,
        animatedPosition: sharedValue2,
        snapToIndex: stableCallback,
        snapToPosition,
        setToIndex: stableCallback1,
        setToPosition: stableCallback2,
        expand,
        collapse,
        close,
        forceClose,
      }),
      items51,
    );
    tmp33Result33 = tmp33(tmp34[4]);
    items52 = [,];
    items52[0] = closure_28;
    items52[1] = derivedValue;
    closure_0 = undefined;
    [tmp265, tmp266] = items52;
    pnpm_BottomSheetTsx17 = function pnpm_BottomSheetTsx17() {
      return _undefined.value;
    };
    items53 = [];
    items53[0] = tmp266;
    pnpm_BottomSheetTsx17.__closure = items53;
    pnpm_BottomSheetTsx17.__workletHash = 2115786008182;
    pnpm_BottomSheetTsx17.__initData = tmp265;
    items54 = [, , , , , , , , ,];
    items54[0] = closure_29;
    items54[1] = tmp33(tmp34[5]).INITIAL_CONTAINER_HEIGHT;
    items54[2] = sharedValue9;
    items54[3] = sharedValue13;
    items54[4] = tmp33(tmp34[8]).ANIMATION_STATE;
    items54[5] = sharedValue14;
    items54[6] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items54[7] = sharedValue4;
    items54[8] = tmp131Result2;
    items54[9] = derivedValue2;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    [tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276] = items54;
    pnpm_BottomSheetTsx18 = function pnpm_BottomSheetTsx18(arg0, arg1) {
      if (arg0 !== c0) {
        c1.value = arg0 !== arg1;
        let tmp3 = enableContentPanningGesture.value === enableOverDrag.RUNNING;
        if (tmp3) {
          tmp3 = enablePanDownToClose.value === enableDynamicSizing.GESTURE;
        }
        if (tmp3) {
          tmp3 = -1 === overDragResistanceFactor.value;
        }
        if (tmp3) {
          _undefined3(enableBlurKeyboardOnGesture.value, enableDynamicSizing.GESTURE);
        }
      }
    };
    items55 = [, , , , , , , ,];
    items55[0] = tmp268;
    items55[1] = tmp269;
    items55[2] = tmp270;
    items55[3] = tmp271;
    items55[4] = tmp272;
    items55[5] = tmp273;
    items55[6] = tmp274;
    items55[7] = tmp275;
    items55[8] = tmp276;
    pnpm_BottomSheetTsx18.__closure = items55;
    pnpm_BottomSheetTsx18.__workletHash = 5730517001484;
    pnpm_BottomSheetTsx18.__initData = tmp267;
    animatedReaction = tmp33Result33.useAnimatedReaction(pnpm_BottomSheetTsx17, pnpm_BottomSheetTsx18);
    tmp33Result34 = tmp33(tmp34[4]);
    items56 = [,];
    items56[0] = closure_30;
    items56[1] = first;
    closure_0 = undefined;
    [tmp278, tmp279] = items56;
    pnpm_BottomSheetTsx19 = function pnpm_BottomSheetTsx19() {
      return _undefined.value;
    };
    items57 = [];
    items57[0] = tmp279;
    pnpm_BottomSheetTsx19.__closure = items57;
    pnpm_BottomSheetTsx19.__workletHash = 13658470625432;
    pnpm_BottomSheetTsx19.__initData = tmp278;
    items58 = [, , , , , , ,];
    items58[0] = closure_31;
    items58[1] = sharedValue5;
    items58[2] = derivedValue4;
    items58[3] = false;
    items58[4] = tmp33(tmp34[4]).runOnJS;
    items58[5] = tmp33(tmp34[9]).print;
    items58[6] = tmp131Result5;
    items58[7] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    [tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287] = items58;
    pnpm_BottomSheetTsx20 = function pnpm_BottomSheetTsx20(result, arg1) {
      const json = JSON.stringify(result);
      value = json === JSON.stringify(arg1);
      if (value) {
        value = _undefined.value;
      }
      if (!value) {
        if (_undefined2.value) {
          if (c2) {
            const obj = {
              component: "BottomSheet",
              method: "useAnimatedReaction::OnSnapPointChange",
              category: "effect",
              params: null,
            };
            const obj2 = { result };
            obj.params = obj2;
            enableOverDrag(c4)(obj);
          }
          enableDynamicSizing(overDragResistanceFactor.SNAP_POINT_CHANGE);
        }
      }
    };
    items59 = [, , , , , ,];
    items59[0] = tmp281;
    items59[1] = tmp282;
    items59[2] = tmp283;
    items59[3] = tmp284;
    items59[4] = tmp285;
    items59[5] = tmp286;
    items59[6] = tmp287;
    pnpm_BottomSheetTsx20.__closure = items59;
    pnpm_BottomSheetTsx20.__workletHash = 13994522972216;
    pnpm_BottomSheetTsx20.__initData = tmp280;
    items60 = [,];
    items60[0] = derivedValue4;
    items60[1] = first;
    animatedReaction1 = tmp33Result34.useAnimatedReaction(pnpm_BottomSheetTsx19, pnpm_BottomSheetTsx20, items60);
    tmp33Result35 = tmp33(tmp34[4]);
    items61 = [, ,];
    items61[0] = closure_32;
    items61[1] = state;
    items61[2] = height;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp289, tmp290, tmp291] = items61;
    pnpm_BottomSheetTsx21 = function pnpm_BottomSheetTsx21() {
      return { _keyboardState: _undefined.value, _keyboardHeight: _undefined2.value };
    };
    items62 = [,];
    items62[0] = tmp290;
    items62[1] = tmp291;
    pnpm_BottomSheetTsx21.__closure = items62;
    pnpm_BottomSheetTsx21.__workletHash = 8094953483096;
    pnpm_BottomSheetTsx21.__initData = tmp289;
    items63 = [, , , , , , , , , , , , , , , , , , , , , , , , , , ,];
    items63[0] = closure_33;
    items63[1] = tmp33(tmp34[8]).KEYBOARD_STATE;
    items63[2] = sharedValue13;
    items63[3] = tmp33(tmp34[8]).ANIMATION_STATE;
    items63[4] = sharedValue14;
    items63[5] = tmp33(tmp34[8]).ANIMATION_SOURCE;
    items63[6] = false;
    items63[7] = tmp33(tmp34[4]).runOnJS;
    items63[8] = tmp33(tmp34[9]).print;
    items63[9] = tmp181;
    items63[10] = sharedValue12;
    items63[11] = tmp25;
    items63[12] = num3;
    items63[13] = reactiveSharedValue1;
    items63[14] = tmp196;
    items63[15] = DEFAULT_KEYBOARD_INPUT_MODE;
    items63[16] = tmp33(tmp34[8]).KEYBOARD_INPUT_MODE;
    items63[17] = keyboardBehavior;
    items63[18] = tmp33(tmp34[8]).KEYBOARD_BEHAVIOR;
    items63[19] = sharedValue10;
    items63[20] = tmp33(tmp34[7]).State;
    items63[21] = sharedValue11;
    items63[22] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items63[23] = tmp33(tmp34[8]).KEYBOARD_BLUR_BEHAVIOR;
    items63[24] = tmp33(tmp34[9]).getKeyboardAnimationConfigs;
    items63[25] = animationEasing;
    items63[26] = animationDuration;
    items63[27] = tmp131Result5;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    closure_21 = undefined;
    closure_22 = undefined;
    closure_23 = undefined;
    closure_24 = undefined;
    closure_25 = undefined;
    closure_26 = undefined;
    [
      tmp292,
      tmp293,
      tmp294,
      tmp295,
      tmp296,
      tmp297,
      tmp298,
      tmp299,
      tmp300,
      tmp301,
      tmp302,
      tmp303,
      tmp304,
      tmp305,
      tmp306,
      tmp307,
      tmp308,
      tmp309,
      tmp310,
      tmp311,
      tmp312,
      tmp313,
      tmp314,
      tmp315,
      tmp316,
      tmp317,
      tmp318,
      tmp319,
    ] = items63;
    pnpm_BottomSheetTsx22 = function pnpm_BottomSheetTsx22(arg0, _keyboardState) {
      ({ _keyboardState, _keyboardHeight } = arg0);
      let _keyboardState1;
      if (_keyboardState != null) {
        _keyboardState1 = _keyboardState._keyboardState;
      }
      if (_keyboardState != null) {
        const _keyboardHeight2 = _keyboardState._keyboardHeight;
      }
      if (_keyboardState !== _keyboardState1) {
        if (_keyboardState !== _undefined.UNDETERMINED) {
          if (c5) {
            const obj = {
              component: enableBlurKeyboardOnGesture.name,
              method: "useAnimatedReaction::OnKeyboardStateChange",
              category: "effect",
              params: null,
            };
            const obj2 = { keyboardState: _keyboardState, keyboardHeight: _keyboardHeight };
            obj.params = obj2;
            overDragResistanceFactor(c7)(obj);
          }
          if (0 === _keyboardHeight) {
            c9.value = 0;
            if ("android" === failOffsetX.OS) {
              if (c14 === _undefined5.adjustResize) {
                c9.value = 0;
              }
            }
            if (animatedHandleHeight.value !== _undefined7.ACTIVE) {
              if (animatedHandleHeight.value !== _undefined7.BEGAN) {
                if (_undefined8.value !== _undefined7.ACTIVE) {
                  if (_undefined8.value !== _undefined7.BEGAN) {
                    if (_keyboardState !== _undefined.HIDDEN) {
                      _undefined10(
                        enablePanDownToClose.KEYBOARD,
                        animatedHighestSnapPoint(animatedClosedPosition.value, animatedSheetHeight.value),
                      );
                    }
                  }
                }
              }
            }
          } else {
            let diff = globalThis;
            const _Math = Math;
            if (c10) {
              const _Math2 = diff.Math;
              diff = _keyboardHeight - _Math2.abs(c11 - _undefined4.value.bottom);
              let absResult = abs(diff);
            } else {
              absResult = abs(_keyboardHeight - _undefined4.value.bottom);
            }
          }
        }
      }
    };
    items64 = [, , , , , , , , , , , , , , , , , , , , , , , , , ,];
    items64[0] = tmp293;
    items64[1] = tmp294;
    items64[2] = tmp295;
    items64[3] = tmp296;
    items64[4] = tmp297;
    items64[5] = tmp298;
    items64[6] = tmp299;
    items64[7] = tmp300;
    items64[8] = tmp301;
    items64[9] = tmp302;
    items64[10] = tmp303;
    items64[11] = tmp304;
    items64[12] = tmp305;
    items64[13] = tmp306;
    items64[14] = tmp307;
    items64[15] = tmp308;
    items64[16] = tmp309;
    items64[17] = tmp310;
    items64[18] = tmp311;
    items64[19] = tmp312;
    items64[20] = tmp313;
    items64[21] = tmp314;
    items64[22] = tmp315;
    items64[23] = tmp316;
    items64[24] = tmp317;
    items64[25] = tmp318;
    items64[26] = tmp319;
    pnpm_BottomSheetTsx22.__closure = items64;
    pnpm_BottomSheetTsx22.__workletHash = 10882388578267;
    pnpm_BottomSheetTsx22.__initData = tmp292;
    items65 = [, , , , , ,];
    items65[0] = tmp25;
    items65[1] = num3;
    items65[2] = keyboardBehavior;
    items65[3] = DEFAULT_KEYBOARD_BLUR_BEHAVIOR;
    items65[4] = DEFAULT_KEYBOARD_INPUT_MODE;
    items65[5] = reactiveSharedValue1;
    items65[6] = tmp131Result4;
    animatedReaction2 = tmp33Result35.useAnimatedReaction(pnpm_BottomSheetTsx21, pnpm_BottomSheetTsx22, items65);
    tmp33Result36 = tmp33(tmp34[4]);
    items66 = [,];
    items66[0] = closure_34;
    items66[1] = sharedValue2;
    closure_0 = undefined;
    [tmp321, tmp322] = items66;
    pnpm_BottomSheetTsx23 = function pnpm_BottomSheetTsx23() {
      return _undefined.value;
    };
    items67 = [];
    items67[0] = tmp322;
    pnpm_BottomSheetTsx23.__closure = items67;
    pnpm_BottomSheetTsx23.__workletHash = 16678447714097;
    pnpm_BottomSheetTsx23.__initData = tmp321;
    items68 = [, ,];
    items68[0] = closure_35;
    items68[1] = animatedPosition;
    items68[2] = num2;
    closure_0 = undefined;
    closure_1 = undefined;
    [tmp323, tmp324, tmp325] = items68;
    pnpm_BottomSheetTsx24 = function pnpm_BottomSheetTsx24(arg0) {
      if (c0) {
        tmp.value = arg0 + c1;
      }
    };
    items69 = [,];
    items69[0] = tmp324;
    items69[1] = tmp325;
    pnpm_BottomSheetTsx24.__closure = items69;
    pnpm_BottomSheetTsx24.__workletHash = 1759389677568;
    pnpm_BottomSheetTsx24.__initData = tmp323;
    animatedReaction3 = tmp33Result36.useAnimatedReaction(pnpm_BottomSheetTsx23, pnpm_BottomSheetTsx24, []);
    tmp33Result37 = tmp33(tmp34[4]);
    items70 = [,];
    items70[0] = closure_36;
    items70[1] = derivedValue7;
    closure_0 = undefined;
    [tmp327, tmp328] = items70;
    pnpm_BottomSheetTsx25 = function pnpm_BottomSheetTsx25() {
      return _undefined.value;
    };
    items71 = [];
    items71[0] = tmp328;
    pnpm_BottomSheetTsx25.__closure = items71;
    pnpm_BottomSheetTsx25.__workletHash = 8009767659415;
    pnpm_BottomSheetTsx25.__initData = tmp327;
    items72 = [,];
    items72[0] = closure_37;
    items72[1] = animatedIndex;
    closure_0 = undefined;
    [tmp329, tmp330] = items72;
    pnpm_BottomSheetTsx26 = function pnpm_BottomSheetTsx26(value) {
      if (c0) {
        tmp.value = value;
      }
    };
    items73 = [];
    items73[0] = tmp330;
    pnpm_BottomSheetTsx26.__closure = items73;
    pnpm_BottomSheetTsx26.__workletHash = 13880787853986;
    pnpm_BottomSheetTsx26.__initData = tmp329;
    animatedReaction4 = tmp33Result37.useAnimatedReaction(pnpm_BottomSheetTsx25, pnpm_BottomSheetTsx26, []);
    tmp33Result38 = tmp33(tmp34[4]);
    items74 = [, , , , ,];
    items74[0] = animatedScrollableType;
    items74[1] = derivedValue7;
    items74[2] = sharedValue2;
    items74[3] = sharedValue13;
    items74[4] = sharedValue10;
    items74[5] = sharedValue11;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    [tmp332, tmp333, tmp334, tmp335, tmp336, tmp337] = items74;
    pnpm_BottomSheetTsx27 = function pnpm_BottomSheetTsx27() {
      return {
        _animatedIndex: _undefined.value,
        _animatedPosition: _undefined2.value,
        _animationState: enableContentPanningGesture.value,
        _contentGestureState: enableOverDrag.value,
        _handleGestureState: enablePanDownToClose.value,
      };
    };
    items75 = [, , , ,];
    items75[0] = tmp333;
    items75[1] = tmp334;
    items75[2] = tmp335;
    items75[3] = tmp336;
    items75[4] = tmp337;
    pnpm_BottomSheetTsx27.__closure = items75;
    pnpm_BottomSheetTsx27.__workletHash = 16591248380755;
    pnpm_BottomSheetTsx27.__initData = tmp332;
    items76 = [, , , , , , , , , , , , , ,];
    items76[0] = closure_39;
    items76[1] = tmp33(tmp34[8]).ANIMATION_STATE;
    items76[2] = sharedValue3;
    items76[3] = tmp33(tmp34[5]).INITIAL_VALUE;
    items76[4] = sharedValue4;
    items76[5] = tmp33(tmp34[7]).State;
    items76[6] = tmp89;
    items76[7] = reactiveSharedValue3;
    items76[8] = first;
    items76[9] = false;
    items76[10] = tmp33(tmp34[4]).runOnJS;
    items76[11] = tmp33(tmp34[9]).print;
    items76[12] = tmp181;
    items76[13] = tmp132;
    items76[14] = onClose;
    closure_0 = undefined;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    [
      tmp338,
      tmp339,
      tmp340,
      tmp341,
      tmp342,
      tmp343,
      tmp344,
      tmp345,
      tmp346,
      tmp347,
      tmp348,
      tmp349,
      tmp350,
      tmp351,
      tmp352,
    ] = items76;
    pnpm_BottomSheetTsx28 = function pnpm_BottomSheetTsx28(_animationState) {
      ({ _animatedIndex, _animatedPosition, _contentGestureState, _handleGestureState } = _animationState);
      if (_animationState._animationState === _undefined.STOPPED) {
        let tmp2 = _undefined2.value === c2;
        if (!tmp2) {
          tmp2 = enableOverDrag.value === tmp28;
        }
        if (!tmp2) {
          let tmp3 = _animatedPosition === _undefined2.value;
          if (tmp3) {
            tmp3 = _animatedIndex === enableOverDrag.value;
          }
          tmp2 = tmp3;
        }
        if (tmp2) {
          tmp2 = _animatedIndex % 1 === 0;
        }
        if (tmp2) {
          let tmp6 =
            _contentGestureState !== enablePanDownToClose.END &&
            _contentGestureState !== enablePanDownToClose.UNDETERMINED &&
            _contentGestureState !== enablePanDownToClose.CANCELLED;
          if (!tmp6) {
            tmp6 =
              _handleGestureState !== enablePanDownToClose.END &&
              _handleGestureState !== enablePanDownToClose.UNDETERMINED &&
              _handleGestureState !== enablePanDownToClose.CANCELLED;
            const tmp7 =
              _handleGestureState !== enablePanDownToClose.END &&
              _handleGestureState !== enablePanDownToClose.UNDETERMINED &&
              _handleGestureState !== enablePanDownToClose.CANCELLED;
          }
          tmp2 = !tmp6;
        }
        if (tmp2) {
          let tmp8 = c5;
          if (c5) {
            tmp8 = _animatedIndex === overDragResistanceFactor.value;
          }
          if (tmp8) {
            tmp8 = _undefined3.value[_animatedIndex] !== _animatedPosition;
          }
          if (!tmp8) {
            if (_animatedIndex !== overDragResistanceFactor.value) {
              if (c8) {
                const obj = {
                  component: activeOffsetX.name,
                  method: "useAnimatedReaction::OnChange",
                  category: "effect",
                  params: null,
                };
                const obj2 = { animatedCurrentIndex: overDragResistanceFactor.value, animatedIndex: _animatedIndex };
                obj.params = obj2;
                simultaneousHandlers(c10)(obj);
              }
              overDragResistanceFactor.value = _animatedIndex;
              simultaneousHandlers(c12)(_animatedIndex, _animatedPosition);
            }
            if (tmp19) {
              if (c8) {
                const obj3 = {
                  component: activeOffsetX.name,
                  method: "useAnimatedReaction::onClose",
                  category: "effect",
                  params: null,
                };
                const obj4 = { animatedCurrentIndex: overDragResistanceFactor.value, animatedIndex: _animatedIndex };
                obj3.params = obj4;
                simultaneousHandlers(c10)(obj3);
              }
              simultaneousHandlers(c13)();
            }
            tmp19 = -1 === _animatedIndex && c13;
          }
        }
      }
    };
    items77 = [, , , , , , , , , , , , ,];
    items77[0] = tmp339;
    items77[1] = tmp340;
    items77[2] = tmp341;
    items77[3] = tmp342;
    items77[4] = tmp343;
    items77[5] = tmp344;
    items77[6] = tmp345;
    items77[7] = tmp346;
    items77[8] = tmp347;
    items77[9] = tmp348;
    items77[10] = tmp349;
    items77[11] = tmp350;
    items77[12] = tmp351;
    items77[13] = tmp352;
    pnpm_BottomSheetTsx28.__closure = items77;
    pnpm_BottomSheetTsx28.__workletHash = 15880718201832;
    pnpm_BottomSheetTsx28.__initData = tmp338;
    items78 = [, ,];
    items78[0] = tmp89;
    items78[1] = tmp132;
    items78[2] = onClose;
    animatedReaction5 = tmp33Result38.useAnimatedReaction(pnpm_BottomSheetTsx27, pnpm_BottomSheetTsx28, items78);
    items79 = [, , ,];
    items79[0] = DEFAULT_ANIMATE_ON_MOUNT;
    items79[1] = num;
    items79[2] = sharedValue5;
    items79[3] = stableCallback;
    tmp354 = closure_7(() => {
      let tmp = c1;
      if (c1) {
        tmp = !sharedValue5.value;
      }
      if (!tmp) {
        stableCallback(c0);
      }
    }, items79);
    tmp355 = closure_10;
    obj1 = { value: tmp88Result1, children: null };
    obj51 = { value: tmp88Result, children: null };
    tmp356 = closure_11;
    obj52 = { gestureEventsHandlersHook, children: null };
    tmp355Result = null;
    tmp357 = closure_1(tmp34[12]);
    if (backdropComponent) {
      obj53 = { animatedIndex: null, animatedPosition: null, style: null };
      obj53.animatedIndex = derivedValue7;
      obj53.animatedPosition = sharedValue2;
      tmp359 = closure_9;
      obj53.style = closure_9.absoluteFillObject;
      tmp355Result = tmp355(backdropComponent, obj53);
    }
    items80 = [,];
    items80[0] = tmp355Result;
    obj54 = {
      shouldCalculateHeight: !tmp25,
      containerHeight: reactiveSharedValue,
      containerOffset: reactiveSharedValue1,
      topInset: num2,
      bottomInset: num3,
      detached: tmp26,
      style: containerStyle,
      children: null,
    };
    obj55 = { style, BodyComponent, children: null };
    tmp355Result1 = null;
    if (null !== backgroundComponent) {
      obj56 = { animatedIndex: null, animatedPosition: null, backgroundComponent: null, backgroundStyle: null };
      obj56.animatedIndex = derivedValue7;
      obj56.animatedPosition = sharedValue2;
      obj56.backgroundComponent = backgroundComponent;
      obj56.backgroundStyle = backgroundStyle;
      str = "BottomSheetBackgroundContainer";
      tmp355Result1 = tmp355(tmp33(tmp34[15]).BottomSheetBackgroundContainer, obj56, "BottomSheetBackgroundContainer");
    }
    items81 = [, ,];
    items81[0] = tmp355Result1;
    obj57 = {
      pointerEvents: "box-none",
      accessible,
      accessibilityRole: null,
      accessibilityLabel: null,
      keyboardBehavior: null,
      detached: null,
      children: null,
    };
    obj57.accessibilityRole = DEFAULT_ACCESSIBILITY_ROLE;
    obj57.accessibilityLabel = DEFAULT_ACCESSIBILITY_LABEL;
    obj57.keyboardBehavior = keyboardBehavior;
    obj57.detached = tmp26;
    items82 = [,];
    items82[0] = children;
    tmp355Result2 = null;
    if (renderFooter) {
      obj58 = { renderFooter: null };
      obj58.renderFooter = renderFooter;
      tmp355Result2 = tmp355(tmp33(tmp34[17]).BottomSheetFooterContainer, obj58);
    }
    items82[1] = tmp355Result2;
    obj57.children = items82;
    items81[1] = tmp356(tmp33(tmp34[16]).BottomSheetContent, obj57);
    tmp355Result3 = null;
    if (null !== handleComponent) {
      obj59 = {
        animatedIndex: null,
        animatedPosition: null,
        handleHeight: null,
        enableHandlePanningGesture: null,
        enableOverDrag: null,
        enablePanDownToClose: null,
        overDragResistanceFactor: null,
        keyboardBehavior: null,
        handleComponent: null,
        handleStyle: null,
        handleIndicatorStyle: null,
      };
      obj59.animatedIndex = derivedValue7;
      obj59.animatedPosition = sharedValue2;
      obj59.handleHeight = reactiveSharedValue2;
      obj59.enableHandlePanningGesture = enableHandlePanningGesture;
      obj59.enableOverDrag = enableOverDrag;
      obj59.enablePanDownToClose = DEFAULT_ENABLE_PAN_DOWN_TO_CLOSE;
      obj59.overDragResistanceFactor = DEFAULT_OVER_DRAG_RESISTANCE_FACTOR;
      obj59.keyboardBehavior = keyboardBehavior;
      obj59.handleComponent = handleComponent;
      obj59.handleStyle = handleStyle;
      obj59.handleIndicatorStyle = handleIndicatorStyle;
      str2 = "BottomSheetHandleContainer";
      tmp355Result3 = tmp355(tmp33(tmp34[18]).BottomSheetHandleContainer, obj59, "BottomSheetHandleContainer");
    }
    items81[2] = tmp355Result3;
    obj55.children = items81;
    obj54.children = tmp356(tmp33(tmp34[14]).BottomSheetBody, obj55);
    items80[1] = tmp355(tmp33(tmp34[13]).BottomSheetHostingContainer, obj54, "BottomSheetContainer");
    obj52.children = items80;
    obj51.children = tmp356(tmp357, obj52);
    obj1.children = tmp355(tmp33(tmp34[11]).BottomSheetInternalProvider, obj51);
    return tmp355(tmp33(tmp34[11]).BottomSheetProvider, obj1);
  }
}
const memoResult = memo(forwardRef(BottomSheet));
memoResult.displayName = "BottomSheet";

export default memoResult;
