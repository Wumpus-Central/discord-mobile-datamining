// === Module 2008: ? ===

// Module 2008
import _mod1652 from "module_1652" /* 1652 */;
import _mod1973 from "module_1973" /* 1973 */;
import useScrollStateDefault from "useScrollState" /* 1990 */;
import helpers from "helpers" /* 2009 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let closure_3 = { code: "(function pnpm_indexTs1(effective,totalPaddingForMaxScroll){let[size,layout,scroll,scrollTo,scrollViewRef]=this.__closure;const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:effective;const maxScroll=Math.max(size.value.height-layout.value.height+paddingForMax,0);if(scroll.value>maxScroll){scrollTo(scrollViewRef,0,maxScroll,false);}})" };
let closure_4 = { code: "(function pnpm_indexTs2(e){let[freeze,targetKeyboardHeight,closing,getEffectiveHeight,offset,isScrollAtEnd,scroll,layout,size,inverted,getVisibleMinimumPaddingFraction,blankSpace,getMinimumPaddingAbsorbed,extraContentPadding,getScrollEffective,minimumPaddingFractionOnOpen,padding,offsetBeforeScroll,keyboardLiftBehavior,actualOpenShift]=this.__closure;if(freeze.value){return;}if(e.height>0){targetKeyboardHeight.value=e.height;closing.value=false;}else{closing.value=true;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);const visibleFraction=getVisibleMinimumPaddingFraction(scroll.value,layout.value.height,size.value.height,blankSpace.value,inverted);const minimumPaddingAbsorbed=visibleFraction>=1?getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value):0;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);if(inverted&&e.duration===-1){return;}else if(e.height>0){minimumPaddingFractionOnOpen.value=visibleFraction>=1?1:0;padding.value=effective;offsetBeforeScroll.value=scroll.value;if(!inverted&&keyboardLiftBehavior===\"whenAtEnd\"&&!atEnd){offsetBeforeScroll.value=-1;}else if(!inverted&&scrollEffective===0){offsetBeforeScroll.value=-1;}else if(inverted&&scrollEffective===0){offsetBeforeScroll.value=scroll.value;}}else{if(inverted){offsetBeforeScroll.value=scroll.value;}else{if(offsetBeforeScroll.value!==-1){offsetBeforeScroll.value=scroll.value-actualOpenShift.value;}}}})" };
let closure_5 = { code: "(function pnpm_indexTs3(e){let[freeze,currentHeight,inverted,getEffectiveHeight,targetKeyboardHeight,offset,getMinimumPaddingAbsorbed,blankSpace,extraContentPadding,minimumPaddingFractionOnOpen,getScrollEffective,isScrollAtEnd,offsetBeforeScroll,layout,size,keyboardLiftBehavior,padding,scrollTo,scrollViewRef,shouldShiftContent,closing,clampScrollIfNeeded,scroll,clampedScrollTarget,actualOpenShift]=this.__closure;if(freeze.value){return;}currentHeight.value=e.height;if(inverted){if(e.duration===-1){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);const wasAtEnd=isScrollAtEnd(offsetBeforeScroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"never\"&&wasAtEnd&&effective<padding.value){padding.value=effective;if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}scrollTo(scrollViewRef,0,0,false);return;}if(!shouldShiftContent(keyboardLiftBehavior,wasAtEnd)){if(closing.value&&effective<padding.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(scrollEffective===0&&minimumPaddingAbsorbed>0){return;}if(keyboardLiftBehavior===\"persistent\"){const currentShift=offsetBeforeScroll.value+padding.value-scroll.value;if(effective<currentShift){if(wasAtEnd){padding.value=effective;scrollTo(scrollViewRef,0,0,false);}else if(closing.value){padding.value=effective;clampScrollIfNeeded(effective,actualTotalPadding);}return;}}const target=offsetBeforeScroll.value+padding.value-scrollEffective;scrollTo(scrollViewRef,0,target,false);}else{const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);const minimumPaddingAbsorbed=getMinimumPaddingAbsorbed(blankSpace.value,extraContentPadding.value)*minimumPaddingFractionOnOpen.value;const scrollEffective=getScrollEffective(effective,minimumPaddingAbsorbed);const actualTotalPadding=Math.max(blankSpace.value,effective+extraContentPadding.value);if(keyboardLiftBehavior===\"never\"&&closing.value&&effective<padding.value){clampScrollIfNeeded(effective,actualTotalPadding);return;}if(!shouldShiftContent(keyboardLiftBehavior,true)){return;}if(offsetBeforeScroll.value===-1){if(closing.value){clampScrollIfNeeded(effective,actualTotalPadding);}return;}if(keyboardLiftBehavior===\"persistent\"&&closing.value){const keepAt=offsetBeforeScroll.value+padding.value;const maxScroll=Math.max(size.value.height-layout.value.height+actualTotalPadding,0);scrollTo(scrollViewRef,0,Math.min(keepAt,maxScroll),false);return;}const target=clampedScrollTarget(offsetBeforeScroll.value,scrollEffective,size.value.height,layout.value.height,actualTotalPadding);scrollTo(scrollViewRef,0,target,false);if(!closing.value){actualOpenShift.value=target-offsetBeforeScroll.value;}}})" };
let closure_6 = { code: "(function pnpm_indexTs4(e){let[freeze,getEffectiveHeight,targetKeyboardHeight,offset,padding,offsetBeforeScroll,actualOpenShift,scroll]=this.__closure;if(freeze.value){return;}const effective=getEffectiveHeight(e.height,targetKeyboardHeight.value,offset);padding.value=effective;if(effective>0&&offsetBeforeScroll.value!==-1){actualOpenShift.value=scroll.value-offsetBeforeScroll.value;}})" };

export function useChatKeyboard(animatedRef, arg1) {
  ({ inverted, keyboardLiftBehavior, freeze, offset, blankSpace, extraContentPadding } = arg1);
  const sharedValue = _mod1652.useSharedValue(0);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const sharedValue2 = _mod1652.useSharedValue(0);
  const sharedValue3 = _mod1652.useSharedValue(0);
  const sharedValue4 = _mod1652.useSharedValue(false);
  const sharedValue5 = _mod1652.useSharedValue(0);
  const sharedValue6 = _mod1652.useSharedValue(0);
  const tmp10 = useScrollStateDefault(animatedRef);
  ({ layout, size, offset: offset2 } = tmp10);
  items = [_undefined4, size, layout, offset2, , ];
  ({ onLayout, onContentSizeChange } = tmp10);
  items[4] = _mod1652.scrollTo;
  items[5] = animatedRef;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_indexTs1(arg0, arg1) {
    let tmp = arg0;
    if (undefined !== arg1) {
      tmp = arg1;
    }
    const bound = Math.max(_undefined.value.height - _undefined2.value.height + tmp, 0);
    if (_undefined3.value > bound) {
      _undefined4(c4, 0, bound, false);
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  pnpm_indexTs1.__closure = items1;
  pnpm_indexTs1.__workletHash = 5404264942352;
  pnpm_indexTs1.__initData = tmp11;
  const items2 = [_undefined5, freeze, sharedValue3, sharedValue4, helpers.getEffectiveHeight, offset, helpers.isScrollAtEnd, offset2, layout, size, inverted, helpers.getVisibleMinimumPaddingFraction, blankSpace, helpers.getMinimumPaddingAbsorbed, extraContentPadding, helpers.getScrollEffective, sharedValue5, sharedValue, sharedValue2, keyboardLiftBehavior, sharedValue6];
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items2;
  const obj8 = { onStart: null, onMove: null, onEnd: null };
  function pnpm_indexTs2(height) {
    if (!_undefined.value) {
      if (height.height > 0) {
        _undefined2.value = height.height;
        c2.value = false;
      } else {
        c2.value = true;
      }
      const tmp8 = _undefined4(height.height, _undefined2.value, c4);
      let tmp12 = c9;
      _undefined6(_undefined7.value, _undefined8.value.height, _undefined9.value.height, c9);
      const tmp17 = _undefined11(_undefined7.value, _undefined8.value.height, _undefined9.value.height, _undefined12.value, c9);
      let num3 = 0;
      if (tmp17 >= 1) {
        num3 = _undefined13(_undefined12.value, _undefined14.value);
      }
      let tmp22 = tmp12;
      if (tmp12) {
        tmp22 = -1 === height.duration;
      }
      if (!tmp22) {
        if (height.height > 0) {
          let num6 = 0;
          if (tmp17 >= 1) {
            num6 = 1;
          }
          c15.value = num6;
          c16.value = tmp8;
          value.value = _undefined7.value;
          if (!tmp12) {
            value.value = -1;
          }
          if (tmp12) {
            tmp12 = 0 === tmp21;
          }
          if (tmp12) {
            value.value = _undefined7.value;
          }
        } else if (tmp12) {
          value.value = _undefined7.value;
        } else if (-1 !== value.value) {
          value.value = _undefined7.value - _undefined18.value;
        }
      }
      tmp21 = _undefined15(tmp8, num3);
    }
  }
  const items3 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  pnpm_indexTs2.__closure = items3;
  pnpm_indexTs2.__workletHash = 4021969626038;
  pnpm_indexTs2.__initData = tmp17;
  obj8.onStart = pnpm_indexTs2;
  const items4 = [_undefined6, freeze, sharedValue1, inverted, helpers.getEffectiveHeight, sharedValue3, offset, helpers.getMinimumPaddingAbsorbed, blankSpace, extraContentPadding, sharedValue5, helpers.getScrollEffective, helpers.isScrollAtEnd, sharedValue2, layout, size, keyboardLiftBehavior, sharedValue, _mod1652.scrollTo, animatedRef, helpers.shouldShiftContent, sharedValue4, pnpm_indexTs1, offset2, helpers.clampedScrollTarget, sharedValue6];
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  c24 = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63] = items4;
  function pnpm_indexTs3(height) {
    if (!_undefined.value) {
      c1.value = height.height;
      if (c2) {
        if (-1 !== height.duration) {
          const tmp70 = _undefined4(height.height, _undefined5.value, c5);
          const result = _undefined7(_undefined8.value, _undefined9.value) * _undefined10.value;
          const _Math4 = Math;
          const bound = Math.max(_undefined8.value, tmp70 + _undefined9.value);
          const tmp84 = _undefined12(_undefined13.value, _undefined14.value.height, _undefined15.value.height, c2);
          if ("never" === c15) {
            if (tmp84) {
              if (tmp70 < _undefined16.value) {
                _undefined16.value = tmp70;
                _undefined17(c18, 0, 0, false);
              }
            }
          }
          if (_undefined18(c15, tmp84)) {
            if ("persistent" === c15) {
              if (tmp70 < _undefined13.value + _undefined16.value - _undefined21.value) {
                if (tmp84) {
                  _undefined16.value = tmp70;
                  _undefined17(c18, 0, 0, false);
                } else if (_undefined19.value) {
                  _undefined16.value = tmp70;
                  _undefined20(tmp70, bound);
                }
              }
            }
            _undefined17(c18, 0, _undefined13.value + _undefined16.value - tmp77, false);
          } else {
            value = _undefined19.value;
            if (value) {
              value = tmp70 < _undefined16.value;
            }
            if (value) {
              _undefined16.value = tmp70;
              _undefined20(tmp70, bound);
            }
          }
          tmp77 = _undefined11(tmp70, result);
        }
      } else {
        const tmp7 = _undefined4(height.height, _undefined5.value, c5);
        const tmp13 = _undefined11(tmp7, _undefined7(_undefined8.value, _undefined9.value) * _undefined10.value);
        const _Math = Math;
        const bound1 = Math.max(_undefined8.value, tmp7 + _undefined9.value);
        if ("never" === c15) {
          if (_undefined19.value) {
            if (tmp7 < _undefined16.value) {
              _undefined20(tmp7, bound1);
            }
          }
        }
        if (_undefined18(c15, true)) {
          if (-1 === _undefined13.value) {
            if (_undefined19.value) {
              _undefined20(tmp7, bound1);
            }
          } else {
            if ("persistent" === c15) {
              if (_undefined19.value) {
                const _Math2 = Math;
                const sum = _undefined13.value + _undefined16.value;
                const _Math3 = Math;
                _undefined17(c18, 0, Math.min(sum, Math.max(_undefined15.value.height - _undefined14.value.height + bound1, 0)), false);
              }
            }
            const tmp26 = _undefined22(_undefined13.value, tmp13, _undefined15.value.height, _undefined14.value.height, bound1);
            _undefined17(c18, 0, tmp26, false);
            if (!_undefined19.value) {
              c24.value = tmp26 - _undefined13.value;
            }
          }
        }
      }
    }
  }
  const items5 = [tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63];
  pnpm_indexTs3.__closure = items5;
  pnpm_indexTs3.__workletHash = 6779594785586;
  pnpm_indexTs3.__initData = tmp38;
  obj8.onMove = pnpm_indexTs3;
  const items6 = [_undefined7, freeze, helpers.getEffectiveHeight, sharedValue3, offset, sharedValue, sharedValue2, sharedValue6, offset2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72] = items6;
  function pnpm_indexTs4(height) {
    if (!_undefined.value) {
      const tmp5 = _undefined2(height.height, _undefined3.value, c3);
      c4.value = tmp5;
      let tmp7 = tmp5 > 0;
      if (tmp7) {
        tmp7 = -1 !== _undefined6.value;
      }
      if (tmp7) {
        c6.value = _undefined8.value - _undefined6.value;
      }
    }
  }
  const items7 = [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72];
  pnpm_indexTs4.__closure = items7;
  pnpm_indexTs4.__workletHash = 11505821994135;
  pnpm_indexTs4.__initData = tmp64;
  obj8.onEnd = pnpm_indexTs4;
  const items8 = [inverted, keyboardLiftBehavior, offset];
  _mod1973.useKeyboardHandler(obj8, items8);
  const obj9 = { padding: sharedValue, currentHeight: sharedValue1, contentOffsetY: "Boolean", scroll: offset2, layout, size, onLayout, onContentSizeChange };
  return obj9;
}