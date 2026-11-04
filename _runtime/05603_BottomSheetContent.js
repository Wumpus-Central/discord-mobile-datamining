// _runtime/05603_BottomSheetContent.js
import jsxProd from "react/00021_jsxProd.js";
import _mod1652 from "metro/01652__.js";
import value22 from "05401_value2.js";
import DEFAULT_HANDLE_HEIGHT from "05404_DEFAULT_HANDLE_HEIGHT.js";
import _mod5405 from "metro/05405__.js";
import _mod5417 from "metro/05417__.js";
import _modDef5604 from "metro/05604__.js";
import noop_mod from "metro/00019__.js";

const _modDef1652 = _mod1652;

let noop = noop_mod;
({ useMemo: c3, memo } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
let closure_5 = {
  code: "(function pnpm_BottomSheetContentTsx1(){let[animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedKeyboardState,animatedKeyboardHeightInContainer,animatedHandleHeight,animatedSheetHeight,keyboardBehavior,KEYBOARD_BEHAVIOR,KEYBOARD_STATE,isInTemporaryPosition]=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return 0;}const keyboardState=animatedKeyboardState.get();const keyboardHeightInContainer=animatedKeyboardHeightInContainer.get();const handleHeight=Math.max(0,animatedHandleHeight.get());const containerHeight=animatedContainerHeight.get();let contentHeight=animatedSheetHeight.get()-handleHeight;switch(keyboardBehavior){case KEYBOARD_BEHAVIOR.extend:if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=contentHeight-keyboardHeightInContainer;}break;case KEYBOARD_BEHAVIOR.fillParent:if(!isInTemporaryPosition.get()){break;}if(keyboardState===KEYBOARD_STATE.SHOWN){contentHeight=containerHeight-handleHeight-keyboardHeightInContainer;}else{contentHeight=containerHeight-handleHeight;}break;case KEYBOARD_BEHAVIOR.interactive:{if(!isInTemporaryPosition.get()){break;}const contentWithKeyboardHeight=contentHeight+keyboardHeightInContainer;if(keyboardState===KEYBOARD_STATE.SHOWN){if(keyboardHeightInContainer+animatedSheetHeight.get()>containerHeight){contentHeight=containerHeight-keyboardHeightInContainer-handleHeight;}}else if(contentWithKeyboardHeight+handleHeight>containerHeight){contentHeight=containerHeight-handleHeight;}else{contentHeight=contentWithKeyboardHeight;}break;}}return Math.max(contentHeight,0);})",
};
let closure_6 = {
  code: "(function pnpm_BottomSheetContentTsx2(){let[animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,animatedHighestSnapPoint,animatedPosition,overDragResistanceFactor,animatedKeyboardState,KEYBOARD_STATE,animatedKeyboardHeightInContainer]=this.__closure;const containerHeight=animatedContainerHeight.get();if(containerHeight===INITIAL_CONTAINER_HEIGHT){return 0;}const highestSnapPoint=Math.max(animatedHighestSnapPoint.get(),animatedPosition.get());const overDragSafePaddingBottom=Math.sqrt(highestSnapPoint-containerHeight*-1)*overDragResistanceFactor;let paddingBottom=overDragSafePaddingBottom;if(animatedKeyboardState.get()===KEYBOARD_STATE.SHOWN){paddingBottom=overDragSafePaddingBottom+animatedKeyboardHeightInContainer.get();}return paddingBottom;})",
};
let closure_7 = {
  code: "(function pnpm_BottomSheetContentTsx3(){let[animatedContainerHeight,INITIAL_CONTAINER_HEIGHT,enableDynamicSizing,animatedContentHeight,detached,animatedPaddingBottom,animate,animationConfigs,overrideReduceMotion,animatedContentHeightMax]=this.__closure;if(animatedContainerHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}if(enableDynamicSizing&&animatedContentHeight.get()===INITIAL_CONTAINER_HEIGHT){return{};}const paddingBottom=detached?0:animatedPaddingBottom.get();return{paddingBottom:animate({point:paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion}),height:animate({point:animatedContentHeightMax.get()+paddingBottom,configs:animationConfigs,overrideReduceMotion:overrideReduceMotion})};})",
};
const memoResult = memo(function BottomSheetContentComponent(detached) {
  detached = detached.detached;
  ({ animationConfigs, overrideReduceMotion, keyboardBehavior } = detached);
  ({ accessible, accessibilityLabel, accessibilityHint, accessibilityRole, children } = detached);
  const bottomSheetInternal = _mod5405.useBottomSheetInternal();
  ({
    enableDynamicSizing,
    overDragResistanceFactor,
    animatedPosition,
    animatedHandleHeight,
    animatedHighestSnapPoint,
    animatedContainerHeight,
    animatedContentHeight,
    animatedSheetHeight,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer,
    isInTemporaryPosition,
    enableContentPanningGesture,
  } = bottomSheetInternal);
  items = [
    _undefined5,
    animatedContainerHeight,
    DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer,
    animatedHandleHeight,
    animatedSheetHeight,
    keyboardBehavior,
    value22.KEYBOARD_BEHAVIOR,
    value22.KEYBOARD_STATE,
    isInTemporaryPosition,
  ];
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  function pnpm_BottomSheetContentTsx1() {
    if (_undefined.get() === animatedStyle) {
      return 0;
    } else {
      value = _undefined2.get();
      const value3 = _undefined3.get();
      const _Math2 = Math;
      const bound = Math.max(0, _undefined4.get());
      const value4 = _undefined.get();
      const diff = _undefined5.get() - bound;
      if (configs.extend === c6) {
        let diff1 = diff;
        if (value === overrideReduceMotion.SHOWN) {
          diff1 = diff - value3;
        }
      } else if (configs.fillParent === c6) {
        diff1 = diff;
        if (_undefined7.get()) {
          if (value === overrideReduceMotion.SHOWN) {
            let diff2 = value4 - bound - value3;
          } else {
            diff2 = value4 - bound;
          }
          diff1 = diff2;
        }
      } else {
        diff1 = diff;
        if (configs.interactive === c6) {
          diff1 = diff;
          if (_undefined7.get()) {
            let sum = diff + value3;
            if (value === overrideReduceMotion.SHOWN) {
              diff1 = diff;
              if (value3 + _undefined5.get() > value4) {
                diff1 = value4 - value3 - bound;
              }
            } else {
              if (sum + bound > value4) {
                sum = value4 - bound;
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
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  pnpm_BottomSheetContentTsx1.__closure = items1;
  pnpm_BottomSheetContentTsx1.__workletHash = 470844133663;
  pnpm_BottomSheetContentTsx1.__initData = tmp4;
  const items2 = [
    animatedContainerHeight,
    animatedHandleHeight,
    animatedKeyboardHeightInContainer,
    animatedKeyboardState,
    animatedSheetHeight,
    isInTemporaryPosition,
    keyboardBehavior,
  ];
  const derivedValue = _mod1652.useDerivedValue(pnpm_BottomSheetContentTsx1, items2);
  const items3 = [
    _undefined6,
    animatedContainerHeight,
    DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT,
    animatedHighestSnapPoint,
    animatedPosition,
    overDragResistanceFactor,
    animatedKeyboardState,
    value22.KEYBOARD_STATE,
    animatedKeyboardHeightInContainer,
  ];
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items3;
  function pnpm_BottomSheetContentTsx2() {
    value = _undefined.get();
    if (value === animatedStyle) {
      return 0;
    } else {
      const _Math = Math;
      value2 = _undefined2.get();
      const _Math2 = Math;
      const result = Math.sqrt(Math.max(value2, _undefined3.get()) - -1 * value) * c4;
      let sum = result;
      if (_undefined5.get() === _undefined6.SHOWN) {
        sum = result + configs.get();
      }
      return sum;
    }
  }
  const items4 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  pnpm_BottomSheetContentTsx2.__closure = items4;
  pnpm_BottomSheetContentTsx2.__workletHash = 16800465693302;
  pnpm_BottomSheetContentTsx2.__initData = tmp16;
  const items5 = [
    overDragResistanceFactor,
    animatedPosition,
    animatedContainerHeight,
    animatedHighestSnapPoint,
    animatedKeyboardState,
    animatedKeyboardHeightInContainer,
  ];
  const derivedValue1 = _mod1652.useDerivedValue(pnpm_BottomSheetContentTsx2, items5);
  const tmpResult = _mod1652;
  const items6 = [
    configs,
    animatedContainerHeight,
    DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT,
    enableDynamicSizing,
    animatedContentHeight,
    detached,
    derivedValue1,
    _mod5417.animate,
    animationConfigs,
    overrideReduceMotion,
    derivedValue,
  ];
  c0 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items6;
  function pnpm_BottomSheetContentTsx3() {
    if (_undefined.get() === animatedStyle) {
      return {};
    } else {
      if (c2) {
        if (_undefined3.get() === tmp) {
          return {};
        }
      }
      let num = 0;
      if (!c4) {
        num = _undefined5.get();
      }
      const obj = { paddingBottom: null, height: null };
      const obj2 = { point: num, configs, overrideReduceMotion };
      obj.paddingBottom = _undefined6(obj2);
      const obj3 = { point: _undefined7.get() + num, configs, overrideReduceMotion };
      obj.height = _undefined6(obj3);
      return obj;
    }
  }
  const items7 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  pnpm_BottomSheetContentTsx3.__closure = items7;
  pnpm_BottomSheetContentTsx3.__workletHash = 16992191123379;
  pnpm_BottomSheetContentTsx3.__initData = tmp26;
  const items8 = [
    overDragResistanceFactor,
    enableDynamicSizing,
    detached,
    animationConfigs,
    overrideReduceMotion,
    animatedContentHeight,
    derivedValue,
    animatedContainerHeight,
  ];
  const animatedStyle = _mod1652.useAnimatedStyle(pnpm_BottomSheetContentTsx3, items8);
  const items9 = [animatedStyle, detached];
  const style = React3(() => {
    items = [c0 ? { overflow: "visible" } : { overflow: "hidden" }, animatedStyle];
    return items;
  }, items9);
  if (enableContentPanningGesture) {
    let View = _modDef5604;
  } else {
    View = _modDef1652.View;
  }
  return (
    <View
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      style={style}
    >
      {children}
    </View>
  );
});
memoResult.displayName = "BottomSheetContent";

export const BottomSheetContent = memoResult;
