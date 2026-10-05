// _runtime/metro/01872__.js
import _mod1643 from "01643__.js";
import _mod1873 from "01873__.js";

const require = globalThis.__r;
let _require;

let closure_3 = {
  code: "function pnpm_indexTs1(effective,totalPaddingForMaxScroll){const{size,layout,scroll,scrollTo,scrollViewRef}=this.__closure;const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:effective;const maxScroll=Math.max(size.value.height-layout.value.height+paddingForMax,0);if(scroll.value>maxScroll){scrollTo(scrollViewRef,0,maxScroll,false);}}",
};
let closure_4 = {
  code: 'function pnpm_indexTs2(e){const{freeze,targetKeyboardHeight,closing,getEffectiveHeight,offset,isScrollAtEnd,scroll,layout,size,inverted,getVisibleMinimumPaddingFraction,blankSpace,getMinimumPaddingAbsorbed,extraContentPadding,getScrollEffective,minimumPaddingFractionOnOpen,padding,offsetBeforeScroll,keyboardLiftBehavior,actualOpenShift}=this.__closure;if(freeze.value){return;}if(e.height>0){targetKeyboardHeight.value=e.height;closing.value=false;}else{closing.value=true;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);const visibleFraction=getVisibleMinimumPaddingFraction(scroll.value,layout.value.height,size.value.height,blankSpace.value,inverted);const minimumPaddingAbsorbed=visibleFraction>=1?getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value):0;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);if(inverted&&e.duration===-1){return;}else if(e.height>0){minimumPaddingFractionOnOpen.value=visibleFraction>=1?1:0;padding.value=effective;offsetBeforeScroll.value=scroll.value;if(!inverted&&keyboardLiftBehavior==="whenAtEnd"&&!atEnd){offsetBeforeScroll.value=-1;}else if(!inverted&&scrollEffective===0){offsetBeforeScroll.value=-1;}else if(inverted&&scrollEffective===0){offsetBeforeScroll.value=scroll.value;}}else{if(inverted){offsetBeforeScroll.value=scroll.value;}else{if(offsetBeforeScroll.value!==-1){offsetBeforeScroll.value=scroll.value-actualOpenShift.value;}}}}',
};
let closure_5 = {
  code: 'function pnpm_indexTs3(e){const{freeze,currentHeight,inverted,getEffectiveHeight,targetKeyboardHeight,offset,getMinimumPaddingAbsorbed,blankSpace,extraContentPadding,minimumPaddingFractionOnOpen,getScrollEffective,isScrollAtEnd,offsetBeforeScroll,layout,size,keyboardLiftBehavior,padding,scrollTo,scrollViewRef,shouldShiftContent,closing,clampScrollIfNeeded,scroll,clampedScrollTarget,actualOpenShift}=this.__closure;if(freeze.value){return;}currentHeight.value=e.height;if(inverted){if(e.duration===-1){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);const wasAtEnd=isScrollAtEnd(offsetBeforeScroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior==="never"&&wasAtEnd&&effective<padding.value){padding.value=effective;if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}scrollTo(scrollViewRef,0,0,false);return;}if(!shouldShiftContent(keyboardLiftBehavior,wasAtEnd)){if(closing.value&&effective<padding.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}if(keyboardLiftBehavior==="persistent"){const currentShift=offsetBeforeScroll.value+padding.value-scroll.value;if(effective<currentShift){if(wasAtEnd){padding.value=effective;scrollTo(scrollViewRef,0,0,false);}else if(closing.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}}const target=offsetBeforeScroll.value+padding.value-scrollEffective;scrollTo(scrollViewRef,0,target,false);}else{const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);if(keyboardLiftBehavior==="never"&&closing.value&&effective<padding.value){clampScrollIfNeeded(effective,actualTotalPadding);return;}if(!shouldShiftContent(keyboardLiftBehavior,true)){return;}if(offsetBeforeScroll.value===-1){if(closing.value){clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(keyboardLiftBehavior==="persistent"&&closing.value){const keepAt=offsetBeforeScroll.value+padding.value;const maxScroll=Math.max(size.value.height-layout.value.height+actualTotalPadding,0);scrollTo(scrollViewRef,0,Math.min(keepAt,maxScroll),false);return;}const target=clampedScrollTarget(offsetBeforeScroll.value,scrollEffective,size.value.height,layout.value.height,actualTotalPadding);scrollTo(scrollViewRef,0,target,false);if(!closing.value){actualOpenShift.value=target-offsetBeforeScroll.value;}}}',
};
let closure_6 = {
  code: "function pnpm_indexTs4(e){const{freeze,getEffectiveHeight,targetKeyboardHeight,offset,padding,offsetBeforeScroll,actualOpenShift,scroll}=this.__closure;if(freeze.value){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);padding.value=effective;if(effective>0&&offsetBeforeScroll.value!==-1){actualOpenShift.value=scroll.value-offsetBeforeScroll.value;}}",
};

