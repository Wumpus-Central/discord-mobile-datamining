// _runtime/metro/06819__.js
import jsxProd from "../react/00021_jsxProd.js";
import DEFAULT_HANDLE_HEIGHT from "../06631_DEFAULT_HANDLE_HEIGHT.js";
import noop from "00019__.js";

const GESTURE_SOURCE = tmp2(6628);
({ useMemo: c3, memo } = noop);
const jsx = jsxProd.jsx;
let closure_5 = {
  code: "function pnpm_BottomSheetContentTsx1(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);}",
};
let closure_6 = {
  code: "function pnpm_BottomSheetContentTsx2(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer}=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;}",
};
let closure_7 = {
  code: "function pnpm_BottomSheetContentTsx3(){const{animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax}=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};}",
};
const memoResult = memo(function BottomSheetContentComponent(detached) {
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
  let obj1 = detached(overrideReduceMotion[3]);
  class N {
    constructor() {
      obj = animatedContainerHeight;
      tmp2 = closure_0;
      tmp3 = closure_2;
      value = animatedContainerHeight.get();
      if (value === closure_0(closure_2[4]).INITIAL_CONTAINER_HEIGHT) {
        num = 0;
        return 0;
      } else {
        tmp8 = animatedKeyboardState;
        value1 = animatedKeyboardState.get();
        tmp10 = closure_13;
        value2 = closure_13.get();
        tmp12 = globalThis;
        _Math2 = Math;
        tmp13 = animatedHandleHeight;
        num2 = 0;
        bound = Math.max(0, animatedHandleHeight.get());
        value3 = obj.get();
        obj2 = animatedSheetHeight;
        diff = animatedSheetHeight.get() - bound;
        tmp17 = keyboardBehavior;
        if (tmp2(tmp3[5]).KEYBOARD_BEHAVIOR.extend === keyboardBehavior) {
          diff1 = diff;
          if (value1 === tmp2(tmp3[5]).KEYBOARD_STATE.SHOWN) {
            diff1 = diff - value2;
          }
        } else if (tmp2(tmp3[5]).KEYBOARD_BEHAVIOR.fillParent === tmp17) {
          tmp6 = isInTemporaryPosition;
          diff1 = diff;
          if (isInTemporaryPosition.get()) {
            if (value1 === tmp2(tmp3[5]).KEYBOARD_STATE.SHOWN) {
              diff2 = value3 - bound - value2;
            } else {
              diff2 = value3 - bound;
            }
            diff1 = diff2;
          }
        } else {
          diff1 = diff;
          if (tmp2(tmp3[5]).KEYBOARD_BEHAVIOR.interactive === tmp17) {
            tmp18 = isInTemporaryPosition;
            diff1 = diff;
            if (isInTemporaryPosition.get()) {
              sum = diff + value2;
              if (value1 === tmp2(tmp3[5]).KEYBOARD_STATE.SHOWN) {
                diff1 = diff;
                if (value2 + obj2.get() > value3) {
                  diff1 = value3 - value2 - bound;
                }
              } else {
                if (sum + bound > value3) {
                  sum = value3 - bound;
                }
                diff1 = sum;
              }
            }
          }
        }
        _Math = Math;
        return Math.max(diff1, 0);
      }
    }
  }
  obj = {
    animatedContainerHeight,
    INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer,
    animatedHandleHeight,
    animatedSheetHeight,
    keyboardBehavior,
    KEYBOARD_BEHAVIOR: detached(overrideReduceMotion[5]).KEYBOARD_BEHAVIOR,
    KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE,
    isInTemporaryPosition,
  };
  N.__closure = obj;
  N.__workletHash = 2170474579366;
  N.__initData = overDragResistanceFactor;
  let items = [
    animatedContainerHeight,
    animatedHandleHeight,
    animatedKeyboardHeightInContainer,
    animatedKeyboardState,
    animatedSheetHeight,
    isInTemporaryPosition,
    keyboardBehavior,
  ];
  derivedValue = obj1.useDerivedValue(N, items);
  const fn = function l() {
    value = animatedContainerHeight.get();
    if (value === DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT) {
      return 0;
    } else {
      const _Math = Math;
      value = animatedHighestSnapPoint.get();
      const _Math2 = Math;
      const result = Math.sqrt(Math.max(value, animatedPosition.get()) - -1 * value) * overDragResistanceFactor;
      const value1 = animatedKeyboardState.get();
      let sum = result;
      if (value1 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN) {
        sum = result + animatedKeyboardHeightInContainer.get();
      }
      return sum;
    }
  };
  obj = {
    animatedContainerHeight,
    INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT,
    animatedHighestSnapPoint,
    animatedPosition,
    overDragResistanceFactor,
    animatedKeyboardState,
    KEYBOARD_STATE: detached(overrideReduceMotion[5]).KEYBOARD_STATE,
    animatedKeyboardHeightInContainer,
  };
  fn.__closure = obj;
  fn.__workletHash = 3484699588399;
  fn.__initData = animatedPosition;
  const items1 = [
    overDragResistanceFactor,
    animatedPosition,
    animatedContainerHeight,
    animatedHighestSnapPoint,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer,
  ];
  derivedValue1 = detached(overrideReduceMotion[3]).useDerivedValue(fn, items1);
  const obj4 = detached(overrideReduceMotion[3]);
  class S {
    constructor() {
      tmp2 = closure_0;
      tmp3 = closure_2;
      value = animatedContainerHeight.get();
      if (value === closure_0(closure_2[4]).INITIAL_CONTAINER_HEIGHT) {
        return {};
      } else {
        tmp11 = enableDynamicSizing;
        if (enableDynamicSizing) {
          tmp4 = animatedContentHeight;
          value1 = animatedContentHeight.get();
          if (value1 === tmp2(tmp3[4]).INITIAL_CONTAINER_HEIGHT) {
            return {};
          }
        }
        tmp6 = detached;
        num = 0;
        if (!detached) {
          tmp7 = closure_16;
          num = closure_16.get();
        }
        obj = { paddingBottom: null, height: null };
        tmp2Result = tmp2(tmp3[6]);
        obj = { point: null, configs: null, overrideReduceMotion: null };
        obj.point = num;
        tmp8 = animationConfigs;
        obj.configs = animationConfigs;
        tmp9 = overrideReduceMotion;
        obj.overrideReduceMotion = overrideReduceMotion;
        obj.paddingBottom = tmp2Result.animate(obj);
        tmp2Result1 = tmp2(tmp3[6]);
        obj1 = { point: null, configs: null, overrideReduceMotion: null };
        tmp10 = closure_15;
        obj1.point = closure_15.get() + num;
        obj1.configs = animationConfigs;
        obj1.overrideReduceMotion = overrideReduceMotion;
        obj.height = tmp2Result1.animate(obj1);
        return obj;
      }
    }
  }
  obj1 = {
    animatedContainerHeight,
    INITIAL_CONTAINER_HEIGHT: detached(overrideReduceMotion[4]).INITIAL_CONTAINER_HEIGHT,
    enableDynamicSizing,
    animatedContentHeight,
    detached,
    animatedPaddingBottom: derivedValue1,
    animate: detached(overrideReduceMotion[6]).animate,
    animationConfigs,
    overrideReduceMotion,
    animatedContentHeightMax: derivedValue,
  };
  S.__closure = obj1;
  S.__workletHash = 8203943631786;
  S.__initData = animatedHandleHeight;
  const items2 = [
    overDragResistanceFactor,
    enableDynamicSizing,
    detached,
    animationConfigs,
    overrideReduceMotion,
    animatedContentHeight,
    derivedValue,
    animatedContainerHeight,
  ];
  animatedStyle = detached(overrideReduceMotion[3]).useAnimatedStyle(S, items2);
  const items3 = [animatedStyle, detached];
  const style = keyboardBehavior(() => {
    const items = [detached ? { overflow: "visible" } : { overflow: "hidden" }, animatedStyle];
    return items;
  }, items3);
  if (bottomSheetInternal.enableContentPanningGesture) {
    let View = tmp7(tmp[7]);
  } else {
    View = tmp7(tmp[3]).View;
  }
  return enableDynamicSizing(View, {
    accessible,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole,
    style,
    children,
  });
});
memoResult.displayName = "BottomSheetContent";

export const BottomSheetContent = memoResult;
