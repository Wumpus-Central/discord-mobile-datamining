// === Module 1869: ? ===

// Module 1869
import _mod19 from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1636 */;
import _mod1866 from "module_1866" /* 1866 */;

const useMemo = _mod19.useMemo;
let closure_3 = { code: "function pnpm_useEndVisibleTs1(){const{layout,size,isScrollAtEnd,scroll,inverted}=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);}" };
let closure_4 = { code: "function pnpm_useEndVisibleTs2(){const{isAtEnd}=this.__closure;return isAtEnd.value;}" };
let __initData = { code: "function pnpm_useEndVisibleTs3(current,previous){const{onEndVisible,isWorklet,runOnJS}=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}}" };

export const useEndVisible = (scroll) => {
  scroll = scroll.scroll;
  const layout = scroll.layout;
  const size = scroll.size;
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
  scroll(layout[1]);
  const fn = function v() {
    let isScrollAtEndResult = null;
    if (0 !== layout.value.height) {
      isScrollAtEndResult = null;
      if (0 !== size.value.height) {
        const obj = _mod1866;
        isScrollAtEndResult = obj.isScrollAtEnd(scroll.value, iter.value.height, iter2.value.height, inverted);
      }
    }
    return isScrollAtEndResult;
  };
  let obj = { layout, size, isScrollAtEnd: scroll(layout[2]).isScrollAtEnd, scroll, inverted };
  fn.__closure = obj;
  fn.__workletHash = 9190864194226;
  fn.__initData = inverted;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function f() {
    return derivedValue.value;
  };
  fn2.__closure = { isAtEnd: derivedValue };
  fn2.__workletHash = 3323533137377;
  fn2.__initData = onEndVisible;
  class E {
    constructor(arg0, arg1) {
      tmp = null !== scroll;
      if (tmp) {
        tmp2 = arg1;
        tmp = scroll !== arg1;
      }
      if (tmp) {
        tmp = onEndVisible;
      }
      if (tmp) {
        tmp3 = closure_5;
        if (closure_5) {
          tmp8 = onEndVisible;
          tmp9 = onEndVisible(scroll);
        } else {
          tmp4 = closure_0;
          tmp5 = closure_1;
          obj = closure_0(closure_1[1]);
          tmp6 = onEndVisible;
          tmp7 = obj.runOnJS(onEndVisible)(scroll);
        }
      }
      return;
    }
  }
  obj = { onEndVisible, isWorklet: tmp, runOnJS: scroll(layout[1]).runOnJS };
  E.__closure = obj;
  E.__workletHash = 2507987378306;
  E.__initData = __initData;
  const items1 = [onEndVisible, tmp, inverted];
  const animatedReaction = scroll(layout[1]).useAnimatedReaction(fn2, E, items1);
};