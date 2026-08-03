const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let closure_3 = { code: "function pnpm_indexTs1(effective,totalPaddingForMaxScroll){const{size,layout,scroll,scrollTo,scrollViewRef}=this.__closure;const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:effective;const maxScroll=Math.max(size.value.height-layout.value.height+paddingForMax,0);if(scroll.value>maxScroll){scrollTo(scrollViewRef,0,maxScroll,false);}}" };
let closure_4 = { code: "function pnpm_indexTs2(e){const{freeze,targetKeyboardHeight,closing,getEffectiveHeight,offset,isScrollAtEnd,scroll,layout,size,inverted,getVisibleMinimumPaddingFraction,blankSpace,getMinimumPaddingAbsorbed,extraContentPadding,getScrollEffective,minimumPaddingFractionOnOpen,padding,offsetBeforeScroll,keyboardLiftBehavior,actualOpenShift}=this.__closure;if(freeze.value){return;}if(e.height>0){targetKeyboardHeight.value=e.height;closing.value=false;}else{closing.value=true;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);const visibleFraction=getVisibleMinimumPaddingFraction(scroll.value,layout.value.height,size.value.height,blankSpace.value,inverted);const minimumPaddingAbsorbed=visibleFraction>=1?getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value):0;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);if(inverted&&e.duration===-1){return;}else if(e.height>0){minimumPaddingFractionOnOpen.value=visibleFraction>=1?1:0;padding.value=effective;offsetBeforeScroll.value=scroll.value;if(!inverted&&keyboardLiftBehavior===\"whenAtEnd\"&&!atEnd){offsetBeforeScroll.value=-1;}else if(!inverted&&scrollEffective===0){offsetBeforeScroll.value=-1;}else if(inverted&&scrollEffective===0){offsetBeforeScroll.value=scroll.value;}}else{if(inverted){offsetBeforeScroll.value=scroll.value;}else{if(offsetBeforeScroll.value!==-1){offsetBeforeScroll.value=scroll.value-actualOpenShift.value;}}}}" };
let closure_5 = { code: "function pnpm_indexTs3(e){const{freeze,currentHeight,inverted,getEffectiveHeight,targetKeyboardHeight,offset,getMinimumPaddingAbsorbed,blankSpace,extraContentPadding,minimumPaddingFractionOnOpen,getScrollEffective,isScrollAtEnd,offsetBeforeScroll,layout,size,keyboardLiftBehavior,padding,scrollTo,scrollViewRef,shouldShiftContent,closing,clampScrollIfNeeded,scroll,clampedScrollTarget,actualOpenShift}=this.__closure;if(freeze.value){return;}currentHeight.value=e.height;if(inverted){if(e.duration===-1){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);const wasAtEnd=isScrollAtEnd(offsetBeforeScroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"never\"&&wasAtEnd&&effective<padding.value){padding.value=effective;if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}scrollTo(scrollViewRef,0,0,false);return;}if(!shouldShiftContent(keyboardLiftBehavior,wasAtEnd)){if(closing.value&&effective<padding.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}if(keyboardLiftBehavior===\"persistent\"){const currentShift=offsetBeforeScroll.value+padding.value-scroll.value;if(effective<currentShift){if(wasAtEnd){padding.value=effective;scrollTo(scrollViewRef,0,0,false);}else if(closing.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}}const target=offsetBeforeScroll.value+padding.value-scrollEffective;scrollTo(scrollViewRef,0,target,false);}else{const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);if(keyboardLiftBehavior===\"never\"&&closing.value&&effective<padding.value){clampScrollIfNeeded(effective,actualTotalPadding);return;}if(!shouldShiftContent(keyboardLiftBehavior,true)){return;}if(offsetBeforeScroll.value===-1){if(closing.value){clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(keyboardLiftBehavior===\"persistent\"&&closing.value){const keepAt=offsetBeforeScroll.value+padding.value;const maxScroll=Math.max(size.value.height-layout.value.height+actualTotalPadding,0);scrollTo(scrollViewRef,0,Math.min(keepAt,maxScroll),false);return;}const target=clampedScrollTarget(offsetBeforeScroll.value,scrollEffective,size.value.height,layout.value.height,actualTotalPadding);scrollTo(scrollViewRef,0,target,false);if(!closing.value){actualOpenShift.value=target-offsetBeforeScroll.value;}}}" };
let closure_6 = { code: "function pnpm_indexTs4(e){const{freeze,getEffectiveHeight,targetKeyboardHeight,offset,padding,offsetBeforeScroll,actualOpenShift,scroll}=this.__closure;if(freeze.value){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);padding.value=effective;if(effective>0&&offsetBeforeScroll.value!==-1){actualOpenShift.value=scroll.value-offsetBeforeScroll.value;}}" };
arg5.useChatKeyboard = function useChatKeyboard(animatedRef, inverted) {
  let onContentSizeChange;
  let onLayout;
  const _require = animatedRef;
  inverted = inverted.inverted;
  const keyboardLiftBehavior = inverted.keyboardLiftBehavior;
  const freeze = inverted.freeze;
  const offset = inverted.offset;
  const blankSpace = inverted.blankSpace;
  const extraContentPadding = inverted.extraContentPadding;
  let obj = _require(keyboardLiftBehavior[0]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = _require(keyboardLiftBehavior[0]);
  const sharedValue1 = obj1.useSharedValue(0);
  let obj2 = _require(keyboardLiftBehavior[0]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = _require(keyboardLiftBehavior[0]);
  const sharedValue3 = obj3.useSharedValue(0);
  let obj4 = _require(keyboardLiftBehavior[0]);
  const sharedValue4 = obj4.useSharedValue(false);
  const sharedValue5 = _require(keyboardLiftBehavior[0]).useSharedValue(0);
  let obj6 = _require(keyboardLiftBehavior[0]);
  const sharedValue6 = _require(keyboardLiftBehavior[0]).useSharedValue(0);
  let tmp8 = inverted(keyboardLiftBehavior[1])(animatedRef);
  const layout = tmp8.layout;
  const size = tmp8.size;
  const offset2 = tmp8.offset;
  const fn = function u(arg0, arg1) {
    let tmp = arg0;
    if (undefined !== arg1) {
      tmp = arg1;
    }
    const bound = Math.max(size.value.height - layout.value.height + tmp, 0);
    if (offset2.value > bound) {
      const obj = animatedRef(keyboardLiftBehavior[0]);
      obj.scrollTo(animatedRef, 0, bound, false);
    }
  };
  obj = { size, layout, scroll: offset2, scrollTo: _require(keyboardLiftBehavior[0]).scrollTo, scrollViewRef: animatedRef };
  ({ onLayout, onContentSizeChange } = tmp8);
  fn.__closure = obj;
  fn.__workletHash = 2908292579657;
  fn.__initData = freeze;
  let obj7 = _require(keyboardLiftBehavior[0]);
  obj = { onStart: null, onMove: null, onEnd: null };
  const fn2 = function s(height) {
    if (!freeze.value) {
      if (height.height > 0) {
        sharedValue3.value = height.height;
        sharedValue4.value = false;
      } else {
        sharedValue4.value = true;
      }
      const effectiveHeight = animatedRef(keyboardLiftBehavior[3]).getEffectiveHeight(height.height, sharedValue3.value, offset);
      const obj2 = animatedRef(keyboardLiftBehavior[3]);
      let tmp12 = inverted;
      const obj = animatedRef(keyboardLiftBehavior[3]);
      const obj3 = animatedRef(keyboardLiftBehavior[3]);
      const visibleMinimumPaddingFraction = obj3.getVisibleMinimumPaddingFraction(offset2.value, layout.value.height, size.value.height, blankSpace.value, inverted);
      let num3 = 0;
      if (visibleMinimumPaddingFraction >= 1) {
        let tmp5Result = tmp5(tmp6[3]);
        num3 = tmp5Result.getMinimumPaddingAbsorbed(iter2.value, extraContentPadding.value);
      }
      tmp5Result = tmp5(tmp6[3]);
      const scrollEffective = tmp5Result.getScrollEffective(effectiveHeight, num3);
      let tmp21 = tmp12;
      if (tmp12) {
        tmp21 = -1 === height.duration;
      }
      if (!tmp21) {
        if (height.height > 0) {
          let num6 = 0;
          if (visibleMinimumPaddingFraction >= 1) {
            num6 = 1;
          }
          sharedValue5.value = num6;
          sharedValue.value = effectiveHeight;
          sharedValue2.value = iter.value;
          if (!tmp12) {
            tmp24.value = -1;
          }
          if (tmp12) {
            tmp12 = 0 === scrollEffective;
          }
          if (tmp12) {
            tmp24.value = iter.value;
          }
          const tmp22 = sharedValue5;
        } else if (tmp12) {
          iter3.value = iter.value;
        } else if (-1 !== iter3.value) {
          iter3.value = iter.value - sharedValue6.value;
        }
      }
      const isScrollAtEndResult = obj2.isScrollAtEnd(offset2.value, layout.value.height, size.value.height, inverted);
      iter2 = blankSpace;
    }
  };
  obj1 = { freeze, targetKeyboardHeight: sharedValue3, closing: sharedValue4, getEffectiveHeight: _require(keyboardLiftBehavior[3]).getEffectiveHeight, offset, isScrollAtEnd: _require(keyboardLiftBehavior[3]).isScrollAtEnd, scroll: offset2, layout, size, inverted, getVisibleMinimumPaddingFraction: _require(keyboardLiftBehavior[3]).getVisibleMinimumPaddingFraction, blankSpace, getMinimumPaddingAbsorbed: _require(keyboardLiftBehavior[3]).getMinimumPaddingAbsorbed, extraContentPadding, getScrollEffective: _require(keyboardLiftBehavior[3]).getScrollEffective, minimumPaddingFractionOnOpen: sharedValue5, padding: sharedValue, offsetBeforeScroll: sharedValue2, keyboardLiftBehavior, actualOpenShift: sharedValue6 };
  fn2.__closure = obj1;
  fn2.__workletHash = 16814590881167;
  fn2.__initData = offset;
  obj[0] = fn2;
  const fn3 = function v(height) {
    if (!freeze.value) {
      let effectiveHeight = height;
      sharedValue1.value = height.height;
      if (inverted) {
        if (-1 !== height.duration) {
          effectiveHeight = animatedRef;
          effectiveHeight = keyboardLiftBehavior;
          effectiveHeight = sharedValue3;
          effectiveHeight = offset;
          effectiveHeight = animatedRef(keyboardLiftBehavior[3]).getEffectiveHeight(height.height, sharedValue3.value, offset);
          effectiveHeight = animatedRef;
          effectiveHeight = keyboardLiftBehavior;
          const obj16 = animatedRef(keyboardLiftBehavior[3]);
          effectiveHeight = blankSpace;
          effectiveHeight = extraContentPadding;
          effectiveHeight = sharedValue5;
          effectiveHeight = animatedRef(keyboardLiftBehavior[3]).getMinimumPaddingAbsorbed(blankSpace.value, extraContentPadding.value) * sharedValue5.value;
          effectiveHeight = animatedRef;
          effectiveHeight = keyboardLiftBehavior;
          const obj17 = animatedRef(keyboardLiftBehavior[3]);
          effectiveHeight = animatedRef(keyboardLiftBehavior[3]).getScrollEffective(effectiveHeight, effectiveHeight);
          effectiveHeight = globalThis;
          const _Math8 = Math;
          effectiveHeight = Math.max(blankSpace.value, effectiveHeight + extraContentPadding.value);
          effectiveHeight = animatedRef;
          effectiveHeight = keyboardLiftBehavior;
          const obj19 = animatedRef(keyboardLiftBehavior[3]);
          effectiveHeight = obj19;
          effectiveHeight = tmp3;
          effectiveHeight = obj19.isScrollAtEnd(sharedValue2.value, layout.value.height, size.value.height, tmp3);
          effectiveHeight = keyboardLiftBehavior;
          if ("never" === keyboardLiftBehavior) {
            if (effectiveHeight) {
              if (effectiveHeight < sharedValue.value) {
                sharedValue.value = effectiveHeight;
                effectiveHeight = animatedRef;
                effectiveHeight = keyboardLiftBehavior;
                const obj15 = animatedRef(keyboardLiftBehavior[0]);
                effectiveHeight = animatedRef;
                effectiveHeight = obj15;
                effectiveHeight = obj15.scrollTo(animatedRef, 0, 0, false);
              }
            }
          }
          const obj18 = animatedRef(keyboardLiftBehavior[3]);
          if (obj10.shouldShiftContent(effectiveHeight, effectiveHeight)) {
            if ("persistent" === effectiveHeight) {
              if (effectiveHeight < iter3.value + sharedValue.value - offset2.value) {
                if (effectiveHeight) {
                  tmp93.value = effectiveHeight;
                  effectiveHeight = animatedRef;
                  effectiveHeight = keyboardLiftBehavior;
                  const obj14 = animatedRef(keyboardLiftBehavior[0]);
                  effectiveHeight = animatedRef;
                  effectiveHeight = obj14;
                  effectiveHeight = obj14.scrollTo(animatedRef, 0, 0, false);
                } else {
                  effectiveHeight = sharedValue4;
                  if (sharedValue4.value) {
                    tmp93.value = effectiveHeight;
                    effectiveHeight = fn;
                    if (typeof fn !== "fileFinishedImporting") {
                      effectiveHeight = HermesBuiltin.throwTypeError();
                    }
                    const _Math7 = Math;
                    effectiveHeight = Math.max(iter5.value.height - iter4.value.height + effectiveHeight, 0);
                    if (iter2.value > effectiveHeight) {
                      effectiveHeight = animatedRef;
                      effectiveHeight = keyboardLiftBehavior;
                      const obj13 = animatedRef(keyboardLiftBehavior[0]);
                      effectiveHeight = animatedRef;
                      effectiveHeight = obj13;
                      effectiveHeight = obj13.scrollTo(animatedRef, 0, effectiveHeight, false);
                    }
                  }
                }
              }
            }
            const diff = iter3.value + sharedValue.value - effectiveHeight;
            const obj12 = animatedRef(keyboardLiftBehavior[0]);
            effectiveHeight = obj12.scrollTo(animatedRef, 0, diff, false);
          } else {
            let value = sharedValue4.value;
            if (value) {
              value = effectiveHeight < sharedValue.value;
            }
            if (value) {
              sharedValue.value = effectiveHeight;
              if (typeof fn !== "fileFinishedImporting") {
                effectiveHeight = HermesBuiltin.throwTypeError();
              }
              let tmp84 = effectiveHeight;
              if (undefined !== effectiveHeight) {
                tmp84 = effectiveHeight;
              }
              const _Math6 = Math;
              const bound = Math.max(iter5.value.height - iter4.value.height + tmp84, 0);
              if (offset2.value > bound) {
                const obj11 = animatedRef(keyboardLiftBehavior[0]);
                obj11.scrollTo(animatedRef, 0, bound, false);
              }
            }
          }
          obj10 = animatedRef(keyboardLiftBehavior[3]);
        }
      } else {
        const effectiveHeight1 = animatedRef(keyboardLiftBehavior[3]).getEffectiveHeight(height.height, sharedValue3.value, offset);
        const obj = animatedRef(keyboardLiftBehavior[3]);
        const result = animatedRef(keyboardLiftBehavior[3]).getMinimumPaddingAbsorbed(blankSpace.value, extraContentPadding.value) * sharedValue5.value;
        const obj2 = animatedRef(keyboardLiftBehavior[3]);
        const scrollEffective = animatedRef(keyboardLiftBehavior[3]).getScrollEffective(effectiveHeight1, result);
        const _Math = Math;
        const bound1 = Math.max(blankSpace.value, effectiveHeight1 + extraContentPadding.value);
        if ("never" === keyboardLiftBehavior) {
          if (sharedValue4.value) {
            if (effectiveHeight1 < sharedValue.value) {
              if (typeof fn !== "fileFinishedImporting") {
                effectiveHeight = HermesBuiltin.throwTypeError();
              }
              let tmp67 = effectiveHeight1;
              if (undefined !== bound1) {
                tmp67 = bound1;
              }
              const _Math5 = Math;
              const bound2 = Math.max(size.value.height - layout.value.height + tmp67, 0);
              if (offset2.value > bound2) {
                const obj9 = animatedRef(keyboardLiftBehavior[0]);
                obj9.scrollTo(animatedRef, 0, bound2, false);
              }
            }
          }
        }
        const obj3 = animatedRef(keyboardLiftBehavior[3]);
        if (obj4.shouldShiftContent(keyboardLiftBehavior, true)) {
          if (-1 === sharedValue2.value) {
            if (sharedValue4.value) {
              if (typeof fn !== "fileFinishedImporting") {
                effectiveHeight = HermesBuiltin.throwTypeError();
              }
              let tmp55 = effectiveHeight1;
              if (undefined !== bound1) {
                tmp55 = bound1;
              }
              const _Math4 = Math;
              const bound3 = Math.max(size.value.height - layout.value.height + tmp55, 0);
              if (offset2.value > bound3) {
                const obj8 = animatedRef(keyboardLiftBehavior[0]);
                obj8.scrollTo(animatedRef, 0, bound3, false);
              }
            }
          } else {
            if ("persistent" === tmp20) {
              if (sharedValue4.value) {
                const _Math2 = Math;
                const sum = iter.value + sharedValue.value;
                const bound4 = Math.max(size.value.height - layout.value.height + bound1, 0);
                const obj7 = animatedRef(keyboardLiftBehavior[0]);
                const _Math3 = Math;
                obj7.scrollTo(animatedRef, 0, Math.min(sum, bound4), false);
              }
            }
            const obj5 = animatedRef(keyboardLiftBehavior[3]);
            const clampedScrollTargetResult = obj5.clampedScrollTarget(iter.value, scrollEffective, size.value.height, layout.value.height, bound1);
            const obj6 = animatedRef(keyboardLiftBehavior[0]);
            obj6.scrollTo(animatedRef, 0, clampedScrollTargetResult, false);
            if (!sharedValue4.value) {
              sharedValue6.value = clampedScrollTargetResult - iter.value;
            }
          }
        }
        obj4 = animatedRef(keyboardLiftBehavior[3]);
      }
    }
  };
  obj2 = { freeze, currentHeight: sharedValue1, inverted, getEffectiveHeight: _require(keyboardLiftBehavior[3]).getEffectiveHeight, targetKeyboardHeight: sharedValue3, offset, getMinimumPaddingAbsorbed: _require(keyboardLiftBehavior[3]).getMinimumPaddingAbsorbed, blankSpace, extraContentPadding, minimumPaddingFractionOnOpen: sharedValue5, getScrollEffective: _require(keyboardLiftBehavior[3]).getScrollEffective, isScrollAtEnd: _require(keyboardLiftBehavior[3]).isScrollAtEnd, offsetBeforeScroll: sharedValue2, layout, size, keyboardLiftBehavior, padding: sharedValue, scrollTo: _require(keyboardLiftBehavior[0]).scrollTo, scrollViewRef: animatedRef, shouldShiftContent: _require(keyboardLiftBehavior[3]).shouldShiftContent, closing: sharedValue4, clampScrollIfNeeded: fn, scroll: offset2, clampedScrollTarget: _require(keyboardLiftBehavior[3]).clampedScrollTarget, actualOpenShift: sharedValue6 };
  fn3.__closure = obj2;
  fn3.__workletHash = 6317221970795;
  fn3.__initData = blankSpace;
  obj[1] = fn3;
  const fn4 = function c(height) {
    if (!freeze.value) {
      const effectiveHeight = animatedRef(keyboardLiftBehavior[3]).getEffectiveHeight(height.height, sharedValue3.value, offset);
      sharedValue.value = effectiveHeight;
      let tmp8 = effectiveHeight > 0;
      if (tmp8) {
        tmp8 = -1 !== sharedValue2.value;
      }
      if (tmp8) {
        sharedValue6.value = offset2.value - sharedValue2.value;
      }
      const obj = animatedRef(keyboardLiftBehavior[3]);
    }
  };
  obj3 = { freeze, getEffectiveHeight: _require(keyboardLiftBehavior[3]).getEffectiveHeight, targetKeyboardHeight: sharedValue3, offset, padding: sharedValue, offsetBeforeScroll: sharedValue2, actualOpenShift: sharedValue6, scroll: offset2 };
  fn4.__closure = obj3;
  fn4.__workletHash = 1904796451086;
  fn4.__initData = extraContentPadding;
  obj[2] = fn4;
  const items = [inverted, keyboardLiftBehavior, offset];
  _require(keyboardLiftBehavior[2]).useKeyboardHandler(obj, items);
  obj4 = { padding: sharedValue, currentHeight: sharedValue1, contentOffsetY: "Boolean", scroll: true, layout: false, size: "done", onLayout: "percent", onContentSizeChange: 0 };
  obj4[3] = offset2;
  obj4[4] = layout;
  obj4[5] = size;
  obj4[6] = onLayout;
  obj4[7] = onContentSizeChange;
  return obj4;
};