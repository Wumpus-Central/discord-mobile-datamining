// === Module 2010: ? ===

// Module 2010
import _mod17 from "module_17" /* 17 */;
import _mod19 from "module_19" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;
import helpers from "helpers" /* 2009 */;
import IS_FABRIC from "IS_FABRIC" /* 2011 */;

_mod19.useCallback;
const Platform = _mod17.Platform;
let closure_4 = { code: "(function pnpm_indexTs1(target){let[contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef]=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS===\"android\"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}})" };
let closure_5 = { code: "(function pnpm_indexTs2(){let[extraContentPadding]=this.__closure;return extraContentPadding.value;})" };
let closure_6 = { code: "(function pnpm_indexTs3(current,previous){let[freeze,blankSpace,keyboardPadding,isScrollAtEnd,scroll,layout,size,inverted,keyboardLiftBehavior,shouldShiftContent,scrollToTarget]=this.__closure;if(freeze.value||previous===null){return;}const rawDelta=current-previous;if(rawDelta===0){return;}const previousTotal=Math.max(blankSpace.value,keyboardPadding.value+previous);const currentTotal=Math.max(blankSpace.value,keyboardPadding.value+current);const effectiveDelta=currentTotal-previousTotal;if(effectiveDelta===0){return;}const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"persistent\"&&effectiveDelta<0&&!atEnd){return;}if(!shouldShiftContent(keyboardLiftBehavior,atEnd)){return;}if(inverted){const target=Math.max(scroll.value-effectiveDelta,-currentTotal);scrollToTarget(target);}else{const maxScroll=Math.max(size.value.height-layout.value.height+currentTotal,0);const target=Math.min(scroll.value+effectiveDelta,maxScroll);scrollToTarget(target);}})" };

export function useExtraContentPadding(arg0) {
  ({ scrollViewRef, contentOffsetY, inverted, keyboardLiftBehavior } = arg0);
  items = [_undefined5, contentOffsetY, , , , ];
  ({ extraContentPadding, keyboardPadding, blankSpace, scroll, layout, size, freeze } = arg0);
  items[2] = IS_FABRIC.IS_FABRIC;
  items[3] = Platform;
  items[4] = _mod1652.scrollTo;
  items[5] = scrollViewRef;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_indexTs1(value) {
    closure_0 = value;
    if (closure_0) {
      if (c1) {
        tmp.value = value;
      }
    }
    if ("android" === _undefined3.OS) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        c3(c4, 0, closure_0, false);
      });
    } else {
      _undefined4(c4, 0, value, false);
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_indexTs1.__closure = items1;
  pnpm_indexTs1.__workletHash = 15593711662621;
  pnpm_indexTs1.__initData = tmp4;
  const items2 = [scrollViewRef, contentOffsetY];
  const tmpResult = useCallback(pnpm_indexTs1, items2);
  const items3 = [_undefined6, extraContentPadding];
  [tmp11, tmp12] = items3;
  function pnpm_indexTs2() {
    return _undefined.value;
  }
  const items4 = [tmp12];
  pnpm_indexTs2.__closure = items4;
  pnpm_indexTs2.__workletHash = 14359322149220;
  pnpm_indexTs2.__initData = tmp11;
  const items5 = [_undefined7, freeze, blankSpace, keyboardPadding, helpers.isScrollAtEnd, scroll, layout, size, inverted, keyboardLiftBehavior, helpers.shouldShiftContent, tmpResult];
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
  c10 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items5;
  function pnpm_indexTs3(arg0, arg1) {
    if (!_undefined.value) {
      if (null !== arg1) {
        if (0 !== arg0 - arg1) {
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.max(_undefined2.value, _undefined3.value + arg1);
          const bound1 = Math.max(_undefined2.value, _undefined3.value + arg0);
          const diff = bound1 - bound;
          if (0 !== diff) {
            if (_undefined8(c8, tmp18)) {
              const _Math = Math;
              if (c7) {
                _undefined9(max(_undefined5.value - diff, -bound1));
              } else {
                const _Math2 = Math;
                _undefined9(Math.min(_undefined5.value + diff, max(_undefined7.value.height - _undefined6.value.height + bound1, 0)));
              }
            }
            tmp18 = _undefined4(_undefined5.value, _undefined6.value.height, _undefined7.value.height, c7);
          }
        }
      }
    }
  }
  const items6 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24];
  pnpm_indexTs3.__closure = items6;
  pnpm_indexTs3.__workletHash = 873679862986;
  pnpm_indexTs3.__initData = tmp13;
  const items7 = [inverted, keyboardLiftBehavior];
  const animatedReaction = _mod1652.useAnimatedReaction(pnpm_indexTs2, pnpm_indexTs3, items7);
  const tmp2Result = _mod1652;
}