export const useChatKeyboard = function useChatKeyboard(animatedRef, inverted) {
  let fn2;
  let fn3;
  let fn4;
  let onContentSizeChange;
  let onLayout;
  _require = animatedRef;
  inverted = inverted.inverted;
  const keyboardLiftBehavior = inverted.keyboardLiftBehavior;
  const freeze = inverted.freeze;
  const offset = inverted.offset;
  const blankSpace = inverted.blankSpace;
  const extraContentPadding = inverted.extraContentPadding;
  let obj = require("01643__.js");
  const sharedValue = obj.useSharedValue(0);
  let obj2 = require("01643__.js");
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = require("01643__.js");
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = require("01643__.js");
  const sharedValue3 = obj4.useSharedValue(0);
  let obj5 = require("01643__.js");
  const sharedValue4 = obj5.useSharedValue(false);
  let obj6 = require("01643__.js");
  const sharedValue5 = obj6.useSharedValue(0);
  let obj7 = require("01643__.js");
  const sharedValue6 = obj7.useSharedValue(0);
  let tmp8 = inverted(keyboardLiftBehavior[1])(animatedRef);
  const layout = tmp8.layout;
  size = tmp8.size;
  const offset2 = tmp8.offset;
  const clampScrollIfNeeded = function u(arg0, arg1) {
    let tmp = arg0;
    if (undefined !== arg1) {
      tmp = arg1;
    }
    const bound = Math.max(size.value.height - layout.value.height + tmp, 0);
    if (offset2.value > bound) {
      const obj = _mod1643;
      obj.scrollTo(animatedRef, 0, bound, false);
    }
  };
  let obj8 = { size, layout, scroll: offset2, scrollTo: require("01643__.js").scrollTo, scrollViewRef: animatedRef };
  ({ onLayout, onContentSizeChange } = tmp8);
  clampScrollIfNeeded.__closure = obj8;
  clampScrollIfNeeded.__workletHash = 2908292579657;
  clampScrollIfNeeded.__initData = freeze;
  let obj9 = { onStart: fn2, onMove: fn3, onEnd: fn4 };
  fn2 = function s(height) {
    if (!freeze.value) {
      if (height.height > 0) {
        sharedValue3.value = height.height;
        sharedValue4.value = false;
      } else {
        sharedValue4.value = true;
      }
      const obj = _mod1873;
      const effectiveHeight = obj.getEffectiveHeight(height.height, sharedValue3.value, offset);
      let tmp12 = inverted;
      const obj2 = _mod1873;
      obj2.isScrollAtEnd(offset2.value, layout.value.height, size.value.height, inverted);
      const obj3 = _mod1873;
      const visibleMinimumPaddingFraction = obj3.getVisibleMinimumPaddingFraction(
        offset2.value,
        layout.value.height,
        size.value.height,
        blankSpace.value,
        inverted,
      );
      let num3 = 0;
      if (visibleMinimumPaddingFraction >= 1) {
        const tmp5Result = _mod1873;
        num3 = tmp5Result.getMinimumPaddingAbsorbed(blankSpace.value, extraContentPadding.value);
      }
      const tmp5Result2 = _mod1873;
      const scrollEffective = tmp5Result2.getScrollEffective(effectiveHeight, num3);
      const tmp21 = tmp12 && -1 === height.duration;
      if (!tmp21) {
        if (height.height > 0) {
          let num6 = 0;
          if (visibleMinimumPaddingFraction >= 1) {
            num6 = 1;
          }
          sharedValue5.value = num6;
          sharedValue.value = effectiveHeight;
          sharedValue2.value = offset2.value;
          if (!tmp12) {
            sharedValue2.value = -1;
          }
          if (tmp12) {
            tmp12 = 0 === scrollEffective;
          }
          if (tmp12) {
            sharedValue2.value = offset2.value;
          }
        } else if (tmp12) {
          sharedValue2.value = offset2.value;
        } else if (-1 !== sharedValue2.value) {
          sharedValue2.value = offset2.value - sharedValue6.value;
        }
      }
    }
  };
  const tmp9 = require("01837__.js");
  let obj10 = {
    freeze,
    targetKeyboardHeight: sharedValue3,
    closing: sharedValue4,
    getEffectiveHeight: require("01873__.js").getEffectiveHeight,
    offset,
    isScrollAtEnd: require("01873__.js").isScrollAtEnd,
    scroll: offset2,
    layout,
    size,
    inverted,
    getVisibleMinimumPaddingFraction: require("01873__.js").getVisibleMinimumPaddingFraction,
    blankSpace,
    getMinimumPaddingAbsorbed: require("01873__.js").getMinimumPaddingAbsorbed,
    extraContentPadding,
    getScrollEffective: require("01873__.js").getScrollEffective,
    minimumPaddingFractionOnOpen: sharedValue5,
    padding: sharedValue,
    offsetBeforeScroll: sharedValue2,
    keyboardLiftBehavior,
    actualOpenShift: sharedValue6,
  };
  const useKeyboardHandler = tmp9.useKeyboardHandler;
  fn2.__closure = obj10;
  fn2.__workletHash = 16814590881167;
  fn2.__initData = offset;
  fn3 = function v(height) {
    if (!freeze.value) {
      sharedValue1.value = height.height;
      if (inverted) {
        if (-1 !== height.duration) {
          const obj16 = _mod1873;
          const effectiveHeight = obj16.getEffectiveHeight(height.height, sharedValue3.value, offset);
          const obj17 = _mod1873;
          const result =
            obj17.getMinimumPaddingAbsorbed(blankSpace.value, extraContentPadding.value) * sharedValue5.value;
          const obj18 = _mod1873;
          const scrollEffective = obj18.getScrollEffective(effectiveHeight, result);
          const _Math8 = Math;
          const bound = Math.max(blankSpace.value, effectiveHeight + extraContentPadding.value);
          const obj19 = _mod1873;
          const isScrollAtEndResult = obj19.isScrollAtEnd(
            sharedValue2.value,
            layout.value.height,
            size.value.height,
            inverted,
          );
          if ("never" === keyboardLiftBehavior) {
            if (isScrollAtEndResult) {
              if (effectiveHeight < sharedValue.value) {
                sharedValue.value = effectiveHeight;
                const obj15 = _mod1643;
                obj15.scrollTo(animatedRef, 0, 0, false);
              }
            }
          }
          const obj10 = _mod1873;
          if (obj10.shouldShiftContent(keyboardLiftBehavior, isScrollAtEndResult)) {
            if ("persistent" === keyboardLiftBehavior) {
              if (effectiveHeight < sharedValue2.value + sharedValue.value - offset2.value) {
                if (isScrollAtEndResult) {
                  sharedValue.value = effectiveHeight;
                  const obj14 = _mod1643;
                  obj14.scrollTo(animatedRef, 0, 0, false);
                } else if (sharedValue4.value) {
                  sharedValue.value = effectiveHeight;
                  if (typeof fn === "function") {
                    let tmp103 = effectiveHeight;
                    if (undefined !== bound) {
                      tmp103 = bound;
                    }
                    const _Math7 = Math;
                    const bound1 = Math.max(size.value.height - layout.value.height + tmp103, 0);
                    if (iter2.value > bound1) {
                      const obj13 = _mod1643;
                      obj13.scrollTo(animatedRef, 0, bound1, false);
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              }
            }
            const diff = sharedValue2.value + sharedValue.value - scrollEffective;
            const obj12 = _mod1643;
            obj12.scrollTo(animatedRef, 0, diff, false);
          } else {
            const value = sharedValue4.value && effectiveHeight < sharedValue.value;
            if (value) {
              sharedValue.value = effectiveHeight;
              if (typeof fn === "function") {
                let tmp84 = effectiveHeight;
                if (undefined !== bound) {
                  tmp84 = bound;
                }
                const _Math6 = Math;
                const bound2 = Math.max(size.value.height - layout.value.height + tmp84, 0);
                if (offset2.value > bound2) {
                  const obj11 = _mod1643;
                  obj11.scrollTo(animatedRef, 0, bound2, false);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
      } else {
        const obj = _mod1873;
        const effectiveHeight1 = obj.getEffectiveHeight(height.height, sharedValue3.value, offset);
        const obj2 = _mod1873;
        const result1 =
          obj2.getMinimumPaddingAbsorbed(blankSpace.value, extraContentPadding.value) * sharedValue5.value;
        const obj3 = _mod1873;
        const scrollEffective1 = obj3.getScrollEffective(effectiveHeight1, result1);
        const _Math = Math;
        const bound3 = Math.max(blankSpace.value, effectiveHeight1 + extraContentPadding.value);
        if ("never" === keyboardLiftBehavior) {
          if (sharedValue4.value) {
            if (effectiveHeight1 < sharedValue.value) {
              if (typeof fn === "function") {
                let tmp67 = effectiveHeight1;
                if (undefined !== bound3) {
                  tmp67 = bound3;
                }
                const _Math5 = Math;
                const bound4 = Math.max(size.value.height - layout.value.height + tmp67, 0);
                if (offset2.value > bound4) {
                  const obj9 = _mod1643;
                  obj9.scrollTo(animatedRef, 0, bound4, false);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        const obj4 = _mod1873;
        if (obj4.shouldShiftContent(keyboardLiftBehavior, true)) {
          if (-1 === sharedValue2.value) {
            if (sharedValue4.value) {
              if (typeof fn === "function") {
                let tmp55 = effectiveHeight1;
                if (undefined !== bound3) {
                  tmp55 = bound3;
                }
                const _Math4 = Math;
                const bound5 = Math.max(size.value.height - layout.value.height + tmp55, 0);
                if (offset2.value > bound5) {
                  const obj8 = _mod1643;
                  obj8.scrollTo(animatedRef, 0, bound5, false);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          } else {
            if ("persistent" === keyboardLiftBehavior) {
              if (sharedValue4.value) {
                const _Math2 = Math;
                const sum = sharedValue2.value + sharedValue.value;
                const bound6 = Math.max(size.value.height - layout.value.height + bound3, 0);
                const _Math3 = Math;
                const obj7 = _mod1643;
                obj7.scrollTo(animatedRef, 0, Math.min(sum, bound6), false);
              }
            }
            const obj5 = _mod1873;
            const clampedScrollTargetResult = obj5.clampedScrollTarget(
              sharedValue2.value,
              scrollEffective1,
              size.value.height,
              layout.value.height,
              bound3,
            );
            const obj6 = _mod1643;
            obj6.scrollTo(animatedRef, 0, clampedScrollTargetResult, false);
            if (!sharedValue4.value) {
              sharedValue6.value = clampedScrollTargetResult - sharedValue2.value;
            }
          }
        }
      }
    }
  };
  let obj11 = {
    freeze,
    currentHeight: sharedValue1,
    inverted,
    getEffectiveHeight: require("01873__.js").getEffectiveHeight,
    targetKeyboardHeight: sharedValue3,
    offset,
    getMinimumPaddingAbsorbed: require("01873__.js").getMinimumPaddingAbsorbed,
    blankSpace,
    extraContentPadding,
    minimumPaddingFractionOnOpen: sharedValue5,
    getScrollEffective: require("01873__.js").getScrollEffective,
    isScrollAtEnd: require("01873__.js").isScrollAtEnd,
    offsetBeforeScroll: sharedValue2,
    layout,
    size,
    keyboardLiftBehavior,
    padding: sharedValue,
    scrollTo: require("01643__.js").scrollTo,
    scrollViewRef: animatedRef,
    shouldShiftContent: require("01873__.js").shouldShiftContent,
    closing: sharedValue4,
    clampScrollIfNeeded,
    scroll: offset2,
    clampedScrollTarget: require("01873__.js").clampedScrollTarget,
    actualOpenShift: sharedValue6,
  };
  fn3.__closure = obj11;
  fn3.__workletHash = 6317221970795;
  fn3.__initData = blankSpace;
  fn4 = function c(height) {
    if (!freeze.value) {
      const obj = _mod1873;
      const effectiveHeight = obj.getEffectiveHeight(height.height, sharedValue3.value, offset);
      sharedValue.value = effectiveHeight;
      const tmp8 = effectiveHeight > 0 && -1 !== sharedValue2.value;
      if (tmp8) {
        sharedValue6.value = offset2.value - sharedValue2.value;
      }
    }
  };
  let obj12 = {
    freeze,
    getEffectiveHeight: require("01873__.js").getEffectiveHeight,
    targetKeyboardHeight: sharedValue3,
    offset,
    padding: sharedValue,
    offsetBeforeScroll: sharedValue2,
    actualOpenShift: sharedValue6,
    scroll: offset2,
  };
  fn4.__closure = obj12;
  fn4.__workletHash = 1904796451086;
  fn4.__initData = extraContentPadding;
  const items = [inverted, keyboardLiftBehavior, offset];
  useKeyboardHandler(obj9, items);
  let obj13 = {
    padding: sharedValue,
    currentHeight: sharedValue1,
    contentOffsetY: "Boolean",
    scroll: offset2,
    layout,
    size,
    onLayout,
    onContentSizeChange,
  };
  return obj13;
};
