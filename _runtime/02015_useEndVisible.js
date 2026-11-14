// === Module 2015: useEndVisible ===

// Module 2015 (useEndVisible)
import _mod19 from "module_19" /* 19 */;
import _mod1655 from "module_1655" /* 1655 */;
import helpers from "helpers" /* 2012 */;

const useMemo = _mod19.useMemo;
let closure_3 = { code: "(function pnpm_useEndVisibleTs1(){let[layout,size,isScrollAtEnd,scroll,inverted]=this.__closure;if(layout.value.height===0||size.value.height===0){return null;}return isScrollAtEnd(scroll.value,layout.value.height,size.value.height,inverted);})" };
let closure_4 = { code: "(function pnpm_useEndVisibleTs2(){let[isAtEnd]=this.__closure;return isAtEnd.value;})" };
let closure_5 = { code: "(function pnpm_useEndVisibleTs3(current,previous){let[onEndVisible,isWorklet,runOnJS]=this.__closure;if(current===null||current===previous||!onEndVisible){return;}if(isWorklet){onEndVisible(current);}else{runOnJS(onEndVisible)(current);}})" };

export (arg0) => {
  ({ inverted, onEndVisible } = arg0);
  items = [onEndVisible];
  ({ scroll, layout, size } = arg0);
  let tmp = useMemo(() => {
    let __workletHash = typeof _undefined === "function";
    if (typeof _undefined === "function") {
      __workletHash = _undefined.__workletHash;
    }
    return __workletHash;
  }, items);
  const items1 = [_undefined4, layout, size, helpers.isScrollAtEnd, scroll, inverted];
  c3 = undefined;
  c4 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items1;
  function pnpm_useEndVisibleTs1() {
    let tmp = null;
    if (0 !== _undefined.value.height) {
      tmp = null;
      if (0 !== _undefined2.value.height) {
        tmp = _undefined3(_undefined4.value, iter.value.height, iter2.value.height, c4);
      }
    }
    return tmp;
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_useEndVisibleTs1.__closure = items2;
  pnpm_useEndVisibleTs1.__workletHash = 13066692471115;
  pnpm_useEndVisibleTs1.__initData = tmp4;
  const derivedValue = _mod1655.useDerivedValue(pnpm_useEndVisibleTs1);
  const items3 = [closure_4, derivedValue];
  [tmp11, tmp12] = items3;
  function pnpm_useEndVisibleTs2() {
    return _undefined.value;
  }
  const items4 = [tmp12];
  pnpm_useEndVisibleTs2.__closure = items4;
  pnpm_useEndVisibleTs2.__workletHash = 15821756952792;
  pnpm_useEndVisibleTs2.__initData = tmp11;
  const items5 = [closure_5, onEndVisible, tmp, _mod1655.runOnJS];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items5;
  function pnpm_useEndVisibleTs3(arg0, arg1) {
    let tmp = null !== arg0;
    if (tmp) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      tmp = _undefined;
    }
    if (tmp) {
      if (c1) {
        _undefined(arg0);
      } else {
        _undefined3(_undefined)(arg0);
      }
    }
  }
  const items6 = [tmp14, tmp15, tmp16];
  pnpm_useEndVisibleTs3.__closure = items6;
  pnpm_useEndVisibleTs3.__workletHash = 9628833936027;
  pnpm_useEndVisibleTs3.__initData = tmp13;
  const items7 = [onEndVisible, tmp, inverted];
  const animatedReaction = _mod1655.useAnimatedReaction(pnpm_useEndVisibleTs2, pnpm_useEndVisibleTs3, items7);
  const tmp2Result = _mod1655;
}