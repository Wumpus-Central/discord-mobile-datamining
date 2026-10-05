// === Module 6304: BottomSheetContent ===

// Module 6304 (BottomSheetContent)
import Fragment from "Fragment" /* 21 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 6116 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6129 */;
import react_mod from "react" /* 19 */;

let c3;
let memo;
let react = react_mod;
({ useMemo: c3, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_5 = { code: "function pnpm_BottomSheetContentTsx1(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);}" };
let closure_6 = { code: "function pnpm_BottomSheetContentTsx2(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer}=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;}" };
let closure_7 = { code: "function pnpm_BottomSheetContentTsx3(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};}" };
const memoResult = memo(function BottomSheetContentComponent(detached) {
  let View;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessible;
  let children;
  detached = detached.detached;
  const animationConfigs = detached.animationConfigs;
  const overrideReduceMotion = detached.overrideReduceMotion;
  const keyboardBehavior = detached.keyboardBehavior;
  let derivedValue;
  let derivedValue1;
  let animatedStyle;
  ({ accessible, accessibilityLabel, accessibilityHint, accessibilityRole, children } = detached);
  let obj = detached(overrideReduceMotion[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const overDragResistanceFactor = bottomSheetInternal.overDragResistanceFactor;
  const animatedPosition = bottomSheetInternal.animatedPosition;
  const animatedHandleHeight = bottomSheetInternal.animatedHandleHeight;
  const animatedHighestSnapPoint = bottomSheetInternal.animatedHighestSnapPoint;
  const animatedContainerHeight = bottomSheetInternal.animatedContainerHeight;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const animatedSheetHeight = bottomSheetInternal.animatedSheetHeight;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  const animatedKeyboardHeightInContainer = bottomSheetInternal.animatedKeyboardHeightInContainer;
  const isInTemporaryPosition = bottomSheetInternal.isInTemporaryPosition;
  const enableContentPanningGesture = bottomSheetInternal.enableContentPanningGesture;
  let obj2 = detached(overrideReduceMotion[3]);
  class N {
    constructor() {
      const value = animatedContainerHeight.get();
      if (value === DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
        return 0;
      } else {
        let diff1;
        const value4 = animatedKeyboardState.get();
        const value5 = animatedKeyboardHeightInContainer.get();
        const _Math2 = Math;
        const bound = Math.max(0, animatedHandleHeight.get());
        const value6 = animatedContainerHeight.get();
        const diff = animatedSheetHeight.get() - bound;
        if (GESTURE_SOURCE.KEYBOARD_BEHAVIOR.extend === keyboardBehavior) {
          diff1 = diff;
          if (value4 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
            diff1 = diff - value5;
          }
        } else if (GESTURE_SOURCE.KEYBOARD_BEHAVIOR.fillParent === keyboardBehavior) {
          diff1 = diff;
          if (isInTemporaryPosition.get()) {
            let diff2;
            if (value4 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
              diff2 = value6 - bound - value5;
            } else {
              diff2 = value6 - bound;
            }
            diff1 = diff2;
          }
        } else {
          diff1 = diff;
          if (GESTURE_SOURCE.KEYBOARD_BEHAVIOR.interactive === keyboardBehavior) {
            diff1 = diff;
            if (isInTemporaryPosition.get()) {
              let sum = diff + value5;
              if (value4 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
                diff1 = diff;
                if (value5 + animatedSheetHeight.get() > value6) {
                  diff1 = value6 - value5 - bound;
                }
              } else {
                if (sum + bound > value6) {
                  sum = value6 - bound;
                }
                diff1 = sum;
              }
            }
          }
        }
        const _Math = Math;
        return Math.max(diff1, 0);
      }
    }
  }
  let obj3 = { animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, animatedKeyboardState, animatedKeyboardHeightInContainer, animatedHandleHeight, animatedSheetHeight, keyboardBehavior, KEYBOARD_BEHAVIOR: detached(overrideReduceMotion[5]).KEYBOARD_BEHAVIOR, KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE, isInTemporaryPosition };
  N.__closure = obj3;
  N.__workletHash = 2170474579366;
  N.__initData = overDragResistanceFactor;
  let items = [animatedContainerHeight, animatedHandleHeight, animatedKeyboardHeightInContainer, animatedKeyboardState, animatedSheetHeight, isInTemporaryPosition, keyboardBehavior];
  derivedValue = obj2.useDerivedValue(N, items);
  const fn = function l() {
    const value = animatedContainerHeight.get();
    if (value === DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
      return 0;
    } else {
      const _Math = Math;
      const value3 = animatedHighestSnapPoint.get();
      const _Math2 = Math;
      const result = Math.sqrt(max(value3, animatedPosition.get()) - -1 * value) * overDragResistanceFactor;
      const value4 = animatedKeyboardState.get();
      let sum = result;
      if (value4 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
        sum = result + animatedKeyboardHeightInContainer.get();
      }
      return sum;
    }
  };
  const obj4 = detached(overrideReduceMotion[3]);
  fn.__closure = { animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, animatedHighestSnapPoint, animatedPosition, overDragResistanceFactor, animatedKeyboardState, KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE, animatedKeyboardHeightInContainer };
  fn.__workletHash = 3484699588399;
  fn.__initData = animatedPosition;
  const items1 = [overDragResistanceFactor, animatedPosition, animatedContainerHeight, animatedHighestSnapPoint, animatedKeyboardState, animatedKeyboardHeightInContainer];
  ({ animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, animatedHighestSnapPoint, animatedPosition, overDragResistanceFactor, animatedKeyboardState, KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE, animatedKeyboardHeightInContainer });
  derivedValue1 = obj4.useDerivedValue(fn, items1);
  const obj6 = detached(overrideReduceMotion[3]);
  class S {
    constructor() {
      let animate;
      let obj2;
      let obj3;
      let tmp2Result;
      const value = animatedContainerHeight.get();
      if (value === DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
        return {};
      } else {
        if (enableDynamicSizing) {
          const value2 = animatedContentHeight.get();
          if (value2 === DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
            return {};
          }
        }
        let num = 0;
        if (!detached) {
          num = derivedValue1.get();
        }
        const obj = { paddingBottom: tmp2Result.animate(obj2), height: animate(obj3) };
        obj2 = { point: num, configs: animationConfigs, overrideReduceMotion };
        tmp2Result = normalizeSnapPoint;
        obj3 = { point: derivedValue.get() + num, configs: animationConfigs, overrideReduceMotion };
        animate = normalizeSnapPoint.animate;
        normalizeSnapPoint;
        return obj;
      }
    }
  }
  S.__closure = { animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, enableDynamicSizing, animatedContentHeight, detached, animatedPaddingBottom: derivedValue1, animate: detached(overrideReduceMotion[6]).animate, animationConfigs, overrideReduceMotion, animatedContentHeightMax: derivedValue };
  S.__workletHash = 8203943631786;
  S.__initData = animatedHandleHeight;
  const items2 = [overDragResistanceFactor, enableDynamicSizing, detached, animationConfigs, overrideReduceMotion, animatedContentHeight, derivedValue, animatedContainerHeight];
  ({ animatedContainerHeight, INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT, enableDynamicSizing, animatedContentHeight, detached, animatedPaddingBottom: derivedValue1, animate: detached(overrideReduceMotion[6]).animate, animationConfigs, overrideReduceMotion, animatedContentHeightMax: derivedValue });
  animatedStyle = obj6.useAnimatedStyle(S, items2);
  const items3 = [animatedStyle, detached];
  const style = keyboardBehavior(() => {
    const items = [detached ? { overflow: "visible" } : { overflow: "hidden" }, animatedStyle];
    return items;
  }, items3);
  if (enableContentPanningGesture) {
    View = tmp7(tmp[7]);
  } else {
    View = tmp7(tmp[3]).View;
  }
  return enableDynamicSizing(View, { accessible, accessibilityLabel, accessibilityHint, accessibilityRole, style, children });
});
memoResult.displayName = "BottomSheetContent";

export const BottomSheetContent = memoResult;