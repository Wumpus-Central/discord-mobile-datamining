// === Module 1884: useExtraContentPadding ===

// Module 1884 (useExtraContentPadding)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noop from "noop" /* 19 */;

noop.useCallback;
const Platform = get_ActivityIndicator.Platform;
let closure_4 = { code: "function pnpm_indexTs1(target){const{contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef}=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS===\"android\"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}}" };
let closure_5 = { code: "function pnpm_indexTs2(){const{extraContentPadding}=this.__closure;return extraContentPadding.value;}" };
let closure_6 = { code: "function pnpm_indexTs3(current,previous){const{freeze,blankSpace,keyboardPadding,isScrollAtEnd,scroll,layout,size,inverted,keyboardLiftBehavior,shouldShiftContent,scrollToTarget}=this.__closure;if(freeze.value||previous===null){return;}const rawDelta=current-previous;if(rawDelta===0){return;}const previousTotal=Math.max(blankSpace.value,keyboardPadding.value+previous);const currentTotal=Math.max(blankSpace.value,keyboardPadding.value+current);const effectiveDelta=currentTotal-previousTotal;if(effectiveDelta===0){return;}const atEnd=isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);if(keyboardLiftBehavior===\"persistent\"&&effectiveDelta<0&&!atEnd){return;}if(!shouldShiftContent(keyboardLiftBehavior,atEnd)){return;}if(inverted){const target=Math.max(scroll.value-effectiveDelta,-currentTotal);scrollToTarget(target);}else{const maxScroll=Math.max(size.value.height-layout.value.height+currentTotal,0);const target=Math.min(scroll.value+effectiveDelta,maxScroll);scrollToTarget(target);}}" };

export const useExtraContentPadding = function useExtraContentPadding(scrollViewRef) {
  scrollViewRef = scrollViewRef.scrollViewRef;
  const extraContentPadding = scrollViewRef.extraContentPadding;
  const keyboardPadding = scrollViewRef.keyboardPadding;
  const blankSpace = scrollViewRef.blankSpace;
  const scroll = scrollViewRef.scroll;
  const layout = scrollViewRef.layout;
  const size = scrollViewRef.size;
  const contentOffsetY = scrollViewRef.contentOffsetY;
  const inverted = scrollViewRef.inverted;
  const keyboardLiftBehavior = scrollViewRef.keyboardLiftBehavior;
  const freeze = scrollViewRef.freeze;
  const fn = function u(value) {
    closure_0 = value;
    if (contentOffsetY) {
      if (scrollViewRef(extraContentPadding[2]).IS_FABRIC) {
        tmp.value = value;
      }
    }
    const animationFrame = requestAnimationFrame(() => {
      scrollViewRef(extraContentPadding[3]).scrollTo(closure_0, 0, closure_0, false);
    });
  };
  let obj = { contentOffsetY, IS_FABRIC: scrollViewRef(extraContentPadding[2]).IS_FABRIC, Platform: blankSpace, scrollTo: scrollViewRef(extraContentPadding[3]).scrollTo, scrollViewRef };
  fn.__closure = obj;
  fn.__workletHash = 2925167321956;
  fn.__initData = scroll;
  const items = [scrollViewRef, contentOffsetY];
  const tmp = keyboardPadding(fn, items);
  closure_11 = tmp;
  const fn2 = function v() {
    return extraContentPadding.value;
  };
  fn2.__closure = { extraContentPadding };
  fn2.__workletHash = 6627638143453;
  fn2.__initData = layout;
  const fn3 = function f(arg0, arg1) {
    if (!freeze.value) {
      if (null !== arg1) {
        if (0 != arg0 - arg1) {
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.max(blankSpace.value, keyboardPadding.value + arg1);
          const bound1 = Math.max(blankSpace.value, keyboardPadding.value + arg0);
          const diff = bound1 - bound;
          if (0 !== diff) {
            const obj2 = scrollViewRef(extraContentPadding[4]);
            const isScrollAtEndResult = obj2.isScrollAtEnd(scroll.value, layout.value.height, size.value.height, inverted);
            if (tmp14Result.shouldShiftContent(tmp20, isScrollAtEndResult)) {
              const _Math = Math;
              if (tmp16) {
                callback(max(iter.value - diff, -bound1));
              } else {
                const _Math2 = Math;
                callback(Math.min(iter.value + diff, max(iter3.value.height - iter2.value.height + bound1, 0)));
              }
            }
            iter2 = layout;
            iter3 = size;
            const tmp14 = scrollViewRef;
            tmp14Result = scrollViewRef(extraContentPadding[4]);
            const tmp15 = extraContentPadding;
            tmp16 = inverted;
            tmp20 = keyboardLiftBehavior;
          }
        }
      }
    }
  };
  obj = { freeze, blankSpace, keyboardPadding, isScrollAtEnd: scrollViewRef(extraContentPadding[4]).isScrollAtEnd, scroll, layout, size, inverted, keyboardLiftBehavior, shouldShiftContent: scrollViewRef(extraContentPadding[4]).shouldShiftContent, scrollToTarget: tmp };
  fn3.__closure = obj;
  fn3.__workletHash = 14660760767987;
  fn3.__initData = size;
  const items1 = [inverted, keyboardLiftBehavior];
  const animatedReaction = scrollViewRef(extraContentPadding[3]).useAnimatedReaction(fn2, fn3, items1);
};