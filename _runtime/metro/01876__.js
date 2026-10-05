// === Module 1876: ? ===

// Module 1876
import react from "react" /* 19 */;
import _mod1643 from "module_1643" /* 1643 */;
import _mod1873 from "module_1873" /* 1873 */;

const useMemo = react.useMemo;
let closure_3 = { code: "function pnpm_useEndVisibleTs1(){const{layout,size,isScrollAtEnd,scroll,inverted}=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);}" };
let closure_4 = { code: "function pnpm_useEndVisibleTs2(){const{isAtEnd}=this.__closure;return isAtEnd.value;}" };
let __initData = { code: "function pnpm_useEndVisibleTs3(current,previous){const{onEndVisible,isWorklet,runOnJS}=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}}" };

export const useEndVisible = (scroll) => {
  let closure_5;
  scroll = scroll.scroll;
  const layout = scroll.layout;
  size = scroll.size;
  const inverted = scroll.inverted;
  const onEndVisible = scroll.onEndVisible;
  const items = [onEndVisible];
  let tmp = size(() => {
    let __workletHash = typeof onEndVisible === "function";
    if (typeof onEndVisible === "function") {
      __workletHash = onEndVisible.__workletHash;
    }
    return __workletHash;
  }, items);
  __initData = tmp;
  let obj = scroll(layout[1]);
  const fn = function v() {
    let isScrollAtEndResult = null;
    if (0 !== layout.value.height) {
      isScrollAtEndResult = null;
      if (0 !== size.value.height) {
        const obj = _mod1873;
        isScrollAtEndResult = obj.isScrollAtEnd(scroll.value, iter.value.height, iter2.value.height, inverted);
      }
    }
    return isScrollAtEndResult;
  };
  fn.__closure = { layout, size, isScrollAtEnd: scroll(layout[2]).isScrollAtEnd, scroll, inverted };
  fn.__workletHash = 9190864194226;
  fn.__initData = inverted;
  ({ layout, size, isScrollAtEnd: scroll(layout[2]).isScrollAtEnd, scroll, inverted });
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function f() {
    return derivedValue.value;
  };
  fn2.__closure = { isAtEnd: derivedValue };
  fn2.__workletHash = 3323533137377;
  fn2.__initData = onEndVisible;
  const obj3 = scroll(layout[1]);
  class E {
    constructor(arg0, arg1) {
      const tmp = null !== arg0 && arg0 !== arg1 && onEndVisible;
      if (tmp) {
        if (closure_5) {
          onEndVisible(arg0);
        } else {
          const obj = _mod1643;
          obj.runOnJS(onEndVisible)(arg0);
        }
      }
    }
  }
  E.__closure = { onEndVisible, isWorklet: tmp, runOnJS: scroll(layout[1]).runOnJS };
  E.__workletHash = 2507987378306;
  E.__initData = __initData;
  const items1 = [onEndVisible, tmp, inverted];
  ({ onEndVisible, isWorklet: tmp, runOnJS: scroll(layout[1]).runOnJS });
  const animatedReaction = obj3.useAnimatedReaction(fn2, E, items1);
};